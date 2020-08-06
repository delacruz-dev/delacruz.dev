import css from "styled-jsx/css";
import cn from "classnames";
import { mediumTurqouise } from "./colors";

function Section({ bgColor = "transparent", centered = true, children, className, diagonal = false }) {
  return (
    <>
      <section className={cn(className, { "has-text-centered": centered })} style={{ backgroundColor: bgColor }}>
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
    position: relative;
  }

  .diagonal-bar {
    background-image: linear-gradient(135deg, ${mediumTurqouise}, #2cbfcf 63%, #29aac0);
    height: 440px;
    left: 50%;
    position: absolute;
    top: 100px;
    transform: translate(-50%) rotate(-6deg);
    width: 200%;
    z-index: -2;
  }
`;
export default Section;
