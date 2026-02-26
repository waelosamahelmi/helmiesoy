import React, { Fragment } from "react";
import HeaderTwo from "../../components/HeaderTwo/HeaderTwo";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import AiFooterSection from "../../components/ai-marketing-components/AiFooterSection/AiFooterSection";
import ServiceDetails from "./ServiceDetails";

const SeviceSinglePage: React.FC = () => {
    return (
        <Fragment>
            <div className='ai-marketing'>
                <div className='about-page inner-page'>
                    <div className="body_wrap o-clip">
                        <HeaderTwo />
                        <main>
                            <PageTitle pageTitle="Service details" pagesub="Service details" />
                            <ServiceDetails />
                        </main>
                        <AiFooterSection />
                        <Scrollbar />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SeviceSinglePage;
