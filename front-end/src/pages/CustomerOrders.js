import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import ordersRequest from '../services/requests/ordersRequest';
import CardOrder from '../components/CardOrder/CardOrder';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    ordersRequest.getAll()
      .then(({ body }) => setOrders(body));
  }, []);

  return (
    <div className="container_page">
      <NavBar selected="orders" haveProducts orders="Meus Pedidos" />
      <h1>PEDIDOS PAGE</h1>
      <div className="container_orders">
        {orders.map((order) => (
          <CardOrder
            key={ order.id }
            order={ order }
            hasAddress={ false }
            testidPrefix="customer_orders__"
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerOrders;
