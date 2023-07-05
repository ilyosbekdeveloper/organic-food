import React from "react";
import "./Header.scss";
import HeaderImg from "../../asset/resource/img1.svg";
import SearchIcon from "../../asset/resource/img2.svg";
import BasketIcon from "../../asset/resource/img3.svg";

const Header = () => {
  const headerLinks = [
    {
      link: "#about",
      title: "About US",
    },
    {
      link: "#service",
      title: "Service",
    },
    {
      link: "#menu",
      title: "Menu",
    },
    {
      link: "#contact",
      title: "Contact",
    },
  ];

  return (
    <section id="header" className="container">
      <ul className="header_links">
        {headerLinks.map((i, index) => (
          <li key={index} className="header_link_item">
            <a href={i.link}>{i.title}</a>
          </li>
        ))}
      </ul>
      <div className="header_img">
        <img src={HeaderImg} alt="This was image" className="headers_image" />
      </div>
      <div className="header_actions">
        <div className="header_search_icon">
          <img src={SearchIcon} alt="" />
        </div>
        <div className="header_basket_icon">
          <img src={BasketIcon} alt="" />
        </div>
        <div className="header_register_buttun">
          <button>Register Now</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
