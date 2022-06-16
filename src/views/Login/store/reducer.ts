import storage from '@/utils/storage'

import { LoginState, LoginAction } from './types'

const initState: LoginState = {
  user: storage.get('user') ?? {},
  prevUrl: '/'
}

export default function reducer(state: LoginState, action: LoginAction) {
  switch (action.type) {
    case 'Login':
      return {
        ...state,
        user: action.payload.user
      }
    case 'PrevUrl':
      return {
        ...state,
        prevUrl: action.payload.prevUrl
      }
    default:
      return initState
  }
}
