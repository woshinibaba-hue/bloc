import dayjs from 'dayjs'

export type CommentItemType = {
  username: string
  avatar: string
  content: string
  createtime: dayjs.ConfigType
}

export interface ICommentItemProps {
  comment: CommentItemType
}
