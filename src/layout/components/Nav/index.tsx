import React, { memo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { Tabs, Input, Button } from 'antd'
import { BellFilled, MessageFilled } from '@ant-design/icons'

import { NavStyle } from './style'

const { TabPane } = Tabs
const { Search } = Input

function Nav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <NavStyle>
      <div className="logo">
        <h2>logo</h2>
      </div>
      <Tabs
        defaultActiveKey={location.pathname}
        onChange={(path: string) => navigate(path)}
      >
        <TabPane tab="首页" key="/" />
        <TabPane tab="留言" key="/guestbook" />
        <TabPane tab="写文章" key="/write" />
      </Tabs>
      <Search placeholder="请输入搜索内容" bordered={false} />
      <Button shape="round" type="primary">
        提问
      </Button>
      <BellFilled />
      <MessageFilled />
    </NavStyle>
  )
}

export default memo(Nav)
