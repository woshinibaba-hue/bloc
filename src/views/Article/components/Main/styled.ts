import styled from 'styled-components'

export const MainStyle = styled.main`
  position: relative;
  background-color: #fff;
  padding: 0 20px;
  margin-bottom: var(--main-margin);

  .title {
    font-size: 34px;
    font-weight: 600;
    color: #252933;

    padding: 15px 0;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 50px;

    .main {
      display: flex;
      align-items: center;

      .info-name {
        margin-left: 15px;

        .name {
          font-size: 16px;
          margin-bottom: 0;
          font-weight: 500;
          color: #515767;
        }

        .meta {
          color: #8a919f;
          font-size: 15px;

          .dot {
            margin: 0 8px;
          }
        }
      }
    }
  }

  .options {
    cursor: pointer;
    position: fixed;
    top: 35%;
    left: 180px;

    display: flex;
    flex-direction: column;

    .icon {
      width: 48px;
      height: 48px;
      background-color: #fff;
      border-radius: 50%;
      line-height: 50px;
      color: #8a919f;
      font-size: 20px;
      margin-bottom: 20px;
    }

    .active {
      color: var(--color-text);
    }
  }

  .tags {
    display: flex;
    padding: 0 30px 40px;

    .sort {
      margin-right: 50px;
    }

    a {
      padding: 6px 11px;
      border-radius: 4px;
      margin: 0 5px;
      color: #515767;
      background-color: #f2f3f5;
    }

    .tag {
      a {
        color: var(--color-text);
        background-color: #eaf2ff;
      }
    }
  }
`
export const CommentStyle = styled.div`
  border-radius: 4px;
  padding: 20px;
  background-color: #fff;
`
