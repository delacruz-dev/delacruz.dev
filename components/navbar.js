import Link from "next/link";
import css from "styled-jsx/css";
import Logo from "./assets/logo";
import Button from "./button";
import { imperialRed, manatee, spaceCadet, white, aliceBlue, platinum } from "./colors";

function NavBar() {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-left">
          <Link href="/">
            <a className="logo" title="Dani de la Cruz">
              <Logo fill={imperialRed} />
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
    background-color: ${white};
    border-bottom: 1px solid ${platinum};
    display: flex;
    height: 55px;
    justify-content: space-between;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .navbar-left {
    display: flex;
    margin: auto 10px;
  }

  .navbar-sections {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
  }

  .navbar-sections a {
    display: block;
    color: ${spaceCadet};
    margin: auto 10px;
    white-space: nowrap;
  }

  .navbar-sections a:hover {
    color: ${imperialRed};
  }

  .logo {
    opacity: 1;
    transition: opacity 0.2s ease;
    min-width: 30px;
    display: flex;
    flex-direction: column;
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
