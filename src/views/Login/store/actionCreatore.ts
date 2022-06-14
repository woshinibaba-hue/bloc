import { ZAction } from '@/store/types'
import { ILoginRes } from '@/api/login/types'
import { Action } from './types'

export const loginAction = (user: ILoginRes): ZAction<Action> => ({
  type: 'Login',
  payload: {
    user
  }
})
