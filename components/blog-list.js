import Link from "next/link";
import ReactMarkdown from "react-markdown";
import blogListStyles from "./blog-list.styles";

const BlogList = ({ allBlogs }) => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  return (
    <div className="content">
      {allBlogs.length > 1 &&
        allBlogs.map((post) => (
          <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
            <a>
              <article>
                <h3>{post.frontmatter.title}</h3>
                <span className="date">{reformatDate(post.frontmatter.date)}</span>

                <ReactMarkdown source={truncateSummary(post.markdownBody)} />
              </article>
            </a>
          </Link>
        ))}
      <style jsx>{blogListStyles}</style>
    </div>
  );
};

export default BlogList;
