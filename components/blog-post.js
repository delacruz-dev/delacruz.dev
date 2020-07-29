import ReactMarkdown from "react-markdown";
import css from "styled-jsx/css";
import BlogDate from "./blog-date";
import CodeBlock from "./code-block";

const BlogPost = ({ frontmatter, markdownBody, siteTitle }) => {
  if (!frontmatter) return null;

  return (
    <article className="container">
      <img
        className="frontImage"
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcSet={frontmatter.frontImageSrcSet}
        src={frontmatter.frontImageSrc}
        alt={frontmatter.title}
      />
      <div className="content">
        <BlogDate date={frontmatter.date} />
        <h1 className="title">{frontmatter.title}</h1>
        <ReactMarkdown
          source={markdownBody}
          escapeHtml={false}
          skipHtml={false}
          renderers={{ code: CodeBlock }}
        />
      </div>
      <style jsx>{styles}</style>
    </article>
  );
};

const styles = css`
  .container {
    flex-grow: 1;
  }

  .content {
    padding-right: 2rem;
    padding-left: 1rem;
  }

  .frontImage {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  .title {
    margin-top: 0.4rem;
  }

  @media (min-width: 768px) {
    .content {
      flex-grow: none;
      padding-left: 0;
      padding-right: 4rem;
    }

    .container {
      margin-left: 30vw;
      margin-top: 90px;
      width: 70vw;
    }

    .frontImage {
      margin-top: 2em;
      width: 40vw;
    }
  }
`;

export default BlogPost;
