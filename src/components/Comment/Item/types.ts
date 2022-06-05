import React from 'react'
import dayjs from 'dayjs'

export type CommentItemType = {
  id: number
  username: string
  avatar: string
  content: string
  createtime: dayjs.ConfigType
  children?: CommentItemType[]
}

export interface ICommentItemProps {
  comment: CommentItemType
  mainText: string
  handlerLike?: (id: number) => void
  handlerMessage?: (id: number) => void
  reply: (id: number, content: string) => void
  children?: React.ReactNode
}
