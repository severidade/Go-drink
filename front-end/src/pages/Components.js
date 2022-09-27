import React from 'react';
import CardProduct from '../components/CardProduct';
// import CheckoutElement from '../components/CheckoutElement';
import NavBar from '../components/NavBar/NavBar';

import antartica from '../images/mockup/no_bg/antarctica_pilsen_300ml.png';

function Components() {
  return (
    <>
      {/* <CardProduct productName="Bolacha" price="100,00" url="https://severidade.github.io/img/avatar.png" /> */}
      <NavBar user="test user" selected="" />
      <CardProduct productName="Bolacha" price="100,00" url={ antartica } />
      {/* <CheckoutElement productName="Bolacha" url={ antartica } /> */}
    </>
  );
}

export default Components;
