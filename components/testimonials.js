import css from "styled-jsx/css";
import colors from "./colors";
import { boxPadding } from "./spacing";

function Testimonials() {
  return (
    <>
      <section id="testimonials" className="testimonials">
        <div className="container has-text-centered ">
          <h1 className="title">Referencias</h1>
          <h2 className="subtitle">
            Lo que dicen de mí algunos de los profesionales con los que he tenido el privilegio de trabajar.
          </h2>

          <div className="grid">
            <article className="box">
              <figure className="media-left">
                <p className="image is-96x96">
                  <img src="/images/jesus.jpg" alt="Jesús Olazagoitia" loading="lazy" width="96" height="96" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Jesús Olazagoitia</strong>&nbsp;
                    <small>
                      <a title="Jesús Olazagoitia" rel="nofollow noopener" href="https://goiblas.com/">
                        @goiblas
                      </a>
                    </small>
                    <br />
                    Empecé la mentoría para mejorar mis habilidades como desarrollador y Dani supo orientarme en temas
                    de testing, algoritmia, mantenibilidad del código, etc. Pero eso solo fue la punta del iceberg, Dani
                    me ayudó a superar entrevistas de trabajo, motivación personal incluso mejorar mis habilidades de
                    comunicación y liderazgo, con su ayuda he podido dar un salto de calidad como profesional.
                  </p>
                </div>
              </div>
            </article>

            <article className="box">
              <figure className="media-left">
                <p className="image is-96x96">
                  <img src="/images/david.jfif" alt="David García" loading="lazy" width="96" height="96" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>David García</strong>&nbsp;
                    <small>
                      <a title="David García" rel="nofollow noopener" href="https://twitter.com/d4vecarter">
                        @d4vecarter
                      </a>
                    </small>
                    <br />
                    Cuando empecé a trabajar en Adevinta, mi perfil estaba más orientado a la maquetación de interficies
                    y a modificar el DOM con jQuery. En dos años trabajando juntos Dani supo transmitirme los
                    fundamentos del desarrollo de software, técnicas y patrones de diseño avanzados que hoy son
                    imprescindibles en mi trabajo actual.
                  </p>
                </div>
              </div>
            </article>

            <article className="box">
              <figure className="media-left">
                <p className="image is-96x96">
                  <img src="/images/miguel.jfif" alt="Miguel Ángel Durán" loading="lazy" width="96" height="96" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Miguel Ángel Durán</strong>&nbsp;
                    <small>
                      <a title="Miguel Ángel Durán" rel="nofollow noopener" href="https://midu.dev/">
                        @midudev
                      </a>
                    </small>
                    <br />
                    Dani cuenta con muchos años de experiencia a sus espaldas como desarrollador y se nota en cada
                    proyecto que afronta. Entre sus grandes virtudes se cuentan la máxima optimización de sus soluciones
                    y un extremo cuidado por hacer sus proyectos mantenibles por él y todo el equipo.
                  </p>
                </div>
              </div>
            </article>

            <article className="box">
              <figure className="media-left">
                <p className="image is-96x96">
                  <img src="/images/ruben.jfif" alt="Rubén Sáez Beltrán" loading="lazy" width="96" height="96" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Rubén Sáez</strong>&nbsp;
                    <small>
                      <a title="Rubén Sáez Beltrán" rel="nofollow noopener" href="https://www.linkedin.com/in/rusabe">
                        @rusabe
                      </a>
                    </small>
                    <br />
                    Dani es un gran profesional, tiene una gran experiencia en el desarrollo de software y una capacidad
                    innata para aprender nuevas tecnologías y/o metodologías poniéndolas en práctica con resultados
                    excelentes.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .box {
    background-color: ${colors.white};
    border-radius: 4px;
    border: 1px solid ${colors.boxBorder};
    display: flex;
    padding: ${boxPadding}px;
  }

  .grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  .has-text-centered {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .media-left {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    margin-right: 1rem;
  }

  .testimonials {
    padding-bottom: 9rem;
    padding-top: 9rem;
  }

  a {
    color: ${colors.primary};
  }
`;

export default Testimonials;
