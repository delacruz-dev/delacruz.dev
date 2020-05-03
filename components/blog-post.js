import ReactMarkdown from "react-markdown";
import blogListStyles from "./blog-list.styles";

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toDateString().slice(4);
}

const BlogPost = ({ frontmatter, markdownBody, siteTitle }) => {
  if (!frontmatter) return null;

  return (
    <article className="content">
      <h1>{frontmatter.title}</h1>
      <h3>{reformatDate(frontmatter.date)}</h3>
      <div>
        <ReactMarkdown source={markdownBody} skipHtml={true}/>
      </div>
      <style jsx>{blogListStyles}</style>
    </article>
  );
};

export default BlogPost;
