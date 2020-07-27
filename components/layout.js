import Footer from "./footer";
import Meta from "./meta";
import NavBar from "./navbar";
import css from "styled-jsx/css";

function Layout({ children }) {
  return (
    <>
      <Meta />
      <NavBar />
      <main>{children}</main>
      <script type="text/javascript" src="/js/analytics.js"></script>
      <Footer />
      <style jsx>{styles}</style>
    </>
  );
}
const styles = css`
  main {
    margin-top: 50px;
  }
`;
export default Layout;
