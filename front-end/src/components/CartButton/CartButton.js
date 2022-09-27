import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CartContext from '../../context/CartContext';

function CartButton() {
  const { cartList } = useContext(CartContext);
  const history = useHistory();
  function totalCartValue() {
    const total = cartList.reduce((prev, curr) => {
      const price = curr.price.toString().replace(',', '.');

      const subTotal = Number(curr.quantity) * Number(price);

      return prev + subTotal;
    }, 0);
    return total.toFixed(2);
  }

  return (
    <button
      type="button"
      onClick={ () => { history.push('Checkout'); } }
      data-testid="customer_products__checkout-bottom-value"
    >
      {`Ver Carrinho R$${totalCartValue()}`}
    </button>
  );
}

export default CartButton;
