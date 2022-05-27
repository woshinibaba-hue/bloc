import styled from 'styled-components'

export const LayOutStyle = styled.div`
  .ant-layout {
    background: transparent;

    .ant-layout-header {
      background-color: #fff;
    }

    .ant-divider {
      margin: 0;
    }

    .header_tags {
      height: 45px;
      line-height: 45px;

      .tags {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
      }
    }

    .main {
      max-width: 960px;
      width: 100%;
      margin: 0 auto;
      background: transparent;
      margin-top: 10px;

      .ant-layout-content {
        background-color: #fff;
        padding: 15px 12px;
        margin-right: 15px;
        width: 700px;
        box-sizing: border-box;
        border-radius: 4px;
      }

      .ant-layout-sider {
        background-color: #fff;
        border-radius: 4px;
      }
    }
  }
`
