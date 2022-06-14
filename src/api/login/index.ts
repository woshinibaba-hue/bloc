import request from '@/server'
import { RegisterType, UserLogin, ILoginRes } from './types'

// 获取登录验证码
export const getLoginCode = () => {
  return request.get({
    url: '/getCaptcha'
  })
}

// 验证登录验证码
export const checkLoginCode = (captcha: string) => {
  return request.post<boolean>({
    url: '/verifyCaptcha',
    data: {
      captcha
    }
  })
}

// 注册
export const register = (data: RegisterType) => {
  return request.post({
    url: '/user',
    data
  })
}

// 登录
export const login = (data: UserLogin) => {
  return request.post<ILoginRes>({
    url: '/login',
    data
  })
}
