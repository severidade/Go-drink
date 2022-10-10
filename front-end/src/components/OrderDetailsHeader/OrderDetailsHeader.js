import PropTypes from 'prop-types';
import ordersRequest from '../../services/requests/ordersRequest';
import saleStatus from '../../services/status/saleStatus';

import styles from './OrderDetailsHeader.module.css';

function OrderDetailsHeader({
  id,
  seller,
  date,
  status,
  testidPrefix,
  isUser,
  updateStatus,
}) {
  async function handleCLickDeliveryCheck() {
    await ordersRequest.updateStatus(id, saleStatus.entregue);
    updateStatus();
  }

  async function handleCLickPreparingCheck() {
    await ordersRequest.updateStatus(id, saleStatus.preparando);
    updateStatus();
  }

  async function handleCLickDispatchCheck() {
    await ordersRequest.updateStatus(id, saleStatus.emTransito);
    updateStatus();
  }
  return (
    <div className={ styles.order_details }>
      <p
        className={ styles.order_number }
        data-testid={ `${testidPrefix}element-order-details-label-order-id` }
      >
        {`Pedido ${id}`}

      </p>
      {
        isUser && (
          <p
            className={ styles.seller_name }
            data-testid={ `${testidPrefix}element-order-details-label-seller-name` }
          >
            {seller}
          </p>
        )
      }
      <p
        data-testid={ `${testidPrefix}element-order-details-label-order-date` }
      >
        {new Date(date)
          .toLocaleDateString('pt-BR', {
            timeZone: 'UTC',
          })}
      </p>
      <p
        className={ `${styles.status} ${styles[status]}` }
        data-testid={ `${testidPrefix}element-order-details-label-delivery-status` }
      >
        {status}
      </p>
      {
        isUser ? (
          <button
            className={ styles.delivery_check }
            data-testid={ `${testidPrefix}button-delivery-check` }
            type="button"
            onClick={ handleCLickDeliveryCheck }
            disabled={ status !== 'Em Trânsito' }
          >
            Marcar como entregue
          </button>
        ) : (
          <>
            <button
              data-testid={ `${testidPrefix}button-preparing-check` }
              type="button"
              onClick={ handleCLickPreparingCheck }
              disabled={ status !== 'Pendente' }
            >
              Preparar pedido
            </button>
            <button
              type="button"
              data-testid={ `${testidPrefix}button-dispatch-check` }
              onClick={ handleCLickDispatchCheck }
              disabled={ status !== 'Preparando' }
            >
              Saiu para entrega
            </button>
          </>
        )
      }

    </div>
  );
}

OrderDetailsHeader.propTypes = {
  id: PropTypes.number.isRequired,
  seller: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  testidPrefix: PropTypes.string.isRequired,
  isUser: PropTypes.bool,
  updateStatus: PropTypes.func.isRequired,
};

OrderDetailsHeader.defaultProps = {
  isUser: false,
};

export default OrderDetailsHeader;
