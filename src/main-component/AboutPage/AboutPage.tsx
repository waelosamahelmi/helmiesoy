import React, { Fragment } from "react";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import PageTitle from "../../components/pagetitle/PageTitle";
import AboutSection from "../../components/AboutComponents/AboutSection/AboutSection";
import BrandSection from "../../components/AboutComponents/BrandSection/BrandSection";
import FeatureSection from "../../components/AboutComponents/FeatureSection/FeatureSection";
import TeamSection from "../../components/AboutComponents/TeamSection/TeamSection";
import AwardSection from "../../components/AboutComponents/AwardSection/AwardSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import AiFooterSection from "../../components/ai-marketing-components/AiFooterSection/AiFooterSection";

const AboutPage: React.FC = () => {
  return (
    <Fragment>
      <div className='ai-marketing'>
        <div className='about-page inner-page'>
          <div className="body_wrap o-clip">
            <HeaderTwo />
            <main>
              <PageTitle pageTitle="About Us" pagesub="About Us" />
              <AboutSection />
              <BrandSection />
              <FeatureSection />
              <TeamSection />
              <AwardSection />
            </main>
            <AiFooterSection />
            <Scrollbar />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
