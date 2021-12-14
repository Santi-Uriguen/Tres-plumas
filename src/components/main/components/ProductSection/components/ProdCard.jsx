import React, { useState } from "react";

function ProdCard(props) {
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
    </div>
  );
}

export default ProdCard;
