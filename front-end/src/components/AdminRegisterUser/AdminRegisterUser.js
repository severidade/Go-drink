import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileContext from '../../context/ProfileContext';
import numbers from '../../services/numbers';
import userRequest from '../../services/requests/userRequest';
import roleList from '../../services/roles';

import styles from './AdminRegisterUser.module.css';

function AdminRegisterUser() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [requestBody, setRequestBody] = useState('');

  const {
    verifyEmail,
    verifyPassword,
    verifyFullName,
  } = useContext(ProfileContext);

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const { status } = await userRequest.registerByRole(
      fullName,
      email,
      password,
      role,
    );
    if (status === numbers.fourHundredAndNine) {
      setRequestBody('Cadastro invalido');
    } else {
      history.go(0);
    }
  }

  function disableRegisterButton() {
    const validEmail = verifyEmail(email);
    const validPassword = verifyPassword(password);
    const validFullName = verifyFullName(fullName);
    const result = validEmail && validPassword && validFullName;
    return !result;
  }

  return (
    <div className={ styles.container_cadastro }>
      <div>
        <h1>Cadastrar novo usuário</h1>
        {requestBody && (
          <p
            data-testid="admin_manage__element-invalid-register"
          >
            {requestBody}

          </p>
        )}
      </div>
      <form className={ styles.add_user_form }>
        <label className={ styles.form_name } htmlFor="input-name">
          <p>Nome</p>
          <input
            id="input-name"
            type="name"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            value={ fullName }
            onChange={ ({ target }) => setFullName(target.value) }
          />
        </label>

        <label className={ styles.form_email } htmlFor="input-email">
          <p>Email</p>
          <input
            id="input-email"
            type="email"
            placeholder="email@email.com"
            data-testid="admin_manage__input-email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label className={ styles.form_password } htmlFor="input-password">
          <p>Password</p>
          <input
            id="input-password"
            type="password"
            data-testid="admin_manage__input-password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <label className={ styles.form_role } htmlFor="input-role">
          <p>tipo</p>
          <select
            id="role"
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ ({ target }) => setRole(target.value) }
          >
            {roleList.map((roleOption) => (
              <option key={ roleOption } value={ roleOption }>
                {roleOption}
              </option>
            ))}
          </select>
        </label>
        <div className={ styles.form_send }>
          <button
            type="button"
            disabled={ disableRegisterButton() }
            onClick={ handleRegister }
            data-testid="admin_manage__button-register"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminRegisterUser;
