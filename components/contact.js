import css from "styled-jsx/css";
import { theme } from "../styles/theme";
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
              <label htmlFor="name">Tus datos</label>
              <input id="name" name="name" type="text" placeholder="Nombre" required />
            </div>

            <div className="control">
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
    background-color: ${theme.colors.inputBg};
    border-radius: 4px;
    border: 1px solid ${theme.colors.border};
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    color: ${theme.colors.text};
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
    color: ${theme.colors.text};
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
    align-items: center;
    background: ${theme.colors.buttonPrimary};
    border-radius: 4px;
    border: 1px solid ${theme.colors.buttonBorder};
    color: ${theme.colors.buttonPrimaryText};
    display: inline-flex;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    height: 3rem;
    justify-content: center;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    min-width: 3rem;
    padding: 0 1.5rem;
    position: relative;
    transition: all 0.3s ease-out;
    vertical-align: middle;
    white-space: nowrap;
    word-break: keep-all;
  }

  button:hover,
  button:active {
    background: ${theme.colors.buttonPrimaryHover};
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
