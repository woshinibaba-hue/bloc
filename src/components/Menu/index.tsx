import React, { memo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import classNames from 'classnames'

import { MenuStyle } from './styled'

import { IProps } from './type'

function Menu({ items }: IProps) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <MenuStyle>
      {items.map(({ label, key }) => (
        <span
          key={key}
          className={classNames([
            'menu-item',
            location.pathname === key ? 'active' : ''
          ])}
          onClick={() => navigate(key)}
        >
          {label}
        </span>
      ))}
    </MenuStyle>
  )
}

export default memo(Menu)
