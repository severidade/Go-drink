const expect  = require('chai').expect;
const sinon = require('sinon');

const ProductsService = require('../../../api/service/ProductsService');
const { products } = require('../../../database/models');
const Mocks = require('../../mocks/mocks');

describe('productsService', () => {
	afterEach(() => {
		sinon.restore();
	});

	describe('create', () => {
		it('Succeeds', async () => {
			sinon.stub(products, 'findOne').resolves(undefined);
			sinon.stub(products, 'create').resolves(Mocks.dbProduct);

			const result = await ProductsService.create(Mocks.createProductBody);
					
			expect(result).to.be.deep.eq(Mocks.dbProduct);
		});

		it('fails, invalid registration', async () => {
			sinon.stub(products, 'findOne').resolves(Mocks.dbProduct);
			try {
				await ProductsService.create(Mocks.createProductBody);
			} catch (error) {
				expect(error.status).to.be.eq(409);
			}	
		});
	});

	describe('list', () => {
		it('Succeeds', async () => {
			sinon.stub(products, 'findAll').resolves([]);

			const result = await ProductsService.list();
					
			expect(result).to.be.deep.eq([]);
		});
	});

	describe('delete', () => {
		it('Succeeds', async () => {
			sinon.stub(products, 'destroy').resolves([1]);

			const result = await ProductsService.delete(Mocks.validId);
					
			expect(result).to.be.deep.eq([1]);
		});

		it('Fails, invalid ID', async () => {
			sinon.stub(products, 'destroy').resolves(undefined);

			try {
				await ProductsService.delete(Mocks.invalidId);
			} catch(error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});

	describe('update', () => {
		it('Succeeds', async () => {
			sinon.stub(products, 'update').resolves([1]);
			sinon.stub(products, 'findByPk').resolves(Mocks.dbProduct);

			const result = await ProductsService.update(Mocks.validId, Mocks.createProductBody);
					
			expect(result).to.be.deep.eq(Mocks.dbProduct);
		});

		it('Fails, invalid ID', async () => {
			sinon.stub(products, 'update').resolves(undefined);

			try {
				await ProductsService.update(Mocks.invalidId);
			} catch(error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});

	describe('findById', () => {
		it('Succeeds', async () => {
			sinon.stub(products, 'findByPk').resolves(Mocks.dbProduct);

			const result = await ProductsService.findById(Mocks.validId);
					
			expect(result).to.be.deep.eq(Mocks.dbProduct);
		});

		it('Fails, invalid ID', async () => {
			sinon.stub(products, 'findByPk').resolves(undefined);

			try {
				await ProductsService.findById(Mocks.invalidId);
			} catch(error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});
});
