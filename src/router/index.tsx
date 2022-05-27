import React, { lazy, LazyExoticComponent, Suspense } from 'react'

import { RouteObject, useRoutes } from 'react-router-dom'

// const Main = lazy(() => import('@/views/Main'))
// const Foo = lazy(() => import('@/views/Foo'))
// const Boo = lazy(() => import('@/views/Boo'))
// const NotFound = lazy(() => import('@/views/NotFound'))

// const Child1 = lazy(() => import('@/views/Boo/child/child_1'))
// const Child2 = lazy(() => import('@/views/Boo/child/child_2'))

interface IRoute {
  path: string
  component: LazyExoticComponent<React.ComponentType>
  children?: IRoute[]
}

const routers: IRoute[] = [
  {
    path: '/',
    component: lazy(() => import('@/views/Main'))
  },
  {
    path: '/foo',
    component: lazy(() => import('@/views/Foo'))
  },
  {
    path: '/boo',
    component: lazy(() => import('@/views/Boo')),
    children: [
      {
        path: 'child1/:id',
        component: lazy(() => import('@/views/Boo/child/child_1'))
      },
      {
        path: 'child2',
        component: lazy(() => import('@/views/Boo/child/child_2'))
      }
    ]
  },
  {
    path: '*',
    component: lazy(() => import('@/views/NotFound'))
  }
]

const syncRouter = (routes: IRoute[]): RouteObject[] => {
  const mRoutes: RouteObject[] = []

  routes.forEach((route) => {
    mRoutes.push({
      path: route.path,
      element: (
        <Suspense fallback={<div>Loding...</div>}>
          <route.component />
        </Suspense>
      ),
      children: route.children && syncRouter(route.children)
    })
  })

  return mRoutes
}

export default () => useRoutes(syncRouter(routers))
