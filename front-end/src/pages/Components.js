import React from 'react';
import CardProduct from '../components/CardProduct/CardProduct';
// import CheckoutElement from '../components/CheckoutElement';
import NavBar from '../components/NavBar/NavBar';
import CartButton from '../components/CartButton/CartButton';
import CheckoutElement from '../components/CheckoutElement/CheckoutElement';

import antartica from '../images/mockup/no_bg/antarctica_pilsen_300ml.png';

function Components() {
  return (
    <>
      {/* <CardProduct productName="Bolacha" price="100,00" url="https://severidade.github.io/img/avatar.png" /> */}
      <NavBar user="test user" selected="" />
      <CardProduct
        productName="Antarctica Pilsen 300ml"
        price="49,90"
        url={ antartica }
      />
      {/* <CheckoutElement productName="Bolacha" url={ antartica } /> */}
      <CardProduct productName="Bolacha" price="100,00" url={ antartica } id="d" />
      <CheckoutElement productName="Bolacha" url={ antartica } />
      <CartButton />
    </>
  );
}

export default Components;
