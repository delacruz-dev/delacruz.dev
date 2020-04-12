import Footer from "../components/footer";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import Contact from "../components/contact";

function Home() {
  return (
    <Layout>
      <NavBar />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default Home;