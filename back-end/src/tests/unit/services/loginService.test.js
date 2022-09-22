const expect  = require('chai').expect;
const sinon = require('sinon');
const chai = require('chai');

const LoginService = require('../../../api/service/LoginService');
const { users } = require('../../../database/models');
const jwtService = require('../../../api/service/JwtService');
const Mocks = require('../../../api/mocks/loginMocks');

describe('Login Service', () => {
	beforeEach(() => {
		sinon.stub(users, "findOne").resolves(Mocks.userNoPassword);
	});


	afterEach(() => {
		sinon.restore();
	});

	it('should successfully login', async () => {
		const result = await LoginService.login(Mocks.validLogin);
		
		expect(result).to.be.eq(jwtService.createToken(Mocks.userNoPassword));
	});
});



// const { exist } = require('joi');


// describe('services/salesService', () => {
//   beforeEach(sinon.restore);

//   describe('list', () => {
//     it('Deve disparar um erro caso salesModel.list dispare um erro', () => {
//       sinon.stub(salesModel, 'list').rejects();
//       return chai.expect(salesService.list()).to.eventually.be.rejected;
//     });
//     it('Deve retornar uma lista caso o db.execute retorne', () => {
//       sinon.stub(salesModel, 'list').resolves([]);
//       return chai.expect(salesService.list()).to.eventually.deep.equal([]);
//     })
//   });
