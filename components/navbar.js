import Link from "next/link";
import css from "styled-jsx/css";
import Logo from "./assets/logo";
import Button from "./button";
import { theme } from "../styles/theme";

function NavBar() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className='container navbar-container'>
          <div className="navbar-left">
            <Link href="/">
              <a className="logo" title="Dani de la Cruz">
                <Logo fill={theme.colors.primary} />
              </a>
            </Link>

            <div className="navbar-sections">
              <Link href="/blog">
                <a data-tracking="navbar-blog">Blog</a>
              </Link>
              <Link href="/me">
                <a data-tracking="navbar-skills">Sobre mí</a>
              </Link>
            </div>
          </div>

          <div className="navbar-right">
            <Button
              title="Mentoring a medida para programadores de Front-End"
              href="/contact"
              data-tracking="navbar-cta"
              withAnimation
              size="small"
            >
              Contactar
          </Button>
          </div>
        </div>
      </nav>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .navbar-right {
    margin: auto 10px;
    min-width: 115px;
  }

  .navbar {
    background-color: ${theme.colors.background};
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12);
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
  }

  .navbar-container {
    height: 55px;
    display: flex;
    justify-content: space-between;
  }

  .navbar-left {
    display: flex;
    align-items: center;
  }

  .navbar-sections {
    display: flex;
    flex-direction: row;
  }

  .navbar-sections a {
    display: block;
    color: ${theme.colors.text};
    margin: auto 10px;
    white-space: nowrap;
  }

  .navbar-sections a:hover {
    color: ${theme.colors.linkHover};
  }

  .logo {
    display: flex;
    flex-direction: column;
    max-width: 30px;
    min-width: 30px;
    opacity: 1;
    transition: opacity 0.2s ease;
  }

  .logo:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  a {
    display: block;
  }
`;
export default NavBar;
