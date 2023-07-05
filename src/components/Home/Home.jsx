import React from "react";
import "./Home.scss";
import ArrowImg from "../../asset/resource/Arrow 6.svg";
import FruitsImg from "../../asset/resource/home_img_2.png";
import HeaderImg1 from "../../asset/resource/hedaerImg1.jpg";
import HeaderImg2 from "../../asset/resource/hedaerImg2.jpg";
import HeaderImg3 from "../../asset/resource/hedaerImg3.jpg";

const Home = () => {
  const boxes = [
    {
      img: HeaderImg1,
      title: "30K",
      span: "User Order",
    },
    {
      img: HeaderImg2,
      title: "20K",
      span: "Reviews(4.8)",
    },
    {
      img: HeaderImg3,
      title: "300",
      span: "Items",
    },
  ];

  return (
    <section id="home">
      <div className="container">
        <div className="home_top_section">
          <h1>Organic Fruit & Vegetables</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley...
          </p>
        </div>
        <div className="header_button_section">
          <span>Order section</span>
          <button>
            <img src={ArrowImg} alt="Arrow" />
          </button>
        </div>

        <div className="header_bootom_section">
          <div className="header_bottom_section_left_img">
            <img src={FruitsImg} alt="Fruits" />
          </div>
          <div className="header_bottom_section_right">
            {boxes.map((i, index) => (
              <div key={index} className="boxX">
                <div className="box_left">
                  <img src={i.img} alt="img" />
                </div>
                <div className="box_right">
                  <h4>{i.title}</h4>
                  <span>{i.span}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
