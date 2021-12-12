import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ProdCard from "./components/ProdCard";

const ProductSection = (props) => {
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
    <section className="productSeciton" id={props.prod}>
      <div>
        <h2>{props.prod}</h2>
        <ProdCard
          name="CHOCOLATE"
          serial="C 2306"
          temp="17°"
          quant="6x700ml"
          img="imgSrc"
        />
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
