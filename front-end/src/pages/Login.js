import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileContext from '../context/ProfileContext/ProfileContext';

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    disableButton,
  } = useContext(ProfileContext);
  const history = useHistory();

  function handleClick() {
    // const token = { email: email };
    // localStorage.setItem('token', 'biscoito');
    history.push('/customer/products');
  }

  return (
    <div className="container_login">
      <h1>Login</h1>
      <form>
        <label
          htmlFor="email"
          className="container_email"
        >
          <span className="input_login">E-mail</span>
          <input
            id="email"
            type="email"
            name="email"
            className="input_email"
            data-testid="common_login__input-email"
            required="required"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label
          htmlFor="password"
          className="container_password"
        >
          <span className="input_login">Senha</span>
          <input
            id="password"
            type="password"
            name="password"
            className="input_password"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
            required
            // importante colocar o campo com required para a animação do span funcionar
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ disableButton }
          onClick={ () => handleClick() }
          className="login_app_button"
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => handleClick() }
          className="login_app_button"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default Login;