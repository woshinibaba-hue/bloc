import { LoginState, LoginAction } from './types'

const initState: LoginState = {
  user: {}
}

export default function reducer(state: LoginState, action: LoginAction) {
  switch (action.type) {
    case 'Login':
      return {
        ...state,
        user: action.payload
      }
    default:
      return initState
  }
}
