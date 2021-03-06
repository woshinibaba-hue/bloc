export type IProps = {
  items: { label: string; key: string | number }[]
  onClick: (key: number | string) => void
  isShowBorder?: boolean
}
