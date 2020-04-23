import Layout from "./layout";

function Contact() {
  return (
    <Layout>
      <section className="section has-background-light contact">
        <div className="container is-narrow">
          <h1 id="contact" className="title is-spaced has-text-centered">
            Contactar
          </h1>
          <form
            id="form"
            acceptCharset="utf-8"
            action="https://www.usebasin.com/f/2e7223846893"
            method="post"
          >
            <div className="field">
              <label htmlFor="name" className="label is-medium">
                De
              </label>

              <div className="control">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      id="name"
                      name="name"
                      className="input is-medium"
                      type="text"
                      placeholder="Nombre"
                      required
                    />
                    <span className="icon is-small is-left">
                      👤
                    </span>
                  </p>
                </div>
                <div className="field">
                  <p className="control is-expanded has-icons-left has-icons-right">
                    <input
                      id="email"
                      className="input is-medium"
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <span className="icon is-small is-left">
                      ✉️
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field">
              <label htmlFor="subject" className="label is-medium">
                Asunto
              </label>

              <div className="control">
                <input
                  id="subject"
                  name="subject"
                  className="input is-medium"
                  type="text"
                  placeholder="ej. Información sobre mentoring"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="body" className="label is-medium">
                Mensaje
              </label>

              <div className="control">
                <textarea
                  id="body"
                  name="body"
                  className="textarea is-medium"
                  placeholder="Explícame cómo puedo empezar a ayudarte"
                ></textarea>
              </div>
            </div>

            <div className="field">
              <button
                id="submit"
                type="submit"
                className="button is-primary is-medium"
                data-tracking="contact-cta"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
