import React, { memo } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

import { Tabs, Input, Button, Avatar, Menu, Dropdown } from 'antd'
import { BellFilled, MessageFilled, UserOutlined } from '@ant-design/icons'

import { NavStyle } from './style'

const { TabPane } = Tabs
const { Search } = Input

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: <Link to="/">我的主页</Link>
      },
      {
        key: '2',
        label: <Link to="/">个人设置</Link>
      },
      {
        key: '3',
        label: <Link to="/">退出登录</Link>
      }
    ]}
  />
)

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
      <Dropdown overlay={menu} placement="bottomLeft">
        <Avatar size={40} icon={<UserOutlined />} />
      </Dropdown>
    </NavStyle>
  )
}

export default memo(Nav)
