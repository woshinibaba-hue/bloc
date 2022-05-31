import styled from 'styled-components'

export const WriteWrapper = styled.div`
  .for-container {
    box-shadow: unset;

    border-color: #e1e4e8;
    border-left: 0;
    border-right: 0;
    border-radius: 0;

    .for-editor,
    .for-toolbar {
      border-radius: 0;
    }

    .for-editor-edit {
      background-color: #f8f9fa;
      border-right: 1px solid #e1e4e8;
    }
  }

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
