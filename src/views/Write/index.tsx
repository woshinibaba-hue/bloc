import React, { memo, useState } from 'react'

import { Input, Button } from 'antd'
import Editor from 'for-editor'

import { WriteWrapper } from './style'

function Write() {
  // 保存Markdown文本内容
  const [mdContent, setMdContent] = useState('')
  const [title, setTitle] = useState('')

  const handleEditorChange = (value: string) => {
    setMdContent(value)
  }

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

  // 编辑器工具栏配置
  const toolbarConfig = {
    h1: true, // h1
    h2: true, // h2
    h3: true, // h3
    h4: true, // h4
    img: true, // 图片
    link: true, // 链接
    code: true, // 代码块
    preview: true, // 预览
    expand: true, // 全屏
    /* v0.0.9 */
    undo: true, // 撤销
    redo: true, // 重做
    /* v0.2.3 */
    subfield: true // 单双栏模式
  }

  return (
    <WriteWrapper>
      <div className="header-handler">
        <Input placeholder="请输入标题" value={title} onChange={handleTitle} />
        <div className="handeler">
          <Button size="middle" onClick={clear}>
            清空
          </Button>
          <Button size="middle" type="primary">
            发布
          </Button>
        </div>
      </div>
      <Editor
        value={mdContent}
        onChange={handleEditorChange}
        addImg={handleImage}
        preview
        subfield
        height="570px"
        fontSize="22px"
        toolbar={toolbarConfig}
      />
    </WriteWrapper>
  )
}

export default memo(Write)
