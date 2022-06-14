import React, { memo, useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { Form, Input, Button, Checkbox, message } from 'antd'

import { UserOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons'

import { loginAction } from '@/views/Login/store/actionCreatore'

import storage from '@/utils/storage'

import { debounce } from '@/utils/debounce'

import * as loginReq from '@/api/login'
import * as Logintype from '@/api/login/types'

import { LoginStyle } from './style'
import { ILoginData } from '../../types'

function Login() {
  const navigator = useNavigate()
  const [code, setCode] = useState<string>('')

  const dispatch = useDispatch()

  // 获取验证码
  async function getCode() {
    const res = await loginReq.getLoginCode()
    setCode(res as any)
  }

  useEffect(() => {
    getCode()
  }, [])

  const codeRef = useRef(null)

  // 登录
  const onFinish = async (values: ILoginData) => {
    if (values.remember) {
      // 存储用户名和密码
      storage.set('login_info', {
        email: values.email,
        password: values.password
      })
    } else {
      storage.remove('login_info')
    }

    const user = await loginReq.login(values)
    dispatch(loginAction(user.data))
    storage.set('user', user.data)
    storage.set('user_token', user.data.token)
    message.success(user.message)
    navigator('/')
  }

  // 验证验证码
  const checkCode = debounce(async (_: any, value: string) => {
    if (!value?.trim()) return Promise.reject(new Error('验证码不能为空！'))

    try {
      const res = await loginReq.checkLoginCode(value)
      return Promise.resolve(res)
    } catch (e: any) {
      return Promise.reject(e.response.data)
    }
  })

  return (
    <LoginStyle>
      <Form
        ref={codeRef}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
          email: storage.get<Logintype.UserLogin>('login_info')?.email,
          password: storage.get<Logintype.UserLogin>('login_info')?.password
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          hasFeedback
          rules={[
            { required: true, message: '邮箱不能为空' },
            { type: 'email', message: '邮箱格式不正确' }
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="邮箱"
          />
        </Form.Item>
        <Form.Item
          name="password"
          hasFeedback
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
          />
        </Form.Item>
        <Form.Item
          className="captcha"
          hasFeedback
          name="captcha"
          extra={
            <div
              onClick={getCode}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(code)}`}
                alt=""
              />
              <span>点击刷新验证码</span>
            </div>
          }
          rules={[{ validator: checkCode }]}
        >
          <Input prefix={<KeyOutlined />} placeholder="验证码" key={1} />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="#">
            忘记密码
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </LoginStyle>
  )
}

export default memo(Login)
