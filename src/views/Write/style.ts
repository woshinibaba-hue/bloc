import styled from 'styled-components'

export const WriteWrapper = styled.div`
  .header-handler {
    display: flex;
    align-items: center;

    .handeler {
      display: flex;

      .ant-btn {
        margin-right: 10px;
      }
    }

    .ant-input {
      border: 0;
      padding: 10px 20px;
      font-size: 20px;

      &:focus {
        box-shadow: unset;
      }
    }
  }
`
