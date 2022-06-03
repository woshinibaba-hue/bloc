import React, { MouseEventHandler } from 'react'

export type ProposType = {
  isLike?: boolean
  onClick?: MouseEventHandler<HTMLElement>
  children?: React.ReactNode
}
