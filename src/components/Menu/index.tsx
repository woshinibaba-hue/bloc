import React, { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import classNames from 'classnames'

import { MenuStyle } from './styled'

import { IProps } from './type'

function Menu({
  items,
  isShowBorder,
  onClick,
  setActiveTag,
  activeTag = 1
}: IProps) {
  const location = useLocation()

  const toggle = (key: number | string) => {
    if (typeof key === 'number') {
      setActiveTag && setActiveTag(key)
    }
    onClick(key)
  }

  return (
    <MenuStyle isShowBorder={isShowBorder}>
      {items.map(({ label, key }) => (
        <span
          key={key}
          className={classNames([
            'menu-item',
            {
              active:
                typeof key === 'number'
                  ? activeTag === key
                  : location.pathname === key
            }
          ])}
          onClick={() => toggle(key)}
        >
          {label}
        </span>
      ))}
    </MenuStyle>
  )
}

export default memo(Menu)
