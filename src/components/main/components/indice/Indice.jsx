import React from "react";
import Card from "./components/Card";

const Indice = () => {
  return (
    <section className="indice">
      <Card section="SECOS" class="secos" />
      <Card section="FRUTALES" class="frutales" />
      <Card section="CREMOSOS" class="cremosos" />
      <Card section="AL CAFÉ" class="al café" />
      <Card section="GOLDEN AGE" class="golden age" />
    </section>
  );
};

export default Indice;
