/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import React from 'react';

import styles from './CardOrder.module.css';

function CardOrder({ hasAddress, order, testidPrefix, pushUrl }) {
  const { id, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = order;

  const formatDate = (rawDate) => {
    const dateLimit = 10;
    const date = rawDate.slice(0, dateLimit);
    const dateArr = date.split('-');
    const reverse = dateArr.reverse();
    const formattedDate = reverse.join('/');
    return formattedDate;
  }; // talvez colocar essa função em outro arquivo dps

  const properDate = formatDate(saleDate);

  const history = useHistory();

  return (
    <div
      className={ styles.container_order_main }
    >
      <button
        // className={ `${styles.status} ${styles[status.replace(' ', '')]}` }
        className={ styles.status }
        type="button"
        onClick={ () => history.push(`${pushUrl}${id}`) }
      >
        <span
          className={ styles.order_id }
        >
          Pedido &#8470;
          <em
            data-testid={ `${testidPrefix}element-order-id-${id}` }
          >
            {` ${id} `}
          </em>
        </span>

        <span
          className={ `${styles[status.replace(' ', '')]}` }
          data-testid={ `${testidPrefix}element-delivery-status-${id}` }
        >
          {status}
        </span>
        <span
          className={ styles.date }
          data-testid={ `${testidPrefix}element-order-date-${id}` }
        >
          {properDate}
        </span>
        <span
          className={ styles.price }
          data-testid={ `${testidPrefix}element-card-price-${id}` }
        >
          <em className={ styles.label_price }>Valor</em>
          {' '}
          <em className={ styles.currency }>
            {totalPrice.replace('.', ',')}
          </em>
        </span>
      </button>
      <div
        className="address_container"
      >
        {hasAddress && (
          <p
            className="address"
            data-testid={ `${testidPrefix}element-card-address-${id}` }
          >
            {`${deliveryAddress}, ${deliveryNumber}`}
          </p>
        )}
      </div>
    </div>
  );
}

CardOrder.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    totalPrice: PropTypes.string,
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  hasAddress: PropTypes.bool,
  testidPrefix: PropTypes.string.isRequired,
  pushUrl: PropTypes.string.isRequired,
};

CardOrder.defaultProps = {
  hasAddress: false,
};

export default CardOrder;
