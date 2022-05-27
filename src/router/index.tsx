import React, { lazy, LazyExoticComponent, Suspense } from 'react'

import { RouteObject, useRoutes } from 'react-router-dom'

interface IRoute {
  path: string
  component: LazyExoticComponent<React.ComponentType>
  children?: IRoute[]
}

const routers: IRoute[] = [
  {
    path: '/',
    component: lazy(() => import('@/layout'))
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
