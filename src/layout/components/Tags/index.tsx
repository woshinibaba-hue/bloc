import React, { memo } from 'react'

import { TagStyle } from './style'

function Tags() {
  return (
    <TagStyle>
      <span>标签栏</span>
    </TagStyle>
  )
}

export default memo(Tags)
