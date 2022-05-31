import React from 'react'

export interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onSubmit: () => void
  submitting?: boolean
  value: string
  mainText: string
}
