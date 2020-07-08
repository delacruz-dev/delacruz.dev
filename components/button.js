import css from "styled-jsx/css";
import colors from "./colors";

function Button({ children, href, title, withAnimation = true, ...props }) {
  return (
    <>
      <a href={href} title={title} {...props}>
        {children}
        {withAnimation && (
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            data-swup-page="about"
          >
            <path d="M1.51351 0.000244141L0 1.32543L4.97297 5.6796L0 10.0338L1.51351 11.3589L8 5.6796L1.51351 0.000244141Z"></path>
          </svg>
        )}
      </a>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  a {
    border: 1px solid ${colors.primary};
    color: ${colors.primary};
    display: block;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.01em;
    line-height: 223.4%;
    padding: 5px 15px;
    position: relative;
    text-transform: uppercase;
    transition: all 0.3s ease-out;
  }

  a:before {
    background: ${colors.primary};
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform-origin: 50% 100%;
    transform: scaleY(0);
    transition: transform 0.4s ease-out;
    z-index: -1;
  }

  a:hover:before {
    transform: scaleY(1);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  a:hover {
    color: ${colors.white};
    opacity: 1;
  }

  a svg {
    animation: arrow 2.5s infinite;
    display: inline-block;
    fill: ${colors.primary};
    margin-left: 0.9375rem;
    vertical-align: middle;
    width: 0.5rem;
  }

  a:hover svg {
    fill: ${colors.white};
  }

  @keyframes arrow {
    0%,
    100% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(0px);
    }
  }
`;

export default Button;
