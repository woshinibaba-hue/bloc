import React, { memo, useState, useEffect } from 'react'

import ZSkeleton from '@/components/Skeleton'
import Markdown from '@/components/Markdown'

import request from '@/server'

import { ArticleContainer } from './types'

export default memo(() => {
  const [textContent, setText] = useState<string>()

  useEffect(() => {
    request
      .get({
        url: '/article',
        params: {
          id: 22
        }
      })
      .then((res) => {
        setTimeout(() => {
          setText(res.data[0].content)
        }, 1000)
      })
  }, [])

  return (
    <ArticleContainer>
      {textContent ? (
        <Markdown textContent={textContent} />
      ) : (
        <ZSkeleton
          avatar
          rows={2}
          paragraphHeight={[400, 30]}
          paragraphMarginBottom={[60, 30]}
        />
      )}
    </ArticleContainer>
  )
})
