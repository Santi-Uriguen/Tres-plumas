import React from "react";
import Indice from "./components/indice/Indice";
import ProductSection from "./components/ProductSection/ProductSection.jsx";
import products from "../../context/products";

const Main = (props) => {
  return (
    <main>
      <Indice />
      <ProductSection
        changePage={props.changePage}
        productos={products.frutales}
        name="frutales"
      />
      <ProductSection
        changePage={props.changePage}
        productos={products.cremosos}
        name="cremosos"
      />
      <ProductSection
        changePage={props.changePage}
        productos={products.alCafe}
        name="al café"
      />
      <ProductSection
        changePage={props.changePage}
        productos={products.secos}
        name="secos"
      />
      <ProductSection
        changePage={props.changePage}
        productos={products.golden}
        name="golden age"
      />
    </main>
  );
};

export default Main;
