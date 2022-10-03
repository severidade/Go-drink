import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import ordersRequest from '../services/requests/ordersRequest';
import CardOrder from '../components/CardOrder/CardOrder';

function SellerOrder() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    ordersRequest.getAllBySellerId()
      .then(({ body }) => setOrders(body));
    // Alterar a requisição
  }, []);
  console.log({ orders });
  return (
    <div className="container_page">
      <NavBar selected="orders" orders="Pedidos" />
      <h1>PEDIDOS PAGE</h1>
      <div className="container_orders">
        {orders.map((order) => (
          <CardOrder
            key={ order.id }
            order={ order }
            hasAddress
            testidPrefix="seller_orders__"
            pushUrl="seller/orders/"
          />
        ))}
      </div>
    </div>
  );
}

export default SellerOrder;
