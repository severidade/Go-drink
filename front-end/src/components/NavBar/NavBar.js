import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';

function NavBar({ user, selected }) {
  // const [loggedUser] = useState(user);
  // console.log(selected, 'teste');
  const history = useHistory();

  const handleClick = ({ target }) => {
    console.log(target, 'target');
    switch (target.className) {
    case 'products ':
      history.push('/customer/products');
      break;
    case 'orders':
      history.push('/orders');
      break;
    case 'user':
      history.push('/costumer');
      break;
    case 'exit':
      history.push('/exit');
      break;
    default: console.log('default');
      break;
    }
  };

  return (
    <div className="container_nav_main">
      <div className="container_buttons_left">
        <button
          type="button"
          className={ `products ${selected === 'products' ? 'selected' : ''}` }
          data-testid="customer_products__element-navbar-link-products"
          onClick={ handleClick }
        >
          PRODUTOS
        </button>
        <button
          type="button"
          className={ `${selected === 'orders' ? 'selected' : ''} orders` }
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ handleClick }
        >
          MEUS PEDIDOS
        </button>
      </div>
      <div className="container_buttons_right">
        <button
          type="button"
          className={ `${selected === 'costumer' ? 'selected' : ''} costumer` }
          data-testid="customer_products__element-navbar-user-full-name"
          onClick={ handleClick }
        >
          { user }
        </button>
        <button
          type="button"
          className={ `${selected === 'exit' ? 'selected' : ''} exit` }
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ handleClick }
        >
          SAIR
        </button>
      </div>

    </div>
  );
}

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
};

export default NavBar;
