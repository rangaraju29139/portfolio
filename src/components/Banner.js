import React from "react";
import bannerImage from "../assets/images/banner-image.png";
import "../styles/banner.css";

function Banner() {
  return (
    <>
      <div className="grid-container banner-container">
        <img src={bannerImage} className="grid-item" alt="..."></img>
      </div>
    </>
  );
}
export default Banner;
