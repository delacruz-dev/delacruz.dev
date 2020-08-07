import css from "styled-jsx/css";
import { theme } from "../styles/theme";
import CodeReview from "./assets/code-review";
import Button from "./button";
import Section from "./section";

function MentoringService() {
  return (
    <>
      <Section id="mentoring" bgColor={theme.colors.mentoringServiceBg}>
        <div className="container has-text-centered">
          <h1 className="title">Mentoring profesional</h1>
          <h2 className="subtitle">
            Para programadores y programadoras que quieran dar un salto en su carrera desarrollando software.
          </h2>

          <div className="cta">
            <Button href="/mentoring">Saber más</Button>
          </div>

          <div className="picture">
            <CodeReview height="100%" width="100%" />
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

export default MentoringService;
