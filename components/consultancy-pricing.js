import css from "styled-jsx/css";
import HireButton from "./hire-button";
import Section from "./section";

function ConsultancyPricing() {
  return (
    <>
      <Section>
        <div className="container has-text-centered">
          <h1 className="title">
            Contrátame por <span className="has-text-primary">49€</span>
          </h1>
          <h2 className="subtitle">
            O si lo prefieres,{" "}
            <a className="has-text-primary" href="/contact">
              escríbeme
            </a>{" "}
            para hacerme preguntas, discutir detalles y decidir si soy la persona que estás buscando.
          </h2>
          <p>
            El precio corresponde a mi tarifa de servicio por hora. No incluye impuestos ni materiales. Sujeto a disponibilidad. Si tienes dudas, <a className="has-text-primary" href="/contact">ponte en contacto conmigo</a> antes de contratar el servicio y hablemos sin compromiso.
          </p>
          <div>
            <HireButton text="Contratar consultoría" />
          </div>
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  p {
    font-size: 0.9rem;
  }
`;
export default ConsultancyPricing;
