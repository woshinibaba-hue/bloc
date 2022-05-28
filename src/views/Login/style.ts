import styled from 'styled-components'

import login_bg from '../../assets/img/login-bg.png'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${login_bg}) no-repeat top center fixed;
  background-size: cover;
  background-color: #b8e5f8;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;

    .title {
      color: #1890ff;
      font-size: 54px;
      font-weight: 700;
      font-family: 华文彩云;
      user-select: none;
      margin-bottom: 10px;
    }

    .main {
      width: 400px;
      height: 480px;
      background-color: #fff;
      padding: 10px 30px 20px;
      box-shadow: 0 1px 3px rgba(18, 18, 18, 10%);
      border-radius: 5px;
      overflow-y: auto;

      &_title {
        height: 32px;
        text-align: center;
        font-size: 22px;
        font-weight: 500;
        user-select: none;
      }

      .ant-input-affix-wrapper {
        border: 0;
        border-bottom: 1px solid #d9d9d9;
      }

      .ant-btn {
        width: 100%;
        height: 40px;
        border-radius: 5px;
      }

      .hint {
        font-size: 12px;
        color: grey;
      }
    }
  }
`
