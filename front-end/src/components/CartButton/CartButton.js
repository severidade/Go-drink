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
      onClick={ () => { history.push('customer/checkout'); } }
      data-testid="customer_products__checkout-bottom-value"
    >
      <span>Valor do carrinho R$</span>
      <strong
        data-testid="customer_products__checkout-bottom-value"
      >
        {totalCartValue().replace('.', ',')}

      </strong>

    </button>
  );
}

export default CartButton;
