import React, { useEffect } from "react";
import tick from "../../../assets/tick.png";

function PedidoTres(props) {
  useEffect(() => {
    setTimeout(() => {
      props.stepChange(1);
      window.localStorage.clear();
    }, 5000);
  }, []);
  return (
    <div className="pedidoTres">
      <img src={tick} alt="" />
      <h2>
        ¡LISTO, <br /> MUCHAS GRACIAS!
      </h2>
      <h4>
        Alguien de nuestro equipo se contactará vía mail para confirmar el
        pedido y realizar el pago
      </h4>
    </div>
  );
}

export default PedidoTres;
