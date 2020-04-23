function MentoringBenefits() {
  return (
    <div id="mentoring-benefits" className="section is-medium has-background-light">
      <div className="columns is-centered">
        <div className="column is-three-fifths has-text-centered">
          <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Beneficios de un plan de Mentoring</h1>
          <h2 className="subtitle is-size-5-desktop">
            He aprendido un par de cosas durante mi carrera como programador, y me comprometo a ayudarte a hacer el
            mejor uso de ese conocimiento compartiéndolo contigo.
          </h2>
        </div>
      </div>
      <div className="benefits-grid">
        <div className="container is-narrow">
          <div className="columns is-multiline has-text-centered">
            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop">
              <span className="icon has-text-info is-size-1 is-spaced">🛠</span>
              <h1 className="title is-size-4 is-spaced">Técnicas</h1>
              <p>
                Dominarás técnicas, metodologías y herramientas que te permitirán entregar tu trabajo con calidad y
                eficiencia.
              </p>
            </div>
            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop">
              <span className="icon has-text-info is-size-1 is-spaced">📚</span>
              <h1 className="title is-size-4 is-spaced">Aprendizaje</h1>
              <p>Entrarás en una dinámica de aprendizaje continuo, a tu ritmo y a tu medida.</p>
            </div>
            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop">
              <span className="icon has-text-info is-size-1 is-spaced">👥</span>
              <h1 className="title is-size-4 is-spaced" style={{ wordBreak: "inherit" }}>
                Acompañamiento
              </h1>
              <p>Te acompañaré durante tu proceso de toma de decisiones y te asesoraré sobre cómo definir objetivos.</p>
            </div>
            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop">
              <span className="icon has-text-info is-size-1 is-spaced">👩🏻‍💻</span>
              <h1 className="title is-size-4 is-spaced">Oportunidades</h1>
              <p>Encontraremos las mejores oportunidades laborales para ti y te acompañaré durante todo el proceso.</p>
            </div>
            <div className="column is-12-mobile is-one-third-tablet is-one-fifth-desktop">
              <span className="icon has-text-info is-size-1 is-spaced">🌱</span>
              <h1 className="title is-size-4 is-spaced">Crecimiento</h1>
              <p>
                Definiremos un plan de carrera basado en el crecimiento personal que puedas medir para crear conciencia
                de tu progresión.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="has-text-centered">
        <a
          className="button is-large is-medium-mobile is-dark"
          alt="Mentoring a medida para programadores de Front-End"
          href="/contactar"
          data-tracking="benefits-cta"
        >
          Hablemos
        </a>
      </div>
    </div>
  );
}

export default MentoringBenefits;
