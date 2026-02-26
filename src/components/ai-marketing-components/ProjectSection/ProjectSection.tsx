import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Image imports
import img1 from "../../../images/project/img08.png";
import img2 from "../../../images/project/img11.png";
import img3 from "../../../images/project/img10.png";
import img4 from "../../../images/project/img09.png";

// Register plugin
gsap.registerPlugin(ScrollTrigger);


const ProjectSection: React.FC = () => {
  // === GSAP Activation ===
  useEffect(() => {
    const projectScale = () => {
      const tl = gsap.timeline();
      const mm = gsap.matchMedia();

      mm.add("(min-width: 767px)", () => {
        const panels = document.querySelectorAll<HTMLElement>(".des-portfolio-panel");

        panels.forEach((panel) => {
          gsap.set(panel, { scale: 1 });

          tl.to(panel, {
            scale: 0.8,
            scrollTrigger: {
              trigger: panel,
              pin: panel,
              scrub: 1,
              start: "top top",
              end: "bottom 60%",
              endTrigger: ".des-portfolio-wrap",
              pinSpacing: false,
              markers: false,
            },
          });
        });
      });
    };

    projectScale();
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section className="project mt-70 mb-30">
      <div className="container-fluid">
        <div className="mlr-20">
          <div className="ai-portfolio-wrap des-portfolio-wrap">

            {/* Project 1 */}
            <div className="ai-project-item des-portfolio-panel pos-rel not-hide-cursor mb-30" data-cursor="View<br>Demo">
              <Link className="cursor-hide" to="/project-details">
                <div className="ai-portfolio-thumb">
                  <img src={img1} alt="Helmies Bites" />
                </div>
                <span className="ai-category">Case Study : <span>Helmies Bites (PlateOS)</span></span>
              </Link>

              <div className="ai-project-content ul_li_between">
                <span className="content">
                  <span>Challenge:</span> Finnish restaurants needed a complete digital ecosystem — from customer ordering to kitchen management.
                </span>
                <Link className="ai-marketing-btn" to="/project-details">
                  <span className="arrow"><ArrowIcon /></span>
                  Read Full Case Study
                </Link>
                <p className="content text-end">
                  <span className="text-green">Solution:</span> Full SaaS platform with multi-language menus (FI/EN/AR), WebSocket real-time orders, thermal printing, and AI assistant. 40% increase in orders.
                </p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="ai-project-item des-portfolio-panel pos-rel not-hide-cursor mb-30" data-cursor="View<br>Demo">
              <Link className="cursor-hide" to="/project-details">
                <div className="ai-portfolio-thumb">
                  <img src={img2} alt="Ravintola Babylon" />
                </div>
                <span className="ai-category">Case Study : <span>Ravintola Babylon</span></span>
              </Link>

              <div className="ai-project-content ul_li_between">
                <p className="content"><span>Challenge:</span> Traditional restaurant needed digital ordering and modern web presence.</p>
                <Link className="ai-marketing-btn" to="/project-details">
                  <span className="arrow"><ArrowIcon /></span>
                  Read Full Case Study
                </Link>
                <p className="content text-end">
                  <span className="text-green">Solution:</span> Custom ordering platform with delivery zones, multiple payment integrations, and real-time kitchen management.
                </p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="ai-project-item des-portfolio-panel pos-rel not-hide-cursor mb-30" data-cursor="View<br>Demo">
              <Link className="cursor-hide" to="/project-details">
                <div className="ai-portfolio-thumb">
                  <img src={img3} alt="Finnish Websites" />
                </div>
                <span className="ai-category">Case Study : <span>Finnish Business Websites</span></span>
              </Link>

              <div className="ai-project-content ul_li_between">
                <p className="content"><span>Challenge:</span> Companies like Suomenteippipaino and Solarprofiles needed modern web presence with strong SEO.</p>
                <Link className="ai-marketing-btn" to="/project-details">
                  <span className="arrow"><ArrowIcon /></span>
                  Read Full Case Study
                </Link>
                <p className="content text-end">
                  <span className="text-green">Solution:</span> Custom React websites with SEO optimization, stunning UI/UX, and lightning-fast performance. 60% increase in leads.
                </p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="ai-project-item des-portfolio-panel pos-rel not-hide-cursor" data-cursor="View<br>Demo">
              <Link className="cursor-hide" to="/project-details">
                <div className="ai-portfolio-thumb">
                  <img src={img4} alt="3D Visualization" />
                </div>
                <span className="ai-category">Case Study : <span>3D &amp; Creative Projects</span></span>
              </Link>

              <div className="ai-project-content ul_li_between">
                <p className="content"><span>Challenge:</span> Brands needed immersive 3D product configurators and interactive showcases.</p>
                <Link className="ai-marketing-btn" to="/project-details">
                  <span className="arrow"><ArrowIcon /></span>
                  <span className="text">
                    <span>Read Full Case Study</span>
                    <span>Read Full Case Study</span>
                  </span>
                </Link>
                <p className="content text-end">
                  <span className="text-green">Solution:</span> Built with Three.js and React Three Fiber, featuring custom shaders, particle effects, and GSAP animations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// SVG Arrow Component
const ArrowIcon: React.FC = () => (
  <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11.9299" y="12.4632" width="3.80516" height="3.83411" fill="black" />
    <rect x="0.843506" y="0.994343" width="3.83411" height="3.83411" fill="black" />
    <rect x="4.68921" y="4.81607" width="3.83411" height="3.83411" fill="black" />
    <rect x="8.53442" y="8.63861" width="3.83411" height="3.83411" fill="black" />
    <rect x="8.55786" y="16.3068" width="3.83411" height="3.83411" fill="black" />
    <rect x="4.73535" y="20.1535" width="3.83411" height="3.83411" fill="black" />
    <rect x="0.912354" y="23.9985" width="3.83411" height="3.83411" fill="black" />
  </svg>
);

export default ProjectSection;
