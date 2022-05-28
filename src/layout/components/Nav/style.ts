import styled from 'styled-components'

export const NavStyle = styled.div`
  display: flex;
  align-items: center;
  height: 64px;

  .logo {
    margin-right: 20px;
  }

  .ant-tabs {
    line-height: 2.85;

    .ant-tabs-nav {
      margin: 0;
    }
  }

  .ant-input-search {
    max-width: 450px;
    border-radius: 20px;
    padding: 2px 5px;
    margin: 0 20px 0 80px;
    overflow: hidden;
    background-color: #f6f6f6;

    .ant-btn {
      border: 0;
      background-color: #f6f6f6;
    }
  }

  .ant-btn-round {
    margin-right: 80px;
  }

  .anticon {
    font-size: 20px;
    color: #76839b;
    cursor: pointer;
  }

  .anticon-message {
    font-size: 18px;
    margin: 0 50px 0 30px;
  }
`
