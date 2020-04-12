import matter from "gray-matter";
import BlogList from "../../components/blog-list";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Index = ({ posts }) => {
  return (
    <Layout>
      <Navbar />
      <section id="blog" class="section has-background-white-ter">
        <div class="container has-text-centered">
          <h2 class="title">Artículos recientes</h2>
          <BlogList allBlogs={posts} />
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  //get posts & context from folder
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
