export interface EditorProps {
  mdContent: string
  setMdContent: (mdContent: string) => void
  handleImage: (file: File) => void
  isToolbar?: boolean
}
