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
    direction: 0 | 1 | OrderDirection.ASC | OrderDirection.DESC
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

  export interface ID {
    operator?: 0 | 1 | Operator.AND | Operator.OR
    conditions?: {
      eq?: string
      in?: string[]
    }
  }

  export interface DateRange {
    operator?: 0 | 1 | Operator.AND | Operator.OR
    conditions?: {
      from: Date
      to: Date
    }
  }
}
