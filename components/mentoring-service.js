import css from "styled-jsx/css";
import colors from "./colors";
import Button from "./button";
import Collaboration from "./assets/collaboration";

function MentoringService() {
  return (
    <>
      <section id="mentoring" className="mentoring">
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
      </section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .mentoring {
    background-color: ${colors.backgroundMentoring};
    padding-bottom: 9rem;
    padding-top: 9rem;
    color: ${colors.textPrimary};
  }

  .cta {
    margin-top: 2rem;
  }
`;

export default MentoringService;
