import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { CountState } from '@/views/Main/store/types'
import { LayoutStore } from '@/layout/store/types'
import { LoginState } from '@/views/Login/store/types'

import { AppDispatch } from './index'

export type RootStore = {
  countStore: CountState
  layoutStore: LayoutStore
  LoginStore: LoginState
}

// 第一个类型参数：thunk action 返回值类型
// 第二个类型参数：Redux 状态的类型
// 第三个类型参数：thunk action 额外参数的类型
// 第四个类型参数：Redux 中所有 action 的类型
export type RootThunkAction<T extends Action> = ThunkAction<
  void,
  RootStore,
  unknown,
  T
>

export interface ZAction<A = any, P = any> extends Action<A> {
  payload?: P
}

export type { AppDispatch }
