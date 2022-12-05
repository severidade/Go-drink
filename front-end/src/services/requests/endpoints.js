const host = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export default {
  users: `${host}/users`,
  sellers: `${host}/users/sellers`,
  userAdmin: `${host}/users/admin`,
  login: `${host}/login`,
  products: `${host}/products`,
  customerOrders: `${host}/customer/orders`,
  customerOrdersByUser: `${host}/customer/orders/user/`,
  customerOrdersBySeller: `${host}/customer/orders/seller/`,
};
