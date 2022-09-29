import { useContext } from 'react';
import CartContext from '../../context/CartContext';

function CartTotalPrice() {
  const {
    cartTotalPrice,
  } = useContext(CartContext);
  return (
    <p>
      Total: R$
      {' '}
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        {cartTotalPrice().replace('.', ',')}

      </span>
    </p>
  );
}

export default CartTotalPrice;
