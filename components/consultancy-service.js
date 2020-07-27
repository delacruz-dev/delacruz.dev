import css from "styled-jsx/css";
import colors from "./colors";
import Button from "./button";

function ConsultancyService() {
  return (
    <>
      <section id="consultancy" className="consultancy">
        <div className="container has-text-centered">
          <h1 className="title">Consultoría para empresas</h1>
          <h2 className="subtitle">
            Consultoría de software para empresas que necesitan ayuda con sus proyectos de desarrollo web y mobile.
          </h2>

          <div className="cta">
            <Button href="/consultancy" outlined huge>
              Contratar
            </Button>
          </div>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .consultancy {
    background-color: ${colors.backgroundConsultancy};
    padding-bottom: 9rem;
    padding-top: 9rem;
    color: ${colors.primaryText};
  }

  .has-text-centered {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .cta {
    margin-top: 2rem;
  }
`;

export default ConsultancyService;
