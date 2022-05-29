import React, { memo } from 'react'

import {
  EyeOutlined,
  CommentOutlined,
  LikeOutlined,
  LikeFilled
} from '@ant-design/icons'

import { ItemStyle } from './style'

import { ProposType } from './types'

const Item: React.FC<ProposType> = ({ isLike }) => (
  <ItemStyle isLike>
    <div className="info">
      <div className="name">啊哈哈哈和~</div>
      <div className="public-time">1月前</div>
      <div className="tags">
        <span>前端</span>
        <span>前端框架</span>
        <span>React.js</span>
      </div>
    </div>

    <div className="main">
      <div className="main-content">
        <div className="title">2022年的React生态</div>
        <p className="text">
          `React`
          已经风靡前端届很长一段时间了，在这段时间里它发展了一个非常全面而强大的生态系统。大厂喜欢在大型的前端项目中选择
          `React`，它的生态功不可没。 `React`
          已经风靡前端届很长一段时间了，在这段时间里它发展了一个非常全面而强大的生态系统。大厂喜欢在大型的前端项目中选择
          `React`，它的生态功不可没。 `React`
          已经风靡前端届很长一段时间了，在这段时间里它发展了一个非常全面而强大的生态系统。大厂喜欢在大型的前端项目中选择
          `React`，它的生态功不可没。
        </p>
        <div className="options">
          <span className="eye">
            <EyeOutlined />
            <span className="count">9999</span>
          </span>
          <span className="like">
            {isLike ? <LikeFilled /> : <LikeOutlined />}
            <span className="count">7777</span>
          </span>
          <span className="comment">
            <CommentOutlined />
            <span className="count">6666</span>
          </span>
        </div>
      </div>
      <div className="main-cover">
        <img
          src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8a6afead4d06476ea5eff748cc9a5dc2~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?"
          alt="react"
        />
      </div>
    </div>
  </ItemStyle>
)

export default memo(Item)
