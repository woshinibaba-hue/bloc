import React, { memo } from 'react'

import { useNavigate } from 'react-router-dom'

import ArticleItem from '@/components/Article/Item'

import { MainStyle } from './styled'

function Main() {
  const navigate = useNavigate()

  return (
    <MainStyle>
      <div className="list bg">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <ArticleItem
            key={item}
            isLike
            onClick={() => navigate(`/article/${item}`)}
          />
        ))}
      </div>
      <div className="sidebar bg">侧边栏</div>
    </MainStyle>
  )
}

export default memo(Main)
