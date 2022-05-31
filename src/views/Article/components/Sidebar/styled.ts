import styled from 'styled-components'

export const SidebarStyled = styled.div`
  width: var(--anchor-width);
  margin-left: var(--main-margin);

  .info,
  .ant-affix,
  .ant-anchor {
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: var(--main-margin);
  }

  .ant-anchor {
    margin-bottom: 0;
  }

  /* 展示个人信息 */
  .info {
    cursor: pointer;
    padding: 15px;

    p {
      width: 200px;
      margin: 0 !important;
    }

    &-head {
      display: flex;
      align-items: center;
      height: 70px;
      padding-bottom: 15px;

      border-bottom: 1px solid #e4e6eb;

      .avatar {
        margin-right: 15px;
        img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }
      }

      .info-name {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .name {
        font-size: 15px;
        color: #252933;
      }

      .referral {
        font-size: 14px;
        color: #515767;
      }
    }

    &-main {
      margin-top: 15px;

      .like {
        margin-bottom: 15px !important;
      }

      .icon {
        background-color: #deefff;
        font-size: 20px;
        padding: 4px;
        border-radius: 50%;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }

  /* 文章目录 */
  .SidebarStyled {
    flex: 1;

    .ant-anchor {
      padding: 0;

      .anchor-title {
        font-weight: 500;
        padding: 15px 0;
        margin: 0 15px;
        font-size: 16px;
        color: #1d2129;
        border-bottom: 1px solid #e4e6eb;
      }
    }

    .ant-anchor-ink::before {
      background-color: unset;
    }

    .markdown-navigation {
      .title-anchor {
        background-color: unset;

        &:hover {
          background-color: unset !important;
        }
      }

      .active {
        position: relative;

        &::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 0;
          margin-top: 7px;
          width: 4px;
          height: 16px;
          background: #1e80ff;
          border-radius: 0 4px 4px 0;
        }
      }
    }
  }
`
