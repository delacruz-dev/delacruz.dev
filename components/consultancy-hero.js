import ProfilePicture from "./profile-picture";
import Section from "./section";

function ConsultancyHero() {
  return (
    <Section>
      <div className="container has-text-centered">
        <ProfilePicture width='200' height='200' />
        <h1 className="title">Consultoría Frontend</h1>
        <h2 className="subtitle">
          Para empresas que necesiten echar una mano a su equipo de especialistas en desarrollo de aplicaciones web y móviles.
        </h2>
      </div>
    </Section>
  );
}

export default ConsultancyHero;
