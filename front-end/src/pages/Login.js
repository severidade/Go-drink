/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ProfileContext from '../context/ProfileContext';
import userRequest from '../services/requests/userRequest';
import numbers from '../services/numbers/index';
import tokenService from '../services/token/tokenService';
import './LoginPage.css';
import userService from '../services/user/userService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(true);
  const [invalidLoginMessage, setInvalidLoginMessage] = useState(true);

  const {
    verifyEmail,
    verifyPassword,
  } = useContext(ProfileContext);

  const history = useHistory();

  function login(role) {
    switch (role) {
    case 'customer':
      history.push('customer/products');
      break;
    case 'seller':
      history.push('seller/orders');
      break;
    case 'administrator':
      history.push('admin/manage');
      break;
    default:
      break;
    }
  }

  useEffect(() => {
    const role = userService.getUserRole();
    login(role);
  }, []);

  useEffect(() => {
    const validEmail = verifyEmail(email);
    const validPassword = verifyPassword(password);
    if (validEmail && validPassword) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [email, password]);

  async function handleClickLogin() {
    const response = await userRequest.login(email, password);
    if (response.status !== numbers.twoHundred) {
      setInvalidLogin(true);
      setInvalidLoginMessage(response.body.message);
    } else {
      tokenService.saveLocalStorage(response.body.token);
      const role = userService.getUserRole();
      login(role);
    }
  }

  function handleClickRegister() {
    history.push('/register');
  }

  return (
    <div className="container_login">
      <div className="section_01">
        <h1 className="logo">GoDrink</h1>
        <form
          className="container_form"
        >
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
              className="invalid"
              data-testid="common_login__element-invalid-email"
            >
              {invalidLoginMessage}

            </p>)
        }
      </div>
      <div className="section_02">
        <div className="bg_login_image object-mask" />
        <div className="container_img_login" />
      </div>
    </div>
  );
}

export default Login;
