import React from "react";

function SmallProdCard(props) {
  return (
    <div
      className="smallProdCard"
      onClick={() => {
        props.choose(props.index);
      }}
    >
      <img src={props.src} alt=""></img>
    </div>
  );
}

export default SmallProdCard;
