import React, { memo, useState } from 'react'

import { Space, Divider } from 'antd'

import classNames from 'classnames'

import {
  LikeFilled,
  LikeOutlined,
  MessageFilled,
  MessageOutlined
} from '@ant-design/icons'

import format from '@/utils/format'

import { CommentItemStyle } from './syled'
import { ICommentItemProps } from './types'

const CommitItem: React.FC<ICommentItemProps> = ({ comment }) => {
  const [like, setLike] = useState(true)

  return (
    <CommentItemStyle>
      <div className="avatar">
        <img src={comment.avatar} alt={comment.username} />
      </div>
      <div className="content">
        <div className="content-header">
          <span className="name">{comment.username}</span>
          <span className="time">{format.formatTime(comment.createtime)}</span>
        </div>
        <div className="comment">{comment.content}</div>
        <div className="handler">
          <Space split={<Divider type="vertical" />}>
            <Space className={classNames([{ active: like }])}>
              {like ? <LikeFilled /> : <LikeOutlined />}
              <span className="count">66</span>
            </Space>
            <Space>
              <MessageOutlined />
              <span className="count">99</span>
            </Space>
          </Space>
        </div>
      </div>
    </CommentItemStyle>
  )
}

export default memo(CommitItem)
