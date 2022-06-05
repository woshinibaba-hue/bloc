import styled from 'styled-components'

type Props = {
  mainMarginBottom?: boolean
}

export const CommentItemStyle = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ mainMarginBottom }) => (mainMarginBottom ? 50 : 30)}px;

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

    .reply-message {
      background-color: rgba(247, 248, 250, 0.7);
      border-radius: 8px;
      padding: 15px;
      margin-top: 15px;
    }

    .del {
      cursor: pointer;
      color: var(--del-color);
    }
  }
`
