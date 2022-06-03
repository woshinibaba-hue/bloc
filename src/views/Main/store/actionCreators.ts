import { RootThunkAction } from '@/store/types'
import { ActionType, CountAction, CountState } from './types'

// 定义action
export const increment: (num: number) => ActionType<CountState> = (count) => ({
  type: 'increment',
  payload: {
    count
  }
})

export const decrement = () => ({
  type: 'decrement'
})

// 定义异步action
export const incrementAsync = (): RootThunkAction<CountAction> => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'increment' })
    }, 1000)
  }
}

export const decrementAsync = (): RootThunkAction<CountAction> => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: 'decrement' })
    }, 1000)
  }
}
