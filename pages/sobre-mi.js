import BlogLayout from "../components/blog-layout";
import Footer from "../components/footer";
import MentoringService from "../components/mentoring-service";
import ConsultancyService from "../components/consultancy-service";
import Meta from "../components/meta";
import NavBar from "../components/navbar";
import Referencias from "../components/referencias";
import SobreMiHero from "../components/sobre-mi-hero";

function Home() {
  return (
    <BlogLayout>
      <Meta />
      <NavBar />
      <SobreMiHero />
      <MentoringService />
      <ConsultancyService />
      <Referencias />
      <Footer />
    </BlogLayout>
  );
}

export default Home;
