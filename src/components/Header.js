import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Let me show you my portfolio.</h1>
        <Typed className="typed-text" strings={["I'm Koichi", "Web Developer", "Learning English and Spanish", "University Student"]} typeSpeed={40} backSpeed={60} loop />
        <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">
          contact me
        </Link>
      </div>
    </div>
  );
};

export default Header;
