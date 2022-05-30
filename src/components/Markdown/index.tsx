import React from 'react'

import { Anchor } from 'antd'

import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import remarkGfm from 'remark-gfm'

import { MarkdownStyle } from './styled'

import { MarkdownProps } from './types'

const Detail: React.FC<MarkdownProps> = ({ textContent = '' }) => {
  return (
    <MarkdownStyle>
      <div className="content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
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
      <Anchor offsetTop={74}>
        <MarkNav source={textContent} />
      </Anchor>
    </MarkdownStyle>
  )
}

export default React.memo(Detail)
