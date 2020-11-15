import css from "styled-jsx/css";
import Box from "./box";
import HireButton from "./hire-button";
import Section from "./section";

function ConsultancyPlans() {
  return (
    <>
      <Section>
        <div className="container">
          <div className="grid">
            <Box>
              <span className="icon">👥</span>
              <h1 className="title">Acompañamiento técnico</h1>
              <p>
                Pon mi conocimiento técnico y mi experiencia al servicio de tu equipo, organizando sesiones de:
              </p>
              <ul>
                <li>Pair programming</li>
                <li>Mob programming</li>
                <li>Ayuda en toma de decisiones técnicas</li>
                <li>Workshops específicos</li>
                <li>Formación a medida</li>
              </ul>
            </Box>

            <Box>
              <span className="icon">🚀</span>
              <h1 className="title">Lanza tu proyecto</h1>
              <p>
                Si tienes un proyecto en mente y necesitas a alguien que ponga en marcha el primer MVP, hablemos:
              </p>
              <ul>
                <li>Desarrollo full stack de un prototipo o Minimum Viable Product (MVP)</li>
                <li>Programación de aplicaciones web y mobile</li>
                <li>Bootstrap de proyectos</li>
                <li>Asesoría de arquitectura y selección de tecnologías</li>
              </ul>
            </Box>

            <Box>
              <span className="icon">🕵🏻</span>
              <h1 className="title">Selección y hiring</h1>
              <p>
                Déjame ayudarte a diseñar y llevar a cabo un proceso de selección.
              </p>
              <p className="list-title has-text-info has-text-weight-semibold ">Cómo trabajaremos:</p>
              <ul>
                <li>Elaboración del perfil que más se ajuste a vuestras necesidades</li>
                <li>Diseño del proceso de selección</li>
                <li>Realización de entrevistas técnicas</li>
              </ul>
            </Box>
          </div>
        </div>
      </Section>
      <div className="has-text-centered">
        <HireButton text="Cuenta conmigo" />
      </div>
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

export default ConsultancyPlans;
