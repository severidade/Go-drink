const expect  = require('chai').expect;
const sinon = require('sinon');

const SalesService = require('../../../api/service/SalesService');
const { sales, products, salesProducts } = require('../../../database/models');
const Mocks = require('../../mocks/mocks');

describe('salesService', () => {
	afterEach(() => {
		sinon.restore();
	});

	describe('create', () => {
		it('Succeeds', async () => {
			sinon.stub(products, 'findByPk').resolves(Mocks.dbProduct);
			sinon.stub(sales, 'create').resolves({});
      sinon.stub(salesProducts, 'bulkCreate').resolves([]);
      sinon.stub(sales, 'findByPk').resolves(Mocks.fullSaleInfo);

			const result = await SalesService.create(Mocks.invalidSale);
					
			expect(result).to.be.deep.eq(Mocks.fullSaleInfo);
		});

		it('fails, not found', async () => {
			sinon.stub(products, 'findByPk').resolves(undefined);
			try {
				await SalesService.create(Mocks.invalidSale);
			} catch (error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});

	describe('list', () => {
		it('Succeeds', async () => {
			sinon.stub(sales, 'findAll').resolves(Mocks.fullSaleInfo);

			const result = await SalesService.list();
					
			expect(result).to.be.deep.eq(Mocks.fullSaleInfo);
		});
	});

	describe('delete', () => {
		it('Succeeds', async () => {
			sinon.stub(sales, 'destroy').resolves([1]);

			const result = await SalesService.delete(Mocks.validId);
					
			expect(result).to.be.deep.eq([1]);
		});

		it('Fails, invalid ID', async () => {
			sinon.stub(sales, 'destroy').resolves(undefined);

			try {
				await SalesService.delete(Mocks.invalidId);
			} catch(error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});

	describe('update', () => {
		it('Succeeds', async () => {
			sinon.stub(sales, 'update').resolves([1]);
			sinon.stub(sales, 'findByPk').resolves(Mocks.fullSaleInfo);

			const result = await SalesService.update(Mocks.validId, Mocks.createUserBody);
					
			expect(result).to.be.deep.eq(Mocks.fullSaleInfo);
		});

		it('Fails, invalid ID', async () => {
			sinon.stub(sales, 'update').resolves([undefined]);

			try {
				await SalesService.update(Mocks.invalidId);
			} catch(error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});

	describe('findById', () => {
		it('Succeeds', async () => {
			sinon.stub(sales, 'findByPk').resolves(Mocks.fullSaleInfo);

			const result = await SalesService.findById(Mocks.validId);
					
			expect(result).to.be.deep.eq(Mocks.fullSaleInfo);
		});

		it('Fails, invalid ID', async () => {
			sinon.stub(sales, 'findByPk').resolves(undefined);

			try {
				await SalesService.findById(Mocks.invalidId);
			} catch(error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});
});
