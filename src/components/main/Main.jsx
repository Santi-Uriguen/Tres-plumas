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
      <ProductSection productos={products.alCafe} name="al café" />
      <ProductSection productos={products.secos} name="secos" />
      <ProductSection productos={products.golden} name="golden age" />
    </main>
  );
};

export default Main;
