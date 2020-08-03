import css from "styled-jsx/css";
import Button from "./button";
import colors from "./colors";

function Hero() {
  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-image">
            <img
              sizes="(max-width: 732px) 100vw, 732px"
              srcSet="images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_200.jpg 200w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_416.jpg 416w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_585.jpg 585w,
images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_732.jpg 732w"
              src="images/mypic/4a8fb4e3-1196-4672-b574-70e8e9dddebf_m8jdid_c_scale,w_732.jpg"
              alt="Daniel de la Cruz"
            />
          </div>
          <div className="hero-body">
            <div className="hero-content">
              <p className="subtitle">
                ¡Hola! <span className="wave">👋</span>
              </p>
              <h1 className="title">Soy Dani.</h1>
              <h2 className="subtitle">
                He trabajado como <strong>ingeniero de software</strong> durante más de una década y quiero ser tu{" "}
                <strong className="is-text-primary">mentor</strong> para ayudarte a dar un{" "}
                <strong>salto en tu carrera</strong>.
              </h2>
              <div className="buttons">
                <Button href="/me" className="button" outlined>
                  Sobre mí
                </Button>
                <Button href="/mentoring" className="button">
                  Mentoring
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .container {
    align-items: center;
    display: flex;
    flex-direction: row-reverse;
    height: 70vh;
    justify-content: center;
  }

  .hero-body {
    width: 50vw;
    padding: 0 100px 0 0;
    display: block;
  }

  .buttons {
    display: flex;
    flex-direction: row;
  }

  .hero-image {
    width: 30vw;
  }

  .is-text-primary {
    color: ${colors.textPrimary};
  }

  .buttons {
    margin: 20px 0;
  }

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
    font-size: 1.3em;
    margin-left: 5px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      margin-top: 50px;
      height: auto;
    }

    .hero-body,
    .hero-image {
      width: 100%;
    }

    .hero-body {
      padding: 20px;
    }

    .hero-image,
    .hero-image img {
      height: 40vh;
    }
    .hero-image img {
      object-fit: cover;
      display: block;
      width: 100vw;
    }

    .title,
    .subtitle {
      margin-bottom: 15px;
    }
  }

  @media (max-width: 375px) {
    .title {
      font-size: 1.9em;
    }

    .subtitle {
      font-size: 1.2em;
    }
  }

  @media (max-width: 360px) {
    .subtitle {
      font-size: 1.3em;
    }
  }

  @media (max-width: 320px) {
    .title {
      font-size: 1.5em;
    }

    .subtitle {
      font-size: 1em;
    }
  }
`;

export default Hero;
