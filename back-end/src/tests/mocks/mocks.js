const Mocks = {
  mockMail: 'adm@deliveryapp.com',

  userNoPassword: {
    id: 1,
    email: 'teste@teste.com',
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
  },

  dbProduct: {
    "id": 2,
    "name": "Heineken 600ml",
    "price": "7.50",
    "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
  },

  createProductBody: {
    "name": "Heineken 600ml",
    "price": "7.50",
    "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
  },
  invalidLogin: {
    "email": 'slhgidgs@gmail.com',
    "password": 'soghsçoighapoi'
  }
};

module.exports = Mocks;
