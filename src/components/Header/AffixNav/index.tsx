import React, { memo, useState } from 'react'

import { Input, Button } from 'antd'

import Tags from '../../Tags'

import { NavStyle } from './style'

import WaitingModal from '../WaitingModal'

const { Search } = Input

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavStyle>
      <div className="left">
        <div className="logo">
          <h2>logo</h2>
        </div>
        <Tags />
      </div>
      <div className="right">
        <Search placeholder="请输入搜索内容" bordered={false} />
        <Button shape="round" type="primary" onClick={() => setIsOpen(!isOpen)}>
          提问
        </Button>
      </div>

      <WaitingModal isOpen={isOpen} close={setIsOpen} />
    </NavStyle>
  )
}

export default memo(Nav)
