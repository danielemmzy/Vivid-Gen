
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PhotoToVideoGeneration
 * 
 */
export type PhotoToVideoGeneration = $Result.DefaultSelection<Prisma.$PhotoToVideoGenerationPayload>
/**
 * Model VideoTranslationGeneration
 * 
 */
export type VideoTranslationGeneration = $Result.DefaultSelection<Prisma.$VideoTranslationGenerationPayload>
/**
 * Model ChangeVideoAudioGeneration
 * 
 */
export type ChangeVideoAudioGeneration = $Result.DefaultSelection<Prisma.$ChangeVideoAudioGenerationPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoToVideoGeneration`: Exposes CRUD operations for the **PhotoToVideoGeneration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoToVideoGenerations
    * const photoToVideoGenerations = await prisma.photoToVideoGeneration.findMany()
    * ```
    */
  get photoToVideoGeneration(): Prisma.PhotoToVideoGenerationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoTranslationGeneration`: Exposes CRUD operations for the **VideoTranslationGeneration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoTranslationGenerations
    * const videoTranslationGenerations = await prisma.videoTranslationGeneration.findMany()
    * ```
    */
  get videoTranslationGeneration(): Prisma.VideoTranslationGenerationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.changeVideoAudioGeneration`: Exposes CRUD operations for the **ChangeVideoAudioGeneration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChangeVideoAudioGenerations
    * const changeVideoAudioGenerations = await prisma.changeVideoAudioGeneration.findMany()
    * ```
    */
  get changeVideoAudioGeneration(): Prisma.ChangeVideoAudioGenerationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PhotoToVideoGeneration: 'PhotoToVideoGeneration',
    VideoTranslationGeneration: 'VideoTranslationGeneration',
    ChangeVideoAudioGeneration: 'ChangeVideoAudioGeneration',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "photoToVideoGeneration" | "videoTranslationGeneration" | "changeVideoAudioGeneration" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PhotoToVideoGeneration: {
        payload: Prisma.$PhotoToVideoGenerationPayload<ExtArgs>
        fields: Prisma.PhotoToVideoGenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoToVideoGenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoToVideoGenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload>
          }
          findFirst: {
            args: Prisma.PhotoToVideoGenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoToVideoGenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload>
          }
          findMany: {
            args: Prisma.PhotoToVideoGenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload>[]
          }
          create: {
            args: Prisma.PhotoToVideoGenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload>
          }
          createMany: {
            args: Prisma.PhotoToVideoGenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoToVideoGenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload>[]
          }
          delete: {
            args: Prisma.PhotoToVideoGenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload>
          }
          update: {
            args: Prisma.PhotoToVideoGenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload>
          }
          deleteMany: {
            args: Prisma.PhotoToVideoGenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoToVideoGenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoToVideoGenerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload>[]
          }
          upsert: {
            args: Prisma.PhotoToVideoGenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoToVideoGenerationPayload>
          }
          aggregate: {
            args: Prisma.PhotoToVideoGenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoToVideoGeneration>
          }
          groupBy: {
            args: Prisma.PhotoToVideoGenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoToVideoGenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoToVideoGenerationCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoToVideoGenerationCountAggregateOutputType> | number
          }
        }
      }
      VideoTranslationGeneration: {
        payload: Prisma.$VideoTranslationGenerationPayload<ExtArgs>
        fields: Prisma.VideoTranslationGenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoTranslationGenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoTranslationGenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload>
          }
          findFirst: {
            args: Prisma.VideoTranslationGenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoTranslationGenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload>
          }
          findMany: {
            args: Prisma.VideoTranslationGenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload>[]
          }
          create: {
            args: Prisma.VideoTranslationGenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload>
          }
          createMany: {
            args: Prisma.VideoTranslationGenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoTranslationGenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload>[]
          }
          delete: {
            args: Prisma.VideoTranslationGenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload>
          }
          update: {
            args: Prisma.VideoTranslationGenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload>
          }
          deleteMany: {
            args: Prisma.VideoTranslationGenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoTranslationGenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoTranslationGenerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload>[]
          }
          upsert: {
            args: Prisma.VideoTranslationGenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoTranslationGenerationPayload>
          }
          aggregate: {
            args: Prisma.VideoTranslationGenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoTranslationGeneration>
          }
          groupBy: {
            args: Prisma.VideoTranslationGenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoTranslationGenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoTranslationGenerationCountArgs<ExtArgs>
            result: $Utils.Optional<VideoTranslationGenerationCountAggregateOutputType> | number
          }
        }
      }
      ChangeVideoAudioGeneration: {
        payload: Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>
        fields: Prisma.ChangeVideoAudioGenerationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChangeVideoAudioGenerationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChangeVideoAudioGenerationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload>
          }
          findFirst: {
            args: Prisma.ChangeVideoAudioGenerationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChangeVideoAudioGenerationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload>
          }
          findMany: {
            args: Prisma.ChangeVideoAudioGenerationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload>[]
          }
          create: {
            args: Prisma.ChangeVideoAudioGenerationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload>
          }
          createMany: {
            args: Prisma.ChangeVideoAudioGenerationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChangeVideoAudioGenerationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload>[]
          }
          delete: {
            args: Prisma.ChangeVideoAudioGenerationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload>
          }
          update: {
            args: Prisma.ChangeVideoAudioGenerationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload>
          }
          deleteMany: {
            args: Prisma.ChangeVideoAudioGenerationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChangeVideoAudioGenerationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChangeVideoAudioGenerationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload>[]
          }
          upsert: {
            args: Prisma.ChangeVideoAudioGenerationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChangeVideoAudioGenerationPayload>
          }
          aggregate: {
            args: Prisma.ChangeVideoAudioGenerationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChangeVideoAudioGeneration>
          }
          groupBy: {
            args: Prisma.ChangeVideoAudioGenerationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChangeVideoAudioGenerationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChangeVideoAudioGenerationCountArgs<ExtArgs>
            result: $Utils.Optional<ChangeVideoAudioGenerationCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    photoToVideoGeneration?: PhotoToVideoGenerationOmit
    videoTranslationGeneration?: VideoTranslationGenerationOmit
    changeVideoAudioGeneration?: ChangeVideoAudioGenerationOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    photoToVideoGenerations: number
    videoTranslationGenerations: number
    changeVideoAudioGenerations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    photoToVideoGenerations?: boolean | UserCountOutputTypeCountPhotoToVideoGenerationsArgs
    videoTranslationGenerations?: boolean | UserCountOutputTypeCountVideoTranslationGenerationsArgs
    changeVideoAudioGenerations?: boolean | UserCountOutputTypeCountChangeVideoAudioGenerationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPhotoToVideoGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoToVideoGenerationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVideoTranslationGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoTranslationGenerationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChangeVideoAudioGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChangeVideoAudioGenerationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    credits: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    credits: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    credits: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    credits: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    credits?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    credits?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    credits?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    credits: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credits?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    photoToVideoGenerations?: boolean | User$photoToVideoGenerationsArgs<ExtArgs>
    videoTranslationGenerations?: boolean | User$videoTranslationGenerationsArgs<ExtArgs>
    changeVideoAudioGenerations?: boolean | User$changeVideoAudioGenerationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credits?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credits?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credits?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt" | "credits", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    photoToVideoGenerations?: boolean | User$photoToVideoGenerationsArgs<ExtArgs>
    videoTranslationGenerations?: boolean | User$videoTranslationGenerationsArgs<ExtArgs>
    changeVideoAudioGenerations?: boolean | User$changeVideoAudioGenerationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      photoToVideoGenerations: Prisma.$PhotoToVideoGenerationPayload<ExtArgs>[]
      videoTranslationGenerations: Prisma.$VideoTranslationGenerationPayload<ExtArgs>[]
      changeVideoAudioGenerations: Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
      credits: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photoToVideoGenerations<T extends User$photoToVideoGenerationsArgs<ExtArgs> = {}>(args?: Subset<T, User$photoToVideoGenerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    videoTranslationGenerations<T extends User$videoTranslationGenerationsArgs<ExtArgs> = {}>(args?: Subset<T, User$videoTranslationGenerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    changeVideoAudioGenerations<T extends User$changeVideoAudioGenerationsArgs<ExtArgs> = {}>(args?: Subset<T, User$changeVideoAudioGenerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly credits: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.photoToVideoGenerations
   */
  export type User$photoToVideoGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    where?: PhotoToVideoGenerationWhereInput
    orderBy?: PhotoToVideoGenerationOrderByWithRelationInput | PhotoToVideoGenerationOrderByWithRelationInput[]
    cursor?: PhotoToVideoGenerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoToVideoGenerationScalarFieldEnum | PhotoToVideoGenerationScalarFieldEnum[]
  }

  /**
   * User.videoTranslationGenerations
   */
  export type User$videoTranslationGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    where?: VideoTranslationGenerationWhereInput
    orderBy?: VideoTranslationGenerationOrderByWithRelationInput | VideoTranslationGenerationOrderByWithRelationInput[]
    cursor?: VideoTranslationGenerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VideoTranslationGenerationScalarFieldEnum | VideoTranslationGenerationScalarFieldEnum[]
  }

  /**
   * User.changeVideoAudioGenerations
   */
  export type User$changeVideoAudioGenerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    where?: ChangeVideoAudioGenerationWhereInput
    orderBy?: ChangeVideoAudioGenerationOrderByWithRelationInput | ChangeVideoAudioGenerationOrderByWithRelationInput[]
    cursor?: ChangeVideoAudioGenerationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChangeVideoAudioGenerationScalarFieldEnum | ChangeVideoAudioGenerationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PhotoToVideoGeneration
   */

  export type AggregatePhotoToVideoGeneration = {
    _count: PhotoToVideoGenerationCountAggregateOutputType | null
    _avg: PhotoToVideoGenerationAvgAggregateOutputType | null
    _sum: PhotoToVideoGenerationSumAggregateOutputType | null
    _min: PhotoToVideoGenerationMinAggregateOutputType | null
    _max: PhotoToVideoGenerationMaxAggregateOutputType | null
  }

  export type PhotoToVideoGenerationAvgAggregateOutputType = {
    expressiveness: number | null
  }

  export type PhotoToVideoGenerationSumAggregateOutputType = {
    expressiveness: number | null
  }

  export type PhotoToVideoGenerationMinAggregateOutputType = {
    id: string | null
    name: string | null
    photoS3Key: string | null
    script: string | null
    drivingAudioS3Key: string | null
    voiceS3Key: string | null
    expressiveness: number | null
    enhancement: boolean | null
    experimentalModel: boolean | null
    resolution: string | null
    videoS3Key: string | null
    status: string | null
    falJobId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type PhotoToVideoGenerationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    photoS3Key: string | null
    script: string | null
    drivingAudioS3Key: string | null
    voiceS3Key: string | null
    expressiveness: number | null
    enhancement: boolean | null
    experimentalModel: boolean | null
    resolution: string | null
    videoS3Key: string | null
    status: string | null
    falJobId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type PhotoToVideoGenerationCountAggregateOutputType = {
    id: number
    name: number
    photoS3Key: number
    script: number
    drivingAudioS3Key: number
    voiceS3Key: number
    expressiveness: number
    enhancement: number
    experimentalModel: number
    resolution: number
    videoS3Key: number
    status: number
    falJobId: number
    createdAt: number
    userId: number
    _all: number
  }


  export type PhotoToVideoGenerationAvgAggregateInputType = {
    expressiveness?: true
  }

  export type PhotoToVideoGenerationSumAggregateInputType = {
    expressiveness?: true
  }

  export type PhotoToVideoGenerationMinAggregateInputType = {
    id?: true
    name?: true
    photoS3Key?: true
    script?: true
    drivingAudioS3Key?: true
    voiceS3Key?: true
    expressiveness?: true
    enhancement?: true
    experimentalModel?: true
    resolution?: true
    videoS3Key?: true
    status?: true
    falJobId?: true
    createdAt?: true
    userId?: true
  }

  export type PhotoToVideoGenerationMaxAggregateInputType = {
    id?: true
    name?: true
    photoS3Key?: true
    script?: true
    drivingAudioS3Key?: true
    voiceS3Key?: true
    expressiveness?: true
    enhancement?: true
    experimentalModel?: true
    resolution?: true
    videoS3Key?: true
    status?: true
    falJobId?: true
    createdAt?: true
    userId?: true
  }

  export type PhotoToVideoGenerationCountAggregateInputType = {
    id?: true
    name?: true
    photoS3Key?: true
    script?: true
    drivingAudioS3Key?: true
    voiceS3Key?: true
    expressiveness?: true
    enhancement?: true
    experimentalModel?: true
    resolution?: true
    videoS3Key?: true
    status?: true
    falJobId?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type PhotoToVideoGenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoToVideoGeneration to aggregate.
     */
    where?: PhotoToVideoGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoToVideoGenerations to fetch.
     */
    orderBy?: PhotoToVideoGenerationOrderByWithRelationInput | PhotoToVideoGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoToVideoGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoToVideoGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoToVideoGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoToVideoGenerations
    **/
    _count?: true | PhotoToVideoGenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoToVideoGenerationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoToVideoGenerationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoToVideoGenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoToVideoGenerationMaxAggregateInputType
  }

  export type GetPhotoToVideoGenerationAggregateType<T extends PhotoToVideoGenerationAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoToVideoGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoToVideoGeneration[P]>
      : GetScalarType<T[P], AggregatePhotoToVideoGeneration[P]>
  }




  export type PhotoToVideoGenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoToVideoGenerationWhereInput
    orderBy?: PhotoToVideoGenerationOrderByWithAggregationInput | PhotoToVideoGenerationOrderByWithAggregationInput[]
    by: PhotoToVideoGenerationScalarFieldEnum[] | PhotoToVideoGenerationScalarFieldEnum
    having?: PhotoToVideoGenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoToVideoGenerationCountAggregateInputType | true
    _avg?: PhotoToVideoGenerationAvgAggregateInputType
    _sum?: PhotoToVideoGenerationSumAggregateInputType
    _min?: PhotoToVideoGenerationMinAggregateInputType
    _max?: PhotoToVideoGenerationMaxAggregateInputType
  }

  export type PhotoToVideoGenerationGroupByOutputType = {
    id: string
    name: string
    photoS3Key: string | null
    script: string | null
    drivingAudioS3Key: string | null
    voiceS3Key: string | null
    expressiveness: number | null
    enhancement: boolean
    experimentalModel: boolean
    resolution: string | null
    videoS3Key: string | null
    status: string
    falJobId: string | null
    createdAt: Date
    userId: string
    _count: PhotoToVideoGenerationCountAggregateOutputType | null
    _avg: PhotoToVideoGenerationAvgAggregateOutputType | null
    _sum: PhotoToVideoGenerationSumAggregateOutputType | null
    _min: PhotoToVideoGenerationMinAggregateOutputType | null
    _max: PhotoToVideoGenerationMaxAggregateOutputType | null
  }

  type GetPhotoToVideoGenerationGroupByPayload<T extends PhotoToVideoGenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoToVideoGenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoToVideoGenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoToVideoGenerationGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoToVideoGenerationGroupByOutputType[P]>
        }
      >
    >


  export type PhotoToVideoGenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoS3Key?: boolean
    script?: boolean
    drivingAudioS3Key?: boolean
    voiceS3Key?: boolean
    expressiveness?: boolean
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoToVideoGeneration"]>

  export type PhotoToVideoGenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoS3Key?: boolean
    script?: boolean
    drivingAudioS3Key?: boolean
    voiceS3Key?: boolean
    expressiveness?: boolean
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoToVideoGeneration"]>

  export type PhotoToVideoGenerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photoS3Key?: boolean
    script?: boolean
    drivingAudioS3Key?: boolean
    voiceS3Key?: boolean
    expressiveness?: boolean
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoToVideoGeneration"]>

  export type PhotoToVideoGenerationSelectScalar = {
    id?: boolean
    name?: boolean
    photoS3Key?: boolean
    script?: boolean
    drivingAudioS3Key?: boolean
    voiceS3Key?: boolean
    expressiveness?: boolean
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type PhotoToVideoGenerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "photoS3Key" | "script" | "drivingAudioS3Key" | "voiceS3Key" | "expressiveness" | "enhancement" | "experimentalModel" | "resolution" | "videoS3Key" | "status" | "falJobId" | "createdAt" | "userId", ExtArgs["result"]["photoToVideoGeneration"]>
  export type PhotoToVideoGenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhotoToVideoGenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PhotoToVideoGenerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PhotoToVideoGenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoToVideoGeneration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      photoS3Key: string | null
      script: string | null
      drivingAudioS3Key: string | null
      voiceS3Key: string | null
      expressiveness: number | null
      enhancement: boolean
      experimentalModel: boolean
      resolution: string | null
      videoS3Key: string | null
      status: string
      falJobId: string | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["photoToVideoGeneration"]>
    composites: {}
  }

  type PhotoToVideoGenerationGetPayload<S extends boolean | null | undefined | PhotoToVideoGenerationDefaultArgs> = $Result.GetResult<Prisma.$PhotoToVideoGenerationPayload, S>

  type PhotoToVideoGenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoToVideoGenerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoToVideoGenerationCountAggregateInputType | true
    }

  export interface PhotoToVideoGenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoToVideoGeneration'], meta: { name: 'PhotoToVideoGeneration' } }
    /**
     * Find zero or one PhotoToVideoGeneration that matches the filter.
     * @param {PhotoToVideoGenerationFindUniqueArgs} args - Arguments to find a PhotoToVideoGeneration
     * @example
     * // Get one PhotoToVideoGeneration
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoToVideoGenerationFindUniqueArgs>(args: SelectSubset<T, PhotoToVideoGenerationFindUniqueArgs<ExtArgs>>): Prisma__PhotoToVideoGenerationClient<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoToVideoGeneration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoToVideoGenerationFindUniqueOrThrowArgs} args - Arguments to find a PhotoToVideoGeneration
     * @example
     * // Get one PhotoToVideoGeneration
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoToVideoGenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoToVideoGenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoToVideoGenerationClient<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoToVideoGeneration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoToVideoGenerationFindFirstArgs} args - Arguments to find a PhotoToVideoGeneration
     * @example
     * // Get one PhotoToVideoGeneration
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoToVideoGenerationFindFirstArgs>(args?: SelectSubset<T, PhotoToVideoGenerationFindFirstArgs<ExtArgs>>): Prisma__PhotoToVideoGenerationClient<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoToVideoGeneration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoToVideoGenerationFindFirstOrThrowArgs} args - Arguments to find a PhotoToVideoGeneration
     * @example
     * // Get one PhotoToVideoGeneration
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoToVideoGenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoToVideoGenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoToVideoGenerationClient<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoToVideoGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoToVideoGenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoToVideoGenerations
     * const photoToVideoGenerations = await prisma.photoToVideoGeneration.findMany()
     * 
     * // Get first 10 PhotoToVideoGenerations
     * const photoToVideoGenerations = await prisma.photoToVideoGeneration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoToVideoGenerationWithIdOnly = await prisma.photoToVideoGeneration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoToVideoGenerationFindManyArgs>(args?: SelectSubset<T, PhotoToVideoGenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoToVideoGeneration.
     * @param {PhotoToVideoGenerationCreateArgs} args - Arguments to create a PhotoToVideoGeneration.
     * @example
     * // Create one PhotoToVideoGeneration
     * const PhotoToVideoGeneration = await prisma.photoToVideoGeneration.create({
     *   data: {
     *     // ... data to create a PhotoToVideoGeneration
     *   }
     * })
     * 
     */
    create<T extends PhotoToVideoGenerationCreateArgs>(args: SelectSubset<T, PhotoToVideoGenerationCreateArgs<ExtArgs>>): Prisma__PhotoToVideoGenerationClient<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoToVideoGenerations.
     * @param {PhotoToVideoGenerationCreateManyArgs} args - Arguments to create many PhotoToVideoGenerations.
     * @example
     * // Create many PhotoToVideoGenerations
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoToVideoGenerationCreateManyArgs>(args?: SelectSubset<T, PhotoToVideoGenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhotoToVideoGenerations and returns the data saved in the database.
     * @param {PhotoToVideoGenerationCreateManyAndReturnArgs} args - Arguments to create many PhotoToVideoGenerations.
     * @example
     * // Create many PhotoToVideoGenerations
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhotoToVideoGenerations and only return the `id`
     * const photoToVideoGenerationWithIdOnly = await prisma.photoToVideoGeneration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoToVideoGenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoToVideoGenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhotoToVideoGeneration.
     * @param {PhotoToVideoGenerationDeleteArgs} args - Arguments to delete one PhotoToVideoGeneration.
     * @example
     * // Delete one PhotoToVideoGeneration
     * const PhotoToVideoGeneration = await prisma.photoToVideoGeneration.delete({
     *   where: {
     *     // ... filter to delete one PhotoToVideoGeneration
     *   }
     * })
     * 
     */
    delete<T extends PhotoToVideoGenerationDeleteArgs>(args: SelectSubset<T, PhotoToVideoGenerationDeleteArgs<ExtArgs>>): Prisma__PhotoToVideoGenerationClient<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoToVideoGeneration.
     * @param {PhotoToVideoGenerationUpdateArgs} args - Arguments to update one PhotoToVideoGeneration.
     * @example
     * // Update one PhotoToVideoGeneration
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoToVideoGenerationUpdateArgs>(args: SelectSubset<T, PhotoToVideoGenerationUpdateArgs<ExtArgs>>): Prisma__PhotoToVideoGenerationClient<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoToVideoGenerations.
     * @param {PhotoToVideoGenerationDeleteManyArgs} args - Arguments to filter PhotoToVideoGenerations to delete.
     * @example
     * // Delete a few PhotoToVideoGenerations
     * const { count } = await prisma.photoToVideoGeneration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoToVideoGenerationDeleteManyArgs>(args?: SelectSubset<T, PhotoToVideoGenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoToVideoGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoToVideoGenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoToVideoGenerations
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoToVideoGenerationUpdateManyArgs>(args: SelectSubset<T, PhotoToVideoGenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoToVideoGenerations and returns the data updated in the database.
     * @param {PhotoToVideoGenerationUpdateManyAndReturnArgs} args - Arguments to update many PhotoToVideoGenerations.
     * @example
     * // Update many PhotoToVideoGenerations
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhotoToVideoGenerations and only return the `id`
     * const photoToVideoGenerationWithIdOnly = await prisma.photoToVideoGeneration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotoToVideoGenerationUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoToVideoGenerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhotoToVideoGeneration.
     * @param {PhotoToVideoGenerationUpsertArgs} args - Arguments to update or create a PhotoToVideoGeneration.
     * @example
     * // Update or create a PhotoToVideoGeneration
     * const photoToVideoGeneration = await prisma.photoToVideoGeneration.upsert({
     *   create: {
     *     // ... data to create a PhotoToVideoGeneration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoToVideoGeneration we want to update
     *   }
     * })
     */
    upsert<T extends PhotoToVideoGenerationUpsertArgs>(args: SelectSubset<T, PhotoToVideoGenerationUpsertArgs<ExtArgs>>): Prisma__PhotoToVideoGenerationClient<$Result.GetResult<Prisma.$PhotoToVideoGenerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoToVideoGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoToVideoGenerationCountArgs} args - Arguments to filter PhotoToVideoGenerations to count.
     * @example
     * // Count the number of PhotoToVideoGenerations
     * const count = await prisma.photoToVideoGeneration.count({
     *   where: {
     *     // ... the filter for the PhotoToVideoGenerations we want to count
     *   }
     * })
    **/
    count<T extends PhotoToVideoGenerationCountArgs>(
      args?: Subset<T, PhotoToVideoGenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoToVideoGenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoToVideoGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoToVideoGenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoToVideoGenerationAggregateArgs>(args: Subset<T, PhotoToVideoGenerationAggregateArgs>): Prisma.PrismaPromise<GetPhotoToVideoGenerationAggregateType<T>>

    /**
     * Group by PhotoToVideoGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoToVideoGenerationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoToVideoGenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoToVideoGenerationGroupByArgs['orderBy'] }
        : { orderBy?: PhotoToVideoGenerationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoToVideoGenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoToVideoGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoToVideoGeneration model
   */
  readonly fields: PhotoToVideoGenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoToVideoGeneration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoToVideoGenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhotoToVideoGeneration model
   */
  interface PhotoToVideoGenerationFieldRefs {
    readonly id: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly name: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly photoS3Key: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly script: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly drivingAudioS3Key: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly voiceS3Key: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly expressiveness: FieldRef<"PhotoToVideoGeneration", 'Float'>
    readonly enhancement: FieldRef<"PhotoToVideoGeneration", 'Boolean'>
    readonly experimentalModel: FieldRef<"PhotoToVideoGeneration", 'Boolean'>
    readonly resolution: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly videoS3Key: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly status: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly falJobId: FieldRef<"PhotoToVideoGeneration", 'String'>
    readonly createdAt: FieldRef<"PhotoToVideoGeneration", 'DateTime'>
    readonly userId: FieldRef<"PhotoToVideoGeneration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PhotoToVideoGeneration findUnique
   */
  export type PhotoToVideoGenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoToVideoGeneration to fetch.
     */
    where: PhotoToVideoGenerationWhereUniqueInput
  }

  /**
   * PhotoToVideoGeneration findUniqueOrThrow
   */
  export type PhotoToVideoGenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoToVideoGeneration to fetch.
     */
    where: PhotoToVideoGenerationWhereUniqueInput
  }

  /**
   * PhotoToVideoGeneration findFirst
   */
  export type PhotoToVideoGenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoToVideoGeneration to fetch.
     */
    where?: PhotoToVideoGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoToVideoGenerations to fetch.
     */
    orderBy?: PhotoToVideoGenerationOrderByWithRelationInput | PhotoToVideoGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoToVideoGenerations.
     */
    cursor?: PhotoToVideoGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoToVideoGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoToVideoGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoToVideoGenerations.
     */
    distinct?: PhotoToVideoGenerationScalarFieldEnum | PhotoToVideoGenerationScalarFieldEnum[]
  }

  /**
   * PhotoToVideoGeneration findFirstOrThrow
   */
  export type PhotoToVideoGenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoToVideoGeneration to fetch.
     */
    where?: PhotoToVideoGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoToVideoGenerations to fetch.
     */
    orderBy?: PhotoToVideoGenerationOrderByWithRelationInput | PhotoToVideoGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoToVideoGenerations.
     */
    cursor?: PhotoToVideoGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoToVideoGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoToVideoGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoToVideoGenerations.
     */
    distinct?: PhotoToVideoGenerationScalarFieldEnum | PhotoToVideoGenerationScalarFieldEnum[]
  }

  /**
   * PhotoToVideoGeneration findMany
   */
  export type PhotoToVideoGenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoToVideoGenerations to fetch.
     */
    where?: PhotoToVideoGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoToVideoGenerations to fetch.
     */
    orderBy?: PhotoToVideoGenerationOrderByWithRelationInput | PhotoToVideoGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoToVideoGenerations.
     */
    cursor?: PhotoToVideoGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoToVideoGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoToVideoGenerations.
     */
    skip?: number
    distinct?: PhotoToVideoGenerationScalarFieldEnum | PhotoToVideoGenerationScalarFieldEnum[]
  }

  /**
   * PhotoToVideoGeneration create
   */
  export type PhotoToVideoGenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoToVideoGeneration.
     */
    data: XOR<PhotoToVideoGenerationCreateInput, PhotoToVideoGenerationUncheckedCreateInput>
  }

  /**
   * PhotoToVideoGeneration createMany
   */
  export type PhotoToVideoGenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoToVideoGenerations.
     */
    data: PhotoToVideoGenerationCreateManyInput | PhotoToVideoGenerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoToVideoGeneration createManyAndReturn
   */
  export type PhotoToVideoGenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * The data used to create many PhotoToVideoGenerations.
     */
    data: PhotoToVideoGenerationCreateManyInput | PhotoToVideoGenerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoToVideoGeneration update
   */
  export type PhotoToVideoGenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoToVideoGeneration.
     */
    data: XOR<PhotoToVideoGenerationUpdateInput, PhotoToVideoGenerationUncheckedUpdateInput>
    /**
     * Choose, which PhotoToVideoGeneration to update.
     */
    where: PhotoToVideoGenerationWhereUniqueInput
  }

  /**
   * PhotoToVideoGeneration updateMany
   */
  export type PhotoToVideoGenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoToVideoGenerations.
     */
    data: XOR<PhotoToVideoGenerationUpdateManyMutationInput, PhotoToVideoGenerationUncheckedUpdateManyInput>
    /**
     * Filter which PhotoToVideoGenerations to update
     */
    where?: PhotoToVideoGenerationWhereInput
    /**
     * Limit how many PhotoToVideoGenerations to update.
     */
    limit?: number
  }

  /**
   * PhotoToVideoGeneration updateManyAndReturn
   */
  export type PhotoToVideoGenerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * The data used to update PhotoToVideoGenerations.
     */
    data: XOR<PhotoToVideoGenerationUpdateManyMutationInput, PhotoToVideoGenerationUncheckedUpdateManyInput>
    /**
     * Filter which PhotoToVideoGenerations to update
     */
    where?: PhotoToVideoGenerationWhereInput
    /**
     * Limit how many PhotoToVideoGenerations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoToVideoGeneration upsert
   */
  export type PhotoToVideoGenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoToVideoGeneration to update in case it exists.
     */
    where: PhotoToVideoGenerationWhereUniqueInput
    /**
     * In case the PhotoToVideoGeneration found by the `where` argument doesn't exist, create a new PhotoToVideoGeneration with this data.
     */
    create: XOR<PhotoToVideoGenerationCreateInput, PhotoToVideoGenerationUncheckedCreateInput>
    /**
     * In case the PhotoToVideoGeneration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoToVideoGenerationUpdateInput, PhotoToVideoGenerationUncheckedUpdateInput>
  }

  /**
   * PhotoToVideoGeneration delete
   */
  export type PhotoToVideoGenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
    /**
     * Filter which PhotoToVideoGeneration to delete.
     */
    where: PhotoToVideoGenerationWhereUniqueInput
  }

  /**
   * PhotoToVideoGeneration deleteMany
   */
  export type PhotoToVideoGenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoToVideoGenerations to delete
     */
    where?: PhotoToVideoGenerationWhereInput
    /**
     * Limit how many PhotoToVideoGenerations to delete.
     */
    limit?: number
  }

  /**
   * PhotoToVideoGeneration without action
   */
  export type PhotoToVideoGenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoToVideoGeneration
     */
    select?: PhotoToVideoGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoToVideoGeneration
     */
    omit?: PhotoToVideoGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoToVideoGenerationInclude<ExtArgs> | null
  }


  /**
   * Model VideoTranslationGeneration
   */

  export type AggregateVideoTranslationGeneration = {
    _count: VideoTranslationGenerationCountAggregateOutputType | null
    _min: VideoTranslationGenerationMinAggregateOutputType | null
    _max: VideoTranslationGenerationMaxAggregateOutputType | null
  }

  export type VideoTranslationGenerationMinAggregateOutputType = {
    id: string | null
    name: string | null
    sourceVideoS3Key: string | null
    targetLanguage: string | null
    videoS3Key: string | null
    status: string | null
    falJobId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type VideoTranslationGenerationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sourceVideoS3Key: string | null
    targetLanguage: string | null
    videoS3Key: string | null
    status: string | null
    falJobId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type VideoTranslationGenerationCountAggregateOutputType = {
    id: number
    name: number
    sourceVideoS3Key: number
    targetLanguage: number
    videoS3Key: number
    status: number
    falJobId: number
    createdAt: number
    userId: number
    _all: number
  }


  export type VideoTranslationGenerationMinAggregateInputType = {
    id?: true
    name?: true
    sourceVideoS3Key?: true
    targetLanguage?: true
    videoS3Key?: true
    status?: true
    falJobId?: true
    createdAt?: true
    userId?: true
  }

  export type VideoTranslationGenerationMaxAggregateInputType = {
    id?: true
    name?: true
    sourceVideoS3Key?: true
    targetLanguage?: true
    videoS3Key?: true
    status?: true
    falJobId?: true
    createdAt?: true
    userId?: true
  }

  export type VideoTranslationGenerationCountAggregateInputType = {
    id?: true
    name?: true
    sourceVideoS3Key?: true
    targetLanguage?: true
    videoS3Key?: true
    status?: true
    falJobId?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type VideoTranslationGenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoTranslationGeneration to aggregate.
     */
    where?: VideoTranslationGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoTranslationGenerations to fetch.
     */
    orderBy?: VideoTranslationGenerationOrderByWithRelationInput | VideoTranslationGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoTranslationGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoTranslationGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoTranslationGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoTranslationGenerations
    **/
    _count?: true | VideoTranslationGenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoTranslationGenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoTranslationGenerationMaxAggregateInputType
  }

  export type GetVideoTranslationGenerationAggregateType<T extends VideoTranslationGenerationAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoTranslationGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoTranslationGeneration[P]>
      : GetScalarType<T[P], AggregateVideoTranslationGeneration[P]>
  }




  export type VideoTranslationGenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoTranslationGenerationWhereInput
    orderBy?: VideoTranslationGenerationOrderByWithAggregationInput | VideoTranslationGenerationOrderByWithAggregationInput[]
    by: VideoTranslationGenerationScalarFieldEnum[] | VideoTranslationGenerationScalarFieldEnum
    having?: VideoTranslationGenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoTranslationGenerationCountAggregateInputType | true
    _min?: VideoTranslationGenerationMinAggregateInputType
    _max?: VideoTranslationGenerationMaxAggregateInputType
  }

  export type VideoTranslationGenerationGroupByOutputType = {
    id: string
    name: string
    sourceVideoS3Key: string | null
    targetLanguage: string | null
    videoS3Key: string | null
    status: string
    falJobId: string | null
    createdAt: Date
    userId: string
    _count: VideoTranslationGenerationCountAggregateOutputType | null
    _min: VideoTranslationGenerationMinAggregateOutputType | null
    _max: VideoTranslationGenerationMaxAggregateOutputType | null
  }

  type GetVideoTranslationGenerationGroupByPayload<T extends VideoTranslationGenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoTranslationGenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoTranslationGenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoTranslationGenerationGroupByOutputType[P]>
            : GetScalarType<T[P], VideoTranslationGenerationGroupByOutputType[P]>
        }
      >
    >


  export type VideoTranslationGenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceVideoS3Key?: boolean
    targetLanguage?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoTranslationGeneration"]>

  export type VideoTranslationGenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceVideoS3Key?: boolean
    targetLanguage?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoTranslationGeneration"]>

  export type VideoTranslationGenerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceVideoS3Key?: boolean
    targetLanguage?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["videoTranslationGeneration"]>

  export type VideoTranslationGenerationSelectScalar = {
    id?: boolean
    name?: boolean
    sourceVideoS3Key?: boolean
    targetLanguage?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type VideoTranslationGenerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sourceVideoS3Key" | "targetLanguage" | "videoS3Key" | "status" | "falJobId" | "createdAt" | "userId", ExtArgs["result"]["videoTranslationGeneration"]>
  export type VideoTranslationGenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoTranslationGenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VideoTranslationGenerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VideoTranslationGenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoTranslationGeneration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sourceVideoS3Key: string | null
      targetLanguage: string | null
      videoS3Key: string | null
      status: string
      falJobId: string | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["videoTranslationGeneration"]>
    composites: {}
  }

  type VideoTranslationGenerationGetPayload<S extends boolean | null | undefined | VideoTranslationGenerationDefaultArgs> = $Result.GetResult<Prisma.$VideoTranslationGenerationPayload, S>

  type VideoTranslationGenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoTranslationGenerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoTranslationGenerationCountAggregateInputType | true
    }

  export interface VideoTranslationGenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoTranslationGeneration'], meta: { name: 'VideoTranslationGeneration' } }
    /**
     * Find zero or one VideoTranslationGeneration that matches the filter.
     * @param {VideoTranslationGenerationFindUniqueArgs} args - Arguments to find a VideoTranslationGeneration
     * @example
     * // Get one VideoTranslationGeneration
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoTranslationGenerationFindUniqueArgs>(args: SelectSubset<T, VideoTranslationGenerationFindUniqueArgs<ExtArgs>>): Prisma__VideoTranslationGenerationClient<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoTranslationGeneration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoTranslationGenerationFindUniqueOrThrowArgs} args - Arguments to find a VideoTranslationGeneration
     * @example
     * // Get one VideoTranslationGeneration
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoTranslationGenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoTranslationGenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoTranslationGenerationClient<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoTranslationGeneration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTranslationGenerationFindFirstArgs} args - Arguments to find a VideoTranslationGeneration
     * @example
     * // Get one VideoTranslationGeneration
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoTranslationGenerationFindFirstArgs>(args?: SelectSubset<T, VideoTranslationGenerationFindFirstArgs<ExtArgs>>): Prisma__VideoTranslationGenerationClient<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoTranslationGeneration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTranslationGenerationFindFirstOrThrowArgs} args - Arguments to find a VideoTranslationGeneration
     * @example
     * // Get one VideoTranslationGeneration
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoTranslationGenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoTranslationGenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoTranslationGenerationClient<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoTranslationGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTranslationGenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoTranslationGenerations
     * const videoTranslationGenerations = await prisma.videoTranslationGeneration.findMany()
     * 
     * // Get first 10 VideoTranslationGenerations
     * const videoTranslationGenerations = await prisma.videoTranslationGeneration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoTranslationGenerationWithIdOnly = await prisma.videoTranslationGeneration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoTranslationGenerationFindManyArgs>(args?: SelectSubset<T, VideoTranslationGenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoTranslationGeneration.
     * @param {VideoTranslationGenerationCreateArgs} args - Arguments to create a VideoTranslationGeneration.
     * @example
     * // Create one VideoTranslationGeneration
     * const VideoTranslationGeneration = await prisma.videoTranslationGeneration.create({
     *   data: {
     *     // ... data to create a VideoTranslationGeneration
     *   }
     * })
     * 
     */
    create<T extends VideoTranslationGenerationCreateArgs>(args: SelectSubset<T, VideoTranslationGenerationCreateArgs<ExtArgs>>): Prisma__VideoTranslationGenerationClient<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoTranslationGenerations.
     * @param {VideoTranslationGenerationCreateManyArgs} args - Arguments to create many VideoTranslationGenerations.
     * @example
     * // Create many VideoTranslationGenerations
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoTranslationGenerationCreateManyArgs>(args?: SelectSubset<T, VideoTranslationGenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoTranslationGenerations and returns the data saved in the database.
     * @param {VideoTranslationGenerationCreateManyAndReturnArgs} args - Arguments to create many VideoTranslationGenerations.
     * @example
     * // Create many VideoTranslationGenerations
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoTranslationGenerations and only return the `id`
     * const videoTranslationGenerationWithIdOnly = await prisma.videoTranslationGeneration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoTranslationGenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoTranslationGenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoTranslationGeneration.
     * @param {VideoTranslationGenerationDeleteArgs} args - Arguments to delete one VideoTranslationGeneration.
     * @example
     * // Delete one VideoTranslationGeneration
     * const VideoTranslationGeneration = await prisma.videoTranslationGeneration.delete({
     *   where: {
     *     // ... filter to delete one VideoTranslationGeneration
     *   }
     * })
     * 
     */
    delete<T extends VideoTranslationGenerationDeleteArgs>(args: SelectSubset<T, VideoTranslationGenerationDeleteArgs<ExtArgs>>): Prisma__VideoTranslationGenerationClient<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoTranslationGeneration.
     * @param {VideoTranslationGenerationUpdateArgs} args - Arguments to update one VideoTranslationGeneration.
     * @example
     * // Update one VideoTranslationGeneration
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoTranslationGenerationUpdateArgs>(args: SelectSubset<T, VideoTranslationGenerationUpdateArgs<ExtArgs>>): Prisma__VideoTranslationGenerationClient<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoTranslationGenerations.
     * @param {VideoTranslationGenerationDeleteManyArgs} args - Arguments to filter VideoTranslationGenerations to delete.
     * @example
     * // Delete a few VideoTranslationGenerations
     * const { count } = await prisma.videoTranslationGeneration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoTranslationGenerationDeleteManyArgs>(args?: SelectSubset<T, VideoTranslationGenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoTranslationGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTranslationGenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoTranslationGenerations
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoTranslationGenerationUpdateManyArgs>(args: SelectSubset<T, VideoTranslationGenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoTranslationGenerations and returns the data updated in the database.
     * @param {VideoTranslationGenerationUpdateManyAndReturnArgs} args - Arguments to update many VideoTranslationGenerations.
     * @example
     * // Update many VideoTranslationGenerations
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoTranslationGenerations and only return the `id`
     * const videoTranslationGenerationWithIdOnly = await prisma.videoTranslationGeneration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoTranslationGenerationUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoTranslationGenerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoTranslationGeneration.
     * @param {VideoTranslationGenerationUpsertArgs} args - Arguments to update or create a VideoTranslationGeneration.
     * @example
     * // Update or create a VideoTranslationGeneration
     * const videoTranslationGeneration = await prisma.videoTranslationGeneration.upsert({
     *   create: {
     *     // ... data to create a VideoTranslationGeneration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoTranslationGeneration we want to update
     *   }
     * })
     */
    upsert<T extends VideoTranslationGenerationUpsertArgs>(args: SelectSubset<T, VideoTranslationGenerationUpsertArgs<ExtArgs>>): Prisma__VideoTranslationGenerationClient<$Result.GetResult<Prisma.$VideoTranslationGenerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoTranslationGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTranslationGenerationCountArgs} args - Arguments to filter VideoTranslationGenerations to count.
     * @example
     * // Count the number of VideoTranslationGenerations
     * const count = await prisma.videoTranslationGeneration.count({
     *   where: {
     *     // ... the filter for the VideoTranslationGenerations we want to count
     *   }
     * })
    **/
    count<T extends VideoTranslationGenerationCountArgs>(
      args?: Subset<T, VideoTranslationGenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoTranslationGenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoTranslationGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTranslationGenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoTranslationGenerationAggregateArgs>(args: Subset<T, VideoTranslationGenerationAggregateArgs>): Prisma.PrismaPromise<GetVideoTranslationGenerationAggregateType<T>>

    /**
     * Group by VideoTranslationGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoTranslationGenerationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoTranslationGenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoTranslationGenerationGroupByArgs['orderBy'] }
        : { orderBy?: VideoTranslationGenerationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoTranslationGenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoTranslationGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoTranslationGeneration model
   */
  readonly fields: VideoTranslationGenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoTranslationGeneration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoTranslationGenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VideoTranslationGeneration model
   */
  interface VideoTranslationGenerationFieldRefs {
    readonly id: FieldRef<"VideoTranslationGeneration", 'String'>
    readonly name: FieldRef<"VideoTranslationGeneration", 'String'>
    readonly sourceVideoS3Key: FieldRef<"VideoTranslationGeneration", 'String'>
    readonly targetLanguage: FieldRef<"VideoTranslationGeneration", 'String'>
    readonly videoS3Key: FieldRef<"VideoTranslationGeneration", 'String'>
    readonly status: FieldRef<"VideoTranslationGeneration", 'String'>
    readonly falJobId: FieldRef<"VideoTranslationGeneration", 'String'>
    readonly createdAt: FieldRef<"VideoTranslationGeneration", 'DateTime'>
    readonly userId: FieldRef<"VideoTranslationGeneration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VideoTranslationGeneration findUnique
   */
  export type VideoTranslationGenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    /**
     * Filter, which VideoTranslationGeneration to fetch.
     */
    where: VideoTranslationGenerationWhereUniqueInput
  }

  /**
   * VideoTranslationGeneration findUniqueOrThrow
   */
  export type VideoTranslationGenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    /**
     * Filter, which VideoTranslationGeneration to fetch.
     */
    where: VideoTranslationGenerationWhereUniqueInput
  }

  /**
   * VideoTranslationGeneration findFirst
   */
  export type VideoTranslationGenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    /**
     * Filter, which VideoTranslationGeneration to fetch.
     */
    where?: VideoTranslationGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoTranslationGenerations to fetch.
     */
    orderBy?: VideoTranslationGenerationOrderByWithRelationInput | VideoTranslationGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoTranslationGenerations.
     */
    cursor?: VideoTranslationGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoTranslationGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoTranslationGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoTranslationGenerations.
     */
    distinct?: VideoTranslationGenerationScalarFieldEnum | VideoTranslationGenerationScalarFieldEnum[]
  }

  /**
   * VideoTranslationGeneration findFirstOrThrow
   */
  export type VideoTranslationGenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    /**
     * Filter, which VideoTranslationGeneration to fetch.
     */
    where?: VideoTranslationGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoTranslationGenerations to fetch.
     */
    orderBy?: VideoTranslationGenerationOrderByWithRelationInput | VideoTranslationGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoTranslationGenerations.
     */
    cursor?: VideoTranslationGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoTranslationGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoTranslationGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoTranslationGenerations.
     */
    distinct?: VideoTranslationGenerationScalarFieldEnum | VideoTranslationGenerationScalarFieldEnum[]
  }

  /**
   * VideoTranslationGeneration findMany
   */
  export type VideoTranslationGenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    /**
     * Filter, which VideoTranslationGenerations to fetch.
     */
    where?: VideoTranslationGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoTranslationGenerations to fetch.
     */
    orderBy?: VideoTranslationGenerationOrderByWithRelationInput | VideoTranslationGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoTranslationGenerations.
     */
    cursor?: VideoTranslationGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoTranslationGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoTranslationGenerations.
     */
    skip?: number
    distinct?: VideoTranslationGenerationScalarFieldEnum | VideoTranslationGenerationScalarFieldEnum[]
  }

  /**
   * VideoTranslationGeneration create
   */
  export type VideoTranslationGenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a VideoTranslationGeneration.
     */
    data: XOR<VideoTranslationGenerationCreateInput, VideoTranslationGenerationUncheckedCreateInput>
  }

  /**
   * VideoTranslationGeneration createMany
   */
  export type VideoTranslationGenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoTranslationGenerations.
     */
    data: VideoTranslationGenerationCreateManyInput | VideoTranslationGenerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoTranslationGeneration createManyAndReturn
   */
  export type VideoTranslationGenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * The data used to create many VideoTranslationGenerations.
     */
    data: VideoTranslationGenerationCreateManyInput | VideoTranslationGenerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoTranslationGeneration update
   */
  export type VideoTranslationGenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a VideoTranslationGeneration.
     */
    data: XOR<VideoTranslationGenerationUpdateInput, VideoTranslationGenerationUncheckedUpdateInput>
    /**
     * Choose, which VideoTranslationGeneration to update.
     */
    where: VideoTranslationGenerationWhereUniqueInput
  }

  /**
   * VideoTranslationGeneration updateMany
   */
  export type VideoTranslationGenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoTranslationGenerations.
     */
    data: XOR<VideoTranslationGenerationUpdateManyMutationInput, VideoTranslationGenerationUncheckedUpdateManyInput>
    /**
     * Filter which VideoTranslationGenerations to update
     */
    where?: VideoTranslationGenerationWhereInput
    /**
     * Limit how many VideoTranslationGenerations to update.
     */
    limit?: number
  }

  /**
   * VideoTranslationGeneration updateManyAndReturn
   */
  export type VideoTranslationGenerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * The data used to update VideoTranslationGenerations.
     */
    data: XOR<VideoTranslationGenerationUpdateManyMutationInput, VideoTranslationGenerationUncheckedUpdateManyInput>
    /**
     * Filter which VideoTranslationGenerations to update
     */
    where?: VideoTranslationGenerationWhereInput
    /**
     * Limit how many VideoTranslationGenerations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VideoTranslationGeneration upsert
   */
  export type VideoTranslationGenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the VideoTranslationGeneration to update in case it exists.
     */
    where: VideoTranslationGenerationWhereUniqueInput
    /**
     * In case the VideoTranslationGeneration found by the `where` argument doesn't exist, create a new VideoTranslationGeneration with this data.
     */
    create: XOR<VideoTranslationGenerationCreateInput, VideoTranslationGenerationUncheckedCreateInput>
    /**
     * In case the VideoTranslationGeneration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoTranslationGenerationUpdateInput, VideoTranslationGenerationUncheckedUpdateInput>
  }

  /**
   * VideoTranslationGeneration delete
   */
  export type VideoTranslationGenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
    /**
     * Filter which VideoTranslationGeneration to delete.
     */
    where: VideoTranslationGenerationWhereUniqueInput
  }

  /**
   * VideoTranslationGeneration deleteMany
   */
  export type VideoTranslationGenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoTranslationGenerations to delete
     */
    where?: VideoTranslationGenerationWhereInput
    /**
     * Limit how many VideoTranslationGenerations to delete.
     */
    limit?: number
  }

  /**
   * VideoTranslationGeneration without action
   */
  export type VideoTranslationGenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoTranslationGeneration
     */
    select?: VideoTranslationGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoTranslationGeneration
     */
    omit?: VideoTranslationGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VideoTranslationGenerationInclude<ExtArgs> | null
  }


  /**
   * Model ChangeVideoAudioGeneration
   */

  export type AggregateChangeVideoAudioGeneration = {
    _count: ChangeVideoAudioGenerationCountAggregateOutputType | null
    _min: ChangeVideoAudioGenerationMinAggregateOutputType | null
    _max: ChangeVideoAudioGenerationMaxAggregateOutputType | null
  }

  export type ChangeVideoAudioGenerationMinAggregateOutputType = {
    id: string | null
    name: string | null
    sourceVideoS3Key: string | null
    newAudioS3Key: string | null
    videoS3Key: string | null
    status: string | null
    falJobId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ChangeVideoAudioGenerationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sourceVideoS3Key: string | null
    newAudioS3Key: string | null
    videoS3Key: string | null
    status: string | null
    falJobId: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ChangeVideoAudioGenerationCountAggregateOutputType = {
    id: number
    name: number
    sourceVideoS3Key: number
    newAudioS3Key: number
    videoS3Key: number
    status: number
    falJobId: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ChangeVideoAudioGenerationMinAggregateInputType = {
    id?: true
    name?: true
    sourceVideoS3Key?: true
    newAudioS3Key?: true
    videoS3Key?: true
    status?: true
    falJobId?: true
    createdAt?: true
    userId?: true
  }

  export type ChangeVideoAudioGenerationMaxAggregateInputType = {
    id?: true
    name?: true
    sourceVideoS3Key?: true
    newAudioS3Key?: true
    videoS3Key?: true
    status?: true
    falJobId?: true
    createdAt?: true
    userId?: true
  }

  export type ChangeVideoAudioGenerationCountAggregateInputType = {
    id?: true
    name?: true
    sourceVideoS3Key?: true
    newAudioS3Key?: true
    videoS3Key?: true
    status?: true
    falJobId?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ChangeVideoAudioGenerationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChangeVideoAudioGeneration to aggregate.
     */
    where?: ChangeVideoAudioGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangeVideoAudioGenerations to fetch.
     */
    orderBy?: ChangeVideoAudioGenerationOrderByWithRelationInput | ChangeVideoAudioGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChangeVideoAudioGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangeVideoAudioGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangeVideoAudioGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChangeVideoAudioGenerations
    **/
    _count?: true | ChangeVideoAudioGenerationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChangeVideoAudioGenerationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChangeVideoAudioGenerationMaxAggregateInputType
  }

  export type GetChangeVideoAudioGenerationAggregateType<T extends ChangeVideoAudioGenerationAggregateArgs> = {
        [P in keyof T & keyof AggregateChangeVideoAudioGeneration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChangeVideoAudioGeneration[P]>
      : GetScalarType<T[P], AggregateChangeVideoAudioGeneration[P]>
  }




  export type ChangeVideoAudioGenerationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChangeVideoAudioGenerationWhereInput
    orderBy?: ChangeVideoAudioGenerationOrderByWithAggregationInput | ChangeVideoAudioGenerationOrderByWithAggregationInput[]
    by: ChangeVideoAudioGenerationScalarFieldEnum[] | ChangeVideoAudioGenerationScalarFieldEnum
    having?: ChangeVideoAudioGenerationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChangeVideoAudioGenerationCountAggregateInputType | true
    _min?: ChangeVideoAudioGenerationMinAggregateInputType
    _max?: ChangeVideoAudioGenerationMaxAggregateInputType
  }

  export type ChangeVideoAudioGenerationGroupByOutputType = {
    id: string
    name: string
    sourceVideoS3Key: string | null
    newAudioS3Key: string | null
    videoS3Key: string | null
    status: string
    falJobId: string | null
    createdAt: Date
    userId: string
    _count: ChangeVideoAudioGenerationCountAggregateOutputType | null
    _min: ChangeVideoAudioGenerationMinAggregateOutputType | null
    _max: ChangeVideoAudioGenerationMaxAggregateOutputType | null
  }

  type GetChangeVideoAudioGenerationGroupByPayload<T extends ChangeVideoAudioGenerationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChangeVideoAudioGenerationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChangeVideoAudioGenerationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChangeVideoAudioGenerationGroupByOutputType[P]>
            : GetScalarType<T[P], ChangeVideoAudioGenerationGroupByOutputType[P]>
        }
      >
    >


  export type ChangeVideoAudioGenerationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceVideoS3Key?: boolean
    newAudioS3Key?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["changeVideoAudioGeneration"]>

  export type ChangeVideoAudioGenerationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceVideoS3Key?: boolean
    newAudioS3Key?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["changeVideoAudioGeneration"]>

  export type ChangeVideoAudioGenerationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sourceVideoS3Key?: boolean
    newAudioS3Key?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["changeVideoAudioGeneration"]>

  export type ChangeVideoAudioGenerationSelectScalar = {
    id?: boolean
    name?: boolean
    sourceVideoS3Key?: boolean
    newAudioS3Key?: boolean
    videoS3Key?: boolean
    status?: boolean
    falJobId?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ChangeVideoAudioGenerationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sourceVideoS3Key" | "newAudioS3Key" | "videoS3Key" | "status" | "falJobId" | "createdAt" | "userId", ExtArgs["result"]["changeVideoAudioGeneration"]>
  export type ChangeVideoAudioGenerationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChangeVideoAudioGenerationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChangeVideoAudioGenerationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChangeVideoAudioGenerationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChangeVideoAudioGeneration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sourceVideoS3Key: string | null
      newAudioS3Key: string | null
      videoS3Key: string | null
      status: string
      falJobId: string | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["changeVideoAudioGeneration"]>
    composites: {}
  }

  type ChangeVideoAudioGenerationGetPayload<S extends boolean | null | undefined | ChangeVideoAudioGenerationDefaultArgs> = $Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload, S>

  type ChangeVideoAudioGenerationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChangeVideoAudioGenerationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChangeVideoAudioGenerationCountAggregateInputType | true
    }

  export interface ChangeVideoAudioGenerationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChangeVideoAudioGeneration'], meta: { name: 'ChangeVideoAudioGeneration' } }
    /**
     * Find zero or one ChangeVideoAudioGeneration that matches the filter.
     * @param {ChangeVideoAudioGenerationFindUniqueArgs} args - Arguments to find a ChangeVideoAudioGeneration
     * @example
     * // Get one ChangeVideoAudioGeneration
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChangeVideoAudioGenerationFindUniqueArgs>(args: SelectSubset<T, ChangeVideoAudioGenerationFindUniqueArgs<ExtArgs>>): Prisma__ChangeVideoAudioGenerationClient<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChangeVideoAudioGeneration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChangeVideoAudioGenerationFindUniqueOrThrowArgs} args - Arguments to find a ChangeVideoAudioGeneration
     * @example
     * // Get one ChangeVideoAudioGeneration
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChangeVideoAudioGenerationFindUniqueOrThrowArgs>(args: SelectSubset<T, ChangeVideoAudioGenerationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChangeVideoAudioGenerationClient<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChangeVideoAudioGeneration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeVideoAudioGenerationFindFirstArgs} args - Arguments to find a ChangeVideoAudioGeneration
     * @example
     * // Get one ChangeVideoAudioGeneration
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChangeVideoAudioGenerationFindFirstArgs>(args?: SelectSubset<T, ChangeVideoAudioGenerationFindFirstArgs<ExtArgs>>): Prisma__ChangeVideoAudioGenerationClient<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChangeVideoAudioGeneration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeVideoAudioGenerationFindFirstOrThrowArgs} args - Arguments to find a ChangeVideoAudioGeneration
     * @example
     * // Get one ChangeVideoAudioGeneration
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChangeVideoAudioGenerationFindFirstOrThrowArgs>(args?: SelectSubset<T, ChangeVideoAudioGenerationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChangeVideoAudioGenerationClient<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChangeVideoAudioGenerations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeVideoAudioGenerationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChangeVideoAudioGenerations
     * const changeVideoAudioGenerations = await prisma.changeVideoAudioGeneration.findMany()
     * 
     * // Get first 10 ChangeVideoAudioGenerations
     * const changeVideoAudioGenerations = await prisma.changeVideoAudioGeneration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const changeVideoAudioGenerationWithIdOnly = await prisma.changeVideoAudioGeneration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChangeVideoAudioGenerationFindManyArgs>(args?: SelectSubset<T, ChangeVideoAudioGenerationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChangeVideoAudioGeneration.
     * @param {ChangeVideoAudioGenerationCreateArgs} args - Arguments to create a ChangeVideoAudioGeneration.
     * @example
     * // Create one ChangeVideoAudioGeneration
     * const ChangeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.create({
     *   data: {
     *     // ... data to create a ChangeVideoAudioGeneration
     *   }
     * })
     * 
     */
    create<T extends ChangeVideoAudioGenerationCreateArgs>(args: SelectSubset<T, ChangeVideoAudioGenerationCreateArgs<ExtArgs>>): Prisma__ChangeVideoAudioGenerationClient<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChangeVideoAudioGenerations.
     * @param {ChangeVideoAudioGenerationCreateManyArgs} args - Arguments to create many ChangeVideoAudioGenerations.
     * @example
     * // Create many ChangeVideoAudioGenerations
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChangeVideoAudioGenerationCreateManyArgs>(args?: SelectSubset<T, ChangeVideoAudioGenerationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChangeVideoAudioGenerations and returns the data saved in the database.
     * @param {ChangeVideoAudioGenerationCreateManyAndReturnArgs} args - Arguments to create many ChangeVideoAudioGenerations.
     * @example
     * // Create many ChangeVideoAudioGenerations
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChangeVideoAudioGenerations and only return the `id`
     * const changeVideoAudioGenerationWithIdOnly = await prisma.changeVideoAudioGeneration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChangeVideoAudioGenerationCreateManyAndReturnArgs>(args?: SelectSubset<T, ChangeVideoAudioGenerationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChangeVideoAudioGeneration.
     * @param {ChangeVideoAudioGenerationDeleteArgs} args - Arguments to delete one ChangeVideoAudioGeneration.
     * @example
     * // Delete one ChangeVideoAudioGeneration
     * const ChangeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.delete({
     *   where: {
     *     // ... filter to delete one ChangeVideoAudioGeneration
     *   }
     * })
     * 
     */
    delete<T extends ChangeVideoAudioGenerationDeleteArgs>(args: SelectSubset<T, ChangeVideoAudioGenerationDeleteArgs<ExtArgs>>): Prisma__ChangeVideoAudioGenerationClient<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChangeVideoAudioGeneration.
     * @param {ChangeVideoAudioGenerationUpdateArgs} args - Arguments to update one ChangeVideoAudioGeneration.
     * @example
     * // Update one ChangeVideoAudioGeneration
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChangeVideoAudioGenerationUpdateArgs>(args: SelectSubset<T, ChangeVideoAudioGenerationUpdateArgs<ExtArgs>>): Prisma__ChangeVideoAudioGenerationClient<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChangeVideoAudioGenerations.
     * @param {ChangeVideoAudioGenerationDeleteManyArgs} args - Arguments to filter ChangeVideoAudioGenerations to delete.
     * @example
     * // Delete a few ChangeVideoAudioGenerations
     * const { count } = await prisma.changeVideoAudioGeneration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChangeVideoAudioGenerationDeleteManyArgs>(args?: SelectSubset<T, ChangeVideoAudioGenerationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChangeVideoAudioGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeVideoAudioGenerationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChangeVideoAudioGenerations
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChangeVideoAudioGenerationUpdateManyArgs>(args: SelectSubset<T, ChangeVideoAudioGenerationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChangeVideoAudioGenerations and returns the data updated in the database.
     * @param {ChangeVideoAudioGenerationUpdateManyAndReturnArgs} args - Arguments to update many ChangeVideoAudioGenerations.
     * @example
     * // Update many ChangeVideoAudioGenerations
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChangeVideoAudioGenerations and only return the `id`
     * const changeVideoAudioGenerationWithIdOnly = await prisma.changeVideoAudioGeneration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChangeVideoAudioGenerationUpdateManyAndReturnArgs>(args: SelectSubset<T, ChangeVideoAudioGenerationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChangeVideoAudioGeneration.
     * @param {ChangeVideoAudioGenerationUpsertArgs} args - Arguments to update or create a ChangeVideoAudioGeneration.
     * @example
     * // Update or create a ChangeVideoAudioGeneration
     * const changeVideoAudioGeneration = await prisma.changeVideoAudioGeneration.upsert({
     *   create: {
     *     // ... data to create a ChangeVideoAudioGeneration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChangeVideoAudioGeneration we want to update
     *   }
     * })
     */
    upsert<T extends ChangeVideoAudioGenerationUpsertArgs>(args: SelectSubset<T, ChangeVideoAudioGenerationUpsertArgs<ExtArgs>>): Prisma__ChangeVideoAudioGenerationClient<$Result.GetResult<Prisma.$ChangeVideoAudioGenerationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChangeVideoAudioGenerations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeVideoAudioGenerationCountArgs} args - Arguments to filter ChangeVideoAudioGenerations to count.
     * @example
     * // Count the number of ChangeVideoAudioGenerations
     * const count = await prisma.changeVideoAudioGeneration.count({
     *   where: {
     *     // ... the filter for the ChangeVideoAudioGenerations we want to count
     *   }
     * })
    **/
    count<T extends ChangeVideoAudioGenerationCountArgs>(
      args?: Subset<T, ChangeVideoAudioGenerationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChangeVideoAudioGenerationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChangeVideoAudioGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeVideoAudioGenerationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChangeVideoAudioGenerationAggregateArgs>(args: Subset<T, ChangeVideoAudioGenerationAggregateArgs>): Prisma.PrismaPromise<GetChangeVideoAudioGenerationAggregateType<T>>

    /**
     * Group by ChangeVideoAudioGeneration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChangeVideoAudioGenerationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChangeVideoAudioGenerationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChangeVideoAudioGenerationGroupByArgs['orderBy'] }
        : { orderBy?: ChangeVideoAudioGenerationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChangeVideoAudioGenerationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChangeVideoAudioGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChangeVideoAudioGeneration model
   */
  readonly fields: ChangeVideoAudioGenerationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChangeVideoAudioGeneration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChangeVideoAudioGenerationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChangeVideoAudioGeneration model
   */
  interface ChangeVideoAudioGenerationFieldRefs {
    readonly id: FieldRef<"ChangeVideoAudioGeneration", 'String'>
    readonly name: FieldRef<"ChangeVideoAudioGeneration", 'String'>
    readonly sourceVideoS3Key: FieldRef<"ChangeVideoAudioGeneration", 'String'>
    readonly newAudioS3Key: FieldRef<"ChangeVideoAudioGeneration", 'String'>
    readonly videoS3Key: FieldRef<"ChangeVideoAudioGeneration", 'String'>
    readonly status: FieldRef<"ChangeVideoAudioGeneration", 'String'>
    readonly falJobId: FieldRef<"ChangeVideoAudioGeneration", 'String'>
    readonly createdAt: FieldRef<"ChangeVideoAudioGeneration", 'DateTime'>
    readonly userId: FieldRef<"ChangeVideoAudioGeneration", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChangeVideoAudioGeneration findUnique
   */
  export type ChangeVideoAudioGenerationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ChangeVideoAudioGeneration to fetch.
     */
    where: ChangeVideoAudioGenerationWhereUniqueInput
  }

  /**
   * ChangeVideoAudioGeneration findUniqueOrThrow
   */
  export type ChangeVideoAudioGenerationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ChangeVideoAudioGeneration to fetch.
     */
    where: ChangeVideoAudioGenerationWhereUniqueInput
  }

  /**
   * ChangeVideoAudioGeneration findFirst
   */
  export type ChangeVideoAudioGenerationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ChangeVideoAudioGeneration to fetch.
     */
    where?: ChangeVideoAudioGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangeVideoAudioGenerations to fetch.
     */
    orderBy?: ChangeVideoAudioGenerationOrderByWithRelationInput | ChangeVideoAudioGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChangeVideoAudioGenerations.
     */
    cursor?: ChangeVideoAudioGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangeVideoAudioGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangeVideoAudioGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChangeVideoAudioGenerations.
     */
    distinct?: ChangeVideoAudioGenerationScalarFieldEnum | ChangeVideoAudioGenerationScalarFieldEnum[]
  }

  /**
   * ChangeVideoAudioGeneration findFirstOrThrow
   */
  export type ChangeVideoAudioGenerationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ChangeVideoAudioGeneration to fetch.
     */
    where?: ChangeVideoAudioGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangeVideoAudioGenerations to fetch.
     */
    orderBy?: ChangeVideoAudioGenerationOrderByWithRelationInput | ChangeVideoAudioGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChangeVideoAudioGenerations.
     */
    cursor?: ChangeVideoAudioGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangeVideoAudioGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangeVideoAudioGenerations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChangeVideoAudioGenerations.
     */
    distinct?: ChangeVideoAudioGenerationScalarFieldEnum | ChangeVideoAudioGenerationScalarFieldEnum[]
  }

  /**
   * ChangeVideoAudioGeneration findMany
   */
  export type ChangeVideoAudioGenerationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    /**
     * Filter, which ChangeVideoAudioGenerations to fetch.
     */
    where?: ChangeVideoAudioGenerationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChangeVideoAudioGenerations to fetch.
     */
    orderBy?: ChangeVideoAudioGenerationOrderByWithRelationInput | ChangeVideoAudioGenerationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChangeVideoAudioGenerations.
     */
    cursor?: ChangeVideoAudioGenerationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChangeVideoAudioGenerations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChangeVideoAudioGenerations.
     */
    skip?: number
    distinct?: ChangeVideoAudioGenerationScalarFieldEnum | ChangeVideoAudioGenerationScalarFieldEnum[]
  }

  /**
   * ChangeVideoAudioGeneration create
   */
  export type ChangeVideoAudioGenerationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    /**
     * The data needed to create a ChangeVideoAudioGeneration.
     */
    data: XOR<ChangeVideoAudioGenerationCreateInput, ChangeVideoAudioGenerationUncheckedCreateInput>
  }

  /**
   * ChangeVideoAudioGeneration createMany
   */
  export type ChangeVideoAudioGenerationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChangeVideoAudioGenerations.
     */
    data: ChangeVideoAudioGenerationCreateManyInput | ChangeVideoAudioGenerationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChangeVideoAudioGeneration createManyAndReturn
   */
  export type ChangeVideoAudioGenerationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * The data used to create many ChangeVideoAudioGenerations.
     */
    data: ChangeVideoAudioGenerationCreateManyInput | ChangeVideoAudioGenerationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChangeVideoAudioGeneration update
   */
  export type ChangeVideoAudioGenerationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    /**
     * The data needed to update a ChangeVideoAudioGeneration.
     */
    data: XOR<ChangeVideoAudioGenerationUpdateInput, ChangeVideoAudioGenerationUncheckedUpdateInput>
    /**
     * Choose, which ChangeVideoAudioGeneration to update.
     */
    where: ChangeVideoAudioGenerationWhereUniqueInput
  }

  /**
   * ChangeVideoAudioGeneration updateMany
   */
  export type ChangeVideoAudioGenerationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChangeVideoAudioGenerations.
     */
    data: XOR<ChangeVideoAudioGenerationUpdateManyMutationInput, ChangeVideoAudioGenerationUncheckedUpdateManyInput>
    /**
     * Filter which ChangeVideoAudioGenerations to update
     */
    where?: ChangeVideoAudioGenerationWhereInput
    /**
     * Limit how many ChangeVideoAudioGenerations to update.
     */
    limit?: number
  }

  /**
   * ChangeVideoAudioGeneration updateManyAndReturn
   */
  export type ChangeVideoAudioGenerationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * The data used to update ChangeVideoAudioGenerations.
     */
    data: XOR<ChangeVideoAudioGenerationUpdateManyMutationInput, ChangeVideoAudioGenerationUncheckedUpdateManyInput>
    /**
     * Filter which ChangeVideoAudioGenerations to update
     */
    where?: ChangeVideoAudioGenerationWhereInput
    /**
     * Limit how many ChangeVideoAudioGenerations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChangeVideoAudioGeneration upsert
   */
  export type ChangeVideoAudioGenerationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    /**
     * The filter to search for the ChangeVideoAudioGeneration to update in case it exists.
     */
    where: ChangeVideoAudioGenerationWhereUniqueInput
    /**
     * In case the ChangeVideoAudioGeneration found by the `where` argument doesn't exist, create a new ChangeVideoAudioGeneration with this data.
     */
    create: XOR<ChangeVideoAudioGenerationCreateInput, ChangeVideoAudioGenerationUncheckedCreateInput>
    /**
     * In case the ChangeVideoAudioGeneration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChangeVideoAudioGenerationUpdateInput, ChangeVideoAudioGenerationUncheckedUpdateInput>
  }

  /**
   * ChangeVideoAudioGeneration delete
   */
  export type ChangeVideoAudioGenerationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
    /**
     * Filter which ChangeVideoAudioGeneration to delete.
     */
    where: ChangeVideoAudioGenerationWhereUniqueInput
  }

  /**
   * ChangeVideoAudioGeneration deleteMany
   */
  export type ChangeVideoAudioGenerationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChangeVideoAudioGenerations to delete
     */
    where?: ChangeVideoAudioGenerationWhereInput
    /**
     * Limit how many ChangeVideoAudioGenerations to delete.
     */
    limit?: number
  }

  /**
   * ChangeVideoAudioGeneration without action
   */
  export type ChangeVideoAudioGenerationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChangeVideoAudioGeneration
     */
    select?: ChangeVideoAudioGenerationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChangeVideoAudioGeneration
     */
    omit?: ChangeVideoAudioGenerationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChangeVideoAudioGenerationInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    credits: 'credits'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PhotoToVideoGenerationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    photoS3Key: 'photoS3Key',
    script: 'script',
    drivingAudioS3Key: 'drivingAudioS3Key',
    voiceS3Key: 'voiceS3Key',
    expressiveness: 'expressiveness',
    enhancement: 'enhancement',
    experimentalModel: 'experimentalModel',
    resolution: 'resolution',
    videoS3Key: 'videoS3Key',
    status: 'status',
    falJobId: 'falJobId',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type PhotoToVideoGenerationScalarFieldEnum = (typeof PhotoToVideoGenerationScalarFieldEnum)[keyof typeof PhotoToVideoGenerationScalarFieldEnum]


  export const VideoTranslationGenerationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sourceVideoS3Key: 'sourceVideoS3Key',
    targetLanguage: 'targetLanguage',
    videoS3Key: 'videoS3Key',
    status: 'status',
    falJobId: 'falJobId',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type VideoTranslationGenerationScalarFieldEnum = (typeof VideoTranslationGenerationScalarFieldEnum)[keyof typeof VideoTranslationGenerationScalarFieldEnum]


  export const ChangeVideoAudioGenerationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sourceVideoS3Key: 'sourceVideoS3Key',
    newAudioS3Key: 'newAudioS3Key',
    videoS3Key: 'videoS3Key',
    status: 'status',
    falJobId: 'falJobId',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ChangeVideoAudioGenerationScalarFieldEnum = (typeof ChangeVideoAudioGenerationScalarFieldEnum)[keyof typeof ChangeVideoAudioGenerationScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    credits?: IntFilter<"User"> | number
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    photoToVideoGenerations?: PhotoToVideoGenerationListRelationFilter
    videoTranslationGenerations?: VideoTranslationGenerationListRelationFilter
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    photoToVideoGenerations?: PhotoToVideoGenerationOrderByRelationAggregateInput
    videoTranslationGenerations?: VideoTranslationGenerationOrderByRelationAggregateInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    credits?: IntFilter<"User"> | number
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    photoToVideoGenerations?: PhotoToVideoGenerationListRelationFilter
    videoTranslationGenerations?: VideoTranslationGenerationListRelationFilter
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    credits?: IntWithAggregatesFilter<"User"> | number
  }

  export type PhotoToVideoGenerationWhereInput = {
    AND?: PhotoToVideoGenerationWhereInput | PhotoToVideoGenerationWhereInput[]
    OR?: PhotoToVideoGenerationWhereInput[]
    NOT?: PhotoToVideoGenerationWhereInput | PhotoToVideoGenerationWhereInput[]
    id?: StringFilter<"PhotoToVideoGeneration"> | string
    name?: StringFilter<"PhotoToVideoGeneration"> | string
    photoS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    script?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    drivingAudioS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    voiceS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    expressiveness?: FloatNullableFilter<"PhotoToVideoGeneration"> | number | null
    enhancement?: BoolFilter<"PhotoToVideoGeneration"> | boolean
    experimentalModel?: BoolFilter<"PhotoToVideoGeneration"> | boolean
    resolution?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    videoS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    status?: StringFilter<"PhotoToVideoGeneration"> | string
    falJobId?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    createdAt?: DateTimeFilter<"PhotoToVideoGeneration"> | Date | string
    userId?: StringFilter<"PhotoToVideoGeneration"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PhotoToVideoGenerationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photoS3Key?: SortOrderInput | SortOrder
    script?: SortOrderInput | SortOrder
    drivingAudioS3Key?: SortOrderInput | SortOrder
    voiceS3Key?: SortOrderInput | SortOrder
    expressiveness?: SortOrderInput | SortOrder
    enhancement?: SortOrder
    experimentalModel?: SortOrder
    resolution?: SortOrderInput | SortOrder
    videoS3Key?: SortOrderInput | SortOrder
    status?: SortOrder
    falJobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PhotoToVideoGenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoToVideoGenerationWhereInput | PhotoToVideoGenerationWhereInput[]
    OR?: PhotoToVideoGenerationWhereInput[]
    NOT?: PhotoToVideoGenerationWhereInput | PhotoToVideoGenerationWhereInput[]
    name?: StringFilter<"PhotoToVideoGeneration"> | string
    photoS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    script?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    drivingAudioS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    voiceS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    expressiveness?: FloatNullableFilter<"PhotoToVideoGeneration"> | number | null
    enhancement?: BoolFilter<"PhotoToVideoGeneration"> | boolean
    experimentalModel?: BoolFilter<"PhotoToVideoGeneration"> | boolean
    resolution?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    videoS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    status?: StringFilter<"PhotoToVideoGeneration"> | string
    falJobId?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    createdAt?: DateTimeFilter<"PhotoToVideoGeneration"> | Date | string
    userId?: StringFilter<"PhotoToVideoGeneration"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PhotoToVideoGenerationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    photoS3Key?: SortOrderInput | SortOrder
    script?: SortOrderInput | SortOrder
    drivingAudioS3Key?: SortOrderInput | SortOrder
    voiceS3Key?: SortOrderInput | SortOrder
    expressiveness?: SortOrderInput | SortOrder
    enhancement?: SortOrder
    experimentalModel?: SortOrder
    resolution?: SortOrderInput | SortOrder
    videoS3Key?: SortOrderInput | SortOrder
    status?: SortOrder
    falJobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: PhotoToVideoGenerationCountOrderByAggregateInput
    _avg?: PhotoToVideoGenerationAvgOrderByAggregateInput
    _max?: PhotoToVideoGenerationMaxOrderByAggregateInput
    _min?: PhotoToVideoGenerationMinOrderByAggregateInput
    _sum?: PhotoToVideoGenerationSumOrderByAggregateInput
  }

  export type PhotoToVideoGenerationScalarWhereWithAggregatesInput = {
    AND?: PhotoToVideoGenerationScalarWhereWithAggregatesInput | PhotoToVideoGenerationScalarWhereWithAggregatesInput[]
    OR?: PhotoToVideoGenerationScalarWhereWithAggregatesInput[]
    NOT?: PhotoToVideoGenerationScalarWhereWithAggregatesInput | PhotoToVideoGenerationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotoToVideoGeneration"> | string
    name?: StringWithAggregatesFilter<"PhotoToVideoGeneration"> | string
    photoS3Key?: StringNullableWithAggregatesFilter<"PhotoToVideoGeneration"> | string | null
    script?: StringNullableWithAggregatesFilter<"PhotoToVideoGeneration"> | string | null
    drivingAudioS3Key?: StringNullableWithAggregatesFilter<"PhotoToVideoGeneration"> | string | null
    voiceS3Key?: StringNullableWithAggregatesFilter<"PhotoToVideoGeneration"> | string | null
    expressiveness?: FloatNullableWithAggregatesFilter<"PhotoToVideoGeneration"> | number | null
    enhancement?: BoolWithAggregatesFilter<"PhotoToVideoGeneration"> | boolean
    experimentalModel?: BoolWithAggregatesFilter<"PhotoToVideoGeneration"> | boolean
    resolution?: StringNullableWithAggregatesFilter<"PhotoToVideoGeneration"> | string | null
    videoS3Key?: StringNullableWithAggregatesFilter<"PhotoToVideoGeneration"> | string | null
    status?: StringWithAggregatesFilter<"PhotoToVideoGeneration"> | string
    falJobId?: StringNullableWithAggregatesFilter<"PhotoToVideoGeneration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PhotoToVideoGeneration"> | Date | string
    userId?: StringWithAggregatesFilter<"PhotoToVideoGeneration"> | string
  }

  export type VideoTranslationGenerationWhereInput = {
    AND?: VideoTranslationGenerationWhereInput | VideoTranslationGenerationWhereInput[]
    OR?: VideoTranslationGenerationWhereInput[]
    NOT?: VideoTranslationGenerationWhereInput | VideoTranslationGenerationWhereInput[]
    id?: StringFilter<"VideoTranslationGeneration"> | string
    name?: StringFilter<"VideoTranslationGeneration"> | string
    sourceVideoS3Key?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    targetLanguage?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    videoS3Key?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    status?: StringFilter<"VideoTranslationGeneration"> | string
    falJobId?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    createdAt?: DateTimeFilter<"VideoTranslationGeneration"> | Date | string
    userId?: StringFilter<"VideoTranslationGeneration"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VideoTranslationGenerationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrderInput | SortOrder
    targetLanguage?: SortOrderInput | SortOrder
    videoS3Key?: SortOrderInput | SortOrder
    status?: SortOrder
    falJobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VideoTranslationGenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoTranslationGenerationWhereInput | VideoTranslationGenerationWhereInput[]
    OR?: VideoTranslationGenerationWhereInput[]
    NOT?: VideoTranslationGenerationWhereInput | VideoTranslationGenerationWhereInput[]
    name?: StringFilter<"VideoTranslationGeneration"> | string
    sourceVideoS3Key?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    targetLanguage?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    videoS3Key?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    status?: StringFilter<"VideoTranslationGeneration"> | string
    falJobId?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    createdAt?: DateTimeFilter<"VideoTranslationGeneration"> | Date | string
    userId?: StringFilter<"VideoTranslationGeneration"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type VideoTranslationGenerationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrderInput | SortOrder
    targetLanguage?: SortOrderInput | SortOrder
    videoS3Key?: SortOrderInput | SortOrder
    status?: SortOrder
    falJobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: VideoTranslationGenerationCountOrderByAggregateInput
    _max?: VideoTranslationGenerationMaxOrderByAggregateInput
    _min?: VideoTranslationGenerationMinOrderByAggregateInput
  }

  export type VideoTranslationGenerationScalarWhereWithAggregatesInput = {
    AND?: VideoTranslationGenerationScalarWhereWithAggregatesInput | VideoTranslationGenerationScalarWhereWithAggregatesInput[]
    OR?: VideoTranslationGenerationScalarWhereWithAggregatesInput[]
    NOT?: VideoTranslationGenerationScalarWhereWithAggregatesInput | VideoTranslationGenerationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoTranslationGeneration"> | string
    name?: StringWithAggregatesFilter<"VideoTranslationGeneration"> | string
    sourceVideoS3Key?: StringNullableWithAggregatesFilter<"VideoTranslationGeneration"> | string | null
    targetLanguage?: StringNullableWithAggregatesFilter<"VideoTranslationGeneration"> | string | null
    videoS3Key?: StringNullableWithAggregatesFilter<"VideoTranslationGeneration"> | string | null
    status?: StringWithAggregatesFilter<"VideoTranslationGeneration"> | string
    falJobId?: StringNullableWithAggregatesFilter<"VideoTranslationGeneration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VideoTranslationGeneration"> | Date | string
    userId?: StringWithAggregatesFilter<"VideoTranslationGeneration"> | string
  }

  export type ChangeVideoAudioGenerationWhereInput = {
    AND?: ChangeVideoAudioGenerationWhereInput | ChangeVideoAudioGenerationWhereInput[]
    OR?: ChangeVideoAudioGenerationWhereInput[]
    NOT?: ChangeVideoAudioGenerationWhereInput | ChangeVideoAudioGenerationWhereInput[]
    id?: StringFilter<"ChangeVideoAudioGeneration"> | string
    name?: StringFilter<"ChangeVideoAudioGeneration"> | string
    sourceVideoS3Key?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    newAudioS3Key?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    videoS3Key?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    status?: StringFilter<"ChangeVideoAudioGeneration"> | string
    falJobId?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    createdAt?: DateTimeFilter<"ChangeVideoAudioGeneration"> | Date | string
    userId?: StringFilter<"ChangeVideoAudioGeneration"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChangeVideoAudioGenerationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrderInput | SortOrder
    newAudioS3Key?: SortOrderInput | SortOrder
    videoS3Key?: SortOrderInput | SortOrder
    status?: SortOrder
    falJobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ChangeVideoAudioGenerationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChangeVideoAudioGenerationWhereInput | ChangeVideoAudioGenerationWhereInput[]
    OR?: ChangeVideoAudioGenerationWhereInput[]
    NOT?: ChangeVideoAudioGenerationWhereInput | ChangeVideoAudioGenerationWhereInput[]
    name?: StringFilter<"ChangeVideoAudioGeneration"> | string
    sourceVideoS3Key?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    newAudioS3Key?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    videoS3Key?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    status?: StringFilter<"ChangeVideoAudioGeneration"> | string
    falJobId?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    createdAt?: DateTimeFilter<"ChangeVideoAudioGeneration"> | Date | string
    userId?: StringFilter<"ChangeVideoAudioGeneration"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChangeVideoAudioGenerationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrderInput | SortOrder
    newAudioS3Key?: SortOrderInput | SortOrder
    videoS3Key?: SortOrderInput | SortOrder
    status?: SortOrder
    falJobId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ChangeVideoAudioGenerationCountOrderByAggregateInput
    _max?: ChangeVideoAudioGenerationMaxOrderByAggregateInput
    _min?: ChangeVideoAudioGenerationMinOrderByAggregateInput
  }

  export type ChangeVideoAudioGenerationScalarWhereWithAggregatesInput = {
    AND?: ChangeVideoAudioGenerationScalarWhereWithAggregatesInput | ChangeVideoAudioGenerationScalarWhereWithAggregatesInput[]
    OR?: ChangeVideoAudioGenerationScalarWhereWithAggregatesInput[]
    NOT?: ChangeVideoAudioGenerationScalarWhereWithAggregatesInput | ChangeVideoAudioGenerationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChangeVideoAudioGeneration"> | string
    name?: StringWithAggregatesFilter<"ChangeVideoAudioGeneration"> | string
    sourceVideoS3Key?: StringNullableWithAggregatesFilter<"ChangeVideoAudioGeneration"> | string | null
    newAudioS3Key?: StringNullableWithAggregatesFilter<"ChangeVideoAudioGeneration"> | string | null
    videoS3Key?: StringNullableWithAggregatesFilter<"ChangeVideoAudioGeneration"> | string | null
    status?: StringWithAggregatesFilter<"ChangeVideoAudioGeneration"> | string
    falJobId?: StringNullableWithAggregatesFilter<"ChangeVideoAudioGeneration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ChangeVideoAudioGeneration"> | Date | string
    userId?: StringWithAggregatesFilter<"ChangeVideoAudioGeneration"> | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type PhotoToVideoGenerationCreateInput = {
    id?: string
    name: string
    photoS3Key?: string | null
    script?: string | null
    drivingAudioS3Key?: string | null
    voiceS3Key?: string | null
    expressiveness?: number | null
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPhotoToVideoGenerationsInput
  }

  export type PhotoToVideoGenerationUncheckedCreateInput = {
    id?: string
    name: string
    photoS3Key?: string | null
    script?: string | null
    drivingAudioS3Key?: string | null
    voiceS3Key?: string | null
    expressiveness?: number | null
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type PhotoToVideoGenerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    script?: NullableStringFieldUpdateOperationsInput | string | null
    drivingAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    voiceS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    expressiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    enhancement?: BoolFieldUpdateOperationsInput | boolean
    experimentalModel?: BoolFieldUpdateOperationsInput | boolean
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPhotoToVideoGenerationsNestedInput
  }

  export type PhotoToVideoGenerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    script?: NullableStringFieldUpdateOperationsInput | string | null
    drivingAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    voiceS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    expressiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    enhancement?: BoolFieldUpdateOperationsInput | boolean
    experimentalModel?: BoolFieldUpdateOperationsInput | boolean
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoToVideoGenerationCreateManyInput = {
    id?: string
    name: string
    photoS3Key?: string | null
    script?: string | null
    drivingAudioS3Key?: string | null
    voiceS3Key?: string | null
    expressiveness?: number | null
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type PhotoToVideoGenerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    script?: NullableStringFieldUpdateOperationsInput | string | null
    drivingAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    voiceS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    expressiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    enhancement?: BoolFieldUpdateOperationsInput | boolean
    experimentalModel?: BoolFieldUpdateOperationsInput | boolean
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoToVideoGenerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    script?: NullableStringFieldUpdateOperationsInput | string | null
    drivingAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    voiceS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    expressiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    enhancement?: BoolFieldUpdateOperationsInput | boolean
    experimentalModel?: BoolFieldUpdateOperationsInput | boolean
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoTranslationGenerationCreateInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    targetLanguage?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVideoTranslationGenerationsInput
  }

  export type VideoTranslationGenerationUncheckedCreateInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    targetLanguage?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type VideoTranslationGenerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    targetLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVideoTranslationGenerationsNestedInput
  }

  export type VideoTranslationGenerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    targetLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoTranslationGenerationCreateManyInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    targetLanguage?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type VideoTranslationGenerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    targetLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTranslationGenerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    targetLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChangeVideoAudioGenerationCreateInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    newAudioS3Key?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutChangeVideoAudioGenerationsInput
  }

  export type ChangeVideoAudioGenerationUncheckedCreateInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    newAudioS3Key?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type ChangeVideoAudioGenerationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    newAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChangeVideoAudioGenerationsNestedInput
  }

  export type ChangeVideoAudioGenerationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    newAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ChangeVideoAudioGenerationCreateManyInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    newAudioS3Key?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type ChangeVideoAudioGenerationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    newAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangeVideoAudioGenerationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    newAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PhotoToVideoGenerationListRelationFilter = {
    every?: PhotoToVideoGenerationWhereInput
    some?: PhotoToVideoGenerationWhereInput
    none?: PhotoToVideoGenerationWhereInput
  }

  export type VideoTranslationGenerationListRelationFilter = {
    every?: VideoTranslationGenerationWhereInput
    some?: VideoTranslationGenerationWhereInput
    none?: VideoTranslationGenerationWhereInput
  }

  export type ChangeVideoAudioGenerationListRelationFilter = {
    every?: ChangeVideoAudioGenerationWhereInput
    some?: ChangeVideoAudioGenerationWhereInput
    none?: ChangeVideoAudioGenerationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhotoToVideoGenerationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoTranslationGenerationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChangeVideoAudioGenerationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credits?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PhotoToVideoGenerationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoS3Key?: SortOrder
    script?: SortOrder
    drivingAudioS3Key?: SortOrder
    voiceS3Key?: SortOrder
    expressiveness?: SortOrder
    enhancement?: SortOrder
    experimentalModel?: SortOrder
    resolution?: SortOrder
    videoS3Key?: SortOrder
    status?: SortOrder
    falJobId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PhotoToVideoGenerationAvgOrderByAggregateInput = {
    expressiveness?: SortOrder
  }

  export type PhotoToVideoGenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoS3Key?: SortOrder
    script?: SortOrder
    drivingAudioS3Key?: SortOrder
    voiceS3Key?: SortOrder
    expressiveness?: SortOrder
    enhancement?: SortOrder
    experimentalModel?: SortOrder
    resolution?: SortOrder
    videoS3Key?: SortOrder
    status?: SortOrder
    falJobId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PhotoToVideoGenerationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photoS3Key?: SortOrder
    script?: SortOrder
    drivingAudioS3Key?: SortOrder
    voiceS3Key?: SortOrder
    expressiveness?: SortOrder
    enhancement?: SortOrder
    experimentalModel?: SortOrder
    resolution?: SortOrder
    videoS3Key?: SortOrder
    status?: SortOrder
    falJobId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PhotoToVideoGenerationSumOrderByAggregateInput = {
    expressiveness?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VideoTranslationGenerationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrder
    targetLanguage?: SortOrder
    videoS3Key?: SortOrder
    status?: SortOrder
    falJobId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VideoTranslationGenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrder
    targetLanguage?: SortOrder
    videoS3Key?: SortOrder
    status?: SortOrder
    falJobId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type VideoTranslationGenerationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrder
    targetLanguage?: SortOrder
    videoS3Key?: SortOrder
    status?: SortOrder
    falJobId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ChangeVideoAudioGenerationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrder
    newAudioS3Key?: SortOrder
    videoS3Key?: SortOrder
    status?: SortOrder
    falJobId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ChangeVideoAudioGenerationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrder
    newAudioS3Key?: SortOrder
    videoS3Key?: SortOrder
    status?: SortOrder
    falJobId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ChangeVideoAudioGenerationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sourceVideoS3Key?: SortOrder
    newAudioS3Key?: SortOrder
    videoS3Key?: SortOrder
    status?: SortOrder
    falJobId?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PhotoToVideoGenerationCreateNestedManyWithoutUserInput = {
    create?: XOR<PhotoToVideoGenerationCreateWithoutUserInput, PhotoToVideoGenerationUncheckedCreateWithoutUserInput> | PhotoToVideoGenerationCreateWithoutUserInput[] | PhotoToVideoGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoToVideoGenerationCreateOrConnectWithoutUserInput | PhotoToVideoGenerationCreateOrConnectWithoutUserInput[]
    createMany?: PhotoToVideoGenerationCreateManyUserInputEnvelope
    connect?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
  }

  export type VideoTranslationGenerationCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoTranslationGenerationCreateWithoutUserInput, VideoTranslationGenerationUncheckedCreateWithoutUserInput> | VideoTranslationGenerationCreateWithoutUserInput[] | VideoTranslationGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoTranslationGenerationCreateOrConnectWithoutUserInput | VideoTranslationGenerationCreateOrConnectWithoutUserInput[]
    createMany?: VideoTranslationGenerationCreateManyUserInputEnvelope
    connect?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
  }

  export type ChangeVideoAudioGenerationCreateNestedManyWithoutUserInput = {
    create?: XOR<ChangeVideoAudioGenerationCreateWithoutUserInput, ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput> | ChangeVideoAudioGenerationCreateWithoutUserInput[] | ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChangeVideoAudioGenerationCreateOrConnectWithoutUserInput | ChangeVideoAudioGenerationCreateOrConnectWithoutUserInput[]
    createMany?: ChangeVideoAudioGenerationCreateManyUserInputEnvelope
    connect?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PhotoToVideoGenerationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PhotoToVideoGenerationCreateWithoutUserInput, PhotoToVideoGenerationUncheckedCreateWithoutUserInput> | PhotoToVideoGenerationCreateWithoutUserInput[] | PhotoToVideoGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoToVideoGenerationCreateOrConnectWithoutUserInput | PhotoToVideoGenerationCreateOrConnectWithoutUserInput[]
    createMany?: PhotoToVideoGenerationCreateManyUserInputEnvelope
    connect?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
  }

  export type VideoTranslationGenerationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VideoTranslationGenerationCreateWithoutUserInput, VideoTranslationGenerationUncheckedCreateWithoutUserInput> | VideoTranslationGenerationCreateWithoutUserInput[] | VideoTranslationGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoTranslationGenerationCreateOrConnectWithoutUserInput | VideoTranslationGenerationCreateOrConnectWithoutUserInput[]
    createMany?: VideoTranslationGenerationCreateManyUserInputEnvelope
    connect?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
  }

  export type ChangeVideoAudioGenerationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChangeVideoAudioGenerationCreateWithoutUserInput, ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput> | ChangeVideoAudioGenerationCreateWithoutUserInput[] | ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChangeVideoAudioGenerationCreateOrConnectWithoutUserInput | ChangeVideoAudioGenerationCreateOrConnectWithoutUserInput[]
    createMany?: ChangeVideoAudioGenerationCreateManyUserInputEnvelope
    connect?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PhotoToVideoGenerationUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhotoToVideoGenerationCreateWithoutUserInput, PhotoToVideoGenerationUncheckedCreateWithoutUserInput> | PhotoToVideoGenerationCreateWithoutUserInput[] | PhotoToVideoGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoToVideoGenerationCreateOrConnectWithoutUserInput | PhotoToVideoGenerationCreateOrConnectWithoutUserInput[]
    upsert?: PhotoToVideoGenerationUpsertWithWhereUniqueWithoutUserInput | PhotoToVideoGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhotoToVideoGenerationCreateManyUserInputEnvelope
    set?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
    disconnect?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
    delete?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
    connect?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
    update?: PhotoToVideoGenerationUpdateWithWhereUniqueWithoutUserInput | PhotoToVideoGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhotoToVideoGenerationUpdateManyWithWhereWithoutUserInput | PhotoToVideoGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhotoToVideoGenerationScalarWhereInput | PhotoToVideoGenerationScalarWhereInput[]
  }

  export type VideoTranslationGenerationUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoTranslationGenerationCreateWithoutUserInput, VideoTranslationGenerationUncheckedCreateWithoutUserInput> | VideoTranslationGenerationCreateWithoutUserInput[] | VideoTranslationGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoTranslationGenerationCreateOrConnectWithoutUserInput | VideoTranslationGenerationCreateOrConnectWithoutUserInput[]
    upsert?: VideoTranslationGenerationUpsertWithWhereUniqueWithoutUserInput | VideoTranslationGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoTranslationGenerationCreateManyUserInputEnvelope
    set?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
    disconnect?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
    delete?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
    connect?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
    update?: VideoTranslationGenerationUpdateWithWhereUniqueWithoutUserInput | VideoTranslationGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoTranslationGenerationUpdateManyWithWhereWithoutUserInput | VideoTranslationGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoTranslationGenerationScalarWhereInput | VideoTranslationGenerationScalarWhereInput[]
  }

  export type ChangeVideoAudioGenerationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChangeVideoAudioGenerationCreateWithoutUserInput, ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput> | ChangeVideoAudioGenerationCreateWithoutUserInput[] | ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChangeVideoAudioGenerationCreateOrConnectWithoutUserInput | ChangeVideoAudioGenerationCreateOrConnectWithoutUserInput[]
    upsert?: ChangeVideoAudioGenerationUpsertWithWhereUniqueWithoutUserInput | ChangeVideoAudioGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChangeVideoAudioGenerationCreateManyUserInputEnvelope
    set?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
    disconnect?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
    delete?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
    connect?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
    update?: ChangeVideoAudioGenerationUpdateWithWhereUniqueWithoutUserInput | ChangeVideoAudioGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChangeVideoAudioGenerationUpdateManyWithWhereWithoutUserInput | ChangeVideoAudioGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChangeVideoAudioGenerationScalarWhereInput | ChangeVideoAudioGenerationScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PhotoToVideoGenerationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PhotoToVideoGenerationCreateWithoutUserInput, PhotoToVideoGenerationUncheckedCreateWithoutUserInput> | PhotoToVideoGenerationCreateWithoutUserInput[] | PhotoToVideoGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PhotoToVideoGenerationCreateOrConnectWithoutUserInput | PhotoToVideoGenerationCreateOrConnectWithoutUserInput[]
    upsert?: PhotoToVideoGenerationUpsertWithWhereUniqueWithoutUserInput | PhotoToVideoGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PhotoToVideoGenerationCreateManyUserInputEnvelope
    set?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
    disconnect?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
    delete?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
    connect?: PhotoToVideoGenerationWhereUniqueInput | PhotoToVideoGenerationWhereUniqueInput[]
    update?: PhotoToVideoGenerationUpdateWithWhereUniqueWithoutUserInput | PhotoToVideoGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PhotoToVideoGenerationUpdateManyWithWhereWithoutUserInput | PhotoToVideoGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PhotoToVideoGenerationScalarWhereInput | PhotoToVideoGenerationScalarWhereInput[]
  }

  export type VideoTranslationGenerationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VideoTranslationGenerationCreateWithoutUserInput, VideoTranslationGenerationUncheckedCreateWithoutUserInput> | VideoTranslationGenerationCreateWithoutUserInput[] | VideoTranslationGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VideoTranslationGenerationCreateOrConnectWithoutUserInput | VideoTranslationGenerationCreateOrConnectWithoutUserInput[]
    upsert?: VideoTranslationGenerationUpsertWithWhereUniqueWithoutUserInput | VideoTranslationGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VideoTranslationGenerationCreateManyUserInputEnvelope
    set?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
    disconnect?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
    delete?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
    connect?: VideoTranslationGenerationWhereUniqueInput | VideoTranslationGenerationWhereUniqueInput[]
    update?: VideoTranslationGenerationUpdateWithWhereUniqueWithoutUserInput | VideoTranslationGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VideoTranslationGenerationUpdateManyWithWhereWithoutUserInput | VideoTranslationGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VideoTranslationGenerationScalarWhereInput | VideoTranslationGenerationScalarWhereInput[]
  }

  export type ChangeVideoAudioGenerationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChangeVideoAudioGenerationCreateWithoutUserInput, ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput> | ChangeVideoAudioGenerationCreateWithoutUserInput[] | ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChangeVideoAudioGenerationCreateOrConnectWithoutUserInput | ChangeVideoAudioGenerationCreateOrConnectWithoutUserInput[]
    upsert?: ChangeVideoAudioGenerationUpsertWithWhereUniqueWithoutUserInput | ChangeVideoAudioGenerationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChangeVideoAudioGenerationCreateManyUserInputEnvelope
    set?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
    disconnect?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
    delete?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
    connect?: ChangeVideoAudioGenerationWhereUniqueInput | ChangeVideoAudioGenerationWhereUniqueInput[]
    update?: ChangeVideoAudioGenerationUpdateWithWhereUniqueWithoutUserInput | ChangeVideoAudioGenerationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChangeVideoAudioGenerationUpdateManyWithWhereWithoutUserInput | ChangeVideoAudioGenerationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChangeVideoAudioGenerationScalarWhereInput | ChangeVideoAudioGenerationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPhotoToVideoGenerationsInput = {
    create?: XOR<UserCreateWithoutPhotoToVideoGenerationsInput, UserUncheckedCreateWithoutPhotoToVideoGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoToVideoGenerationsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPhotoToVideoGenerationsNestedInput = {
    create?: XOR<UserCreateWithoutPhotoToVideoGenerationsInput, UserUncheckedCreateWithoutPhotoToVideoGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPhotoToVideoGenerationsInput
    upsert?: UserUpsertWithoutPhotoToVideoGenerationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPhotoToVideoGenerationsInput, UserUpdateWithoutPhotoToVideoGenerationsInput>, UserUncheckedUpdateWithoutPhotoToVideoGenerationsInput>
  }

  export type UserCreateNestedOneWithoutVideoTranslationGenerationsInput = {
    create?: XOR<UserCreateWithoutVideoTranslationGenerationsInput, UserUncheckedCreateWithoutVideoTranslationGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoTranslationGenerationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutVideoTranslationGenerationsNestedInput = {
    create?: XOR<UserCreateWithoutVideoTranslationGenerationsInput, UserUncheckedCreateWithoutVideoTranslationGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVideoTranslationGenerationsInput
    upsert?: UserUpsertWithoutVideoTranslationGenerationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVideoTranslationGenerationsInput, UserUpdateWithoutVideoTranslationGenerationsInput>, UserUncheckedUpdateWithoutVideoTranslationGenerationsInput>
  }

  export type UserCreateNestedOneWithoutChangeVideoAudioGenerationsInput = {
    create?: XOR<UserCreateWithoutChangeVideoAudioGenerationsInput, UserUncheckedCreateWithoutChangeVideoAudioGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChangeVideoAudioGenerationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChangeVideoAudioGenerationsNestedInput = {
    create?: XOR<UserCreateWithoutChangeVideoAudioGenerationsInput, UserUncheckedCreateWithoutChangeVideoAudioGenerationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChangeVideoAudioGenerationsInput
    upsert?: UserUpsertWithoutChangeVideoAudioGenerationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChangeVideoAudioGenerationsInput, UserUpdateWithoutChangeVideoAudioGenerationsInput>, UserUncheckedUpdateWithoutChangeVideoAudioGenerationsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PhotoToVideoGenerationCreateWithoutUserInput = {
    id?: string
    name: string
    photoS3Key?: string | null
    script?: string | null
    drivingAudioS3Key?: string | null
    voiceS3Key?: string | null
    expressiveness?: number | null
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
  }

  export type PhotoToVideoGenerationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    photoS3Key?: string | null
    script?: string | null
    drivingAudioS3Key?: string | null
    voiceS3Key?: string | null
    expressiveness?: number | null
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
  }

  export type PhotoToVideoGenerationCreateOrConnectWithoutUserInput = {
    where: PhotoToVideoGenerationWhereUniqueInput
    create: XOR<PhotoToVideoGenerationCreateWithoutUserInput, PhotoToVideoGenerationUncheckedCreateWithoutUserInput>
  }

  export type PhotoToVideoGenerationCreateManyUserInputEnvelope = {
    data: PhotoToVideoGenerationCreateManyUserInput | PhotoToVideoGenerationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VideoTranslationGenerationCreateWithoutUserInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    targetLanguage?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
  }

  export type VideoTranslationGenerationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    targetLanguage?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
  }

  export type VideoTranslationGenerationCreateOrConnectWithoutUserInput = {
    where: VideoTranslationGenerationWhereUniqueInput
    create: XOR<VideoTranslationGenerationCreateWithoutUserInput, VideoTranslationGenerationUncheckedCreateWithoutUserInput>
  }

  export type VideoTranslationGenerationCreateManyUserInputEnvelope = {
    data: VideoTranslationGenerationCreateManyUserInput | VideoTranslationGenerationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChangeVideoAudioGenerationCreateWithoutUserInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    newAudioS3Key?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
  }

  export type ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    newAudioS3Key?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
  }

  export type ChangeVideoAudioGenerationCreateOrConnectWithoutUserInput = {
    where: ChangeVideoAudioGenerationWhereUniqueInput
    create: XOR<ChangeVideoAudioGenerationCreateWithoutUserInput, ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput>
  }

  export type ChangeVideoAudioGenerationCreateManyUserInputEnvelope = {
    data: ChangeVideoAudioGenerationCreateManyUserInput | ChangeVideoAudioGenerationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type PhotoToVideoGenerationUpsertWithWhereUniqueWithoutUserInput = {
    where: PhotoToVideoGenerationWhereUniqueInput
    update: XOR<PhotoToVideoGenerationUpdateWithoutUserInput, PhotoToVideoGenerationUncheckedUpdateWithoutUserInput>
    create: XOR<PhotoToVideoGenerationCreateWithoutUserInput, PhotoToVideoGenerationUncheckedCreateWithoutUserInput>
  }

  export type PhotoToVideoGenerationUpdateWithWhereUniqueWithoutUserInput = {
    where: PhotoToVideoGenerationWhereUniqueInput
    data: XOR<PhotoToVideoGenerationUpdateWithoutUserInput, PhotoToVideoGenerationUncheckedUpdateWithoutUserInput>
  }

  export type PhotoToVideoGenerationUpdateManyWithWhereWithoutUserInput = {
    where: PhotoToVideoGenerationScalarWhereInput
    data: XOR<PhotoToVideoGenerationUpdateManyMutationInput, PhotoToVideoGenerationUncheckedUpdateManyWithoutUserInput>
  }

  export type PhotoToVideoGenerationScalarWhereInput = {
    AND?: PhotoToVideoGenerationScalarWhereInput | PhotoToVideoGenerationScalarWhereInput[]
    OR?: PhotoToVideoGenerationScalarWhereInput[]
    NOT?: PhotoToVideoGenerationScalarWhereInput | PhotoToVideoGenerationScalarWhereInput[]
    id?: StringFilter<"PhotoToVideoGeneration"> | string
    name?: StringFilter<"PhotoToVideoGeneration"> | string
    photoS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    script?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    drivingAudioS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    voiceS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    expressiveness?: FloatNullableFilter<"PhotoToVideoGeneration"> | number | null
    enhancement?: BoolFilter<"PhotoToVideoGeneration"> | boolean
    experimentalModel?: BoolFilter<"PhotoToVideoGeneration"> | boolean
    resolution?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    videoS3Key?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    status?: StringFilter<"PhotoToVideoGeneration"> | string
    falJobId?: StringNullableFilter<"PhotoToVideoGeneration"> | string | null
    createdAt?: DateTimeFilter<"PhotoToVideoGeneration"> | Date | string
    userId?: StringFilter<"PhotoToVideoGeneration"> | string
  }

  export type VideoTranslationGenerationUpsertWithWhereUniqueWithoutUserInput = {
    where: VideoTranslationGenerationWhereUniqueInput
    update: XOR<VideoTranslationGenerationUpdateWithoutUserInput, VideoTranslationGenerationUncheckedUpdateWithoutUserInput>
    create: XOR<VideoTranslationGenerationCreateWithoutUserInput, VideoTranslationGenerationUncheckedCreateWithoutUserInput>
  }

  export type VideoTranslationGenerationUpdateWithWhereUniqueWithoutUserInput = {
    where: VideoTranslationGenerationWhereUniqueInput
    data: XOR<VideoTranslationGenerationUpdateWithoutUserInput, VideoTranslationGenerationUncheckedUpdateWithoutUserInput>
  }

  export type VideoTranslationGenerationUpdateManyWithWhereWithoutUserInput = {
    where: VideoTranslationGenerationScalarWhereInput
    data: XOR<VideoTranslationGenerationUpdateManyMutationInput, VideoTranslationGenerationUncheckedUpdateManyWithoutUserInput>
  }

  export type VideoTranslationGenerationScalarWhereInput = {
    AND?: VideoTranslationGenerationScalarWhereInput | VideoTranslationGenerationScalarWhereInput[]
    OR?: VideoTranslationGenerationScalarWhereInput[]
    NOT?: VideoTranslationGenerationScalarWhereInput | VideoTranslationGenerationScalarWhereInput[]
    id?: StringFilter<"VideoTranslationGeneration"> | string
    name?: StringFilter<"VideoTranslationGeneration"> | string
    sourceVideoS3Key?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    targetLanguage?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    videoS3Key?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    status?: StringFilter<"VideoTranslationGeneration"> | string
    falJobId?: StringNullableFilter<"VideoTranslationGeneration"> | string | null
    createdAt?: DateTimeFilter<"VideoTranslationGeneration"> | Date | string
    userId?: StringFilter<"VideoTranslationGeneration"> | string
  }

  export type ChangeVideoAudioGenerationUpsertWithWhereUniqueWithoutUserInput = {
    where: ChangeVideoAudioGenerationWhereUniqueInput
    update: XOR<ChangeVideoAudioGenerationUpdateWithoutUserInput, ChangeVideoAudioGenerationUncheckedUpdateWithoutUserInput>
    create: XOR<ChangeVideoAudioGenerationCreateWithoutUserInput, ChangeVideoAudioGenerationUncheckedCreateWithoutUserInput>
  }

  export type ChangeVideoAudioGenerationUpdateWithWhereUniqueWithoutUserInput = {
    where: ChangeVideoAudioGenerationWhereUniqueInput
    data: XOR<ChangeVideoAudioGenerationUpdateWithoutUserInput, ChangeVideoAudioGenerationUncheckedUpdateWithoutUserInput>
  }

  export type ChangeVideoAudioGenerationUpdateManyWithWhereWithoutUserInput = {
    where: ChangeVideoAudioGenerationScalarWhereInput
    data: XOR<ChangeVideoAudioGenerationUpdateManyMutationInput, ChangeVideoAudioGenerationUncheckedUpdateManyWithoutUserInput>
  }

  export type ChangeVideoAudioGenerationScalarWhereInput = {
    AND?: ChangeVideoAudioGenerationScalarWhereInput | ChangeVideoAudioGenerationScalarWhereInput[]
    OR?: ChangeVideoAudioGenerationScalarWhereInput[]
    NOT?: ChangeVideoAudioGenerationScalarWhereInput | ChangeVideoAudioGenerationScalarWhereInput[]
    id?: StringFilter<"ChangeVideoAudioGeneration"> | string
    name?: StringFilter<"ChangeVideoAudioGeneration"> | string
    sourceVideoS3Key?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    newAudioS3Key?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    videoS3Key?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    status?: StringFilter<"ChangeVideoAudioGeneration"> | string
    falJobId?: StringNullableFilter<"ChangeVideoAudioGeneration"> | string | null
    createdAt?: DateTimeFilter<"ChangeVideoAudioGeneration"> | Date | string
    userId?: StringFilter<"ChangeVideoAudioGeneration"> | string
  }

  export type UserCreateWithoutPhotoToVideoGenerationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPhotoToVideoGenerationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPhotoToVideoGenerationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPhotoToVideoGenerationsInput, UserUncheckedCreateWithoutPhotoToVideoGenerationsInput>
  }

  export type UserUpsertWithoutPhotoToVideoGenerationsInput = {
    update: XOR<UserUpdateWithoutPhotoToVideoGenerationsInput, UserUncheckedUpdateWithoutPhotoToVideoGenerationsInput>
    create: XOR<UserCreateWithoutPhotoToVideoGenerationsInput, UserUncheckedCreateWithoutPhotoToVideoGenerationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPhotoToVideoGenerationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPhotoToVideoGenerationsInput, UserUncheckedUpdateWithoutPhotoToVideoGenerationsInput>
  }

  export type UserUpdateWithoutPhotoToVideoGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPhotoToVideoGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVideoTranslationGenerationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVideoTranslationGenerationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVideoTranslationGenerationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVideoTranslationGenerationsInput, UserUncheckedCreateWithoutVideoTranslationGenerationsInput>
  }

  export type UserUpsertWithoutVideoTranslationGenerationsInput = {
    update: XOR<UserUpdateWithoutVideoTranslationGenerationsInput, UserUncheckedUpdateWithoutVideoTranslationGenerationsInput>
    create: XOR<UserCreateWithoutVideoTranslationGenerationsInput, UserUncheckedCreateWithoutVideoTranslationGenerationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVideoTranslationGenerationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVideoTranslationGenerationsInput, UserUncheckedUpdateWithoutVideoTranslationGenerationsInput>
  }

  export type UserUpdateWithoutVideoTranslationGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVideoTranslationGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutChangeVideoAudioGenerationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChangeVideoAudioGenerationsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChangeVideoAudioGenerationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChangeVideoAudioGenerationsInput, UserUncheckedCreateWithoutChangeVideoAudioGenerationsInput>
  }

  export type UserUpsertWithoutChangeVideoAudioGenerationsInput = {
    update: XOR<UserUpdateWithoutChangeVideoAudioGenerationsInput, UserUncheckedUpdateWithoutChangeVideoAudioGenerationsInput>
    create: XOR<UserCreateWithoutChangeVideoAudioGenerationsInput, UserUncheckedCreateWithoutChangeVideoAudioGenerationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChangeVideoAudioGenerationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChangeVideoAudioGenerationsInput, UserUncheckedUpdateWithoutChangeVideoAudioGenerationsInput>
  }

  export type UserUpdateWithoutChangeVideoAudioGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChangeVideoAudioGenerationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    accounts?: AccountCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    credits?: number
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedCreateNestedManyWithoutUserInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedCreateNestedManyWithoutUserInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    photoToVideoGenerations?: PhotoToVideoGenerationUncheckedUpdateManyWithoutUserNestedInput
    videoTranslationGenerations?: VideoTranslationGenerationUncheckedUpdateManyWithoutUserNestedInput
    changeVideoAudioGenerations?: ChangeVideoAudioGenerationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoToVideoGenerationCreateManyUserInput = {
    id?: string
    name: string
    photoS3Key?: string | null
    script?: string | null
    drivingAudioS3Key?: string | null
    voiceS3Key?: string | null
    expressiveness?: number | null
    enhancement?: boolean
    experimentalModel?: boolean
    resolution?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
  }

  export type VideoTranslationGenerationCreateManyUserInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    targetLanguage?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
  }

  export type ChangeVideoAudioGenerationCreateManyUserInput = {
    id?: string
    name: string
    sourceVideoS3Key?: string | null
    newAudioS3Key?: string | null
    videoS3Key?: string | null
    status?: string
    falJobId?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoToVideoGenerationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    script?: NullableStringFieldUpdateOperationsInput | string | null
    drivingAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    voiceS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    expressiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    enhancement?: BoolFieldUpdateOperationsInput | boolean
    experimentalModel?: BoolFieldUpdateOperationsInput | boolean
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoToVideoGenerationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    script?: NullableStringFieldUpdateOperationsInput | string | null
    drivingAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    voiceS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    expressiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    enhancement?: BoolFieldUpdateOperationsInput | boolean
    experimentalModel?: BoolFieldUpdateOperationsInput | boolean
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoToVideoGenerationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    photoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    script?: NullableStringFieldUpdateOperationsInput | string | null
    drivingAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    voiceS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    expressiveness?: NullableFloatFieldUpdateOperationsInput | number | null
    enhancement?: BoolFieldUpdateOperationsInput | boolean
    experimentalModel?: BoolFieldUpdateOperationsInput | boolean
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTranslationGenerationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    targetLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTranslationGenerationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    targetLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoTranslationGenerationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    targetLanguage?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangeVideoAudioGenerationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    newAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangeVideoAudioGenerationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    newAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChangeVideoAudioGenerationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sourceVideoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    newAudioS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    videoS3Key?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    falJobId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}