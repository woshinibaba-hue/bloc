import React, { memo } from 'react'

import { useNavigate } from 'react-router-dom'

import ArticleItem from '@/components/Article/Item'

function Main() {
  const navigate = useNavigate()

  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <ArticleItem
          key={item}
          isLike
          onClick={() => navigate(`/article/${item}`)}
        />
      ))}
    </div>
  )
}

export default memo(Main)
