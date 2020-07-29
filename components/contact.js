import css from "styled-jsx/css";
import colors from "./colors";
import Section from "./section";
import { unit } from "./spacing";
import Title from "./title";

function Contact() {
  return (
    <>
      <Section centered>
        <div className="title">
          <Title id="contact">Contactar</Title>
        </div>
        <form id="form" acceptCharset="utf-8" action="https://www.usebasin.com/f/2e7223846893" method="post">
          <div className="field">
            <div className="control">
              <label htmlFor="name">Tu nombre</label>
              <input id="name" name="name" type="text" placeholder="Nombre" required />
            </div>

            <div className="control">
              <label htmlFor="name">Tu e-mail</label>
              <input id="email" type="email" name="email" placeholder="Email" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="subject">Asunto</label>

            <input id="subject" name="subject" type="text" placeholder="ej. Información sobre mentoring" />
          </div>

          <div className="field">
            <label htmlFor="body">Mensaje</label>

            <textarea id="body" name="body" placeholder="Explícame cómo puedo empezar a ayudarte"></textarea>
          </div>

          <div className="field">
            <button id="submit" type="submit" data-tracking="contact-cta">
              Enviar mensaje
            </button>
          </div>
        </form>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  form {
    width: 50%;
  }

  input,
  textarea {
    align-items: center;
    background-color: ${colors.backgroundInput};
    border-radius: 4px;
    border: 1px solid ${colors.borderInput};
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    color: ${colors.textPrimary};
    display: inline-flex;
    font-family: inherit;
    font-size: 1.25rem;
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    max-width: 100%;
    padding-bottom: calc(0.375em - 1px);
    padding-left: calc(0.625em - 1px);
    padding-right: calc(0.625em - 1px);
    padding-top: calc(0.375em - 1px);
    position: relative;
    vertical-align: top;
    width: 100%;
  }

  textarea {
    resize: none;
    height: ${4 * 2.25}em;
  }

  label {
    color: ${colors.textPrimary};
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .field {
    margin-top: ${8 * unit}px;
  }

  .control {
    margin-top: ${4 * unit}px;
  }

  button {
    border-radius: 4px;
    border: 1px solid ${colors.primary};
    background: ${colors.primary};
    color: ${colors.textSecondary};
    display: block;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    padding: 5px 15px 6px;
    position: relative;
    transition: all 0.3s ease-out;
    word-break: keep-all;
    white-space: nowrap;
  }

  button:hover,
  button:active {
    background: ${colors.primaryHover};
    cursor: pointer;
  }

  .title {
    margin-top: 2rem;
  }

  @media (max-width: 320px) {
    textarea {
      height: ${2 * 2.25}em;
    }
  }

  @media (max-width: 414px) {
    .field {
      margin-top: ${4 * unit}px;
    }

    .control {
      margin-top: ${2 * unit}px;
    }

    label,
    input,
    textarea {
      font-size: 0.9rem;
    }

    button {
      font-size: 1.1rem;
      font-weight: 400;
    }
  }

  @media (max-width: 700px) {
    form {
      width: 80%;
    }
  }
`;
export default Contact;
