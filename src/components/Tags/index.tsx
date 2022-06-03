import React, { memo } from 'react'

import Menu from '../Menu'

import { TagsStyle } from './style'

import { TagType } from './types'

const items = [
  {
    label: '全部',
    key: 1
  },
  {
    label: '前端',
    key: 2
  },
  {
    label: '后端',
    key: 25
  },
  {
    label: 'node.js',
    key: 3
  },
  {
    label: 'python',
    key: 4
  },
  {
    label: 'java',
    key: 5
  },
  {
    label: '面试',
    key: 10
  }
]

const Tags: React.FC<TagType> = ({ activeTag, setActiveTag }) => {
  const handlerClick = (key: number | string) => {
    console.log(key)
  }
  return (
    <TagsStyle>
      <Menu
        items={items}
        isShowBorder={false}
        onClick={handlerClick}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />
    </TagsStyle>
  )
}

export default memo(Tags)
