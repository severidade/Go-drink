import PropTypes from 'prop-types';
import styles from './TotalPrice.module.css';

function TotalPrice({ total }) {
  return (
    <p className={ styles.conteiner_totalPrice }>
      Total:
      <span
        className={ styles.total_price }
        data-testid="customer_checkout__element-order-total-price"
      >
        {total.replace('.', ',')}
      </span>
    </p>
  );
}

TotalPrice.propTypes = {
  total: PropTypes.string.isRequired,
};

export default TotalPrice;
