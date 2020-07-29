import css from "styled-jsx/css";
import colors from "./colors";
import spacing from "./spacing";

function Box({ media, children }) {
  return (
    <>
      <article className="box">
        <figure className="box-media">{media}</figure>
        <div className="box-content">
          <div className="content">{children}</div>
        </div>
      </article>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  .box {
    background-color: ${colors.backgroundBox};
    border-radius: 4px;
    border: 1px solid ${colors.borderBox};
    display: flex;
    flex-direction: column;
    padding: ${spacing.boxPadding}px;
  }

  .box-media {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0 auto;
  }

  .box-media img {
    border-radius: 290486px;
  }
`;

export default Box;
