import React, { memo } from 'react'

function B() {
  console.log('B 被重新渲染了')

  return <div>B</div>
}

export default memo(B)
