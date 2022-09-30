const expect  = require('chai').expect;
const sinon = require('sinon');

const UsersService = require('../../../api/service/UsersService');
const { users } = require('../../../database/models');
const JwtService = require('../../../api/service/JwtService');
const Mocks = require('../../mocks/mocks');

describe('usersService', () => {
	afterEach(() => {
		sinon.restore();
	});

	describe('create', () => {
		it('Succeeds', async () => {
			sinon.stub(users, 'findOne').resolves(undefined);
			sinon.stub(users, 'create').resolves(Mocks.userNoPassword);

			const result = await UsersService.create(Mocks.createUserBody);
					
			expect(result).to.be.deep.eq(JwtService.createToken(Mocks.userNoPassword));
		});

		it('fails, invalid registration', async () => {
			sinon.stub(users, 'findOne').resolves(Mocks.userNoPassword);
			try {
				await UsersService.create(Mocks.dbUser);
			} catch (error) {
				expect(error.status).to.be.eq(409);
			}	
		});
	});

	describe('list', () => {
		it('Succeeds', async () => {
			sinon.stub(users, 'findAll').resolves(Mocks.dbUsersArray);

			const result = await UsersService.list();
					
			expect(result).to.be.deep.eq(Mocks.dbUsersArray);
		});
	});

	describe('delete', () => {
		it('Succeeds', async () => {
			sinon.stub(users, 'destroy').resolves([1]);

			const result = await UsersService.delete(Mocks.validId);
					
			expect(result).to.be.deep.eq([1]);
		});

		it('Fails, invalid ID', async () => {
			sinon.stub(users, 'destroy').resolves(undefined);

			try {
				await UsersService.delete(Mocks.invalidId);
			} catch(error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});

	describe('update', () => {
		it('Succeeds', async () => {
			sinon.stub(users, 'update').resolves([1]);
			sinon.stub(users, 'findByPk').resolves(Mocks.dbUser);

			const result = await UsersService.update(Mocks.validId, Mocks.createUserBody);
					
			expect(result).to.be.deep.eq(Mocks.dbUser);
		});

		it('Fails, invalid ID', async () => {
			sinon.stub(users, 'update').resolves(undefined);

			try {
				await UsersService.update(Mocks.invalidId);
			} catch(error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});

	describe('findById', () => {
		it('Succeeds', async () => {
			sinon.stub(users, 'findByPk').resolves(Mocks.dbUser);

			const result = await UsersService.findById(Mocks.validId);
					
			expect(result).to.be.deep.eq(Mocks.dbUser);
		});

		it('Fails, invalid ID', async () => {
			sinon.stub(users, 'findByPk').resolves(undefined);

			try {
				await UsersService.findById(Mocks.invalidId);
			} catch(error) {
				expect(error.status).to.be.eq(404);
			}	
		});
	});

	describe('listSellers', () => {
		it('Succeeds', async () => {
			sinon.stub(users, 'findAll').resolves(Mocks.dbUsersArray);

			const result = await UsersService.listSellers();
					
			expect(result).to.be.deep.eq(Mocks.dbUsersArray);
		});
	});
});
