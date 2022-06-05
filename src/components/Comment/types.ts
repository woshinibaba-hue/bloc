import { EditorProps } from './Editor/types'

import { CommentItemType } from './Item/types'

export interface CommentProps extends EditorProps {
  list: CommentItemType[]
  pageSize?: number
  handlerLike?: (id: number) => void
  handlerMessage?: (id: number) => void
  reply: (id: number, content: string) => void
}
