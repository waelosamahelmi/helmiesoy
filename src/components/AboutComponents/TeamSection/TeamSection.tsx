import React from "react";

// Background + Member Images
import bgTeam from "../../../images/bg/team-bg.png";
import noiseBg from "../../../images/team/noice-bg.png";

import img01 from "../../../images/team/img01.jpg";
import img02 from "../../../images/team/img02.jpg";

const teamMembers = [
  { name: "Wael Helmi", role: "CEO", img: img01 },
  { name: "Nagham Alaa", role: "UI/UX Designer", img: img02 },
];

const TeamSection: React.FC = () => {
  return (
    <section
      className="team pt-140 pb-150 bg_img"
      style={{ backgroundImage: `url(${bgTeam})` }}
    >
      <div className="container">
        <div className="sec-title sec-title-center text-center mb-45">
          <span className="sub-title mb-20">Our Specialists</span>
          <h2 className="title title-line_height">Dedicated professionals</h2>
        </div>

        <div className="row mt-none-55">
          {teamMembers.map((member, i) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mt-55"
              key={i}
            >
              <div className="xb-team-item xb-border">
                <div className="xb-item--img">
                  <img src={member.img} alt={member.name} />
                </div>

                <div className="xb-item--holder ul_li_between">
                  <div className="xb-item--author">
                    <h2 className="xb-item--name">{member.name}</h2>
                    <span className="xb-item--desig">{member.role}</span>
                  </div>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="xb-item--social xb-border">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>

                <div className="xb-bg">
                  <img src={noiseBg} alt="background texture" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
