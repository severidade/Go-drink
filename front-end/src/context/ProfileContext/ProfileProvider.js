/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import ProfileContext from './ProfileContext';

function ProfileProvider({ children }) {
  const verifyPassword = (password) => {
    const numberSix = 6;
    const verify = password === undefined ? false : password.length >= numberSix;

    return verify;
  };

  const verifyEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const verify = emailRegex.test(email);

    return verify;
  };

  const verifyFullName = (fullName) => {
    const numberSix = 6;
    const verify = fullName === undefined ? false : password.length >= numberSix;

    return verify;
  };

  const contextValue = {
    verifyEmail,
    verifyPassword,
    verifyFullName,
  };

  const contextValueMemo = useMemo(() => contextValue, []);

  return (
    <ProfileContext.Provider value={ contextValueMemo }>
      { children }
    </ProfileContext.Provider>

  );
}

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileProvider;
