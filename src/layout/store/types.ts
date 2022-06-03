export type LayoutStore = {
  activeTag: number
}

type Action = 'SET_ACTIVE_TAG'

export type LayoutAction = {
  type: Action
  payload: {
    activeTag: number
  }
}
