import css from "styled-jsx/css";

export default css`
  .blogList {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    flex-grow: 1;
    padding: 2rem;
    margin-top: 50px;
  }

  .date {
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 4px;
    color: #4a4a4a;
    display: inline-flex;
    font-size: 0.75rem;
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    .content {
      flex-grow: none;
      width: 70vw;
      margin-left: 30vw;
      margin-top: 100px;
    }
  }
`;
