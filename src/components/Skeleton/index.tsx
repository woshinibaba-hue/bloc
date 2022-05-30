import React, { memo } from 'react'

import { Skeleton } from 'antd'

import { SkeletonProps } from './type'

import { SkeletonStyle } from './styled'

const ZSkeleton: React.FC<SkeletonProps> = ({
  avatar,
  rows = 4,
  titleWidth = 80,
  paragraphWidth = [],
  paragraphHeight = [],
  paragraphMarginBottom = []
}) => {
  return (
    <SkeletonStyle
      paragraphHeight={paragraphHeight}
      paragraphMarginBottom={paragraphMarginBottom}
    >
      <Skeleton
        active
        avatar={avatar}
        paragraph={{ rows, width: paragraphWidth }}
        title={{ width: titleWidth }}
      />
    </SkeletonStyle>
  )
}

export default memo(ZSkeleton)
