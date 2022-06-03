import React, { memo } from 'react'

import { Input, Button } from 'antd'

import Tags from '../../Tags'

import { NavStyle } from './style'

import { IProps } from './types'

const { Search } = Input

const Nav: React.FC<IProps> = ({ activeTag }) => {
  return (
    <NavStyle>
      <div className="left">
        <div className="logo">
          <h2>logo</h2>
        </div>
        <Tags activeTag={activeTag} />
      </div>
      <div className="right">
        <Search placeholder="请输入搜索内容" bordered={false} />
        <Button shape="round" type="primary">
          提问
        </Button>
      </div>
    </NavStyle>
  )
}

export default memo(Nav)
