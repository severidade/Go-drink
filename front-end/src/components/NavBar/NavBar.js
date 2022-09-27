/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileContext from '../../context/ProfileContext';

import './NavBar.css';

function NavBar({ selected }) {
  const history = useHistory();

  const { userName, setUserName } = useContext(ProfileContext);
  useEffect(() => {
    if (userName === '') {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUserName(userData.name);
    }
  }, []);
  return (
    <div className="container_nav_main">
      <div className="container_section_user">
        <p
          // className={ `${selected === 'costumer' ? 'selected' : ''} costumer` }
          className="costumer"
          data-testid="customer_products__element-navbar-user-full-name"
          // será esse botão leva pra ma rota de edição do usuário?
          /*  onClick={ () => history.push('/costumer') } */
        >
          { userName }
        </p>
        <button
          type="button"
          // className={ `${selected === 'exit' ? 'selected' : ''} exit` }
          className="exit"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => history.push('/exit') }
        >
          Sair
        </button>
      </div>
      <nav className="container_buttons_menu">
        <button
          type="button"
          className={ `products${selected === 'products' ? ' selected' : ''}` }
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => history.push('/customer/products') }
        >
          PRODUTOS
        </button>
        <button
          type="button"
          className={ `orders${selected === 'orders' ? ' selected' : ''}` }
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push('/customer/products/id') }
        >
          MEUS PEDIDOS
        </button>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  selected: PropTypes.string.isRequired,
};

export default NavBar;
