import Link from "next/link";
import ReactMarkdown from "react-markdown";
import css from "styled-jsx/css";
import BlogDate from "./blog-date";

const BlogList = ({ allBlogs }) => {
  return (
    <div className="container">
      {allBlogs.length > 1 &&
        allBlogs.map((post) => (
          <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
            <a>
              <article className="article">
                <img src={post.frontmatter.frontListImageSrc} />
                <div>
                  <BlogDate date={post.frontmatter.date} />
                  <h1 className="title">{post.frontmatter.title}</h1>
                  <ReactMarkdown source={post.frontmatter.summary} />
                </div>
              </article>
            </a>
          </Link>
        ))}
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  .container {
    flex-grow: 1;
    padding-right: 2rem;
    padding-left: 1rem;
    pargin-top: ;
  }

  .title {
    margin-top: 0.3em;
  }

  .article {
    margin-top: 2em;
    margin-bottom: 4em;
    display: flex;
    flex-direction: column;
  }

  .article > img {
    margin: 0 auto 1em;
    width: 100%;
    object-fit: scale-down;
  }

  @media (min-width: 768px) {
    .container {
      flex-grow: none;
      margin-left: 30vw;
      margin-top: 90px;
      padding-left: 0;
      padding-right: 4rem;
      width: 70vw;
    }

    .article {
      flex-direction: row;
    }

    .article > img {
      margin-right: 2em;
      width: 200px;
      object-fit: scale-down;
    }
  }
`;

export default BlogList;
