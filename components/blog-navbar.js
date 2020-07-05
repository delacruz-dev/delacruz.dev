import css from "styled-jsx/css";
import Button from "./button";

function BlogNavbar() {
  return (
    <>
      <nav className="navbar">
        <div>
          <a href="/" title="Dani de la Cruz">
            <img src="/danidev.svg" alt="Dani de la Cruz" width="30" height="30" />
          </a>
        </div>

        <div>
          <Button
            title="Mentoring a medida para programadores de Front-End"
            href="/contactar"
            data-tracking="navbar-cta"
          >
            Contactar
          </Button>
        </div>
      </nav>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .navbar {
    background-color: #ffffff;
    border-bottom: 1px solid #edf2f7;
    display: flex;
    justify-content: space-between;
    left: 0;
    padding: 1em;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  }

  img {
    margin-bottom: 0;
  }

  a {
    display: block;
  }
`;
export default BlogNavbar;
