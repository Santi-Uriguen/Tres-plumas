import React from "react";
import Card from "./components/Card";

const Indice = () => {
  return (
    <section className="indice">
      <Card section="SECOS" class="secos" />
      <Card section="FRUTALES" class="frutales" />
      <Card section="CREMOSOS" class="cremosos" />
      <Card section="AL CAFÉ" class="alCafe" />
      <Card section="GOLDEN AGE" class="goldenAge" />
      <Card section="PETACAS" class="petacas" />
    </section>
  );
};

export default Indice;
