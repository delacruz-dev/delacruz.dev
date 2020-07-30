import matter from "gray-matter";
import Head from "next/head";
import React from "react";
import BlogHeader from "../../components/blog-header";
import BlogPost from "../../components/blog-post";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import GlobalStyles from "../../components/global-styles";
import NavBar from "../../components/navbar";

const glob = require("glob");

export default function Post(props) {
  return (
    <Layout
      title={props.frontmatter?.title}
      description={props.frontmatter?.summary}
      url={props.slug}
      image={props.frontmatter?.frontImageSrc}
    >
      <Head>
        {props.frontmatter?.hasTweets && (
          <script async={true} src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
        )}
      </Head>
      <GlobalStyles />
      <NavBar />
      <BlogHeader />
      <BlogPost {...props} />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  //get all .md files in the posts dir
  const blogs = glob.sync("src/posts/**/*.md");

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) => file.split("/")[2].replace(/ /g, "-").slice(0, -3).trim());

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/blog/${slug}`);
  return {
    paths,
    fallback: true,
  };
}
