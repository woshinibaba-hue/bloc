import styled from 'styled-components'

export const MarkdownStyle = styled.div`
  display: flex;
  justify-content: space-between;

  .content {
    width: var(--content-width);
  }

  .anchor {
    flex: 1;
    background-color: #fff;
    border-radius: 4px;
    margin-left: 15px;

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
