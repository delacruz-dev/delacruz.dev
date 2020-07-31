import css from "styled-jsx/css";
import Section from "./section";

function MentoringHero() {
  return (
    <>
      <Section>
        <div className="container has-text-centered">
          <figure>
            <img className="is-rounded" src="/images/mypic/badge.jpg" alt="Dani de la cruz" />
          </figure>
          <h1 className="title">Mentoring profesional</h1>
          <h2 className="subtitle">
            Para programadores y programadoras que quieran dar un salto en su carrera desarrollando software.
          </h2>
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  img {
    border-radius: 290486px;
  }
`;

export default MentoringHero;
