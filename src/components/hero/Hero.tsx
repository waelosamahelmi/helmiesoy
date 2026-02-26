import React from "react";
import { Link } from "react-router-dom";

// Image imports
import heroBg from "../../images/bg/hero_bg.png";
import featureIcon1 from "../../images/icon/feature-icon01.svg";
import featureIcon2 from "../../images/icon/feature-icon02.svg";
import featureIcon3 from "../../images/icon/feature-icon03.svg";

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero hero-style pos-rel bg_img"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="row">
          {/* ---------- Left Content ---------- */}
          <div className="col-lg-10 col-md-10">
            <div className="hero-content">
              <p className="sub-title scale-animation wow" style={{ fontSize: '18px', marginBottom: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Web Development • Design • 3D Visualization • Restaurant Solutions
              </p>
              <h2 className="title scale-animation wow">
                Where Creativity Meets Technology
              </h2>
              <p className="sub-title scale-animation wow">
                We craft digital experiences that captivate, convert, and perform.
                From stunning 3D visualizations to full-scale restaurant platforms,
                Helmies brings your vision to life with cutting-edge technology
                and creative excellence.
              </p>
              <p className="scale-animation wow" style={{ fontSize: '15px', opacity: 0.7, marginTop: '10px' }}>
                Based in Lahti, Finland — serving clients worldwide.
              </p>
              <div className="hero-btn scale-animation wow">
                <Link className="thm-btn agency-btn" to="/contact">
                  <span className="text">Start Your Project</span>
                  <span className="arrow">
                    <span className="arrow-icon">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                        <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                        <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                        <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                        <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                        <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                        <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                      </svg>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="5.06592" y="19.9785" width="20.5712" height="2.61221" transform="rotate(-40.2798 5.06592 19.9785)" fill="white" />
                        <rect x="7.97095" y="7.24463" width="2.61221" height="2.61221" transform="rotate(-40.2798 7.97095 7.24463)" fill="white" />
                        <rect x="11.6523" y="7.54834" width="2.61221" height="2.61221" transform="rotate(-40.2798 11.6523 7.54834)" fill="white" />
                        <rect x="15.334" y="7.85205" width="2.61221" height="2.61221" transform="rotate(-40.2798 15.334 7.85205)" fill="white" />
                        <rect x="18.7119" y="11.8374" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.7119 11.8374)" fill="white" />
                        <rect x="18.4084" y="15.52" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.4084 15.52)" fill="white" />
                        <rect x="18.104" y="19.2012" width="2.61221" height="2.61221" transform="rotate(-40.2798 18.104 19.2012)" fill="white" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Features ---------- */}
        <div className="row mt-55">
          <div className="col-lg-4 col-md-6 mt-30">
            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="700ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={featureIcon1} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Web Development</h2>
                  <p className="xb-item--content">
                    Custom websites, e-commerce, and progressive web apps built
                    with React, Next.js, and modern frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30">
            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="800ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={featureIcon2} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">Creative Design</h2>
                  <p className="xb-item--content">
                    Brand identity, UI/UX, graphic design, 3D visualization and
                    motion graphics with visual excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-30">
            <div
              className="xb-feature-item wow fadeInUp"
              data-wow-delay="900ms"
              data-wow-duration="600ms"
            >
              <div className="xb-item--inner xb-border">
                <span className="xb-item--icon">
                  <img src={featureIcon3} alt="icon" />
                </span>
                <div className="xb-item--holder">
                  <h2 className="xb-item--title">AI-Powered Solutions</h2>
                  <p className="xb-item--content">
                    Intelligent automation, AI integrations, agents, and
                    workflows to supercharge your business operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
