import Section from "./section";
import Button from "./button";

function MentoringPricing() {
  return (
    <>
      <Section>
        <div className="container has-text-centered">
          <h1 className="title">
            Contrata 10 sesiones* por <span className="has-text-primary">300€</span>
          </h1>
          <h2 className="subtitle">
            O si lo prefieres, escríbeme para hacer una{" "}
            <span className="has-text-primary">primera consultoría gratuita</span> para hacerme preguntas, discutir
            detalles y decidir si soy la persona que estás buscando.
          </h2>
          <p>
            <em>*Sesiones de 1 hora, a distribuir según nuestra mutua disponibilidad.</em>
          </p>
          <div>
            <Button title="Solicita una sesión gratuita" data-tracking="free-session-cta" outlined href="/contact">
              Prueba gratuita
            </Button>
            <Button title="Contratar" data-tracking="hire-cta" href="/contact">
              Contratar
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

export default MentoringPricing;
