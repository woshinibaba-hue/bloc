import React, { memo, useState, useEffect } from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import { Layout, Divider, Affix } from 'antd'

import AffixNav from '@/components/Header/AffixNav'
import Nav from '../components/Header/Nav'
import Tags from './components/Tags'

import { LayOutStyle } from './style'

const { Header, Sider, Content } = Layout

function LayOut() {
  const location = useLocation()

  const [isAffxe, setAffxe] = useState(false)

  // 当容器固定后触发的钩子
  const onChange = (affixed?: boolean) => {
    setAffxe(affixed ?? false)
  }

  // 是否展示固定标签页
  const isShowAffix = () => {
    if (location.pathname === '/') {
      return (
        <Affix offsetTop={0} onChange={onChange}>
          <Header className="header_tags">
            <div className="tags">
              <div className="navs">{isAffxe ? <AffixNav /> : <Tags />}</div>
            </div>
          </Header>
        </Affix>
      )
    }
    return ''
  }

  useEffect(() => {
    setAffxe(false)
  }, [location.pathname])

  return (
    <LayOutStyle
      isAffixNav={location.pathname !== '/'}
      isMainBg={
        location.pathname !== '/' && !location.pathname.includes('/article')
      }
    >
      <Layout>
        <Header className="nav-header">
          <div className="navs">
            <Nav />
          </div>
        </Header>
        <Divider />
        {isShowAffix()}
        <Layout className="main">
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </LayOutStyle>
  )
}

export default memo(LayOut)
