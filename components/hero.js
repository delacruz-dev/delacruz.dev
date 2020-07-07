import css from "styled-jsx/css";

function Hero() {
  return (
    <>
      <section className="hero has-background-light is-fullheight-with-navbar">
        <div className="hero-image">
          <img
            sizes="(max-width: 1400px) 100vw, 1400px"
            srcSet="
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_200.jpg 200w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_416.jpg 416w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_585.jpg 585w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_732.jpg 732w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_866.jpg 866w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_986.jpg 986w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_1094.jpg 1094w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_1200.jpg 1200w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_1319.jpg 1319w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_1400.jpg 1400w"
            src="images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_1400.jpg"
            alt="Daniel de la Cruz"
          />
        </div>
        <div className="hero-body home">
          <div className="container">
            <p className="subtitle is-size-3 is-size-4-mobile">
              ¡Hola! <span className="wave">👋</span>
            </p>
            <h1 className="title is-size-1 is-size-3-mobile">Soy Dani.</h1>
            <h2 className="subtitle is-size-3 is-size-4-mobile has-text-grey">
              He trabajado como <strong>ingeniero de software</strong> durante más de una década y quiero ser tu{" "}
              <strong className="has-text-primary">mentor</strong> para ayudarte a dar un{" "}
              <strong>salto en tu carrera</strong>.
            </h2>
            <div className="buttons">
              <a
                className="button is-large is-medium-mobile is-dark is-outlined"
                alt="Mentoring a medida para programadores de Front-End"
                href="/#skills"
                data-tracking="about-me-hero-cta"
              >
                Sobre mí
              </a>
              <a
                className="button is-large is-medium-mobile is-dark"
                alt="Mentoring a medida para programadores de Front-End"
                href="/mentoring"
                data-tracking="hero-cta"
              >
                Mentoring
              </a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-10deg);
    }
    20% {
      transform: rotate(12deg);
    }
    30% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(9deg);
    }
    50% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  .wave {
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    animation-name: wave;
    display: inline-block;
    transform-origin: 70% 70%;
  }
`;

export default Hero;
