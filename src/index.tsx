import React from 'react'
import ReactDOM from 'react-dom/client'

import zhCN from 'antd/lib/locale/zh_CN'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import reportWebVitals from './reportWebVitals'

// css样式重置
import 'normalize.css'
import './assets/css/base.css'

// 引入min样式可以解决 WARNING in ./node_modules/antd/dist/antd.css 警告
import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode> // 是否开启严格模式
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
  // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
