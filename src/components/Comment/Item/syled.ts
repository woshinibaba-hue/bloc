import styled from 'styled-components'

export const CommentItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  .avatar {
    width: 48px;
    height: 48px;
    margin-right: var(--main-margin);
  }

  .content {
    flex: 1;

    &-header {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      font-size: 15px;
      color: #252933;
      margin-bottom: 10px;

      .time {
        color: var(--not-active-text-color);
      }
    }

    .comment {
      margin-bottom: 10px;
    }

    .handler {
      .ant-space-item {
        cursor: pointer;
        color: var(--not-active-text-color);
      }
    }

    .active {
      .ant-space-item {
        color: var(--color-text);
      }
    }
  }
`
