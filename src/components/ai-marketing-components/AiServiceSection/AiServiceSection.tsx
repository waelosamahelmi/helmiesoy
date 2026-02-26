import React from "react";
import { Link } from "react-router-dom";

import img17 from "../../../images/service/img17.png";
import img18 from "../../../images/service/img18.png";
import img19 from "../../../images/service/img19.png";
import img20 from "../../../images/service/img20.png";

const AiServiceSection: React.FC = () => {

  // === Reusable Arrow SVG ===
  const ArrowIcon = () => (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6.12842"
        y="21.8882"
        width="22.7911"
        height="2.8941"
        transform="rotate(-40.2798 6.12842 21.8882)"
        fill="#00FF97"
      />
      <rect
        x="9.34692"
        y="7.78027"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 9.34692 7.78027)"
        fill="#00FF97"
      />
      <rect
        x="13.4258"
        y="8.11658"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 13.4258 8.11658)"
        fill="#00FF97"
      />
      <rect
        x="17.5046"
        y="8.45337"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 17.5046 8.45337)"
        fill="#00FF97"
      />
      <rect
        x="21.2471"
        y="12.8689"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 21.2471 12.8689)"
        fill="#00FF97"
      />
      <rect
        x="20.9109"
        y="16.9485"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 20.9109 16.9485)"
        fill="#00FF97"
      />
      <rect
        x="20.5735"
        y="21.0273"
        width="2.8941"
        height="2.8941"
        transform="rotate(-40.2798 20.5735 21.0273)"
        fill="#00FF97"
      />
    </svg>
  );

  return (
    <section id="service" className="service pt-30">
      <div className="container-fluid">
        <div className="ai-service-wrap sec-border mlr-20">
          {/* === Heading Section === */}
          <div className="ai-service-heading ul_li_between mb-60 mt-40">
            <div className="sec-title-three">
              <span className="sub-title mb-25">Our Services</span>
              <h2 className="title xb-text-reveal">
                We help businesses build exceptional digital products and
                experiences that drive real results.
              </h2>
            </div>
            <p className="content">
              From web development and creative design to AI-powered automation
              and restaurant digitalization — we deliver solutions that scale.
            </p>
          </div>

          {/* === Image Service Items === */}
          <div className="ai-service-img">
            {[
              {
                img: img17,
                title: "Web Development & SaaS",
              },
              {
                img: img18,
                title: "Design & 3D Visualization",
              },
              {
                img: img19,
                title: "AI Services & Automation",
              },
              {
                img: img20,
                title: "Restaurant Solutions (PlateOS)",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`ai-service-img-item wow fadeInLeft`}
                data-wow-delay={`${index * 150}ms`}
                data-wow-duration="600ms"
              >
                <div className="img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="ai-img-content">
                  <h4 className="title">{item.title}</h4>
                  <p className="content">Tailored solutions for your business</p>
                  <Link to="/service-details" className="arrow">
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiServiceSection;
