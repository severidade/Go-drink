/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import CartContext from './CartContext';
import ProfileContext from './ProfileContext';

function MyProvider({ children }) {
  const [userName, setUserName] = useState('');
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

  const profileContextValue = {
    verifyEmail,
    verifyPassword,
    verifyFullName,
    setUserName,
    userName,
  };

  const profileContextValueMemo = useMemo(() => profileContextValue, []);

  // Cart
  const [cartList, setCartList] = useState([]);

  function saveCarList(products) {
    setCartList(products);
    localStorage.setItem('cartList', JSON.stringify(products));
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

    if (listItem) {
      if (listItem.quantity <= 0) {
        removeItemToCart(listItem);
      } else {
        listItem.quantity -= 1;
        saveCarList(list);
      }
    }
  }

  function getQtdFromCartList(itemId) {
    if (cartList.length > 0) {
      const item = cartList.find((e) => e.id === itemId);
      return item ? item.quantity : 0;
    }
    const cart = JSON.parse(localStorage.getItem('cartList'));
    if (cart) {
      const item = cart.find((e) => e.id === itemId);
      return item ? item.quantity : 0;
    }
    return 0;
  }

  const cartContextValue = {
    addOneCartItem,
    removeItemToCart,
    subtractOneCartItem,
    cartList,
    setCartList,
    getQtdFromCartList,
  };

  const cartContextMemo = useMemo(() => cartContextValue, [cartList]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cartList'));
    if (cart) setCartList(cart);
  }, []);

  return (
    <ProfileContext.Provider value={ profileContextValueMemo }>
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
