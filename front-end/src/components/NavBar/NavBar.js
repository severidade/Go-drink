import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

import './NavBar.css';

function NavBar({ user, selected }) {
  const history = useHistory();

  return (
    <div className="container_nav_main">
      <div className="container_section_user">
        <button
          type="button"
          // className={ `${selected === 'costumer' ? 'selected' : ''} costumer` }
          className="costumer"
          data-testid="customer_products__element-navbar-user-full-name"
          // será esse botão leva pra ma rota de edição do usuário?
          onClick={ () => history.push('/costumer') }
        >
          { user }
        </button>
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
          onClick={ () => history.push('/custumer/products') }
        >
          PRODUTOS
        </button>
        <button
          type="button"
          className={ `orders${selected === 'orders' ? ' selected' : ''}` }
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push('/orders') }
        >
          MEUS PEDIDOS
        </button>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
};

export default NavBar;
