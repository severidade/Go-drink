import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import styles from './CartTotalPrice.module.css';

function CartTotalPrice() {
  const {
    cartTotalPrice,
  } = useContext(CartContext);
  return (
    <p className={ styles.conteiner_totalPrice }>
      Total:
      <span
        className={ styles.total_price }
        data-testid="customer_checkout__element-order-total-price"
      >
        {cartTotalPrice().replace('.', ',')}
      </span>
    </p>
  );
}

export default CartTotalPrice;
