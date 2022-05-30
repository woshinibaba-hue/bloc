import styled from 'styled-components'

export const MainStyle = styled.div`
  display: flex;

  .list,
  .sidebar {
    padding: 15px 25px;
    background-color: #fff;
    border-radius: 4px;
  }

  .list {
    width: 700px;
  }

  .sidebar {
    flex: 1;
    margin-left: 15px;
  }
`
