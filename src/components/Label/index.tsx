import React, { memo, useState, useRef, useEffect } from 'react'

import { AutoComplete, Input, Tag, InputRef } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { LabelProps, TagType } from './type'

const Label: React.FC<LabelProps> = ({ tags, removeTag }) => {
  const inputRef = useRef<InputRef>(null)

  const [inputValue, setInputValue] = useState('')

  const [inputVisible, setInputVisible] = useState(false)

  const showInput = () => {
    setInputVisible(true)
  }

  // 删除选择的标签页
  const handleClose = (tag: TagType) => {
    removeTag && removeTag(tag.id)
  }

  // 当前点击新建标签，展示输入框，并且让输入框获取焦点
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus()
    }
  }, [inputVisible])

  return (
    <div className="tags" style={{ marginTop: '15px' }}>
      {tags.map((item) => {
        return (
          <Tag key={item.id} closable onClose={() => handleClose(item)}>
            {item.label}
          </Tag>
        )
      })}
      {inputVisible && (
        <AutoComplete
          style={{ width: '90px' }}
          children={
            <Input
              ref={inputRef}
              onBlur={() => setInputVisible(false)}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onPressEnter={() => {
                setInputValue('')
                setInputVisible(false)
              }}
            />
          }
        />
      )}
      {!inputVisible && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> 绑定标签
        </Tag>
      )}
    </div>
  )
}

export default memo(Label)
