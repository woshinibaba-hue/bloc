import React from 'react'

import { Anchor } from 'antd'

import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import remarkGfm from 'remark-gfm'

import { MarkdownStyle } from './styled'

import { MarkdownProps } from './types'

const Detail: React.FC<MarkdownProps> = ({ textContent = '' }) => {
  return (
    <MarkdownStyle>
      <div className="content bg">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={materialDark}
                  showLineNumbers
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {textContent}
        </ReactMarkdown>
      </div>
      <div className="anchor">
        <Anchor offsetTop={93}>
          <MarkNav
            source={textContent}
            updateHashAuto={false}
            headingTopOffset={15}
          />
        </Anchor>
      </div>
    </MarkdownStyle>
  )
}

export default React.memo(Detail)
