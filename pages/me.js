import css from "styled-jsx/css";
import Experience from "../components/experience";
import ProfilePicture from "../components/profile-picture";
import Layout from "../components/layout";
import Section from "../components/section";
import Skills from "../components/skills";
import spacing from "../components/spacing";

function Home() {
  return (
    <Layout title="Sobre mi">

      <div className="hero container">
        <div className='hero-picture'>
          <ProfilePicture width={200} height={200} />
        </div>
      </div>

      <Section>
        <div className='container'>
          <h1 className="title">Soy Dani de la Cruz</h1>
          <h2>Ingeniero de Software y mentor profesional</h2>
          <h3 className="is-medium">Sobre mí</h3>
          <p>
            He estado desarrollando productos con tecnologías web desde 2006. Cuando finalicé mis estudios de Ingeniería
            de Telecomunicaciones descubrí que lo que más me había gustado de la carrera eran las asignaturas de
            programación. Así que busqué mi primera oportunidad profesional en el mundo de la consultoría. Años más tarde,
          tuve el privilegio de poder trabajar en grandes empresas como{" "}
            <a href="https://www.adevinta.com/es/spain/" title="Adevinta Spain" target="_blank" rel="nofollow noopener">
              Adevinta
          </a>
          ,{" "}
            <a href="https://www.typeform.com/" title="Typeform" target="_blank" rel="nofollow noopener">
              Typeform
          </a>
          ,{" "}
            <a
              href="https://www.litera.com/litera-and-workshare/"
              title="Workshare"
              target="_blank"
              rel="nofollow noopener"
            >
              Workshare
          </a>{" "}
          o{" "}
            <a href="https://king.com/es" title="King" target="_blank" rel="nofollow noopener">
              King
          </a>
          , desempeñando diferentes roles en cada una de ellas. Actualmente trabajo para{" "}
            <a href="https://www.tempus.com/" title="Tempus" target="_blank" rel="nofollow noopener">
              Tempus
          </a>
          : una empresa de Chicago cuya misión es proporcionar una atención personalizada a pacientes con cáncer,
          depresión o enfermedades infecciosas.
        </p>

          <p>
            Me encanta codificar y entregar software con la calidad adecuada y creo que es importante equilibrar las
            necesidades empresariales con los requisitos de ingeniería.
        </p>

          <p>
            Estoy acostumbrado a transmitir mis conocimientos y ayudar a mis compañeros de trabajo a desarrollar sus
            propias competencias. Me encanta aprender y rodearme de gente más inteligente o con más experiencia que yo,
            que me haga mejorar constantemente a nivel personal y profesional.
        </p>

          <p>
            Creo firmemente en la mejora continua. Por eso siempre busco oportunidades para aprender y aceptar nuevos
            desafíos. Disfruto trabajando en productos innovadores que se ajusten a las necesidades de los usuarios.
        </p>
        </div>
      </Section>

      <div className="container">
        <div className="row">
          <div className="column">
            <Experience />
          </div>
          <div className="column">
            <Skills />
          </div>
        </div>
      </div>

      <article className="container">
        <h1 className="is-medium">Charlas</h1>
        <div className="talks">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/QHzu4hxAhrc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/67D0eJ9oqfo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/kRI4IjWHxxw"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </article>
      <style jsx>{styles}</style>
    </Layout>
  );
}

const styles = css`
  .hero {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hero-picture {
    max-width: 80vw;
    max-height: 50vh;
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .talks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${5 * spacing.unit}px;
  }

  .video {
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    padding-top: ${10 * spacing.unit}px;
    position: relative;
  }

  .video iframe,
  .video object,
  .video embed {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }


  @media (max-width: 1024px) {
    .row {
      flex-direction: column;
    }

    .column:last-child {
      margin-top: ${10 * spacing.unit}px;
    }

    .talks {
      display: flex;
      flex-direction: column;
    }

    .video {
      margin-bottom: ${7 * spacing.unit}px;
    }
  }
`;

export default Home;
