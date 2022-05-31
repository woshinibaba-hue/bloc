import React, { memo } from 'react'

import { List } from 'antd'

import CommentItem from '../Item'

import { ListStyled } from './styled'

const data = Array.from({ length: 23 }).map((_, i) => ({
  username: '前端吴彦祖',
  avatar:
    'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image',
  content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
  createtime: new Date()
}))

const CommentList: React.FC = () => {
  return (
    <ListStyled>
      <div className="header">评论列表</div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 3
        }}
        dataSource={data}
        renderItem={(item) => {
          return <CommentItem comment={item} />
        }}
      />
    </ListStyled>
  )
}

export default memo(CommentList)
