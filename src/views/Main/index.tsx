import React, { memo } from 'react'

import ArticleItem from '@/components/Article/Item'

function Main() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <ArticleItem key={item} isLike />
      ))}
    </div>
  )
}

export default memo(Main)
