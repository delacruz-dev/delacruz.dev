import BlogLayout from "../components/blog-layout";
import Meta from "../components/meta";
import NavBar from "../components/navbar";
import SobreMiHero from "../components/sobre-mi-hero";

function Home() {
  return (
    <BlogLayout>
      <Meta />
      <NavBar />
      <SobreMiHero />
    </BlogLayout>
  );
}

export default Home;
