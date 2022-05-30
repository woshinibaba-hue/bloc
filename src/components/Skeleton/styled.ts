import styled from 'styled-components'

import { SkeletonProps } from './type'

export const SkeletonStyle = styled.div<SkeletonProps>`
  box-sizing: border-box;
  width: ${({ width }) => width}px;
  padding: 20px;
  border-radius: 4px;
  background-color: #fff;

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
