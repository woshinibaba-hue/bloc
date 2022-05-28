import React, { memo } from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import { Layout, Divider } from 'antd'

import { LayOutStyle } from './style'

import Nav from './components/Nav'
import Tags from './components/Tags'

const { Header, Sider, Content } = Layout

function LayOut() {
  const location = useLocation()

  return (
    <LayOutStyle mainWidth={location.pathname === '/write' ? '960px' : '700px'}>
      <Layout>
        <Header>
          <div className="navs">
            <Nav />
          </div>
        </Header>
        <Divider />
        <Header className="header_tags">
          <div className="tags">
            <Tags />
          </div>
        </Header>
        <Layout className="main">
          <Content>
            <Outlet />
          </Content>
          {location.pathname === '/write' ? '' : <Sider>侧边栏组件</Sider>}
        </Layout>
      </Layout>
    </LayOutStyle>
  )
}

export default memo(LayOut)
