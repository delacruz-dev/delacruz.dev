import css from "styled-jsx/css";
import spacing from "../components/spacing";
import { theme } from "./theme";
import typography from "./typography";

export default css.global`
  ${typography}

  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    overflow-y: scroll;
    text-size-adjust: 100%;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: ${theme.fontFamily.sansSerif};
    font-size: 16px;
    overflow-x: hidden;
  }

  html,
  body {
    margin: 0;
    min-height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration-color: inherit;
  }

  article a {
    text-decoration: underline;
  }

  ul {
    margin: 0;
    margin-left: 1.2em;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  ol {
    margin: 0;
    margin-left: 1.2em;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    list-style-position: outside;
    list-style-image: none;
  }

  ul,
  ol,
  p {
    margin-bottom: 1.45rem;
  }

  img {
    max-width: 100%;
  }

  img,
  figure,
  table,
  fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }

  table {
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }

  blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  strong {
    font-weight: bold;
  }

  li {
    margin-bottom: calc(1.45rem / 2);
  }

  ol li {
    padding-left: 0;
  }

  ul li {
    padding-left: 0;
  }

  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  li *:last-child {
    margin-bottom: 0;
  }

  p *:last-child {
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: calc(1.45rem / 2);
  }

  code {
    background-color: ${theme.colors.codeBg};
    display: inline-block;
    font-size: inherit;
    line-height: 1.45rem;
    padding: 0 ${spacing.unit}px;
  }

  blockquote {
    font-style: italic;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
  }

  h2,
  h3 {
    font-family: ${theme.fontFamily.sansSerif};
    font-weight: 500;
  }

  h1 {
    font-family: ${theme.fontFamily.serif};
    letter-spacing: -1px;
    line-height: 1.1875;
    font-size: 3rem;
    font-weight: 600;
  }

  .post h2,
  .post h3 {
    font-family: ${theme.fontFamily.serif};
  }

  .post h2 {
    font-size: 1.8rem;
  }

  .post h3 {
    font-size: 1.5rem;
  }

  .post-image img {
    margin: 0 auto 1em;
    max-height: 50vh;
    object-fit: contain;
    width: 100%;
  }

  h2 {
    font-size: 1.7rem;
    letter-spacing: -0.75px;
    line-height: 1.2;
  }

  h3 {
    font-size: 1.2rem;
    letter-spacing: -0.5px;
    line-height: 1.1875;
    font-weight: 600;
  }

  h1.is-medium {
    font-size: 1.5rem;
  }

  h2.is-medium {
    font-size: 1.2rem;
  }

  p {
    width: 100%;
  }

  p,
  li {
    font-family: ${theme.fontFamily.sansSerif};
    font-size: 1.2rem;
    letter-spacing: -0.5px;
    line-height: 1.5;
    color: ${theme.colors.text};
  }

  .container {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }

  @media screen and (min-width: 1408px) {
    .container {
      max-width: 1344px;
    }
  }

  @media screen and (min-width: 1216px) and (max-width: 1407px) {
    .container {
      max-width: 1152px;
    }
  }

  @media screen and (min-width: 1024px) and (max-width: 1215px) {
    .container {
      max-width: 960px;
    }
  }

  .centered {
    align-items: center;
    justify-content: center;
  }

  .has-text-centered {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .has-text-primary {
    color: ${theme.colors.textPrimary};
  }

  .has-dark-background {
    color: ${theme.colors.textWithDarkBg};
  }

  main {
    min-height: 100vh;
    margin-top: 55px;
  }

  @media (max-width: 414px) {
    h1 {
      font-size: 2.2rem;
      margin-bottom: 1.25rem;
    }
  }

  @media (min-width: 1280px) {
    h1 {
      letter-spacing: -1px;
      line-height: 1;
      line-height: 1.1875;
    }

    h2 {
      font-size: 1.5rem;
      letter-spacing: -0.75px;
      line-height: 1.1667;
    }

    h3 {
      font-size: 1rem;
      letter-spacing: -0.5px;
      line-height: 1.1875;
    }

    p {
      line-height: 1.4375;
    }
  }
`;

