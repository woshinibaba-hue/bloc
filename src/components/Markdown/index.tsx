import React from 'react'

import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import { MarkdownProps } from './types'
import { MarkdownStyle } from './styled'

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
                  language={match[1]}
                  showLineNumbers
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
    </MarkdownStyle>
  )
}

export default React.memo(Detail)
