import PropTypes from 'prop-types';
// import React, { useState } from 'react';
import React, { useContext } from 'react';
// import './CheckoutElement.css';
import styles from './CheckoutElement.module.css';
import CartContext from '../../context/CartContext';

function CheckoutElement({
  itemNumber, productName, quantity, price, url, id }) {
  const {
    removeItemToCart,
  } = useContext(CartContext);

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
        { (price * quantity).toFixed(2) }
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
        onClick={ () => removeItemToCart({ productName, quantity, price, url, id }) }
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
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default CheckoutElement;
