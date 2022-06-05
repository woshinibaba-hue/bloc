import React, { memo, useState } from 'react'

import { Input, Button } from 'antd'

import Editor from '@/components/Markdown/components/Editor'

import { WriteWrapper } from './style'

function Write() {
  // 保存Markdown文本内容
  const [mdContent, setMdContent] = useState('')
  const [title, setTitle] = useState('')

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  // 上传图片
  const handleImage = (file: File) => {
    console.log(file)
  }

  const clear = () => {
    setMdContent('')
    setTitle('')
  }

  const publicWrite = () => {
    console.log(mdContent, title)
  }

  return (
    <WriteWrapper>
      <div className="header-handler">
        <Input placeholder="请输入标题" value={title} onChange={handleTitle} />
        <div className="handeler">
          <Button size="middle" onClick={clear}>
            清空
          </Button>
          <Button size="middle" type="primary" onClick={publicWrite}>
            发布
          </Button>
        </div>
      </div>
      <Editor
        mdContent={mdContent}
        handleImage={handleImage}
        setMdContent={setMdContent}
      />
    </WriteWrapper>
  )
}

export default memo(Write)
