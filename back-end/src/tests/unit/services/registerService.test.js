const expect  = require('chai').expect;
const sinon = require('sinon');
// const chai = require('chai');

const RegisterService = require('../../../api/service/RegisterService');
const { users } = require('../../../database/models');
const jwtService = require('../../../api/service/JwtService');
const Mocks = require('../../mocks/mocks');

describe('Register Service', () => {
	
	describe('Create', () => {
		beforeEach(() => {
			sinon.stub(users, 'findOne')
    		.onCall(0).resolves(Mocks.userNoPassword)
    		.onCall(1).resolves(undefined);
		});	

		afterEach(() => {
			sinon.restore();
		});
	})

	it('Suceeds', async () => {
		sinon.stub(users, 'create').resolves(Mocks.userNoPassword);

		const result = await RegisterService.create(Mocks.registerInfo);
		console.log(result);
		
		expect(result).to.be.deep.eq(jwtService.createToken(Mocks.userNoPassword));
	});

  it('fails, invalid registration', async () => {
    try {
			await RegisterService.create({});
		} catch (error) {
      expect(error.status).to.be.eq(400);
		}	
	});
});
