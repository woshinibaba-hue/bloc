import React, { memo, useState } from 'react'

import { Link } from 'react-router-dom'

import Comment from '@/components/Comment'
import { Button, Badge } from 'antd'
import { PlusOutlined, LikeFilled, MessageFilled } from '@ant-design/icons'
import { MarkdownProps } from '@/components/Markdown/types'

import Markdown from '@/components/Markdown'

import { MainStyle, CommentStyle } from './styled'

function Main({ textContent }: MarkdownProps) {
  // 评论
  const [comment, setComment] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const onSumit = () => {
    console.log('发布评论', comment)
  }

  const data = Array.from({ length: 23 }).map((_, i) => ({
    username: '前端吴彦祖',
    avatar:
      'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image',
    content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
    createtime: new Date()
  }))

  return (
    <div>
      <MainStyle>
        <div className="title">我是标题</div>
        <div className="info">
          <div className="main">
            <div className="avatar">
              <img
                src="https://p3-passport.byteacctimg.com/img/user-avatar/c2187f61d1fe229e6da86541432ba7d3~300x300.image"
                alt="avatar"
              />
            </div>
            <div className="info-name">
              <p className="name">子弈</p>
              <div className="meta">
                <span className="date">2021年07月22日 09:00</span>
                <span className="dot">·</span>
                <span className="read">阅读 109543</span>
              </div>
            </div>
          </div>
          <Button type="primary" ghost>
            <PlusOutlined />
            关注
          </Button>
        </div>
        <Markdown textContent={textContent} />
        <div className="tags">
          <div className="sort">
            分类: <Link to="/">前端</Link>
          </div>
          <div className="tag">
            标签: <Link to="/">React</Link>
          </div>
        </div>
        <div className="options">
          <Badge count={99} color="#1d7dfa" offset={[0, 5]}>
            <LikeFilled className="icon active" />
          </Badge>
          <Badge count={99} color="#c2c8d1" offset={[0, 5]}>
            <MessageFilled className="icon" />
          </Badge>
        </div>
      </MainStyle>
      <CommentStyle>
        <Comment
          onChange={onChange}
          value={comment}
          mainText="评论"
          onSubmit={onSumit}
          list={data}
        />
      </CommentStyle>
    </div>
  )
}

export default memo(Main)
