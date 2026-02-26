import React from "react";
import featureBg from "../../images/bg/features-gradient-bg.png";
import diamondIcon from "../../images/icon/diamond-icon02.gif";
import feaIcon01 from "../../images/icon/fea-small-icon01.svg";
import feaIcon02 from "../../images/icon/fea-small-icon02.svg";
import feaIcon03 from "../../images/icon/fea-small-icon03.svg";
import feaIcon04 from "../../images/icon/fea-small-icon04.svg";
import feaIcon05 from "../../images/icon/fea-small-icon05.svg";
import feaIcon06 from "../../images/icon/fea-small-icon06.svg";
import featureImg01 from "../../images/feature/feature-img01.png";
import BrandSection from "./BrandSection";


const FeaturesAndBrands: React.FC = () => {
  return (
    <div
      className="bg_img"
      style={{
        background: `url(${featureBg}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      {/* Feature Section */}
      <section className="feature pt-145">
        <div className="container">
          <div className="sec-title sec-title-center fea-sec-title text-center mb-50">
            <span className="sub-title">Why Helmies?</span>
            <h2 className="title">
              Your success{" "}
              <span>
                <img src={diamondIcon} alt="icon" />
              </span>{" "}
              is our mission
            </h2>
          </div>

          <div className="row mt-none-30 align-items-center">
            {/* Left Features */}
            <div className="col-lg-4 col-md-6 mt-30">
              <div className="xb-feature-left-item">
                <div
                  className="xb-feature-item xb-feature-item2 wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="600ms"
                >
                  <div className="xb-item--inner justify-content-end xb-border">
                    <h2 className="xb-item--title text-end">
                      Production-Grade <br /> Solutions
                    </h2>
                    <span className="xb-item--icon">
                      <img src={feaIcon01} alt="icon" />
                    </span>
                  </div>
                </div>

                <div
                  className="xb-feature-item xb-feature-item2 wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="600ms"
                >
                  <div className="xb-item--inner justify-content-end xb-border">
                    <h2 className="xb-item--title text-end">
                      Modern <br /> Tech Stack
                    </h2>
                    <span className="xb-item--icon">
                      <img src={feaIcon02} alt="icon" />
                    </span>
                  </div>
                </div>

                <div
                  className="xb-feature-item xb-feature-item2 wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="600ms"
                >
                  <div className="xb-item--inner justify-content-end xb-border">
                    <h2 className="xb-item--title text-end">
                      AI-Powered <br /> Innovation
                    </h2>
                    <span className="xb-item--icon">
                      <img src={feaIcon03} alt="icon" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="col-lg-4 col-md-6 order-lg-last mt-30">
              <div className="xb-feature-right-item">
                <div
                  className="xb-feature-item xb-feature-item2 xb-border wow fadeInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="600ms"
                >
                  <div className="xb-item--inner xb-border">
                    <span className="xb-item--icon">
                      <img src={feaIcon04} alt="icon" />
                    </span>
                    <h2 className="xb-item--title">
                      Finnish Market <br /> Expertise
                    </h2>
                  </div>
                </div>

                <div
                  className="xb-feature-item xb-feature-item2 xb-border wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="600ms"
                >
                  <div className="xb-item--inner xb-border">
                    <span className="xb-item--icon">
                      <img src={feaIcon05} alt="icon" />
                    </span>
                    <h2 className="xb-item--title">
                      Creative <br /> Excellence
                    </h2>
                  </div>
                </div>

                <div
                  className="xb-feature-item xb-feature-item2 xb-border wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="600ms"
                >
                  <div className="xb-item--inner xb-border">
                    <span className="xb-item--icon">
                      <img src={feaIcon06} alt="icon" />
                    </span>
                    <h2 className="xb-item--title">
                      99.9% <br /> Uptime
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-lg-4 col-md-12 mt-30">
              <div
                className="xb-feature-img pos-rel text-center wow zoomIn"
                data-wow-delay="0ms"
                data-wow-duration="600ms"
              >
                <ul className="xb-feature-shape list-unstyled">
                  <li>
                    <svg width="391" height="235" viewBox="0 0 391 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="195.5" cy="117.5" rx="195" ry="117" stroke="url(#helmies_gradient1)" strokeWidth="1.5" strokeDasharray="4 4" />
                      <defs>
                        <linearGradient id="helmies_gradient1" x1="0" y1="0" x2="391" y2="235" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#23c9ff" />
                          <stop offset="0.5" stopColor="#c0fff3" />
                          <stop offset="1" stopColor="#23c9ff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </li>
                  <li>
                    <svg width="391" height="235" viewBox="0 0 391 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="195.5" cy="117.5" rx="195" ry="117" stroke="white" strokeWidth="1.5" strokeDasharray="4 4" />
                    </svg>
                  </li>
                  <li>
                    <svg width="391" height="235" viewBox="0 0 391 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="195.5" cy="117.5" rx="195" ry="117" stroke="url(#helmies_gradient2)" strokeWidth="1.5" strokeDasharray="4 4" />
                      <defs>
                        <linearGradient id="helmies_gradient2" x1="0" y1="0" x2="391" y2="235" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#23c9ff" />
                          <stop offset="0.5" stopColor="#c0fff3" />
                          <stop offset="1" stopColor="#23c9ff" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </li>
                  <span className="shape">
                    <img src={featureImg01} alt="simage" />
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BrandSection />
    </div>
  );
};

export default FeaturesAndBrands;