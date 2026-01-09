import os
import sys
import uuid
import torch
import modal
import torchaudio
import io
from chatterbox.tts import ChatterboxTTS
from pydantic import BaseModel
from typing import Optional




app = modal.App("chatterbox-text-to-speech-generator")

image = (
    modal.Image.debian_slim(python_version="3.11.9")
    .pip_install_from_requirements("text-to-speech/requirements.txt")
    .apt_install("ffmpeg")
)

volume = modal.Volume.from_name("hf-cache-chatterbox", create_if_missing=True)

s3_secrets=modal.Secret.from_name("aws-secret")

class TextToSpeechRequest(BaseModel):
    text : str
    voice_s3_key: Optional[str]= None


class TextToSpeechResponse(BaseModel):
    s3_key: str


@app.cls(
    image=image,
    gpu="L40S",
    volumes={
        "/root/.cache/huggingface": volume,
        "/s3-mount": modal.CloudBucketMount(
            "hey-gen-buckets-dan",
            secret=s3_secrets
        )
    },
    scaledown_window=120,
    secrets=[s3_secrets]
)
class TextToSpeechServer:

    @modal.enter()
    def load_model(self):
        print("Loading Chatterbox model...")
        self.model = ChatterboxTTS.from_pretrained(device="cuda")
        print("Model loaded successfully.")

    @modal.fastapi_endpoint(method="POST", requires_proxy_auth=True)
    def generate_speech(self, request: TextToSpeechRequest) -> TextToSpeechResponse:
        print(f"Received request to generate audio: {request.text}")

        with torch.no_grad():
            if request.voice_s3_key:
                audio_prompt_path = f"/s3-mount/{request.voice_s3_key}"
                if not os.path.exists(audio_prompt_path):
                    raise FileNotFoundError(f"Prompt audio not found: {audio_prompt_path}")
                wav = self.model.generate(
                    request.text,
                    audio_prompt_path=audio_prompt_path
                )
            else:
                wav = self.model.generate(request.text)

            wav_cpu = wav.cpu()

        buffer = io.BytesIO()
        torchaudio.save(buffer, wav_cpu, self.model.sr, format="wav")
        buffer.seek(0)

        audio_uuid = str(uuid.uuid4())
        s3_key = f"tts/{audio_uuid}.wav"
        s3_path = f"/s3-mount/{s3_key}"

        os.makedirs(os.path.dirname(s3_path), exist_ok=True)
        with open(s3_path, "wb") as f:
            f.write(buffer.read())

        print(f"Saved audio to S3: {s3_key}")
        return TextToSpeechResponse(s3_key=s3_key)





@app.local_entrypoint()
def main():
    import requests

    server = TextToSpeechServer()
    endpoint_url = server.generate_speech.get_web_url()

    payload = {
        "text": "Hello from Modal! This is Chatterbox TTS dannybobo is a goat and dog.",
        "voice_s3_key": "samples/voices/1.wav"
    }
    headers = {
        "Modal-Key": "wk-bpIFN3Jctke2AN6aJXh8Qx",
        "Modal-Secret": "ws-WzjqPFqFpMVjyw9KDMEFdO"
    }

    response = requests.post(endpoint_url, json=payload, headers=headers)
    response.raise_for_status()

    print("Response:", response.json())

