import Link from "next/link";
import css from "styled-jsx/css";

export default function BlogHeader(props) {
  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/blog">
          <h1>Blog</h1>
        </Link>
      </nav>
      <style jsx>{styles}</style>
    </header>
  );
}

const styles = css`
  h1 {
    margin-bottom: 0;
    font-size: 4rem;
  }

  h1:hover {
    cursor: pointer;
  }

  nav {
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 90px;
    padding: 1.5rem 1.25rem;
  }

  @media (min-width: 768px) {
    .header {
      height: 100vh;
      left: 0;
      position: fixed;
      top: 0;
    }

    .nav {
      align-items: flex-start;
      border-bottom: none;
      flex-direction: column;
      height: 100%;
      margin-top: 90px;
      padding: 2rem;
      width: 30vw;
    }
  }
`;
