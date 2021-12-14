import React, { useState } from "react";
import PedidoUno from "./components/PedidoUno";
import PedidoDos from "./components/PedidoDos";
import PedidoTres from "./components/PedidoTres";

function Store(props) {
  const [step, setStep] = useState(1);
  const stepChange = (s) => {
    if (s === 2) {
      setStep(2);
    } else if (s === 3) {
      setStep(3);
    } else {
      props.changePage("main");
    }
  };
  return (
    <main className="storeContainer">
      {step === 1 && <PedidoUno stepChange={stepChange} />}
      {step === 2 && <PedidoDos stepChange={stepChange} />}
      {step === 3 && <PedidoTres stepChange={stepChange} />}
    </main>
  );
}

export default Store;
