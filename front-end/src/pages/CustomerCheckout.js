import React, { useContext } from 'react';
import CartTotalPrice from '../components/CartTotalPrice/CartTotalPrice';
import CheckoutElement from '../components/CheckoutElement/CheckoutElement';
import CustomerCheckoutDetails
  from '../components/CustomerCheckoutDetails/CustomerCheckoutDetails';
import NavBar from '../components/NavBar/NavBar';
import CartContext from '../context/CartContext';
import HederTabelSales from '../components/HederTabelSales/HederTabelSales';

function CustomerCheckout() {
  const {
    cartList,
  } = useContext(CartContext);

  return (
    <div className="container_page">
      <NavBar selected="products" haveProducts orders="Meus Pedidos" />
      <h1>Finalizar Pedidos</h1>
      <div className="container_sales">
        <HederTabelSales />
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
              testidPrefix="customer_checkout__"
              removeItem
            />
          ))
        }
        <CartTotalPrice />
      </div>
      <div className="container_sales_details">
        <h1>Detalhes e endereço para entrega</h1>
        <CustomerCheckoutDetails />
      </div>
    </div>
  );
}

export default CustomerCheckout;
