import React, { memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Input, Button, Avatar, Menu, Dropdown } from 'antd'
import { BellFilled, MessageFilled, UserOutlined } from '@ant-design/icons'

import WaitingModal from '../WaitingModal'

import ZMenu from '../../Menu'

import { NavStyle } from './style'

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

const items = [
  { label: '首页', key: '/' },
  { label: '留言', key: '/guestbook' },
  { label: '等你来答', key: '/waiting' },
  { label: '写文章', key: '/write' }
]

function Nav() {
  const navigate = useNavigate()

  const handlerClick = (key: string | number) => {
    navigate(key as string)
  }

  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavStyle>
      <div className="logo">
        <h2>logo</h2>
      </div>
      <ZMenu items={items} onClick={handlerClick} />
      <Search placeholder="请输入搜索内容" bordered={false} />
      <Button shape="round" type="primary" onClick={() => setIsOpen(!isOpen)}>
        提问
      </Button>
      <BellFilled />
      <MessageFilled />
      <Dropdown overlay={menu} placement="bottomLeft">
        <Avatar size={40} icon={<UserOutlined />} />
      </Dropdown>

      <WaitingModal isOpen={isOpen} close={setIsOpen} />
    </NavStyle>
  )
}

export default memo(Nav)
