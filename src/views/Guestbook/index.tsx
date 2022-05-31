import React, { memo, useState } from 'react'

import Comment from '@/components/Comment'

function Guestbook() {
  const [guestbook, setGuestbook] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGuestbook(e.target.value)
  }

  const onSubmit = () => {
    console.log(guestbook)
  }

  const data = Array.from({ length: 23 }).map((_, i) => ({
    username: '前端吴彦祖',
    avatar:
      'https://p3-passport.byteacctimg.com/img/user-avatar/f0b821163b109a64e2b8a5189d27de67~300x300.image',
    content: '你是真的要我狗命，看完后我觉得自己啥都不是？？？？',
    createtime: new Date()
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
      />
    </div>
  )
}

export default memo(Guestbook)
