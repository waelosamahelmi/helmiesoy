import React, { Fragment } from "react";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import PageTitle from "../../components/pagetitle/PageTitle";
import ProjectDetailsSection from "./ProjectDetailsSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import AiFooterSection from "../../components/ai-marketing-components/AiFooterSection/AiFooterSection";

const ProjectDetails: React.FC = () => {
  return (
    <Fragment>
      <div className='ai-marketing'>
        <div className='service-page inner-page'>
          <div className="body_wrap o-clip">
            <HeaderTwo />
            <main>
              <PageTitle pageTitle="Project details" pagesub="Project details" />
              <ProjectDetailsSection />
            </main>
            <AiFooterSection />
            <Scrollbar />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProjectDetails;
