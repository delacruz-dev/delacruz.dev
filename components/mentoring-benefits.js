import Box from "./box";
import Button from "./button";
import Section from "./section";
import css from "styled-jsx/css";
import Collaboration from "./assets/collaboration";

function MentoringBenefits() {
  return (
    <>
      <Section diagonal id="mentoring-benefits">
        <div className="container">
          <div className="stackable">
            <div className="row">
              <div className="column">
                <Box>
                  <div className="box-content">
                    <h1 className="box-title">¿Cómo puede ayudarte tener un mentor?</h1>
                    <p>
                      He aprendido un par de cosas durante mi carrera como programador, y me comprometo a ayudarte a
                      hacer el mejor uso de ese conocimiento compartiéndolo contigo.
                    </p>
                    <p>
                      Si me dejas ser tu mentor, puedo ayudarte a <strong>mejorar tus habilidades técnicas</strong>,{" "}
                      <strong>acompañarte en tu búsqueda de empleo</strong> o{" "}
                      <string>decidir cuál debería ser el próximo paso en tu carrera.</string>
                    </p>
                    <div className="has-text-centered">
                      <Button
                        alt="Mentoring a medida para programadores de Front-End"
                        href="/contactar"
                        data-tracking="benefits-cta"
                      >
                        Hablemos
                      </Button>
                    </div>
                  </div>
                </Box>
              </div>
              <div className="column">
                <div className="picture">
                  <Collaboration width="90%" />
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

  .box-content {
    margin: 20px 40px;
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
`;

export default MentoringBenefits;
