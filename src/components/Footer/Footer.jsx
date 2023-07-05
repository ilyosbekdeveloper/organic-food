import React from "react";
import "./Footer.scss";
import HeaderImg from "../../asset/resource/img1.svg";
import Facebook from "../../asset/resource/facebook 1.svg";
import Twiter from "../../asset/resource/twitter 1.svg";
import Instagram from "../../asset/resource/instagram 1.svg";

const Footer = () => {
  const navigateItems = [
    { link: "#", title: "About Us" },
    { link: "#", title: "Service" },
    { link: "#", title: "Menu" },
  ];

  const resourceItems = [
    { link: "#", title: "Reviews" },
    { link: "#", title: "Blog" },
    { link: "#", title: "Update News" },
  ];

  const footerLinks = [Facebook, Twiter, Instagram];

  return (
    <footer id="footer">
      <div className="container">
        <div className="box">
          <div className="footer_item footer_item_1">
            <img src={HeaderImg} />
            <p className="g_par">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer...
            </p>
          </div>

          <div className="footer_item footer_item_2">
            <h5 className="footer_item_title">Navigation</h5>
            <ul>
              {navigateItems.map((i, index) => (
                <li key={index}>
                  <a href={i.link}>{i.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item footer_item_3">
            <h5 className="footer_item_title">Resources</h5>
            <ul>
              {resourceItems.map((i, index) => (
                <li key={index}>
                  <a href={i.link}>{i.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer_item footer_item_4">
            <h5 className="footer_item_title">Contact Us</h5>
            <a href="#">oyasim@email.com</a>
            <div className="footer_links">
              {footerLinks.map((i, index) => (
                <a href="#">
                  <img key={index} src={i} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
