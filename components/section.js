import css from "styled-jsx/css";

function Section({ children, className }) {
  return (
    <>
      <section className={className}>{children}</section>
      <style jsx>{styles}</style>
    </>
  );
}
const styles = css`
  section {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
export default Section;
