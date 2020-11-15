import css from "styled-jsx/css";
import spacing from "./spacing";
import { theme } from "../styles/theme";

function Box({ media, children }) {
  return (
    <>
      <article className="box">
        {media && <figure className="box-media">{media}</figure>}
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
    background-color: ${theme.colors.boxBg};
    border-radius: 4px;
    box-shadow: 0 3px 21px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    padding: ${spacing.boxPadding}px;
    position: relative;
  }

  .box-media {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: '100%';
  }

  .box-content {
    margin-top: 1em;
  }

`;

export default Box;
