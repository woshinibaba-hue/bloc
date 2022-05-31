import React, { memo } from 'react'

import { Input, Comment, Avatar, Form, Button } from 'antd'

import { EditorProps } from '../Editor/types'

const { TextArea } = Input

const EditorInput: React.FC<EditorProps> = ({
  onChange,
  value,
  submitting,
  onSubmit,
  mainText
}) => {
  const onKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === 'Enter' && value?.trim()) {
      onSubmit!()
    }
  }
  return (
    <Comment
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="头像" />}
      content={
        <>
          <Form.Item>
            <TextArea
              allowClear
              showCount
              autoSize={{ minRows: 3 }}
              onChange={onChange}
              value={value}
              placeholder={`输入${mainText}（Enter换行，Ctrl + Enter发送）`}
              onKeyUp={onKeyUp}
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
          </Form.Item>
        </>
      }
    />
  )
}

export default memo(EditorInput)
