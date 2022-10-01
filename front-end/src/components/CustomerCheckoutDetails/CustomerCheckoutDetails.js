/* eslint-disable react-hooks/exhaustive-deps */
// import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ordersRequest from '../../services/requests/ordersRequest';
// import { useHistory } from 'react-router-dom';
import userRequest from '../../services/requests/userRequest';

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
    <div className="container_checkout_details">

      <form className="form_details">
        <label
          htmlFor="seller"
        >
          <samp>Responsável pela venda</samp>
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
        >
          <samp>Endereço</samp>
          <input
            id="adress"
            data-testid="customer_checkout__input-address"
            type="text"
            name="address"
            value={ address }
            onChange={ ({ target }) => setAddress(target.value) }
            // readOnly
          />
        </label>

        <label
          htmlFor="number"
        >
          <samp>Número</samp>
          <input
            id="number"
            data-testid="customer_checkout__input-address-number"
            type="text"
            name="addressNumber"
            value={ addressNumber }
            onChange={ ({ target }) => setAddressNumber(target.value) }
            // readOnly
          />
        </label>

      </form>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleClick }
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
