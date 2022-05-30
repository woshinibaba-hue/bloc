import styled from 'styled-components'

import { SkeletonProps } from './type'

export const SkeletonStyle = styled.div<SkeletonProps>`
  .ant-skeleton-paragraph {
    ${({ paragraphHeight = [], paragraphMarginBottom = [] }) => {
      const liStyle = (
        paragraphHeight?.length ? paragraphHeight : paragraphMarginBottom
      )?.map(
        (item, index) => `li:nth-child(${index + 1}){
          height: ${item}px;
          margin-bottom: ${paragraphMarginBottom?.[index] || ''}px;
        }`
      )
      return liStyle?.join('\n')
    }}
  }
`
