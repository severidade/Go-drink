import PropTypes from 'prop-types';
import styles from './TotalPrice.module.css';

function TotalPrice({ total, testidPrefix }) {
  return (
    <p className={ styles.conteiner_totalPrice }>
      Total:
      <span
        className={ styles.total_price }
        data-testid={ `${testidPrefix}element-order-total-price` }
      >
        {total.replace('.', ',')}
      </span>
    </p>
  );
}

TotalPrice.propTypes = {
  total: PropTypes.string.isRequired,
  testidPrefix: PropTypes.string.isRequired,
};

export default TotalPrice;
