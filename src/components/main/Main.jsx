import React from "react";
import Indice from "./components/Indice";
import ProductSection from "./components/ProductSection";

const Main = () => {
  return (
    <main>
      <Indice />
      <ProductSection prod="secos" />
    </main>
  );
};

export default Main;
