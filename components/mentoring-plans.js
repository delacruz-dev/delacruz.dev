import css from "styled-jsx/css";
import Box from "./box";
import Section from "./section";

function MentoringPlans() {
  return (
    <>
      <Section>
        <div className="container">
          <div className="grid">
            <Box>
              <span className="icon">👥</span>
              <h1 className="title">Acompañamiento técnico</h1>
              <p>
                ¿Necesitas es un compañero de vuelo que te ayude a mejorar técnicamente? Aquí tienes algunas actividades
                en las que podemos emplear nuestro tiempo:
              </p>
              <ul>
                <li>Pair programming</li>
                <li>Code Walkthrough</li>
                <li>Code Katas</li>
                <li>Diseñar un plan de aprendizaje a medida</li>
              </ul>
            </Box>

            <Box>
              <span className="icon">🚀</span>
              <h1 className="title">Impulsa tu carrera</h1>
              <p>
                Si ya tienes trabajo pero quieres saber qué te falta para ayudar mejor a tu equipo o conseguir un
                ascenso, déjame ayudarte. Algunas ideas para inspirarte:
              </p>
              <ul>
                <li>Preparar un ascenso a senior</li>
                <li>Técnicas de liderazgo</li>
                <li>Cómo presentar propuestas de mejora a tus compañeras y compañeros</li>
              </ul>
            </Box>

            <Box>
              <span className="icon">👩🏻‍💻</span>
              <h1 className="title">Consigue el trabajo</h1>
              <p>
                ¿Estás en uno o varios procesos de selección y necesitas ayuda para prepararlos? Déjame acompañarte
                durante el proceso.
              </p>
              <p className="list-title has-text-info has-text-weight-semibold ">Cómo puedo ayudarte:</p>
              <ul>
                <li>Practicar las preguntas típicas en entrevistas de Front-End</li>
                <li>Feedback sobre pruebas técnicas</li>
                <li>Optimización del CV y portfolio</li>
              </ul>
            </Box>
          </div>
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  h1 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
  }

  .icon {
    display: block;
    text-align: center;
    font-size: 3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default MentoringPlans;
