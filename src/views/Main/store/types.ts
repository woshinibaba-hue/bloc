export type CountState = {
  count: number
}

type Action = 'increment' | 'decrement'

export type CountAction = {
  type: Action
}

export interface ActionType<T> extends CountAction {
  payload: T
}
