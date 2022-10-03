/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import userRequest from '../services/requests/userRequest';
import ProfileContext from '../context/ProfileContext';
import numbers from '../services/numbers/index';
import tokenService from '../services/token/tokenService';
import './LoginPage.css';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisablebutton] = useState(true);
  const [invalidRegisterMessage, setInvalidRegisterMessage] = useState(undefined);

  const history = useHistory();

  const {
    verifyEmail,
    verifyPassword,
    verifyFullName,
  } = useContext(ProfileContext);

  useEffect(() => {
    const validEmail = verifyEmail(email);
    const validPassword = verifyPassword(password);
    const validFullName = verifyFullName(fullName);
    if (validEmail && validPassword && validFullName) {
      setDisablebutton(false);
    } else {
      setDisablebutton(true);
    }
  }, [email, password, fullName]);

  const handleBTN = async (e) => {
    e.preventDefault();
    const response = await userRequest.register(fullName, email, password);

    if (response.status !== numbers.twoHundredAndOne) {
      setInvalidRegisterMessage(response.body.message);
    } else {
      tokenService.saveLocalStorage(response.body.token);
      history.push('/customer/products');
    }
  };

  return (
    <div className="container_login">
      <div className="section_01">
        <h1 className="logo">GoDrink</h1>
        <form
          className="container_form"
        >
          <label
            htmlFor="common_register__input-name"
            className="container_name"
          >
            Nome
            <input
              id="common_register__input-name"
              data-testid="common_register__input-name"
              name="name"
              value={ fullName }
              onChange={ ({ target }) => { setFullName(target.value); } }
              required
            />

          </label>

          <label
            htmlFor="common_register__input-email"
            className="container_email"
          >
            Email
            <input
              id="common_register__input-email"
              data-testid="common_register__input-email"
              type="email"
              name="email"
              value={ email }
              onChange={ ({ target }) => { setEmail(target.value); } }
              required
            />

          </label>

          <label
            htmlFor="common_register__input-password"
            className="container_password"
          >
            Password
            <input
              id="common_register__input-password"
              data-testid="common_register__input-password"
              type="password"
              value={ password }
              onChange={ ({ target }) => { setPassword(target.value); } }
              required
            />

          </label>

          <button
            type="button"
            data-testid="common_register__button-register"
            onClick={ handleBTN }
            disabled={ disableButton }
            className="login_app_button"
          >
            Cadastrar

          </button>

        </form>
        { invalidRegisterMessage !== undefined
        && (
          <p
            data-testid="common_register__element-invalid_register"
          >
            {invalidRegisterMessage}

          </p>)}
      </div>
      <div className="section_02">
        <div className="bg_login_image object_mask_register" />
        <div className="container_img_register" />
      </div>
    </div>
  );
}

export default Register;
