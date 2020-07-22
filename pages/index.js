import Footer from "../components/footer";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import Hero from "../components/sobre-mi-hero";
import Testimonials from "../components/testimonials";

function Home() {
  return (
    <Layout>
      <NavBar />
      <Hero />
      <Testimonials />
      <Footer />
    </Layout>
  );
}

export default Home;
