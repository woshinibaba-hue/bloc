import styled from 'styled-components'

import { ProposType } from './types'

export const ItemStyle = styled.div<ProposType>`
  cursor: pointer;
  font-size: 13px;
  margin-bottom: var(--main-margin);
  border-bottom: 1px solid #f0f1f5;

  .info {
    display: flex;
    color: #86909c;
    margin-bottom: 10px;

    .name {
      color: #4e5969;
      margin-right: 10px;

      &:hover {
        color: var(--color-text);
      }
    }

    .public-time {
      position: relative;
      padding: 0 10px;

      &::after,
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 1px;
        height: 12px;
        background-color: #e5e6eb;
      }

      &::before {
        left: 0;
      }
    }

    .tags {
      span {
        padding: 0 10px;

        &:hover {
          color: var(--color-text);
        }
      }
    }
  }

  .main {
    display: flex;
    align-items: center;

    &-content {
      .title {
        font-weight: 700;
        font-size: 16px;
        color: #1d2129;
      }
    }

    .text {
      word-break: break-all;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      margin: 10px 0;
    }

    &-cover {
      img {
        width: 120px;
        height: 80px;
        border-radius: 4px;
        margin-left: 15px;
      }
    }

    .options {
      margin-bottom: 10px;

      > span {
        margin-right: 15px;

        .count {
          margin-left: 4px;
        }

        &:hover {
          color: var(--color-text);
        }
      }

      .like {
        color: ${({ isLike }) => (isLike ? 'var(--color-text)' : '')};
      }
    }
  }
`
