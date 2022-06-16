import React, { memo, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { prevUrlAction, logoutAction } from '@/views/Login/store/actionCreatore'

import { Input, Button, Avatar, Menu, Dropdown } from 'antd'
import { BellFilled, UserOutlined } from '@ant-design/icons'

import storage from '@/utils/storage'

import { RootStore } from '@/store/types'
import WaitingModal from '../WaitingModal'

import ZMenu from '../../Menu'

import { NavStyle } from './style'

const { Search } = Input

const items = [
  { label: '首页', key: '/' },
  { label: '留言', key: '/guestbook' },
  { label: '等你来答', key: '/waiting' },
  { label: '写文章', key: '/write' }
]

function Nav() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const handlerClick = (key: string | number) => {
    navigate(key as string)
  }

  const [isOpen, setIsOpen] = useState(false)

  const { user } = useSelector(
    (state: RootStore) => ({
      user: state.loginStore.user
    }),
    shallowEqual
  )

  const login = () => {
    dispatch(prevUrlAction(location.pathname))
    navigate('/login')
  }

  const logout = () => {
    storage.remove('user')
    storage.remove('user_token')
    dispatch(logoutAction())
  }

  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: <span>我的主页</span>
        },
        {
          key: '2',
          label: <span>个人设置</span>
        },
        {
          key: '3',
          label: <span onClick={logout}>退出登录</span>
        }
      ]}
    />
  )

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

      <div className="user">
        {user?.token ? (
          <Dropdown overlay={menu} placement="bottomLeft">
            <Avatar size={40} icon={<UserOutlined />} src={user.avatar} />
          </Dropdown>
        ) : (
          <span className="login" onClick={login}>
            请先登录
          </span>
        )}
      </div>

      <WaitingModal isOpen={isOpen} close={setIsOpen} />
    </NavStyle>
  )
}

export default memo(Nav)
