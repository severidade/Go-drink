import React from 'react';
import NavBar from '../components/NavBar/NavBar';
// import CardProduct from '../components/CardProduct';
// import antartica from '../images/mockup/no_bg/antarctica_pilsen_300ml.png';

function CostumerProductsId() {
  return (
    <div className="container_page">
      <NavBar user="Cicrano da silva" selected="orders" />
      <h1>PRODUTOS CHECKOUT</h1>
      <div className="container_products">
        <p>Aqui entra a lisa de produtos desta compra</p>
        <p>Lembrando que a rota correta deve ter o id da compra no final</p>
      </div>
    </div>
  );
}

export default CostumerProductsId;
