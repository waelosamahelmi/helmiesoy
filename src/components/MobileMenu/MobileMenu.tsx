import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

interface MenuItem {
  id: number;
  title: string;
  link: string;
}

const menus: MenuItem[] = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Services", link: "/service" },
  { id: 3, title: "Projects", link: "/project" },
  { id: 4, title: "About Us", link: "/about" },
  { id: 5, title: "Contact", link: "/contact" },
];

const MobileMenu: React.FC = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ul className="responsivemenu">
      {menus.map((menu) => (
        <li key={menu.id}>
          <Link to={menu.link} onClick={handleClick}>
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
