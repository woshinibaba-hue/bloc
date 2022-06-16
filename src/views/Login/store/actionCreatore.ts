import { ZAction } from '@/store/types'
import { ILoginRes } from '@/api/login/types'
import { Action, PayloadType } from './types'

export const loginAction = (user: ILoginRes): ZAction<Action, PayloadType> => ({
  type: 'Login',
  payload: {
    user
  }
})

export const prevUrlAction = (
  prevUrl: string
): ZAction<Action, PayloadType> => ({
  type: 'PrevUrl',
  payload: {
    prevUrl
  }
})

export const logoutAction = (): ZAction<Action, PayloadType> => ({
  type: 'Login',
  payload: {
    user: {}
  }
})
