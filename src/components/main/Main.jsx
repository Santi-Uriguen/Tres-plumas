import React from "react";
import Indice from "./components/indice/Indice";
import ProductSection from "./components/ProductSection/ProductSection.jsx";
import products from "../../context/products";

const Main = () => {
  return (
    <main>
      <Indice />
      <ProductSection productos={products.frutales} name="frutales" />
      <ProductSection productos={products.cremosos} name="cremosos" />
    </main>
  );
};

export default Main;
