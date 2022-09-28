const Mocks = {
  userNoPassword: {
    id: 1,
    email: 'teste@teste.com',
    name: 'Delivery App Admin',
    role: 'administrator',
  },
  
  validLogin: {
    email: 'teste@teste.com',
    password: '--adm2@21!!--',
  },

  registerBody: {
    name: 'Delivery App Admin 77777',
    email: 'registro77777@email.com',
    password: 'nuncaAdivinharao77777',
  },

  dbUser: {
    name: 'Delivery App Admin',
    email: 'registro77777@email.com',
    password: 'nuncaAdivinharao77777',
  },

  dbProduct: {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
  },

  createProductBody: {
    name: 'Heineken 600ml',
    price: 7.50,
    urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
  },

  invalidLogin: {
    email: 'slhgidgs@gmail.com',
    password: 'soghsçoighapoi',
  }
};

module.exports = Mocks;


