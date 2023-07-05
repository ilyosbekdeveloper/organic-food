import React from "react";
import "./Menu.scss";
import Star from "../../asset/resource/start.svg";
import QuaterStar from "../../asset/resource/quter_start.svg";
import PersonImg from '../../asset/resource/menuImg.png'

const Menu = () => {
  const stars = [Star, Star, Star, Star, QuaterStar];
  return (
    <section id="menu">
      <div className="container">
        <div className="menu_left">
          <h1 className="g_title">What Our Customers About Us saying</h1>
          <p className="g_par">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularis
          </p>

          <div className="start_section">
            <div className="stars_title">Ahmed Hridoy</div>
            <div className="stars">
              {stars.map((i, index) => (
                <img key={index} src={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="menu_right">
            <img src={PersonImg} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
