const expect  = require('chai').expect;
const sinon = require('sinon');
// const chai = require('chai');

const RegisterService = require('../../../api/service/RegisterService');
const { users } = require('../../../database/models');
const JwtService = require('../../../api/service/JwtService');
const Mocks = require('../../mocks/mocks');

describe('Register Service', () => {
	
	describe('Create', () => {
		afterEach(() => {
			sinon.restore();
		});

		it('Succeeds', async () => {
			sinon.stub(users, 'findOne').resolves(undefined);
			sinon.stub(users, 'create').resolves(Mocks.userNoPassword);

			const result = await RegisterService.create(Mocks.registerBody);
					
			expect(result).to.be.deep.eq(JwtService.createToken(Mocks.userNoPassword));
		});

		it('fails, invalid registration', async () => {
			sinon.stub(users, 'findOne').resolves(Mocks.userNoPassword);
			try {
				await RegisterService.create(Mocks.dbUser);
			} catch (error) {
				expect(error.status).to.be.eq(409);
			}	
		});
	});
})
