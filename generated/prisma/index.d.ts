
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
 * Model School
 * 
 */
export type School = $Result.DefaultSelection<Prisma.$SchoolPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model TransferMapping
 * 
 */
export type TransferMapping = $Result.DefaultSelection<Prisma.$TransferMappingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransferStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type TransferStatus = (typeof TransferStatus)[keyof typeof TransferStatus]

}

export type TransferStatus = $Enums.TransferStatus

export const TransferStatus: typeof $Enums.TransferStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Schools
 * const schools = await prisma.school.findMany()
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
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
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
   * `prisma.school`: Exposes CRUD operations for the **School** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schools
    * const schools = await prisma.school.findMany()
    * ```
    */
  get school(): Prisma.SchoolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transferMapping`: Exposes CRUD operations for the **TransferMapping** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransferMappings
    * const transferMappings = await prisma.transferMapping.findMany()
    * ```
    */
  get transferMapping(): Prisma.TransferMappingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
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
    School: 'School',
    Course: 'Course',
    TransferMapping: 'TransferMapping'
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
      modelProps: "school" | "course" | "transferMapping"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      School: {
        payload: Prisma.$SchoolPayload<ExtArgs>
        fields: Prisma.SchoolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findFirst: {
            args: Prisma.SchoolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          findMany: {
            args: Prisma.SchoolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          create: {
            args: Prisma.SchoolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          createMany: {
            args: Prisma.SchoolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          delete: {
            args: Prisma.SchoolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          update: {
            args: Prisma.SchoolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          deleteMany: {
            args: Prisma.SchoolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchoolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>[]
          }
          upsert: {
            args: Prisma.SchoolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPayload>
          }
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchool>
          }
          groupBy: {
            args: Prisma.SchoolGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      TransferMapping: {
        payload: Prisma.$TransferMappingPayload<ExtArgs>
        fields: Prisma.TransferMappingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransferMappingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransferMappingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload>
          }
          findFirst: {
            args: Prisma.TransferMappingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransferMappingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload>
          }
          findMany: {
            args: Prisma.TransferMappingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload>[]
          }
          create: {
            args: Prisma.TransferMappingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload>
          }
          createMany: {
            args: Prisma.TransferMappingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransferMappingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload>[]
          }
          delete: {
            args: Prisma.TransferMappingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload>
          }
          update: {
            args: Prisma.TransferMappingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload>
          }
          deleteMany: {
            args: Prisma.TransferMappingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransferMappingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransferMappingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload>[]
          }
          upsert: {
            args: Prisma.TransferMappingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransferMappingPayload>
          }
          aggregate: {
            args: Prisma.TransferMappingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransferMapping>
          }
          groupBy: {
            args: Prisma.TransferMappingGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransferMappingGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransferMappingCountArgs<ExtArgs>
            result: $Utils.Optional<TransferMappingCountAggregateOutputType> | number
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
    school?: SchoolOmit
    course?: CourseOmit
    transferMapping?: TransferMappingOmit
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
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    courses: number
    fromMappings: number
    toMappings: number
  }

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | SchoolCountOutputTypeCountCoursesArgs
    fromMappings?: boolean | SchoolCountOutputTypeCountFromMappingsArgs
    toMappings?: boolean | SchoolCountOutputTypeCountToMappingsArgs
  }

  // Custom InputTypes
  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountFromMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferMappingWhereInput
  }

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountToMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferMappingWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    fromMappings: number
    toMappings: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromMappings?: boolean | CourseCountOutputTypeCountFromMappingsArgs
    toMappings?: boolean | CourseCountOutputTypeCountToMappingsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountFromMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferMappingWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountToMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferMappingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model School
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  export type SchoolMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolCountAggregateOutputType = {
    id: number
    code: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which School to aggregate.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schools
    **/
    _count?: true | SchoolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolMaxAggregateInputType
  }

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
        [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>
  }




  export type SchoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolWhereInput
    orderBy?: SchoolOrderByWithAggregationInput | SchoolOrderByWithAggregationInput[]
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum
    having?: SchoolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolCountAggregateInputType | true
    _min?: SchoolMinAggregateInputType
    _max?: SchoolMaxAggregateInputType
  }

  export type SchoolGroupByOutputType = {
    id: string
    code: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: SchoolCountAggregateOutputType | null
    _min: SchoolMinAggregateOutputType | null
    _max: SchoolMaxAggregateOutputType | null
  }

  type GetSchoolGroupByPayload<T extends SchoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
        }
      >
    >


  export type SchoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    courses?: boolean | School$coursesArgs<ExtArgs>
    fromMappings?: boolean | School$fromMappingsArgs<ExtArgs>
    toMappings?: boolean | School$toMappingsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["school"]>

  export type SchoolSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["school"]>
  export type SchoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | School$coursesArgs<ExtArgs>
    fromMappings?: boolean | School$fromMappingsArgs<ExtArgs>
    toMappings?: boolean | School$toMappingsArgs<ExtArgs>
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SchoolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SchoolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SchoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "School"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
      fromMappings: Prisma.$TransferMappingPayload<ExtArgs>[]
      toMappings: Prisma.$TransferMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["school"]>
    composites: {}
  }

  type SchoolGetPayload<S extends boolean | null | undefined | SchoolDefaultArgs> = $Result.GetResult<Prisma.$SchoolPayload, S>

  type SchoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchoolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchoolCountAggregateInputType | true
    }

  export interface SchoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['School'], meta: { name: 'School' } }
    /**
     * Find zero or one School that matches the filter.
     * @param {SchoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolFindUniqueArgs>(args: SelectSubset<T, SchoolFindUniqueArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one School that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolFindFirstArgs>(args?: SelectSubset<T, SchoolFindFirstArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     * 
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolFindManyArgs>(args?: SelectSubset<T, SchoolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a School.
     * @param {SchoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     * 
     */
    create<T extends SchoolCreateArgs>(args: SelectSubset<T, SchoolCreateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schools.
     * @param {SchoolCreateManyArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolCreateManyArgs>(args?: SelectSubset<T, SchoolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schools and returns the data saved in the database.
     * @param {SchoolCreateManyAndReturnArgs} args - Arguments to create many Schools.
     * @example
     * // Create many Schools
     * const school = await prisma.school.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a School.
     * @param {SchoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     * 
     */
    delete<T extends SchoolDeleteArgs>(args: SelectSubset<T, SchoolDeleteArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one School.
     * @param {SchoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolUpdateArgs>(args: SelectSubset<T, SchoolUpdateArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schools.
     * @param {SchoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolDeleteManyArgs>(args?: SelectSubset<T, SchoolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolUpdateManyArgs>(args: SelectSubset<T, SchoolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schools and returns the data updated in the database.
     * @param {SchoolUpdateManyAndReturnArgs} args - Arguments to update many Schools.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schools and only return the `id`
     * const schoolWithIdOnly = await prisma.school.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchoolUpdateManyAndReturnArgs>(args: SelectSubset<T, SchoolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one School.
     * @param {SchoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     */
    upsert<T extends SchoolUpsertArgs>(args: SelectSubset<T, SchoolUpsertArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
    **/
    count<T extends SchoolCountArgs>(
      args?: Subset<T, SchoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(args: Subset<T, SchoolAggregateArgs>): Prisma.PrismaPromise<GetSchoolAggregateType<T>>

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolGroupByArgs} args - Group by arguments.
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
      T extends SchoolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolGroupByArgs['orderBy'] }
        : { orderBy?: SchoolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the School model
   */
  readonly fields: SchoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for School.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends School$coursesArgs<ExtArgs> = {}>(args?: Subset<T, School$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fromMappings<T extends School$fromMappingsArgs<ExtArgs> = {}>(args?: Subset<T, School$fromMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toMappings<T extends School$toMappingsArgs<ExtArgs> = {}>(args?: Subset<T, School$toMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the School model
   */
  interface SchoolFieldRefs {
    readonly id: FieldRef<"School", 'String'>
    readonly code: FieldRef<"School", 'String'>
    readonly name: FieldRef<"School", 'String'>
    readonly createdAt: FieldRef<"School", 'DateTime'>
    readonly updatedAt: FieldRef<"School", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * School findUnique
   */
  export type SchoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findUniqueOrThrow
   */
  export type SchoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School findFirst
   */
  export type SchoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findFirstOrThrow
   */
  export type SchoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which School to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School findMany
   */
  export type SchoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter, which Schools to fetch.
     */
    where?: SchoolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schools to fetch.
     */
    orderBy?: SchoolOrderByWithRelationInput | SchoolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schools.
     */
    cursor?: SchoolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schools from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schools.
     */
    skip?: number
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[]
  }

  /**
   * School create
   */
  export type SchoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to create a School.
     */
    data: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
  }

  /**
   * School createMany
   */
  export type SchoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School createManyAndReturn
   */
  export type SchoolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to create many Schools.
     */
    data: SchoolCreateManyInput | SchoolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * School update
   */
  export type SchoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The data needed to update a School.
     */
    data: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
    /**
     * Choose, which School to update.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School updateMany
   */
  export type SchoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School updateManyAndReturn
   */
  export type SchoolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * The data used to update Schools.
     */
    data: XOR<SchoolUpdateManyMutationInput, SchoolUncheckedUpdateManyInput>
    /**
     * Filter which Schools to update
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to update.
     */
    limit?: number
  }

  /**
   * School upsert
   */
  export type SchoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * The filter to search for the School to update in case it exists.
     */
    where: SchoolWhereUniqueInput
    /**
     * In case the School found by the `where` argument doesn't exist, create a new School with this data.
     */
    create: XOR<SchoolCreateInput, SchoolUncheckedCreateInput>
    /**
     * In case the School was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolUpdateInput, SchoolUncheckedUpdateInput>
  }

  /**
   * School delete
   */
  export type SchoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
    /**
     * Filter which School to delete.
     */
    where: SchoolWhereUniqueInput
  }

  /**
   * School deleteMany
   */
  export type SchoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schools to delete
     */
    where?: SchoolWhereInput
    /**
     * Limit how many Schools to delete.
     */
    limit?: number
  }

  /**
   * School.courses
   */
  export type School$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * School.fromMappings
   */
  export type School$fromMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    where?: TransferMappingWhereInput
    orderBy?: TransferMappingOrderByWithRelationInput | TransferMappingOrderByWithRelationInput[]
    cursor?: TransferMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferMappingScalarFieldEnum | TransferMappingScalarFieldEnum[]
  }

  /**
   * School.toMappings
   */
  export type School$toMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    where?: TransferMappingWhereInput
    orderBy?: TransferMappingOrderByWithRelationInput | TransferMappingOrderByWithRelationInput[]
    cursor?: TransferMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferMappingScalarFieldEnum | TransferMappingScalarFieldEnum[]
  }

  /**
   * School without action
   */
  export type SchoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the School
     */
    select?: SchoolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the School
     */
    omit?: SchoolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    credits: number | null
  }

  export type CourseSumAggregateOutputType = {
    credits: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    credits: number | null
    description: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    credits: number | null
    description: string | null
    schoolId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    code: number
    name: number
    credits: number
    description: number
    schoolId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    credits?: true
  }

  export type CourseSumAggregateInputType = {
    credits?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    credits?: true
    description?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    credits?: true
    description?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    credits?: true
    description?: true
    schoolId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    code: string
    name: string
    credits: number
    description: string | null
    schoolId: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    credits?: boolean
    description?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    fromMappings?: boolean | Course$fromMappingsArgs<ExtArgs>
    toMappings?: boolean | Course$toMappingsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    credits?: boolean
    description?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    credits?: boolean
    description?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    credits?: boolean
    description?: boolean
    schoolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "credits" | "description" | "schoolId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
    fromMappings?: boolean | Course$fromMappingsArgs<ExtArgs>
    toMappings?: boolean | Course$toMappingsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | SchoolDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      school: Prisma.$SchoolPayload<ExtArgs>
      fromMappings: Prisma.$TransferMappingPayload<ExtArgs>[]
      toMappings: Prisma.$TransferMappingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      credits: number
      description: string | null
      schoolId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    school<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromMappings<T extends Course$fromMappingsArgs<ExtArgs> = {}>(args?: Subset<T, Course$fromMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toMappings<T extends Course$toMappingsArgs<ExtArgs> = {}>(args?: Subset<T, Course$toMappingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly code: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly credits: FieldRef<"Course", 'Float'>
    readonly description: FieldRef<"Course", 'String'>
    readonly schoolId: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.fromMappings
   */
  export type Course$fromMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    where?: TransferMappingWhereInput
    orderBy?: TransferMappingOrderByWithRelationInput | TransferMappingOrderByWithRelationInput[]
    cursor?: TransferMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferMappingScalarFieldEnum | TransferMappingScalarFieldEnum[]
  }

  /**
   * Course.toMappings
   */
  export type Course$toMappingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    where?: TransferMappingWhereInput
    orderBy?: TransferMappingOrderByWithRelationInput | TransferMappingOrderByWithRelationInput[]
    cursor?: TransferMappingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferMappingScalarFieldEnum | TransferMappingScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model TransferMapping
   */

  export type AggregateTransferMapping = {
    _count: TransferMappingCountAggregateOutputType | null
    _min: TransferMappingMinAggregateOutputType | null
    _max: TransferMappingMaxAggregateOutputType | null
  }

  export type TransferMappingMinAggregateOutputType = {
    id: string | null
    fromSchoolId: string | null
    toSchoolId: string | null
    fromCourseId: string | null
    toCourseId: string | null
    status: $Enums.TransferStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransferMappingMaxAggregateOutputType = {
    id: string | null
    fromSchoolId: string | null
    toSchoolId: string | null
    fromCourseId: string | null
    toCourseId: string | null
    status: $Enums.TransferStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransferMappingCountAggregateOutputType = {
    id: number
    fromSchoolId: number
    toSchoolId: number
    fromCourseId: number
    toCourseId: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransferMappingMinAggregateInputType = {
    id?: true
    fromSchoolId?: true
    toSchoolId?: true
    fromCourseId?: true
    toCourseId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransferMappingMaxAggregateInputType = {
    id?: true
    fromSchoolId?: true
    toSchoolId?: true
    fromCourseId?: true
    toCourseId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransferMappingCountAggregateInputType = {
    id?: true
    fromSchoolId?: true
    toSchoolId?: true
    fromCourseId?: true
    toCourseId?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransferMappingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferMapping to aggregate.
     */
    where?: TransferMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferMappings to fetch.
     */
    orderBy?: TransferMappingOrderByWithRelationInput | TransferMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransferMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransferMappings
    **/
    _count?: true | TransferMappingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferMappingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferMappingMaxAggregateInputType
  }

  export type GetTransferMappingAggregateType<T extends TransferMappingAggregateArgs> = {
        [P in keyof T & keyof AggregateTransferMapping]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransferMapping[P]>
      : GetScalarType<T[P], AggregateTransferMapping[P]>
  }




  export type TransferMappingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferMappingWhereInput
    orderBy?: TransferMappingOrderByWithAggregationInput | TransferMappingOrderByWithAggregationInput[]
    by: TransferMappingScalarFieldEnum[] | TransferMappingScalarFieldEnum
    having?: TransferMappingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferMappingCountAggregateInputType | true
    _min?: TransferMappingMinAggregateInputType
    _max?: TransferMappingMaxAggregateInputType
  }

  export type TransferMappingGroupByOutputType = {
    id: string
    fromSchoolId: string
    toSchoolId: string
    fromCourseId: string
    toCourseId: string
    status: $Enums.TransferStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransferMappingCountAggregateOutputType | null
    _min: TransferMappingMinAggregateOutputType | null
    _max: TransferMappingMaxAggregateOutputType | null
  }

  type GetTransferMappingGroupByPayload<T extends TransferMappingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransferMappingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransferMappingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransferMappingGroupByOutputType[P]>
            : GetScalarType<T[P], TransferMappingGroupByOutputType[P]>
        }
      >
    >


  export type TransferMappingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromSchoolId?: boolean
    toSchoolId?: boolean
    fromCourseId?: boolean
    toCourseId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    toSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    fromCourse?: boolean | CourseDefaultArgs<ExtArgs>
    toCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transferMapping"]>

  export type TransferMappingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromSchoolId?: boolean
    toSchoolId?: boolean
    fromCourseId?: boolean
    toCourseId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    toSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    fromCourse?: boolean | CourseDefaultArgs<ExtArgs>
    toCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transferMapping"]>

  export type TransferMappingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromSchoolId?: boolean
    toSchoolId?: boolean
    fromCourseId?: boolean
    toCourseId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    toSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    fromCourse?: boolean | CourseDefaultArgs<ExtArgs>
    toCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transferMapping"]>

  export type TransferMappingSelectScalar = {
    id?: boolean
    fromSchoolId?: boolean
    toSchoolId?: boolean
    fromCourseId?: boolean
    toCourseId?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransferMappingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromSchoolId" | "toSchoolId" | "fromCourseId" | "toCourseId" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["transferMapping"]>
  export type TransferMappingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    toSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    fromCourse?: boolean | CourseDefaultArgs<ExtArgs>
    toCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type TransferMappingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    toSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    fromCourse?: boolean | CourseDefaultArgs<ExtArgs>
    toCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type TransferMappingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    toSchool?: boolean | SchoolDefaultArgs<ExtArgs>
    fromCourse?: boolean | CourseDefaultArgs<ExtArgs>
    toCourse?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $TransferMappingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransferMapping"
    objects: {
      fromSchool: Prisma.$SchoolPayload<ExtArgs>
      toSchool: Prisma.$SchoolPayload<ExtArgs>
      fromCourse: Prisma.$CoursePayload<ExtArgs>
      toCourse: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromSchoolId: string
      toSchoolId: string
      fromCourseId: string
      toCourseId: string
      status: $Enums.TransferStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transferMapping"]>
    composites: {}
  }

  type TransferMappingGetPayload<S extends boolean | null | undefined | TransferMappingDefaultArgs> = $Result.GetResult<Prisma.$TransferMappingPayload, S>

  type TransferMappingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransferMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransferMappingCountAggregateInputType | true
    }

  export interface TransferMappingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransferMapping'], meta: { name: 'TransferMapping' } }
    /**
     * Find zero or one TransferMapping that matches the filter.
     * @param {TransferMappingFindUniqueArgs} args - Arguments to find a TransferMapping
     * @example
     * // Get one TransferMapping
     * const transferMapping = await prisma.transferMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransferMappingFindUniqueArgs>(args: SelectSubset<T, TransferMappingFindUniqueArgs<ExtArgs>>): Prisma__TransferMappingClient<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransferMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransferMappingFindUniqueOrThrowArgs} args - Arguments to find a TransferMapping
     * @example
     * // Get one TransferMapping
     * const transferMapping = await prisma.transferMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransferMappingFindUniqueOrThrowArgs>(args: SelectSubset<T, TransferMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransferMappingClient<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransferMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferMappingFindFirstArgs} args - Arguments to find a TransferMapping
     * @example
     * // Get one TransferMapping
     * const transferMapping = await prisma.transferMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransferMappingFindFirstArgs>(args?: SelectSubset<T, TransferMappingFindFirstArgs<ExtArgs>>): Prisma__TransferMappingClient<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransferMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferMappingFindFirstOrThrowArgs} args - Arguments to find a TransferMapping
     * @example
     * // Get one TransferMapping
     * const transferMapping = await prisma.transferMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransferMappingFindFirstOrThrowArgs>(args?: SelectSubset<T, TransferMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransferMappingClient<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransferMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransferMappings
     * const transferMappings = await prisma.transferMapping.findMany()
     * 
     * // Get first 10 TransferMappings
     * const transferMappings = await prisma.transferMapping.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transferMappingWithIdOnly = await prisma.transferMapping.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransferMappingFindManyArgs>(args?: SelectSubset<T, TransferMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransferMapping.
     * @param {TransferMappingCreateArgs} args - Arguments to create a TransferMapping.
     * @example
     * // Create one TransferMapping
     * const TransferMapping = await prisma.transferMapping.create({
     *   data: {
     *     // ... data to create a TransferMapping
     *   }
     * })
     * 
     */
    create<T extends TransferMappingCreateArgs>(args: SelectSubset<T, TransferMappingCreateArgs<ExtArgs>>): Prisma__TransferMappingClient<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransferMappings.
     * @param {TransferMappingCreateManyArgs} args - Arguments to create many TransferMappings.
     * @example
     * // Create many TransferMappings
     * const transferMapping = await prisma.transferMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransferMappingCreateManyArgs>(args?: SelectSubset<T, TransferMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransferMappings and returns the data saved in the database.
     * @param {TransferMappingCreateManyAndReturnArgs} args - Arguments to create many TransferMappings.
     * @example
     * // Create many TransferMappings
     * const transferMapping = await prisma.transferMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransferMappings and only return the `id`
     * const transferMappingWithIdOnly = await prisma.transferMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransferMappingCreateManyAndReturnArgs>(args?: SelectSubset<T, TransferMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransferMapping.
     * @param {TransferMappingDeleteArgs} args - Arguments to delete one TransferMapping.
     * @example
     * // Delete one TransferMapping
     * const TransferMapping = await prisma.transferMapping.delete({
     *   where: {
     *     // ... filter to delete one TransferMapping
     *   }
     * })
     * 
     */
    delete<T extends TransferMappingDeleteArgs>(args: SelectSubset<T, TransferMappingDeleteArgs<ExtArgs>>): Prisma__TransferMappingClient<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransferMapping.
     * @param {TransferMappingUpdateArgs} args - Arguments to update one TransferMapping.
     * @example
     * // Update one TransferMapping
     * const transferMapping = await prisma.transferMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransferMappingUpdateArgs>(args: SelectSubset<T, TransferMappingUpdateArgs<ExtArgs>>): Prisma__TransferMappingClient<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransferMappings.
     * @param {TransferMappingDeleteManyArgs} args - Arguments to filter TransferMappings to delete.
     * @example
     * // Delete a few TransferMappings
     * const { count } = await prisma.transferMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransferMappingDeleteManyArgs>(args?: SelectSubset<T, TransferMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransferMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransferMappings
     * const transferMapping = await prisma.transferMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransferMappingUpdateManyArgs>(args: SelectSubset<T, TransferMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransferMappings and returns the data updated in the database.
     * @param {TransferMappingUpdateManyAndReturnArgs} args - Arguments to update many TransferMappings.
     * @example
     * // Update many TransferMappings
     * const transferMapping = await prisma.transferMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransferMappings and only return the `id`
     * const transferMappingWithIdOnly = await prisma.transferMapping.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransferMappingUpdateManyAndReturnArgs>(args: SelectSubset<T, TransferMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransferMapping.
     * @param {TransferMappingUpsertArgs} args - Arguments to update or create a TransferMapping.
     * @example
     * // Update or create a TransferMapping
     * const transferMapping = await prisma.transferMapping.upsert({
     *   create: {
     *     // ... data to create a TransferMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransferMapping we want to update
     *   }
     * })
     */
    upsert<T extends TransferMappingUpsertArgs>(args: SelectSubset<T, TransferMappingUpsertArgs<ExtArgs>>): Prisma__TransferMappingClient<$Result.GetResult<Prisma.$TransferMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransferMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferMappingCountArgs} args - Arguments to filter TransferMappings to count.
     * @example
     * // Count the number of TransferMappings
     * const count = await prisma.transferMapping.count({
     *   where: {
     *     // ... the filter for the TransferMappings we want to count
     *   }
     * })
    **/
    count<T extends TransferMappingCountArgs>(
      args?: Subset<T, TransferMappingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferMappingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransferMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransferMappingAggregateArgs>(args: Subset<T, TransferMappingAggregateArgs>): Prisma.PrismaPromise<GetTransferMappingAggregateType<T>>

    /**
     * Group by TransferMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferMappingGroupByArgs} args - Group by arguments.
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
      T extends TransferMappingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferMappingGroupByArgs['orderBy'] }
        : { orderBy?: TransferMappingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransferMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransferMapping model
   */
  readonly fields: TransferMappingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransferMapping.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransferMappingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromSchool<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toSchool<T extends SchoolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SchoolDefaultArgs<ExtArgs>>): Prisma__SchoolClient<$Result.GetResult<Prisma.$SchoolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromCourse<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toCourse<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TransferMapping model
   */
  interface TransferMappingFieldRefs {
    readonly id: FieldRef<"TransferMapping", 'String'>
    readonly fromSchoolId: FieldRef<"TransferMapping", 'String'>
    readonly toSchoolId: FieldRef<"TransferMapping", 'String'>
    readonly fromCourseId: FieldRef<"TransferMapping", 'String'>
    readonly toCourseId: FieldRef<"TransferMapping", 'String'>
    readonly status: FieldRef<"TransferMapping", 'TransferStatus'>
    readonly notes: FieldRef<"TransferMapping", 'String'>
    readonly createdAt: FieldRef<"TransferMapping", 'DateTime'>
    readonly updatedAt: FieldRef<"TransferMapping", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransferMapping findUnique
   */
  export type TransferMappingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    /**
     * Filter, which TransferMapping to fetch.
     */
    where: TransferMappingWhereUniqueInput
  }

  /**
   * TransferMapping findUniqueOrThrow
   */
  export type TransferMappingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    /**
     * Filter, which TransferMapping to fetch.
     */
    where: TransferMappingWhereUniqueInput
  }

  /**
   * TransferMapping findFirst
   */
  export type TransferMappingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    /**
     * Filter, which TransferMapping to fetch.
     */
    where?: TransferMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferMappings to fetch.
     */
    orderBy?: TransferMappingOrderByWithRelationInput | TransferMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferMappings.
     */
    cursor?: TransferMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferMappings.
     */
    distinct?: TransferMappingScalarFieldEnum | TransferMappingScalarFieldEnum[]
  }

  /**
   * TransferMapping findFirstOrThrow
   */
  export type TransferMappingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    /**
     * Filter, which TransferMapping to fetch.
     */
    where?: TransferMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferMappings to fetch.
     */
    orderBy?: TransferMappingOrderByWithRelationInput | TransferMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransferMappings.
     */
    cursor?: TransferMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferMappings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransferMappings.
     */
    distinct?: TransferMappingScalarFieldEnum | TransferMappingScalarFieldEnum[]
  }

  /**
   * TransferMapping findMany
   */
  export type TransferMappingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    /**
     * Filter, which TransferMappings to fetch.
     */
    where?: TransferMappingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransferMappings to fetch.
     */
    orderBy?: TransferMappingOrderByWithRelationInput | TransferMappingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransferMappings.
     */
    cursor?: TransferMappingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransferMappings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransferMappings.
     */
    skip?: number
    distinct?: TransferMappingScalarFieldEnum | TransferMappingScalarFieldEnum[]
  }

  /**
   * TransferMapping create
   */
  export type TransferMappingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    /**
     * The data needed to create a TransferMapping.
     */
    data: XOR<TransferMappingCreateInput, TransferMappingUncheckedCreateInput>
  }

  /**
   * TransferMapping createMany
   */
  export type TransferMappingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransferMappings.
     */
    data: TransferMappingCreateManyInput | TransferMappingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransferMapping createManyAndReturn
   */
  export type TransferMappingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * The data used to create many TransferMappings.
     */
    data: TransferMappingCreateManyInput | TransferMappingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransferMapping update
   */
  export type TransferMappingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    /**
     * The data needed to update a TransferMapping.
     */
    data: XOR<TransferMappingUpdateInput, TransferMappingUncheckedUpdateInput>
    /**
     * Choose, which TransferMapping to update.
     */
    where: TransferMappingWhereUniqueInput
  }

  /**
   * TransferMapping updateMany
   */
  export type TransferMappingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransferMappings.
     */
    data: XOR<TransferMappingUpdateManyMutationInput, TransferMappingUncheckedUpdateManyInput>
    /**
     * Filter which TransferMappings to update
     */
    where?: TransferMappingWhereInput
    /**
     * Limit how many TransferMappings to update.
     */
    limit?: number
  }

  /**
   * TransferMapping updateManyAndReturn
   */
  export type TransferMappingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * The data used to update TransferMappings.
     */
    data: XOR<TransferMappingUpdateManyMutationInput, TransferMappingUncheckedUpdateManyInput>
    /**
     * Filter which TransferMappings to update
     */
    where?: TransferMappingWhereInput
    /**
     * Limit how many TransferMappings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransferMapping upsert
   */
  export type TransferMappingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    /**
     * The filter to search for the TransferMapping to update in case it exists.
     */
    where: TransferMappingWhereUniqueInput
    /**
     * In case the TransferMapping found by the `where` argument doesn't exist, create a new TransferMapping with this data.
     */
    create: XOR<TransferMappingCreateInput, TransferMappingUncheckedCreateInput>
    /**
     * In case the TransferMapping was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransferMappingUpdateInput, TransferMappingUncheckedUpdateInput>
  }

  /**
   * TransferMapping delete
   */
  export type TransferMappingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
    /**
     * Filter which TransferMapping to delete.
     */
    where: TransferMappingWhereUniqueInput
  }

  /**
   * TransferMapping deleteMany
   */
  export type TransferMappingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransferMappings to delete
     */
    where?: TransferMappingWhereInput
    /**
     * Limit how many TransferMappings to delete.
     */
    limit?: number
  }

  /**
   * TransferMapping without action
   */
  export type TransferMappingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransferMapping
     */
    select?: TransferMappingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransferMapping
     */
    omit?: TransferMappingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferMappingInclude<ExtArgs> | null
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


  export const SchoolScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    credits: 'credits',
    description: 'description',
    schoolId: 'schoolId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const TransferMappingScalarFieldEnum: {
    id: 'id',
    fromSchoolId: 'fromSchoolId',
    toSchoolId: 'toSchoolId',
    fromCourseId: 'fromCourseId',
    toCourseId: 'toCourseId',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransferMappingScalarFieldEnum = (typeof TransferMappingScalarFieldEnum)[keyof typeof TransferMappingScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TransferStatus'
   */
  export type EnumTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransferStatus'>
    


  /**
   * Reference to a field of type 'TransferStatus[]'
   */
  export type ListEnumTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransferStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SchoolWhereInput = {
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    id?: StringFilter<"School"> | string
    code?: StringFilter<"School"> | string
    name?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    courses?: CourseListRelationFilter
    fromMappings?: TransferMappingListRelationFilter
    toMappings?: TransferMappingListRelationFilter
  }

  export type SchoolOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
    fromMappings?: TransferMappingOrderByRelationAggregateInput
    toMappings?: TransferMappingOrderByRelationAggregateInput
  }

  export type SchoolWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: SchoolWhereInput | SchoolWhereInput[]
    OR?: SchoolWhereInput[]
    NOT?: SchoolWhereInput | SchoolWhereInput[]
    name?: StringFilter<"School"> | string
    createdAt?: DateTimeFilter<"School"> | Date | string
    updatedAt?: DateTimeFilter<"School"> | Date | string
    courses?: CourseListRelationFilter
    fromMappings?: TransferMappingListRelationFilter
    toMappings?: TransferMappingListRelationFilter
  }, "id" | "code">

  export type SchoolOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolCountOrderByAggregateInput
    _max?: SchoolMaxOrderByAggregateInput
    _min?: SchoolMinOrderByAggregateInput
  }

  export type SchoolScalarWhereWithAggregatesInput = {
    AND?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    OR?: SchoolScalarWhereWithAggregatesInput[]
    NOT?: SchoolScalarWhereWithAggregatesInput | SchoolScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"School"> | string
    code?: StringWithAggregatesFilter<"School"> | string
    name?: StringWithAggregatesFilter<"School"> | string
    createdAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"School"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    credits?: FloatFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    schoolId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    fromMappings?: TransferMappingListRelationFilter
    toMappings?: TransferMappingListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    school?: SchoolOrderByWithRelationInput
    fromMappings?: TransferMappingOrderByRelationAggregateInput
    toMappings?: TransferMappingOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code_schoolId?: CourseCodeSchoolIdCompoundUniqueInput
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    credits?: FloatFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    schoolId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    school?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    fromMappings?: TransferMappingListRelationFilter
    toMappings?: TransferMappingListRelationFilter
  }, "id" | "code_schoolId">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrderInput | SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    code?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    credits?: FloatWithAggregatesFilter<"Course"> | number
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    schoolId?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type TransferMappingWhereInput = {
    AND?: TransferMappingWhereInput | TransferMappingWhereInput[]
    OR?: TransferMappingWhereInput[]
    NOT?: TransferMappingWhereInput | TransferMappingWhereInput[]
    id?: StringFilter<"TransferMapping"> | string
    fromSchoolId?: StringFilter<"TransferMapping"> | string
    toSchoolId?: StringFilter<"TransferMapping"> | string
    fromCourseId?: StringFilter<"TransferMapping"> | string
    toCourseId?: StringFilter<"TransferMapping"> | string
    status?: EnumTransferStatusFilter<"TransferMapping"> | $Enums.TransferStatus
    notes?: StringNullableFilter<"TransferMapping"> | string | null
    createdAt?: DateTimeFilter<"TransferMapping"> | Date | string
    updatedAt?: DateTimeFilter<"TransferMapping"> | Date | string
    fromSchool?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    toSchool?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    fromCourse?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    toCourse?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type TransferMappingOrderByWithRelationInput = {
    id?: SortOrder
    fromSchoolId?: SortOrder
    toSchoolId?: SortOrder
    fromCourseId?: SortOrder
    toCourseId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fromSchool?: SchoolOrderByWithRelationInput
    toSchool?: SchoolOrderByWithRelationInput
    fromCourse?: CourseOrderByWithRelationInput
    toCourse?: CourseOrderByWithRelationInput
  }

  export type TransferMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fromCourseId_toCourseId?: TransferMappingFromCourseIdToCourseIdCompoundUniqueInput
    AND?: TransferMappingWhereInput | TransferMappingWhereInput[]
    OR?: TransferMappingWhereInput[]
    NOT?: TransferMappingWhereInput | TransferMappingWhereInput[]
    fromSchoolId?: StringFilter<"TransferMapping"> | string
    toSchoolId?: StringFilter<"TransferMapping"> | string
    fromCourseId?: StringFilter<"TransferMapping"> | string
    toCourseId?: StringFilter<"TransferMapping"> | string
    status?: EnumTransferStatusFilter<"TransferMapping"> | $Enums.TransferStatus
    notes?: StringNullableFilter<"TransferMapping"> | string | null
    createdAt?: DateTimeFilter<"TransferMapping"> | Date | string
    updatedAt?: DateTimeFilter<"TransferMapping"> | Date | string
    fromSchool?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    toSchool?: XOR<SchoolScalarRelationFilter, SchoolWhereInput>
    fromCourse?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    toCourse?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "fromCourseId_toCourseId">

  export type TransferMappingOrderByWithAggregationInput = {
    id?: SortOrder
    fromSchoolId?: SortOrder
    toSchoolId?: SortOrder
    fromCourseId?: SortOrder
    toCourseId?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransferMappingCountOrderByAggregateInput
    _max?: TransferMappingMaxOrderByAggregateInput
    _min?: TransferMappingMinOrderByAggregateInput
  }

  export type TransferMappingScalarWhereWithAggregatesInput = {
    AND?: TransferMappingScalarWhereWithAggregatesInput | TransferMappingScalarWhereWithAggregatesInput[]
    OR?: TransferMappingScalarWhereWithAggregatesInput[]
    NOT?: TransferMappingScalarWhereWithAggregatesInput | TransferMappingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransferMapping"> | string
    fromSchoolId?: StringWithAggregatesFilter<"TransferMapping"> | string
    toSchoolId?: StringWithAggregatesFilter<"TransferMapping"> | string
    fromCourseId?: StringWithAggregatesFilter<"TransferMapping"> | string
    toCourseId?: StringWithAggregatesFilter<"TransferMapping"> | string
    status?: EnumTransferStatusWithAggregatesFilter<"TransferMapping"> | $Enums.TransferStatus
    notes?: StringNullableWithAggregatesFilter<"TransferMapping"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TransferMapping"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TransferMapping"> | Date | string
  }

  export type SchoolCreateInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutSchoolInput
    fromMappings?: TransferMappingCreateNestedManyWithoutFromSchoolInput
    toMappings?: TransferMappingCreateNestedManyWithoutToSchoolInput
  }

  export type SchoolUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutSchoolInput
    fromMappings?: TransferMappingUncheckedCreateNestedManyWithoutFromSchoolInput
    toMappings?: TransferMappingUncheckedCreateNestedManyWithoutToSchoolInput
  }

  export type SchoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutSchoolNestedInput
    fromMappings?: TransferMappingUpdateManyWithoutFromSchoolNestedInput
    toMappings?: TransferMappingUpdateManyWithoutToSchoolNestedInput
  }

  export type SchoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutSchoolNestedInput
    fromMappings?: TransferMappingUncheckedUpdateManyWithoutFromSchoolNestedInput
    toMappings?: TransferMappingUncheckedUpdateManyWithoutToSchoolNestedInput
  }

  export type SchoolCreateManyInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutCoursesInput
    fromMappings?: TransferMappingCreateNestedManyWithoutFromCourseInput
    toMappings?: TransferMappingCreateNestedManyWithoutToCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromMappings?: TransferMappingUncheckedCreateNestedManyWithoutFromCourseInput
    toMappings?: TransferMappingUncheckedCreateNestedManyWithoutToCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutCoursesNestedInput
    fromMappings?: TransferMappingUpdateManyWithoutFromCourseNestedInput
    toMappings?: TransferMappingUpdateManyWithoutToCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromMappings?: TransferMappingUncheckedUpdateManyWithoutFromCourseNestedInput
    toMappings?: TransferMappingUncheckedUpdateManyWithoutToCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingCreateInput = {
    id?: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fromSchool: SchoolCreateNestedOneWithoutFromMappingsInput
    toSchool: SchoolCreateNestedOneWithoutToMappingsInput
    fromCourse: CourseCreateNestedOneWithoutFromMappingsInput
    toCourse: CourseCreateNestedOneWithoutToMappingsInput
  }

  export type TransferMappingUncheckedCreateInput = {
    id?: string
    fromSchoolId: string
    toSchoolId: string
    fromCourseId: string
    toCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromSchool?: SchoolUpdateOneRequiredWithoutFromMappingsNestedInput
    toSchool?: SchoolUpdateOneRequiredWithoutToMappingsNestedInput
    fromCourse?: CourseUpdateOneRequiredWithoutFromMappingsNestedInput
    toCourse?: CourseUpdateOneRequiredWithoutToMappingsNestedInput
  }

  export type TransferMappingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromSchoolId?: StringFieldUpdateOperationsInput | string
    toSchoolId?: StringFieldUpdateOperationsInput | string
    fromCourseId?: StringFieldUpdateOperationsInput | string
    toCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingCreateManyInput = {
    id?: string
    fromSchoolId: string
    toSchoolId: string
    fromCourseId: string
    toCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromSchoolId?: StringFieldUpdateOperationsInput | string
    toSchoolId?: StringFieldUpdateOperationsInput | string
    fromCourseId?: StringFieldUpdateOperationsInput | string
    toCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type TransferMappingListRelationFilter = {
    every?: TransferMappingWhereInput
    some?: TransferMappingWhereInput
    none?: TransferMappingWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransferMappingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchoolCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type SchoolScalarRelationFilter = {
    is?: SchoolWhereInput
    isNot?: SchoolWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourseCodeSchoolIdCompoundUniqueInput = {
    code: string
    schoolId: string
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    credits?: SortOrder
    description?: SortOrder
    schoolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type EnumTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | EnumTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransferStatus[] | ListEnumTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransferStatus[] | ListEnumTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransferStatusFilter<$PrismaModel> | $Enums.TransferStatus
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type TransferMappingFromCourseIdToCourseIdCompoundUniqueInput = {
    fromCourseId: string
    toCourseId: string
  }

  export type TransferMappingCountOrderByAggregateInput = {
    id?: SortOrder
    fromSchoolId?: SortOrder
    toSchoolId?: SortOrder
    fromCourseId?: SortOrder
    toCourseId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransferMappingMaxOrderByAggregateInput = {
    id?: SortOrder
    fromSchoolId?: SortOrder
    toSchoolId?: SortOrder
    fromCourseId?: SortOrder
    toCourseId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransferMappingMinOrderByAggregateInput = {
    id?: SortOrder
    fromSchoolId?: SortOrder
    toSchoolId?: SortOrder
    fromCourseId?: SortOrder
    toCourseId?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | EnumTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransferStatus[] | ListEnumTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransferStatus[] | ListEnumTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransferStatusFilter<$PrismaModel>
    _max?: NestedEnumTransferStatusFilter<$PrismaModel>
  }

  export type CourseCreateNestedManyWithoutSchoolInput = {
    create?: XOR<CourseCreateWithoutSchoolInput, CourseUncheckedCreateWithoutSchoolInput> | CourseCreateWithoutSchoolInput[] | CourseUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSchoolInput | CourseCreateOrConnectWithoutSchoolInput[]
    createMany?: CourseCreateManySchoolInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type TransferMappingCreateNestedManyWithoutFromSchoolInput = {
    create?: XOR<TransferMappingCreateWithoutFromSchoolInput, TransferMappingUncheckedCreateWithoutFromSchoolInput> | TransferMappingCreateWithoutFromSchoolInput[] | TransferMappingUncheckedCreateWithoutFromSchoolInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutFromSchoolInput | TransferMappingCreateOrConnectWithoutFromSchoolInput[]
    createMany?: TransferMappingCreateManyFromSchoolInputEnvelope
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
  }

  export type TransferMappingCreateNestedManyWithoutToSchoolInput = {
    create?: XOR<TransferMappingCreateWithoutToSchoolInput, TransferMappingUncheckedCreateWithoutToSchoolInput> | TransferMappingCreateWithoutToSchoolInput[] | TransferMappingUncheckedCreateWithoutToSchoolInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutToSchoolInput | TransferMappingCreateOrConnectWithoutToSchoolInput[]
    createMany?: TransferMappingCreateManyToSchoolInputEnvelope
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutSchoolInput = {
    create?: XOR<CourseCreateWithoutSchoolInput, CourseUncheckedCreateWithoutSchoolInput> | CourseCreateWithoutSchoolInput[] | CourseUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSchoolInput | CourseCreateOrConnectWithoutSchoolInput[]
    createMany?: CourseCreateManySchoolInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type TransferMappingUncheckedCreateNestedManyWithoutFromSchoolInput = {
    create?: XOR<TransferMappingCreateWithoutFromSchoolInput, TransferMappingUncheckedCreateWithoutFromSchoolInput> | TransferMappingCreateWithoutFromSchoolInput[] | TransferMappingUncheckedCreateWithoutFromSchoolInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutFromSchoolInput | TransferMappingCreateOrConnectWithoutFromSchoolInput[]
    createMany?: TransferMappingCreateManyFromSchoolInputEnvelope
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
  }

  export type TransferMappingUncheckedCreateNestedManyWithoutToSchoolInput = {
    create?: XOR<TransferMappingCreateWithoutToSchoolInput, TransferMappingUncheckedCreateWithoutToSchoolInput> | TransferMappingCreateWithoutToSchoolInput[] | TransferMappingUncheckedCreateWithoutToSchoolInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutToSchoolInput | TransferMappingCreateOrConnectWithoutToSchoolInput[]
    createMany?: TransferMappingCreateManyToSchoolInputEnvelope
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<CourseCreateWithoutSchoolInput, CourseUncheckedCreateWithoutSchoolInput> | CourseCreateWithoutSchoolInput[] | CourseUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSchoolInput | CourseCreateOrConnectWithoutSchoolInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutSchoolInput | CourseUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: CourseCreateManySchoolInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutSchoolInput | CourseUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutSchoolInput | CourseUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type TransferMappingUpdateManyWithoutFromSchoolNestedInput = {
    create?: XOR<TransferMappingCreateWithoutFromSchoolInput, TransferMappingUncheckedCreateWithoutFromSchoolInput> | TransferMappingCreateWithoutFromSchoolInput[] | TransferMappingUncheckedCreateWithoutFromSchoolInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutFromSchoolInput | TransferMappingCreateOrConnectWithoutFromSchoolInput[]
    upsert?: TransferMappingUpsertWithWhereUniqueWithoutFromSchoolInput | TransferMappingUpsertWithWhereUniqueWithoutFromSchoolInput[]
    createMany?: TransferMappingCreateManyFromSchoolInputEnvelope
    set?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    disconnect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    delete?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    update?: TransferMappingUpdateWithWhereUniqueWithoutFromSchoolInput | TransferMappingUpdateWithWhereUniqueWithoutFromSchoolInput[]
    updateMany?: TransferMappingUpdateManyWithWhereWithoutFromSchoolInput | TransferMappingUpdateManyWithWhereWithoutFromSchoolInput[]
    deleteMany?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
  }

  export type TransferMappingUpdateManyWithoutToSchoolNestedInput = {
    create?: XOR<TransferMappingCreateWithoutToSchoolInput, TransferMappingUncheckedCreateWithoutToSchoolInput> | TransferMappingCreateWithoutToSchoolInput[] | TransferMappingUncheckedCreateWithoutToSchoolInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutToSchoolInput | TransferMappingCreateOrConnectWithoutToSchoolInput[]
    upsert?: TransferMappingUpsertWithWhereUniqueWithoutToSchoolInput | TransferMappingUpsertWithWhereUniqueWithoutToSchoolInput[]
    createMany?: TransferMappingCreateManyToSchoolInputEnvelope
    set?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    disconnect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    delete?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    update?: TransferMappingUpdateWithWhereUniqueWithoutToSchoolInput | TransferMappingUpdateWithWhereUniqueWithoutToSchoolInput[]
    updateMany?: TransferMappingUpdateManyWithWhereWithoutToSchoolInput | TransferMappingUpdateManyWithWhereWithoutToSchoolInput[]
    deleteMany?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?: XOR<CourseCreateWithoutSchoolInput, CourseUncheckedCreateWithoutSchoolInput> | CourseCreateWithoutSchoolInput[] | CourseUncheckedCreateWithoutSchoolInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutSchoolInput | CourseCreateOrConnectWithoutSchoolInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutSchoolInput | CourseUpsertWithWhereUniqueWithoutSchoolInput[]
    createMany?: CourseCreateManySchoolInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutSchoolInput | CourseUpdateWithWhereUniqueWithoutSchoolInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutSchoolInput | CourseUpdateManyWithWhereWithoutSchoolInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type TransferMappingUncheckedUpdateManyWithoutFromSchoolNestedInput = {
    create?: XOR<TransferMappingCreateWithoutFromSchoolInput, TransferMappingUncheckedCreateWithoutFromSchoolInput> | TransferMappingCreateWithoutFromSchoolInput[] | TransferMappingUncheckedCreateWithoutFromSchoolInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutFromSchoolInput | TransferMappingCreateOrConnectWithoutFromSchoolInput[]
    upsert?: TransferMappingUpsertWithWhereUniqueWithoutFromSchoolInput | TransferMappingUpsertWithWhereUniqueWithoutFromSchoolInput[]
    createMany?: TransferMappingCreateManyFromSchoolInputEnvelope
    set?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    disconnect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    delete?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    update?: TransferMappingUpdateWithWhereUniqueWithoutFromSchoolInput | TransferMappingUpdateWithWhereUniqueWithoutFromSchoolInput[]
    updateMany?: TransferMappingUpdateManyWithWhereWithoutFromSchoolInput | TransferMappingUpdateManyWithWhereWithoutFromSchoolInput[]
    deleteMany?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
  }

  export type TransferMappingUncheckedUpdateManyWithoutToSchoolNestedInput = {
    create?: XOR<TransferMappingCreateWithoutToSchoolInput, TransferMappingUncheckedCreateWithoutToSchoolInput> | TransferMappingCreateWithoutToSchoolInput[] | TransferMappingUncheckedCreateWithoutToSchoolInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutToSchoolInput | TransferMappingCreateOrConnectWithoutToSchoolInput[]
    upsert?: TransferMappingUpsertWithWhereUniqueWithoutToSchoolInput | TransferMappingUpsertWithWhereUniqueWithoutToSchoolInput[]
    createMany?: TransferMappingCreateManyToSchoolInputEnvelope
    set?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    disconnect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    delete?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    update?: TransferMappingUpdateWithWhereUniqueWithoutToSchoolInput | TransferMappingUpdateWithWhereUniqueWithoutToSchoolInput[]
    updateMany?: TransferMappingUpdateManyWithWhereWithoutToSchoolInput | TransferMappingUpdateManyWithWhereWithoutToSchoolInput[]
    deleteMany?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutCoursesInput = {
    create?: XOR<SchoolCreateWithoutCoursesInput, SchoolUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutCoursesInput
    connect?: SchoolWhereUniqueInput
  }

  export type TransferMappingCreateNestedManyWithoutFromCourseInput = {
    create?: XOR<TransferMappingCreateWithoutFromCourseInput, TransferMappingUncheckedCreateWithoutFromCourseInput> | TransferMappingCreateWithoutFromCourseInput[] | TransferMappingUncheckedCreateWithoutFromCourseInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutFromCourseInput | TransferMappingCreateOrConnectWithoutFromCourseInput[]
    createMany?: TransferMappingCreateManyFromCourseInputEnvelope
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
  }

  export type TransferMappingCreateNestedManyWithoutToCourseInput = {
    create?: XOR<TransferMappingCreateWithoutToCourseInput, TransferMappingUncheckedCreateWithoutToCourseInput> | TransferMappingCreateWithoutToCourseInput[] | TransferMappingUncheckedCreateWithoutToCourseInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutToCourseInput | TransferMappingCreateOrConnectWithoutToCourseInput[]
    createMany?: TransferMappingCreateManyToCourseInputEnvelope
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
  }

  export type TransferMappingUncheckedCreateNestedManyWithoutFromCourseInput = {
    create?: XOR<TransferMappingCreateWithoutFromCourseInput, TransferMappingUncheckedCreateWithoutFromCourseInput> | TransferMappingCreateWithoutFromCourseInput[] | TransferMappingUncheckedCreateWithoutFromCourseInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutFromCourseInput | TransferMappingCreateOrConnectWithoutFromCourseInput[]
    createMany?: TransferMappingCreateManyFromCourseInputEnvelope
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
  }

  export type TransferMappingUncheckedCreateNestedManyWithoutToCourseInput = {
    create?: XOR<TransferMappingCreateWithoutToCourseInput, TransferMappingUncheckedCreateWithoutToCourseInput> | TransferMappingCreateWithoutToCourseInput[] | TransferMappingUncheckedCreateWithoutToCourseInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutToCourseInput | TransferMappingCreateOrConnectWithoutToCourseInput[]
    createMany?: TransferMappingCreateManyToCourseInputEnvelope
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SchoolUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<SchoolCreateWithoutCoursesInput, SchoolUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutCoursesInput
    upsert?: SchoolUpsertWithoutCoursesInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutCoursesInput, SchoolUpdateWithoutCoursesInput>, SchoolUncheckedUpdateWithoutCoursesInput>
  }

  export type TransferMappingUpdateManyWithoutFromCourseNestedInput = {
    create?: XOR<TransferMappingCreateWithoutFromCourseInput, TransferMappingUncheckedCreateWithoutFromCourseInput> | TransferMappingCreateWithoutFromCourseInput[] | TransferMappingUncheckedCreateWithoutFromCourseInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutFromCourseInput | TransferMappingCreateOrConnectWithoutFromCourseInput[]
    upsert?: TransferMappingUpsertWithWhereUniqueWithoutFromCourseInput | TransferMappingUpsertWithWhereUniqueWithoutFromCourseInput[]
    createMany?: TransferMappingCreateManyFromCourseInputEnvelope
    set?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    disconnect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    delete?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    update?: TransferMappingUpdateWithWhereUniqueWithoutFromCourseInput | TransferMappingUpdateWithWhereUniqueWithoutFromCourseInput[]
    updateMany?: TransferMappingUpdateManyWithWhereWithoutFromCourseInput | TransferMappingUpdateManyWithWhereWithoutFromCourseInput[]
    deleteMany?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
  }

  export type TransferMappingUpdateManyWithoutToCourseNestedInput = {
    create?: XOR<TransferMappingCreateWithoutToCourseInput, TransferMappingUncheckedCreateWithoutToCourseInput> | TransferMappingCreateWithoutToCourseInput[] | TransferMappingUncheckedCreateWithoutToCourseInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutToCourseInput | TransferMappingCreateOrConnectWithoutToCourseInput[]
    upsert?: TransferMappingUpsertWithWhereUniqueWithoutToCourseInput | TransferMappingUpsertWithWhereUniqueWithoutToCourseInput[]
    createMany?: TransferMappingCreateManyToCourseInputEnvelope
    set?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    disconnect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    delete?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    update?: TransferMappingUpdateWithWhereUniqueWithoutToCourseInput | TransferMappingUpdateWithWhereUniqueWithoutToCourseInput[]
    updateMany?: TransferMappingUpdateManyWithWhereWithoutToCourseInput | TransferMappingUpdateManyWithWhereWithoutToCourseInput[]
    deleteMany?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
  }

  export type TransferMappingUncheckedUpdateManyWithoutFromCourseNestedInput = {
    create?: XOR<TransferMappingCreateWithoutFromCourseInput, TransferMappingUncheckedCreateWithoutFromCourseInput> | TransferMappingCreateWithoutFromCourseInput[] | TransferMappingUncheckedCreateWithoutFromCourseInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutFromCourseInput | TransferMappingCreateOrConnectWithoutFromCourseInput[]
    upsert?: TransferMappingUpsertWithWhereUniqueWithoutFromCourseInput | TransferMappingUpsertWithWhereUniqueWithoutFromCourseInput[]
    createMany?: TransferMappingCreateManyFromCourseInputEnvelope
    set?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    disconnect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    delete?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    update?: TransferMappingUpdateWithWhereUniqueWithoutFromCourseInput | TransferMappingUpdateWithWhereUniqueWithoutFromCourseInput[]
    updateMany?: TransferMappingUpdateManyWithWhereWithoutFromCourseInput | TransferMappingUpdateManyWithWhereWithoutFromCourseInput[]
    deleteMany?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
  }

  export type TransferMappingUncheckedUpdateManyWithoutToCourseNestedInput = {
    create?: XOR<TransferMappingCreateWithoutToCourseInput, TransferMappingUncheckedCreateWithoutToCourseInput> | TransferMappingCreateWithoutToCourseInput[] | TransferMappingUncheckedCreateWithoutToCourseInput[]
    connectOrCreate?: TransferMappingCreateOrConnectWithoutToCourseInput | TransferMappingCreateOrConnectWithoutToCourseInput[]
    upsert?: TransferMappingUpsertWithWhereUniqueWithoutToCourseInput | TransferMappingUpsertWithWhereUniqueWithoutToCourseInput[]
    createMany?: TransferMappingCreateManyToCourseInputEnvelope
    set?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    disconnect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    delete?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    connect?: TransferMappingWhereUniqueInput | TransferMappingWhereUniqueInput[]
    update?: TransferMappingUpdateWithWhereUniqueWithoutToCourseInput | TransferMappingUpdateWithWhereUniqueWithoutToCourseInput[]
    updateMany?: TransferMappingUpdateManyWithWhereWithoutToCourseInput | TransferMappingUpdateManyWithWhereWithoutToCourseInput[]
    deleteMany?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
  }

  export type SchoolCreateNestedOneWithoutFromMappingsInput = {
    create?: XOR<SchoolCreateWithoutFromMappingsInput, SchoolUncheckedCreateWithoutFromMappingsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutFromMappingsInput
    connect?: SchoolWhereUniqueInput
  }

  export type SchoolCreateNestedOneWithoutToMappingsInput = {
    create?: XOR<SchoolCreateWithoutToMappingsInput, SchoolUncheckedCreateWithoutToMappingsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutToMappingsInput
    connect?: SchoolWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutFromMappingsInput = {
    create?: XOR<CourseCreateWithoutFromMappingsInput, CourseUncheckedCreateWithoutFromMappingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutFromMappingsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutToMappingsInput = {
    create?: XOR<CourseCreateWithoutToMappingsInput, CourseUncheckedCreateWithoutToMappingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutToMappingsInput
    connect?: CourseWhereUniqueInput
  }

  export type EnumTransferStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransferStatus
  }

  export type SchoolUpdateOneRequiredWithoutFromMappingsNestedInput = {
    create?: XOR<SchoolCreateWithoutFromMappingsInput, SchoolUncheckedCreateWithoutFromMappingsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutFromMappingsInput
    upsert?: SchoolUpsertWithoutFromMappingsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutFromMappingsInput, SchoolUpdateWithoutFromMappingsInput>, SchoolUncheckedUpdateWithoutFromMappingsInput>
  }

  export type SchoolUpdateOneRequiredWithoutToMappingsNestedInput = {
    create?: XOR<SchoolCreateWithoutToMappingsInput, SchoolUncheckedCreateWithoutToMappingsInput>
    connectOrCreate?: SchoolCreateOrConnectWithoutToMappingsInput
    upsert?: SchoolUpsertWithoutToMappingsInput
    connect?: SchoolWhereUniqueInput
    update?: XOR<XOR<SchoolUpdateToOneWithWhereWithoutToMappingsInput, SchoolUpdateWithoutToMappingsInput>, SchoolUncheckedUpdateWithoutToMappingsInput>
  }

  export type CourseUpdateOneRequiredWithoutFromMappingsNestedInput = {
    create?: XOR<CourseCreateWithoutFromMappingsInput, CourseUncheckedCreateWithoutFromMappingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutFromMappingsInput
    upsert?: CourseUpsertWithoutFromMappingsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutFromMappingsInput, CourseUpdateWithoutFromMappingsInput>, CourseUncheckedUpdateWithoutFromMappingsInput>
  }

  export type CourseUpdateOneRequiredWithoutToMappingsNestedInput = {
    create?: XOR<CourseCreateWithoutToMappingsInput, CourseUncheckedCreateWithoutToMappingsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutToMappingsInput
    upsert?: CourseUpsertWithoutToMappingsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutToMappingsInput, CourseUpdateWithoutToMappingsInput>, CourseUncheckedUpdateWithoutToMappingsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedEnumTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | EnumTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransferStatus[] | ListEnumTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransferStatus[] | ListEnumTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransferStatusFilter<$PrismaModel> | $Enums.TransferStatus
  }

  export type NestedEnumTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | EnumTransferStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransferStatus[] | ListEnumTransferStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransferStatus[] | ListEnumTransferStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransferStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransferStatusFilter<$PrismaModel>
    _max?: NestedEnumTransferStatusFilter<$PrismaModel>
  }

  export type CourseCreateWithoutSchoolInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fromMappings?: TransferMappingCreateNestedManyWithoutFromCourseInput
    toMappings?: TransferMappingCreateNestedManyWithoutToCourseInput
  }

  export type CourseUncheckedCreateWithoutSchoolInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fromMappings?: TransferMappingUncheckedCreateNestedManyWithoutFromCourseInput
    toMappings?: TransferMappingUncheckedCreateNestedManyWithoutToCourseInput
  }

  export type CourseCreateOrConnectWithoutSchoolInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSchoolInput, CourseUncheckedCreateWithoutSchoolInput>
  }

  export type CourseCreateManySchoolInputEnvelope = {
    data: CourseCreateManySchoolInput | CourseCreateManySchoolInput[]
    skipDuplicates?: boolean
  }

  export type TransferMappingCreateWithoutFromSchoolInput = {
    id?: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    toSchool: SchoolCreateNestedOneWithoutToMappingsInput
    fromCourse: CourseCreateNestedOneWithoutFromMappingsInput
    toCourse: CourseCreateNestedOneWithoutToMappingsInput
  }

  export type TransferMappingUncheckedCreateWithoutFromSchoolInput = {
    id?: string
    toSchoolId: string
    fromCourseId: string
    toCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingCreateOrConnectWithoutFromSchoolInput = {
    where: TransferMappingWhereUniqueInput
    create: XOR<TransferMappingCreateWithoutFromSchoolInput, TransferMappingUncheckedCreateWithoutFromSchoolInput>
  }

  export type TransferMappingCreateManyFromSchoolInputEnvelope = {
    data: TransferMappingCreateManyFromSchoolInput | TransferMappingCreateManyFromSchoolInput[]
    skipDuplicates?: boolean
  }

  export type TransferMappingCreateWithoutToSchoolInput = {
    id?: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fromSchool: SchoolCreateNestedOneWithoutFromMappingsInput
    fromCourse: CourseCreateNestedOneWithoutFromMappingsInput
    toCourse: CourseCreateNestedOneWithoutToMappingsInput
  }

  export type TransferMappingUncheckedCreateWithoutToSchoolInput = {
    id?: string
    fromSchoolId: string
    fromCourseId: string
    toCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingCreateOrConnectWithoutToSchoolInput = {
    where: TransferMappingWhereUniqueInput
    create: XOR<TransferMappingCreateWithoutToSchoolInput, TransferMappingUncheckedCreateWithoutToSchoolInput>
  }

  export type TransferMappingCreateManyToSchoolInputEnvelope = {
    data: TransferMappingCreateManyToSchoolInput | TransferMappingCreateManyToSchoolInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutSchoolInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutSchoolInput, CourseUncheckedUpdateWithoutSchoolInput>
    create: XOR<CourseCreateWithoutSchoolInput, CourseUncheckedCreateWithoutSchoolInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutSchoolInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutSchoolInput, CourseUncheckedUpdateWithoutSchoolInput>
  }

  export type CourseUpdateManyWithWhereWithoutSchoolInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutSchoolInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    credits?: FloatFilter<"Course"> | number
    description?: StringNullableFilter<"Course"> | string | null
    schoolId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type TransferMappingUpsertWithWhereUniqueWithoutFromSchoolInput = {
    where: TransferMappingWhereUniqueInput
    update: XOR<TransferMappingUpdateWithoutFromSchoolInput, TransferMappingUncheckedUpdateWithoutFromSchoolInput>
    create: XOR<TransferMappingCreateWithoutFromSchoolInput, TransferMappingUncheckedCreateWithoutFromSchoolInput>
  }

  export type TransferMappingUpdateWithWhereUniqueWithoutFromSchoolInput = {
    where: TransferMappingWhereUniqueInput
    data: XOR<TransferMappingUpdateWithoutFromSchoolInput, TransferMappingUncheckedUpdateWithoutFromSchoolInput>
  }

  export type TransferMappingUpdateManyWithWhereWithoutFromSchoolInput = {
    where: TransferMappingScalarWhereInput
    data: XOR<TransferMappingUpdateManyMutationInput, TransferMappingUncheckedUpdateManyWithoutFromSchoolInput>
  }

  export type TransferMappingScalarWhereInput = {
    AND?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
    OR?: TransferMappingScalarWhereInput[]
    NOT?: TransferMappingScalarWhereInput | TransferMappingScalarWhereInput[]
    id?: StringFilter<"TransferMapping"> | string
    fromSchoolId?: StringFilter<"TransferMapping"> | string
    toSchoolId?: StringFilter<"TransferMapping"> | string
    fromCourseId?: StringFilter<"TransferMapping"> | string
    toCourseId?: StringFilter<"TransferMapping"> | string
    status?: EnumTransferStatusFilter<"TransferMapping"> | $Enums.TransferStatus
    notes?: StringNullableFilter<"TransferMapping"> | string | null
    createdAt?: DateTimeFilter<"TransferMapping"> | Date | string
    updatedAt?: DateTimeFilter<"TransferMapping"> | Date | string
  }

  export type TransferMappingUpsertWithWhereUniqueWithoutToSchoolInput = {
    where: TransferMappingWhereUniqueInput
    update: XOR<TransferMappingUpdateWithoutToSchoolInput, TransferMappingUncheckedUpdateWithoutToSchoolInput>
    create: XOR<TransferMappingCreateWithoutToSchoolInput, TransferMappingUncheckedCreateWithoutToSchoolInput>
  }

  export type TransferMappingUpdateWithWhereUniqueWithoutToSchoolInput = {
    where: TransferMappingWhereUniqueInput
    data: XOR<TransferMappingUpdateWithoutToSchoolInput, TransferMappingUncheckedUpdateWithoutToSchoolInput>
  }

  export type TransferMappingUpdateManyWithWhereWithoutToSchoolInput = {
    where: TransferMappingScalarWhereInput
    data: XOR<TransferMappingUpdateManyMutationInput, TransferMappingUncheckedUpdateManyWithoutToSchoolInput>
  }

  export type SchoolCreateWithoutCoursesInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromMappings?: TransferMappingCreateNestedManyWithoutFromSchoolInput
    toMappings?: TransferMappingCreateNestedManyWithoutToSchoolInput
  }

  export type SchoolUncheckedCreateWithoutCoursesInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromMappings?: TransferMappingUncheckedCreateNestedManyWithoutFromSchoolInput
    toMappings?: TransferMappingUncheckedCreateNestedManyWithoutToSchoolInput
  }

  export type SchoolCreateOrConnectWithoutCoursesInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutCoursesInput, SchoolUncheckedCreateWithoutCoursesInput>
  }

  export type TransferMappingCreateWithoutFromCourseInput = {
    id?: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fromSchool: SchoolCreateNestedOneWithoutFromMappingsInput
    toSchool: SchoolCreateNestedOneWithoutToMappingsInput
    toCourse: CourseCreateNestedOneWithoutToMappingsInput
  }

  export type TransferMappingUncheckedCreateWithoutFromCourseInput = {
    id?: string
    fromSchoolId: string
    toSchoolId: string
    toCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingCreateOrConnectWithoutFromCourseInput = {
    where: TransferMappingWhereUniqueInput
    create: XOR<TransferMappingCreateWithoutFromCourseInput, TransferMappingUncheckedCreateWithoutFromCourseInput>
  }

  export type TransferMappingCreateManyFromCourseInputEnvelope = {
    data: TransferMappingCreateManyFromCourseInput | TransferMappingCreateManyFromCourseInput[]
    skipDuplicates?: boolean
  }

  export type TransferMappingCreateWithoutToCourseInput = {
    id?: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fromSchool: SchoolCreateNestedOneWithoutFromMappingsInput
    toSchool: SchoolCreateNestedOneWithoutToMappingsInput
    fromCourse: CourseCreateNestedOneWithoutFromMappingsInput
  }

  export type TransferMappingUncheckedCreateWithoutToCourseInput = {
    id?: string
    fromSchoolId: string
    toSchoolId: string
    fromCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingCreateOrConnectWithoutToCourseInput = {
    where: TransferMappingWhereUniqueInput
    create: XOR<TransferMappingCreateWithoutToCourseInput, TransferMappingUncheckedCreateWithoutToCourseInput>
  }

  export type TransferMappingCreateManyToCourseInputEnvelope = {
    data: TransferMappingCreateManyToCourseInput | TransferMappingCreateManyToCourseInput[]
    skipDuplicates?: boolean
  }

  export type SchoolUpsertWithoutCoursesInput = {
    update: XOR<SchoolUpdateWithoutCoursesInput, SchoolUncheckedUpdateWithoutCoursesInput>
    create: XOR<SchoolCreateWithoutCoursesInput, SchoolUncheckedCreateWithoutCoursesInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutCoursesInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutCoursesInput, SchoolUncheckedUpdateWithoutCoursesInput>
  }

  export type SchoolUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromMappings?: TransferMappingUpdateManyWithoutFromSchoolNestedInput
    toMappings?: TransferMappingUpdateManyWithoutToSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromMappings?: TransferMappingUncheckedUpdateManyWithoutFromSchoolNestedInput
    toMappings?: TransferMappingUncheckedUpdateManyWithoutToSchoolNestedInput
  }

  export type TransferMappingUpsertWithWhereUniqueWithoutFromCourseInput = {
    where: TransferMappingWhereUniqueInput
    update: XOR<TransferMappingUpdateWithoutFromCourseInput, TransferMappingUncheckedUpdateWithoutFromCourseInput>
    create: XOR<TransferMappingCreateWithoutFromCourseInput, TransferMappingUncheckedCreateWithoutFromCourseInput>
  }

  export type TransferMappingUpdateWithWhereUniqueWithoutFromCourseInput = {
    where: TransferMappingWhereUniqueInput
    data: XOR<TransferMappingUpdateWithoutFromCourseInput, TransferMappingUncheckedUpdateWithoutFromCourseInput>
  }

  export type TransferMappingUpdateManyWithWhereWithoutFromCourseInput = {
    where: TransferMappingScalarWhereInput
    data: XOR<TransferMappingUpdateManyMutationInput, TransferMappingUncheckedUpdateManyWithoutFromCourseInput>
  }

  export type TransferMappingUpsertWithWhereUniqueWithoutToCourseInput = {
    where: TransferMappingWhereUniqueInput
    update: XOR<TransferMappingUpdateWithoutToCourseInput, TransferMappingUncheckedUpdateWithoutToCourseInput>
    create: XOR<TransferMappingCreateWithoutToCourseInput, TransferMappingUncheckedCreateWithoutToCourseInput>
  }

  export type TransferMappingUpdateWithWhereUniqueWithoutToCourseInput = {
    where: TransferMappingWhereUniqueInput
    data: XOR<TransferMappingUpdateWithoutToCourseInput, TransferMappingUncheckedUpdateWithoutToCourseInput>
  }

  export type TransferMappingUpdateManyWithWhereWithoutToCourseInput = {
    where: TransferMappingScalarWhereInput
    data: XOR<TransferMappingUpdateManyMutationInput, TransferMappingUncheckedUpdateManyWithoutToCourseInput>
  }

  export type SchoolCreateWithoutFromMappingsInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutSchoolInput
    toMappings?: TransferMappingCreateNestedManyWithoutToSchoolInput
  }

  export type SchoolUncheckedCreateWithoutFromMappingsInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutSchoolInput
    toMappings?: TransferMappingUncheckedCreateNestedManyWithoutToSchoolInput
  }

  export type SchoolCreateOrConnectWithoutFromMappingsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutFromMappingsInput, SchoolUncheckedCreateWithoutFromMappingsInput>
  }

  export type SchoolCreateWithoutToMappingsInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseCreateNestedManyWithoutSchoolInput
    fromMappings?: TransferMappingCreateNestedManyWithoutFromSchoolInput
  }

  export type SchoolUncheckedCreateWithoutToMappingsInput = {
    id?: string
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutSchoolInput
    fromMappings?: TransferMappingUncheckedCreateNestedManyWithoutFromSchoolInput
  }

  export type SchoolCreateOrConnectWithoutToMappingsInput = {
    where: SchoolWhereUniqueInput
    create: XOR<SchoolCreateWithoutToMappingsInput, SchoolUncheckedCreateWithoutToMappingsInput>
  }

  export type CourseCreateWithoutFromMappingsInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutCoursesInput
    toMappings?: TransferMappingCreateNestedManyWithoutToCourseInput
  }

  export type CourseUncheckedCreateWithoutFromMappingsInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    toMappings?: TransferMappingUncheckedCreateNestedManyWithoutToCourseInput
  }

  export type CourseCreateOrConnectWithoutFromMappingsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutFromMappingsInput, CourseUncheckedCreateWithoutFromMappingsInput>
  }

  export type CourseCreateWithoutToMappingsInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    school: SchoolCreateNestedOneWithoutCoursesInput
    fromMappings?: TransferMappingCreateNestedManyWithoutFromCourseInput
  }

  export type CourseUncheckedCreateWithoutToMappingsInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    schoolId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fromMappings?: TransferMappingUncheckedCreateNestedManyWithoutFromCourseInput
  }

  export type CourseCreateOrConnectWithoutToMappingsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutToMappingsInput, CourseUncheckedCreateWithoutToMappingsInput>
  }

  export type SchoolUpsertWithoutFromMappingsInput = {
    update: XOR<SchoolUpdateWithoutFromMappingsInput, SchoolUncheckedUpdateWithoutFromMappingsInput>
    create: XOR<SchoolCreateWithoutFromMappingsInput, SchoolUncheckedCreateWithoutFromMappingsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutFromMappingsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutFromMappingsInput, SchoolUncheckedUpdateWithoutFromMappingsInput>
  }

  export type SchoolUpdateWithoutFromMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutSchoolNestedInput
    toMappings?: TransferMappingUpdateManyWithoutToSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutFromMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutSchoolNestedInput
    toMappings?: TransferMappingUncheckedUpdateManyWithoutToSchoolNestedInput
  }

  export type SchoolUpsertWithoutToMappingsInput = {
    update: XOR<SchoolUpdateWithoutToMappingsInput, SchoolUncheckedUpdateWithoutToMappingsInput>
    create: XOR<SchoolCreateWithoutToMappingsInput, SchoolUncheckedCreateWithoutToMappingsInput>
    where?: SchoolWhereInput
  }

  export type SchoolUpdateToOneWithWhereWithoutToMappingsInput = {
    where?: SchoolWhereInput
    data: XOR<SchoolUpdateWithoutToMappingsInput, SchoolUncheckedUpdateWithoutToMappingsInput>
  }

  export type SchoolUpdateWithoutToMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutSchoolNestedInput
    fromMappings?: TransferMappingUpdateManyWithoutFromSchoolNestedInput
  }

  export type SchoolUncheckedUpdateWithoutToMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutSchoolNestedInput
    fromMappings?: TransferMappingUncheckedUpdateManyWithoutFromSchoolNestedInput
  }

  export type CourseUpsertWithoutFromMappingsInput = {
    update: XOR<CourseUpdateWithoutFromMappingsInput, CourseUncheckedUpdateWithoutFromMappingsInput>
    create: XOR<CourseCreateWithoutFromMappingsInput, CourseUncheckedCreateWithoutFromMappingsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutFromMappingsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutFromMappingsInput, CourseUncheckedUpdateWithoutFromMappingsInput>
  }

  export type CourseUpdateWithoutFromMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutCoursesNestedInput
    toMappings?: TransferMappingUpdateManyWithoutToCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutFromMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toMappings?: TransferMappingUncheckedUpdateManyWithoutToCourseNestedInput
  }

  export type CourseUpsertWithoutToMappingsInput = {
    update: XOR<CourseUpdateWithoutToMappingsInput, CourseUncheckedUpdateWithoutToMappingsInput>
    create: XOR<CourseCreateWithoutToMappingsInput, CourseUncheckedCreateWithoutToMappingsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutToMappingsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutToMappingsInput, CourseUncheckedUpdateWithoutToMappingsInput>
  }

  export type CourseUpdateWithoutToMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    school?: SchoolUpdateOneRequiredWithoutCoursesNestedInput
    fromMappings?: TransferMappingUpdateManyWithoutFromCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutToMappingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    schoolId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromMappings?: TransferMappingUncheckedUpdateManyWithoutFromCourseNestedInput
  }

  export type CourseCreateManySchoolInput = {
    id?: string
    code: string
    name: string
    credits: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingCreateManyFromSchoolInput = {
    id?: string
    toSchoolId: string
    fromCourseId: string
    toCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingCreateManyToSchoolInput = {
    id?: string
    fromSchoolId: string
    fromCourseId: string
    toCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromMappings?: TransferMappingUpdateManyWithoutFromCourseNestedInput
    toMappings?: TransferMappingUpdateManyWithoutToCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromMappings?: TransferMappingUncheckedUpdateManyWithoutFromCourseNestedInput
    toMappings?: TransferMappingUncheckedUpdateManyWithoutToCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    credits?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingUpdateWithoutFromSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toSchool?: SchoolUpdateOneRequiredWithoutToMappingsNestedInput
    fromCourse?: CourseUpdateOneRequiredWithoutFromMappingsNestedInput
    toCourse?: CourseUpdateOneRequiredWithoutToMappingsNestedInput
  }

  export type TransferMappingUncheckedUpdateWithoutFromSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    toSchoolId?: StringFieldUpdateOperationsInput | string
    fromCourseId?: StringFieldUpdateOperationsInput | string
    toCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingUncheckedUpdateManyWithoutFromSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    toSchoolId?: StringFieldUpdateOperationsInput | string
    fromCourseId?: StringFieldUpdateOperationsInput | string
    toCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingUpdateWithoutToSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromSchool?: SchoolUpdateOneRequiredWithoutFromMappingsNestedInput
    fromCourse?: CourseUpdateOneRequiredWithoutFromMappingsNestedInput
    toCourse?: CourseUpdateOneRequiredWithoutToMappingsNestedInput
  }

  export type TransferMappingUncheckedUpdateWithoutToSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromSchoolId?: StringFieldUpdateOperationsInput | string
    fromCourseId?: StringFieldUpdateOperationsInput | string
    toCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingUncheckedUpdateManyWithoutToSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromSchoolId?: StringFieldUpdateOperationsInput | string
    fromCourseId?: StringFieldUpdateOperationsInput | string
    toCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingCreateManyFromCourseInput = {
    id?: string
    fromSchoolId: string
    toSchoolId: string
    toCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingCreateManyToCourseInput = {
    id?: string
    fromSchoolId: string
    toSchoolId: string
    fromCourseId: string
    status?: $Enums.TransferStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransferMappingUpdateWithoutFromCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromSchool?: SchoolUpdateOneRequiredWithoutFromMappingsNestedInput
    toSchool?: SchoolUpdateOneRequiredWithoutToMappingsNestedInput
    toCourse?: CourseUpdateOneRequiredWithoutToMappingsNestedInput
  }

  export type TransferMappingUncheckedUpdateWithoutFromCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromSchoolId?: StringFieldUpdateOperationsInput | string
    toSchoolId?: StringFieldUpdateOperationsInput | string
    toCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingUncheckedUpdateManyWithoutFromCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromSchoolId?: StringFieldUpdateOperationsInput | string
    toSchoolId?: StringFieldUpdateOperationsInput | string
    toCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingUpdateWithoutToCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromSchool?: SchoolUpdateOneRequiredWithoutFromMappingsNestedInput
    toSchool?: SchoolUpdateOneRequiredWithoutToMappingsNestedInput
    fromCourse?: CourseUpdateOneRequiredWithoutFromMappingsNestedInput
  }

  export type TransferMappingUncheckedUpdateWithoutToCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromSchoolId?: StringFieldUpdateOperationsInput | string
    toSchoolId?: StringFieldUpdateOperationsInput | string
    fromCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferMappingUncheckedUpdateManyWithoutToCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    fromSchoolId?: StringFieldUpdateOperationsInput | string
    toSchoolId?: StringFieldUpdateOperationsInput | string
    fromCourseId?: StringFieldUpdateOperationsInput | string
    status?: EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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