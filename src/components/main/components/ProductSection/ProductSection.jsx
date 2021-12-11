import React from "react";
import ProdCard from "./components/ProdCard";

const ProductSection = (props) => {
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
          <div>-</div>
          <h4>1</h4>
          <div>+</div>
        </div>
        <div>{"$" + "1800"}</div>
        <button>Agregar a la orden</button>
      </div>
    </section>
  );
};

export default ProductSection;
