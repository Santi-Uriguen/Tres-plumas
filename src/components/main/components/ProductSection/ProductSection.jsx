import React, { useState } from "react";
import ProdCard from "./components/ProdCard";
import SmallProdCard from "./components/SmallProdCard.jsx";
import imagenes from "../../../../context/images";

const ProductSection = (props) => {
  const [prod, setProd] = useState(props.productos[1]);
  const imgSelection = () => {
    let ImgSrc;
    switch (props.name) {
      case "cafe":
        ImgSrc = imagenes.banners[5];
        break;
      case "cremosos":
        ImgSrc = imagenes.banners[6];
        break;
      case "secos":
        ImgSrc = imagenes.banners[7];
        break;
      case "frutales":
        ImgSrc = imagenes.banners[8];
        break;
      default:
        ImgSrc = imagenes.banners[9];
        break;
    }
    return ImgSrc;
  };
  return (
    <section className={"productSection"} id={props.name}>
      <div className="banner">
        <img src={imgSelection()} alt="" />
        <h2>{props.name.toUpperCase()}</h2>
      </div>
      <div className="prodContainer">
        <ProdCard
          name={prod.name}
          serial={prod.serial}
          key={prod.serial}
          temp={prod.temp}
          quant={prod.cant}
          img={prod.src}
        />
        <div className="smallProducts">
          {props.productos.map((producto) => {
            return <SmallProdCard src={producto.src} key={producto.serial} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
