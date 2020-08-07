import matter from "gray-matter";
import BlogHeader from "../../components/blog-header";
import BlogList from "../../components/blog-list";
import Layout from "../../components/layout";

const Index = ({ posts }) => {
  return (
    <Layout>
      <BlogHeader />
      <BlogList posts={posts} />
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  // Get posts & context from folder
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
    return data.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
  })(require.context("../../posts", true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}
