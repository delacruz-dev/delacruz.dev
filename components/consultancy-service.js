import css from "styled-jsx/css";
import Button from "./button";
import Section from "./section";

function ConsultancyService() {
  return (
    <>
      <Section id="consultancy">
        <div className="container has-text-centered">
          <h1 className="title">Consultoría para empresas</h1>
          <h2 className="subtitle">
            Consultoría de software para empresas que necesitan ayuda con sus proyectos de desarrollo web y mobile.
          </h2>

          <div className="cta">
            <Button href="/consultancy" outlined>
              Contratar
            </Button>
          </div>
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
`;

export default ConsultancyService;
