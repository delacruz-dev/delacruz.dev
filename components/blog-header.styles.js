import css from "styled-jsx/css";

export default css`
  h1 {
    margin-bottom: 0;
  }
  h1:hover {
    cursor: pointer;
  }
  nav {
    margin-top: 90px;
    padding: 1.5rem 1.25rem;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 768px) {
    .header {
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
    }
    .nav {
      padding: 2rem;
      width: 30vw;
      height: 100%;
      border-bottom: none;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
