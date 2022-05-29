import React from 'react'

export type IProps = {
  items: { label: string; key: string }[]
  onClick?: React.MouseEventHandler<HTMLElement>
}
