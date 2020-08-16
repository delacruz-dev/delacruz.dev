import css from "styled-jsx/css";
import { theme } from "./theme";
import spacing from "../components/spacing";

export default css.global`
  /* cyrillic-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("Open Sans Light"), local("OpenSans-Light"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OX-hpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("Open Sans Light"), local("OpenSans-Light"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OVuhpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("Open Sans Light"), local("OpenSans-Light"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXuhpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("Open Sans Light"), local("OpenSans-Light"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUehpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("Open Sans Light"), local("OpenSans-Light"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXehpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("Open Sans Light"), local("OpenSans-Light"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OXOhpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local("Open Sans Light"), local("OpenSans-Light"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWJ0bf8pkAp6a.woff2) format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFUZ0bf8pkAp6a.woff2) format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWZ0bf8pkAp6a.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVp0bf8pkAp6a.woff2) format("woff2");
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFWp0bf8pkAp6a.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFW50bf8pkAp6a.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("Open Sans Regular"), local("OpenSans-Regular"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOX-hpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOVuhpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXuhpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUehpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXehpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOXOhpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local("Open Sans SemiBold"), local("OpenSans-SemiBold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Open Sans Bold"), local("OpenSans-Bold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOX-hpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Open Sans Bold"), local("OpenSans-Bold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOVuhpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* greek-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Open Sans Bold"), local("OpenSans-Bold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXuhpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+1F00-1FFF;
  }
  /* greek */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Open Sans Bold"), local("OpenSans-Bold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUehpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0370-03FF;
  }
  /* vietnamese */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Open Sans Bold"), local("OpenSans-Bold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXehpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Open Sans Bold"), local("OpenSans-Bold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOXOhpKKSTj5PW.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("Open Sans Bold"), local("OpenSans-Bold"),
      url(https://fonts.gstatic.com/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("PT Serif"), local("PTSerif-Regular"),
      url(https://fonts.gstatic.com/s/ptserif/v11/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.woff2) format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("PT Serif"), local("PTSerif-Regular"),
      url(https://fonts.gstatic.com/s/ptserif/v11/EJRVQgYoZZY2vCFuvAFSzr-_dSb_nco.woff2) format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* latin-ext */
  @font-face {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("PT Serif"), local("PTSerif-Regular"),
      url(https://fonts.gstatic.com/s/ptserif/v11/EJRVQgYoZZY2vCFuvAFYzr-_dSb_nco.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local("PT Serif"), local("PTSerif-Regular"),
      url(https://fonts.gstatic.com/s/ptserif/v11/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* cyrillic-ext */
  @font-face {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("PT Serif Bold"), local("PTSerif-Bold"),
      url(https://fonts.gstatic.com/s/ptserif/v11/EJRSQgYoZZY2vCFuvAnt66qfVyvVp8NAyIw.woff2) format("woff2");
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("PT Serif Bold"), local("PTSerif-Bold"),
      url(https://fonts.gstatic.com/s/ptserif/v11/EJRSQgYoZZY2vCFuvAnt66qWVyvVp8NAyIw.woff2) format("woff2");
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* latin-ext */
  @font-face {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("PT Serif Bold"), local("PTSerif-Bold"),
      url(https://fonts.gstatic.com/s/ptserif/v11/EJRSQgYoZZY2vCFuvAnt66qcVyvVp8NAyIw.woff2) format("woff2");
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: "PT Serif";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("PT Serif Bold"), local("PTSerif-Bold"),
      url(https://fonts.gstatic.com/s/ptserif/v11/EJRSQgYoZZY2vCFuvAnt66qSVyvVp8NA.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC,
      U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

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
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 20px;
  }

  .container.is-narrow {
    max-width: 1024px;
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

  blockquote.twitter-tweet {
    display: inline-block;
    font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 16px;
    border-color: #eee #ddd #bbb;
    border-radius: 5px;
    border-style: solid;
    border-width: 1px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    margin: 10px 5px;
    padding: 0 16px 16px 16px;
    max-width: 468px;
  }

  blockquote.twitter-tweet p {
    font-size: 16px;
    font-weight: normal;
    line-height: 20px;
  }

  blockquote.twitter-tweet a {
    color: inherit;
    font-weight: normal;
    text-decoration: none;
    outline: 0 none;
  }

  blockquote.twitter-tweet a:hover,
  blockquote.twitter-tweet a:focus {
    text-decoration: underline;
  }
  .twitter-tweet,
  .twitter-tweet-rendered {
    margin-left: auto;
    margin-right: auto;
  }
`;
