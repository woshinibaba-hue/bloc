import React, { memo, useState } from 'react'

import Comment from '@/components/Comment'

function Guestbook() {
  const [guestbook, setGuestbook] = useState('')

  const onChange = (value: string) => {
    setGuestbook(value)
  }

  const onSubmit = () => {
    console.log('留言', guestbook)
  }

  const handlerReply = (id: number, content: string) => {
    console.log('回复留言', id, content)
  }

  const handlerLike = (id: number) => {
    console.log('点击了喜欢按钮', id)
  }

  const handlerMessage = (id: number) => {
    console.log('点击了评论按钮', id)
  }

  const data = Array.from({ length: 23 }).map((_, i) => ({
    id: i,
    username: `前端吴彦祖_${i * 10}`,
    avatar:
      'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image',
    content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
    createtime: new Date(),
    children: (function test() {
      if (i % 2) {
        return Array.from({ length: 2 }).map((item, id) => ({
          id: (id + 1) * 10,
          username: `前端吴彦祖_${(id + 1) * 100}`,
          avatar:
            'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image',
          content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
          createtime: new Date()
        }))
      }

      return undefined
    })()
  }))

  return (
    <div className="bg">
      <Comment
        onChange={onChange}
        onSubmit={onSubmit}
        value={guestbook}
        mainText="留言"
        list={data}
        pageSize={10}
        handlerLike={handlerLike}
        handlerMessage={handlerMessage}
        reply={handlerReply}
      />
    </div>
  )
}

export default memo(Guestbook)
