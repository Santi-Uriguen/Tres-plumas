import React, { useState } from "react";
import ProdCard from "./components/ProdCard";
import SmallProdCard from "./components/SmallProdCard.jsx";
import imagenes from "../../../../context/images";
import arrow from "../../../../assets/ArrowDwn.png";

const ProductSection = (props) => {
  const [prod, setProd] = useState(props.productos[0]);
  const imgSelection = () => {
    let ImgSrc;
    switch (props.name) {
      case "al café":
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
    let producto = prod.serial + "/";
    let pedidoStr = producto.repeat(number);
    let pedidoArr = pedidoStr.split("/", number);
    let pedidoViejo = window.localStorage.getItem("pedido");
    if (pedidoViejo != null) {
      pedidoViejo = pedidoViejo.split(",");
      let newPedido = pedidoViejo.concat(pedidoArr);
      window.localStorage.setItem("pedido", newPedido);
    } else {
      window.localStorage.setItem("pedido", pedidoArr);
    }
    newNumber(1);
  };
  const handleChangePage = () => {
    newNumber(1);
    props.changePage("store");
  };
  function changeColor(e) {
    e.target.className = "clicked";
    setTimeout(() => {
      e.target.classList.remove("clicked");
    }, 250);
  }
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
        {props.productos.length > 6 ? (
          <div className="arrow">
            <img src={arrow} alt="arrow down" />
          </div>
        ) : (
          <div className="arrow" />
        )}
      </div>
      <div className="sendButtons">
        <button
          onClick={(e) => {
            handleSubmit();
            changeColor(e);
          }}
        >
          Agregar al pedido
        </button>
        <button onClick={handleChangePage}>Ver mi pedido</button>
      </div>
    </section>
  );
};

export default ProductSection;
