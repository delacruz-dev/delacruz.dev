function Footer() {
  return (
    <footer className="footer section has-background-light">
      <div className="content has-text-centered">
        <p>
          hecho a mano con ❤️por{" "}
          <a href="https://delacruz.dev">Daniel de la Cruz</a>. Sígueme
          en:{" "}
          <a
            title="Twitter"
            href="https://twitter.com/intent/follow?original_referer=https://delacruz.dev&ref_src=twsrc%5Etfw&region=follow_link&screen_name=d4nidev&tw_p=followbutton"
            target="_blank"
            rel="noopener nofollow"
            className="footer-icon"
            aria-label="Sigue a @d4nidev en Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 273.5 222.3"
              className="d-block"
              height="18"
              aria-hidden="true"
            >
              <path
                d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <a
            title="GitHub"
            href="https://github.com/d4nidev"
            target="_blank"
            rel="noopener nofollow"
            aria-label="Mis contribuciones de código abierto en GitHub"
            className="footer-icon"
          >
            <svg
              height="20"
              alt="GitHub"
              viewBox="0 0 16 16"
              width="20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
          <a
            title="LinkedIn"
            href="https://www.linkedin.com/in/danieldelacruz"
            target="_blank"
            rel="noopener nofollow"
            aria-label="Consulta el perfil profesional de Daniel de la Cruz en LinkedIn"
            className="footer-icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19 18"
              className="d-block"
              height="18"
              aria-hidden="true"
            >
              <path
                d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </p>
        <p>
          <a
            title="Hecho con Bulma"
            aria-label="Hecho con Bulma"
            target="_blank"
            rel="noopener nofollow"
            href="https://bulma.io"
          >
            <img
              loading="lazy"
              src="/made-with-bulma.png"
              alt="Made with Bulma"
              width="128"
              height="24"
              aria-hidden="true"
            />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
