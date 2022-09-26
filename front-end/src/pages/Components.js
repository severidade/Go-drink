import React from 'react';
import CardProduct from '../components/CardProduct/CardProduct';
import CheckoutElement from '../components/CheckoutElement/CheckoutElement';

import antartica from '../images/mockup/no_bg/antarctica_pilsen_300ml.png';

function Components() {
  return (
    <>
      {/* <CardProduct productName="Bolacha" price="100,00" url="https://severidade.github.io/img/avatar.png" /> */}
      <CardProduct productName="Bolacha" price="100,00" url={ antartica } id="d" />
      <CheckoutElement productName="Bolacha" url={ antartica } />
    </>
  );
}

export default Components;
