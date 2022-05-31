import { CommentItemType } from '../Item/types'

export type CommentListProps = {
  comments: CommentItemType[]
  titleText?: string
  pageSize?: number
}
