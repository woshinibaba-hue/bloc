import styled from 'styled-components'

type IProps = {
  isShowBorder?: boolean
}

export const MenuStyle = styled.div<IProps>`
  max-width: 600px;
  flex: 1;
  display: flex;

  .menu-item {
    display: flex;
    cursor: pointer;
    margin-right: 20px;
    border-bottom: 2px solid transparent;

    &:hover:not(.active) {
      color: var(--color-text);
    }

    &.active {
      color: var(--color-text);
      border-bottom-color: var(--color-text);
    }

    border: ${({ isShowBorder = true }) => (isShowBorder ? '' : '0')};
  }
`
