import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../../context/CartContext';

function CartButton() {
  const { cartList, cartTotalPrice } = useContext(CartContext);
  const history = useHistory();

  return (

    <button
      type="button"
      onClick={ () => { history.push('checkout'); } }
      className="cart_button"
      data-testid="customer_products__button-cart"
      disabled={ (cartList.length < 1 || !cartList) }
    >
      Ver carrinho R$
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        {cartTotalPrice().replace('.', ',')}

      </span>

    </button>
  );
}

export default CartButton;
