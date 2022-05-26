import React from 'react'

import { useRoutes } from 'react-router-dom'

import routers from './router'

function App() {
  // 路由渲染
  // useRoutes 可以将数组对象形式的路由，直接在页面上使用。
  const element = useRoutes(routers)

  return <div className="App">{element}</div>
}

export default App
