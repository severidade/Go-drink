import React, { useContext } from 'react';
// import CardProduct from '../components/CardProduct/CardProduct';
// import CheckoutElement from '../components/CheckoutElement';
import NavBar from '../components/NavBar/NavBar';
import CartButton from '../components/CartButton/CartButton';
import CheckoutElement from '../components/CheckoutElement/CheckoutElement';
// import CustomerCheckoutDetails
//  from '../components/CustomerCheckoutDetails/CustomerCheckoutDetails';
import CartContext from '../context/CartContext';

function Components() {
  const {
    cartList,
  } = useContext(CartContext);
  return (
    <>
      {/* <CardProduct productName="Bolacha" price="100,00" url="https://severidade.github.io/img/avatar.png" /> */}
      <NavBar user="test user" selected="" />
      {/* <CardProduct
        productName="Antarctica Pilsen 300ml"
        price="49,90"
        url={ antartica }
      /> */}
      {/* <CheckoutElement productName="Bolacha" url={ antartica } /> */}
      {/* <CardProduct productName="Bolacha" price="100,00" url={ antartica } id="d" /> */}
      {
        cartList.map((e, ind) => (
          <CheckoutElement
            key={ e.id }
            itemNumber={ ind + 1 }
            productName={ e.productName }
            quantity={ e.quantity }
            price={ e.price }
            url={ e.url }
            id={ e.id }
          />
        ))
      }

      <CartButton />
      {/* <CustomerCheckoutDetails address="Rua dos Timbiras" number="2500" /> */}
      {/* <CustomerCheckoutDetails /> */}
    </>
  );
}

export default Components;
