import React from "react";

function ProdCard(props) {
  return (
    <div>
      <img src="" alt="" />
      <article>
        <h4>{props.name}</h4>
        <p>{props.serial + " / " + props.temp}</p>
        <p>{props.quant}</p>
      </article>
    </div>
  );
}

export default ProdCard;
