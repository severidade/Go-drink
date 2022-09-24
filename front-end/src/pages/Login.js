/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileContext from '../context/ProfileContext/ProfileContext';
import userRequest from '../services/requests/userRequest';
import numbers from '../services/numbers/index';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisablebutton] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(true);
  const [invalidLoginMessage, setInvalidLoginMessage] = useState(true);

  const {
    verifyEmail,
    verifyPassword,
  } = useContext(ProfileContext);

  useEffect(() => {
    const validEmail = verifyEmail(email);
    const validPassword = verifyPassword(password);
    if (validEmail && validPassword) {
      setDisablebutton(false);
    } else {
      setDisablebutton(true);
    }
  }, [email, password]);

  const history = useHistory();

  async function handleClickLogin() {
    const response = await userRequest.login(email, password);
    if (response.status !== numbers.twoHundred) {
      setInvalidLogin(true);
      setInvalidLoginMessage(response.body.message);
    } else {
      localStorage.setItem('token', response.body.token);
      history.push('/customer/products');
    }
  }

  function handleClickRegister() {
    history.push('/register');
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
          onClick={ () => handleClickLogin() }
          className="login_app_button"
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => handleClickRegister() }
          className="login_app_button"
        >
          Ainda não tenho conta
        </button>
      </form>
      {
        invalidLogin
        && (
          <p
            data-testid="common_login__element-invalid-email"
          >
            {invalidLoginMessage}

          </p>)
      }
    </div>
  );
}

export default Login;
