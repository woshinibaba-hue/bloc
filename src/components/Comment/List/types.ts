import { CommentItemType } from '../Item/types'

export type CommentListProps = {
  comments: CommentItemType[]
  titleText?: string
  pageSize?: number
  handlerLike?: (id: number) => void
  handlerMessage?: (id: number) => void
  isPagination?: boolean
  reply: (id: number, content: string) => void
}
