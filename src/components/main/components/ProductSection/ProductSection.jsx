import React, { useState } from "react";
import ProdCard from "./components/ProdCard";

const ProductSection = (props) => {
  console.log(props);
  const [number, newNumber] = useState(1);
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
    <section className={"productSeciton"} id={props.name}>
      <div>
        <h2>{props.name}</h2>
        {props.productos.map((producto) => (
          <ProdCard
            name={producto.name}
            serial={producto.serial}
            key={producto.serial}
            temp={producto.temp}
            quant={producto.cant}
            img="imgSrc"
          />
        ))}

        <div className="Quantity">
          <button onClick={() => handleClick("rest")} id="restButton">
            -
          </button>
          <h4>{number}</h4>
          <button onClick={() => handleClick("add")}>+</button>
        </div>
        <div>{"$" + "1800"}</div>
        <button onClick={handleSubmit}>Agregar a la orden</button>
      </div>
    </section>
  );
};

export default ProductSection;
