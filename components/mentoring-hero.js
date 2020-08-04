import Picture from "./image-rounded";
import Section from "./section";

function MentoringHero() {
  return (
    <Section>
      <div className="container has-text-centered">
        <Picture />
        <h1 className="title">Mentoring profesional</h1>
        <h2 className="subtitle">
          Para programadores y programadoras que quieran dar un salto en su carrera desarrollando software.
        </h2>
      </div>
    </Section>
  );
}

export default MentoringHero;
