import Layout from "../components/layout";
import MentoringBenefits from "../components/mentoring-benefits";
import MentoringHero from "../components/mentoring-hero";
import MentoringPricing from "../components/mentoring-pricing";

function Mentoring() {
  return (
    <Layout>
      <MentoringHero />
      <MentoringBenefits />
      <MentoringPricing />
    </Layout>
  );
}

export default Mentoring;
