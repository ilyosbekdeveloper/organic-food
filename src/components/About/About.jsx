import React from "react";
import "./About.scss";
import AboutImg1 from "../../asset/resource/about_item_1.png";
import AboutImg2 from "../../asset/resource/about_item_2.png";
import AboutImg3 from "../../asset/resource/about_item_3.png";
import Arrow from "../../asset/resource/aboutArrow.svg";
import MainImg from '../../asset/resource/aboutMainImg.png'

const About = () => {
  const aboutItems = [
    {
      img: AboutImg1,
      title: "Fasted delivery Service",
      par: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: AboutImg2,
      title: "Online order Service",
      par: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: AboutImg3,
      title: "Fasted delivery Service",
      par: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="about_section_title">
          <h1 className="g_title">Why We Aer The Best?</h1>
          <p className="g_par">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley...
          </p>
        </div>

        <div className="about_content">
          <div className="about_content_left">
            <ul>
              {aboutItems.map((i, index) => (
                <li key={index}>
                  <div className="li_img">
                    <img src={i.img} alt="" />
                  </div>
                  <div className="li_desc">
                    <h5>{i.title}</h5>
                    <p>{i.par}</p>
                  </div>
                </li>
              ))}
              <li className="arrow_img">
                <img src={Arrow} alt="arrow" />
              </li>
            </ul>
          </div>

          <div className="about_content_right">
            <div className="circle">
                <img src={MainImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
