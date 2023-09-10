import React from "react";
import image from "assets/earth.png";
import "./preload.scss";

const IMAGE_HEIGHT = 100; //px

const Preload = (props) => {
  return (
    <div className="preload preload-container">
      <div className="preload-container preload-left">
        <img src={image}></img>
      </div>
      <div className="preload-container preload-right">
        <span>ORBIS</span>
      </div>
    </div>
  );
};

export default Preload;
