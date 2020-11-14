import Picture from "./image-rounded";
import ProfilePicture from "./profile-picture";
import Section from "./section";

function MentoringHero() {
  return (
    <Section>
      <div className="container has-text-centered">
        <ProfilePicture width='200' height='200' />
        <h1 className="title">Mentoring profesional</h1>
        <h2 className="subtitle">
          Para programadores y programadoras que quieran dar un salto en su carrera desarrollando software.
        </h2>
      </div>
    </Section>
  );
}

export default MentoringHero;
