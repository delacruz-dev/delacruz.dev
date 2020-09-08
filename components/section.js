import cn from "classnames";
import css from "styled-jsx/css";

function Section({ bgColor = "transparent", centered = true, children, className, diagonal = false }) {
  return (
    <>
      <section className={cn(className, { "has-text-centered": centered }, { "diagonal": diagonal })} style={{ backgroundColor: bgColor }}>
        {diagonal ? <div className="diagonal-bar"></div> : null}
        {children}
      </section>
      <style jsx>{styles}</style>
    </>
  );
}
const styles = css`
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  section.diagonal {
    justify-content: center;
    align-items: center;
    min-height: 720px;
    overflow: hidden;
  }

  .diagonal-bar {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%) rotate(-6deg);
    z-index: -2;
    width: 200%;
    height: 440px;
    background-image: linear-gradient(135deg, #4ecdc4, #2cbfcf 63%, #29aac0);
  }
`;
export default Section;
