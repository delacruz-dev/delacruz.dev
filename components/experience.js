import css from "styled-jsx/css";
import { theme } from "../styles/theme";
import Box from "./box";
import Section from "./section";
import spacing from "./spacing";

function Experience() {
  return (
    <Section>
      <div className="wrapper">
        <h1 className="is-medium">Mi experiencia</h1>
        <div className="timeline-wrapper">
          <div className="timeline">
            <article className="timeline-item">
              <Box
                media={
                  <a title="Tempus Labs" target="_blank" rel="nofollow noopener" href="https://tempus.com">
                    <img loading="lazy" width="263" height="67" alt="Tempus Logo" src="./images/tempus-logo.png" />
                  </a>
                }
              >
                <p className="heading">Desde octubre 2019</p>
                <h3>Senior Full Stack Engineer en Tempus</h3>
                <ul>
                  <li>
                    Desarrollo de aplicaciones web con{" "}
                    <a title="React" rel="nofollow noopener" href="https://reactjs.org/" target="_blank">
                      React
                    </a>
                  </li>
                  <li>
                    Desarrollo de aplicaciones móviles con{" "}
                    <a title="React Native" rel="nofollow noopener" href="https://reactnative.dev/" target="_blank">
                      React Native
                    </a>
                  </li>
                  <li>
                    Desarrollo de servicios y microservicios con{" "}
                    <a title="NestJS" rel="nofollow noopener" href="https://nestjs.com/" target="_blank">
                      NestJS
                    </a>{" "}
                    y{" "}
                    <a title="PostgreSQL" rel="nofollow noopener" href="https://www.postgresql.org/" target="_blank">
                      PostgreSQL
                    </a>
                  </li>
                  <li>
                    Despliegue de infraestructura en{" "}
                    <a
                      title="Google Cloud Platform"
                      rel="nofollow noopener"
                      href="https://cloud.google.com/"
                      target="_blank"
                    >
                      Google Cloud Platform
                    </a>{" "}
                    con{" "}
                    <a title="Terraform" rel="nofollow noopener" href="https://www.terraform.io/" target="_blank">
                      Terraform
                    </a>
                  </li>
                </ul>
              </Box>
            </article>

            <article className="timeline-item">
              <Box
                media={
                  <a title="King" target="_blank" rel="nofollow noopener" href="https://king.com">
                    <img loading="lazy" width="263" height="67" alt="King Logo" src="./images/king-logo.png" />
                  </a>
                }
              >
                <p className="heading">De marzo 2018 a julio 2019</p>
                <h3>Senior Software Engineer at King</h3>
                <ul>
                  <li>
                    <strong>Mentoring</strong> a compañeros y compañeras del departamento que deseaban mejorar en su
                    especialidad o crecer asumiendo otras competencias
                  </li>
                  <li>
                    Desarrollo de aplicaciones web con{" "}
                    <a title="React" rel="nofollow noopener" href="https://reactjs.org/" target="_blank">
                      React
                    </a>
                  </li>
                  <li>Participación en la definición de arquitectura de Front-End</li>
                  <li>
                    Pruebas unitarias con{" "}
                    <a title="Jest" rel="nofollow noopener" href="https://jestjs.io/" target="_blank">
                      Jest
                    </a>
                  </li>
                  <li>
                    Implementación de interfaz de usuario con{" "}
                    <a title="Ant Design" rel="nofollow noopener" href="https://ant.design/" target="_blank">
                      Ant Design
                    </a>
                  </li>
                </ul>
              </Box>
            </article>

            <article className="timeline-item">
              <Box
                media={
                  <a title="Workshare" target="_blank" rel="nofollow noopener" href="https://www.workshare.com/">
                    <img
                      loading="lazy"
                      width="263"
                      height="67"
                      alt="Workshare Logo"
                      src="./images/workshare-logo.png"
                    />
                  </a>
                }
              >
                <p className="heading">De marzo 2018 a julio 2019</p>
                <h3>Senior Software Engineer at King</h3>
                <ul>
                  <li>
                    <strong>Mentoría</strong> en la definición de proceso de trabajo ágil y entrega contínua sostenible
                    respaldado por pruebas automáticas
                  </li>
                  <li>Contribución en la definición de arquitectura en el Front-End</li>
                  <li>Desarrollo de aplicaciones web con React</li>
                </ul>
              </Box>
            </article>

            <article className="timeline-item">
              <Box
                media={
                  <a href="https://typeform.com" title="Typeform" target="_blank" rel="nofollow noopener">
                    <img loading="lazy" width="263" height="67" alt="Typeform Logo" src="./images/typeform-logo.png" />
                  </a>
                }
              >
                <p className="heading">De abril 2017 a octubre 2018</p>
                <h3>Tech Lead en Typeform</h3>
                <ul>
                  <li>
                    <strong>Mentoring</strong> a compañeros de equipo en desarrollo de software guiado por tests (
                    <a
                      href="https://www.jamesshore.com/Agile-Book/test_driven_development.html"
                      title="Test-Driven development"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      TDD
                    </a>
                    ).
                  </li>
                  <li>Participación en la definición de arquitectura de Front-End</li>
                  <li>Liderazgo tecnológico de equipos de desarrollo</li>
                  <li>
                    Facilitación y construcción de una comunidad de Front-End basada en el aprendizaje y en compartir el
                    conocimiento
                  </li>
                  <li>
                    Desarrollo de aplicaciones web con React y{" "}
                    <a title="Redux" target="_blank" rel="nofollow noopener" href="https://redux.js.org/">
                      Redux
                    </a>
                  </li>
                  <li>
                    Automatización de pruebas unitarias, integración y aceptación con{" "}
                    <a href="https://mochajs.org/" title="Mocha" target="_blank" rel="nofollow noopener">
                      Mocha
                    </a>{" "}
                    y{" "}
                    <a href="https://cucumber.io/" title="Cucumber" target="_blank" rel="nofollow noopener">
                      Cucumber
                    </a>
                  </li>
                </ul>
              </Box>
            </article>

            <article className="timeline-item">
              <Box
                media={
                  <a href="https://www.fotocasa.es/" title="Fotocasa" target="_blank" rel="nofollow noopener">
                    <img loading="lazy" width="263" height="67" alt="Fotocasa Logo" src="./images/fotocasa-logo.png" />
                  </a>
                }
              >
                <p className="heading">De 2013 a 2016</p>
                <h3>Tech Lead en Adevinta</h3>
                <ul>
                  <li>Liderazgo tecnológico de uno de los equipos de producto del portal Inmobiliario Fotocasa.</li>
                  <li>
                    Liderazgo y ejecución de la transformación del Front-End de la compañía, de una plataforma
                    monolítica en .NET hacia una Single-Page Application desacoplada del Back-End implementada con React
                    y basada en{" "}
                    <a
                      href="https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"
                      title="Arquitectura Hexagonal"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      Arquitectura Hexagonal
                    </a>
                    .
                  </li>
                </ul>
              </Box>
            </article>

            <article className="timeline-item">
              <Box
                media={
                  <a href="https://www.inmofactory.com/" title="Inmofactory" target="_blank" rel="nofollow noopener">
                    <img
                      loading="lazy"
                      width="263"
                      height="67"
                      alt="Inmofactory Logo"
                      src="./images/inmofactory-logo.png"
                    />
                  </a>
                }
              >
                <p className="heading">De marzo 2010 a julio 2013</p>
                <h3>Software Engineer en Adevinta</h3>
                <ul>
                  <li>
                    Desarrollo de{" "}
                    <a href="https://www.inmofactory.com/" title="Inmofactory" target="_blank" rel="nofollow noopener">
                      Inmofactory
                    </a>
                    , el CRM inmobiliario del grupo en España
                  </li>
                  <li>
                    Diseño e implementación de búsquedas Near Real Time (NRT) con{" "}
                    <a href="https://lucene.apache.org/core/" title="Lucene" target="_blank" rel="nofollow noopener">
                      Lucene
                    </a>
                  </li>
                  <li>
                    Desarrollo con{" "}
                    <a
                      href="https://dotnet.microsoft.com/apps/aspnet"
                      title="ASP.NET"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      ASP.NET
                    </a>
                  </li>
                </ul>
              </Box>
            </article>

            <article className="timeline-item">
              <Box
                media={
                  <a
                    href="https://dotnet.microsoft.com/"
                    title=".NET Framework"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    <img loading="lazy" width="263" height="67" alt="dotNET Logo" src="./images/dotNET-logo.png" />
                  </a>
                }
              >
                <p className="heading">De 2006 a 2009</p>
                <h3>Consultor especializado en .NET Framework</h3>
                <p>
                  Trabajé en consultorías como{" "}
                  <a href="https://www.everis.com/spain/es/home-1" rel="noopener nofollow" title="everis">
                    everis
                  </a>{" "}
                  o{" "}
                  <a title="ATOS" href="https://atos.net/es/spain" rel="noopener nofollow">
                    ATOS
                  </a>
                  , aprendiendo de grandes profesionales los fundamentos de programación que luego me servirían durante
                  el resto de mi carrera profesional.
                </p>
              </Box>
            </article>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </Section>
  );
}

const styles = css`
  .wrapper {
    padding-right: ${8 * spacing.unit}px;
  }

  .heading {
    display: block;
    font-size: 11px;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  .timeline-wrapper {
    position: relative;
  }

  .timeline:before {
    content: "";
    position: absolute;
    width: ${spacing.unit}px;
    background-color: ${theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 0;
  }

  .timeline-item {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
  }

  .timeline-item::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid ${theme.colors.boxBg};
    border-width: 10px 10px 10px 0;
    border-color: transparent ${theme.colors.boxBg} transparent transparent;
  }

  .timeline-item::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    left: -9px;
    background-color: ${theme.colors.background};
    border: 4px solid ${theme.colors.primary};
    top: 20px;
    border-radius: 50%;
    z-index: 1;
  }

  li,
  p {
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    .wrapper {
      padding: 0;
    }

    .timeline-item {
      padding-right: 0;
    }
  }
`;

export default Experience;
