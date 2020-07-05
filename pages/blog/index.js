import matter from "gray-matter";
import BlogList from "../../components/blog-list";
import BlogLayout from "../../components/blog-layout";
import BlogHeader from "../../components/blog-header";
import Meta from "../../components/meta";
import BlogNavbar from "../../components/blog-navbar";

const Index = ({ posts }) => {
  return (
    <BlogLayout>
      <Meta />
      <BlogNavbar />
      <BlogHeader />
      <BlogList allBlogs={posts} />
      {/* <Footer /> */}
    </BlogLayout>
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
