import React, { useState } from "react";

function ProdCard(props) {
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
    <div className="bigProd">
      <div className="producto">
        <img src={props.img} alt="" />
        <article>
          <h4>{props.name}</h4>
          <p>{props.serial + " / " + props.temp}</p>
          <p>{props.quant}</p>
        </article>
      </div>
      <div className="quantity">
        <div className="actionButtons">
          <button onClick={() => handleClick("rest")} id="restButton">
            -
          </button>
          <h4>{number}</h4>
          <button onClick={() => handleClick("add")}>+</button>
        </div>
        <div className="price">{"$" + "1800"}</div>
      </div>
      <div className="sendButtons">
        <button onClick={handleSubmit}>Agregar a la orden</button>
        <button onClick={handleSubmit}>Ver mi pedido</button>
      </div>
    </div>
  );
}

export default ProdCard;
