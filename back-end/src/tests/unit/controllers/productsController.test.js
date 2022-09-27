const { expect } = require("chai")
const sinon = require("sinon")
const productsController = require("../../../api/controller/ProductsController")
const productsService = require("../../../api/service/ProductsService")
const productsMocks = require("../../mocks/productsMocks")

describe('Products Controller', () => {
  afterEach(() => {
    sinon.restore()
  })
  it('testa se Cria um Produto novo', async () => {
    sinon.stub(productsService, 'create').resolves(productsMocks.createdProductWithId)
    
    req = {}
    res = {}

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub()
    req.body = productsMocks.createdProduct

    await productsController.create(req, res)

    expect(res.status.calledWith(201)).to.be.equal(true)
  })
  it('lista Produtos', async () => {
    sinon.stub(productsService, 'list').resolves(productsMocks.products)

    req = {}
    res = {}

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub()

    await productsController.list(req, res)

    expect(res.status.calledWith(200)).to.be.equal(true)
  })
  it('lista um produto especifico', async () => {
    sinon.stub(productsService, 'findById').resolves(productsMocks.products[0])

    req = {}
    res = {}

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub()
    req.params = { id: 1 }

    await productsController.findById(req, res)

    expect(res.status.calledWith(200)).to.be.equal(true)
  })
  it('atualiza um produto', async () => {
    sinon.stub(productsService, 'update').resolves(productsMocks.updatedProductWithId)

    req = {}
    res = {}

    res.status = sinon.stub().returns(res)
    res.json = sinon.stub()
    req.params = { id: 1 }
    req.body = productsMocks.updatedProduct

    await productsController.update(req, res)

    expect(res.status.calledWith(200)).to.be.equal(true)
  })
})