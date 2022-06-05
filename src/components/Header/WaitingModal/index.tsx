import React, { useState } from 'react'

import { Modal, Button, AutoComplete, Input } from 'antd'

import Label from '@/components/Label'
import { TagType } from '@/components/Label/type'

import { WaitingModalProps } from './types'
import { WaitingModalContainer } from './style'

const WaitingModal: React.FC<WaitingModalProps> = ({
  isOpen = true,
  close
}) => {
  const [tags, setTags] = useState<TagType[]>([
    { id: 1, label: 'Tag 1' },
    { id: 2, label: 'Tag 2' },
    { id: 3, label: 'Tag 3' }
  ])

  const removeTag = (id: number) => {
    console.log(id)
  }

  return (
    <WaitingModalContainer>
      <Modal
        visible={isOpen}
        onCancel={() => close(false)}
        footer={[
          <Button type="primary" key={1}>
            发布问题
          </Button>
        ]}
        destroyOnClose
        closable={false}
      >
        <AutoComplete
          style={{ width: '100%' }}
          placeholder="写下你的问题，准确地描述问题更容易得到解答"
          children={<Input.TextArea autoSize={{ minRows: 3, maxRows: 10 }} />}
        />
        <Label tags={tags} removeTag={removeTag} />
      </Modal>
    </WaitingModalContainer>
  )
}

export default React.memo(WaitingModal)
