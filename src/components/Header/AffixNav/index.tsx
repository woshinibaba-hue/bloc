import React, { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Input, Button } from 'antd'

import { NavStyle } from './style'

const { Search } = Input

function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <NavStyle>
      <div className="left">
        <div className="logo">
          <h2>logo</h2>
        </div>
        <div className="tags">标签页</div>
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
