import Image from "next/image";
import ReactMarkdown from "react-markdown";
import css from "styled-jsx/css";
import BlogDate from "./blog-date";
import CodeBlock from "./code-block";

const BlogPost = ({ frontmatter, markdownBody }) => {
  if (!frontmatter) return null;

  return (
    <article className='container'>
      <div className='post-image'>
        <Image
          src={frontmatter.imageSrc}
          alt={frontmatter.title}
          loading='eager'
          unsized
        />
      </div>
      <BlogDate date={frontmatter.date} />
      <h1 className="title">{frontmatter.title}</h1>
      <ReactMarkdown source={markdownBody} escapeHtml={false} skipHtml={false} renderers={{ code: CodeBlock }} />
      <style jsx>{styles}</style>
      <style global jsx>{twitter}</style>
    </article>
  );
};

const styles = css`
  .title {
    margin-top: .5rem;
  }
`;

const twitter = css.global`
  blockquote.twitter-tweet {
    display: inline-block;
    font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    border-color: #eee #ddd #bbb;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    margin: 10px 5px;
    padding: 0 16px 16px 16px;
    max-width: 468px;
  }

  blockquote.twitter-tweet p {
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
  }

  blockquote.twitter-tweet a {
    color: inherit;
    font-weight: normal;
    text-decoration: none;
    outline: 0 none;
  }

  blockquote.twitter-tweet a:hover,
  blockquote.twitter-tweet a:focus {
    text-decoration: underline;
  }

  .twitter-tweet,
  .twitter-tweet-rendered {
    margin-left: auto;
    margin-right: auto;
  }
  `
export default BlogPost;
