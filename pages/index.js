import Hero from "../components/hero";
import Layout from "../components/layout";
import MentoringService from "../components/mentoring-service";
import Testimonials from "../components/testimonials";
import Companies from "../components/companies";

function Home() {
  return (
    <Layout>
      <Hero />
      <MentoringService />
      <Testimonials />
      <Companies />
    </Layout>
  );
}

export default Home;
