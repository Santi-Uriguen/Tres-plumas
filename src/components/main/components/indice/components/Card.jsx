import React from "react";
import images from "../../../../../context/images";

function Card(props) {
  let imagenes = images.banners;
  const imgSelection = () => {
    let ImgSrc;
    switch (props.class) {
      case "alCafe":
        ImgSrc = imagenes[0];
        break;
      case "cremosos":
        ImgSrc = imagenes[1];
        break;
      case "secos":
        ImgSrc = imagenes[2];
        break;
      case "frutales":
        ImgSrc = imagenes[3];
        break;
      default:
        ImgSrc = imagenes[4];
        break;
    }
    return ImgSrc;
  };
  return (
    <div className={"indexCard " + props.class}>
      <a href={"#" + props.class}>
        <img
          src={imgSelection()}
          alt="background img"
          className={props.class + "Image"}
        />
        {props.section !== "GOLDEN AGE" ? <h2>{props.section}</h2> : ""}
      </a>
    </div>
  );
}

export default Card;
