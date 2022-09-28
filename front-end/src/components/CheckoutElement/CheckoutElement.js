import PropTypes from 'prop-types';
// import React, { useState } from 'react';
import React from 'react';
// import './CheckoutElement.css';
import styles from './CheckoutElement.module.css';

function CheckoutElement({
  itemNumber, productName, quantity, price, url }) {
  return (
    <div className={ styles.container_CheckoutElement }>
      <div
        data-testid="customer_checkout__element-order-table-item-number"
      >
        { itemNumber }
      </div>
      <div
        data-testid="customer_checkout__element-order-table-name"
      >
        { productName }
      </div>
      <div
        data-testid="customer_checkout__element-order-table-quantity"
      >
        { quantity }
      </div>
      <div
        data-testid="customer_checkout__element-order-table-unit-price"
      >
        { price }
      </div>
      <div
        data-testid="customer_checkout__element-order-table-sub-total"
      >
        { price * quantity }
      </div>
      <div className="container_image">
        <img
          src={ url }
          alt={ productName }
          data-testid="customer_products__img-card-bg-image"
        />
      </div>
      <button
        type="button"
        className="rm_item"
        data-testid="customer_checkout__element-order-table-remove"
      >
        Remover
      </button>
    </div>
  );
}

CheckoutElement.propTypes = {
  itemNumber: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default CheckoutElement;
