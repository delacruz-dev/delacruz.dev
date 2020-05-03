function BlogNavbar() {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item logo" href="/" title="Dani de la Cruz">
          <img src="/danidev.svg" alt="Dani de la Cruz" width="30" height="30" />
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a
              className="button is-dark"
              title="Mentoring a medida para programadores de Front-End"
              href="/contactar"
              data-tracking="navbar-cta"
            >
              <strong>✉️ Contactar</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BlogNavbar;
