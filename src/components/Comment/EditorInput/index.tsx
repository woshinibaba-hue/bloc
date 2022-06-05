import React, { memo, useEffect } from 'react'

import { Input, Comment, Avatar, Form, Button } from 'antd'

import { EditorProps } from '../Editor/types'

const { TextArea } = Input

const EditorInput: React.FC<EditorProps> = ({
  onChange,
  value,
  submitting,
  onSubmit,
  mainText,
  isAvatar = true,
  isFocus = false
}) => {
  const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === 'Enter' && value?.trim()) {
      onSubmit()
    }
  }

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  useEffect(() => {
    return () => {
      // 当组件被销毁的时候，清空输入框的内容
      onChange('')
    }
  }, [])

  return (
    <Comment
      avatar={
        isAvatar && (
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="头像" />
        )
      }
      content={
        <>
          <Form.Item>
            <TextArea
              allowClear
              showCount
              autoSize={{ minRows: 3 }}
              onChange={onChangeText}
              value={value}
              placeholder={`输入${mainText}内容（Enter换行，Ctrl + Enter发送）`}
              onKeyUp={onKeyUp}
              ref={(input) => {
                isFocus && input && input.focus()
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              loading={submitting}
              onClick={onSubmit}
              type="primary"
              disabled={!value.trim()}
            >
              {mainText}
            </Button>
            <span style={{ marginLeft: '10px', color: '#86909c' }}>
              Ctrl + Enter
            </span>
          </Form.Item>
        </>
      }
    />
  )
}

export default memo(EditorInput)
