import axios, { AxiosError, AxiosInstance } from 'axios'

import { IRequestConfig, IDataResult } from './type'

class Request {
  private instance: AxiosInstance

  constructor(requestConfig: IRequestConfig) {
    this.instance = axios.create(requestConfig)

    // 给每个单独的请求配置添加拦截器
    this.instance.interceptors.request.use(
      requestConfig.interceptors?.requestInstance,
      requestConfig.interceptors?.requestInstanceCatch
    )

    this.instance.interceptors.response.use(
      requestConfig.interceptors?.responseInstance,
      requestConfig.interceptors?.responseInstanceCatch
    )

    // 给所有的axios实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      }
    )
  }

  // 请求方法
  private request<T = any>(requestConfig: IRequestConfig) {
    return new Promise<IDataResult<T>>((resolve, reject) => {
      this.instance
        .request<any, IDataResult<T>>(requestConfig)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: IRequestConfig) {
    return this.request<T>({ ...config, method: 'get' })
  }

  post<T = any>(config: IRequestConfig) {
    return this.request<T>({ ...config, method: 'post' })
  }

  put<T = any>(config: IRequestConfig) {
    return this.request<T>({ ...config, method: 'put' })
  }

  delete<T = any>(config: IRequestConfig) {
    return this.request<T>({ ...config, method: 'delete' })
  }
}

export default Request
