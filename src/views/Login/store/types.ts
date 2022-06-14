import { ILoginRes } from '@/api/login/types'

export type LoginState = {
  user: ILoginRes
}

export type Action = 'Login'

export type LoginAction<T = any> = {
  type: Action
  payload: T
}
