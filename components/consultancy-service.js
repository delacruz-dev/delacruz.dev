import css from "styled-jsx/css";
import { theme } from "../styles/theme";
import Button from "./button";
import Section from "./section";
import Iteration from './assets/iteration'
function ConsultancyService() {
  return (
    <>
      <Section id="consultancy" bgColor={theme.colors.consultancyServiceBg}>
        <div className="container has-text-centered">
          <h1 className="title">Consultoría Frontend</h1>
          <h2 className="subtitle">
            Consultoría de software para empresas que necesitan ayuda con sus proyectos de desarrollo web y mobile.
          </h2>
          <div className="cta">
            <Button href="/consultancy">
              Contratar
            </Button>
          </div>
        </div>

        <div className="picture">
          <Iteration height="100%" width="100%" />
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .cta {
    margin-top: 2rem;
  }
  
  .picture {
    margin-top: 2rem;
    width: 30vw;
    height: 30vw;
  }

  @media (max-width: 768px) {
    .picture {
      width: 70vw;
      height: 70vw;
    }
  }
`;

export default ConsultancyService;
