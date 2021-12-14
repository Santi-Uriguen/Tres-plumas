import React from "react";
import caja from "../../../../../assets/caja.png";

function ProdCard(props) {
  return (
    <div className="bigProd">
      <div className="producto">
        <img src={props.img} alt="" />
        <article>
          <h4>{props.name}</h4>
          <p>{props.serial + " / " + props.temp}</p>
          <div className="cant">
            <p>
              <img src={caja} alt="" />
              {props.quant}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default ProdCard;
