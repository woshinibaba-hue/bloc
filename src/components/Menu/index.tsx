import React, { memo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { setActiveTag } from '@/layout/store/actioncreatore'
import { RootStore } from '@/store/types'

import classNames from 'classnames'

import { MenuStyle } from './styled'

import { IProps } from './type'

function Menu({ items, isShowBorder, onClick }: IProps) {
  const location = useLocation()

  const { activeTag } = useSelector(
    (state: RootStore) => ({
      activeTag: state.layoutStore.activeTag
    }),
    shallowEqual
  )

  const dispatch = useDispatch()

  const toggle = (key: number | string) => {
    if (typeof key === 'number') {
      dispatch(setActiveTag(key))
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
