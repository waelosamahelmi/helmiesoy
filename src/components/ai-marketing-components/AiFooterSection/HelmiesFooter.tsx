import React from "react";
import { Link } from "react-router-dom";

import diamondGif from "../../../images/icon/diamond-icon02.gif";

const ArrowIcon = () => (
    <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="11.9299" y="12.4632" width="3.80516" height="3.83411" transform="rotate(-0.1709 11.9299 12.4632)" fill="black" />
        <rect x="0.843506" y="0.994343" width="3.83411" height="3.83411" transform="rotate(-0.1709 0.843506 0.994343)" fill="black" />
        <rect x="4.68921" y="4.81607" width="3.83411" height="3.83411" transform="rotate(-0.1709 4.68921 4.81607)" fill="black" />
        <rect x="8.53442" y="8.63861" width="3.83411" height="3.83411" transform="rotate(-0.1709 8.53442 8.63861)" fill="black" />
        <rect x="8.55786" y="16.3068" width="3.83411" height="3.83411" transform="rotate(-0.1709 8.55786 16.3068)" fill="black" />
        <rect x="4.73535" y="20.1535" width="3.83411" height="3.83411" transform="rotate(-0.1709 4.73535 20.1535)" fill="black" />
        <rect x="0.912354" y="23.9985" width="3.83411" height="3.83411" transform="rotate(-0.1709 0.912354 23.9985)" fill="black" />
    </svg>
);

const HelmiesFooter: React.FC = () => {
    return (
        <footer className="footer pos-rel z-1 pt-80">
            <div className="container-fluid">
                <div className="ai-footer-wrap mlr-20">
                    {/* Footer Heading */}
                    <div className="ai-footer-heading">
                        <h1 className="title">Helmies</h1>
                    </div>

                    {/* Footer Inner */}
                    <div className="ai-footer-inner o-hidden pos-rel pb-125 ul_li_between">
                        <div className="sec-title-three footer-sec-title">
                            <h2 className="title xb-text-reveal">
                                Ready to Create Something Extraordinary? Let's Transform Your
                                Digital Presence Together.
                            </h2>
                            <Link className="ai-marketing-btn mt-65" to="/contact">
                                <span className="arrow">
                                    <ArrowIcon />
                                </span>
                                <span className="text">
                                    <span>Start Your Project</span>
                                    <span>Start Your Project</span>
                                </span>
                            </Link>
                        </div>

                        {/* Footer Links */}
                        <div className="ai-footer-link">
                            <p>
                                Based in Lahti, Finland — serving clients worldwide.
                                We respond within 24 hours on business days.
                            </p>
                            <ul className="ai-social-link list-unstyled mt-80">
                                <li>
                                    <a href="https://www.linkedin.com/company/helmiesfi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://x.com/helmiesfi" target="_blank" rel="noopener noreferrer">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/helmiesfi" target="_blank" rel="noopener noreferrer">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/helmiesfi" target="_blank" rel="noopener noreferrer">Facebook</a>
                                </li>
                            </ul>
                        </div>

                        {/* Animated Shape */}
                        <div className="ai-footer-shape">
                            <div className="wow fadeInUp" data-wow-duration="600ms">
                                <img src={diamondGif} alt="gif" />
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="xb-copyright ai-copyright ul_li_between">
                        <p>
                            Copyright © 2025{" "}
                            <Link to="/">Helmies Oy</Link>, All rights reserved.
                        </p>
                        <ul className="ai-footer-links ul_li">
                            <li>
                                <a href="mailto:info@helmies.fi">info@helmies.fi</a>
                            </li>
                            <li>
                                <Link to="/contact">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default HelmiesFooter;
