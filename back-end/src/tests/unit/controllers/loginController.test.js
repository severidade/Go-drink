const expect  = require('chai').expect;
const sinon = require('sinon');
const loginController = require('../../../api/controller/LoginController');
const loginService = require('../../../api/service/LoginService');
const Mocks = require('../../mocks/mocks');
const { users } = require('../../../database/models');

describe('testar se o controller', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('retorna um token se o login for válido', async () => {
    sinon.stub(loginService, 'login').resolves(Mocks.userNoPassword)

    req = {}
    res = {}

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub()

    await loginController.login(req, res)

    expect(res.status.calledWith(200)).to.be.equal(true)
  })

  it('retorna um erro caso o login seja inválido', async () => {
    sinon.stub(users, 'findOne').resolves(undefined)
    try {

      req = {}
      res = {}
      
      req.body = Mocks.invalidLogin
      res.status = sinon.stub().returns(res)
      res.json = sinon.stub()
      
      await loginController.login(req, res)
    } catch (error) {
      console.log(error.status.to.be.equal(404));
      expect(error.status().to.be.equal(404))
    }
  })
})