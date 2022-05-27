import React from 'react'

import { Outlet } from 'react-router-dom'

function Boo() {
  return (
    <div>
      Boo
      {/* 配置嵌套子路由出口 */}
      <Outlet />
    </div>
  )
}

export default Boo
