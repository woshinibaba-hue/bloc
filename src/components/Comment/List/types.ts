import React from 'react'

export interface CommentItem {
  author: string
  avatar: string
  content: React.ReactNode
  datetime: string
}

export type CommentListProps = { comments: CommentItem[] }
