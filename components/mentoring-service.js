import css from "styled-jsx/css";
import Button from "./button";
import Section from "./section";

function MentoringService() {
  return (
    <>
      <Section id="mentoring">
        <div className="container has-text-centered">
          <h1 className="title">Mentoring profesional</h1>
          <h2 className="subtitle">
            Para programadores y programadoras que quieran dar un salto en su carrera desarrollando software.
          </h2>

          <div className="cta">
            <Button href="/mentoring" outlined>
              Saber más
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

export default MentoringService;
