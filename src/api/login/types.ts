export type UserLogin = {
  email: string
  password: string
}

export type ImageType = {
  id: number[]
  filesPath: { url: string; name: string }[]
}

export type RegisterType = {
  username: string
  mobile: string
  email: string
  password: string
  avatar?: string
}

export interface ILoginRes {
  id?: number
  username?: string
  email?: string
  mobile?: string
  avatar?: string
  referral?: string
  token?: string
  auto?: number | string
}
