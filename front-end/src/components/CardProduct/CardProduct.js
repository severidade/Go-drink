/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useContext, useState, useEffect } from 'react';
// import './CardProduct.css';

import styles from './CardProduct.module.css';

import CartContext from '../../context/CartContext';

function CardProduct({ productName, price, url, id }) {
  const [itemCount, setItemCount] = useState(0);
  const product = { productName, price, url, id };
  const {
    addOneCartItem,
    subtractOneCartItem,
    getQtdFromCartList,
    setCartItemQtd,
  } = useContext(CartContext);

  useEffect(() => {
    const qtd = getQtdFromCartList(id);
    setItemCount(qtd);
  }, []);

  function handleInputChange({ target: { value } }) {
    const qtd = Number(value);
    setItemCount(qtd.toString());
    setCartItemQtd(product, qtd);
  }

  // // https://grrr.tech/posts/2022/why-use-refs-in-react/
  // document.querySelectorAll('.price').forEach((el) => {
  //   const [int, dec] = el.textContent.trim().split(',');
  //   el.outerHTML = `${int}<strong>,${dec}</strong>`;
  // });

  return (
    <div className={ styles.container_product_main }>
      <div className={ styles.stycontainer_section_1 }>
        <p
          className={ styles.container_price }
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          <strong className={ styles.currency }>R$</strong>
          <span
            className="price"
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            { price.replace('.', ',') }
          </span>
        </p>
        <div className={ styles.container_image }>
          <img
            className={ styles.image_product }
            src={ url }
            alt={ productName }
            data-testid={ `customer_products__img-card-bg-image-${id}` }
          />
        </div>
      </div>
      <div className={ styles.container_section_2 }>
        <p
          className="product_name"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          { productName }
        </p>
        <div className={ styles.container_quantity }>
          <button
            type="button"
            className={ styles.rm_item }
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => {
              setItemCount(Math.max(itemCount - 1, 0));
              subtractOneCartItem(product);
            } }
          >
            -
          </button>
          <input
            className={ styles.quantity }
            min="0"
            type="number"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            onChange={ handleInputChange }
            value={ itemCount }
          />
          {/* <div
            className="quantity"
          >
          </div> */}
          <button
            type="button"
            className={ styles.add_item }
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => {
              setItemCount(itemCount + 1);
              addOneCartItem(product);
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
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default CardProduct;
