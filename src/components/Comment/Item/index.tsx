import React, { memo, useState } from 'react'

import { Space, Divider } from 'antd'

import classNames from 'classnames'

import {
  LikeFilled,
  LikeOutlined,
  MessageFilled,
  MessageOutlined,
  DeleteOutlined
} from '@ant-design/icons'

import format from '@/utils/format'

import EditorInput from '../EditorInput'

import { CommentItemStyle } from './syled'
import { ICommentItemProps } from './types'

const CommitItem: React.FC<ICommentItemProps> = ({
  comment,
  handlerLike,
  handlerMessage,
  reply,
  mainText,
  children
}) => {
  const [like, setLike] = useState(true)
  const [isReplyMessage, setIsReplyMessage] = useState(false)
  const [message, setMessage] = useState('')

  const messageClikc = () => {
    if (handlerMessage) {
      handlerMessage(comment.id)
      setIsReplyMessage(!isReplyMessage)
    }
  }

  const likeClick = () => {
    if (handlerLike) {
      handlerLike(comment.id)
      setLike(!like)
    }
  }

  const handlerSubmit = () => {
    if (reply) {
      reply(comment.id, message)
    }
  }

  const handlerChange = (value: string) => {
    setMessage(value)
  }

  return (
    <CommentItemStyle mainMarginBottom={!!children}>
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
            <Space
              className={classNames([{ active: like }])}
              onClick={likeClick}
            >
              {like ? <LikeFilled /> : <LikeOutlined />}
              <span className="count">66</span>
            </Space>
            <Space
              onClick={messageClikc}
              className={classNames([{ active: isReplyMessage }])}
            >
              {!isReplyMessage ? (
                <>
                  <MessageOutlined />
                  <span className="count">99</span>
                </>
              ) : (
                <>
                  <MessageFilled />
                  <span className="count">????????????</span>
                </>
              )}
            </Space>
            <div className="del">
              <DeleteOutlined style={{ marginRight: '6px' }} />
              ??????
            </div>
          </Space>

          {isReplyMessage && (
            <EditorInput
              isAvatar={false}
              onChange={handlerChange}
              onSubmit={handlerSubmit}
              value={message}
              mainText="??????"
              isFocus
            />
          )}
          {children && <div className="reply-message">{children}</div>}
        </div>
      </div>
    </CommentItemStyle>
  )
}

export default memo(CommitItem)
