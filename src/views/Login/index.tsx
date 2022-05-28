import React, { memo } from 'react'

import { Tabs } from 'antd'

import LoginForm from './components/Login'
import Register from './components/Register'

import { LoginContainer } from './style'

const { TabPane } = Tabs

function Login() {
  return (
    <LoginContainer>
      <div className="container">
        <div className="title">一名菜鸡</div>
        <div className="main">
          <div className="main_title">
            <span>一名菜鸡</span>
          </div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="用户登录" key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab="用户注册" key="2">
              <Register />
            </TabPane>
          </Tabs>
          <div className="hint">
            登录/注册验证后勾选自动登录，下次无需登录，注册即代表同意《菜鸡协议》《隐私保护指引》
          </div>
        </div>
      </div>
    </LoginContainer>
  )
}

export default memo(Login)
