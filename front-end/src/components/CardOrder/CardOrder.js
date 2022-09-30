/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React from 'react';

function CardOrder({ hasAddress, order, testidPrefix }) {
  const { status, price, date, id, address } = order;

  return (
    <div className="container_order_main">
      <p
        className="order_id"
        data-testid={ `${testidPrefix}element-order-id-${id}` }
      >
        {`Pedido ${id} `}
      </p>
      <div className="container_status">
        <p
          className="status"
          data-testid={ `${testidPrefix}element-delivery-status-${id}` }
        >
          {status}
        </p>
        <p
          className="date"
          data-testid={ `${testidPrefix}element-order-date-${id}` }
        >
          {date}
        </p>
        <p
          className="price"
          data-testid={ `${testidPrefix}element-card-price-${id}` }
        >
          {price}
        </p>
      </div>
      <div
        className="address_container"
      >
        {hasAddress && (
          <p
            className="price"
            data-testid={ `${testidPrefix}element-card-address-${id}` }
          >
            {address}
          </p>
        )}
      </div>
    </div>
  );
}

CardOrder.propTypes = {
  order: PropTypes.shape({
    status: PropTypes.string,
    price: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    address: PropTypes.string,
  }).isRequired,
  hasAddress: PropTypes.bool,
  testidPrefix: PropTypes.string.isRequired,
};

CardOrder.defaultProps = {
  hasAddress: false,
};

export default CardOrder;
