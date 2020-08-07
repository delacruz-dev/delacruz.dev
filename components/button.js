import cx from "classnames";
import Link from "next/link";
import css from "styled-jsx/css";
import { theme } from "../styles/theme";

function Button({ children, className, href, outlined = false, title, size, withAnimation = false, ...props }) {
  return (
    <>
      <Link href={href}>
        <a type="button" href={href} title={title} {...props} className={cx(className, { [size]: !!size, outlined })}>
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
      </Link>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  a {
    align-items: center;
    background: ${theme.colors.buttonPrimary};
    border-radius: 4px;
    border: 1px solid ${theme.colors.buttonBorder};
    color: ${theme.colors.buttonPrimaryText};
    display: inline-flex;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    height: 3rem;
    justify-content: center;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    min-width: 3rem;
    padding: 0 1.5rem;
    position: relative;
    text-decoration: none;
    transition: all 0.3s ease-out;
    vertical-align: middle;
    white-space: nowrap;
    word-break: keep-all;
  }

  a:hover,
  a:active {
    background: ${theme.colors.buttonPrimaryHover};
    cursor: pointer;
  }

  a svg {
    animation: arrow 2.5s infinite;
    display: inline-block;
    fill: ${theme.colors.buttonPrimaryText};
    margin-left: 0.3rem;
    vertical-align: middle;
    width: 0.5rem;
  }

  .small {
    font-size: 0.875rem;
    padding: 0 1rem;
    height: 2.5rem;
    min-width: 2.5rem;
    margin-bottom: 0;
  }

  .big {
    font-size: 1.2rem;
  }

  .huge {
    font-size: 1.5rem;
  }

  .outlined {
    background-color: transparent;
    color: ${theme.colors.buttonOutlinedText};
    transition: all 0.2s ease-out;
  }

  .outlined:hover,
  .outlined:active {
    color: ${theme.colors.buttonOutlinedTextHover};
    background-color: ${theme.colors.buttonOutlinedHover};
  }

  @media (min-width: 768px) {
    a {
      font-size: 1rem;
    }

    a svg {
      margin-left: 0.9375rem;
    }
  }

  @keyframes arrow {
    0%,
    100% {
      transform: translateX(5px);
    }
    50% {
      transform: translateX(0px);
    }
  }
`;

export default Button;
