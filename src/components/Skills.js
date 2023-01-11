import React, { useState } from "react";
import "../scss/_skills.css";

const Skills = () => {
  const [skills, setSkills] = useState({
    frontend: [
      { name: "HTML5", value: 95 },
      { name: "CSS3", value: 95 },
      { name: "JAVASCRİPT", value: 90 },
      { name: "TYPESCRİPT", value: 70 },
      { name: "REACT JS", value: 98 },
      { name: "GİT", value: 90 },
    ],
    backend: [
      { name: "C#", value: 80 },
      { name: "SQL", value: 90 },
      { name: "MySQL", value: 85 },
      { name: "JAVA", value: 65 },
    ],
  });

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-content-center flex-column skills">
        <div className="main_about">
          <h2>Skills</h2>
          <h6>My Technical Knowledge</h6>
        </div>
        <div className="row justify-content-evenly pt-5">
          <div className="col-5 fd-skills">
            <h3>Frontend Developer</h3>
            <div class="row">
              <div style={{ textAlign: "start" }} class="col-12">
                {skills.frontend.map((x, i) => (
                  <>
                    <h3 class="progress-title">{x.name}</h3>
                    <div class="progress-outer">
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-danger"
                          style={{ width: x.value + "%" }}
                        ></div>
                        <div class="progress-value">
                          <span>{x.value}</span>%
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="col-5 bd-skills">
            <h3>Backend Developer</h3>
            <div class="row">
              <div style={{ textAlign: "start" }} class="col-12">
                {skills.backend.map((x, i) => (
                  <>
                    <h3 class="progress-title">{x.name}</h3>
                    <div class="progress-outer">
                      <div class="progress">
                        <div
                          class="progress-bar progress-bar-striped progress-bar-danger"
                          style={{ width: x.value + "%" }}
                        ></div>
                        <div class="progress-value">
                          <span>{x.value}</span>%
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
