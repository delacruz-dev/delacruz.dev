import css from "styled-jsx/css";
import Adevinta from "./assets/logos/adevinta";
import King from "./assets/logos/king";
import Tempus from "./assets/logos/tempus";
import Typeform from "./assets/logos/typeform";
import Section from "./section";
import { theme } from "../styles/theme";

const logoProps = { fill: theme.colors.text, style: { margin: "0 8px" }, width: "150px" };

function Companies() {
  return (
    <Section>
      <div className="container has-text-centered">
        <h1 className="title">He trabajado para</h1>
        <div className="logos">
          <Tempus {...logoProps} />
          <Adevinta {...logoProps} />
          <King {...logoProps} width="100px" />
          <Typeform {...logoProps} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </Section>
  );
}

const styles = css`
  .logos {
    align-content: center;
    justify-content: space-around;
    display: flex;
    width: 70vw;
  }

  .logos > * {
    margin: 0 4px;
  }

  .logos svg {
    max-width: 250px;
  }

  @media screen and (max-width: 414px) {
    .logos {
      width: 90vw;
    }
  }
`;

export default Companies;
