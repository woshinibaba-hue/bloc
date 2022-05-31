import React, { memo } from 'react'

import { Anchor } from 'antd'
import { LikeTwoTone, EyeTwoTone } from '@ant-design/icons'

import MarkNav from 'markdown-navbar'

import { MarkdownProps } from '@/components/Markdown/types'

import { SidebarStyled } from './styled'

const Sidebar: React.FC<MarkdownProps> = ({ textContent }) => {
  return (
    <SidebarStyled>
      <div className="info">
        <div className="info-head">
          <div className="avatar">
            <img
              src="https://p3-passport.byteacctimg.com/img/user-avatar/c2187f61d1fe229e6da86541432ba7d3~300x300.image"
              alt="avatar"
            />
          </div>
          <div className="info-name">
            <p className="name ellipsis-1">子弈</p>
            <p className="referral ellipsis-1">个人简介：啊哈哈哈哈哈哈~</p>
          </div>
        </div>
        <div className="info-main">
          <p className="like">
            <LikeTwoTone className="icon" />
            获得点赞 13,613
          </p>
          <p className="eye">
            <EyeTwoTone className="icon" />
            文章被阅读 811,278
          </p>
        </div>
      </div>

      <div className="SidebarStyled">
        <div className="anchor">
          <Anchor offsetTop={79}>
            <div className="anchor-title">目录</div>
            <MarkNav
              source={textContent}
              updateHashAuto={false}
              headingTopOffset={15}
            />
          </Anchor>
        </div>
      </div>
    </SidebarStyled>
  )
}

export default memo(Sidebar)
