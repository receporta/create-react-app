import React from "react";
import "../scss/_home.css";
import img from "../Dist/img/me.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="social-icons">
        <ul>
          <li>
            <i class="bx bxl-facebook-square"></i>
          </li>
          <li>
            <i class="bx bxl-instagram-alt"></i>
          </li>
          <li>
            <i class="bx bxl-github"></i>
          </li>
          <li>
            <i class="bx bxl-linkedin-square"></i>
          </li>
          <li>
            <i class="bx bxl-whatsapp-square"></i>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="row justify-content-between">
          <div className="col-5">
            <div className="_me">
              <h1>Recep Poyraz Orta</h1>
              <div className="_main">
                <hr></hr>
                <h6>Frondend software Developer</h6>
              </div>
              <p>
                Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın
                sektöründe kullanılan taklit yazı bloğu olarak tanımlanır.
                Lipsum, oluşturulacak şablon ve taslaklarda içerik yerine
                geçerek yazı bloğunu doldurmak için kullanılır.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="_me-photo">
              <img id="h-img" src={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
