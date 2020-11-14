import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import css from "styled-jsx/css";
import { theme } from "../styles/theme";
import BlogDate from "./blog-date";

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list container">
      {posts.length > 1 &&
        posts.map((post) => (
          <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
            <a>
              <article className="article">
                <div className='post-image'>
                  <Image
                    src={post.frontmatter.imageSrc}
                    alt={post.frontmatter.title}
                    loading="lazy"
                    unsized
                  />
                </div>
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
  .blog-list {
    margin-top: 5rem;
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

  .post-image img {
    margin: 0 auto 1em;
    width: 100%;
    object-fit: contain;
  }

  article {
    transition: transform 0.6s ease;
    transform: translateX(0px);
    animation: floating 2.5s infinite;
  }

  article:hover {
    transition: transform 0.6s ease;
    transform: translateX(10px);
  }

  article h1 {
    transition: color 0.6s ease;
  }

  article:hover h1 {
    color: ${theme.colors.primary};
  }

  @media (min-width: 768px) {
    .article {
      flex-direction: row;
    }

    .post-image {
      margin-right: 2em;
      max-width: 400px;
      object-fit: scale-down;
    }
  }
`;

export default BlogList;
