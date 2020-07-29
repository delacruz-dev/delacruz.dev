import Head from "next/head";
import { useEffect } from "react";
import colors from "./colors";

export default function Meta({ title = "Mentoring para programadores - Dani de la Cruz" }) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", "UA-141784503-1");
  });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Mentoring, tutoría y coaching a medida para programadores y programadoras que buscan dar un salto en su carrera profesional."
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google-site-verification" content="EjvTftuJDIpIilQKH0ZPmH5_HmVA4dZMdUS8n6-V7hw" />
        <title>{title}</title>

        <link rel="preconnect dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect dns-prefetch" href="https://cdnjs.cloudflare.com" />

        <link rel="canonical" href="{{ .Permalink }}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@d4nidev" />
        <meta name="twitter:domain" content="delacruz.dev" />
        <meta name="twitter:image" content="https://delacruz.dev/favicon/apple-touch-icon.png" />
        <meta name="twitter:site" content="@d4nidev" />
        <meta name="og:locale" content="es-ES" />
        <meta name="og:title" content="Mentoring para programadores - Dani de la Cruz" />
        <meta name="og:image" content="https://delacruz.dev/favicon/apple-touch-icon.png" />
        <meta
          name="og:description"
          content="Mentoring, tutoría y coaching a medida para programadores y programadoras que buscan dar un salto en su carrera profesional."
        />
        <meta name="og:site_name" content="delacruz.dev" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141784503-1"></script>
      </Head>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=PT+Serif&display=swap");
          * {
            box-sizing: inherit;
          }

          html {
            box-sizing: border-box;
            overflow-y: scroll;
          }

          body {
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            background-color: ${colors.background};
            color: ${colors.textPrimary};
            font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
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
            font-size: 0.85rem;
            line-height: 1.45rem;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            font-family: "PT Serif", serif;
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            padding-bottom: 0;
            padding-left: 0;
            padding-right: 0;
            padding-top: 0;
            margin-bottom: 1.45rem;
            color: inherit;
            text-rendering: optimizeLegibility;
          }

          h1,
          h2 {
            font-family: "Open Sans", sans-serif;
            font-weight: 500;
          }

          h1 {
            letter-spacing: -1px;
            line-height: 1.1875;
            font-size: 3rem;
            font-weight: 600;
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
            color: #a0a0a0;
            font-weight: normal;
          }

          p,
          li {
            font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
            font-size: 1.2rem;
            letter-spacing: -0.5px;
            line-height: 1.5;
            color: #464646;
          }

          .container {
            max-width: 1280px;
            margin-left: auto;
            margin-right: auto;
            padding: 50px;
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
              color: #a0a0a0;
              font-weight: normal;
            }

            p {
              line-height: 1.4375;
            }
          }
        `}
      </style>
    </>
  );
}
