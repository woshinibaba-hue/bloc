import React, { memo, useState, useEffect } from 'react'

import { Outlet, useLocation } from 'react-router-dom'
import { Layout, Divider, Affix } from 'antd'

import AffixNav from '@/components/Header/AffixNav'
import Tags from '@/components/Tags'
import Nav from '../components/Header/Nav'

import { LayOutStyle } from './style'

const { Header, Content } = Layout

function LayOut() {
  const location = useLocation()

  const [isAffxe, setAffxe] = useState(false)

  // 当容器固定后触发的钩子
  const onChange = (affixed?: boolean) => {
    setAffxe(affixed ?? false)
  }

  // 激活的标签页
  const [activeTag, setActiveTag] = useState(1)

  // 是否展示固定标签页
  const IsShowAffix = () => {
    if (location.pathname === '/') {
      return (
        <Affix offsetTop={0} onChange={onChange}>
          <Header className="header_tags">
            <div className="tags">
              <div className="navs">
                {isAffxe ? (
                  <AffixNav activeTag={activeTag} setActiveTag={setActiveTag} />
                ) : (
                  <Tags activeTag={activeTag} setActiveTag={setActiveTag} />
                )}
              </div>
            </div>
          </Header>
        </Affix>
      )
    }
    return <div style={{ display: 'none' }}>111</div>
  }

  useEffect(() => {
    setAffxe(false)
  }, [location.pathname])

  return (
    <LayOutStyle
      isAffixTags={isAffxe}
      isAffixNav={location.pathname === '/'}
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
        <IsShowAffix />
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
