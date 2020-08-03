import Picture from "../components/image-rounded";
import Layout from "../components/layout";
import Section from "../components/section";
import Skills from "../components/skills";

function Home() {
  return (
    <Layout>
      <Section>
        <div className='container has-text-centered '>
          <Picture />
          <h1 className='title'>Soy Dani de la Cruz</h1>
          <h2>Ingeniero de Software y mentor profesional</h2>
        </div>
      </Section>
      <Section>
        <Skills />
      </Section>
    </Layout>
  );
}

export default Home;
