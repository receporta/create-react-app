import React from "react";
import "../scss/_about.css";
import img from "../Dist/img/me.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="main_about">
          <h2>About Me</h2>
          <h6>My İntroduction</h6>
        </div>
        <div className="_content">
          <div className="img_">
            <img src={img} />
          </div>
          <div className="me_about">
            <div className="d-flex justify-content-between w-100 ">
              <div className="box-item">
                <div className="d-flex flex-column align-items-center box-item-main">
                  <i class="bx bxs-medal"></i>
                  <h4>Experience</h4>
                  <span>1 + years</span>
                </div>
              </div>
              <div className="box-item">
                <div className="d-flex flex-column align-items-center box-item-main">
                  <i class="bx bx-book-open"></i>
                  <h4>Information</h4>
                  <span>1 + years</span>
                </div>
              </div>
              <div className="box-item">
                <div className="d-flex flex-column align-items-center box-item-main">
                  <i class="bx bxs-shopping-bag-alt"></i>
                  <h4>Completed</h4>
                  <span>1 + years</span>
                </div>
              </div>
            </div>
            <p>
              Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın
              sektöründe kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum,
              oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı
              bloğunu doldurmak için kullanılır.
            </p>
            <button>
              <i class="bx bx-download"></i>Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
