/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import CartContext from './CartContext';
import ProfileContext from './ProfileContext';

function MyProvider({ children }) {
  // Profile
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
    const numberSix = 12;
    const verify = fullName === undefined ? false : fullName.length >= numberSix;

    return verify;
  };

  const contextValue = {
    verifyEmail,
    verifyPassword,
    verifyFullName,
  };

  const contextValueMemo = useMemo(() => contextValue, []);

  // Cart
  const [cartList, setCartList] = useState([]);

  function saveCarList(products) {
    setCartList(products);
    localStorage.setItem('carList', JSON.stringify(products));
  }

  function addOneCartItem(item) {
    // clona o carList
    const list = JSON.parse(JSON.stringify(cartList));
    const listItem = list.find((e) => e.id === item.id);

    if (listItem) {
      listItem.quantity += 1;
      saveCarList(list);
    } else {
      item.quantity = 1;
      list.push(item);
      saveCarList(list);
    }
  }

  function removeItemToCart(item) {
    saveCarList(cartList.filter((e) => e.id !== item.id));
  }

  function subtractOneCartItem(item) {
    // clona o carList
    const list = JSON.parse(JSON.stringify(cartList));
    const listItem = list.find((e) => e.id === item.id);

    listItem.quantity -= 1;
    if (listItem.quantity === 0) {
      removeItemToCart(listItem);
    } else {
      saveCarList(list);
    }
  }

  const cartContextValue = {
    addOneCartItem,
    removeItemToCart,
    subtractOneCartItem,
    cartList,
    setCartList,
  };

  const cartContextMemo = useMemo(() => cartContextValue, [cartList]);

  return (
    <ProfileContext.Provider value={ contextValueMemo }>
      <CartContext.Provider value={ cartContextMemo }>
        { children }
      </CartContext.Provider>
    </ProfileContext.Provider>

  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
