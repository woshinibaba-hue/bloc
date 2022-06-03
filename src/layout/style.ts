import styled from 'styled-components'

type IProps = {
  isAffixNav?: boolean
  isMainBg?: boolean
  isAffixTags?: boolean
}

export const LayOutStyle = styled.div<IProps>`
  .ant-layout {
    background: transparent;

    .ant-layout-header {
      background-color: #fff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 5%);
    }

    .ant-divider {
      margin: 0;
    }

    .nav-header {
      position: ${({ isAffixNav }) => (isAffixNav ? '' : 'fixed')};
      z-index: 1;
      width: 100%;
    }

    .header_tags {
      height: 45px;
      line-height: 45px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 5%);

      .tags {
        ${({ isAffixTags }) =>
          isAffixTags ? 'max-width: 1154px;' : 'max-width: 960px;'}
        margin: 0 auto;
      }
    }

    > .main {
      max-width: 960px;
      width: 100%;
      margin: ${({ isAffixNav }) => (!isAffixNav ? '79px' : '10px')} auto 15px;

      .ant-layout-content {
        background-color: ${({ isMainBg }) =>
          isMainBg ? '#fff' : 'transparent'};
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
      margin-right: 20px;
      overflow: hidden;
      background-color: #f6f6f6;

      .ant-btn {
        border: 0;
        background-color: #f6f6f6;
      }
    }
  }
`
