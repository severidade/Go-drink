const expect  = require('chai').expect;
const sinon = require('sinon');
// const chai = require('chai');

const RegisterService = require('../../../api/service/RegisterService');
const { users } = require('../../../database/models');
const jwtService = require('../../../api/service/JwtService');
const Mocks = require('../../../api/mocks/mocks');

describe('Login Service', () => {
	beforeEach(() => {
    sinon.stub(users, 'findOne')
    .onCall(0).resolves(undefined)
    .onCall(1).resolves(Mocks.userNoPassword);
		sinon.stub(users, "create").resolves(Mocks.userNoPassword);
	});


	afterEach(() => {
		sinon.restore();
	});

	it('Suceeds', async () => {
		const result = await RegisterService.create(Mocks.registerInfo);
		
		expect(result).to.be.deep.eq(Mocks.userNoPassword);
	});

  it('fails, invalid registration', async () => {
    try {
			await RegisterService.create({});
		} catch (error) {
      expect(error).to.be.an.instanceof(Error);
		}	
	});
});
