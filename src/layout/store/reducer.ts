import { LayoutStore, LayoutAction } from './types'

const initStore: LayoutStore = {
  activeTag: 1
}

export default function reducer(
  state: LayoutStore,
  action: LayoutAction
): LayoutStore {
  switch (action.type) {
    case 'SET_ACTIVE_TAG':
      return {
        ...state,
        activeTag: action.payload.activeTag
      }
    default:
      return initStore
  }
}
