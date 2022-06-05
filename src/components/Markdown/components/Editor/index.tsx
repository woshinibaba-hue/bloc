import React, { memo, useState } from 'react'

import Editor from 'for-editor'

import { EditorWrapper } from './style'

import { EditorProps } from './types'

const Write: React.FC<EditorProps> = ({
  mdContent,
  handleImage,
  setMdContent,
  isToolbar = true
}) => {
  // 编辑器工具栏配置
  const toolbarConfig = isToolbar
    ? {
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
    : {}

  return (
    <EditorWrapper>
      <Editor
        value={mdContent}
        onChange={(value) => setMdContent(value)}
        addImg={handleImage}
        preview
        subfield
        height="570px"
        fontSize="22px"
        toolbar={toolbarConfig}
      />
    </EditorWrapper>
  )
}

export default memo(Write)
