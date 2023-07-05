import React from "react";
import "./Contact.scss";
import PhoneImg1 from "../../asset/resource/phoneImg1.png";
import PhoneImg2 from "../../asset/resource/phoneImg2.png";

const Contact = () => {
  const images = [PhoneImg1, PhoneImg2];
  const btns = [
    {
      img: "https://static.vecteezy.com/system/resources/thumbnails/021/671/852/small/white-apple-logo-free-png.png",
      span: "Download on the",
      title: "App Store",
    },
    {
      img: "https://www.freepnglogos.com/uploads/google-play-png-logo/google-severs-music-studio-png-logo-21.png",
      span: "GET IT ON",
      title: "Google Play",
    },
  ];
  return (
    <section id="contact">
      <div className="container">
        <div className="contact_left">
          {images.map((i, index) => (
            <img src={i} key={index} className={`img${index + 1}`} />
          ))}
        </div>
        <div className="contact_right">
          <button className="contact_btn">Download App</button>
          <div>
            <h1 className="g_title">Simple Way To Order Your Organic Fruit</h1>
            <p className="g_par">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer...
            </p>
          </div>

          <div className="btns_section">
            {btns.map((i, index) => (
              <a key={index} href="#" className="wrapper">
                <img src={i.img}/>
                <div className="w_title">
                  <span>{i.span}</span>
                  <span>{i.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
