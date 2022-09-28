// const expect  = require('chai').expect;
// const sinon = require('sinon');
// // const chai = require('chai');

// const ProductsService = require('../../../api/service/ProductsService');
// const { products } = require('../../../database/models');
// const Mocks = require('../../mocks/mocks');

// describe('Products Service', () => {
  
//   // create
//   describe('create', () => {
//     before(() => {
//       sinon.stub(products, 'findOne')
//       .onCall(0).resolves(undefined)
//       .onCall(1).resolves(Mocks.dbProduct);
//     });

//     afterEach(() => {
//       sinon.restore();
//     });

//     it('already is on Database', async () => {
//       try {
//         await RegisterService.create(Mocks.registerInfo);
//       } catch(err) {
//         expect(err.status).to.be.eq(409);
//       }
//     });

//     it('Succeeds', async () => {
//       sinon.stub(products, create).resolves(Mocks.dbProduct);

//       const createdProduct = await ProductsService.create(Mocks.createProductBody);
//       expect(createdProduct).to.be.deep.eq(Mocks.dbProduct);
//     });
//   })
//   // list

//   // findById

//   // update

//   // remove
// });
