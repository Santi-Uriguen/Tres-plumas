import React from "react";
import Indice from "./components/indice/Indice";
import ProductSection from "./components/ProductSection/ProductSection.jsx";

const Main = () => {
  return (
    <main>
      <Indice />
      <ProductSection prod="secos" />
    </main>
  );
};

export default Main;
