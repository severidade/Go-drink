import React, { useContext } from 'react';
import CheckoutElement from '../components/CheckoutElement/CheckoutElement';
import CustomerCheckoutDetails
  from '../components/CustomerCheckoutDetails/CustomerCheckoutDetails';
import NavBar from '../components/NavBar/NavBar';
import CartContext from '../context/CartContext';
import HederTabelSales from '../components/HederTabelSales/HederTabelSales';
import TotalPrice from '../components/TotalPrice/TotalPrice';

function CustomerCheckout() {
  const {
    cartList,
    cartTotalPrice,
  } = useContext(CartContext);
  const testidPrefix = 'customer_checkout__';
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
              testidPrefix={ testidPrefix }
              removeItem
            />
          ))
        }
        <TotalPrice
          total={ cartTotalPrice() }
          testidPrefix={ testidPrefix }
        />
      </div>
      <div className="container_sales_details">
        <h1>Detalhes e endereço para entrega</h1>
        <CustomerCheckoutDetails />
      </div>
    </div>
  );
}

export default CustomerCheckout;
