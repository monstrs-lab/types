import type { ExcludeFunctions } from './exclude-functions.types.js'

export type ExtractProperties<ObjectType> = {
  [Property in keyof ObjectType as ExcludeFunctions<ObjectType, Property>]: ObjectType[Property]
}
