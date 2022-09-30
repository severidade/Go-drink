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

  createUserBody: {
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
  },

  dbUsersArray: [
    {
      id:1,
      email: 'adm@deliveryapp.com',
      name: 'Delivery App Admin',
      password: 'a4c86edecc5aee06eff8fdeda69e0d04',
      role: 'administrator',
    },
    {
      id:2,
      email: 'fulana@deliveryapp.com',
      name: 'Fulana Pereira',
      password: '3c28d2b0881bf46457a853e0b07531c6',
      role: 'seller',
    },
    {
      id:3,
      email: 'zebirita@email.com',
      name: 'Cliente Zé Birita',
      password: '1c37466c159755ce1fa181bd247cb925',
      role: 'customer',
    },
  ],

  invalidId: 999999999999999,

  validId: 1,

  validSale: {
    userId: 1,
    sellerId: 1,
    totalPrice: '7777.00',
    deliveryAddress: 'Rua tunisiana',
    deliveryNumber: '777',
    saleDate: '2022-09-27T18:44:29.000Z',
    status: 'Em andamento',
    productsArray: [
      {
        id: 1,
        quantity: 2
      },
      {
        id: 2,
        quantity: 8
      }
    ]
  },

  invalidSale: {
    productsArray: [
      {
        id: 999,
        quantity: 2
      },
    ]
  },

  fullSaleInfo: {
    id: 11,
    userId: 1,
    sellerId: 1,
    totalPrice: 7777.00,
    deliveryAddress: 'Rua tunisiana',
    deliveryNumber: '777',
    saleDate: '2022-09-27T18:44:29.000Z',
    status: 'Em andamento',
    User: {
      id: 1,
      name: 'Delivery App Admin',
      email: 'adm@deliveryapp.com',
      role: 'administrator',
    },
    Products: [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        price: "2.20",
        urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: 7.50,
        urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
      }
    ]
  }
};

module.exports = Mocks;


