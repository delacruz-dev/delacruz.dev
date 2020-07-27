import Layout from "../components/layout";
import MentoringBenefits from "../components/mentoring-benefits";
import MentoringIntro from "../components/mentoring-intro";
import MentoringStyle from "../components/mentoring-style";
import Pricing from "../components/pricing";

function Mentoring() {
  return (
    <Layout>
      <MentoringIntro />
      <Pricing />
      <MentoringStyle />
      <MentoringBenefits />
    </Layout>
  );
}

export default Mentoring;
