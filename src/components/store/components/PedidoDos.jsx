import React from "react";

function PedidoDos(props) {
  return (
    <div className="pedidoDos">
      <h2>DATOS DEL SOLICITANTE</h2>
      <form>
        <input
          type="text"
          id="empresa"
          name="empresa"
          placeholder="Empresa/Razón social"
        />
        <input type="text" id="name" name="name" placeholder="Nombre" />
        <input type="email" id="mail" name="mail" placeholder="Mail" />
      </form>
      <button
        onClick={() => {
          props.stepChange(3);
        }}
      >
        Confirmar datos
      </button>
    </div>
  );
}

export default PedidoDos;
