import css from "styled-jsx/css";

function Picture() {
  return (
    <>
      <figure>
        <img src="/images/mypic/badge.jpg" alt="Dani de la cruz" />
      </figure>
      <style jsx>{styles}</style>
    </>
  );
}
const styles = css`
  img {
    border-radius: 290486px;
  }
`;

export default Picture;
