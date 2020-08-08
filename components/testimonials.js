import css from "styled-jsx/css";
import { theme } from "../styles/theme";
import Box from "./box";
import Section from "./section";
import spacing from "./spacing";
import QuotationMark from './assets/quotation-mark';

function Testimonials() {
  return (
    <>
      <Section id="testimonials">
        <div className="container has-text-centered is-narrow">
          <h1 className="title">Referencias</h1>
          <h2 className="subtitle">
            Lo que dicen de mí algunos de los profesionales con los que he tenido el privilegio de trabajar.
          </h2>

          <div className="grid">
            <Box media={<img src="/images/jesus.jpg" alt="Jesús Olazagoitia" loading="lazy" width="96" height="96" />}>
              <div className="name">
                <strong>Jesús Olazagoitia</strong>
                <small>
                  <a title="Jesús Olazagoitia" rel="nofollow noopener" href="https://goiblas.com/">
                    @goiblas
                  </a>
                </small>
              </div>
              <blockquote>
                "Empecé la mentoría para mejorar mis habilidades como desarrollador y Dani supo orientarme en temas de
                testing, algoritmia, mantenibilidad del código, etc. Pero eso solo fue la punta del iceberg, Dani me
                ayudó a superar entrevistas de trabajo, motivación personal incluso mejorar mis habilidades de
                comunicación y liderazgo, con su ayuda he podido dar un salto de calidad como profesional."
              </blockquote>
              <QuotationMark style={{ position: 'absolute', right: 4 * spacing.unit, bottom: 4 * spacing.unit }} fill={theme.colors.dateBg} />
            </Box>

            <Box media={<img src="/images/david.jfif" alt="David García" loading="lazy" width="96" height="96" />}>
              <div className="name">
                <strong>David García</strong>
                <small>
                  <a title="David García" rel="nofollow noopener" href="https://twitter.com/d4vecarter">
                    @d4vecarter
                  </a>
                </small>
              </div>
              <blockquote>
                "Cuando empecé a trabajar en Adevinta, mi perfil estaba más orientado a la maquetación de interficies y a
                modificar el DOM con jQuery. En dos años trabajando juntos Dani supo transmitirme los fundamentos del
                desarrollo de software, técnicas y patrones de diseño avanzados que hoy son imprescindibles en mi
                trabajo actual."
              </blockquote>
              <QuotationMark style={{ position: 'absolute', right: 4 * spacing.unit, bottom: 4 * spacing.unit }} fill={theme.colors.dateBg} />
            </Box>

            <Box
              media={<img src="/images/miguel.jfif" alt="Miguel Ángel Durán" loading="lazy" width="96" height="96" />}
            >
              <div className="name">
                <strong>Miguel Ángel Durán</strong>
                <small>
                  <a title="Miguel Ángel Durán" rel="nofollow noopener" href="https://midu.dev/">
                    @midudev
                  </a>
                </small>
              </div>
              <blockquote>
                "Dani cuenta con muchos años de experiencia a sus espaldas como desarrollador y se nota en cada proyecto
                que afronta. Entre sus grandes virtudes se cuentan la máxima optimización de sus soluciones y un extremo
                cuidado por hacer sus proyectos mantenibles por él y todo el equipo."
              </blockquote>
              <QuotationMark style={{ position: 'absolute', right: 4 * spacing.unit, bottom: 4 * spacing.unit }} fill={theme.colors.dateBg} />
            </Box>

            <Box
              media={<img src="/images/ruben.jfif" alt="Rubén Sáez Beltrán" loading="lazy" width="96" height="96" />}
            >
              <div className="name">
                <strong>Rubén Sáez</strong>
                <small>
                  <a title="Rubén Sáez Beltrán" rel="nofollow noopener" href="https://www.linkedin.com/in/rusabe">
                    @rusabe
                  </a>
                </small>
              </div>
              <blockquote>
                "Dani es un gran profesional, tiene una gran experiencia en el desarrollo de software y una capacidad
                innata para aprender nuevas tecnologías y/o metodologías poniéndolas en práctica con resultados
                excelentes."
              </blockquote>
              <QuotationMark style={{ position: 'absolute', right: 4 * spacing.unit, bottom: 4 * spacing.unit }} fill={theme.colors.dateBg} />
            </Box>
          </div>
        </div>
      </Section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }

  a {
    color: ${theme.colors.primary};
  }

  blockquote {
    position: relative;
    font-family: ${theme.fontFamily.serif};
    line-height: 1.5rem;
    z-index: 0;
  }

  .name {
    display: block;
    font-size: 1.2rem;
    margin-bottom: ${spacing.unit * 2}px;
    text-align: center;
    width: 100%;
  }

  .name small {
    margin-left: ${spacing.unit * 2}px;
  }

  img {
    border-radius: 290486px;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Testimonials;
