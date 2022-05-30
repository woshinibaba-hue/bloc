import React, { memo } from 'react'

import Markdown from '@/components/Markdown'

import { MarkdownProps } from '@/components/Markdown/types'

function Main({ textContent }: MarkdownProps) {
  return <Markdown textContent={textContent} />
}

export default memo(Main)
