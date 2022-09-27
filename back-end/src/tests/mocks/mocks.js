const Mocks = {
  mockMail: 'adm@deliveryapp.com',

  userNoPassword: {
    id: 1,
    email: this.mockMail,
    name: 'Delivery App Admin',
    role: 'administrator',
  },
  
  validLogin: {
    email: this.mockMail,
    password: '--adm2@21!!--',
  },

  registerInfo: {
    password: 'nuncaAdivinharao',
    email: this.mockMail,
    name: 'Delivery App Admin',
    role: 'administrator',
  },
};

module.exports = Mocks;
