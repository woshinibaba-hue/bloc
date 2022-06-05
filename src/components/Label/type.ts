export type TagType = { id: number; label: string }

export type LabelProps = {
  tags: TagType[]
  removeTag?: (id: number) => void
}
