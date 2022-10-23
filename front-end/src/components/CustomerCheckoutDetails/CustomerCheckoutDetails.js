/* eslint-disable react-hooks/exhaustive-deps */
// import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ordersRequest from '../../services/requests/ordersRequest';
// import { useHistory } from 'react-router-dom';
import userRequest from '../../services/requests/userRequest';

import styles from './CustomerCheckoutDetails.module.css';

function CustomerCheckoutDetails() {
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState(undefined);

  const { cartList, cartTotalPrice, saveCarList } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    async function getSeller() {
      const response = await userRequest.getSellers();
      setSellers(response.body);
      setSeller(response.body[0].id);
    }
    getSeller();
  }, []);

  function disableFinishButton() {
    const result = address && addressNumber;
    return !result;
  }

  async function handleClick() {
    const data = {
      sellerId: seller,
      address,
      addressNumber,
      cart: cartList,
      totalPrice: cartTotalPrice() };

    const response = await ordersRequest.finishOrder(data);
    saveCarList([]);
    history.push(`orders/${response.body.id}`);
  }

  return (
    <div className={ styles.container_checkout_details }>

      <form
        className={ styles.form_details }
      >
        <label
          htmlFor="seller"
          className={ styles.seller }
        >
          <em>Responsável pela venda</em>
          <select
            id="seller"
            data-testid="customer_checkout__select-seller"
            value={ seller }
            onChange={ ({ target }) => setSeller(target.value) }
          >
            {sellers.map((s) => (
              <option
                key={ s.id }
                value={ s.id }
              >
                {s.name}

              </option>

            ))}
          </select>
        </label>

        <label
          htmlFor="adress"
          className={ styles.adress }
        >
          <em>Endereço</em>
          <input
            id="adress"
            data-testid="customer_checkout__input-address"
            type="text"
            name="address"
            value={ address }
            className={ styles.input_address }
            onChange={ ({ target }) => setAddress(target.value) }
            // readOnly
          />
        </label>

        <label
          htmlFor="number"
          className={ styles.number }
        >
          <em>Número</em>
          <input
            id="number"
            data-testid="customer_checkout__input-address-number"
            type="text"
            name="addressNumber"
            value={ addressNumber }
            className={ styles.input_address_number }
            onChange={ ({ target }) => setAddressNumber(target.value) }
            // readOnly
          />
        </label>

      </form>
      <button
        className={ styles.button_submit_order }
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleClick }
        disabled={ disableFinishButton() }
      >
        Finalizar Pedido

      </button>
    </div>
  );
}

// CustomerCheckoutDetails.propTypes = {
//   sellers: PropTypes.array.isRequired,
// };

export default CustomerCheckoutDetails;
