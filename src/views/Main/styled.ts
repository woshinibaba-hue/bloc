import styled from 'styled-components'

export const MainStyle = styled.div`
  display: flex;

  .list {
    width: var(--content-width);

    border-radius: var(--radius);
    overflow: hidden;
  }

  .sidebar {
    flex: 1;
    margin-left: var(--main-margin);
  }
`
