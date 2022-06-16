import { ILoginRes } from '@/api/login/types'

export type LoginState = {
  user: ILoginRes
  prevUrl: string
}

export type Action = 'Login' | 'PrevUrl' | 'Logout'

export type PayloadType = {
  user?: ILoginRes
  prevUrl?: string
}

export type LoginAction = {
  type: Action
  payload: PayloadType
}
