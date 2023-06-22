import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            <div className="work">
              <img src="./mfl.jpeg" alt="mindforce" className="work-image" />
              <div className="work-title">Mindforce Game Lab</div>
              <div className="work-subtitle">Front End Developer Intern</div>
              <div className="work-duration">2022 - 2023</div>
            </div>

            <div className="work">
              <img src="./mrcake.webp" alt="Mr Cake" className="work-image" />
              <div className="work-title">Mr. Cake</div>
              <div className="work-subtitle">Baker</div>
              <div className="work-duration">2019 - 2023</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
