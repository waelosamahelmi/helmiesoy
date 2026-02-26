import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [mobileActive, setMobileActive] = React.useState(false);
  const lastScrollY = React.useRef<number>(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScrollY.current && currentScroll > 100) {
        setIsSticky(true);
        setTimeout(() => setIsVisible(true), 10);
      } else if (currentScroll > lastScrollY.current) {
        setIsVisible(false);
        setTimeout(() => setIsSticky(false), 100);
      }

      if (currentScroll <= 100) {
        setIsSticky(false);
        setIsVisible(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

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

  return (
    <header
      id="xb-header-area"
      className="header-area header-style--two header-style--three header-transparent is-sticky"
    >
      <div
        className={`xb-header stricky ${isSticky ? "xb-header-area-sticky" : ""
          } ${isVisible ? "xb-header-fixed" : "xb-header-hidden"}`}
      >
        <div className="container-fluid plr-30">
          <div className="header__wrap ul_li_between">
            {/* Logo */}
            <div className="xb-header-logo">
              <Link to="/" className="logo1" onClick={handleClick}>
                <span style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#fff',
                  letterSpacing: '1px',
                }}>
                  <span style={{ color: '#23c9ff' }}>H</span>elmies
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="main-menu__wrap navbar navbar-expand-lg p-0">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="active">
                    <Link to="/" onClick={handleClick}><span>Home</span></Link>
                  </li>
                  <li>
                    <Link to="/service" onClick={handleClick}><span>Services</span></Link>
                  </li>
                  <li>
                    <Link to="/project" onClick={handleClick}><span>Projects</span></Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={handleClick}><span>About Us</span></Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={handleClick}><span>Contact</span></Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* CTA Button (AI Marketing style) */}
            <div className="header-right">
              <Link className="ai-marketing-btn" to="/contact" onClick={handleClick}>
                <span className="arrow">
                  <ArrowIcon />
                </span>
                <span className="text">
                  <span>Get a Quote</span>
                  <span>Get a Quote</span>
                </span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="header-bar-mobile side-menu d-lg-none">
              <button
                className="xb-nav-mobile"
                onClick={() => setMobileActive(!mobileActive)}
              >
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="xb-header-wrap">
            <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
              <div className="xb-header-menu-scroll">
                <div
                  className="xb-menu-close xb-hide-xl xb-close"
                  onClick={() => setMobileActive(false)}
                ></div>
                <div className="xb-logo-mobile xb-hide-xl">
                  <Link to="/" rel="home">
                    <span style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontSize: '24px',
                      fontWeight: 800,
                      color: '#fff',
                    }}>
                      <span style={{ color: '#23c9ff' }}>H</span>elmies
                    </span>
                  </Link>
                </div>
                <nav className="xb-header-nav">
                  <MobileMenu />
                </nav>
              </div>
            </div>
            <div className="xb-header-menu-backdrop"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
