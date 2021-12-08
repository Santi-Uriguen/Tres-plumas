import React from "react";

const ProductSection = (props) => {
  return (
    <section className="productSeciton" id={props.prod}>
      <h2>{props.prod}</h2>
    </section>
  );
};

export default ProductSection;
