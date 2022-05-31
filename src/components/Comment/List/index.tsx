import React, { memo } from 'react'

import { List } from 'antd'

import CommentItem from '../Item'

import { ListStyled } from './styled'

import { CommentListProps } from './types'

const CommentList: React.FC<CommentListProps> = ({
  comments,
  titleText,
  pageSize = 5
}) => {
  return (
    <ListStyled>
      <div className="header">{titleText}列表</div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize
        }}
        dataSource={comments}
        renderItem={(item) => {
          return <CommentItem comment={item} />
        }}
      />
    </ListStyled>
  )
}

export default memo(CommentList)
