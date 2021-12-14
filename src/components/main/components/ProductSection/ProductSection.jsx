import React, { useState } from "react";
import ProdCard from "./components/ProdCard";
import SmallProdCard from "./components/SmallProdCard.jsx";
import imagenes from "../../../../context/images";
import arrow from "../../../../assets/ArrowDwn.png";

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
  const chooseBottle = (index) => {
    console.log("entró con" + index);
    setProd(props.productos[index]);
  };
  const [number, newNumber] = useState(1);
  const price = 1800;
  const handleClick = (p) => {
    if (number > 1) {
      p === "rest" ? newNumber(number - 1, {}) : newNumber(number + 1, {});
    } else {
      p === "rest" ? newNumber(1) : newNumber(number + 1);
    }
  };
  const handleSubmit = () => {
    newNumber(1);
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
          {props.productos.map((producto, index) => {
            console.log(index);
            return (
              <SmallProdCard
                src={producto.src}
                key={producto.serial}
                index={index}
                choose={chooseBottle}
              />
            );
          })}
        </div>
      </div>
      <div className="quantity">
        <div className="actionButtons">
          <button onClick={() => handleClick("rest")} id="restButton">
            -
          </button>
          <h4>{number}</h4>
          <button onClick={() => handleClick("add")}>+</button>
        </div>
        <div className="price">{"$" + number * price}</div>
        <div className="arrow">
          <img src={arrow} alt="arrow down" />
        </div>
      </div>
      <div className="sendButtons">
        <button onClick={handleSubmit}>Agregar al pedido</button>
        <button onClick={handleSubmit}>Ver mi pedido</button>
      </div>
    </section>
  );
};

export default ProductSection;
