import React, { lazy } from 'react'

import { RouteObject } from 'react-router-dom'

const Main = lazy(() => import('@/views/Main'))
const Foo = lazy(() => import('@/views/Foo'))
const Boo = lazy(() => import('@/views/Boo'))
const NotFound = lazy(() => import('@/views/NotFound'))

const Child1 = lazy(() => import('@/views/Boo/child/child_1'))
const Child2 = lazy(() => import('@/views/Boo/child/child_2'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />
  },
  {
    path: '/foo',
    element: <Foo />
  },
  {
    path: '/boo',
    element: <Boo />,
    children: [
      {
        // 嵌套路由可以省略 父级路由的 path 下面就相当于 /boo/child1/:id
        path: 'child1/:id',
        element: <Child1 />
      },
      {
        path: 'child2',
        element: <Child2 />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
