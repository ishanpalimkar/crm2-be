
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
 * Model Email
 * 
 */
export type Email = $Result.DefaultSelection<Prisma.$EmailPayload>
/**
 * Model MobileNumber
 * 
 */
export type MobileNumber = $Result.DefaultSelection<Prisma.$MobileNumberPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model TeacherEligibility
 * 
 */
export type TeacherEligibility = $Result.DefaultSelection<Prisma.$TeacherEligibilityPayload>
/**
 * Model ProgramType
 * 
 */
export type ProgramType = $Result.DefaultSelection<Prisma.$ProgramTypePayload>
/**
 * Model Center
 * 
 */
export type Center = $Result.DefaultSelection<Prisma.$CenterPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model Registration
 * 
 */
export type Registration = $Result.DefaultSelection<Prisma.$RegistrationPayload>

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.email`: Exposes CRUD operations for the **Email** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.email.findMany()
    * ```
    */
  get email(): Prisma.EmailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mobileNumber`: Exposes CRUD operations for the **MobileNumber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MobileNumbers
    * const mobileNumbers = await prisma.mobileNumber.findMany()
    * ```
    */
  get mobileNumber(): Prisma.MobileNumberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherEligibility`: Exposes CRUD operations for the **TeacherEligibility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherEligibilities
    * const teacherEligibilities = await prisma.teacherEligibility.findMany()
    * ```
    */
  get teacherEligibility(): Prisma.TeacherEligibilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programType`: Exposes CRUD operations for the **ProgramType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProgramTypes
    * const programTypes = await prisma.programType.findMany()
    * ```
    */
  get programType(): Prisma.ProgramTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.center`: Exposes CRUD operations for the **Center** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Centers
    * const centers = await prisma.center.findMany()
    * ```
    */
  get center(): Prisma.CenterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registration`: Exposes CRUD operations for the **Registration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registration.findMany()
    * ```
    */
  get registration(): Prisma.RegistrationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Email: 'Email',
    MobileNumber: 'MobileNumber',
    Address: 'Address',
    Teacher: 'Teacher',
    TeacherEligibility: 'TeacherEligibility',
    ProgramType: 'ProgramType',
    Center: 'Center',
    Program: 'Program',
    Registration: 'Registration'
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
      modelProps: "user" | "email" | "mobileNumber" | "address" | "teacher" | "teacherEligibility" | "programType" | "center" | "program" | "registration"
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
      Email: {
        payload: Prisma.$EmailPayload<ExtArgs>
        fields: Prisma.EmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findFirst: {
            args: Prisma.EmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          findMany: {
            args: Prisma.EmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>[]
          }
          create: {
            args: Prisma.EmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          createMany: {
            args: Prisma.EmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          update: {
            args: Prisma.EmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          deleteMany: {
            args: Prisma.EmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailPayload>
          }
          aggregate: {
            args: Prisma.EmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmail>
          }
          groupBy: {
            args: Prisma.EmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailCountArgs<ExtArgs>
            result: $Utils.Optional<EmailCountAggregateOutputType> | number
          }
        }
      }
      MobileNumber: {
        payload: Prisma.$MobileNumberPayload<ExtArgs>
        fields: Prisma.MobileNumberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MobileNumberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileNumberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MobileNumberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileNumberPayload>
          }
          findFirst: {
            args: Prisma.MobileNumberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileNumberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MobileNumberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileNumberPayload>
          }
          findMany: {
            args: Prisma.MobileNumberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileNumberPayload>[]
          }
          create: {
            args: Prisma.MobileNumberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileNumberPayload>
          }
          createMany: {
            args: Prisma.MobileNumberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MobileNumberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileNumberPayload>
          }
          update: {
            args: Prisma.MobileNumberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileNumberPayload>
          }
          deleteMany: {
            args: Prisma.MobileNumberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MobileNumberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MobileNumberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MobileNumberPayload>
          }
          aggregate: {
            args: Prisma.MobileNumberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMobileNumber>
          }
          groupBy: {
            args: Prisma.MobileNumberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MobileNumberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MobileNumberCountArgs<ExtArgs>
            result: $Utils.Optional<MobileNumberCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      TeacherEligibility: {
        payload: Prisma.$TeacherEligibilityPayload<ExtArgs>
        fields: Prisma.TeacherEligibilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherEligibilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherEligibilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherEligibilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherEligibilityPayload>
          }
          findFirst: {
            args: Prisma.TeacherEligibilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherEligibilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherEligibilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherEligibilityPayload>
          }
          findMany: {
            args: Prisma.TeacherEligibilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherEligibilityPayload>[]
          }
          create: {
            args: Prisma.TeacherEligibilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherEligibilityPayload>
          }
          createMany: {
            args: Prisma.TeacherEligibilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeacherEligibilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherEligibilityPayload>
          }
          update: {
            args: Prisma.TeacherEligibilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherEligibilityPayload>
          }
          deleteMany: {
            args: Prisma.TeacherEligibilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherEligibilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherEligibilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherEligibilityPayload>
          }
          aggregate: {
            args: Prisma.TeacherEligibilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherEligibility>
          }
          groupBy: {
            args: Prisma.TeacherEligibilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherEligibilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherEligibilityCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherEligibilityCountAggregateOutputType> | number
          }
        }
      }
      ProgramType: {
        payload: Prisma.$ProgramTypePayload<ExtArgs>
        fields: Prisma.ProgramTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTypePayload>
          }
          findFirst: {
            args: Prisma.ProgramTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTypePayload>
          }
          findMany: {
            args: Prisma.ProgramTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTypePayload>[]
          }
          create: {
            args: Prisma.ProgramTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTypePayload>
          }
          createMany: {
            args: Prisma.ProgramTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgramTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTypePayload>
          }
          update: {
            args: Prisma.ProgramTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTypePayload>
          }
          deleteMany: {
            args: Prisma.ProgramTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramTypePayload>
          }
          aggregate: {
            args: Prisma.ProgramTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgramType>
          }
          groupBy: {
            args: Prisma.ProgramTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramTypeCountAggregateOutputType> | number
          }
        }
      }
      Center: {
        payload: Prisma.$CenterPayload<ExtArgs>
        fields: Prisma.CenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CenterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CenterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          findFirst: {
            args: Prisma.CenterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CenterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          findMany: {
            args: Prisma.CenterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>[]
          }
          create: {
            args: Prisma.CenterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          createMany: {
            args: Prisma.CenterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CenterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          update: {
            args: Prisma.CenterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          deleteMany: {
            args: Prisma.CenterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CenterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CenterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          aggregate: {
            args: Prisma.CenterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCenter>
          }
          groupBy: {
            args: Prisma.CenterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CenterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CenterCountArgs<ExtArgs>
            result: $Utils.Optional<CenterCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      Registration: {
        payload: Prisma.$RegistrationPayload<ExtArgs>
        fields: Prisma.RegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findFirst: {
            args: Prisma.RegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findMany: {
            args: Prisma.RegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          create: {
            args: Prisma.RegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          createMany: {
            args: Prisma.RegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          update: {
            args: Prisma.RegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          aggregate: {
            args: Prisma.RegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistration>
          }
          groupBy: {
            args: Prisma.RegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    email?: EmailOmit
    mobileNumber?: MobileNumberOmit
    address?: AddressOmit
    teacher?: TeacherOmit
    teacherEligibility?: TeacherEligibilityOmit
    programType?: ProgramTypeOmit
    center?: CenterOmit
    program?: ProgramOmit
    registration?: RegistrationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    emails: number
    addresses: number
    mobileNumbers: number
    registrations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | UserCountOutputTypeCountEmailsArgs
    addresses?: boolean | UserCountOutputTypeCountAddressesArgs
    mobileNumbers?: boolean | UserCountOutputTypeCountMobileNumbersArgs
    registrations?: boolean | UserCountOutputTypeCountRegistrationsArgs
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
  export type UserCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMobileNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MobileNumberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    eligibility: number
    programs: number
    coTaughtPrograms: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eligibility?: boolean | TeacherCountOutputTypeCountEligibilityArgs
    programs?: boolean | TeacherCountOutputTypeCountProgramsArgs
    coTaughtPrograms?: boolean | TeacherCountOutputTypeCountCoTaughtProgramsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountEligibilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherEligibilityWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountCoTaughtProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }


  /**
   * Count Type ProgramTypeCountOutputType
   */

  export type ProgramTypeCountOutputType = {
    teacherEligibility: number
    programs: number
  }

  export type ProgramTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherEligibility?: boolean | ProgramTypeCountOutputTypeCountTeacherEligibilityArgs
    programs?: boolean | ProgramTypeCountOutputTypeCountProgramsArgs
  }

  // Custom InputTypes
  /**
   * ProgramTypeCountOutputType without action
   */
  export type ProgramTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramTypeCountOutputType
     */
    select?: ProgramTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramTypeCountOutputType without action
   */
  export type ProgramTypeCountOutputTypeCountTeacherEligibilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherEligibilityWhereInput
  }

  /**
   * ProgramTypeCountOutputType without action
   */
  export type ProgramTypeCountOutputTypeCountProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }


  /**
   * Count Type CenterCountOutputType
   */

  export type CenterCountOutputType = {
    programs: number
  }

  export type CenterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programs?: boolean | CenterCountOutputTypeCountProgramsArgs
  }

  // Custom InputTypes
  /**
   * CenterCountOutputType without action
   */
  export type CenterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CenterCountOutputType
     */
    select?: CenterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CenterCountOutputType without action
   */
  export type CenterCountOutputTypeCountProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    coTeachers: number
    registrations: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coTeachers?: boolean | ProgramCountOutputTypeCountCoTeachersArgs
    registrations?: boolean | ProgramCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountCoTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    email: string | null
    mobileNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    email: string | null
    mobileNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    email: number
    mobileNumber: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    mobileNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    mobileNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    mobileNumber?: true
    createdAt?: true
    updatedAt?: true
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
    id: number
    userId: string
    name: string
    email: string | null
    mobileNumber: string | null
    createdAt: Date
    updatedAt: Date
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
    userId?: boolean
    name?: boolean
    email?: boolean
    mobileNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emails?: boolean | User$emailsArgs<ExtArgs>
    addresses?: boolean | User$addressesArgs<ExtArgs>
    mobileNumbers?: boolean | User$mobileNumbersArgs<ExtArgs>
    teacher?: boolean | User$teacherArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    mobileNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "email" | "mobileNumber" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emails?: boolean | User$emailsArgs<ExtArgs>
    addresses?: boolean | User$addressesArgs<ExtArgs>
    mobileNumbers?: boolean | User$mobileNumbersArgs<ExtArgs>
    teacher?: boolean | User$teacherArgs<ExtArgs>
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emails: Prisma.$EmailPayload<ExtArgs>[]
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      mobileNumbers: Prisma.$MobileNumberPayload<ExtArgs>[]
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string
      email: string | null
      mobileNumber: string | null
      createdAt: Date
      updatedAt: Date
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
    emails<T extends User$emailsArgs<ExtArgs> = {}>(args?: Subset<T, User$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresses<T extends User$addressesArgs<ExtArgs> = {}>(args?: Subset<T, User$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mobileNumbers<T extends User$mobileNumbersArgs<ExtArgs> = {}>(args?: Subset<T, User$mobileNumbersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teacher<T extends User$teacherArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    registrations<T extends User$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly userId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly mobileNumber: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.emails
   */
  export type User$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    cursor?: EmailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * User.addresses
   */
  export type User$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * User.mobileNumbers
   */
  export type User$mobileNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    where?: MobileNumberWhereInput
    orderBy?: MobileNumberOrderByWithRelationInput | MobileNumberOrderByWithRelationInput[]
    cursor?: MobileNumberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MobileNumberScalarFieldEnum | MobileNumberScalarFieldEnum[]
  }

  /**
   * User.teacher
   */
  export type User$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * User.registrations
   */
  export type User$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
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
   * Model Email
   */

  export type AggregateEmail = {
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  export type EmailAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailMinAggregateOutputType = {
    id: number | null
    email: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type EmailMaxAggregateOutputType = {
    id: number | null
    email: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type EmailCountAggregateOutputType = {
    id: number
    email: number
    isDefault: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type EmailAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailMinAggregateInputType = {
    id?: true
    email?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type EmailMaxAggregateInputType = {
    id?: true
    email?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type EmailCountAggregateInputType = {
    id?: true
    email?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type EmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Email to aggregate.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emails
    **/
    _count?: true | EmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailMaxAggregateInputType
  }

  export type GetEmailAggregateType<T extends EmailAggregateArgs> = {
        [P in keyof T & keyof AggregateEmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmail[P]>
      : GetScalarType<T[P], AggregateEmail[P]>
  }




  export type EmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailWhereInput
    orderBy?: EmailOrderByWithAggregationInput | EmailOrderByWithAggregationInput[]
    by: EmailScalarFieldEnum[] | EmailScalarFieldEnum
    having?: EmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailCountAggregateInputType | true
    _avg?: EmailAvgAggregateInputType
    _sum?: EmailSumAggregateInputType
    _min?: EmailMinAggregateInputType
    _max?: EmailMaxAggregateInputType
  }

  export type EmailGroupByOutputType = {
    id: number
    email: string
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: EmailCountAggregateOutputType | null
    _avg: EmailAvgAggregateOutputType | null
    _sum: EmailSumAggregateOutputType | null
    _min: EmailMinAggregateOutputType | null
    _max: EmailMaxAggregateOutputType | null
  }

  type GetEmailGroupByPayload<T extends EmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailGroupByOutputType[P]>
            : GetScalarType<T[P], EmailGroupByOutputType[P]>
        }
      >
    >


  export type EmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["email"]>



  export type EmailSelectScalar = {
    id?: boolean
    email?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type EmailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "isDefault" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["email"]>
  export type EmailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Email"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["email"]>
    composites: {}
  }

  type EmailGetPayload<S extends boolean | null | undefined | EmailDefaultArgs> = $Result.GetResult<Prisma.$EmailPayload, S>

  type EmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailCountAggregateInputType | true
    }

  export interface EmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Email'], meta: { name: 'Email' } }
    /**
     * Find zero or one Email that matches the filter.
     * @param {EmailFindUniqueArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailFindUniqueArgs>(args: SelectSubset<T, EmailFindUniqueArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Email that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailFindUniqueOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailFindFirstArgs>(args?: SelectSubset<T, EmailFindFirstArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Email that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindFirstOrThrowArgs} args - Arguments to find a Email
     * @example
     * // Get one Email
     * const email = await prisma.email.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.email.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.email.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailWithIdOnly = await prisma.email.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailFindManyArgs>(args?: SelectSubset<T, EmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Email.
     * @param {EmailCreateArgs} args - Arguments to create a Email.
     * @example
     * // Create one Email
     * const Email = await prisma.email.create({
     *   data: {
     *     // ... data to create a Email
     *   }
     * })
     * 
     */
    create<T extends EmailCreateArgs>(args: SelectSubset<T, EmailCreateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {EmailCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const email = await prisma.email.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailCreateManyArgs>(args?: SelectSubset<T, EmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Email.
     * @param {EmailDeleteArgs} args - Arguments to delete one Email.
     * @example
     * // Delete one Email
     * const Email = await prisma.email.delete({
     *   where: {
     *     // ... filter to delete one Email
     *   }
     * })
     * 
     */
    delete<T extends EmailDeleteArgs>(args: SelectSubset<T, EmailDeleteArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Email.
     * @param {EmailUpdateArgs} args - Arguments to update one Email.
     * @example
     * // Update one Email
     * const email = await prisma.email.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailUpdateArgs>(args: SelectSubset<T, EmailUpdateArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {EmailDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.email.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailDeleteManyArgs>(args?: SelectSubset<T, EmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const email = await prisma.email.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailUpdateManyArgs>(args: SelectSubset<T, EmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Email.
     * @param {EmailUpsertArgs} args - Arguments to update or create a Email.
     * @example
     * // Update or create a Email
     * const email = await prisma.email.upsert({
     *   create: {
     *     // ... data to create a Email
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Email we want to update
     *   }
     * })
     */
    upsert<T extends EmailUpsertArgs>(args: SelectSubset<T, EmailUpsertArgs<ExtArgs>>): Prisma__EmailClient<$Result.GetResult<Prisma.$EmailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.email.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends EmailCountArgs>(
      args?: Subset<T, EmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailAggregateArgs>(args: Subset<T, EmailAggregateArgs>): Prisma.PrismaPromise<GetEmailAggregateType<T>>

    /**
     * Group by Email.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailGroupByArgs} args - Group by arguments.
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
      T extends EmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailGroupByArgs['orderBy'] }
        : { orderBy?: EmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Email model
   */
  readonly fields: EmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Email.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Email model
   */
  interface EmailFieldRefs {
    readonly id: FieldRef<"Email", 'Int'>
    readonly email: FieldRef<"Email", 'String'>
    readonly isDefault: FieldRef<"Email", 'Boolean'>
    readonly createdAt: FieldRef<"Email", 'DateTime'>
    readonly updatedAt: FieldRef<"Email", 'DateTime'>
    readonly userId: FieldRef<"Email", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Email findUnique
   */
  export type EmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findUniqueOrThrow
   */
  export type EmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email findFirst
   */
  export type EmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findFirstOrThrow
   */
  export type EmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Email to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emails.
     */
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email findMany
   */
  export type EmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter, which Emails to fetch.
     */
    where?: EmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emails to fetch.
     */
    orderBy?: EmailOrderByWithRelationInput | EmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emails.
     */
    cursor?: EmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emails.
     */
    skip?: number
    distinct?: EmailScalarFieldEnum | EmailScalarFieldEnum[]
  }

  /**
   * Email create
   */
  export type EmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to create a Email.
     */
    data: XOR<EmailCreateInput, EmailUncheckedCreateInput>
  }

  /**
   * Email createMany
   */
  export type EmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emails.
     */
    data: EmailCreateManyInput | EmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Email update
   */
  export type EmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The data needed to update a Email.
     */
    data: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
    /**
     * Choose, which Email to update.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email updateMany
   */
  export type EmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emails.
     */
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyInput>
    /**
     * Filter which Emails to update
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to update.
     */
    limit?: number
  }

  /**
   * Email upsert
   */
  export type EmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * The filter to search for the Email to update in case it exists.
     */
    where: EmailWhereUniqueInput
    /**
     * In case the Email found by the `where` argument doesn't exist, create a new Email with this data.
     */
    create: XOR<EmailCreateInput, EmailUncheckedCreateInput>
    /**
     * In case the Email was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailUpdateInput, EmailUncheckedUpdateInput>
  }

  /**
   * Email delete
   */
  export type EmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
    /**
     * Filter which Email to delete.
     */
    where: EmailWhereUniqueInput
  }

  /**
   * Email deleteMany
   */
  export type EmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emails to delete
     */
    where?: EmailWhereInput
    /**
     * Limit how many Emails to delete.
     */
    limit?: number
  }

  /**
   * Email without action
   */
  export type EmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Email
     */
    select?: EmailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Email
     */
    omit?: EmailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailInclude<ExtArgs> | null
  }


  /**
   * Model MobileNumber
   */

  export type AggregateMobileNumber = {
    _count: MobileNumberCountAggregateOutputType | null
    _avg: MobileNumberAvgAggregateOutputType | null
    _sum: MobileNumberSumAggregateOutputType | null
    _min: MobileNumberMinAggregateOutputType | null
    _max: MobileNumberMaxAggregateOutputType | null
  }

  export type MobileNumberAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MobileNumberSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MobileNumberMinAggregateOutputType = {
    id: number | null
    mobileNumber: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type MobileNumberMaxAggregateOutputType = {
    id: number | null
    mobileNumber: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type MobileNumberCountAggregateOutputType = {
    id: number
    mobileNumber: number
    isDefault: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MobileNumberAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MobileNumberSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MobileNumberMinAggregateInputType = {
    id?: true
    mobileNumber?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MobileNumberMaxAggregateInputType = {
    id?: true
    mobileNumber?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MobileNumberCountAggregateInputType = {
    id?: true
    mobileNumber?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MobileNumberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MobileNumber to aggregate.
     */
    where?: MobileNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileNumbers to fetch.
     */
    orderBy?: MobileNumberOrderByWithRelationInput | MobileNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MobileNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MobileNumbers
    **/
    _count?: true | MobileNumberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MobileNumberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MobileNumberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MobileNumberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MobileNumberMaxAggregateInputType
  }

  export type GetMobileNumberAggregateType<T extends MobileNumberAggregateArgs> = {
        [P in keyof T & keyof AggregateMobileNumber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMobileNumber[P]>
      : GetScalarType<T[P], AggregateMobileNumber[P]>
  }




  export type MobileNumberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MobileNumberWhereInput
    orderBy?: MobileNumberOrderByWithAggregationInput | MobileNumberOrderByWithAggregationInput[]
    by: MobileNumberScalarFieldEnum[] | MobileNumberScalarFieldEnum
    having?: MobileNumberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MobileNumberCountAggregateInputType | true
    _avg?: MobileNumberAvgAggregateInputType
    _sum?: MobileNumberSumAggregateInputType
    _min?: MobileNumberMinAggregateInputType
    _max?: MobileNumberMaxAggregateInputType
  }

  export type MobileNumberGroupByOutputType = {
    id: number
    mobileNumber: string
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: MobileNumberCountAggregateOutputType | null
    _avg: MobileNumberAvgAggregateOutputType | null
    _sum: MobileNumberSumAggregateOutputType | null
    _min: MobileNumberMinAggregateOutputType | null
    _max: MobileNumberMaxAggregateOutputType | null
  }

  type GetMobileNumberGroupByPayload<T extends MobileNumberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MobileNumberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MobileNumberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MobileNumberGroupByOutputType[P]>
            : GetScalarType<T[P], MobileNumberGroupByOutputType[P]>
        }
      >
    >


  export type MobileNumberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobileNumber?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mobileNumber"]>



  export type MobileNumberSelectScalar = {
    id?: boolean
    mobileNumber?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MobileNumberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mobileNumber" | "isDefault" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["mobileNumber"]>
  export type MobileNumberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MobileNumberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MobileNumber"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mobileNumber: string
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["mobileNumber"]>
    composites: {}
  }

  type MobileNumberGetPayload<S extends boolean | null | undefined | MobileNumberDefaultArgs> = $Result.GetResult<Prisma.$MobileNumberPayload, S>

  type MobileNumberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MobileNumberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MobileNumberCountAggregateInputType | true
    }

  export interface MobileNumberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MobileNumber'], meta: { name: 'MobileNumber' } }
    /**
     * Find zero or one MobileNumber that matches the filter.
     * @param {MobileNumberFindUniqueArgs} args - Arguments to find a MobileNumber
     * @example
     * // Get one MobileNumber
     * const mobileNumber = await prisma.mobileNumber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MobileNumberFindUniqueArgs>(args: SelectSubset<T, MobileNumberFindUniqueArgs<ExtArgs>>): Prisma__MobileNumberClient<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MobileNumber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MobileNumberFindUniqueOrThrowArgs} args - Arguments to find a MobileNumber
     * @example
     * // Get one MobileNumber
     * const mobileNumber = await prisma.mobileNumber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MobileNumberFindUniqueOrThrowArgs>(args: SelectSubset<T, MobileNumberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MobileNumberClient<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MobileNumber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileNumberFindFirstArgs} args - Arguments to find a MobileNumber
     * @example
     * // Get one MobileNumber
     * const mobileNumber = await prisma.mobileNumber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MobileNumberFindFirstArgs>(args?: SelectSubset<T, MobileNumberFindFirstArgs<ExtArgs>>): Prisma__MobileNumberClient<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MobileNumber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileNumberFindFirstOrThrowArgs} args - Arguments to find a MobileNumber
     * @example
     * // Get one MobileNumber
     * const mobileNumber = await prisma.mobileNumber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MobileNumberFindFirstOrThrowArgs>(args?: SelectSubset<T, MobileNumberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MobileNumberClient<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MobileNumbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileNumberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MobileNumbers
     * const mobileNumbers = await prisma.mobileNumber.findMany()
     * 
     * // Get first 10 MobileNumbers
     * const mobileNumbers = await prisma.mobileNumber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mobileNumberWithIdOnly = await prisma.mobileNumber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MobileNumberFindManyArgs>(args?: SelectSubset<T, MobileNumberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MobileNumber.
     * @param {MobileNumberCreateArgs} args - Arguments to create a MobileNumber.
     * @example
     * // Create one MobileNumber
     * const MobileNumber = await prisma.mobileNumber.create({
     *   data: {
     *     // ... data to create a MobileNumber
     *   }
     * })
     * 
     */
    create<T extends MobileNumberCreateArgs>(args: SelectSubset<T, MobileNumberCreateArgs<ExtArgs>>): Prisma__MobileNumberClient<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MobileNumbers.
     * @param {MobileNumberCreateManyArgs} args - Arguments to create many MobileNumbers.
     * @example
     * // Create many MobileNumbers
     * const mobileNumber = await prisma.mobileNumber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MobileNumberCreateManyArgs>(args?: SelectSubset<T, MobileNumberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MobileNumber.
     * @param {MobileNumberDeleteArgs} args - Arguments to delete one MobileNumber.
     * @example
     * // Delete one MobileNumber
     * const MobileNumber = await prisma.mobileNumber.delete({
     *   where: {
     *     // ... filter to delete one MobileNumber
     *   }
     * })
     * 
     */
    delete<T extends MobileNumberDeleteArgs>(args: SelectSubset<T, MobileNumberDeleteArgs<ExtArgs>>): Prisma__MobileNumberClient<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MobileNumber.
     * @param {MobileNumberUpdateArgs} args - Arguments to update one MobileNumber.
     * @example
     * // Update one MobileNumber
     * const mobileNumber = await prisma.mobileNumber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MobileNumberUpdateArgs>(args: SelectSubset<T, MobileNumberUpdateArgs<ExtArgs>>): Prisma__MobileNumberClient<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MobileNumbers.
     * @param {MobileNumberDeleteManyArgs} args - Arguments to filter MobileNumbers to delete.
     * @example
     * // Delete a few MobileNumbers
     * const { count } = await prisma.mobileNumber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MobileNumberDeleteManyArgs>(args?: SelectSubset<T, MobileNumberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MobileNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileNumberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MobileNumbers
     * const mobileNumber = await prisma.mobileNumber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MobileNumberUpdateManyArgs>(args: SelectSubset<T, MobileNumberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MobileNumber.
     * @param {MobileNumberUpsertArgs} args - Arguments to update or create a MobileNumber.
     * @example
     * // Update or create a MobileNumber
     * const mobileNumber = await prisma.mobileNumber.upsert({
     *   create: {
     *     // ... data to create a MobileNumber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MobileNumber we want to update
     *   }
     * })
     */
    upsert<T extends MobileNumberUpsertArgs>(args: SelectSubset<T, MobileNumberUpsertArgs<ExtArgs>>): Prisma__MobileNumberClient<$Result.GetResult<Prisma.$MobileNumberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MobileNumbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileNumberCountArgs} args - Arguments to filter MobileNumbers to count.
     * @example
     * // Count the number of MobileNumbers
     * const count = await prisma.mobileNumber.count({
     *   where: {
     *     // ... the filter for the MobileNumbers we want to count
     *   }
     * })
    **/
    count<T extends MobileNumberCountArgs>(
      args?: Subset<T, MobileNumberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MobileNumberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MobileNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileNumberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MobileNumberAggregateArgs>(args: Subset<T, MobileNumberAggregateArgs>): Prisma.PrismaPromise<GetMobileNumberAggregateType<T>>

    /**
     * Group by MobileNumber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileNumberGroupByArgs} args - Group by arguments.
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
      T extends MobileNumberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MobileNumberGroupByArgs['orderBy'] }
        : { orderBy?: MobileNumberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MobileNumberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMobileNumberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MobileNumber model
   */
  readonly fields: MobileNumberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MobileNumber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MobileNumberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MobileNumber model
   */
  interface MobileNumberFieldRefs {
    readonly id: FieldRef<"MobileNumber", 'Int'>
    readonly mobileNumber: FieldRef<"MobileNumber", 'String'>
    readonly isDefault: FieldRef<"MobileNumber", 'Boolean'>
    readonly createdAt: FieldRef<"MobileNumber", 'DateTime'>
    readonly updatedAt: FieldRef<"MobileNumber", 'DateTime'>
    readonly userId: FieldRef<"MobileNumber", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MobileNumber findUnique
   */
  export type MobileNumberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    /**
     * Filter, which MobileNumber to fetch.
     */
    where: MobileNumberWhereUniqueInput
  }

  /**
   * MobileNumber findUniqueOrThrow
   */
  export type MobileNumberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    /**
     * Filter, which MobileNumber to fetch.
     */
    where: MobileNumberWhereUniqueInput
  }

  /**
   * MobileNumber findFirst
   */
  export type MobileNumberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    /**
     * Filter, which MobileNumber to fetch.
     */
    where?: MobileNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileNumbers to fetch.
     */
    orderBy?: MobileNumberOrderByWithRelationInput | MobileNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobileNumbers.
     */
    cursor?: MobileNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobileNumbers.
     */
    distinct?: MobileNumberScalarFieldEnum | MobileNumberScalarFieldEnum[]
  }

  /**
   * MobileNumber findFirstOrThrow
   */
  export type MobileNumberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    /**
     * Filter, which MobileNumber to fetch.
     */
    where?: MobileNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileNumbers to fetch.
     */
    orderBy?: MobileNumberOrderByWithRelationInput | MobileNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobileNumbers.
     */
    cursor?: MobileNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileNumbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobileNumbers.
     */
    distinct?: MobileNumberScalarFieldEnum | MobileNumberScalarFieldEnum[]
  }

  /**
   * MobileNumber findMany
   */
  export type MobileNumberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    /**
     * Filter, which MobileNumbers to fetch.
     */
    where?: MobileNumberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileNumbers to fetch.
     */
    orderBy?: MobileNumberOrderByWithRelationInput | MobileNumberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MobileNumbers.
     */
    cursor?: MobileNumberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileNumbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileNumbers.
     */
    skip?: number
    distinct?: MobileNumberScalarFieldEnum | MobileNumberScalarFieldEnum[]
  }

  /**
   * MobileNumber create
   */
  export type MobileNumberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    /**
     * The data needed to create a MobileNumber.
     */
    data: XOR<MobileNumberCreateInput, MobileNumberUncheckedCreateInput>
  }

  /**
   * MobileNumber createMany
   */
  export type MobileNumberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MobileNumbers.
     */
    data: MobileNumberCreateManyInput | MobileNumberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MobileNumber update
   */
  export type MobileNumberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    /**
     * The data needed to update a MobileNumber.
     */
    data: XOR<MobileNumberUpdateInput, MobileNumberUncheckedUpdateInput>
    /**
     * Choose, which MobileNumber to update.
     */
    where: MobileNumberWhereUniqueInput
  }

  /**
   * MobileNumber updateMany
   */
  export type MobileNumberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MobileNumbers.
     */
    data: XOR<MobileNumberUpdateManyMutationInput, MobileNumberUncheckedUpdateManyInput>
    /**
     * Filter which MobileNumbers to update
     */
    where?: MobileNumberWhereInput
    /**
     * Limit how many MobileNumbers to update.
     */
    limit?: number
  }

  /**
   * MobileNumber upsert
   */
  export type MobileNumberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    /**
     * The filter to search for the MobileNumber to update in case it exists.
     */
    where: MobileNumberWhereUniqueInput
    /**
     * In case the MobileNumber found by the `where` argument doesn't exist, create a new MobileNumber with this data.
     */
    create: XOR<MobileNumberCreateInput, MobileNumberUncheckedCreateInput>
    /**
     * In case the MobileNumber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MobileNumberUpdateInput, MobileNumberUncheckedUpdateInput>
  }

  /**
   * MobileNumber delete
   */
  export type MobileNumberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
    /**
     * Filter which MobileNumber to delete.
     */
    where: MobileNumberWhereUniqueInput
  }

  /**
   * MobileNumber deleteMany
   */
  export type MobileNumberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MobileNumbers to delete
     */
    where?: MobileNumberWhereInput
    /**
     * Limit how many MobileNumbers to delete.
     */
    limit?: number
  }

  /**
   * MobileNumber without action
   */
  export type MobileNumberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MobileNumber
     */
    select?: MobileNumberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MobileNumber
     */
    omit?: MobileNumberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MobileNumberInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    address: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    address: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    address: number
    isDefault: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    address?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    address?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    address?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    address: string
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>



  export type AddressSelectScalar = {
    id?: boolean
    address?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "isDefault" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly address: FieldRef<"Address", 'String'>
    readonly isDefault: FieldRef<"Address", 'Boolean'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
    readonly userId: FieldRef<"Address", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    userId: number | null
    teacherCode: string | null
    status: string | null
    isActive: boolean | null
    isSearchable: boolean | null
    isOnboarded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    teacherCode: string | null
    status: string | null
    isActive: boolean | null
    isSearchable: boolean | null
    isOnboarded: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    userId: number
    teacherCode: number
    status: number
    isActive: number
    isSearchable: number
    isOnboarded: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    userId?: true
    teacherCode?: true
    status?: true
    isActive?: true
    isSearchable?: true
    isOnboarded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    userId?: true
    teacherCode?: true
    status?: true
    isActive?: true
    isSearchable?: true
    isOnboarded?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    userId?: true
    teacherCode?: true
    status?: true
    isActive?: true
    isSearchable?: true
    isOnboarded?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    userId: number
    teacherCode: string
    status: string
    isActive: boolean
    isSearchable: boolean
    isOnboarded: boolean
    createdAt: Date
    updatedAt: Date
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teacherCode?: boolean
    status?: boolean
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    eligibility?: boolean | Teacher$eligibilityArgs<ExtArgs>
    programs?: boolean | Teacher$programsArgs<ExtArgs>
    coTaughtPrograms?: boolean | Teacher$coTaughtProgramsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>



  export type TeacherSelectScalar = {
    id?: boolean
    userId?: boolean
    teacherCode?: boolean
    status?: boolean
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teacherCode" | "status" | "isActive" | "isSearchable" | "isOnboarded" | "createdAt" | "updatedAt", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    eligibility?: boolean | Teacher$eligibilityArgs<ExtArgs>
    programs?: boolean | Teacher$programsArgs<ExtArgs>
    coTaughtPrograms?: boolean | Teacher$coTaughtProgramsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      eligibility: Prisma.$TeacherEligibilityPayload<ExtArgs>[]
      programs: Prisma.$ProgramPayload<ExtArgs>[]
      coTaughtPrograms: Prisma.$ProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      teacherCode: string
      status: string
      isActive: boolean
      isSearchable: boolean
      isOnboarded: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eligibility<T extends Teacher$eligibilityArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$eligibilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programs<T extends Teacher$programsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coTaughtPrograms<T extends Teacher$coTaughtProgramsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$coTaughtProgramsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly userId: FieldRef<"Teacher", 'Int'>
    readonly teacherCode: FieldRef<"Teacher", 'String'>
    readonly status: FieldRef<"Teacher", 'String'>
    readonly isActive: FieldRef<"Teacher", 'Boolean'>
    readonly isSearchable: FieldRef<"Teacher", 'Boolean'>
    readonly isOnboarded: FieldRef<"Teacher", 'Boolean'>
    readonly createdAt: FieldRef<"Teacher", 'DateTime'>
    readonly updatedAt: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.eligibility
   */
  export type Teacher$eligibilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    where?: TeacherEligibilityWhereInput
    orderBy?: TeacherEligibilityOrderByWithRelationInput | TeacherEligibilityOrderByWithRelationInput[]
    cursor?: TeacherEligibilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherEligibilityScalarFieldEnum | TeacherEligibilityScalarFieldEnum[]
  }

  /**
   * Teacher.programs
   */
  export type Teacher$programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Teacher.coTaughtPrograms
   */
  export type Teacher$coTaughtProgramsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model TeacherEligibility
   */

  export type AggregateTeacherEligibility = {
    _count: TeacherEligibilityCountAggregateOutputType | null
    _avg: TeacherEligibilityAvgAggregateOutputType | null
    _sum: TeacherEligibilitySumAggregateOutputType | null
    _min: TeacherEligibilityMinAggregateOutputType | null
    _max: TeacherEligibilityMaxAggregateOutputType | null
  }

  export type TeacherEligibilityAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
    programId: number | null
  }

  export type TeacherEligibilitySumAggregateOutputType = {
    id: number | null
    teacherId: number | null
    programId: number | null
  }

  export type TeacherEligibilityMinAggregateOutputType = {
    id: number | null
    teacherId: number | null
    programId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherEligibilityMaxAggregateOutputType = {
    id: number | null
    teacherId: number | null
    programId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeacherEligibilityCountAggregateOutputType = {
    id: number
    teacherId: number
    programId: number
    metaData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeacherEligibilityAvgAggregateInputType = {
    id?: true
    teacherId?: true
    programId?: true
  }

  export type TeacherEligibilitySumAggregateInputType = {
    id?: true
    teacherId?: true
    programId?: true
  }

  export type TeacherEligibilityMinAggregateInputType = {
    id?: true
    teacherId?: true
    programId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherEligibilityMaxAggregateInputType = {
    id?: true
    teacherId?: true
    programId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeacherEligibilityCountAggregateInputType = {
    id?: true
    teacherId?: true
    programId?: true
    metaData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeacherEligibilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherEligibility to aggregate.
     */
    where?: TeacherEligibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherEligibilities to fetch.
     */
    orderBy?: TeacherEligibilityOrderByWithRelationInput | TeacherEligibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherEligibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherEligibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherEligibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherEligibilities
    **/
    _count?: true | TeacherEligibilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherEligibilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherEligibilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherEligibilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherEligibilityMaxAggregateInputType
  }

  export type GetTeacherEligibilityAggregateType<T extends TeacherEligibilityAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherEligibility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherEligibility[P]>
      : GetScalarType<T[P], AggregateTeacherEligibility[P]>
  }




  export type TeacherEligibilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherEligibilityWhereInput
    orderBy?: TeacherEligibilityOrderByWithAggregationInput | TeacherEligibilityOrderByWithAggregationInput[]
    by: TeacherEligibilityScalarFieldEnum[] | TeacherEligibilityScalarFieldEnum
    having?: TeacherEligibilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherEligibilityCountAggregateInputType | true
    _avg?: TeacherEligibilityAvgAggregateInputType
    _sum?: TeacherEligibilitySumAggregateInputType
    _min?: TeacherEligibilityMinAggregateInputType
    _max?: TeacherEligibilityMaxAggregateInputType
  }

  export type TeacherEligibilityGroupByOutputType = {
    id: number
    teacherId: number
    programId: number
    metaData: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: TeacherEligibilityCountAggregateOutputType | null
    _avg: TeacherEligibilityAvgAggregateOutputType | null
    _sum: TeacherEligibilitySumAggregateOutputType | null
    _min: TeacherEligibilityMinAggregateOutputType | null
    _max: TeacherEligibilityMaxAggregateOutputType | null
  }

  type GetTeacherEligibilityGroupByPayload<T extends TeacherEligibilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherEligibilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherEligibilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherEligibilityGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherEligibilityGroupByOutputType[P]>
        }
      >
    >


  export type TeacherEligibilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacherId?: boolean
    programId?: boolean
    metaData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    program?: boolean | ProgramTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherEligibility"]>



  export type TeacherEligibilitySelectScalar = {
    id?: boolean
    teacherId?: boolean
    programId?: boolean
    metaData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeacherEligibilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacherId" | "programId" | "metaData" | "createdAt" | "updatedAt", ExtArgs["result"]["teacherEligibility"]>
  export type TeacherEligibilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    program?: boolean | ProgramTypeDefaultArgs<ExtArgs>
  }

  export type $TeacherEligibilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherEligibility"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      program: Prisma.$ProgramTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacherId: number
      programId: number
      metaData: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teacherEligibility"]>
    composites: {}
  }

  type TeacherEligibilityGetPayload<S extends boolean | null | undefined | TeacherEligibilityDefaultArgs> = $Result.GetResult<Prisma.$TeacherEligibilityPayload, S>

  type TeacherEligibilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherEligibilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherEligibilityCountAggregateInputType | true
    }

  export interface TeacherEligibilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherEligibility'], meta: { name: 'TeacherEligibility' } }
    /**
     * Find zero or one TeacherEligibility that matches the filter.
     * @param {TeacherEligibilityFindUniqueArgs} args - Arguments to find a TeacherEligibility
     * @example
     * // Get one TeacherEligibility
     * const teacherEligibility = await prisma.teacherEligibility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherEligibilityFindUniqueArgs>(args: SelectSubset<T, TeacherEligibilityFindUniqueArgs<ExtArgs>>): Prisma__TeacherEligibilityClient<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherEligibility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherEligibilityFindUniqueOrThrowArgs} args - Arguments to find a TeacherEligibility
     * @example
     * // Get one TeacherEligibility
     * const teacherEligibility = await prisma.teacherEligibility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherEligibilityFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherEligibilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherEligibilityClient<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherEligibility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherEligibilityFindFirstArgs} args - Arguments to find a TeacherEligibility
     * @example
     * // Get one TeacherEligibility
     * const teacherEligibility = await prisma.teacherEligibility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherEligibilityFindFirstArgs>(args?: SelectSubset<T, TeacherEligibilityFindFirstArgs<ExtArgs>>): Prisma__TeacherEligibilityClient<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherEligibility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherEligibilityFindFirstOrThrowArgs} args - Arguments to find a TeacherEligibility
     * @example
     * // Get one TeacherEligibility
     * const teacherEligibility = await prisma.teacherEligibility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherEligibilityFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherEligibilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherEligibilityClient<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherEligibilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherEligibilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherEligibilities
     * const teacherEligibilities = await prisma.teacherEligibility.findMany()
     * 
     * // Get first 10 TeacherEligibilities
     * const teacherEligibilities = await prisma.teacherEligibility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherEligibilityWithIdOnly = await prisma.teacherEligibility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherEligibilityFindManyArgs>(args?: SelectSubset<T, TeacherEligibilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherEligibility.
     * @param {TeacherEligibilityCreateArgs} args - Arguments to create a TeacherEligibility.
     * @example
     * // Create one TeacherEligibility
     * const TeacherEligibility = await prisma.teacherEligibility.create({
     *   data: {
     *     // ... data to create a TeacherEligibility
     *   }
     * })
     * 
     */
    create<T extends TeacherEligibilityCreateArgs>(args: SelectSubset<T, TeacherEligibilityCreateArgs<ExtArgs>>): Prisma__TeacherEligibilityClient<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherEligibilities.
     * @param {TeacherEligibilityCreateManyArgs} args - Arguments to create many TeacherEligibilities.
     * @example
     * // Create many TeacherEligibilities
     * const teacherEligibility = await prisma.teacherEligibility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherEligibilityCreateManyArgs>(args?: SelectSubset<T, TeacherEligibilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeacherEligibility.
     * @param {TeacherEligibilityDeleteArgs} args - Arguments to delete one TeacherEligibility.
     * @example
     * // Delete one TeacherEligibility
     * const TeacherEligibility = await prisma.teacherEligibility.delete({
     *   where: {
     *     // ... filter to delete one TeacherEligibility
     *   }
     * })
     * 
     */
    delete<T extends TeacherEligibilityDeleteArgs>(args: SelectSubset<T, TeacherEligibilityDeleteArgs<ExtArgs>>): Prisma__TeacherEligibilityClient<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherEligibility.
     * @param {TeacherEligibilityUpdateArgs} args - Arguments to update one TeacherEligibility.
     * @example
     * // Update one TeacherEligibility
     * const teacherEligibility = await prisma.teacherEligibility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherEligibilityUpdateArgs>(args: SelectSubset<T, TeacherEligibilityUpdateArgs<ExtArgs>>): Prisma__TeacherEligibilityClient<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherEligibilities.
     * @param {TeacherEligibilityDeleteManyArgs} args - Arguments to filter TeacherEligibilities to delete.
     * @example
     * // Delete a few TeacherEligibilities
     * const { count } = await prisma.teacherEligibility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherEligibilityDeleteManyArgs>(args?: SelectSubset<T, TeacherEligibilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherEligibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherEligibilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherEligibilities
     * const teacherEligibility = await prisma.teacherEligibility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherEligibilityUpdateManyArgs>(args: SelectSubset<T, TeacherEligibilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeacherEligibility.
     * @param {TeacherEligibilityUpsertArgs} args - Arguments to update or create a TeacherEligibility.
     * @example
     * // Update or create a TeacherEligibility
     * const teacherEligibility = await prisma.teacherEligibility.upsert({
     *   create: {
     *     // ... data to create a TeacherEligibility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherEligibility we want to update
     *   }
     * })
     */
    upsert<T extends TeacherEligibilityUpsertArgs>(args: SelectSubset<T, TeacherEligibilityUpsertArgs<ExtArgs>>): Prisma__TeacherEligibilityClient<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherEligibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherEligibilityCountArgs} args - Arguments to filter TeacherEligibilities to count.
     * @example
     * // Count the number of TeacherEligibilities
     * const count = await prisma.teacherEligibility.count({
     *   where: {
     *     // ... the filter for the TeacherEligibilities we want to count
     *   }
     * })
    **/
    count<T extends TeacherEligibilityCountArgs>(
      args?: Subset<T, TeacherEligibilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherEligibilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherEligibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherEligibilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherEligibilityAggregateArgs>(args: Subset<T, TeacherEligibilityAggregateArgs>): Prisma.PrismaPromise<GetTeacherEligibilityAggregateType<T>>

    /**
     * Group by TeacherEligibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherEligibilityGroupByArgs} args - Group by arguments.
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
      T extends TeacherEligibilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherEligibilityGroupByArgs['orderBy'] }
        : { orderBy?: TeacherEligibilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherEligibilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherEligibilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherEligibility model
   */
  readonly fields: TeacherEligibilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherEligibility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherEligibilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    program<T extends ProgramTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramTypeDefaultArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherEligibility model
   */
  interface TeacherEligibilityFieldRefs {
    readonly id: FieldRef<"TeacherEligibility", 'Int'>
    readonly teacherId: FieldRef<"TeacherEligibility", 'Int'>
    readonly programId: FieldRef<"TeacherEligibility", 'Int'>
    readonly metaData: FieldRef<"TeacherEligibility", 'Json'>
    readonly createdAt: FieldRef<"TeacherEligibility", 'DateTime'>
    readonly updatedAt: FieldRef<"TeacherEligibility", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeacherEligibility findUnique
   */
  export type TeacherEligibilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherEligibility to fetch.
     */
    where: TeacherEligibilityWhereUniqueInput
  }

  /**
   * TeacherEligibility findUniqueOrThrow
   */
  export type TeacherEligibilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherEligibility to fetch.
     */
    where: TeacherEligibilityWhereUniqueInput
  }

  /**
   * TeacherEligibility findFirst
   */
  export type TeacherEligibilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherEligibility to fetch.
     */
    where?: TeacherEligibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherEligibilities to fetch.
     */
    orderBy?: TeacherEligibilityOrderByWithRelationInput | TeacherEligibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherEligibilities.
     */
    cursor?: TeacherEligibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherEligibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherEligibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherEligibilities.
     */
    distinct?: TeacherEligibilityScalarFieldEnum | TeacherEligibilityScalarFieldEnum[]
  }

  /**
   * TeacherEligibility findFirstOrThrow
   */
  export type TeacherEligibilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherEligibility to fetch.
     */
    where?: TeacherEligibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherEligibilities to fetch.
     */
    orderBy?: TeacherEligibilityOrderByWithRelationInput | TeacherEligibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherEligibilities.
     */
    cursor?: TeacherEligibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherEligibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherEligibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherEligibilities.
     */
    distinct?: TeacherEligibilityScalarFieldEnum | TeacherEligibilityScalarFieldEnum[]
  }

  /**
   * TeacherEligibility findMany
   */
  export type TeacherEligibilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    /**
     * Filter, which TeacherEligibilities to fetch.
     */
    where?: TeacherEligibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherEligibilities to fetch.
     */
    orderBy?: TeacherEligibilityOrderByWithRelationInput | TeacherEligibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherEligibilities.
     */
    cursor?: TeacherEligibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherEligibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherEligibilities.
     */
    skip?: number
    distinct?: TeacherEligibilityScalarFieldEnum | TeacherEligibilityScalarFieldEnum[]
  }

  /**
   * TeacherEligibility create
   */
  export type TeacherEligibilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherEligibility.
     */
    data: XOR<TeacherEligibilityCreateInput, TeacherEligibilityUncheckedCreateInput>
  }

  /**
   * TeacherEligibility createMany
   */
  export type TeacherEligibilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherEligibilities.
     */
    data: TeacherEligibilityCreateManyInput | TeacherEligibilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherEligibility update
   */
  export type TeacherEligibilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherEligibility.
     */
    data: XOR<TeacherEligibilityUpdateInput, TeacherEligibilityUncheckedUpdateInput>
    /**
     * Choose, which TeacherEligibility to update.
     */
    where: TeacherEligibilityWhereUniqueInput
  }

  /**
   * TeacherEligibility updateMany
   */
  export type TeacherEligibilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherEligibilities.
     */
    data: XOR<TeacherEligibilityUpdateManyMutationInput, TeacherEligibilityUncheckedUpdateManyInput>
    /**
     * Filter which TeacherEligibilities to update
     */
    where?: TeacherEligibilityWhereInput
    /**
     * Limit how many TeacherEligibilities to update.
     */
    limit?: number
  }

  /**
   * TeacherEligibility upsert
   */
  export type TeacherEligibilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherEligibility to update in case it exists.
     */
    where: TeacherEligibilityWhereUniqueInput
    /**
     * In case the TeacherEligibility found by the `where` argument doesn't exist, create a new TeacherEligibility with this data.
     */
    create: XOR<TeacherEligibilityCreateInput, TeacherEligibilityUncheckedCreateInput>
    /**
     * In case the TeacherEligibility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherEligibilityUpdateInput, TeacherEligibilityUncheckedUpdateInput>
  }

  /**
   * TeacherEligibility delete
   */
  export type TeacherEligibilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    /**
     * Filter which TeacherEligibility to delete.
     */
    where: TeacherEligibilityWhereUniqueInput
  }

  /**
   * TeacherEligibility deleteMany
   */
  export type TeacherEligibilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherEligibilities to delete
     */
    where?: TeacherEligibilityWhereInput
    /**
     * Limit how many TeacherEligibilities to delete.
     */
    limit?: number
  }

  /**
   * TeacherEligibility without action
   */
  export type TeacherEligibilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
  }


  /**
   * Model ProgramType
   */

  export type AggregateProgramType = {
    _count: ProgramTypeCountAggregateOutputType | null
    _avg: ProgramTypeAvgAggregateOutputType | null
    _sum: ProgramTypeSumAggregateOutputType | null
    _min: ProgramTypeMinAggregateOutputType | null
    _max: ProgramTypeMaxAggregateOutputType | null
  }

  export type ProgramTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type ProgramTypeSumAggregateOutputType = {
    id: number | null
  }

  export type ProgramTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    activeUntil: Date | null
  }

  export type ProgramTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    activeUntil: Date | null
  }

  export type ProgramTypeCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    metaData: number
    isActive: number
    activeUntil: number
    preRequisites: number
    feeStructure: number
    _all: number
  }


  export type ProgramTypeAvgAggregateInputType = {
    id?: true
  }

  export type ProgramTypeSumAggregateInputType = {
    id?: true
  }

  export type ProgramTypeMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    activeUntil?: true
  }

  export type ProgramTypeMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    activeUntil?: true
  }

  export type ProgramTypeCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    metaData?: true
    isActive?: true
    activeUntil?: true
    preRequisites?: true
    feeStructure?: true
    _all?: true
  }

  export type ProgramTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramType to aggregate.
     */
    where?: ProgramTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramTypes to fetch.
     */
    orderBy?: ProgramTypeOrderByWithRelationInput | ProgramTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProgramTypes
    **/
    _count?: true | ProgramTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramTypeMaxAggregateInputType
  }

  export type GetProgramTypeAggregateType<T extends ProgramTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProgramType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgramType[P]>
      : GetScalarType<T[P], AggregateProgramType[P]>
  }




  export type ProgramTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramTypeWhereInput
    orderBy?: ProgramTypeOrderByWithAggregationInput | ProgramTypeOrderByWithAggregationInput[]
    by: ProgramTypeScalarFieldEnum[] | ProgramTypeScalarFieldEnum
    having?: ProgramTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramTypeCountAggregateInputType | true
    _avg?: ProgramTypeAvgAggregateInputType
    _sum?: ProgramTypeSumAggregateInputType
    _min?: ProgramTypeMinAggregateInputType
    _max?: ProgramTypeMaxAggregateInputType
  }

  export type ProgramTypeGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    metaData: JsonValue
    isActive: boolean
    activeUntil: Date | null
    preRequisites: JsonValue | null
    feeStructure: JsonValue
    _count: ProgramTypeCountAggregateOutputType | null
    _avg: ProgramTypeAvgAggregateOutputType | null
    _sum: ProgramTypeSumAggregateOutputType | null
    _min: ProgramTypeMinAggregateOutputType | null
    _max: ProgramTypeMaxAggregateOutputType | null
  }

  type GetProgramTypeGroupByPayload<T extends ProgramTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProgramTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metaData?: boolean
    isActive?: boolean
    activeUntil?: boolean
    preRequisites?: boolean
    feeStructure?: boolean
    teacherEligibility?: boolean | ProgramType$teacherEligibilityArgs<ExtArgs>
    programs?: boolean | ProgramType$programsArgs<ExtArgs>
    _count?: boolean | ProgramTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programType"]>



  export type ProgramTypeSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metaData?: boolean
    isActive?: boolean
    activeUntil?: boolean
    preRequisites?: boolean
    feeStructure?: boolean
  }

  export type ProgramTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "metaData" | "isActive" | "activeUntil" | "preRequisites" | "feeStructure", ExtArgs["result"]["programType"]>
  export type ProgramTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherEligibility?: boolean | ProgramType$teacherEligibilityArgs<ExtArgs>
    programs?: boolean | ProgramType$programsArgs<ExtArgs>
    _count?: boolean | ProgramTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProgramTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProgramType"
    objects: {
      teacherEligibility: Prisma.$TeacherEligibilityPayload<ExtArgs>[]
      programs: Prisma.$ProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
      metaData: Prisma.JsonValue
      isActive: boolean
      activeUntil: Date | null
      preRequisites: Prisma.JsonValue | null
      feeStructure: Prisma.JsonValue
    }, ExtArgs["result"]["programType"]>
    composites: {}
  }

  type ProgramTypeGetPayload<S extends boolean | null | undefined | ProgramTypeDefaultArgs> = $Result.GetResult<Prisma.$ProgramTypePayload, S>

  type ProgramTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramTypeCountAggregateInputType | true
    }

  export interface ProgramTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProgramType'], meta: { name: 'ProgramType' } }
    /**
     * Find zero or one ProgramType that matches the filter.
     * @param {ProgramTypeFindUniqueArgs} args - Arguments to find a ProgramType
     * @example
     * // Get one ProgramType
     * const programType = await prisma.programType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramTypeFindUniqueArgs>(args: SelectSubset<T, ProgramTypeFindUniqueArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProgramType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramTypeFindUniqueOrThrowArgs} args - Arguments to find a ProgramType
     * @example
     * // Get one ProgramType
     * const programType = await prisma.programType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTypeFindFirstArgs} args - Arguments to find a ProgramType
     * @example
     * // Get one ProgramType
     * const programType = await prisma.programType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramTypeFindFirstArgs>(args?: SelectSubset<T, ProgramTypeFindFirstArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProgramType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTypeFindFirstOrThrowArgs} args - Arguments to find a ProgramType
     * @example
     * // Get one ProgramType
     * const programType = await prisma.programType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProgramTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProgramTypes
     * const programTypes = await prisma.programType.findMany()
     * 
     * // Get first 10 ProgramTypes
     * const programTypes = await prisma.programType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programTypeWithIdOnly = await prisma.programType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramTypeFindManyArgs>(args?: SelectSubset<T, ProgramTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProgramType.
     * @param {ProgramTypeCreateArgs} args - Arguments to create a ProgramType.
     * @example
     * // Create one ProgramType
     * const ProgramType = await prisma.programType.create({
     *   data: {
     *     // ... data to create a ProgramType
     *   }
     * })
     * 
     */
    create<T extends ProgramTypeCreateArgs>(args: SelectSubset<T, ProgramTypeCreateArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProgramTypes.
     * @param {ProgramTypeCreateManyArgs} args - Arguments to create many ProgramTypes.
     * @example
     * // Create many ProgramTypes
     * const programType = await prisma.programType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramTypeCreateManyArgs>(args?: SelectSubset<T, ProgramTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProgramType.
     * @param {ProgramTypeDeleteArgs} args - Arguments to delete one ProgramType.
     * @example
     * // Delete one ProgramType
     * const ProgramType = await prisma.programType.delete({
     *   where: {
     *     // ... filter to delete one ProgramType
     *   }
     * })
     * 
     */
    delete<T extends ProgramTypeDeleteArgs>(args: SelectSubset<T, ProgramTypeDeleteArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProgramType.
     * @param {ProgramTypeUpdateArgs} args - Arguments to update one ProgramType.
     * @example
     * // Update one ProgramType
     * const programType = await prisma.programType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramTypeUpdateArgs>(args: SelectSubset<T, ProgramTypeUpdateArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProgramTypes.
     * @param {ProgramTypeDeleteManyArgs} args - Arguments to filter ProgramTypes to delete.
     * @example
     * // Delete a few ProgramTypes
     * const { count } = await prisma.programType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramTypeDeleteManyArgs>(args?: SelectSubset<T, ProgramTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProgramTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProgramTypes
     * const programType = await prisma.programType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramTypeUpdateManyArgs>(args: SelectSubset<T, ProgramTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProgramType.
     * @param {ProgramTypeUpsertArgs} args - Arguments to update or create a ProgramType.
     * @example
     * // Update or create a ProgramType
     * const programType = await prisma.programType.upsert({
     *   create: {
     *     // ... data to create a ProgramType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProgramType we want to update
     *   }
     * })
     */
    upsert<T extends ProgramTypeUpsertArgs>(args: SelectSubset<T, ProgramTypeUpsertArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProgramTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTypeCountArgs} args - Arguments to filter ProgramTypes to count.
     * @example
     * // Count the number of ProgramTypes
     * const count = await prisma.programType.count({
     *   where: {
     *     // ... the filter for the ProgramTypes we want to count
     *   }
     * })
    **/
    count<T extends ProgramTypeCountArgs>(
      args?: Subset<T, ProgramTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProgramType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramTypeAggregateArgs>(args: Subset<T, ProgramTypeAggregateArgs>): Prisma.PrismaPromise<GetProgramTypeAggregateType<T>>

    /**
     * Group by ProgramType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramTypeGroupByArgs} args - Group by arguments.
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
      T extends ProgramTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProgramTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProgramType model
   */
  readonly fields: ProgramTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProgramType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherEligibility<T extends ProgramType$teacherEligibilityArgs<ExtArgs> = {}>(args?: Subset<T, ProgramType$teacherEligibilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherEligibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programs<T extends ProgramType$programsArgs<ExtArgs> = {}>(args?: Subset<T, ProgramType$programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProgramType model
   */
  interface ProgramTypeFieldRefs {
    readonly id: FieldRef<"ProgramType", 'Int'>
    readonly name: FieldRef<"ProgramType", 'String'>
    readonly description: FieldRef<"ProgramType", 'String'>
    readonly createdAt: FieldRef<"ProgramType", 'DateTime'>
    readonly updatedAt: FieldRef<"ProgramType", 'DateTime'>
    readonly metaData: FieldRef<"ProgramType", 'Json'>
    readonly isActive: FieldRef<"ProgramType", 'Boolean'>
    readonly activeUntil: FieldRef<"ProgramType", 'DateTime'>
    readonly preRequisites: FieldRef<"ProgramType", 'Json'>
    readonly feeStructure: FieldRef<"ProgramType", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ProgramType findUnique
   */
  export type ProgramTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProgramType to fetch.
     */
    where: ProgramTypeWhereUniqueInput
  }

  /**
   * ProgramType findUniqueOrThrow
   */
  export type ProgramTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProgramType to fetch.
     */
    where: ProgramTypeWhereUniqueInput
  }

  /**
   * ProgramType findFirst
   */
  export type ProgramTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProgramType to fetch.
     */
    where?: ProgramTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramTypes to fetch.
     */
    orderBy?: ProgramTypeOrderByWithRelationInput | ProgramTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramTypes.
     */
    cursor?: ProgramTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramTypes.
     */
    distinct?: ProgramTypeScalarFieldEnum | ProgramTypeScalarFieldEnum[]
  }

  /**
   * ProgramType findFirstOrThrow
   */
  export type ProgramTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProgramType to fetch.
     */
    where?: ProgramTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramTypes to fetch.
     */
    orderBy?: ProgramTypeOrderByWithRelationInput | ProgramTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProgramTypes.
     */
    cursor?: ProgramTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProgramTypes.
     */
    distinct?: ProgramTypeScalarFieldEnum | ProgramTypeScalarFieldEnum[]
  }

  /**
   * ProgramType findMany
   */
  export type ProgramTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProgramTypes to fetch.
     */
    where?: ProgramTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProgramTypes to fetch.
     */
    orderBy?: ProgramTypeOrderByWithRelationInput | ProgramTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProgramTypes.
     */
    cursor?: ProgramTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProgramTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProgramTypes.
     */
    skip?: number
    distinct?: ProgramTypeScalarFieldEnum | ProgramTypeScalarFieldEnum[]
  }

  /**
   * ProgramType create
   */
  export type ProgramTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProgramType.
     */
    data: XOR<ProgramTypeCreateInput, ProgramTypeUncheckedCreateInput>
  }

  /**
   * ProgramType createMany
   */
  export type ProgramTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProgramTypes.
     */
    data: ProgramTypeCreateManyInput | ProgramTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProgramType update
   */
  export type ProgramTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProgramType.
     */
    data: XOR<ProgramTypeUpdateInput, ProgramTypeUncheckedUpdateInput>
    /**
     * Choose, which ProgramType to update.
     */
    where: ProgramTypeWhereUniqueInput
  }

  /**
   * ProgramType updateMany
   */
  export type ProgramTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProgramTypes.
     */
    data: XOR<ProgramTypeUpdateManyMutationInput, ProgramTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProgramTypes to update
     */
    where?: ProgramTypeWhereInput
    /**
     * Limit how many ProgramTypes to update.
     */
    limit?: number
  }

  /**
   * ProgramType upsert
   */
  export type ProgramTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProgramType to update in case it exists.
     */
    where: ProgramTypeWhereUniqueInput
    /**
     * In case the ProgramType found by the `where` argument doesn't exist, create a new ProgramType with this data.
     */
    create: XOR<ProgramTypeCreateInput, ProgramTypeUncheckedCreateInput>
    /**
     * In case the ProgramType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramTypeUpdateInput, ProgramTypeUncheckedUpdateInput>
  }

  /**
   * ProgramType delete
   */
  export type ProgramTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
    /**
     * Filter which ProgramType to delete.
     */
    where: ProgramTypeWhereUniqueInput
  }

  /**
   * ProgramType deleteMany
   */
  export type ProgramTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProgramTypes to delete
     */
    where?: ProgramTypeWhereInput
    /**
     * Limit how many ProgramTypes to delete.
     */
    limit?: number
  }

  /**
   * ProgramType.teacherEligibility
   */
  export type ProgramType$teacherEligibilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherEligibility
     */
    select?: TeacherEligibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherEligibility
     */
    omit?: TeacherEligibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherEligibilityInclude<ExtArgs> | null
    where?: TeacherEligibilityWhereInput
    orderBy?: TeacherEligibilityOrderByWithRelationInput | TeacherEligibilityOrderByWithRelationInput[]
    cursor?: TeacherEligibilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherEligibilityScalarFieldEnum | TeacherEligibilityScalarFieldEnum[]
  }

  /**
   * ProgramType.programs
   */
  export type ProgramType$programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * ProgramType without action
   */
  export type ProgramTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramType
     */
    select?: ProgramTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProgramType
     */
    omit?: ProgramTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramTypeInclude<ExtArgs> | null
  }


  /**
   * Model Center
   */

  export type AggregateCenter = {
    _count: CenterCountAggregateOutputType | null
    _avg: CenterAvgAggregateOutputType | null
    _sum: CenterSumAggregateOutputType | null
    _min: CenterMinAggregateOutputType | null
    _max: CenterMaxAggregateOutputType | null
  }

  export type CenterAvgAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type CenterSumAggregateOutputType = {
    id: number | null
    capacity: number | null
  }

  export type CenterMinAggregateOutputType = {
    id: number | null
    name: string | null
    centerType: string | null
    description: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    contactNumber: string | null
    email: string | null
    capacity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CenterMaxAggregateOutputType = {
    id: number | null
    name: string | null
    centerType: string | null
    description: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    contactNumber: string | null
    email: string | null
    capacity: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CenterCountAggregateOutputType = {
    id: number
    name: number
    centerType: number
    description: number
    address: number
    city: number
    state: number
    country: number
    pincode: number
    geoLocation: number
    contactNumber: number
    email: number
    capacity: number
    isActive: number
    createdBy: number
    createdAt: number
    updatedAt: number
    metaData: number
    _all: number
  }


  export type CenterAvgAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type CenterSumAggregateInputType = {
    id?: true
    capacity?: true
  }

  export type CenterMinAggregateInputType = {
    id?: true
    name?: true
    centerType?: true
    description?: true
    address?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    contactNumber?: true
    email?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CenterMaxAggregateInputType = {
    id?: true
    name?: true
    centerType?: true
    description?: true
    address?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    contactNumber?: true
    email?: true
    capacity?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CenterCountAggregateInputType = {
    id?: true
    name?: true
    centerType?: true
    description?: true
    address?: true
    city?: true
    state?: true
    country?: true
    pincode?: true
    geoLocation?: true
    contactNumber?: true
    email?: true
    capacity?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    metaData?: true
    _all?: true
  }

  export type CenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Center to aggregate.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Centers
    **/
    _count?: true | CenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CenterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CenterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CenterMaxAggregateInputType
  }

  export type GetCenterAggregateType<T extends CenterAggregateArgs> = {
        [P in keyof T & keyof AggregateCenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCenter[P]>
      : GetScalarType<T[P], AggregateCenter[P]>
  }




  export type CenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CenterWhereInput
    orderBy?: CenterOrderByWithAggregationInput | CenterOrderByWithAggregationInput[]
    by: CenterScalarFieldEnum[] | CenterScalarFieldEnum
    having?: CenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CenterCountAggregateInputType | true
    _avg?: CenterAvgAggregateInputType
    _sum?: CenterSumAggregateInputType
    _min?: CenterMinAggregateInputType
    _max?: CenterMaxAggregateInputType
  }

  export type CenterGroupByOutputType = {
    id: number
    name: string
    centerType: string
    description: string | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    pincode: string | null
    geoLocation: JsonValue | null
    contactNumber: string | null
    email: string | null
    capacity: number | null
    isActive: boolean
    createdBy: JsonValue
    createdAt: Date
    updatedAt: Date
    metaData: JsonValue
    _count: CenterCountAggregateOutputType | null
    _avg: CenterAvgAggregateOutputType | null
    _sum: CenterSumAggregateOutputType | null
    _min: CenterMinAggregateOutputType | null
    _max: CenterMaxAggregateOutputType | null
  }

  type GetCenterGroupByPayload<T extends CenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CenterGroupByOutputType[P]>
            : GetScalarType<T[P], CenterGroupByOutputType[P]>
        }
      >
    >


  export type CenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    centerType?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    geoLocation?: boolean
    contactNumber?: boolean
    email?: boolean
    capacity?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metaData?: boolean
    programs?: boolean | Center$programsArgs<ExtArgs>
    _count?: boolean | CenterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["center"]>



  export type CenterSelectScalar = {
    id?: boolean
    name?: boolean
    centerType?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    pincode?: boolean
    geoLocation?: boolean
    contactNumber?: boolean
    email?: boolean
    capacity?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    metaData?: boolean
  }

  export type CenterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "centerType" | "description" | "address" | "city" | "state" | "country" | "pincode" | "geoLocation" | "contactNumber" | "email" | "capacity" | "isActive" | "createdBy" | "createdAt" | "updatedAt" | "metaData", ExtArgs["result"]["center"]>
  export type CenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programs?: boolean | Center$programsArgs<ExtArgs>
    _count?: boolean | CenterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Center"
    objects: {
      programs: Prisma.$ProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      centerType: string
      description: string | null
      address: string | null
      city: string | null
      state: string | null
      country: string | null
      pincode: string | null
      geoLocation: Prisma.JsonValue | null
      contactNumber: string | null
      email: string | null
      capacity: number | null
      isActive: boolean
      createdBy: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      metaData: Prisma.JsonValue
    }, ExtArgs["result"]["center"]>
    composites: {}
  }

  type CenterGetPayload<S extends boolean | null | undefined | CenterDefaultArgs> = $Result.GetResult<Prisma.$CenterPayload, S>

  type CenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CenterCountAggregateInputType | true
    }

  export interface CenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Center'], meta: { name: 'Center' } }
    /**
     * Find zero or one Center that matches the filter.
     * @param {CenterFindUniqueArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CenterFindUniqueArgs>(args: SelectSubset<T, CenterFindUniqueArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Center that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CenterFindUniqueOrThrowArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CenterFindUniqueOrThrowArgs>(args: SelectSubset<T, CenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Center that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterFindFirstArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CenterFindFirstArgs>(args?: SelectSubset<T, CenterFindFirstArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Center that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterFindFirstOrThrowArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CenterFindFirstOrThrowArgs>(args?: SelectSubset<T, CenterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Centers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centers
     * const centers = await prisma.center.findMany()
     * 
     * // Get first 10 Centers
     * const centers = await prisma.center.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centerWithIdOnly = await prisma.center.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CenterFindManyArgs>(args?: SelectSubset<T, CenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Center.
     * @param {CenterCreateArgs} args - Arguments to create a Center.
     * @example
     * // Create one Center
     * const Center = await prisma.center.create({
     *   data: {
     *     // ... data to create a Center
     *   }
     * })
     * 
     */
    create<T extends CenterCreateArgs>(args: SelectSubset<T, CenterCreateArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Centers.
     * @param {CenterCreateManyArgs} args - Arguments to create many Centers.
     * @example
     * // Create many Centers
     * const center = await prisma.center.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CenterCreateManyArgs>(args?: SelectSubset<T, CenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Center.
     * @param {CenterDeleteArgs} args - Arguments to delete one Center.
     * @example
     * // Delete one Center
     * const Center = await prisma.center.delete({
     *   where: {
     *     // ... filter to delete one Center
     *   }
     * })
     * 
     */
    delete<T extends CenterDeleteArgs>(args: SelectSubset<T, CenterDeleteArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Center.
     * @param {CenterUpdateArgs} args - Arguments to update one Center.
     * @example
     * // Update one Center
     * const center = await prisma.center.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CenterUpdateArgs>(args: SelectSubset<T, CenterUpdateArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Centers.
     * @param {CenterDeleteManyArgs} args - Arguments to filter Centers to delete.
     * @example
     * // Delete a few Centers
     * const { count } = await prisma.center.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CenterDeleteManyArgs>(args?: SelectSubset<T, CenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centers
     * const center = await prisma.center.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CenterUpdateManyArgs>(args: SelectSubset<T, CenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Center.
     * @param {CenterUpsertArgs} args - Arguments to update or create a Center.
     * @example
     * // Update or create a Center
     * const center = await prisma.center.upsert({
     *   create: {
     *     // ... data to create a Center
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Center we want to update
     *   }
     * })
     */
    upsert<T extends CenterUpsertArgs>(args: SelectSubset<T, CenterUpsertArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterCountArgs} args - Arguments to filter Centers to count.
     * @example
     * // Count the number of Centers
     * const count = await prisma.center.count({
     *   where: {
     *     // ... the filter for the Centers we want to count
     *   }
     * })
    **/
    count<T extends CenterCountArgs>(
      args?: Subset<T, CenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Center.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CenterAggregateArgs>(args: Subset<T, CenterAggregateArgs>): Prisma.PrismaPromise<GetCenterAggregateType<T>>

    /**
     * Group by Center.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterGroupByArgs} args - Group by arguments.
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
      T extends CenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CenterGroupByArgs['orderBy'] }
        : { orderBy?: CenterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Center model
   */
  readonly fields: CenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Center.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programs<T extends Center$programsArgs<ExtArgs> = {}>(args?: Subset<T, Center$programsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Center model
   */
  interface CenterFieldRefs {
    readonly id: FieldRef<"Center", 'Int'>
    readonly name: FieldRef<"Center", 'String'>
    readonly centerType: FieldRef<"Center", 'String'>
    readonly description: FieldRef<"Center", 'String'>
    readonly address: FieldRef<"Center", 'String'>
    readonly city: FieldRef<"Center", 'String'>
    readonly state: FieldRef<"Center", 'String'>
    readonly country: FieldRef<"Center", 'String'>
    readonly pincode: FieldRef<"Center", 'String'>
    readonly geoLocation: FieldRef<"Center", 'Json'>
    readonly contactNumber: FieldRef<"Center", 'String'>
    readonly email: FieldRef<"Center", 'String'>
    readonly capacity: FieldRef<"Center", 'Int'>
    readonly isActive: FieldRef<"Center", 'Boolean'>
    readonly createdBy: FieldRef<"Center", 'Json'>
    readonly createdAt: FieldRef<"Center", 'DateTime'>
    readonly updatedAt: FieldRef<"Center", 'DateTime'>
    readonly metaData: FieldRef<"Center", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Center findUnique
   */
  export type CenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center findUniqueOrThrow
   */
  export type CenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center findFirst
   */
  export type CenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centers.
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centers.
     */
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Center findFirstOrThrow
   */
  export type CenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centers.
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centers.
     */
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Center findMany
   */
  export type CenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Centers to fetch.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Centers.
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Center create
   */
  export type CenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * The data needed to create a Center.
     */
    data: XOR<CenterCreateInput, CenterUncheckedCreateInput>
  }

  /**
   * Center createMany
   */
  export type CenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Centers.
     */
    data: CenterCreateManyInput | CenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Center update
   */
  export type CenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * The data needed to update a Center.
     */
    data: XOR<CenterUpdateInput, CenterUncheckedUpdateInput>
    /**
     * Choose, which Center to update.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center updateMany
   */
  export type CenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Centers.
     */
    data: XOR<CenterUpdateManyMutationInput, CenterUncheckedUpdateManyInput>
    /**
     * Filter which Centers to update
     */
    where?: CenterWhereInput
    /**
     * Limit how many Centers to update.
     */
    limit?: number
  }

  /**
   * Center upsert
   */
  export type CenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * The filter to search for the Center to update in case it exists.
     */
    where: CenterWhereUniqueInput
    /**
     * In case the Center found by the `where` argument doesn't exist, create a new Center with this data.
     */
    create: XOR<CenterCreateInput, CenterUncheckedCreateInput>
    /**
     * In case the Center was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CenterUpdateInput, CenterUncheckedUpdateInput>
  }

  /**
   * Center delete
   */
  export type CenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter which Center to delete.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center deleteMany
   */
  export type CenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Centers to delete
     */
    where?: CenterWhereInput
    /**
     * Limit how many Centers to delete.
     */
    limit?: number
  }

  /**
   * Center.programs
   */
  export type Center$programsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Center without action
   */
  export type CenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    id: number | null
    programTypeId: number | null
    centerId: number | null
    primaryTeacherId: number | null
  }

  export type ProgramSumAggregateOutputType = {
    id: number | null
    programTypeId: number | null
    centerId: number | null
    primaryTeacherId: number | null
  }

  export type ProgramMinAggregateOutputType = {
    id: number | null
    programTypeId: number | null
    centerId: number | null
    registrationCloseDateTime: Date | null
    registrationOpenDateTime: Date | null
    scheduled: boolean | null
    isActive: boolean | null
    isSearchable: boolean | null
    shortUrl: string | null
    primaryTeacherId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    crfStatus: string | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: number | null
    programTypeId: number | null
    centerId: number | null
    registrationCloseDateTime: Date | null
    registrationOpenDateTime: Date | null
    scheduled: boolean | null
    isActive: boolean | null
    isSearchable: boolean | null
    shortUrl: string | null
    primaryTeacherId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    crfStatus: string | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    programTypeId: number
    centerId: number
    timing: number
    tags: number
    registrationCloseDateTime: number
    registrationOpenDateTime: number
    scheduled: number
    isActive: number
    isSearchable: number
    shortUrl: number
    primaryTeacherId: number
    feeStructure: number
    createdAt: number
    updatedAt: number
    status: number
    crfStatus: number
    metaData: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    id?: true
    programTypeId?: true
    centerId?: true
    primaryTeacherId?: true
  }

  export type ProgramSumAggregateInputType = {
    id?: true
    programTypeId?: true
    centerId?: true
    primaryTeacherId?: true
  }

  export type ProgramMinAggregateInputType = {
    id?: true
    programTypeId?: true
    centerId?: true
    registrationCloseDateTime?: true
    registrationOpenDateTime?: true
    scheduled?: true
    isActive?: true
    isSearchable?: true
    shortUrl?: true
    primaryTeacherId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    crfStatus?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    programTypeId?: true
    centerId?: true
    registrationCloseDateTime?: true
    registrationOpenDateTime?: true
    scheduled?: true
    isActive?: true
    isSearchable?: true
    shortUrl?: true
    primaryTeacherId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    crfStatus?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    programTypeId?: true
    centerId?: true
    timing?: true
    tags?: true
    registrationCloseDateTime?: true
    registrationOpenDateTime?: true
    scheduled?: true
    isActive?: true
    isSearchable?: true
    shortUrl?: true
    primaryTeacherId?: true
    feeStructure?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    crfStatus?: true
    metaData?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: number
    programTypeId: number
    centerId: number | null
    timing: JsonValue
    tags: JsonValue
    registrationCloseDateTime: Date | null
    registrationOpenDateTime: Date | null
    scheduled: boolean
    isActive: boolean
    isSearchable: boolean
    shortUrl: string | null
    primaryTeacherId: number
    feeStructure: JsonValue
    createdAt: Date
    updatedAt: Date
    status: string
    crfStatus: string
    metaData: JsonValue
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programTypeId?: boolean
    centerId?: boolean
    timing?: boolean
    tags?: boolean
    registrationCloseDateTime?: boolean
    registrationOpenDateTime?: boolean
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: boolean
    primaryTeacherId?: boolean
    feeStructure?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    crfStatus?: boolean
    metaData?: boolean
    programType?: boolean | ProgramTypeDefaultArgs<ExtArgs>
    center?: boolean | Program$centerArgs<ExtArgs>
    primaryTeacher?: boolean | TeacherDefaultArgs<ExtArgs>
    coTeachers?: boolean | Program$coTeachersArgs<ExtArgs>
    registrations?: boolean | Program$registrationsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>



  export type ProgramSelectScalar = {
    id?: boolean
    programTypeId?: boolean
    centerId?: boolean
    timing?: boolean
    tags?: boolean
    registrationCloseDateTime?: boolean
    registrationOpenDateTime?: boolean
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: boolean
    primaryTeacherId?: boolean
    feeStructure?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    crfStatus?: boolean
    metaData?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programTypeId" | "centerId" | "timing" | "tags" | "registrationCloseDateTime" | "registrationOpenDateTime" | "scheduled" | "isActive" | "isSearchable" | "shortUrl" | "primaryTeacherId" | "feeStructure" | "createdAt" | "updatedAt" | "status" | "crfStatus" | "metaData", ExtArgs["result"]["program"]>
  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programType?: boolean | ProgramTypeDefaultArgs<ExtArgs>
    center?: boolean | Program$centerArgs<ExtArgs>
    primaryTeacher?: boolean | TeacherDefaultArgs<ExtArgs>
    coTeachers?: boolean | Program$coTeachersArgs<ExtArgs>
    registrations?: boolean | Program$registrationsArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      programType: Prisma.$ProgramTypePayload<ExtArgs>
      center: Prisma.$CenterPayload<ExtArgs> | null
      primaryTeacher: Prisma.$TeacherPayload<ExtArgs>
      coTeachers: Prisma.$TeacherPayload<ExtArgs>[]
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      programTypeId: number
      centerId: number | null
      timing: Prisma.JsonValue
      tags: Prisma.JsonValue
      registrationCloseDateTime: Date | null
      registrationOpenDateTime: Date | null
      scheduled: boolean
      isActive: boolean
      isSearchable: boolean
      shortUrl: string | null
      primaryTeacherId: number
      feeStructure: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      status: string
      crfStatus: string
      metaData: Prisma.JsonValue
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
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
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programType<T extends ProgramTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramTypeDefaultArgs<ExtArgs>>): Prisma__ProgramTypeClient<$Result.GetResult<Prisma.$ProgramTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    center<T extends Program$centerArgs<ExtArgs> = {}>(args?: Subset<T, Program$centerArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    primaryTeacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coTeachers<T extends Program$coTeachersArgs<ExtArgs> = {}>(args?: Subset<T, Program$coTeachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registrations<T extends Program$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Program$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly id: FieldRef<"Program", 'Int'>
    readonly programTypeId: FieldRef<"Program", 'Int'>
    readonly centerId: FieldRef<"Program", 'Int'>
    readonly timing: FieldRef<"Program", 'Json'>
    readonly tags: FieldRef<"Program", 'Json'>
    readonly registrationCloseDateTime: FieldRef<"Program", 'DateTime'>
    readonly registrationOpenDateTime: FieldRef<"Program", 'DateTime'>
    readonly scheduled: FieldRef<"Program", 'Boolean'>
    readonly isActive: FieldRef<"Program", 'Boolean'>
    readonly isSearchable: FieldRef<"Program", 'Boolean'>
    readonly shortUrl: FieldRef<"Program", 'String'>
    readonly primaryTeacherId: FieldRef<"Program", 'Int'>
    readonly feeStructure: FieldRef<"Program", 'Json'>
    readonly createdAt: FieldRef<"Program", 'DateTime'>
    readonly updatedAt: FieldRef<"Program", 'DateTime'>
    readonly status: FieldRef<"Program", 'String'>
    readonly crfStatus: FieldRef<"Program", 'String'>
    readonly metaData: FieldRef<"Program", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program.center
   */
  export type Program$centerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    where?: CenterWhereInput
  }

  /**
   * Program.coTeachers
   */
  export type Program$coTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    cursor?: TeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Program.registrations
   */
  export type Program$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model Registration
   */

  export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  export type RegistrationAvgAggregateOutputType = {
    id: number | null
    programId: number | null
    userId: number | null
  }

  export type RegistrationSumAggregateOutputType = {
    id: number | null
    programId: number | null
    userId: number | null
  }

  export type RegistrationMinAggregateOutputType = {
    id: number | null
    programId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type RegistrationMaxAggregateOutputType = {
    id: number | null
    programId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type RegistrationCountAggregateOutputType = {
    id: number
    programId: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type RegistrationAvgAggregateInputType = {
    id?: true
    programId?: true
    userId?: true
  }

  export type RegistrationSumAggregateInputType = {
    id?: true
    programId?: true
    userId?: true
  }

  export type RegistrationMinAggregateInputType = {
    id?: true
    programId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RegistrationMaxAggregateInputType = {
    id?: true
    programId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type RegistrationCountAggregateInputType = {
    id?: true
    programId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type RegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registration to aggregate.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registrations
    **/
    _count?: true | RegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationMaxAggregateInputType
  }

  export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistration[P]>
      : GetScalarType<T[P], AggregateRegistration[P]>
  }




  export type RegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithAggregationInput | RegistrationOrderByWithAggregationInput[]
    by: RegistrationScalarFieldEnum[] | RegistrationScalarFieldEnum
    having?: RegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationCountAggregateInputType | true
    _avg?: RegistrationAvgAggregateInputType
    _sum?: RegistrationSumAggregateInputType
    _min?: RegistrationMinAggregateInputType
    _max?: RegistrationMaxAggregateInputType
  }

  export type RegistrationGroupByOutputType = {
    id: number
    programId: number
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    programId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>



  export type RegistrationSelectScalar = {
    id?: boolean
    programId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type RegistrationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "programId" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["registration"]>
  export type RegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | ProgramDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registration"
    objects: {
      program: Prisma.$ProgramPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      programId: number
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["registration"]>
    composites: {}
  }

  type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = $Result.GetResult<Prisma.$RegistrationPayload, S>

  type RegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistrationCountAggregateInputType | true
    }

  export interface RegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registration'], meta: { name: 'Registration' } }
    /**
     * Find zero or one Registration that matches the filter.
     * @param {RegistrationFindUniqueArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationFindUniqueArgs>(args: SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistrationFindUniqueOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationFindFirstArgs>(args?: SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registration.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationWithIdOnly = await prisma.registration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationFindManyArgs>(args?: SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registration.
     * @param {RegistrationCreateArgs} args - Arguments to create a Registration.
     * @example
     * // Create one Registration
     * const Registration = await prisma.registration.create({
     *   data: {
     *     // ... data to create a Registration
     *   }
     * })
     * 
     */
    create<T extends RegistrationCreateArgs>(args: SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registrations.
     * @param {RegistrationCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationCreateManyArgs>(args?: SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Registration.
     * @param {RegistrationDeleteArgs} args - Arguments to delete one Registration.
     * @example
     * // Delete one Registration
     * const Registration = await prisma.registration.delete({
     *   where: {
     *     // ... filter to delete one Registration
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDeleteArgs>(args: SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registration.
     * @param {RegistrationUpdateArgs} args - Arguments to update one Registration.
     * @example
     * // Update one Registration
     * const registration = await prisma.registration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationUpdateArgs>(args: SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registrations.
     * @param {RegistrationDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationUpdateManyArgs>(args: SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registration.
     * @param {RegistrationUpsertArgs} args - Arguments to update or create a Registration.
     * @example
     * // Update or create a Registration
     * const registration = await prisma.registration.upsert({
     *   create: {
     *     // ... data to create a Registration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registration we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationUpsertArgs>(args: SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registration.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends RegistrationCountArgs>(
      args?: Subset<T, RegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationAggregateArgs>(args: Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>

    /**
     * Group by Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationGroupByArgs} args - Group by arguments.
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
      T extends RegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registration model
   */
  readonly fields: RegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    program<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Registration model
   */
  interface RegistrationFieldRefs {
    readonly id: FieldRef<"Registration", 'Int'>
    readonly programId: FieldRef<"Registration", 'Int'>
    readonly createdAt: FieldRef<"Registration", 'DateTime'>
    readonly updatedAt: FieldRef<"Registration", 'DateTime'>
    readonly userId: FieldRef<"Registration", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Registration findUnique
   */
  export type RegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findUniqueOrThrow
   */
  export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findFirst
   */
  export type RegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findFirstOrThrow
   */
  export type RegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findMany
   */
  export type RegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration create
   */
  export type RegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Registration.
     */
    data: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
  }

  /**
   * Registration createMany
   */
  export type RegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registration update
   */
  export type RegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Registration.
     */
    data: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
    /**
     * Choose, which Registration to update.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration updateMany
   */
  export type RegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to update.
     */
    limit?: number
  }

  /**
   * Registration upsert
   */
  export type RegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Registration to update in case it exists.
     */
    where: RegistrationWhereUniqueInput
    /**
     * In case the Registration found by the `where` argument doesn't exist, create a new Registration with this data.
     */
    create: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
    /**
     * In case the Registration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
  }

  /**
   * Registration delete
   */
  export type RegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter which Registration to delete.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration deleteMany
   */
  export type RegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to delete
     */
    where?: RegistrationWhereInput
    /**
     * Limit how many Registrations to delete.
     */
    limit?: number
  }

  /**
   * Registration without action
   */
  export type RegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registration
     */
    omit?: RegistrationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
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
    userId: 'userId',
    name: 'name',
    email: 'email',
    mobileNumber: 'mobileNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EmailScalarFieldEnum: {
    id: 'id',
    email: 'email',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type EmailScalarFieldEnum = (typeof EmailScalarFieldEnum)[keyof typeof EmailScalarFieldEnum]


  export const MobileNumberScalarFieldEnum: {
    id: 'id',
    mobileNumber: 'mobileNumber',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MobileNumberScalarFieldEnum = (typeof MobileNumberScalarFieldEnum)[keyof typeof MobileNumberScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    address: 'address',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teacherCode: 'teacherCode',
    status: 'status',
    isActive: 'isActive',
    isSearchable: 'isSearchable',
    isOnboarded: 'isOnboarded',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const TeacherEligibilityScalarFieldEnum: {
    id: 'id',
    teacherId: 'teacherId',
    programId: 'programId',
    metaData: 'metaData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeacherEligibilityScalarFieldEnum = (typeof TeacherEligibilityScalarFieldEnum)[keyof typeof TeacherEligibilityScalarFieldEnum]


  export const ProgramTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metaData: 'metaData',
    isActive: 'isActive',
    activeUntil: 'activeUntil',
    preRequisites: 'preRequisites',
    feeStructure: 'feeStructure'
  };

  export type ProgramTypeScalarFieldEnum = (typeof ProgramTypeScalarFieldEnum)[keyof typeof ProgramTypeScalarFieldEnum]


  export const CenterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    centerType: 'centerType',
    description: 'description',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    pincode: 'pincode',
    geoLocation: 'geoLocation',
    contactNumber: 'contactNumber',
    email: 'email',
    capacity: 'capacity',
    isActive: 'isActive',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    metaData: 'metaData'
  };

  export type CenterScalarFieldEnum = (typeof CenterScalarFieldEnum)[keyof typeof CenterScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    programTypeId: 'programTypeId',
    centerId: 'centerId',
    timing: 'timing',
    tags: 'tags',
    registrationCloseDateTime: 'registrationCloseDateTime',
    registrationOpenDateTime: 'registrationOpenDateTime',
    scheduled: 'scheduled',
    isActive: 'isActive',
    isSearchable: 'isSearchable',
    shortUrl: 'shortUrl',
    primaryTeacherId: 'primaryTeacherId',
    feeStructure: 'feeStructure',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    crfStatus: 'crfStatus',
    metaData: 'metaData'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const RegistrationScalarFieldEnum: {
    id: 'id',
    programId: 'programId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    userId: 'userId',
    name: 'name',
    email: 'email',
    mobileNumber: 'mobileNumber'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const EmailOrderByRelevanceFieldEnum: {
    email: 'email'
  };

  export type EmailOrderByRelevanceFieldEnum = (typeof EmailOrderByRelevanceFieldEnum)[keyof typeof EmailOrderByRelevanceFieldEnum]


  export const MobileNumberOrderByRelevanceFieldEnum: {
    mobileNumber: 'mobileNumber'
  };

  export type MobileNumberOrderByRelevanceFieldEnum = (typeof MobileNumberOrderByRelevanceFieldEnum)[keyof typeof MobileNumberOrderByRelevanceFieldEnum]


  export const AddressOrderByRelevanceFieldEnum: {
    address: 'address'
  };

  export type AddressOrderByRelevanceFieldEnum = (typeof AddressOrderByRelevanceFieldEnum)[keyof typeof AddressOrderByRelevanceFieldEnum]


  export const TeacherOrderByRelevanceFieldEnum: {
    teacherCode: 'teacherCode',
    status: 'status'
  };

  export type TeacherOrderByRelevanceFieldEnum = (typeof TeacherOrderByRelevanceFieldEnum)[keyof typeof TeacherOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ProgramTypeOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type ProgramTypeOrderByRelevanceFieldEnum = (typeof ProgramTypeOrderByRelevanceFieldEnum)[keyof typeof ProgramTypeOrderByRelevanceFieldEnum]


  export const CenterOrderByRelevanceFieldEnum: {
    name: 'name',
    centerType: 'centerType',
    description: 'description',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    pincode: 'pincode',
    contactNumber: 'contactNumber',
    email: 'email'
  };

  export type CenterOrderByRelevanceFieldEnum = (typeof CenterOrderByRelevanceFieldEnum)[keyof typeof CenterOrderByRelevanceFieldEnum]


  export const ProgramOrderByRelevanceFieldEnum: {
    shortUrl: 'shortUrl',
    status: 'status',
    crfStatus: 'crfStatus'
  };

  export type ProgramOrderByRelevanceFieldEnum = (typeof ProgramOrderByRelevanceFieldEnum)[keyof typeof ProgramOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    mobileNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emails?: EmailListRelationFilter
    addresses?: AddressListRelationFilter
    mobileNumbers?: MobileNumberListRelationFilter
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    registrations?: RegistrationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emails?: EmailOrderByRelationAggregateInput
    addresses?: AddressOrderByRelationAggregateInput
    mobileNumbers?: MobileNumberOrderByRelationAggregateInput
    teacher?: TeacherOrderByWithRelationInput
    registrations?: RegistrationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    mobileNumber?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emails?: EmailListRelationFilter
    addresses?: AddressListRelationFilter
    mobileNumbers?: MobileNumberListRelationFilter
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    registrations?: RegistrationListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    userId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobileNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EmailWhereInput = {
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    id?: IntFilter<"Email"> | number
    email?: StringFilter<"Email"> | string
    isDefault?: BoolFilter<"Email"> | boolean
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    userId?: IntFilter<"Email"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: EmailOrderByRelevanceInput
  }

  export type EmailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailWhereInput | EmailWhereInput[]
    OR?: EmailWhereInput[]
    NOT?: EmailWhereInput | EmailWhereInput[]
    email?: StringFilter<"Email"> | string
    isDefault?: BoolFilter<"Email"> | boolean
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    userId?: IntFilter<"Email"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EmailOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: EmailCountOrderByAggregateInput
    _avg?: EmailAvgOrderByAggregateInput
    _max?: EmailMaxOrderByAggregateInput
    _min?: EmailMinOrderByAggregateInput
    _sum?: EmailSumOrderByAggregateInput
  }

  export type EmailScalarWhereWithAggregatesInput = {
    AND?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    OR?: EmailScalarWhereWithAggregatesInput[]
    NOT?: EmailScalarWhereWithAggregatesInput | EmailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Email"> | number
    email?: StringWithAggregatesFilter<"Email"> | string
    isDefault?: BoolWithAggregatesFilter<"Email"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Email"> | Date | string
    userId?: IntWithAggregatesFilter<"Email"> | number
  }

  export type MobileNumberWhereInput = {
    AND?: MobileNumberWhereInput | MobileNumberWhereInput[]
    OR?: MobileNumberWhereInput[]
    NOT?: MobileNumberWhereInput | MobileNumberWhereInput[]
    id?: IntFilter<"MobileNumber"> | number
    mobileNumber?: StringFilter<"MobileNumber"> | string
    isDefault?: BoolFilter<"MobileNumber"> | boolean
    createdAt?: DateTimeFilter<"MobileNumber"> | Date | string
    updatedAt?: DateTimeFilter<"MobileNumber"> | Date | string
    userId?: IntFilter<"MobileNumber"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MobileNumberOrderByWithRelationInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: MobileNumberOrderByRelevanceInput
  }

  export type MobileNumberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MobileNumberWhereInput | MobileNumberWhereInput[]
    OR?: MobileNumberWhereInput[]
    NOT?: MobileNumberWhereInput | MobileNumberWhereInput[]
    mobileNumber?: StringFilter<"MobileNumber"> | string
    isDefault?: BoolFilter<"MobileNumber"> | boolean
    createdAt?: DateTimeFilter<"MobileNumber"> | Date | string
    updatedAt?: DateTimeFilter<"MobileNumber"> | Date | string
    userId?: IntFilter<"MobileNumber"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MobileNumberOrderByWithAggregationInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: MobileNumberCountOrderByAggregateInput
    _avg?: MobileNumberAvgOrderByAggregateInput
    _max?: MobileNumberMaxOrderByAggregateInput
    _min?: MobileNumberMinOrderByAggregateInput
    _sum?: MobileNumberSumOrderByAggregateInput
  }

  export type MobileNumberScalarWhereWithAggregatesInput = {
    AND?: MobileNumberScalarWhereWithAggregatesInput | MobileNumberScalarWhereWithAggregatesInput[]
    OR?: MobileNumberScalarWhereWithAggregatesInput[]
    NOT?: MobileNumberScalarWhereWithAggregatesInput | MobileNumberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MobileNumber"> | number
    mobileNumber?: StringWithAggregatesFilter<"MobileNumber"> | string
    isDefault?: BoolWithAggregatesFilter<"MobileNumber"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MobileNumber"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MobileNumber"> | Date | string
    userId?: IntWithAggregatesFilter<"MobileNumber"> | number
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    address?: StringFilter<"Address"> | string
    isDefault?: BoolFilter<"Address"> | boolean
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    userId?: IntFilter<"Address"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AddressOrderByRelevanceInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    address?: StringFilter<"Address"> | string
    isDefault?: BoolFilter<"Address"> | boolean
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    userId?: IntFilter<"Address"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    address?: StringWithAggregatesFilter<"Address"> | string
    isDefault?: BoolWithAggregatesFilter<"Address"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    userId?: IntWithAggregatesFilter<"Address"> | number
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    userId?: IntFilter<"Teacher"> | number
    teacherCode?: StringFilter<"Teacher"> | string
    status?: StringFilter<"Teacher"> | string
    isActive?: BoolFilter<"Teacher"> | boolean
    isSearchable?: BoolFilter<"Teacher"> | boolean
    isOnboarded?: BoolFilter<"Teacher"> | boolean
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    eligibility?: TeacherEligibilityListRelationFilter
    programs?: ProgramListRelationFilter
    coTaughtPrograms?: ProgramListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teacherCode?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    eligibility?: TeacherEligibilityOrderByRelationAggregateInput
    programs?: ProgramOrderByRelationAggregateInput
    coTaughtPrograms?: ProgramOrderByRelationAggregateInput
    _relevance?: TeacherOrderByRelevanceInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    teacherCode?: StringFilter<"Teacher"> | string
    status?: StringFilter<"Teacher"> | string
    isActive?: BoolFilter<"Teacher"> | boolean
    isSearchable?: BoolFilter<"Teacher"> | boolean
    isOnboarded?: BoolFilter<"Teacher"> | boolean
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    eligibility?: TeacherEligibilityListRelationFilter
    programs?: ProgramListRelationFilter
    coTaughtPrograms?: ProgramListRelationFilter
  }, "id" | "userId">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teacherCode?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    userId?: IntWithAggregatesFilter<"Teacher"> | number
    teacherCode?: StringWithAggregatesFilter<"Teacher"> | string
    status?: StringWithAggregatesFilter<"Teacher"> | string
    isActive?: BoolWithAggregatesFilter<"Teacher"> | boolean
    isSearchable?: BoolWithAggregatesFilter<"Teacher"> | boolean
    isOnboarded?: BoolWithAggregatesFilter<"Teacher"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type TeacherEligibilityWhereInput = {
    AND?: TeacherEligibilityWhereInput | TeacherEligibilityWhereInput[]
    OR?: TeacherEligibilityWhereInput[]
    NOT?: TeacherEligibilityWhereInput | TeacherEligibilityWhereInput[]
    id?: IntFilter<"TeacherEligibility"> | number
    teacherId?: IntFilter<"TeacherEligibility"> | number
    programId?: IntFilter<"TeacherEligibility"> | number
    metaData?: JsonFilter<"TeacherEligibility">
    createdAt?: DateTimeFilter<"TeacherEligibility"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherEligibility"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    program?: XOR<ProgramTypeScalarRelationFilter, ProgramTypeWhereInput>
  }

  export type TeacherEligibilityOrderByWithRelationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    programId?: SortOrder
    metaData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    program?: ProgramTypeOrderByWithRelationInput
  }

  export type TeacherEligibilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeacherEligibilityWhereInput | TeacherEligibilityWhereInput[]
    OR?: TeacherEligibilityWhereInput[]
    NOT?: TeacherEligibilityWhereInput | TeacherEligibilityWhereInput[]
    teacherId?: IntFilter<"TeacherEligibility"> | number
    programId?: IntFilter<"TeacherEligibility"> | number
    metaData?: JsonFilter<"TeacherEligibility">
    createdAt?: DateTimeFilter<"TeacherEligibility"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherEligibility"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    program?: XOR<ProgramTypeScalarRelationFilter, ProgramTypeWhereInput>
  }, "id">

  export type TeacherEligibilityOrderByWithAggregationInput = {
    id?: SortOrder
    teacherId?: SortOrder
    programId?: SortOrder
    metaData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeacherEligibilityCountOrderByAggregateInput
    _avg?: TeacherEligibilityAvgOrderByAggregateInput
    _max?: TeacherEligibilityMaxOrderByAggregateInput
    _min?: TeacherEligibilityMinOrderByAggregateInput
    _sum?: TeacherEligibilitySumOrderByAggregateInput
  }

  export type TeacherEligibilityScalarWhereWithAggregatesInput = {
    AND?: TeacherEligibilityScalarWhereWithAggregatesInput | TeacherEligibilityScalarWhereWithAggregatesInput[]
    OR?: TeacherEligibilityScalarWhereWithAggregatesInput[]
    NOT?: TeacherEligibilityScalarWhereWithAggregatesInput | TeacherEligibilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherEligibility"> | number
    teacherId?: IntWithAggregatesFilter<"TeacherEligibility"> | number
    programId?: IntWithAggregatesFilter<"TeacherEligibility"> | number
    metaData?: JsonWithAggregatesFilter<"TeacherEligibility">
    createdAt?: DateTimeWithAggregatesFilter<"TeacherEligibility"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TeacherEligibility"> | Date | string
  }

  export type ProgramTypeWhereInput = {
    AND?: ProgramTypeWhereInput | ProgramTypeWhereInput[]
    OR?: ProgramTypeWhereInput[]
    NOT?: ProgramTypeWhereInput | ProgramTypeWhereInput[]
    id?: IntFilter<"ProgramType"> | number
    name?: StringFilter<"ProgramType"> | string
    description?: StringNullableFilter<"ProgramType"> | string | null
    createdAt?: DateTimeFilter<"ProgramType"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramType"> | Date | string
    metaData?: JsonFilter<"ProgramType">
    isActive?: BoolFilter<"ProgramType"> | boolean
    activeUntil?: DateTimeNullableFilter<"ProgramType"> | Date | string | null
    preRequisites?: JsonNullableFilter<"ProgramType">
    feeStructure?: JsonFilter<"ProgramType">
    teacherEligibility?: TeacherEligibilityListRelationFilter
    programs?: ProgramListRelationFilter
  }

  export type ProgramTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaData?: SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrderInput | SortOrder
    preRequisites?: SortOrderInput | SortOrder
    feeStructure?: SortOrder
    teacherEligibility?: TeacherEligibilityOrderByRelationAggregateInput
    programs?: ProgramOrderByRelationAggregateInput
    _relevance?: ProgramTypeOrderByRelevanceInput
  }

  export type ProgramTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProgramTypeWhereInput | ProgramTypeWhereInput[]
    OR?: ProgramTypeWhereInput[]
    NOT?: ProgramTypeWhereInput | ProgramTypeWhereInput[]
    name?: StringFilter<"ProgramType"> | string
    description?: StringNullableFilter<"ProgramType"> | string | null
    createdAt?: DateTimeFilter<"ProgramType"> | Date | string
    updatedAt?: DateTimeFilter<"ProgramType"> | Date | string
    metaData?: JsonFilter<"ProgramType">
    isActive?: BoolFilter<"ProgramType"> | boolean
    activeUntil?: DateTimeNullableFilter<"ProgramType"> | Date | string | null
    preRequisites?: JsonNullableFilter<"ProgramType">
    feeStructure?: JsonFilter<"ProgramType">
    teacherEligibility?: TeacherEligibilityListRelationFilter
    programs?: ProgramListRelationFilter
  }, "id">

  export type ProgramTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaData?: SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrderInput | SortOrder
    preRequisites?: SortOrderInput | SortOrder
    feeStructure?: SortOrder
    _count?: ProgramTypeCountOrderByAggregateInput
    _avg?: ProgramTypeAvgOrderByAggregateInput
    _max?: ProgramTypeMaxOrderByAggregateInput
    _min?: ProgramTypeMinOrderByAggregateInput
    _sum?: ProgramTypeSumOrderByAggregateInput
  }

  export type ProgramTypeScalarWhereWithAggregatesInput = {
    AND?: ProgramTypeScalarWhereWithAggregatesInput | ProgramTypeScalarWhereWithAggregatesInput[]
    OR?: ProgramTypeScalarWhereWithAggregatesInput[]
    NOT?: ProgramTypeScalarWhereWithAggregatesInput | ProgramTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProgramType"> | number
    name?: StringWithAggregatesFilter<"ProgramType"> | string
    description?: StringNullableWithAggregatesFilter<"ProgramType"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProgramType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProgramType"> | Date | string
    metaData?: JsonWithAggregatesFilter<"ProgramType">
    isActive?: BoolWithAggregatesFilter<"ProgramType"> | boolean
    activeUntil?: DateTimeNullableWithAggregatesFilter<"ProgramType"> | Date | string | null
    preRequisites?: JsonNullableWithAggregatesFilter<"ProgramType">
    feeStructure?: JsonWithAggregatesFilter<"ProgramType">
  }

  export type CenterWhereInput = {
    AND?: CenterWhereInput | CenterWhereInput[]
    OR?: CenterWhereInput[]
    NOT?: CenterWhereInput | CenterWhereInput[]
    id?: IntFilter<"Center"> | number
    name?: StringFilter<"Center"> | string
    centerType?: StringFilter<"Center"> | string
    description?: StringNullableFilter<"Center"> | string | null
    address?: StringNullableFilter<"Center"> | string | null
    city?: StringNullableFilter<"Center"> | string | null
    state?: StringNullableFilter<"Center"> | string | null
    country?: StringNullableFilter<"Center"> | string | null
    pincode?: StringNullableFilter<"Center"> | string | null
    geoLocation?: JsonNullableFilter<"Center">
    contactNumber?: StringNullableFilter<"Center"> | string | null
    email?: StringNullableFilter<"Center"> | string | null
    capacity?: IntNullableFilter<"Center"> | number | null
    isActive?: BoolFilter<"Center"> | boolean
    createdBy?: JsonFilter<"Center">
    createdAt?: DateTimeFilter<"Center"> | Date | string
    updatedAt?: DateTimeFilter<"Center"> | Date | string
    metaData?: JsonFilter<"Center">
    programs?: ProgramListRelationFilter
  }

  export type CenterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    centerType?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    geoLocation?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaData?: SortOrder
    programs?: ProgramOrderByRelationAggregateInput
    _relevance?: CenterOrderByRelevanceInput
  }

  export type CenterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CenterWhereInput | CenterWhereInput[]
    OR?: CenterWhereInput[]
    NOT?: CenterWhereInput | CenterWhereInput[]
    name?: StringFilter<"Center"> | string
    centerType?: StringFilter<"Center"> | string
    description?: StringNullableFilter<"Center"> | string | null
    address?: StringNullableFilter<"Center"> | string | null
    city?: StringNullableFilter<"Center"> | string | null
    state?: StringNullableFilter<"Center"> | string | null
    country?: StringNullableFilter<"Center"> | string | null
    pincode?: StringNullableFilter<"Center"> | string | null
    geoLocation?: JsonNullableFilter<"Center">
    contactNumber?: StringNullableFilter<"Center"> | string | null
    email?: StringNullableFilter<"Center"> | string | null
    capacity?: IntNullableFilter<"Center"> | number | null
    isActive?: BoolFilter<"Center"> | boolean
    createdBy?: JsonFilter<"Center">
    createdAt?: DateTimeFilter<"Center"> | Date | string
    updatedAt?: DateTimeFilter<"Center"> | Date | string
    metaData?: JsonFilter<"Center">
    programs?: ProgramListRelationFilter
  }, "id">

  export type CenterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    centerType?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    geoLocation?: SortOrderInput | SortOrder
    contactNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    capacity?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaData?: SortOrder
    _count?: CenterCountOrderByAggregateInput
    _avg?: CenterAvgOrderByAggregateInput
    _max?: CenterMaxOrderByAggregateInput
    _min?: CenterMinOrderByAggregateInput
    _sum?: CenterSumOrderByAggregateInput
  }

  export type CenterScalarWhereWithAggregatesInput = {
    AND?: CenterScalarWhereWithAggregatesInput | CenterScalarWhereWithAggregatesInput[]
    OR?: CenterScalarWhereWithAggregatesInput[]
    NOT?: CenterScalarWhereWithAggregatesInput | CenterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Center"> | number
    name?: StringWithAggregatesFilter<"Center"> | string
    centerType?: StringWithAggregatesFilter<"Center"> | string
    description?: StringNullableWithAggregatesFilter<"Center"> | string | null
    address?: StringNullableWithAggregatesFilter<"Center"> | string | null
    city?: StringNullableWithAggregatesFilter<"Center"> | string | null
    state?: StringNullableWithAggregatesFilter<"Center"> | string | null
    country?: StringNullableWithAggregatesFilter<"Center"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"Center"> | string | null
    geoLocation?: JsonNullableWithAggregatesFilter<"Center">
    contactNumber?: StringNullableWithAggregatesFilter<"Center"> | string | null
    email?: StringNullableWithAggregatesFilter<"Center"> | string | null
    capacity?: IntNullableWithAggregatesFilter<"Center"> | number | null
    isActive?: BoolWithAggregatesFilter<"Center"> | boolean
    createdBy?: JsonWithAggregatesFilter<"Center">
    createdAt?: DateTimeWithAggregatesFilter<"Center"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Center"> | Date | string
    metaData?: JsonWithAggregatesFilter<"Center">
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    id?: IntFilter<"Program"> | number
    programTypeId?: IntFilter<"Program"> | number
    centerId?: IntNullableFilter<"Program"> | number | null
    timing?: JsonFilter<"Program">
    tags?: JsonFilter<"Program">
    registrationCloseDateTime?: DateTimeNullableFilter<"Program"> | Date | string | null
    registrationOpenDateTime?: DateTimeNullableFilter<"Program"> | Date | string | null
    scheduled?: BoolFilter<"Program"> | boolean
    isActive?: BoolFilter<"Program"> | boolean
    isSearchable?: BoolFilter<"Program"> | boolean
    shortUrl?: StringNullableFilter<"Program"> | string | null
    primaryTeacherId?: IntFilter<"Program"> | number
    feeStructure?: JsonFilter<"Program">
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    status?: StringFilter<"Program"> | string
    crfStatus?: StringFilter<"Program"> | string
    metaData?: JsonFilter<"Program">
    programType?: XOR<ProgramTypeScalarRelationFilter, ProgramTypeWhereInput>
    center?: XOR<CenterNullableScalarRelationFilter, CenterWhereInput> | null
    primaryTeacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    coTeachers?: TeacherListRelationFilter
    registrations?: RegistrationListRelationFilter
  }

  export type ProgramOrderByWithRelationInput = {
    id?: SortOrder
    programTypeId?: SortOrder
    centerId?: SortOrderInput | SortOrder
    timing?: SortOrder
    tags?: SortOrder
    registrationCloseDateTime?: SortOrderInput | SortOrder
    registrationOpenDateTime?: SortOrderInput | SortOrder
    scheduled?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    shortUrl?: SortOrderInput | SortOrder
    primaryTeacherId?: SortOrder
    feeStructure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    crfStatus?: SortOrder
    metaData?: SortOrder
    programType?: ProgramTypeOrderByWithRelationInput
    center?: CenterOrderByWithRelationInput
    primaryTeacher?: TeacherOrderByWithRelationInput
    coTeachers?: TeacherOrderByRelationAggregateInput
    registrations?: RegistrationOrderByRelationAggregateInput
    _relevance?: ProgramOrderByRelevanceInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    programTypeId?: IntFilter<"Program"> | number
    centerId?: IntNullableFilter<"Program"> | number | null
    timing?: JsonFilter<"Program">
    tags?: JsonFilter<"Program">
    registrationCloseDateTime?: DateTimeNullableFilter<"Program"> | Date | string | null
    registrationOpenDateTime?: DateTimeNullableFilter<"Program"> | Date | string | null
    scheduled?: BoolFilter<"Program"> | boolean
    isActive?: BoolFilter<"Program"> | boolean
    isSearchable?: BoolFilter<"Program"> | boolean
    shortUrl?: StringNullableFilter<"Program"> | string | null
    primaryTeacherId?: IntFilter<"Program"> | number
    feeStructure?: JsonFilter<"Program">
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    status?: StringFilter<"Program"> | string
    crfStatus?: StringFilter<"Program"> | string
    metaData?: JsonFilter<"Program">
    programType?: XOR<ProgramTypeScalarRelationFilter, ProgramTypeWhereInput>
    center?: XOR<CenterNullableScalarRelationFilter, CenterWhereInput> | null
    primaryTeacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    coTeachers?: TeacherListRelationFilter
    registrations?: RegistrationListRelationFilter
  }, "id">

  export type ProgramOrderByWithAggregationInput = {
    id?: SortOrder
    programTypeId?: SortOrder
    centerId?: SortOrderInput | SortOrder
    timing?: SortOrder
    tags?: SortOrder
    registrationCloseDateTime?: SortOrderInput | SortOrder
    registrationOpenDateTime?: SortOrderInput | SortOrder
    scheduled?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    shortUrl?: SortOrderInput | SortOrder
    primaryTeacherId?: SortOrder
    feeStructure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    crfStatus?: SortOrder
    metaData?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _avg?: ProgramAvgOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
    _sum?: ProgramSumOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Program"> | number
    programTypeId?: IntWithAggregatesFilter<"Program"> | number
    centerId?: IntNullableWithAggregatesFilter<"Program"> | number | null
    timing?: JsonWithAggregatesFilter<"Program">
    tags?: JsonWithAggregatesFilter<"Program">
    registrationCloseDateTime?: DateTimeNullableWithAggregatesFilter<"Program"> | Date | string | null
    registrationOpenDateTime?: DateTimeNullableWithAggregatesFilter<"Program"> | Date | string | null
    scheduled?: BoolWithAggregatesFilter<"Program"> | boolean
    isActive?: BoolWithAggregatesFilter<"Program"> | boolean
    isSearchable?: BoolWithAggregatesFilter<"Program"> | boolean
    shortUrl?: StringNullableWithAggregatesFilter<"Program"> | string | null
    primaryTeacherId?: IntWithAggregatesFilter<"Program"> | number
    feeStructure?: JsonWithAggregatesFilter<"Program">
    createdAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Program"> | Date | string
    status?: StringWithAggregatesFilter<"Program"> | string
    crfStatus?: StringWithAggregatesFilter<"Program"> | string
    metaData?: JsonWithAggregatesFilter<"Program">
  }

  export type RegistrationWhereInput = {
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    id?: IntFilter<"Registration"> | number
    programId?: IntFilter<"Registration"> | number
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    updatedAt?: DateTimeFilter<"Registration"> | Date | string
    userId?: IntFilter<"Registration"> | number
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RegistrationOrderByWithRelationInput = {
    id?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    program?: ProgramOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    programId?: IntFilter<"Registration"> | number
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    updatedAt?: DateTimeFilter<"Registration"> | Date | string
    userId?: IntFilter<"Registration"> | number
    program?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: RegistrationCountOrderByAggregateInput
    _avg?: RegistrationAvgOrderByAggregateInput
    _max?: RegistrationMaxOrderByAggregateInput
    _min?: RegistrationMinOrderByAggregateInput
    _sum?: RegistrationSumOrderByAggregateInput
  }

  export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    OR?: RegistrationScalarWhereWithAggregatesInput[]
    NOT?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Registration"> | number
    programId?: IntWithAggregatesFilter<"Registration"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
    userId?: IntWithAggregatesFilter<"Registration"> | number
  }

  export type UserCreateInput = {
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailCreateInput = {
    email: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEmailsInput
  }

  export type EmailUncheckedCreateInput = {
    id?: number
    email: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type EmailUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type EmailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EmailCreateManyInput = {
    id?: number
    email: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type EmailUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MobileNumberCreateInput = {
    mobileNumber: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMobileNumbersInput
  }

  export type MobileNumberUncheckedCreateInput = {
    id?: number
    mobileNumber: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type MobileNumberUpdateInput = {
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMobileNumbersNestedInput
  }

  export type MobileNumberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MobileNumberCreateManyInput = {
    id?: number
    mobileNumber: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type MobileNumberUpdateManyMutationInput = {
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileNumberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateInput = {
    address: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    address: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type AddressUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AddressCreateManyInput = {
    id?: number
    address: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type AddressUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherCreateInput = {
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherInput
    eligibility?: TeacherEligibilityCreateNestedManyWithoutTeacherInput
    programs?: ProgramCreateNestedManyWithoutPrimaryTeacherInput
    coTaughtPrograms?: ProgramCreateNestedManyWithoutCoTeachersInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    userId: number
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibility?: TeacherEligibilityUncheckedCreateNestedManyWithoutTeacherInput
    programs?: ProgramUncheckedCreateNestedManyWithoutPrimaryTeacherInput
    coTaughtPrograms?: ProgramUncheckedCreateNestedManyWithoutCoTeachersInput
  }

  export type TeacherUpdateInput = {
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    eligibility?: TeacherEligibilityUpdateManyWithoutTeacherNestedInput
    programs?: ProgramUpdateManyWithoutPrimaryTeacherNestedInput
    coTaughtPrograms?: ProgramUpdateManyWithoutCoTeachersNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibility?: TeacherEligibilityUncheckedUpdateManyWithoutTeacherNestedInput
    programs?: ProgramUncheckedUpdateManyWithoutPrimaryTeacherNestedInput
    coTaughtPrograms?: ProgramUncheckedUpdateManyWithoutCoTeachersNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    userId: number
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherEligibilityCreateInput = {
    metaData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutEligibilityInput
    program: ProgramTypeCreateNestedOneWithoutTeacherEligibilityInput
  }

  export type TeacherEligibilityUncheckedCreateInput = {
    id?: number
    teacherId: number
    programId: number
    metaData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherEligibilityUpdateInput = {
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutEligibilityNestedInput
    program?: ProgramTypeUpdateOneRequiredWithoutTeacherEligibilityNestedInput
  }

  export type TeacherEligibilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherEligibilityCreateManyInput = {
    id?: number
    teacherId: number
    programId: number
    metaData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherEligibilityUpdateManyMutationInput = {
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherEligibilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramTypeCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    activeUntil?: Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure: JsonNullValueInput | InputJsonValue
    teacherEligibility?: TeacherEligibilityCreateNestedManyWithoutProgramInput
    programs?: ProgramCreateNestedManyWithoutProgramTypeInput
  }

  export type ProgramTypeUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    activeUntil?: Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure: JsonNullValueInput | InputJsonValue
    teacherEligibility?: TeacherEligibilityUncheckedCreateNestedManyWithoutProgramInput
    programs?: ProgramUncheckedCreateNestedManyWithoutProgramTypeInput
  }

  export type ProgramTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure?: JsonNullValueInput | InputJsonValue
    teacherEligibility?: TeacherEligibilityUpdateManyWithoutProgramNestedInput
    programs?: ProgramUpdateManyWithoutProgramTypeNestedInput
  }

  export type ProgramTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure?: JsonNullValueInput | InputJsonValue
    teacherEligibility?: TeacherEligibilityUncheckedUpdateManyWithoutProgramNestedInput
    programs?: ProgramUncheckedUpdateManyWithoutProgramTypeNestedInput
  }

  export type ProgramTypeCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    activeUntil?: Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure: JsonNullValueInput | InputJsonValue
  }

  export type ProgramTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure?: JsonNullValueInput | InputJsonValue
  }

  export type ProgramTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure?: JsonNullValueInput | InputJsonValue
  }

  export type CenterCreateInput = {
    name: string
    centerType: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: string | null
    email?: string | null
    capacity?: number | null
    isActive?: boolean
    createdBy: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
    programs?: ProgramCreateNestedManyWithoutCenterInput
  }

  export type CenterUncheckedCreateInput = {
    id?: number
    name: string
    centerType: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: string | null
    email?: string | null
    capacity?: number | null
    isActive?: boolean
    createdBy: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
    programs?: ProgramUncheckedCreateNestedManyWithoutCenterInput
  }

  export type CenterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    centerType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    programs?: ProgramUpdateManyWithoutCenterNestedInput
  }

  export type CenterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    centerType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    programs?: ProgramUncheckedUpdateManyWithoutCenterNestedInput
  }

  export type CenterCreateManyInput = {
    id?: number
    name: string
    centerType: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: string | null
    email?: string | null
    capacity?: number | null
    isActive?: boolean
    createdBy: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type CenterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    centerType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type CenterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    centerType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type ProgramCreateInput = {
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    programType: ProgramTypeCreateNestedOneWithoutProgramsInput
    center?: CenterCreateNestedOneWithoutProgramsInput
    primaryTeacher: TeacherCreateNestedOneWithoutProgramsInput
    coTeachers?: TeacherCreateNestedManyWithoutCoTaughtProgramsInput
    registrations?: RegistrationCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateInput = {
    id?: number
    programTypeId: number
    centerId?: number | null
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    primaryTeacherId: number
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedCreateNestedManyWithoutCoTaughtProgramsInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramUpdateInput = {
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    programType?: ProgramTypeUpdateOneRequiredWithoutProgramsNestedInput
    center?: CenterUpdateOneWithoutProgramsNestedInput
    primaryTeacher?: TeacherUpdateOneRequiredWithoutProgramsNestedInput
    coTeachers?: TeacherUpdateManyWithoutCoTaughtProgramsNestedInput
    registrations?: RegistrationUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    programTypeId?: IntFieldUpdateOperationsInput | number
    centerId?: NullableIntFieldUpdateOperationsInput | number | null
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryTeacherId?: IntFieldUpdateOperationsInput | number
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedUpdateManyWithoutCoTaughtProgramsNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramCreateManyInput = {
    id?: number
    programTypeId: number
    centerId?: number | null
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    primaryTeacherId: number
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type ProgramUpdateManyMutationInput = {
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type ProgramUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    programTypeId?: IntFieldUpdateOperationsInput | number
    centerId?: NullableIntFieldUpdateOperationsInput | number | null
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryTeacherId?: IntFieldUpdateOperationsInput | number
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type RegistrationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramCreateNestedOneWithoutRegistrationsInput
    user: UserCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateInput = {
    id?: number
    programId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type RegistrationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutRegistrationsNestedInput
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistrationCreateManyInput = {
    id?: number
    programId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type RegistrationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmailListRelationFilter = {
    every?: EmailWhereInput
    some?: EmailWhereInput
    none?: EmailWhereInput
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type MobileNumberListRelationFilter = {
    every?: MobileNumberWhereInput
    some?: MobileNumberWhereInput
    none?: MobileNumberWhereInput
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type RegistrationListRelationFilter = {
    every?: RegistrationWhereInput
    some?: RegistrationWhereInput
    none?: RegistrationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MobileNumberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    mobileNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EmailOrderByRelevanceInput = {
    fields: EmailOrderByRelevanceFieldEnum | EmailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmailCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EmailAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmailMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EmailMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EmailSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MobileNumberOrderByRelevanceInput = {
    fields: MobileNumberOrderByRelevanceFieldEnum | MobileNumberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MobileNumberCountOrderByAggregateInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MobileNumberAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MobileNumberMaxOrderByAggregateInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MobileNumberMinOrderByAggregateInput = {
    id?: SortOrder
    mobileNumber?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MobileNumberSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressOrderByRelevanceInput = {
    fields: AddressOrderByRelevanceFieldEnum | AddressOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeacherEligibilityListRelationFilter = {
    every?: TeacherEligibilityWhereInput
    some?: TeacherEligibilityWhereInput
    none?: TeacherEligibilityWhereInput
  }

  export type ProgramListRelationFilter = {
    every?: ProgramWhereInput
    some?: ProgramWhereInput
    none?: ProgramWhereInput
  }

  export type TeacherEligibilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherOrderByRelevanceInput = {
    fields: TeacherOrderByRelevanceFieldEnum | TeacherOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teacherCode?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teacherCode?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teacherCode?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    isOnboarded?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type ProgramTypeScalarRelationFilter = {
    is?: ProgramTypeWhereInput
    isNot?: ProgramTypeWhereInput
  }

  export type TeacherEligibilityCountOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    programId?: SortOrder
    metaData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherEligibilityAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    programId?: SortOrder
  }

  export type TeacherEligibilityMaxOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherEligibilityMinOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeacherEligibilitySumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    programId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProgramTypeOrderByRelevanceInput = {
    fields: ProgramTypeOrderByRelevanceFieldEnum | ProgramTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProgramTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaData?: SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrder
    preRequisites?: SortOrder
    feeStructure?: SortOrder
  }

  export type ProgramTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProgramTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrder
  }

  export type ProgramTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    activeUntil?: SortOrder
  }

  export type ProgramTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CenterOrderByRelevanceInput = {
    fields: CenterOrderByRelevanceFieldEnum | CenterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CenterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    centerType?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    geoLocation?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    metaData?: SortOrder
  }

  export type CenterAvgOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type CenterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    centerType?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CenterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    centerType?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    pincode?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    capacity?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CenterSumOrderByAggregateInput = {
    id?: SortOrder
    capacity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CenterNullableScalarRelationFilter = {
    is?: CenterWhereInput | null
    isNot?: CenterWhereInput | null
  }

  export type TeacherListRelationFilter = {
    every?: TeacherWhereInput
    some?: TeacherWhereInput
    none?: TeacherWhereInput
  }

  export type TeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramOrderByRelevanceInput = {
    fields: ProgramOrderByRelevanceFieldEnum | ProgramOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProgramCountOrderByAggregateInput = {
    id?: SortOrder
    programTypeId?: SortOrder
    centerId?: SortOrder
    timing?: SortOrder
    tags?: SortOrder
    registrationCloseDateTime?: SortOrder
    registrationOpenDateTime?: SortOrder
    scheduled?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    shortUrl?: SortOrder
    primaryTeacherId?: SortOrder
    feeStructure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    crfStatus?: SortOrder
    metaData?: SortOrder
  }

  export type ProgramAvgOrderByAggregateInput = {
    id?: SortOrder
    programTypeId?: SortOrder
    centerId?: SortOrder
    primaryTeacherId?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    id?: SortOrder
    programTypeId?: SortOrder
    centerId?: SortOrder
    registrationCloseDateTime?: SortOrder
    registrationOpenDateTime?: SortOrder
    scheduled?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    shortUrl?: SortOrder
    primaryTeacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    crfStatus?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    id?: SortOrder
    programTypeId?: SortOrder
    centerId?: SortOrder
    registrationCloseDateTime?: SortOrder
    registrationOpenDateTime?: SortOrder
    scheduled?: SortOrder
    isActive?: SortOrder
    isSearchable?: SortOrder
    shortUrl?: SortOrder
    primaryTeacherId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    crfStatus?: SortOrder
  }

  export type ProgramSumOrderByAggregateInput = {
    id?: SortOrder
    programTypeId?: SortOrder
    centerId?: SortOrder
    primaryTeacherId?: SortOrder
  }

  export type ProgramScalarRelationFilter = {
    is?: ProgramWhereInput
    isNot?: ProgramWhereInput
  }

  export type RegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RegistrationAvgOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    userId?: SortOrder
  }

  export type RegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type RegistrationSumOrderByAggregateInput = {
    id?: SortOrder
    programId?: SortOrder
    userId?: SortOrder
  }

  export type EmailCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type MobileNumberCreateNestedManyWithoutUserInput = {
    create?: XOR<MobileNumberCreateWithoutUserInput, MobileNumberUncheckedCreateWithoutUserInput> | MobileNumberCreateWithoutUserInput[] | MobileNumberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MobileNumberCreateOrConnectWithoutUserInput | MobileNumberCreateOrConnectWithoutUserInput[]
    createMany?: MobileNumberCreateManyUserInputEnvelope
    connect?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
  }

  export type TeacherCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type RegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type EmailUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type MobileNumberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MobileNumberCreateWithoutUserInput, MobileNumberUncheckedCreateWithoutUserInput> | MobileNumberCreateWithoutUserInput[] | MobileNumberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MobileNumberCreateOrConnectWithoutUserInput | MobileNumberCreateOrConnectWithoutUserInput[]
    createMany?: MobileNumberCreateManyUserInputEnvelope
    connect?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
  }

  export type TeacherUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    connect?: TeacherWhereUniqueInput
  }

  export type RegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmailUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutUserInput | EmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutUserInput | EmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutUserInput | EmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type MobileNumberUpdateManyWithoutUserNestedInput = {
    create?: XOR<MobileNumberCreateWithoutUserInput, MobileNumberUncheckedCreateWithoutUserInput> | MobileNumberCreateWithoutUserInput[] | MobileNumberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MobileNumberCreateOrConnectWithoutUserInput | MobileNumberCreateOrConnectWithoutUserInput[]
    upsert?: MobileNumberUpsertWithWhereUniqueWithoutUserInput | MobileNumberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MobileNumberCreateManyUserInputEnvelope
    set?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
    disconnect?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
    delete?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
    connect?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
    update?: MobileNumberUpdateWithWhereUniqueWithoutUserInput | MobileNumberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MobileNumberUpdateManyWithWhereWithoutUserInput | MobileNumberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MobileNumberScalarWhereInput | MobileNumberScalarWhereInput[]
  }

  export type TeacherUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmailUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput> | EmailCreateWithoutUserInput[] | EmailUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailCreateOrConnectWithoutUserInput | EmailCreateOrConnectWithoutUserInput[]
    upsert?: EmailUpsertWithWhereUniqueWithoutUserInput | EmailUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailCreateManyUserInputEnvelope
    set?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    disconnect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    delete?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    connect?: EmailWhereUniqueInput | EmailWhereUniqueInput[]
    update?: EmailUpdateWithWhereUniqueWithoutUserInput | EmailUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailUpdateManyWithWhereWithoutUserInput | EmailUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailScalarWhereInput | EmailScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput> | AddressCreateWithoutUserInput[] | AddressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput | AddressCreateOrConnectWithoutUserInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutUserInput | AddressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddressCreateManyUserInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutUserInput | AddressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutUserInput | AddressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type MobileNumberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MobileNumberCreateWithoutUserInput, MobileNumberUncheckedCreateWithoutUserInput> | MobileNumberCreateWithoutUserInput[] | MobileNumberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MobileNumberCreateOrConnectWithoutUserInput | MobileNumberCreateOrConnectWithoutUserInput[]
    upsert?: MobileNumberUpsertWithWhereUniqueWithoutUserInput | MobileNumberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MobileNumberCreateManyUserInputEnvelope
    set?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
    disconnect?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
    delete?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
    connect?: MobileNumberWhereUniqueInput | MobileNumberWhereUniqueInput[]
    update?: MobileNumberUpdateWithWhereUniqueWithoutUserInput | MobileNumberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MobileNumberUpdateManyWithWhereWithoutUserInput | MobileNumberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MobileNumberScalarWhereInput | MobileNumberScalarWhereInput[]
  }

  export type TeacherUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutUserInput
    upsert?: TeacherUpsertWithoutUserInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutUserInput, TeacherUpdateWithoutUserInput>, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailsInput = {
    create?: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailsInput
    upsert?: UserUpsertWithoutEmailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailsInput, UserUpdateWithoutEmailsInput>, UserUncheckedUpdateWithoutEmailsInput>
  }

  export type UserCreateNestedOneWithoutMobileNumbersInput = {
    create?: XOR<UserCreateWithoutMobileNumbersInput, UserUncheckedCreateWithoutMobileNumbersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMobileNumbersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMobileNumbersNestedInput = {
    create?: XOR<UserCreateWithoutMobileNumbersInput, UserUncheckedCreateWithoutMobileNumbersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMobileNumbersInput
    upsert?: UserUpsertWithoutMobileNumbersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMobileNumbersInput, UserUpdateWithoutMobileNumbersInput>, UserUncheckedUpdateWithoutMobileNumbersInput>
  }

  export type UserCreateNestedOneWithoutAddressesInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressesInput
    upsert?: UserUpsertWithoutAddressesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressesInput, UserUpdateWithoutAddressesInput>, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserCreateNestedOneWithoutTeacherInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    connect?: UserWhereUniqueInput
  }

  export type TeacherEligibilityCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherEligibilityCreateWithoutTeacherInput, TeacherEligibilityUncheckedCreateWithoutTeacherInput> | TeacherEligibilityCreateWithoutTeacherInput[] | TeacherEligibilityUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherEligibilityCreateOrConnectWithoutTeacherInput | TeacherEligibilityCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherEligibilityCreateManyTeacherInputEnvelope
    connect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
  }

  export type ProgramCreateNestedManyWithoutPrimaryTeacherInput = {
    create?: XOR<ProgramCreateWithoutPrimaryTeacherInput, ProgramUncheckedCreateWithoutPrimaryTeacherInput> | ProgramCreateWithoutPrimaryTeacherInput[] | ProgramUncheckedCreateWithoutPrimaryTeacherInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutPrimaryTeacherInput | ProgramCreateOrConnectWithoutPrimaryTeacherInput[]
    createMany?: ProgramCreateManyPrimaryTeacherInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramCreateNestedManyWithoutCoTeachersInput = {
    create?: XOR<ProgramCreateWithoutCoTeachersInput, ProgramUncheckedCreateWithoutCoTeachersInput> | ProgramCreateWithoutCoTeachersInput[] | ProgramUncheckedCreateWithoutCoTeachersInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCoTeachersInput | ProgramCreateOrConnectWithoutCoTeachersInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type TeacherEligibilityUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherEligibilityCreateWithoutTeacherInput, TeacherEligibilityUncheckedCreateWithoutTeacherInput> | TeacherEligibilityCreateWithoutTeacherInput[] | TeacherEligibilityUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherEligibilityCreateOrConnectWithoutTeacherInput | TeacherEligibilityCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherEligibilityCreateManyTeacherInputEnvelope
    connect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutPrimaryTeacherInput = {
    create?: XOR<ProgramCreateWithoutPrimaryTeacherInput, ProgramUncheckedCreateWithoutPrimaryTeacherInput> | ProgramCreateWithoutPrimaryTeacherInput[] | ProgramUncheckedCreateWithoutPrimaryTeacherInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutPrimaryTeacherInput | ProgramCreateOrConnectWithoutPrimaryTeacherInput[]
    createMany?: ProgramCreateManyPrimaryTeacherInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutCoTeachersInput = {
    create?: XOR<ProgramCreateWithoutCoTeachersInput, ProgramUncheckedCreateWithoutCoTeachersInput> | ProgramCreateWithoutCoTeachersInput[] | ProgramUncheckedCreateWithoutCoTeachersInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCoTeachersInput | ProgramCreateOrConnectWithoutCoTeachersInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherInput
    upsert?: UserUpsertWithoutTeacherInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherInput, UserUpdateWithoutTeacherInput>, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherEligibilityUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherEligibilityCreateWithoutTeacherInput, TeacherEligibilityUncheckedCreateWithoutTeacherInput> | TeacherEligibilityCreateWithoutTeacherInput[] | TeacherEligibilityUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherEligibilityCreateOrConnectWithoutTeacherInput | TeacherEligibilityCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherEligibilityUpsertWithWhereUniqueWithoutTeacherInput | TeacherEligibilityUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherEligibilityCreateManyTeacherInputEnvelope
    set?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    disconnect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    delete?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    connect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    update?: TeacherEligibilityUpdateWithWhereUniqueWithoutTeacherInput | TeacherEligibilityUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherEligibilityUpdateManyWithWhereWithoutTeacherInput | TeacherEligibilityUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherEligibilityScalarWhereInput | TeacherEligibilityScalarWhereInput[]
  }

  export type ProgramUpdateManyWithoutPrimaryTeacherNestedInput = {
    create?: XOR<ProgramCreateWithoutPrimaryTeacherInput, ProgramUncheckedCreateWithoutPrimaryTeacherInput> | ProgramCreateWithoutPrimaryTeacherInput[] | ProgramUncheckedCreateWithoutPrimaryTeacherInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutPrimaryTeacherInput | ProgramCreateOrConnectWithoutPrimaryTeacherInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutPrimaryTeacherInput | ProgramUpsertWithWhereUniqueWithoutPrimaryTeacherInput[]
    createMany?: ProgramCreateManyPrimaryTeacherInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutPrimaryTeacherInput | ProgramUpdateWithWhereUniqueWithoutPrimaryTeacherInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutPrimaryTeacherInput | ProgramUpdateManyWithWhereWithoutPrimaryTeacherInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramUpdateManyWithoutCoTeachersNestedInput = {
    create?: XOR<ProgramCreateWithoutCoTeachersInput, ProgramUncheckedCreateWithoutCoTeachersInput> | ProgramCreateWithoutCoTeachersInput[] | ProgramUncheckedCreateWithoutCoTeachersInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCoTeachersInput | ProgramCreateOrConnectWithoutCoTeachersInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutCoTeachersInput | ProgramUpsertWithWhereUniqueWithoutCoTeachersInput[]
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutCoTeachersInput | ProgramUpdateWithWhereUniqueWithoutCoTeachersInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutCoTeachersInput | ProgramUpdateManyWithWhereWithoutCoTeachersInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type TeacherEligibilityUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherEligibilityCreateWithoutTeacherInput, TeacherEligibilityUncheckedCreateWithoutTeacherInput> | TeacherEligibilityCreateWithoutTeacherInput[] | TeacherEligibilityUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherEligibilityCreateOrConnectWithoutTeacherInput | TeacherEligibilityCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherEligibilityUpsertWithWhereUniqueWithoutTeacherInput | TeacherEligibilityUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherEligibilityCreateManyTeacherInputEnvelope
    set?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    disconnect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    delete?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    connect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    update?: TeacherEligibilityUpdateWithWhereUniqueWithoutTeacherInput | TeacherEligibilityUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherEligibilityUpdateManyWithWhereWithoutTeacherInput | TeacherEligibilityUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherEligibilityScalarWhereInput | TeacherEligibilityScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutPrimaryTeacherNestedInput = {
    create?: XOR<ProgramCreateWithoutPrimaryTeacherInput, ProgramUncheckedCreateWithoutPrimaryTeacherInput> | ProgramCreateWithoutPrimaryTeacherInput[] | ProgramUncheckedCreateWithoutPrimaryTeacherInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutPrimaryTeacherInput | ProgramCreateOrConnectWithoutPrimaryTeacherInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutPrimaryTeacherInput | ProgramUpsertWithWhereUniqueWithoutPrimaryTeacherInput[]
    createMany?: ProgramCreateManyPrimaryTeacherInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutPrimaryTeacherInput | ProgramUpdateWithWhereUniqueWithoutPrimaryTeacherInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutPrimaryTeacherInput | ProgramUpdateManyWithWhereWithoutPrimaryTeacherInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutCoTeachersNestedInput = {
    create?: XOR<ProgramCreateWithoutCoTeachersInput, ProgramUncheckedCreateWithoutCoTeachersInput> | ProgramCreateWithoutCoTeachersInput[] | ProgramUncheckedCreateWithoutCoTeachersInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCoTeachersInput | ProgramCreateOrConnectWithoutCoTeachersInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutCoTeachersInput | ProgramUpsertWithWhereUniqueWithoutCoTeachersInput[]
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutCoTeachersInput | ProgramUpdateWithWhereUniqueWithoutCoTeachersInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutCoTeachersInput | ProgramUpdateManyWithWhereWithoutCoTeachersInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutEligibilityInput = {
    create?: XOR<TeacherCreateWithoutEligibilityInput, TeacherUncheckedCreateWithoutEligibilityInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEligibilityInput
    connect?: TeacherWhereUniqueInput
  }

  export type ProgramTypeCreateNestedOneWithoutTeacherEligibilityInput = {
    create?: XOR<ProgramTypeCreateWithoutTeacherEligibilityInput, ProgramTypeUncheckedCreateWithoutTeacherEligibilityInput>
    connectOrCreate?: ProgramTypeCreateOrConnectWithoutTeacherEligibilityInput
    connect?: ProgramTypeWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutEligibilityNestedInput = {
    create?: XOR<TeacherCreateWithoutEligibilityInput, TeacherUncheckedCreateWithoutEligibilityInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEligibilityInput
    upsert?: TeacherUpsertWithoutEligibilityInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutEligibilityInput, TeacherUpdateWithoutEligibilityInput>, TeacherUncheckedUpdateWithoutEligibilityInput>
  }

  export type ProgramTypeUpdateOneRequiredWithoutTeacherEligibilityNestedInput = {
    create?: XOR<ProgramTypeCreateWithoutTeacherEligibilityInput, ProgramTypeUncheckedCreateWithoutTeacherEligibilityInput>
    connectOrCreate?: ProgramTypeCreateOrConnectWithoutTeacherEligibilityInput
    upsert?: ProgramTypeUpsertWithoutTeacherEligibilityInput
    connect?: ProgramTypeWhereUniqueInput
    update?: XOR<XOR<ProgramTypeUpdateToOneWithWhereWithoutTeacherEligibilityInput, ProgramTypeUpdateWithoutTeacherEligibilityInput>, ProgramTypeUncheckedUpdateWithoutTeacherEligibilityInput>
  }

  export type TeacherEligibilityCreateNestedManyWithoutProgramInput = {
    create?: XOR<TeacherEligibilityCreateWithoutProgramInput, TeacherEligibilityUncheckedCreateWithoutProgramInput> | TeacherEligibilityCreateWithoutProgramInput[] | TeacherEligibilityUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: TeacherEligibilityCreateOrConnectWithoutProgramInput | TeacherEligibilityCreateOrConnectWithoutProgramInput[]
    createMany?: TeacherEligibilityCreateManyProgramInputEnvelope
    connect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
  }

  export type ProgramCreateNestedManyWithoutProgramTypeInput = {
    create?: XOR<ProgramCreateWithoutProgramTypeInput, ProgramUncheckedCreateWithoutProgramTypeInput> | ProgramCreateWithoutProgramTypeInput[] | ProgramUncheckedCreateWithoutProgramTypeInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramTypeInput | ProgramCreateOrConnectWithoutProgramTypeInput[]
    createMany?: ProgramCreateManyProgramTypeInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type TeacherEligibilityUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<TeacherEligibilityCreateWithoutProgramInput, TeacherEligibilityUncheckedCreateWithoutProgramInput> | TeacherEligibilityCreateWithoutProgramInput[] | TeacherEligibilityUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: TeacherEligibilityCreateOrConnectWithoutProgramInput | TeacherEligibilityCreateOrConnectWithoutProgramInput[]
    createMany?: TeacherEligibilityCreateManyProgramInputEnvelope
    connect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutProgramTypeInput = {
    create?: XOR<ProgramCreateWithoutProgramTypeInput, ProgramUncheckedCreateWithoutProgramTypeInput> | ProgramCreateWithoutProgramTypeInput[] | ProgramUncheckedCreateWithoutProgramTypeInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramTypeInput | ProgramCreateOrConnectWithoutProgramTypeInput[]
    createMany?: ProgramCreateManyProgramTypeInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TeacherEligibilityUpdateManyWithoutProgramNestedInput = {
    create?: XOR<TeacherEligibilityCreateWithoutProgramInput, TeacherEligibilityUncheckedCreateWithoutProgramInput> | TeacherEligibilityCreateWithoutProgramInput[] | TeacherEligibilityUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: TeacherEligibilityCreateOrConnectWithoutProgramInput | TeacherEligibilityCreateOrConnectWithoutProgramInput[]
    upsert?: TeacherEligibilityUpsertWithWhereUniqueWithoutProgramInput | TeacherEligibilityUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: TeacherEligibilityCreateManyProgramInputEnvelope
    set?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    disconnect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    delete?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    connect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    update?: TeacherEligibilityUpdateWithWhereUniqueWithoutProgramInput | TeacherEligibilityUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: TeacherEligibilityUpdateManyWithWhereWithoutProgramInput | TeacherEligibilityUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: TeacherEligibilityScalarWhereInput | TeacherEligibilityScalarWhereInput[]
  }

  export type ProgramUpdateManyWithoutProgramTypeNestedInput = {
    create?: XOR<ProgramCreateWithoutProgramTypeInput, ProgramUncheckedCreateWithoutProgramTypeInput> | ProgramCreateWithoutProgramTypeInput[] | ProgramUncheckedCreateWithoutProgramTypeInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramTypeInput | ProgramCreateOrConnectWithoutProgramTypeInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutProgramTypeInput | ProgramUpsertWithWhereUniqueWithoutProgramTypeInput[]
    createMany?: ProgramCreateManyProgramTypeInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutProgramTypeInput | ProgramUpdateWithWhereUniqueWithoutProgramTypeInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutProgramTypeInput | ProgramUpdateManyWithWhereWithoutProgramTypeInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type TeacherEligibilityUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<TeacherEligibilityCreateWithoutProgramInput, TeacherEligibilityUncheckedCreateWithoutProgramInput> | TeacherEligibilityCreateWithoutProgramInput[] | TeacherEligibilityUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: TeacherEligibilityCreateOrConnectWithoutProgramInput | TeacherEligibilityCreateOrConnectWithoutProgramInput[]
    upsert?: TeacherEligibilityUpsertWithWhereUniqueWithoutProgramInput | TeacherEligibilityUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: TeacherEligibilityCreateManyProgramInputEnvelope
    set?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    disconnect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    delete?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    connect?: TeacherEligibilityWhereUniqueInput | TeacherEligibilityWhereUniqueInput[]
    update?: TeacherEligibilityUpdateWithWhereUniqueWithoutProgramInput | TeacherEligibilityUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: TeacherEligibilityUpdateManyWithWhereWithoutProgramInput | TeacherEligibilityUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: TeacherEligibilityScalarWhereInput | TeacherEligibilityScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutProgramTypeNestedInput = {
    create?: XOR<ProgramCreateWithoutProgramTypeInput, ProgramUncheckedCreateWithoutProgramTypeInput> | ProgramCreateWithoutProgramTypeInput[] | ProgramUncheckedCreateWithoutProgramTypeInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutProgramTypeInput | ProgramCreateOrConnectWithoutProgramTypeInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutProgramTypeInput | ProgramUpsertWithWhereUniqueWithoutProgramTypeInput[]
    createMany?: ProgramCreateManyProgramTypeInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutProgramTypeInput | ProgramUpdateWithWhereUniqueWithoutProgramTypeInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutProgramTypeInput | ProgramUpdateManyWithWhereWithoutProgramTypeInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramCreateNestedManyWithoutCenterInput = {
    create?: XOR<ProgramCreateWithoutCenterInput, ProgramUncheckedCreateWithoutCenterInput> | ProgramCreateWithoutCenterInput[] | ProgramUncheckedCreateWithoutCenterInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCenterInput | ProgramCreateOrConnectWithoutCenterInput[]
    createMany?: ProgramCreateManyCenterInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutCenterInput = {
    create?: XOR<ProgramCreateWithoutCenterInput, ProgramUncheckedCreateWithoutCenterInput> | ProgramCreateWithoutCenterInput[] | ProgramUncheckedCreateWithoutCenterInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCenterInput | ProgramCreateOrConnectWithoutCenterInput[]
    createMany?: ProgramCreateManyCenterInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProgramUpdateManyWithoutCenterNestedInput = {
    create?: XOR<ProgramCreateWithoutCenterInput, ProgramUncheckedCreateWithoutCenterInput> | ProgramCreateWithoutCenterInput[] | ProgramUncheckedCreateWithoutCenterInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCenterInput | ProgramCreateOrConnectWithoutCenterInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutCenterInput | ProgramUpsertWithWhereUniqueWithoutCenterInput[]
    createMany?: ProgramCreateManyCenterInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutCenterInput | ProgramUpdateWithWhereUniqueWithoutCenterInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutCenterInput | ProgramUpdateManyWithWhereWithoutCenterInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutCenterNestedInput = {
    create?: XOR<ProgramCreateWithoutCenterInput, ProgramUncheckedCreateWithoutCenterInput> | ProgramCreateWithoutCenterInput[] | ProgramUncheckedCreateWithoutCenterInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCenterInput | ProgramCreateOrConnectWithoutCenterInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutCenterInput | ProgramUpsertWithWhereUniqueWithoutCenterInput[]
    createMany?: ProgramCreateManyCenterInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutCenterInput | ProgramUpdateWithWhereUniqueWithoutCenterInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutCenterInput | ProgramUpdateManyWithWhereWithoutCenterInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramTypeCreateNestedOneWithoutProgramsInput = {
    create?: XOR<ProgramTypeCreateWithoutProgramsInput, ProgramTypeUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: ProgramTypeCreateOrConnectWithoutProgramsInput
    connect?: ProgramTypeWhereUniqueInput
  }

  export type CenterCreateNestedOneWithoutProgramsInput = {
    create?: XOR<CenterCreateWithoutProgramsInput, CenterUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: CenterCreateOrConnectWithoutProgramsInput
    connect?: CenterWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutProgramsInput = {
    create?: XOR<TeacherCreateWithoutProgramsInput, TeacherUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutProgramsInput
    connect?: TeacherWhereUniqueInput
  }

  export type TeacherCreateNestedManyWithoutCoTaughtProgramsInput = {
    create?: XOR<TeacherCreateWithoutCoTaughtProgramsInput, TeacherUncheckedCreateWithoutCoTaughtProgramsInput> | TeacherCreateWithoutCoTaughtProgramsInput[] | TeacherUncheckedCreateWithoutCoTaughtProgramsInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutCoTaughtProgramsInput | TeacherCreateOrConnectWithoutCoTaughtProgramsInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type RegistrationCreateNestedManyWithoutProgramInput = {
    create?: XOR<RegistrationCreateWithoutProgramInput, RegistrationUncheckedCreateWithoutProgramInput> | RegistrationCreateWithoutProgramInput[] | RegistrationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutProgramInput | RegistrationCreateOrConnectWithoutProgramInput[]
    createMany?: RegistrationCreateManyProgramInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type TeacherUncheckedCreateNestedManyWithoutCoTaughtProgramsInput = {
    create?: XOR<TeacherCreateWithoutCoTaughtProgramsInput, TeacherUncheckedCreateWithoutCoTaughtProgramsInput> | TeacherCreateWithoutCoTaughtProgramsInput[] | TeacherUncheckedCreateWithoutCoTaughtProgramsInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutCoTaughtProgramsInput | TeacherCreateOrConnectWithoutCoTaughtProgramsInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<RegistrationCreateWithoutProgramInput, RegistrationUncheckedCreateWithoutProgramInput> | RegistrationCreateWithoutProgramInput[] | RegistrationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutProgramInput | RegistrationCreateOrConnectWithoutProgramInput[]
    createMany?: RegistrationCreateManyProgramInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type ProgramTypeUpdateOneRequiredWithoutProgramsNestedInput = {
    create?: XOR<ProgramTypeCreateWithoutProgramsInput, ProgramTypeUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: ProgramTypeCreateOrConnectWithoutProgramsInput
    upsert?: ProgramTypeUpsertWithoutProgramsInput
    connect?: ProgramTypeWhereUniqueInput
    update?: XOR<XOR<ProgramTypeUpdateToOneWithWhereWithoutProgramsInput, ProgramTypeUpdateWithoutProgramsInput>, ProgramTypeUncheckedUpdateWithoutProgramsInput>
  }

  export type CenterUpdateOneWithoutProgramsNestedInput = {
    create?: XOR<CenterCreateWithoutProgramsInput, CenterUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: CenterCreateOrConnectWithoutProgramsInput
    upsert?: CenterUpsertWithoutProgramsInput
    disconnect?: CenterWhereInput | boolean
    delete?: CenterWhereInput | boolean
    connect?: CenterWhereUniqueInput
    update?: XOR<XOR<CenterUpdateToOneWithWhereWithoutProgramsInput, CenterUpdateWithoutProgramsInput>, CenterUncheckedUpdateWithoutProgramsInput>
  }

  export type TeacherUpdateOneRequiredWithoutProgramsNestedInput = {
    create?: XOR<TeacherCreateWithoutProgramsInput, TeacherUncheckedCreateWithoutProgramsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutProgramsInput
    upsert?: TeacherUpsertWithoutProgramsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutProgramsInput, TeacherUpdateWithoutProgramsInput>, TeacherUncheckedUpdateWithoutProgramsInput>
  }

  export type TeacherUpdateManyWithoutCoTaughtProgramsNestedInput = {
    create?: XOR<TeacherCreateWithoutCoTaughtProgramsInput, TeacherUncheckedCreateWithoutCoTaughtProgramsInput> | TeacherCreateWithoutCoTaughtProgramsInput[] | TeacherUncheckedCreateWithoutCoTaughtProgramsInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutCoTaughtProgramsInput | TeacherCreateOrConnectWithoutCoTaughtProgramsInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutCoTaughtProgramsInput | TeacherUpsertWithWhereUniqueWithoutCoTaughtProgramsInput[]
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutCoTaughtProgramsInput | TeacherUpdateWithWhereUniqueWithoutCoTaughtProgramsInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutCoTaughtProgramsInput | TeacherUpdateManyWithWhereWithoutCoTaughtProgramsInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type RegistrationUpdateManyWithoutProgramNestedInput = {
    create?: XOR<RegistrationCreateWithoutProgramInput, RegistrationUncheckedCreateWithoutProgramInput> | RegistrationCreateWithoutProgramInput[] | RegistrationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutProgramInput | RegistrationCreateOrConnectWithoutProgramInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutProgramInput | RegistrationUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: RegistrationCreateManyProgramInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutProgramInput | RegistrationUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutProgramInput | RegistrationUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type TeacherUncheckedUpdateManyWithoutCoTaughtProgramsNestedInput = {
    create?: XOR<TeacherCreateWithoutCoTaughtProgramsInput, TeacherUncheckedCreateWithoutCoTaughtProgramsInput> | TeacherCreateWithoutCoTaughtProgramsInput[] | TeacherUncheckedCreateWithoutCoTaughtProgramsInput[]
    connectOrCreate?: TeacherCreateOrConnectWithoutCoTaughtProgramsInput | TeacherCreateOrConnectWithoutCoTaughtProgramsInput[]
    upsert?: TeacherUpsertWithWhereUniqueWithoutCoTaughtProgramsInput | TeacherUpsertWithWhereUniqueWithoutCoTaughtProgramsInput[]
    set?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    disconnect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    delete?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    connect?: TeacherWhereUniqueInput | TeacherWhereUniqueInput[]
    update?: TeacherUpdateWithWhereUniqueWithoutCoTaughtProgramsInput | TeacherUpdateWithWhereUniqueWithoutCoTaughtProgramsInput[]
    updateMany?: TeacherUpdateManyWithWhereWithoutCoTaughtProgramsInput | TeacherUpdateManyWithWhereWithoutCoTaughtProgramsInput[]
    deleteMany?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<RegistrationCreateWithoutProgramInput, RegistrationUncheckedCreateWithoutProgramInput> | RegistrationCreateWithoutProgramInput[] | RegistrationUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutProgramInput | RegistrationCreateOrConnectWithoutProgramInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutProgramInput | RegistrationUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: RegistrationCreateManyProgramInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutProgramInput | RegistrationUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutProgramInput | RegistrationUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type ProgramCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<ProgramCreateWithoutRegistrationsInput, ProgramUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutRegistrationsInput
    connect?: ProgramWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type ProgramUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<ProgramCreateWithoutRegistrationsInput, ProgramUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutRegistrationsInput
    upsert?: ProgramUpsertWithoutRegistrationsInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutRegistrationsInput, ProgramUpdateWithoutRegistrationsInput>, ProgramUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    upsert?: UserUpsertWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrationsInput, UserUpdateWithoutRegistrationsInput>, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EmailCreateWithoutUserInput = {
    email: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailUncheckedCreateWithoutUserInput = {
    id?: number
    email: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailCreateOrConnectWithoutUserInput = {
    where: EmailWhereUniqueInput
    create: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput>
  }

  export type EmailCreateManyUserInputEnvelope = {
    data: EmailCreateManyUserInput | EmailCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressCreateWithoutUserInput = {
    address: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: number
    address: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: AddressCreateManyUserInput | AddressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MobileNumberCreateWithoutUserInput = {
    mobileNumber: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MobileNumberUncheckedCreateWithoutUserInput = {
    id?: number
    mobileNumber: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MobileNumberCreateOrConnectWithoutUserInput = {
    where: MobileNumberWhereUniqueInput
    create: XOR<MobileNumberCreateWithoutUserInput, MobileNumberUncheckedCreateWithoutUserInput>
  }

  export type MobileNumberCreateManyUserInputEnvelope = {
    data: MobileNumberCreateManyUserInput | MobileNumberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeacherCreateWithoutUserInput = {
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibility?: TeacherEligibilityCreateNestedManyWithoutTeacherInput
    programs?: ProgramCreateNestedManyWithoutPrimaryTeacherInput
    coTaughtPrograms?: ProgramCreateNestedManyWithoutCoTeachersInput
  }

  export type TeacherUncheckedCreateWithoutUserInput = {
    id?: number
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibility?: TeacherEligibilityUncheckedCreateNestedManyWithoutTeacherInput
    programs?: ProgramUncheckedCreateNestedManyWithoutPrimaryTeacherInput
    coTaughtPrograms?: ProgramUncheckedCreateNestedManyWithoutCoTeachersInput
  }

  export type TeacherCreateOrConnectWithoutUserInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
  }

  export type RegistrationCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutUserInput = {
    id?: number
    programId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationCreateOrConnectWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationCreateManyUserInputEnvelope = {
    data: RegistrationCreateManyUserInput | RegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EmailUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailWhereUniqueInput
    update: XOR<EmailUpdateWithoutUserInput, EmailUncheckedUpdateWithoutUserInput>
    create: XOR<EmailCreateWithoutUserInput, EmailUncheckedCreateWithoutUserInput>
  }

  export type EmailUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailWhereUniqueInput
    data: XOR<EmailUpdateWithoutUserInput, EmailUncheckedUpdateWithoutUserInput>
  }

  export type EmailUpdateManyWithWhereWithoutUserInput = {
    where: EmailScalarWhereInput
    data: XOR<EmailUpdateManyMutationInput, EmailUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailScalarWhereInput = {
    AND?: EmailScalarWhereInput | EmailScalarWhereInput[]
    OR?: EmailScalarWhereInput[]
    NOT?: EmailScalarWhereInput | EmailScalarWhereInput[]
    id?: IntFilter<"Email"> | number
    email?: StringFilter<"Email"> | string
    isDefault?: BoolFilter<"Email"> | boolean
    createdAt?: DateTimeFilter<"Email"> | Date | string
    updatedAt?: DateTimeFilter<"Email"> | Date | string
    userId?: IntFilter<"Email"> | number
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: IntFilter<"Address"> | number
    address?: StringFilter<"Address"> | string
    isDefault?: BoolFilter<"Address"> | boolean
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    userId?: IntFilter<"Address"> | number
  }

  export type MobileNumberUpsertWithWhereUniqueWithoutUserInput = {
    where: MobileNumberWhereUniqueInput
    update: XOR<MobileNumberUpdateWithoutUserInput, MobileNumberUncheckedUpdateWithoutUserInput>
    create: XOR<MobileNumberCreateWithoutUserInput, MobileNumberUncheckedCreateWithoutUserInput>
  }

  export type MobileNumberUpdateWithWhereUniqueWithoutUserInput = {
    where: MobileNumberWhereUniqueInput
    data: XOR<MobileNumberUpdateWithoutUserInput, MobileNumberUncheckedUpdateWithoutUserInput>
  }

  export type MobileNumberUpdateManyWithWhereWithoutUserInput = {
    where: MobileNumberScalarWhereInput
    data: XOR<MobileNumberUpdateManyMutationInput, MobileNumberUncheckedUpdateManyWithoutUserInput>
  }

  export type MobileNumberScalarWhereInput = {
    AND?: MobileNumberScalarWhereInput | MobileNumberScalarWhereInput[]
    OR?: MobileNumberScalarWhereInput[]
    NOT?: MobileNumberScalarWhereInput | MobileNumberScalarWhereInput[]
    id?: IntFilter<"MobileNumber"> | number
    mobileNumber?: StringFilter<"MobileNumber"> | string
    isDefault?: BoolFilter<"MobileNumber"> | boolean
    createdAt?: DateTimeFilter<"MobileNumber"> | Date | string
    updatedAt?: DateTimeFilter<"MobileNumber"> | Date | string
    userId?: IntFilter<"MobileNumber"> | number
  }

  export type TeacherUpsertWithoutUserInput = {
    update: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
    create: XOR<TeacherCreateWithoutUserInput, TeacherUncheckedCreateWithoutUserInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutUserInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutUserInput, TeacherUncheckedUpdateWithoutUserInput>
  }

  export type TeacherUpdateWithoutUserInput = {
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibility?: TeacherEligibilityUpdateManyWithoutTeacherNestedInput
    programs?: ProgramUpdateManyWithoutPrimaryTeacherNestedInput
    coTaughtPrograms?: ProgramUpdateManyWithoutCoTeachersNestedInput
  }

  export type TeacherUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibility?: TeacherEligibilityUncheckedUpdateManyWithoutTeacherNestedInput
    programs?: ProgramUncheckedUpdateManyWithoutPrimaryTeacherNestedInput
    coTaughtPrograms?: ProgramUncheckedUpdateManyWithoutCoTeachersNestedInput
  }

  export type RegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutUserInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type RegistrationScalarWhereInput = {
    AND?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    OR?: RegistrationScalarWhereInput[]
    NOT?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    id?: IntFilter<"Registration"> | number
    programId?: IntFilter<"Registration"> | number
    createdAt?: DateTimeFilter<"Registration"> | Date | string
    updatedAt?: DateTimeFilter<"Registration"> | Date | string
    userId?: IntFilter<"Registration"> | number
  }

  export type UserCreateWithoutEmailsInput = {
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailsInput = {
    id?: number
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
  }

  export type UserUpsertWithoutEmailsInput = {
    update: XOR<UserUpdateWithoutEmailsInput, UserUncheckedUpdateWithoutEmailsInput>
    create: XOR<UserCreateWithoutEmailsInput, UserUncheckedCreateWithoutEmailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailsInput, UserUncheckedUpdateWithoutEmailsInput>
  }

  export type UserUpdateWithoutEmailsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMobileNumbersInput = {
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMobileNumbersInput = {
    id?: number
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMobileNumbersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMobileNumbersInput, UserUncheckedCreateWithoutMobileNumbersInput>
  }

  export type UserUpsertWithoutMobileNumbersInput = {
    update: XOR<UserUpdateWithoutMobileNumbersInput, UserUncheckedUpdateWithoutMobileNumbersInput>
    create: XOR<UserCreateWithoutMobileNumbersInput, UserUncheckedCreateWithoutMobileNumbersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMobileNumbersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMobileNumbersInput, UserUncheckedUpdateWithoutMobileNumbersInput>
  }

  export type UserUpdateWithoutMobileNumbersInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMobileNumbersInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAddressesInput = {
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedOneWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressesInput = {
    id?: number
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
  }

  export type UserUpsertWithoutAddressesInput = {
    update: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
    create: XOR<UserCreateWithoutAddressesInput, UserUncheckedCreateWithoutAddressesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressesInput, UserUncheckedUpdateWithoutAddressesInput>
  }

  export type UserUpdateWithoutAddressesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTeacherInput = {
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberCreateNestedManyWithoutUserInput
    registrations?: RegistrationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeacherInput = {
    id?: number
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberUncheckedCreateNestedManyWithoutUserInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeacherInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherEligibilityCreateWithoutTeacherInput = {
    metaData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    program: ProgramTypeCreateNestedOneWithoutTeacherEligibilityInput
  }

  export type TeacherEligibilityUncheckedCreateWithoutTeacherInput = {
    id?: number
    programId: number
    metaData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherEligibilityCreateOrConnectWithoutTeacherInput = {
    where: TeacherEligibilityWhereUniqueInput
    create: XOR<TeacherEligibilityCreateWithoutTeacherInput, TeacherEligibilityUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherEligibilityCreateManyTeacherInputEnvelope = {
    data: TeacherEligibilityCreateManyTeacherInput | TeacherEligibilityCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ProgramCreateWithoutPrimaryTeacherInput = {
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    programType: ProgramTypeCreateNestedOneWithoutProgramsInput
    center?: CenterCreateNestedOneWithoutProgramsInput
    coTeachers?: TeacherCreateNestedManyWithoutCoTaughtProgramsInput
    registrations?: RegistrationCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutPrimaryTeacherInput = {
    id?: number
    programTypeId: number
    centerId?: number | null
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedCreateNestedManyWithoutCoTaughtProgramsInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutPrimaryTeacherInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutPrimaryTeacherInput, ProgramUncheckedCreateWithoutPrimaryTeacherInput>
  }

  export type ProgramCreateManyPrimaryTeacherInputEnvelope = {
    data: ProgramCreateManyPrimaryTeacherInput | ProgramCreateManyPrimaryTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ProgramCreateWithoutCoTeachersInput = {
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    programType: ProgramTypeCreateNestedOneWithoutProgramsInput
    center?: CenterCreateNestedOneWithoutProgramsInput
    primaryTeacher: TeacherCreateNestedOneWithoutProgramsInput
    registrations?: RegistrationCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutCoTeachersInput = {
    id?: number
    programTypeId: number
    centerId?: number | null
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    primaryTeacherId: number
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    registrations?: RegistrationUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutCoTeachersInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutCoTeachersInput, ProgramUncheckedCreateWithoutCoTeachersInput>
  }

  export type UserUpsertWithoutTeacherInput = {
    update: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
    create: XOR<UserCreateWithoutTeacherInput, UserUncheckedCreateWithoutTeacherInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherInput, UserUncheckedUpdateWithoutTeacherInput>
  }

  export type UserUpdateWithoutTeacherInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUpdateManyWithoutUserNestedInput
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUncheckedUpdateManyWithoutUserNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeacherEligibilityUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherEligibilityWhereUniqueInput
    update: XOR<TeacherEligibilityUpdateWithoutTeacherInput, TeacherEligibilityUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherEligibilityCreateWithoutTeacherInput, TeacherEligibilityUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherEligibilityUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherEligibilityWhereUniqueInput
    data: XOR<TeacherEligibilityUpdateWithoutTeacherInput, TeacherEligibilityUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherEligibilityUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherEligibilityScalarWhereInput
    data: XOR<TeacherEligibilityUpdateManyMutationInput, TeacherEligibilityUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherEligibilityScalarWhereInput = {
    AND?: TeacherEligibilityScalarWhereInput | TeacherEligibilityScalarWhereInput[]
    OR?: TeacherEligibilityScalarWhereInput[]
    NOT?: TeacherEligibilityScalarWhereInput | TeacherEligibilityScalarWhereInput[]
    id?: IntFilter<"TeacherEligibility"> | number
    teacherId?: IntFilter<"TeacherEligibility"> | number
    programId?: IntFilter<"TeacherEligibility"> | number
    metaData?: JsonFilter<"TeacherEligibility">
    createdAt?: DateTimeFilter<"TeacherEligibility"> | Date | string
    updatedAt?: DateTimeFilter<"TeacherEligibility"> | Date | string
  }

  export type ProgramUpsertWithWhereUniqueWithoutPrimaryTeacherInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutPrimaryTeacherInput, ProgramUncheckedUpdateWithoutPrimaryTeacherInput>
    create: XOR<ProgramCreateWithoutPrimaryTeacherInput, ProgramUncheckedCreateWithoutPrimaryTeacherInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutPrimaryTeacherInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutPrimaryTeacherInput, ProgramUncheckedUpdateWithoutPrimaryTeacherInput>
  }

  export type ProgramUpdateManyWithWhereWithoutPrimaryTeacherInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutPrimaryTeacherInput>
  }

  export type ProgramScalarWhereInput = {
    AND?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    OR?: ProgramScalarWhereInput[]
    NOT?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    id?: IntFilter<"Program"> | number
    programTypeId?: IntFilter<"Program"> | number
    centerId?: IntNullableFilter<"Program"> | number | null
    timing?: JsonFilter<"Program">
    tags?: JsonFilter<"Program">
    registrationCloseDateTime?: DateTimeNullableFilter<"Program"> | Date | string | null
    registrationOpenDateTime?: DateTimeNullableFilter<"Program"> | Date | string | null
    scheduled?: BoolFilter<"Program"> | boolean
    isActive?: BoolFilter<"Program"> | boolean
    isSearchable?: BoolFilter<"Program"> | boolean
    shortUrl?: StringNullableFilter<"Program"> | string | null
    primaryTeacherId?: IntFilter<"Program"> | number
    feeStructure?: JsonFilter<"Program">
    createdAt?: DateTimeFilter<"Program"> | Date | string
    updatedAt?: DateTimeFilter<"Program"> | Date | string
    status?: StringFilter<"Program"> | string
    crfStatus?: StringFilter<"Program"> | string
    metaData?: JsonFilter<"Program">
  }

  export type ProgramUpsertWithWhereUniqueWithoutCoTeachersInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutCoTeachersInput, ProgramUncheckedUpdateWithoutCoTeachersInput>
    create: XOR<ProgramCreateWithoutCoTeachersInput, ProgramUncheckedCreateWithoutCoTeachersInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutCoTeachersInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutCoTeachersInput, ProgramUncheckedUpdateWithoutCoTeachersInput>
  }

  export type ProgramUpdateManyWithWhereWithoutCoTeachersInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutCoTeachersInput>
  }

  export type TeacherCreateWithoutEligibilityInput = {
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherInput
    programs?: ProgramCreateNestedManyWithoutPrimaryTeacherInput
    coTaughtPrograms?: ProgramCreateNestedManyWithoutCoTeachersInput
  }

  export type TeacherUncheckedCreateWithoutEligibilityInput = {
    id?: number
    userId: number
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    programs?: ProgramUncheckedCreateNestedManyWithoutPrimaryTeacherInput
    coTaughtPrograms?: ProgramUncheckedCreateNestedManyWithoutCoTeachersInput
  }

  export type TeacherCreateOrConnectWithoutEligibilityInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutEligibilityInput, TeacherUncheckedCreateWithoutEligibilityInput>
  }

  export type ProgramTypeCreateWithoutTeacherEligibilityInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    activeUntil?: Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure: JsonNullValueInput | InputJsonValue
    programs?: ProgramCreateNestedManyWithoutProgramTypeInput
  }

  export type ProgramTypeUncheckedCreateWithoutTeacherEligibilityInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    activeUntil?: Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure: JsonNullValueInput | InputJsonValue
    programs?: ProgramUncheckedCreateNestedManyWithoutProgramTypeInput
  }

  export type ProgramTypeCreateOrConnectWithoutTeacherEligibilityInput = {
    where: ProgramTypeWhereUniqueInput
    create: XOR<ProgramTypeCreateWithoutTeacherEligibilityInput, ProgramTypeUncheckedCreateWithoutTeacherEligibilityInput>
  }

  export type TeacherUpsertWithoutEligibilityInput = {
    update: XOR<TeacherUpdateWithoutEligibilityInput, TeacherUncheckedUpdateWithoutEligibilityInput>
    create: XOR<TeacherCreateWithoutEligibilityInput, TeacherUncheckedCreateWithoutEligibilityInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutEligibilityInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutEligibilityInput, TeacherUncheckedUpdateWithoutEligibilityInput>
  }

  export type TeacherUpdateWithoutEligibilityInput = {
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    programs?: ProgramUpdateManyWithoutPrimaryTeacherNestedInput
    coTaughtPrograms?: ProgramUpdateManyWithoutCoTeachersNestedInput
  }

  export type TeacherUncheckedUpdateWithoutEligibilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    programs?: ProgramUncheckedUpdateManyWithoutPrimaryTeacherNestedInput
    coTaughtPrograms?: ProgramUncheckedUpdateManyWithoutCoTeachersNestedInput
  }

  export type ProgramTypeUpsertWithoutTeacherEligibilityInput = {
    update: XOR<ProgramTypeUpdateWithoutTeacherEligibilityInput, ProgramTypeUncheckedUpdateWithoutTeacherEligibilityInput>
    create: XOR<ProgramTypeCreateWithoutTeacherEligibilityInput, ProgramTypeUncheckedCreateWithoutTeacherEligibilityInput>
    where?: ProgramTypeWhereInput
  }

  export type ProgramTypeUpdateToOneWithWhereWithoutTeacherEligibilityInput = {
    where?: ProgramTypeWhereInput
    data: XOR<ProgramTypeUpdateWithoutTeacherEligibilityInput, ProgramTypeUncheckedUpdateWithoutTeacherEligibilityInput>
  }

  export type ProgramTypeUpdateWithoutTeacherEligibilityInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure?: JsonNullValueInput | InputJsonValue
    programs?: ProgramUpdateManyWithoutProgramTypeNestedInput
  }

  export type ProgramTypeUncheckedUpdateWithoutTeacherEligibilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure?: JsonNullValueInput | InputJsonValue
    programs?: ProgramUncheckedUpdateManyWithoutProgramTypeNestedInput
  }

  export type TeacherEligibilityCreateWithoutProgramInput = {
    metaData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    teacher: TeacherCreateNestedOneWithoutEligibilityInput
  }

  export type TeacherEligibilityUncheckedCreateWithoutProgramInput = {
    id?: number
    teacherId: number
    metaData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeacherEligibilityCreateOrConnectWithoutProgramInput = {
    where: TeacherEligibilityWhereUniqueInput
    create: XOR<TeacherEligibilityCreateWithoutProgramInput, TeacherEligibilityUncheckedCreateWithoutProgramInput>
  }

  export type TeacherEligibilityCreateManyProgramInputEnvelope = {
    data: TeacherEligibilityCreateManyProgramInput | TeacherEligibilityCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type ProgramCreateWithoutProgramTypeInput = {
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    center?: CenterCreateNestedOneWithoutProgramsInput
    primaryTeacher: TeacherCreateNestedOneWithoutProgramsInput
    coTeachers?: TeacherCreateNestedManyWithoutCoTaughtProgramsInput
    registrations?: RegistrationCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutProgramTypeInput = {
    id?: number
    centerId?: number | null
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    primaryTeacherId: number
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedCreateNestedManyWithoutCoTaughtProgramsInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutProgramTypeInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutProgramTypeInput, ProgramUncheckedCreateWithoutProgramTypeInput>
  }

  export type ProgramCreateManyProgramTypeInputEnvelope = {
    data: ProgramCreateManyProgramTypeInput | ProgramCreateManyProgramTypeInput[]
    skipDuplicates?: boolean
  }

  export type TeacherEligibilityUpsertWithWhereUniqueWithoutProgramInput = {
    where: TeacherEligibilityWhereUniqueInput
    update: XOR<TeacherEligibilityUpdateWithoutProgramInput, TeacherEligibilityUncheckedUpdateWithoutProgramInput>
    create: XOR<TeacherEligibilityCreateWithoutProgramInput, TeacherEligibilityUncheckedCreateWithoutProgramInput>
  }

  export type TeacherEligibilityUpdateWithWhereUniqueWithoutProgramInput = {
    where: TeacherEligibilityWhereUniqueInput
    data: XOR<TeacherEligibilityUpdateWithoutProgramInput, TeacherEligibilityUncheckedUpdateWithoutProgramInput>
  }

  export type TeacherEligibilityUpdateManyWithWhereWithoutProgramInput = {
    where: TeacherEligibilityScalarWhereInput
    data: XOR<TeacherEligibilityUpdateManyMutationInput, TeacherEligibilityUncheckedUpdateManyWithoutProgramInput>
  }

  export type ProgramUpsertWithWhereUniqueWithoutProgramTypeInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutProgramTypeInput, ProgramUncheckedUpdateWithoutProgramTypeInput>
    create: XOR<ProgramCreateWithoutProgramTypeInput, ProgramUncheckedCreateWithoutProgramTypeInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutProgramTypeInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutProgramTypeInput, ProgramUncheckedUpdateWithoutProgramTypeInput>
  }

  export type ProgramUpdateManyWithWhereWithoutProgramTypeInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutProgramTypeInput>
  }

  export type ProgramCreateWithoutCenterInput = {
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    programType: ProgramTypeCreateNestedOneWithoutProgramsInput
    primaryTeacher: TeacherCreateNestedOneWithoutProgramsInput
    coTeachers?: TeacherCreateNestedManyWithoutCoTaughtProgramsInput
    registrations?: RegistrationCreateNestedManyWithoutProgramInput
  }

  export type ProgramUncheckedCreateWithoutCenterInput = {
    id?: number
    programTypeId: number
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    primaryTeacherId: number
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedCreateNestedManyWithoutCoTaughtProgramsInput
    registrations?: RegistrationUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramCreateOrConnectWithoutCenterInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutCenterInput, ProgramUncheckedCreateWithoutCenterInput>
  }

  export type ProgramCreateManyCenterInputEnvelope = {
    data: ProgramCreateManyCenterInput | ProgramCreateManyCenterInput[]
    skipDuplicates?: boolean
  }

  export type ProgramUpsertWithWhereUniqueWithoutCenterInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutCenterInput, ProgramUncheckedUpdateWithoutCenterInput>
    create: XOR<ProgramCreateWithoutCenterInput, ProgramUncheckedCreateWithoutCenterInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutCenterInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutCenterInput, ProgramUncheckedUpdateWithoutCenterInput>
  }

  export type ProgramUpdateManyWithWhereWithoutCenterInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutCenterInput>
  }

  export type ProgramTypeCreateWithoutProgramsInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    activeUntil?: Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure: JsonNullValueInput | InputJsonValue
    teacherEligibility?: TeacherEligibilityCreateNestedManyWithoutProgramInput
  }

  export type ProgramTypeUncheckedCreateWithoutProgramsInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    activeUntil?: Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure: JsonNullValueInput | InputJsonValue
    teacherEligibility?: TeacherEligibilityUncheckedCreateNestedManyWithoutProgramInput
  }

  export type ProgramTypeCreateOrConnectWithoutProgramsInput = {
    where: ProgramTypeWhereUniqueInput
    create: XOR<ProgramTypeCreateWithoutProgramsInput, ProgramTypeUncheckedCreateWithoutProgramsInput>
  }

  export type CenterCreateWithoutProgramsInput = {
    name: string
    centerType: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: string | null
    email?: string | null
    capacity?: number | null
    isActive?: boolean
    createdBy: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type CenterUncheckedCreateWithoutProgramsInput = {
    id?: number
    name: string
    centerType: string
    description?: string | null
    address?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    pincode?: string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: string | null
    email?: string | null
    capacity?: number | null
    isActive?: boolean
    createdBy: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type CenterCreateOrConnectWithoutProgramsInput = {
    where: CenterWhereUniqueInput
    create: XOR<CenterCreateWithoutProgramsInput, CenterUncheckedCreateWithoutProgramsInput>
  }

  export type TeacherCreateWithoutProgramsInput = {
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherInput
    eligibility?: TeacherEligibilityCreateNestedManyWithoutTeacherInput
    coTaughtPrograms?: ProgramCreateNestedManyWithoutCoTeachersInput
  }

  export type TeacherUncheckedCreateWithoutProgramsInput = {
    id?: number
    userId: number
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibility?: TeacherEligibilityUncheckedCreateNestedManyWithoutTeacherInput
    coTaughtPrograms?: ProgramUncheckedCreateNestedManyWithoutCoTeachersInput
  }

  export type TeacherCreateOrConnectWithoutProgramsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutProgramsInput, TeacherUncheckedCreateWithoutProgramsInput>
  }

  export type TeacherCreateWithoutCoTaughtProgramsInput = {
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTeacherInput
    eligibility?: TeacherEligibilityCreateNestedManyWithoutTeacherInput
    programs?: ProgramCreateNestedManyWithoutPrimaryTeacherInput
  }

  export type TeacherUncheckedCreateWithoutCoTaughtProgramsInput = {
    id?: number
    userId: number
    teacherCode: string
    status: string
    isActive?: boolean
    isSearchable?: boolean
    isOnboarded?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    eligibility?: TeacherEligibilityUncheckedCreateNestedManyWithoutTeacherInput
    programs?: ProgramUncheckedCreateNestedManyWithoutPrimaryTeacherInput
  }

  export type TeacherCreateOrConnectWithoutCoTaughtProgramsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutCoTaughtProgramsInput, TeacherUncheckedCreateWithoutCoTaughtProgramsInput>
  }

  export type RegistrationCreateWithoutProgramInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRegistrationsInput
  }

  export type RegistrationUncheckedCreateWithoutProgramInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type RegistrationCreateOrConnectWithoutProgramInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutProgramInput, RegistrationUncheckedCreateWithoutProgramInput>
  }

  export type RegistrationCreateManyProgramInputEnvelope = {
    data: RegistrationCreateManyProgramInput | RegistrationCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type ProgramTypeUpsertWithoutProgramsInput = {
    update: XOR<ProgramTypeUpdateWithoutProgramsInput, ProgramTypeUncheckedUpdateWithoutProgramsInput>
    create: XOR<ProgramTypeCreateWithoutProgramsInput, ProgramTypeUncheckedCreateWithoutProgramsInput>
    where?: ProgramTypeWhereInput
  }

  export type ProgramTypeUpdateToOneWithWhereWithoutProgramsInput = {
    where?: ProgramTypeWhereInput
    data: XOR<ProgramTypeUpdateWithoutProgramsInput, ProgramTypeUncheckedUpdateWithoutProgramsInput>
  }

  export type ProgramTypeUpdateWithoutProgramsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure?: JsonNullValueInput | InputJsonValue
    teacherEligibility?: TeacherEligibilityUpdateManyWithoutProgramNestedInput
  }

  export type ProgramTypeUncheckedUpdateWithoutProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    activeUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preRequisites?: NullableJsonNullValueInput | InputJsonValue
    feeStructure?: JsonNullValueInput | InputJsonValue
    teacherEligibility?: TeacherEligibilityUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type CenterUpsertWithoutProgramsInput = {
    update: XOR<CenterUpdateWithoutProgramsInput, CenterUncheckedUpdateWithoutProgramsInput>
    create: XOR<CenterCreateWithoutProgramsInput, CenterUncheckedCreateWithoutProgramsInput>
    where?: CenterWhereInput
  }

  export type CenterUpdateToOneWithWhereWithoutProgramsInput = {
    where?: CenterWhereInput
    data: XOR<CenterUpdateWithoutProgramsInput, CenterUncheckedUpdateWithoutProgramsInput>
  }

  export type CenterUpdateWithoutProgramsInput = {
    name?: StringFieldUpdateOperationsInput | string
    centerType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type CenterUncheckedUpdateWithoutProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    centerType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    geoLocation?: NullableJsonNullValueInput | InputJsonValue
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: NullableIntFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type TeacherUpsertWithoutProgramsInput = {
    update: XOR<TeacherUpdateWithoutProgramsInput, TeacherUncheckedUpdateWithoutProgramsInput>
    create: XOR<TeacherCreateWithoutProgramsInput, TeacherUncheckedCreateWithoutProgramsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutProgramsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutProgramsInput, TeacherUncheckedUpdateWithoutProgramsInput>
  }

  export type TeacherUpdateWithoutProgramsInput = {
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    eligibility?: TeacherEligibilityUpdateManyWithoutTeacherNestedInput
    coTaughtPrograms?: ProgramUpdateManyWithoutCoTeachersNestedInput
  }

  export type TeacherUncheckedUpdateWithoutProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibility?: TeacherEligibilityUncheckedUpdateManyWithoutTeacherNestedInput
    coTaughtPrograms?: ProgramUncheckedUpdateManyWithoutCoTeachersNestedInput
  }

  export type TeacherUpsertWithWhereUniqueWithoutCoTaughtProgramsInput = {
    where: TeacherWhereUniqueInput
    update: XOR<TeacherUpdateWithoutCoTaughtProgramsInput, TeacherUncheckedUpdateWithoutCoTaughtProgramsInput>
    create: XOR<TeacherCreateWithoutCoTaughtProgramsInput, TeacherUncheckedCreateWithoutCoTaughtProgramsInput>
  }

  export type TeacherUpdateWithWhereUniqueWithoutCoTaughtProgramsInput = {
    where: TeacherWhereUniqueInput
    data: XOR<TeacherUpdateWithoutCoTaughtProgramsInput, TeacherUncheckedUpdateWithoutCoTaughtProgramsInput>
  }

  export type TeacherUpdateManyWithWhereWithoutCoTaughtProgramsInput = {
    where: TeacherScalarWhereInput
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyWithoutCoTaughtProgramsInput>
  }

  export type TeacherScalarWhereInput = {
    AND?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    OR?: TeacherScalarWhereInput[]
    NOT?: TeacherScalarWhereInput | TeacherScalarWhereInput[]
    id?: IntFilter<"Teacher"> | number
    userId?: IntFilter<"Teacher"> | number
    teacherCode?: StringFilter<"Teacher"> | string
    status?: StringFilter<"Teacher"> | string
    isActive?: BoolFilter<"Teacher"> | boolean
    isSearchable?: BoolFilter<"Teacher"> | boolean
    isOnboarded?: BoolFilter<"Teacher"> | boolean
    createdAt?: DateTimeFilter<"Teacher"> | Date | string
    updatedAt?: DateTimeFilter<"Teacher"> | Date | string
  }

  export type RegistrationUpsertWithWhereUniqueWithoutProgramInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutProgramInput, RegistrationUncheckedUpdateWithoutProgramInput>
    create: XOR<RegistrationCreateWithoutProgramInput, RegistrationUncheckedCreateWithoutProgramInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutProgramInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutProgramInput, RegistrationUncheckedUpdateWithoutProgramInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutProgramInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutProgramInput>
  }

  export type ProgramCreateWithoutRegistrationsInput = {
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    programType: ProgramTypeCreateNestedOneWithoutProgramsInput
    center?: CenterCreateNestedOneWithoutProgramsInput
    primaryTeacher: TeacherCreateNestedOneWithoutProgramsInput
    coTeachers?: TeacherCreateNestedManyWithoutCoTaughtProgramsInput
  }

  export type ProgramUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    programTypeId: number
    centerId?: number | null
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    primaryTeacherId: number
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedCreateNestedManyWithoutCoTaughtProgramsInput
  }

  export type ProgramCreateOrConnectWithoutRegistrationsInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutRegistrationsInput, ProgramUncheckedCreateWithoutRegistrationsInput>
  }

  export type UserCreateWithoutRegistrationsInput = {
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailCreateNestedManyWithoutUserInput
    addresses?: AddressCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberCreateNestedManyWithoutUserInput
    teacher?: TeacherCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    userId: string
    name: string
    email?: string | null
    mobileNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emails?: EmailUncheckedCreateNestedManyWithoutUserInput
    addresses?: AddressUncheckedCreateNestedManyWithoutUserInput
    mobileNumbers?: MobileNumberUncheckedCreateNestedManyWithoutUserInput
    teacher?: TeacherUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
  }

  export type ProgramUpsertWithoutRegistrationsInput = {
    update: XOR<ProgramUpdateWithoutRegistrationsInput, ProgramUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<ProgramCreateWithoutRegistrationsInput, ProgramUncheckedCreateWithoutRegistrationsInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutRegistrationsInput, ProgramUncheckedUpdateWithoutRegistrationsInput>
  }

  export type ProgramUpdateWithoutRegistrationsInput = {
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    programType?: ProgramTypeUpdateOneRequiredWithoutProgramsNestedInput
    center?: CenterUpdateOneWithoutProgramsNestedInput
    primaryTeacher?: TeacherUpdateOneRequiredWithoutProgramsNestedInput
    coTeachers?: TeacherUpdateManyWithoutCoTaughtProgramsNestedInput
  }

  export type ProgramUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    programTypeId?: IntFieldUpdateOperationsInput | number
    centerId?: NullableIntFieldUpdateOperationsInput | number | null
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryTeacherId?: IntFieldUpdateOperationsInput | number
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedUpdateManyWithoutCoTaughtProgramsNestedInput
  }

  export type UserUpsertWithoutRegistrationsInput = {
    update: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateWithoutRegistrationsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUpdateManyWithoutUserNestedInput
    addresses?: AddressUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUpdateManyWithoutUserNestedInput
    teacher?: TeacherUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emails?: EmailUncheckedUpdateManyWithoutUserNestedInput
    addresses?: AddressUncheckedUpdateManyWithoutUserNestedInput
    mobileNumbers?: MobileNumberUncheckedUpdateManyWithoutUserNestedInput
    teacher?: TeacherUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EmailCreateManyUserInput = {
    id?: number
    email: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AddressCreateManyUserInput = {
    id?: number
    address: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MobileNumberCreateManyUserInput = {
    id?: number
    mobileNumber: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegistrationCreateManyUserInput = {
    id?: number
    programId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailUpdateWithoutUserInput = {
    email?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpdateWithoutUserInput = {
    address?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileNumberUpdateWithoutUserInput = {
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileNumberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MobileNumberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    mobileNumber?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherEligibilityCreateManyTeacherInput = {
    id?: number
    programId: number
    metaData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramCreateManyPrimaryTeacherInput = {
    id?: number
    programTypeId: number
    centerId?: number | null
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type TeacherEligibilityUpdateWithoutTeacherInput = {
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    program?: ProgramTypeUpdateOneRequiredWithoutTeacherEligibilityNestedInput
  }

  export type TeacherEligibilityUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherEligibilityUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    programId?: IntFieldUpdateOperationsInput | number
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUpdateWithoutPrimaryTeacherInput = {
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    programType?: ProgramTypeUpdateOneRequiredWithoutProgramsNestedInput
    center?: CenterUpdateOneWithoutProgramsNestedInput
    coTeachers?: TeacherUpdateManyWithoutCoTaughtProgramsNestedInput
    registrations?: RegistrationUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutPrimaryTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    programTypeId?: IntFieldUpdateOperationsInput | number
    centerId?: NullableIntFieldUpdateOperationsInput | number | null
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedUpdateManyWithoutCoTaughtProgramsNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutPrimaryTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    programTypeId?: IntFieldUpdateOperationsInput | number
    centerId?: NullableIntFieldUpdateOperationsInput | number | null
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type ProgramUpdateWithoutCoTeachersInput = {
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    programType?: ProgramTypeUpdateOneRequiredWithoutProgramsNestedInput
    center?: CenterUpdateOneWithoutProgramsNestedInput
    primaryTeacher?: TeacherUpdateOneRequiredWithoutProgramsNestedInput
    registrations?: RegistrationUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutCoTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    programTypeId?: IntFieldUpdateOperationsInput | number
    centerId?: NullableIntFieldUpdateOperationsInput | number | null
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryTeacherId?: IntFieldUpdateOperationsInput | number
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    registrations?: RegistrationUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutCoTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    programTypeId?: IntFieldUpdateOperationsInput | number
    centerId?: NullableIntFieldUpdateOperationsInput | number | null
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryTeacherId?: IntFieldUpdateOperationsInput | number
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type TeacherEligibilityCreateManyProgramInput = {
    id?: number
    teacherId: number
    metaData: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProgramCreateManyProgramTypeInput = {
    id?: number
    centerId?: number | null
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    primaryTeacherId: number
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type TeacherEligibilityUpdateWithoutProgramInput = {
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutEligibilityNestedInput
  }

  export type TeacherEligibilityUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherEligibilityUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    metaData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProgramUpdateWithoutProgramTypeInput = {
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    center?: CenterUpdateOneWithoutProgramsNestedInput
    primaryTeacher?: TeacherUpdateOneRequiredWithoutProgramsNestedInput
    coTeachers?: TeacherUpdateManyWithoutCoTaughtProgramsNestedInput
    registrations?: RegistrationUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutProgramTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    centerId?: NullableIntFieldUpdateOperationsInput | number | null
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryTeacherId?: IntFieldUpdateOperationsInput | number
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedUpdateManyWithoutCoTaughtProgramsNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutProgramTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    centerId?: NullableIntFieldUpdateOperationsInput | number | null
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryTeacherId?: IntFieldUpdateOperationsInput | number
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type ProgramCreateManyCenterInput = {
    id?: number
    programTypeId: number
    timing: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: Date | string | null
    registrationOpenDateTime?: Date | string | null
    scheduled?: boolean
    isActive?: boolean
    isSearchable?: boolean
    shortUrl?: string | null
    primaryTeacherId: number
    feeStructure: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    crfStatus?: string
    metaData: JsonNullValueInput | InputJsonValue
  }

  export type ProgramUpdateWithoutCenterInput = {
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    programType?: ProgramTypeUpdateOneRequiredWithoutProgramsNestedInput
    primaryTeacher?: TeacherUpdateOneRequiredWithoutProgramsNestedInput
    coTeachers?: TeacherUpdateManyWithoutCoTaughtProgramsNestedInput
    registrations?: RegistrationUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateWithoutCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    programTypeId?: IntFieldUpdateOperationsInput | number
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryTeacherId?: IntFieldUpdateOperationsInput | number
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
    coTeachers?: TeacherUncheckedUpdateManyWithoutCoTaughtProgramsNestedInput
    registrations?: RegistrationUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutCenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    programTypeId?: IntFieldUpdateOperationsInput | number
    timing?: JsonNullValueInput | InputJsonValue
    tags?: JsonNullValueInput | InputJsonValue
    registrationCloseDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    registrationOpenDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scheduled?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    shortUrl?: NullableStringFieldUpdateOperationsInput | string | null
    primaryTeacherId?: IntFieldUpdateOperationsInput | number
    feeStructure?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    crfStatus?: StringFieldUpdateOperationsInput | string
    metaData?: JsonNullValueInput | InputJsonValue
  }

  export type RegistrationCreateManyProgramInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type TeacherUpdateWithoutCoTaughtProgramsInput = {
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeacherNestedInput
    eligibility?: TeacherEligibilityUpdateManyWithoutTeacherNestedInput
    programs?: ProgramUpdateManyWithoutPrimaryTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutCoTaughtProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eligibility?: TeacherEligibilityUncheckedUpdateManyWithoutTeacherNestedInput
    programs?: ProgramUncheckedUpdateManyWithoutPrimaryTeacherNestedInput
  }

  export type TeacherUncheckedUpdateManyWithoutCoTaughtProgramsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    teacherCode?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isSearchable?: BoolFieldUpdateOperationsInput | boolean
    isOnboarded?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationUpdateWithoutProgramInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RegistrationUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
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