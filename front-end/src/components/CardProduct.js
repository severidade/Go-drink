import PropTypes from 'prop-types';
import React, { useState } from 'react';

function CardProduct({ productName, price, url }) {
  const [itemCount, setItemCount] = useState(0);
  // const [productQuantity, setproductQuantity] = useState(0);
  // const value = 1;

  // const handleClickAdd = () => setproductQuantity(productQuantity + value);
  // const handleClickRm = () => setproductQuantity(productQuantity - value);

  return (
    <div className="container_product_main">
      <div className="container_section_1">
        <p
          className="price"
          data-testid="customer_products__element-card-price"
        >
          <strong>R$</strong>
          { price }
        </p>
        <div className="container_image">
          <img
            src={ url }
            alt={ productName }
            data-testid="customer_products__img-card-bg-image"
          />
        </div>
      </div>
      <div className="container_section_2">
        <p
          className="product_name"
          data-testid="customer_products__element-card-title"
        >
          { productName }
        </p>
        <div className="container_quantity">
          <button
            type="button"
            className="rm_item"
            data-testid="customer_products__button-card-rm-item"
            onClick={ () => {
              setItemCount(Math.max(itemCount - 1, 0));
            } }
          >
            -
          </button>
          <div
            className="quantity"
            data-testid="customer_products__input-card-quantity"
          >
            <p>
              { itemCount }
            </p>
          </div>
          <button
            type="button"
            className="add_item"
            data-testid="customer_products__button-card-add-item"
            onClick={ () => {
              setItemCount(itemCount + 1);
            } }
          >
            +
          </button>
        </div>
      </div>

    </div>
  );
}

CardProduct.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CardProduct;
