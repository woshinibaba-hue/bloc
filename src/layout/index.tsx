import React, { memo } from 'react'

import { Outlet } from 'react-router-dom'
import { Layout, Divider } from 'antd'

import { LayOutStyle } from './style'

import Nav from './components/Nav'
import Tags from './components/Tags'

const { Header, Sider, Content } = Layout

function LayOut() {
  return (
    <LayOutStyle>
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
            {/* 路由出口 */}
            <Outlet />
          </Content>
          <Sider>侧边栏组件</Sider>
        </Layout>
      </Layout>
    </LayOutStyle>
  )
}

export default memo(LayOut)
