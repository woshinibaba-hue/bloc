import React, { memo, useState, useEffect } from 'react'

import request from '@/server'

import ZSkeleton from '@/components/Skeleton'
import Sidebar from './Sidebar'
import Main from './Main'

export default memo(() => {
  const [textContent, setText] = useState<string>()

  useEffect(() => {
    request
      .get({
        url: '/article',
        params: {
          id: 23
        }
      })
      .then((res) => {
        setTimeout(() => {
          setText(res.data[0].content)
        }, 1000)
      })
  }, [])

  return (
    <div>
      {textContent ? (
        <div style={{ display: 'flex' }}>
          <Main textContent={textContent} />
          <Sidebar textContent={textContent} />
        </div>
      ) : (
        <ZSkeleton
          avatar
          rows={2}
          paragraphHeight={[400, 30]}
          paragraphMarginBottom={[60, 30]}
        />
      )}
    </div>
  )
})
