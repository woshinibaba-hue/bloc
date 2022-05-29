import React, { memo, useState, useEffect } from 'react'

import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import { useRoutes, useLocation, useNavigate } from 'react-router-dom'

import routers from './index'

// react 18 chilren 需要单独给类型
interface IProps {
  // children: React.ReactNode
}

const token = ''

// 需要登录才可访问的路由
const whiteList = ['/write']

// 上一次的访问路由
let lastPathname = ''

const RouterBeforeEach: React.FC<IProps> = () => {
  const [auto, setAuto] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const element = useRoutes(routers)

  useEffect(() => {
    // 如果当前用户访问登录页，并且当前用户已经登录成功，则跳转至首页
    if (location.pathname === '/login' && token) {
      navigate('/')
      return
    }

    // 如果访问的页面需要登录才能访问，并且token不存在，则提示是否跳转至登录页面
    if (whiteList.includes(location.pathname) && !token) {
      setAuto(false)
      Modal.confirm({
        title: '文章发表页面需要登录才能访问',
        icon: <ExclamationCircleOutlined />,
        content: '是否跳转至登录页面？',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          // 如果用户点击确定，则跳转至登录页面
          navigate('/login')
        },
        onCancel() {
          // 如果用户点击取消，则跳转至上一次访问的页面
          navigate(lastPathname)
        }
      })
    } else {
      lastPathname = location.pathname
      setAuto(true)
    }
  }, [location.pathname, token])

  return auto ? element : null
}

export default memo(RouterBeforeEach)
