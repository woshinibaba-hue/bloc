import styled from 'styled-components'

type IProps = {
  isAffixNav?: boolean
  isMainBg?: boolean
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

    .nav-header {
      position: ${({ isAffixNav }) => (isAffixNav ? 'fixed' : '')};
      z-index: 1;
      width: 100%;
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
        margin: 0 auto;
      }
    }

    > .main {
      max-width: 960px;
      width: 100%;
      margin: 0 auto;
      background: transparent;
      margin-top: ${({ isAffixNav }) => (isAffixNav ? '74px' : '10px')};

      .ant-layout-content {
        background-color: ${({ isMainBg }) =>
          isMainBg ? '#fff' : 'transparent'};
        padding: 15px 25px;
        margin-right: 15px;
        width: 960px;
        box-sizing: border-box;
        border-radius: 4px;
      }

      .ant-layout-sider {
        background-color: #fff;
        border-radius: 4px;
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
  }
`
