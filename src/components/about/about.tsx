import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import aboutBg from "../../images/bg/about-bg.png";

// Animated GIFs
import gif1 from "../../images/icon/original-66948a0d81d.gif";
import gif2 from "../../images/icon/0deec720000b2066289b.gif";
import gif3 from "../../images/icon/b10c3e43e836d32554bf.gif";

// About images
import img01 from "../../images/about/img01.jpg";
import img02 from "../../images/about/img02.jpg";
import img03 from "../../images/about/img03.jpg";
import { Link } from "react-router-dom";


const AboutSection: React.FC = () => {
  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".xb-about-img-wrap");
    if (bgEl) bgEl.style.backgroundImage = `url(${aboutBg})`;
  }, []);

  const aboutImages = [img01, img02, img03];

  return (
    <section className="about pt-140">
      <div className="container">
        <div className="sec-title about-sec-title mb-75">
          <span className="sub-title">Who We Are</span>
          <h2 className="title">
            We blend
            <span>
              <img src={gif1} alt="animation" />
            </span>{" "}
            creativity with technology to
            <span>
              <img src={gif2} alt="animation" />
            </span>
            craft digital experiences that drive growth{" "}
            <span>
              <img src={gif3} alt="animation" />
            </span>
          </h2>
        </div>
      </div>

      {/* ✅ One single marquee with all 3 images */}
      <div className="xb-about-img-wrap bg_img wow">
        <Marquee speed={40} gradient={false} pauseOnHover={false}>
          {aboutImages.map((img, idx) => (
            <div key={idx} className="xb-about-img-item img-hove-effect">
              <div className="xb-img">
                <Link to="/service">
                  <img src={img} alt={`about-${idx + 1}`} />
                </Link>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AboutSection;
