export namespace Query {
  export interface Pager {
    take: number
    offset: number
  }

  export enum OrderDirection {
    ASC = 0,
    DESC = 1,
  }

  export interface Order {
    field: string
    direction: OrderDirection.ASC | OrderDirection.DESC | 0 | 1
  }

  export interface SearchField {
    path: Array<string>
  }

  export interface Search {
    fields: Array<SearchField>
    value: string
  }

  export enum Operator {
    AND = 0,
    OR = 1,
  }

  export interface IDType {
    operator?: Operator.AND | Operator.OR | 0 | 1
    conditions?: {
      exists?: {
        value: boolean
      }
      eq?: {
        value: string
      }
      in?: {
        values: Array<string>
      }
    }
  }

  export interface DateRangeType {
    operator?: Operator.AND | Operator.OR | 0 | 1
    conditions?: {
      from?: {
        value: Date
      }
      to?: {
        value: Date
      }
    }
  }

  export interface DateType {
    operator?: Operator.AND | Operator.OR | 0 | 1
    conditions?: {
      exists?: {
        value: boolean
      }
      eq?: {
        value: Date
      }
      lt?: {
        value: Date
      }
      gt?: {
        value: Date
      }
    }
  }

  export interface StringType {
    operator?: Operator.AND | Operator.OR | 0 | 1
    conditions?: {
      eq?: {
        value: string
      }
      in?: {
        values: Array<string>
      }
      contains?: {
        value: string
      }
    }
  }

  export interface ArrayStringType {
    operator?: Operator.AND | Operator.OR | 0 | 1
    conditions?: {
      eq?: {
        value: Array<string>
      }
      contains?: {
        value: Array<string>
      }
    }
  }

  export interface NumberType {
    operator?: Operator.AND | Operator.OR | 0 | 1
    conditions?: {
      eq?: {
        value: number
      }
      in?: {
        values: Array<number>
      }
    }
  }

  export interface BigIntType {
    operator?: Operator.AND | Operator.OR | 0 | 1
    conditions?: {
      eq?: {
        value: bigint
      }
      in?: {
        values: Array<bigint>
      }
    }
  }
}
