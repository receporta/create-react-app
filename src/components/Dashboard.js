import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import "../scss/app.css";
export default class App extends Component {
  render() {
    return (
      <div>
        <hearder>
          <a id="_logo" href="">
            LOGO
          </a>
          <ul id="menu">
            <li>
              <a href="#_home">HOME</a>
            </li>
            <li>
              <a href="#_about">ABOUT</a>
            </li>
            <li>
              <a href="#_skills">SKİLS</a>
            </li>
            <li>
              <a href="#_portfolio">PORTFOLİO</a>
            </li>
            <li>
              <a href="#_contact">CONTACT</a>
            </li>
          </ul>
        </hearder>
        <section id="_home">
          <Home />
        </section>
        <hr style={{ width: "80%", margin: "auto" }}></hr>
        <section id="_about">
          <About />
        </section>
        <hr style={{ width: "80%", margin: "auto" }}></hr>
        <section id="_skills">
          <Skills />
        </section>
        <section id="_portfolio">
          <Portfolio />
        </section>
        <section id="_contact">
          <Contact />
        </section>
      </div>
    );
  }
}
