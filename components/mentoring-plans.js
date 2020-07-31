import Section from "./section";

function MentoringPlans() {
  return (
    <>
      <Section className="section has-text-centered pricing has-background-light">
        <div className="container">
          <div className="pricing-grid">
            <div className="columns is-centered">
              <div className="column">
                <div className="box">
                  <span className="icon is-large has-text-info is-spaced is-size-1">👥</span>
                  <h1 className="title is-size-4 is-spaced">Acompañamiento técnico</h1>
                  <p className="is-spaced">
                    Elige este plan si lo que necesitas es un compañero de vuelo que te ayude a mejorar técnicamente.
                  </p>
                  <p className="list-title has-text-info has-text-weight-semibold is-spaced">
                    Aquí tienes algunas actividades en las que podemos emplear nuestro tiempo:
                  </p>
                  <ul className="is-spaced">
                    <li>Pair programming</li>
                    <li>Code Walkthrough</li>
                    <li>Code Katas</li>
                    <li>Diseñar un plan de aprendizaje a medida</li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <span className="icon is-large has-text-info is-spaced is-size-1">🚀</span>
                  <h1 className="title is-size-4 is-spaced">Impulsa tu carrera</h1>
                  <p className="is-spaced">
                    Si ya tienes trabajo pero quieres saber qué te falta para ayudar mejor a tu equipo o conseguir un
                    ascenso, este es el plan que estás buscando.
                  </p>
                  <p className="list-title has-text-info has-text-weight-semibold is-spaced">
                    Algunas ideas para inspirarte:
                  </p>
                  <ul className="is-spaced">
                    <li>Preparar un ascenso a senior</li>
                    <li>Técnicas de liderazgo</li>
                    <li>Cómo presentar propuestas de mejora a tus compañeras y compañeros</li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="box">
                  <span className="icon is-large has-text-info is-spaced is-size-1">👩🏻‍💻</span>
                  <h1 className="title is-size-4 is-spaced">Consigue el trabajo</h1>
                  <p className="is-spaced">
                    ¿Estás en uno o varios procesos de selección y necesitas ayuda para prepararlos? Déjame acompañarte
                    durante el proceso.
                  </p>
                  <p className="list-title has-text-info has-text-weight-semibold is-spaced">Cómo puedo ayudarte:</p>
                  <ul className="is-spaced">
                    <li>Practicar las preguntas típicas en entrevistas de Front-End</li>
                    <li>Feedback sobre pruebas técnicas</li>
                    <li>Optimización del CV y portfolio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = ``;

export default MentoringPlans;
