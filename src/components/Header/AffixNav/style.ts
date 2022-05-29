import styled from 'styled-components'

export const NavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    height: 45px;
    line-height: 45px;

    .logo {
      margin-right: 55px;
    }
  }

  .right {
    display: flex;
    align-items: center;
  }

  .ant-btn-primary {
    margin-right: 30px;
  }
`
