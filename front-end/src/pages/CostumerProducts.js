import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import CardProduct from '../components/CardProduct';
import antartica from '../images/mockup/no_bg/antarctica_pilsen_300ml.png';

function CostumerProducts() {
  return (
    <div className="container_page">
      <NavBar user="Cicrano da silva" selected="products" />
      <h1>PRODUTOS PAGE</h1>
      <div className="container_products">
        <CardProduct productName="Bolacha" price="100,00" url={ antartica } />
        {/* <CardProduct productName="Bolacha" price="100,00" url={ antartica } />
        <CardProduct productName="Bolacha" price="100,00" url={ antartica } /> */}
      </div>
    </div>
  );
}

export default CostumerProducts;
