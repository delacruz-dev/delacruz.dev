import Picture from "../components/image-rounded";
import Layout from "../components/layout";
import Section from "../components/section";
import Skills from "../components/skills";
import Experience from "../components/experience";
import css from "styled-jsx/css";

function Home() {
  return (
    <Layout title="Sobre mi">
      <Section>
        <div className="container has-text-centered ">
          <Picture />
          <h1 className="title">Soy Dani de la Cruz</h1>
          <h2>Ingeniero de Software y mentor profesional</h2>
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
      <style jsx>{styles}</style>
    </Layout>
  );
}

const styles = css`
  .row {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 930px) {
    .row {
      flex-direction: column;
    }
  }
`;

export default Home;
