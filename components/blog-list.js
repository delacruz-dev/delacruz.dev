import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = ({ allBlogs }) => {
  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate);
    return date.toDateString().slice(4);
  }

  return (
    <>
      {allBlogs.length > 1 &&
        allBlogs.map((post) => (
          <Link key={post.slug} href={{ pathname: `/blog/${post.slug}` }}>
            <div class="column">
              <div class="box blog-post">
                <div className="hero_image">
                  <img
                    src={post.frontmatter.hero_image}
                    alt={post.frontmatter.hero_image}
                  />
                </div>
                <div className="blog__info">
                  <h3 class="title is-4">{post.frontmatter.title}</h3>
                  <div class="date">
                    <span class="tag">
                      {reformatDate(post.frontmatter.date)}
                    </span>
                  </div>
                  <p>
                    <ReactMarkdown
                      source={truncateSummary(post.markdownBody)}
                    />
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
};

export default BlogList;
