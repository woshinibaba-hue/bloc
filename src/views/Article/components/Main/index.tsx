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

  const onChange = (value: string) => {
    setComment(value)
  }

  const onSumit = () => {
    console.log('发布评论', comment)
  }

  const handlerReply = (id: number, content: string) => {
    console.log('回复评论', id, content)
  }

  const handlerLike = (id: number) => {
    console.log('点击了喜欢按钮', id)
  }

  const handlerMessage = (id: number) => {
    console.log('点击了评论按钮', id)
  }

  const data = Array.from({ length: 23 }).map((_, i) => ({
    id: i,
    username: '前端吴彦祖',
    avatar:
      'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image',
    content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
    createtime: new Date(),
    children: Array.from({ length: 3 }).map((item, id) => ({
      id: (id + 1) * 10,
      username: `前端吴彦祖_${(id + 1) * 10}`,
      avatar:
        'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image',
      content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
      createtime: new Date()
    }))
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
            <a href="#comment">
              <MessageFilled className="icon" />
            </a>
          </Badge>
        </div>
      </MainStyle>
      <CommentStyle id="comment">
        <Comment
          onChange={onChange}
          value={comment}
          mainText="评论"
          onSubmit={onSumit}
          list={data}
          handlerLike={handlerLike}
          handlerMessage={handlerMessage}
          reply={handlerReply}
        />
      </CommentStyle>
    </div>
  )
}

export default memo(Main)
