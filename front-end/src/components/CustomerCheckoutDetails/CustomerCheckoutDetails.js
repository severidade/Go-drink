// import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function CustomerCheckoutDetails() {
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [seller, setSeller] = useState('');

  function handleClick() {
  //   const checkoutObject = {
  //     endereco: address,
  //     numero: addressNumber,
  //     responsavel: seller,
  //   };
  // history.push('/customer/orders/{id})
  }

  console.log(seller, 'vendedor selecionado');
  return (
    <div className="container_checkout_details">
      <h1>Detalhes e endereço para entrega</h1>

      <form className="form_datails">
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
            <option
              // defaultChecked
              hidden
              selected
              disabled
              value=""
            >
              escolha uma pessoa responsável
            </option>
            <option value="nome1">Nome 1</option>
            <option value="nome2">Nome 2</option>
            <option value="nome3">Nome 2</option>
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
        <input
          type="submit"
          value="Finalizar Pedido"
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleClick }
        />
      </form>

    </div>
  );
}

// CustomerCheckoutDetails.propTypes = {
//   sellers: PropTypes.array.isRequired,
// };

export default CustomerCheckoutDetails;
