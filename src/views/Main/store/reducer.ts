// reducer 纯函数

import { CountState, ActionType } from './types'

// 定义初始化数据
const initialState: CountState = {
  count: 0
}

// 定义reducer(纯函数)
export default function reducer(
  state: CountState,
  action: ActionType<{ count: number }>
) {
  switch (action?.type) {
    case 'increment':
      return {
        count: action.payload.count + state.count
      }
    case 'decrement':
      return {
        count: state.count - 1
      }
    default:
      return initialState
  }
}
