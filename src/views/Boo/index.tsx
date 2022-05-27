import React from 'react'

import { Outlet, useNavigate, Link } from 'react-router-dom'

function Boo() {
  const navigate = useNavigate()

  const to = (path: string) => {
    navigate(path, { replace: true })
  }
  return (
    <div>
      Boo
      {/* 配置嵌套子路由出口 */}
      <button onClick={() => to('/boo/child1/1')}>1</button>
      <button onClick={() => to('/boo/child2')}>2</button>
      <Link to="/boo/child1/1">1</Link>
      <Link to="/boo/child2">2</Link>
      <Outlet />
    </div>
  )
}

export default Boo
