interface IUserBase {
  password: string
  email: string
}

// 用户登录字段
export interface ILoginData extends IUserBase {
  remember: boolean
  captcha: string
}

// 用户注册字段
export interface IRegisterData extends IUserBase {
  username: string
  mobile: string
  avatar: string
}
