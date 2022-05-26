import React, { lazy } from 'react'

import { RouteObject } from 'react-router-dom'

const Main = lazy(() => import('@/views/Main'))
const Foo = lazy(() => import('@/views/Foo'))
const Boo = lazy(() => import('@/views/Boo'))
const NotFound = lazy(() => import('@/views/NotFound'))

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
    element: <Boo />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
