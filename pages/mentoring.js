import Layout from "../components/layout";
import MentoringBenefits from "../components/mentoring-benefits";
import MentoringHero from "../components/mentoring-hero";
import MentoringStyle from "../components/mentoring-style";
import Pricing from "../components/pricing";

function Mentoring() {
  return (
    <Layout>
      <MentoringHero />
      <Pricing />
      <MentoringStyle />
      <MentoringBenefits />
    </Layout>
  );
}

export default Mentoring;
