function MentoringStyle() {
  return (
    <>
      <section
        id="mentoring-style"
        className="section is-medium has-text-centered has-background-light"
      >
        <div className="container is-narrow">
          <h1 className="title is-spaced">Mi estilo de mentoría</h1>
          <h2 className="subtitle is-size-5-desktop">
            Me siento muy identificado con el término japonés
            <strong className="has-text-danger">先輩 (Senpai)</strong>. Un
            Senpai es un compañero igual a ti, con más experiencia en un ámbito
            concreto. Como mentor, me comprometo a guiarte y aconsejarte lo
            mejor que pueda.
          </h2>
        </div>
      </section>
      <section className="section mentoring-style">
        <div className="container is-narrow is-spaced">
          <div className="box">
            <div className="content">
              <div className="columns is-multiline is-centered level">
                <div className="column is-half level-item">
                  <div className="has-text-centered has-text-primary is-size-1">
                    💬
                  </div>
                  <h1 className="title is-size-4 is-spaced">Honestidad</h1>
                  <p>
                    Nada de críticas edulcoradas. Trabajaremos con feedback
                    constructivo y accionable desde el primer momento. Lo que no
                    funcione, lo volveremos a construir juntos.
                  </p>
                </div>
                <div className="column is-half level-item">
                  <div className="has-text-centered has-text-danger is-size-1">
                    🙇🏻‍♂️
                  </div>
                  <h1 className="title is-size-4 is-spaced">Humildad</h1>
                  <p>
                    No pretendo aparentar ser un gurú, ni nada por el estilo. Yo
                    también tengo aún un largo camino que recorrer y me gusta
                    mantenerme al día, así que nunca dejo de aprender.
                  </p>
                </div>
                <div className="column is-half level-item">
                  <div className="has-text-centered has-text-success is-size-1">
                    🤝
                  </div>
                  <h1 className="title is-size-4 is-spaced">Igualdad</h1>
                  <p>
                    Para mí, eres mucho más que una o un aprendiz. Somos colegas
                    de la industria de desarrollo de software. Yo no soy el
                    único que enseña ni tampoco el único que aprende.
                  </p>
                </div>
                <div className="column is-half level-item">
                  <div className="has-text-centered has-text-info is-size-1">
                    🌊
                  </div>
                  <h1 className="title is-size-4 is-spaced">Transparencia</h1>
                  <p>
                    No tengo todas las respuestas, pero me encantaría ayudarte a
                    encontrar la dirección correcta compartiendo contigo lo que
                    he aprendido durante mi viaje.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="has-text-centered">
          <a
            className="button is-large is-medium-mobile is-dark"
            alt="Mentoring a medida para programadores de Front-End"
            href="/contactar"
            data-tracking="mentoring-style-cta"
          >
            Contacta Conmigo
          </a>
        </div>
      </section>
    </>
  );
}

export default MentoringStyle;
