import Link from "next/link";
import blogHeaderStyles from "./blog-header.styles";

export default function BlogHeader(props) {
  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/">
          <h1>Blog</h1>
        </Link>
      </nav>
      <style jsx>{blogHeaderStyles}</style>
    </header>
  );
}
