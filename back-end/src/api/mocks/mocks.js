const Mocks = {
  mockmail: 'adm@deliveryapp.com',

  userNoPassword: {
    id: 1,
    email: this.mockmail,
    name: 'Delivery App Admin',
    role: 'administrator',
  },
  
  validLogin: {
    email: this.mockmail,
    password: '--adm2@21!!--',
  },

  registerInfo: {
    password: 'nuncaAdivinharao',
    email: this.mockmail,
    name: 'Delivery App Admin',
    role: 'administrator',
  },
};

module.exports = Mocks;
