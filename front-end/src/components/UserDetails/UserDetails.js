import PropTypes from 'prop-types';
import style from './UserDetails.module.css';

function UserDetails({ userName, email, role, itemNumber, removeItem }) {
  return (
    <div className={ style.container }>
      <p
        data-testid={ `admin_manage__element-user-table-item-number-${itemNumber}` }
      >
        {itemNumber}

      </p>
      <p
        data-testid={ `admin_manage__element-user-table-name-number-${itemNumber}` }
      >
        {userName}

      </p>
      <p
        data-testid={ `admin_manage__element-user-table-email-${itemNumber}` }
      >
        {email}

      </p>
      <p
        data-testid={ `admin_manage__element-user-table-role-${itemNumber}` }
      >
        {role}

      </p>
      <button
        type="button"
        onClick={ removeItem }
        data-testid={ `admin_manage__element-user-table-remove-${itemNumber}` }
      >
        Excluir

      </button>
    </div>
  );
}

export default UserDetails;

UserDetails.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  itemNumber: PropTypes.number.isRequired,
  removeItem: PropTypes.func.isRequired,
};
