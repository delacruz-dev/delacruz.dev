import Head from "next/head";

export default function Meta(props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{props.siteTitle}</title>
        <meta name="Description" content={props.description}></meta>
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
            margin: 0;
            font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
            overflow-x: hidden;
            color: #0e1e25cc;
            font-size: 16px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          a {
            text-decoration: none;
            color: inherit;
            transition: opacity 0.2s ease;
          }
          a:hover {
            transition: opacity 0.2s ease;
            opacity: 0.5;
            text-decoration-color: inherit;
          }

          a > article {
            transition: transform 0.6s ease;
            transform: translateX(0px);
          }

          a:hover > article {
            transition: transform 0.6s ease;
            transform: translateX(10px);
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

           {
            /* TYPOGRAPHY------------------------------------- */
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
            font-weight: 500;
          }

          h1 {
            font-size: 2rem;
            letter-spacing: -1px;
            line-height: 1.1875;
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

          p, li {
            font-family: "Open Sans", "Helvetica Neue", Helvetica, sans-serif;
            font-size: 1.2rem;
            letter-spacing: -0.5px;
            line-height: 1.5;
            color: #464646;
          }

          @media (min-width: 1280px) {
            h1 {
              font-size: 2rem;
              letter-spacing: -1px;
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
