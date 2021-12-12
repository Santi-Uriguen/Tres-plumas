import React from "react";
import secos from "../../../../../assets/Secos.svg";
import frutales from "../../../../../assets/Frutales.svg";
import cremosos from "../../../../../assets/Cremosos.svg";
import cafe from "../../../../../assets/AlCafe.svg";
import golden from "../../../../../assets/goldenAge.svg";
import petacas from "../../../../../assets/petacas.svg";

function Card(props) {
  const imgSelection = () => {
    let ImgSrc;
    switch (props.class) {
      case "secos":
        ImgSrc = secos;
        break;
      case "frutales":
        ImgSrc = frutales;
        break;
      case "cremosos":
        ImgSrc = cremosos;
        break;
      case "alCafe":
        ImgSrc = cafe;
        break;
      case "goldenAge":
        ImgSrc = golden;
        break;
      default:
        ImgSrc = petacas;
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
