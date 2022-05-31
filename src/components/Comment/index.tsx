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
  mainText
}) => {
  return (
    <CommentStyled>
      {/* 评论框 */}
      <Editor
        onChange={onChange}
        value={value}
        onSubmit={onSubmit}
        mainText={mainText}
        submitting={submitting}
      />
      {/* 评论列表 */}
      <List />
    </CommentStyled>
  )
}

export default React.memo(Comments)
