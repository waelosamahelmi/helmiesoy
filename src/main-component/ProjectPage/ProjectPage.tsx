import React, { Fragment } from "react";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import AiFooterSection from "../../components/ai-marketing-components/AiFooterSection/AiFooterSection";
import ProjectSection from "./ProjectSection";

const ProjectPage: React.FC = () => {
  return (
    <Fragment>
      <div className='ai-marketing'>
        <div className='service-page inner-page'>
          <div className="body_wrap o-clip">
            <HeaderTwo />
            <main>
              <PageTitle pageTitle="Our Projects" pagesub="Projects" />
              <ProjectSection />
            </main>
            <AiFooterSection />
            <Scrollbar />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectPage;
