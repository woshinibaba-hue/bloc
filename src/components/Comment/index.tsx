import React from 'react'

import List from './List'
import Editor from './Editor'

import { CommentStyled } from './styled'

import { CommentProps } from './types'

const Comments: React.FC<CommentProps> = ({
  value,
  onChange,
  onSubmit,
  submitting,
  mainText,
  list,
  pageSize = 5
}) => {
  return (
    <CommentStyled>
      {/* 评论/留言 框 */}
      <Editor
        onChange={onChange}
        value={value}
        onSubmit={onSubmit}
        mainText={mainText}
        submitting={submitting}
      />

      {/* 评论/留言 列表 */}
      <List comments={list} titleText={mainText} pageSize={pageSize} />
    </CommentStyled>
  )
}

export default React.memo(Comments)
