import Head from "next/head";
import Layout from "../components/layout";
import MentoringBenefits from "../components/mentoring-benefits";
import MentoringHero from "../components/mentoring-hero";
import MentoringPlans from "../components/mentoring-plans";
import MentoringPricing from "../components/mentoring-pricing";
import MentoringStyle from "../components/mentoring-style";

function Mentoring() {
  return (
    <Layout>
      <MentoringHero />
      <MentoringBenefits />
      <MentoringPricing />
      <MentoringPlans />
      <MentoringStyle />
      <Head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>
      <script defer src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
    </Layout>
  );
}

export default Mentoring;
