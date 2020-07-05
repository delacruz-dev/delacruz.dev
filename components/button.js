import css from "styled-jsx/css";

function Button({ children, href, title, ...props }) {
  return (
    <>
      <a href={href} title={title} {...props}>
        {children}
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          data-swup-page="about"
        >
          <path
            d="M1.51351 0.000244141L0 1.32543L4.97297 5.6796L0 10.0338L1.51351 11.3589L8 5.6796L1.51351 0.000244141Z"
            fill="#EC008C"
          ></path>
        </svg>
      </a>
      <style jsx>{styles}</style>
    </>
  );
}

const styles = css`
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 0.625rem;
    line-height: 223.4%;
    display: block;
    padding: 5px 15px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    transition: all 0.3s ease-out;
    border: 1px solid #ec008c;
    border-radius: 5px;
  }

  a:hover {
    opacity: 1;
  }

  a svg {
    width: 0.5rem;
    margin-left: 0.9375rem;
    display: inline-block;
    transition: transform 0.2s ease;
    vertical-align: middle;
  }

  a:hover svg {
    transform: translateX(5px);
    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
  }
`;

export default Button;
