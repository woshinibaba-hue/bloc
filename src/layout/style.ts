import styled from 'styled-components'

type IProps = {
  mainWidth?: string
}

export const LayOutStyle = styled.div<IProps>`
  .ant-layout {
    background: transparent;

    .ant-layout-header {
      background-color: #fff;
    }

    .ant-divider {
      margin: 0;
    }

    .navs {
      width: 100%;
      max-width: 1156px;
      margin: 0 auto;
    }

    .header_tags {
      height: 45px;
      line-height: 45px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 5%);

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
        width: ${(props) => props.mainWidth};
        box-sizing: border-box;
        border-radius: 4px;

        transition: all 0.6s;
      }

      .ant-layout-sider {
        background-color: #fff;
        border-radius: 4px;
      }
    }
  }
`
