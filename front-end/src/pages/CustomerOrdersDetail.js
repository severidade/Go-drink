/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CheckoutElement from '../components/CheckoutElement/CheckoutElement';
import HederTabelSales from '../components/HederTabelSales/HederTabelSales';
import NavBar from '../components/NavBar/NavBar';
import OrderDetailsHeader from '../components/OrderDetailsHeader/OrderDetailsHeader';
import TotalPrice from '../components/TotalPrice/TotalPrice';
import numbers from '../services/numbers';
import ordersRequest from '../services/requests/ordersRequest';

function CustomerOrdersDetail() {
  const [order, setOrder] = useState(undefined);

  const history = useHistory();

  useEffect(() => {
    async function getOrder() {
      const saleId = history.location.pathname
        .split('/')
        .slice(numbers.negativeOne);

      const responseOrder = await ordersRequest.getById(saleId);
      setOrder(responseOrder.body);
    }
    getOrder();
  }, []);

  const testidPrefix = 'customer_order_details__';
  return (
    <div>
      <NavBar selected="orders" haveProducts orders="Meus Pedidos" />
      {
        order && (
          <>
            <OrderDetailsHeader
              date={ order.saleDate }
              isUser
              id={ order.id }
              seller={ order.Seller.name }
              status={ order.status }
              testidPrefix={ testidPrefix }
            />
            <div>
              <HederTabelSales />
              {
                order.Products.map((product, ind) => (
                  <CheckoutElement
                    id={ product.salesProducts.productId }
                    key={ product.salesProducts.productId }
                    itemNumber={ ind }
                    price={ product.price }
                    quantity={ product.salesProducts.quantity }
                    url={ product.urlImage }
                    productName={ product.name }
                    testidPrefix={ testidPrefix }
                  />
                ))
              }
            </div>
            <TotalPrice
              total={ order.totalPrice }
              testidPrefix={ testidPrefix }
            />
          </>
        )
      }

    </div>
  );
}

export default CustomerOrdersDetail;
