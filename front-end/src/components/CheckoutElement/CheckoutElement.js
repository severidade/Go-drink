import PropTypes from 'prop-types';
// import React, { useState } from 'react';
import React from 'react';

// function CheckoutElement({
//   productId,
//   productName,
//   productQunt,
//   priceUnit,
//   priceTotal
// })
function CheckoutElement({ productName, url }) {
  return (
    <div className="container_CheckoutElement">
      <div
        data-testid="customer_checkout__element-order-table-item-number"
      >
        1
      </div>
      <div
        data-testid="customer_checkout__element-order-table-name"
      >
        Cerveja Stella 250ml
      </div>
      <div
        data-testid="customer_checkout__element-order-table-quantity"
      >
        productQunt
      </div>
      <div
        data-testid="customer_checkout__element-order-table-unit-price"
      >
        priceUnit
      </div>
      <div
        data-testid="customer_checkout__element-order-table-sub-total"
      >
        priceSubTotal
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

// CardProduct.propTypes = {
//   productId: PropTypes.string.isRequired,
//   productName: PropTypes.string.isRequired,
//   productQunt: PropTypes.number.isRequired,
//   priceUnit: PropTypes.number.isRequired,
//   priceTotal: PropTypes.number.isRequired,
// };

CheckoutElement.propTypes = {
  productName: PropTypes.string.isRequired,
  // price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CheckoutElement;
