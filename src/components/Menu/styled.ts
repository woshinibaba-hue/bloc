import styled from 'styled-components'

export const MenuStyle = styled.div`
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
  }
`
