import React from 'react'

import { BackTop } from 'antd'

import RouterBeforeEach from '@/router/RouterBeforeEach'

function App() {
  // 路由渲染
  // useRoutes 可以将数组对象形式的路由，直接在页面上使用。
  // const element = useRoutes(Router)

  return (
    <div className="App">
      <BackTop />
      <RouterBeforeEach />
    </div>
  )
}

export default App
