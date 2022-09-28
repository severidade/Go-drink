const expect  = require('chai').expect;
const sinon = require('sinon');
// const chai = require('chai');

const LoginService = require('../../../api/service/LoginService');
const JwtService = require('../../../api/service/JwtService');
const { users } = require('../../../database/models');
const Mocks = require('../../mocks/mocks');

describe('Login Service', () => {
	beforeEach(() => {
		sinon.stub(users, "findOne")
		.onCall(0).resolves(Mocks.userNoPassword)
		.onCall(1).resolves(undefined);
	});


	afterEach(() => {
		sinon.restore();
	});

	it('Succeeds', async () => {
		const result = await LoginService.login(Mocks.validLogin);
		
		expect(result).to.be.eq(JwtService.createToken(Mocks.userNoPassword));
	});

	it('Fails, user not found', async () => {
		try {
			await LoginService.login({});
		} catch (error) {
			expect(error).to.be.an.instanceOf(Error);
		}
	});
});
