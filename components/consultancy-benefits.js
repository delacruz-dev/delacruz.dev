import css from "styled-jsx/css";
import ThinkingInCode from "./assets/thinking-in-code";
import Collaboration from "./assets/collaboration";
import PairProgramming from "./assets/pair-programming";
import Box from "./box";
import HireButton from "./hire-button";
import Section from "./section";
import spacing from "./spacing";

function ConsultancyBenefits() {
  return (
    <>
      <Section diagonal gradient="dusty-cactus" id="consultancy-benefits">
        <div className="container">
          <div className="stackable">
            <div className="row">
              <div className="column">
                <Box>
                  <h1 className="box-title">¿Cómo puedo ayudar a tu equipo?</h1>
                  <p>
                    Soy un ingeniero de software con <strong>15 años de experiencia</strong> a mis espaldas. He trabajado tanto en grandes empresas como en start-ups y he liderado con éxito proyectos de <strong>alto impacto</strong>.
                  </p>
                  <p>
                    Puedo ayudar a tu equipo a <strong>tomar mejores decisiones</strong> poniendo mi experiencia al servicio de tu producto. Consigue el conocimiento de un <strong>profesional experto</strong> para dar juntos un <strong>impulso de calidad</strong> a tus desarrollos de Frontend.
                  </p>
                  <div className="has-text-centered">
                    <HireButton text="Contrátame" />
                  </div>
                </Box>
              </div>
              <div className="column">
                <div className="picture">
                  <PairProgramming width="90%" height="100%" />
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

const styles = css`
  .box-title {
    font-size: 1.5rem;
  }

  .stackable {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    padding: 0;
    margin: -1rem;
  }

  .row {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: inherit;
    align-items: stretch;
    width: 100% !important;
    padding: 1rem 0;
  }

  .column {
    display: inline-block;
    margin-bottom: 0;
    margin-top: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
    vertical-align: top;
    width: 50%;
  }

  @media only screen and (max-width: 767px) {
    .row {
      flex-direction: column;
    }

    .column {
      width: 100%;
    }

    .column:last-child {
      margin-top: ${10 * spacing.unit}px;
    }
  }
`;

export default ConsultancyBenefits;
