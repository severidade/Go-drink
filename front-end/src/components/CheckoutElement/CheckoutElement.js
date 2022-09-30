import PropTypes from 'prop-types';
// import React, { useState } from 'react';
import React, { useContext } from 'react';
// import './CheckoutElement.css';
import styles from './CheckoutElement.module.css';
import CartContext from '../../context/CartContext';

function CheckoutElement({
  itemNumber, productName, quantity, price, url, id, testidPrefix, removeItem }) {
  const {
    removeItemToCart,
  } = useContext(CartContext);

  return (
    <div className={ styles.container_CheckoutElement }>
      <div
        className={ styles.container_item_number }
        data-testid={ `${testidPrefix}element-order-table-item-number-${itemNumber}` }
      >
        { itemNumber + 1}
      </div>
      <div
        className={ styles.container_name }
        data-testid={ `${testidPrefix}element-order-table-name-${itemNumber}` }
      >
        { productName }
      </div>
      <div
        className={ styles.container_quantity }
        data-testid={ `${testidPrefix}element-order-table-quantity-${itemNumber}` }
      >
        { quantity }
      </div>
      <div
        className={ styles.container_unit_price }
        data-testid={ `${testidPrefix}element-order-table-unit-price-${itemNumber}` }
      >
        { price.replace('.', ',') }
      </div>
      <div
        className={ styles.container_sub_total }
        data-testid={ `${testidPrefix}element-order-table-sub-total-${itemNumber}` }
      >
        { (price * quantity).toFixed(2).replace('.', ',') }
      </div>
      <div className={ styles.container_image }>
        <img
          className={ styles.image_product }
          src={ url }
          alt={ productName }
          data-testid={ `customer_products__img-card-bg-image${itemNumber}` }
        />
      </div>
      {
        removeItem && (
          <button
            type="button"
            className={ styles.rm_item }
            data-testid={ `${testidPrefix}element-order-table-remove-${itemNumber}` }
            onClick={ () => removeItemToCart({ productName, quantity, price, url, id }) }
          >
            Remover
          </button>
        )
      }
    </div>
  );
}

CheckoutElement.propTypes = {
  itemNumber: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  testidPrefix: PropTypes.string.isRequired,
  removeItem: PropTypes.bool,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

CheckoutElement.defaultProps = {
  removeItem: false,
};

export default CheckoutElement;
