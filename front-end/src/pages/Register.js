import { useState } from 'react';
import userRequest from '../services/requests/userRequest';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleBTN = async (e) => {
    e.preventDefault();
    const token = await userRequest.register(name, email, password);
    console.log(token);
  };

  return (
    <div>
      <p>Register</p>
      <form>
        <label
          htmlFor="common_register__input-name"
        >
          Nome
          <input
            id="common_register__input-name"
            data-testid="common_register__input-name"
            value={ name }
            onChange={ ({ target }) => { setName(target.value); } }
            required
          />

        </label>

        <label
          htmlFor="common_login__input-email"
        >
          Email
          <input
            id="common_login__input-email"
            data-testid="common_login__input-email"
            value={ email }
            onChange={ ({ target }) => { setEmail(target.value); } }
            required
          />

        </label>

        <label
          htmlFor="common_login__input-password"
        >
          Password
          <input
            id="common_login__input-password"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ ({ target }) => { setPassword(target.value); } }
            required
          />

        </label>

        <button
          type="button"
          data-testid="common_register__button-register"
          onClick={ handleBTN }
        >
          Cadastrar

        </button>
      </form>
    </div>
  );
}

export default Register;
