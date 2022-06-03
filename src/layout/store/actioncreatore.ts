import { LayoutAction } from './types'

export const setActiveTag = (activeTag: number): LayoutAction => ({
  type: 'SET_ACTIVE_TAG',
  payload: {
    activeTag
  }
})
