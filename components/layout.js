import Head from "next/head";
import { useEffect } from "react";
import globalStyles from '../styles/global';
import Footer from "./footer";
import NavBar from "./navbar";

function Layout({
  children,
  title = "Mentoring para programadores",
  description = "Mentoring, tutoría y coaching a medida para programadores y programadoras que buscan dar un salto en su carrera profesional",
  image = "/apple-touch-icon.png",
  url,
}) {
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
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="google-site-verification" content="EjvTftuJDIpIilQKH0ZPmH5_HmVA4dZMdUS8n6-V7hw" />
        <title>{title} - Dani de la Cruz</title>

        <link rel="preconnect dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect dns-prefetch" href="https://www.google.es" />
        <link rel="preconnect dns-prefetch" href="https://stats.g.doubleclick.net" />
        <link rel="preconnect dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin />
        <link rel="canonical" href={url ? `https://delacruz.dev/blog/${url}` : "https://delacruz.dev"} />

        <meta name="author" content="Dani de la Cruz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@d4nidev" />
        <meta name="twitter:domain" content="delacruz.dev" />
        <meta name="twitter:image" content={`https://delacruz.dev${image}`} />
        <meta name="twitter:site" content="@d4nidev" />
        <meta property="og:url" content={url ? `https://delacruz.dev/blog/${url}` : "https://delacruz.dev"} />
        <meta property="og:locale" content="es-ES" />
        <meta property="og:site_name" content="delacruz.dev" />
        <meta name="title" property="og:title" content={`${title} - Dani de la Cruz`} />
        <meta name="image" property="og:image" content={`https://delacruz.dev${image}`} />
        <meta name="description" property="og:description" content={description} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141784503-1"></script>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&family=PT+Serif:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
      <main>{children}</main>
      <script type="text/javascript" src="/js/analytics.js"></script>
      <Footer />
      <style jsx global>{globalStyles}</style>
    </>
  );
}

export default Layout;
