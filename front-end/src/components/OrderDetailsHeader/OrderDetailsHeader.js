import PropTypes from 'prop-types';
import ordersRequest from '../../services/requests/ordersRequest';
import saleStatus from '../../services/status/saleStatus';

function OrderDetailsHeader({
  id,
  seller,
  date,
  status,
  testidPrefix,
  isUser,
}) {
  function handleCLickDeliveryCheck() {
    ordersRequest(id, saleStatus.entregue);
  }

  function handleCLickPreparingCheck() {
    ordersRequest(id, saleStatus.preparando);
  }

  function handleCLickDispatchCheck() {
    ordersRequest(id, saleStatus.emTransito);
  }
  return (
    <div>
      <p
        data-testid={ `${testidPrefix}element-order-details-label-order-id` }
      >
        {`Pedido ${id}`}

      </p>
      {
        isUser && (
          <p
            data-testid={ `${testidPrefix}element-order-details-label-seller-name` }
          >
            {seller}
          </p>
        )
      }
      <p
        data-testid={ `${testidPrefix}element-order-details-label-order-date` }
      >
        {date}
      </p>
      {
        isUser ? (
          <>
            <p
              data-testid={ `${testidPrefix}element-order-details-label-delivery-status` }
            >
              {status}
            </p>
            <button
              data-testid={ `${testidPrefix}button-delivery-check` }
              type="button"
              onClick={ handleCLickDeliveryCheck }
            >
              Marcar como entregue
            </button>
          </>
        ) : (
          <>
            <button
              data-testid={ `${testidPrefix}button-preparing-check` }
              type="button"
              onClick={ handleCLickPreparingCheck }
            >
              Preparar pedido
            </button>
            <button
              type="button"
              data-testid={ `${testidPrefix}button-dispatch-check` }
              onClick={ handleCLickDispatchCheck }
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
};

OrderDetailsHeader.defaultProps = {
  isUser: false,

};

export default OrderDetailsHeader;
