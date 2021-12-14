import React from "react";
import products from "../../../context/products";

function PedidoUno(props) {
  let pedido = window.localStorage.getItem("pedido").split(",");
  const counts = {};
  pedido.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });
  console.log(counts);
  let productosSimples = [...new Set(pedido)];
  let productosPedidos = [];
  let precioTotal = 0;
  let cantTotal = 0;
  for (const key of Object.keys(products)) {
    let val = products[key];
    productosSimples.map((serial) => {
      let productos = val.filter((producto) => producto.serial === serial);
      productos.length !== 0 && productosPedidos.push(productos);
      return;
    });
  }
  return (
    <div className="pedidoUno">
      <h2>SU PEDIDO</h2>
      <div className="pedido">
        <div className="encabezado">
          <h4 className="prd">PRODUCTO</h4>
          <h4 className="dtl">DETALLE</h4>
          <h4 className="cnt">CANT.</h4>
          <h4 className="prz">PRECIO</h4>
        </div>
        <div className="products">
          {productosPedidos.map((element) => {
            const serialNumb = element[0].serial;
            const quantity = counts[serialNumb];
            const price = 1800 * quantity;
            precioTotal = precioTotal + price;
            cantTotal = cantTotal + quantity;
            return (
              <div key={element[0].serial} className="prodContainer">
                <div className="prodCard">
                  <img src={element[0].src} alt="" className="imgContainer" />
                  <h2 className="dtl">
                    {element[0].name + " " + element[0].cant}
                  </h2>
                  <h2 className="cnt">{quantity}</h2>
                  <h2 className="prz">{"$" + price}</h2>
                </div>
                <div className="line"></div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <h3 className="ttl">TOTAL</h3>
          <h3 className="qtt">{cantTotal}</h3>
          <h3 className="ptt">{"$" + precioTotal}</h3>
        </div>
      </div>
      <button onClick={() => props.stepChange(2)}>Confirmar pedido</button>
    </div>
  );
}

export default PedidoUno;
