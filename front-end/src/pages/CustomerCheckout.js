import React, { useContext } from 'react';
import CartTotalPrice from '../components/CartTotalPrice/CartTotalPrice';
import CheckoutElement from '../components/CheckoutElement/CheckoutElement';
import CustomerCheckoutDetails
  from '../components/CustomerCheckoutDetails/CustomerCheckoutDetails';
import NavBar from '../components/NavBar/NavBar';
import CartContext from '../context/CartContext';

function CustomerCheckout() {
  const {
    cartList,
  } = useContext(CartContext);

  return (
    <div>
      <NavBar selected="products" haveProducts orders="Meus Pedidos" />
      <h1>Finalizar Pedidos</h1>
      <div>
        {
          cartList.map((e, ind) => (
            <CheckoutElement
              key={ e.id }
              itemNumber={ ind }
              productName={ e.productName }
              quantity={ e.quantity }
              price={ e.price }
              url={ e.url }
              id={ e.id }
            />
          ))
        }
        <CartTotalPrice />
      </div>
      <h1>Detalhes e endereço para entrega</h1>
      <CustomerCheckoutDetails />
    </div>
  );
}

export default CustomerCheckout;
