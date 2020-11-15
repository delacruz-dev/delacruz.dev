import Head from "next/head";
import ConsultancyBenefits from "../components/consultancy-benefits";
import ConsultancyHero from "../components/consultancy-hero";
import ConsultancyPlans from "../components/consultancy-plans";
import ConsultancyPricing from "../components/consultancy-pricing";
import Layout from "../components/layout";

function Consultancy() {
  return (
    <Layout>
      <ConsultancyHero />
      <ConsultancyBenefits />
      <ConsultancyPricing />
      <ConsultancyPlans />
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
    </Layout>
  );
}

export default Consultancy;
