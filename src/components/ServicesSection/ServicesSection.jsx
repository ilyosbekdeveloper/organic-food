import React from "react";
import "./ServicesSection.scss";
import ServicesLeftImg from "../../asset/resource/servicesMain.png";
import ArrowImg from "../../asset/resource/Arrow 6.svg";

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services_content">
          <div className="services_left">
            <img src={ServicesLeftImg} />
          </div>

          <div className="services_right">
            <div className="box">
              <h1 className="g_title">Explor Our Special Items</h1>
              <p className="g_par">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer...
              </p>
              <div className="services_right_content_btn_section">
                <div>
                  <div className="header_button_section">
                    <span>Order section</span>
                    <button>
                      <img src={ArrowImg} alt="Arrow" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
