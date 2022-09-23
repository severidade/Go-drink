/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import userRequest from '../services/requests/userRequest';
import ProfileContext from '../context/ProfileContext/ProfileContext';

function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisablebutton] = useState(true);

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
    const token = await userRequest.register(fullName, email, password);
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
            name="name"
            value={ fullName }
            onChange={ ({ target }) => { setFullName(target.value); } }
            required
          />

        </label>

        <label
          htmlFor="common_register__input-email"
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
        >
          Cadastrar

        </button>
      </form>
    </div>
  );
}

export default Register;
