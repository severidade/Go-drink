import tokenService from '../token/tokenService';
import endpoints from './endpoints';

const contentJson = 'application/json';

export default {
  async finishOrder({ sellerId, address, addressNumber, cart, totalPrice }) {
    // formato do body
    /*
      const schema = Joi.object({
        userId: Joi.number().required(),
        sellerId: Joi.number().required(),
        totalPrice: Joi.number().required(),
        deliveryAddress: Joi.string().required(),
        deliveryNumber: Joi.string().required(),
        saleDate: Joi.date().required(),
        status: Joi.string().required(),
        products: Joi.array().required(),
      }); */

    const user = JSON.parse(localStorage.getItem('user'));
    const products = cart.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }));
    const data = {
      userId: user.id,
      sellerId: Number(sellerId),
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: addressNumber,
      productsArray: products,
      saleDate: Date.now(),
    };

    const token = tokenService.getToken();
    const init = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': contentJson,
        Authorization: token,
      },
    };

    const responseFetch = await fetch(endpoints.customerOrders, init);

    const response = {
      status: responseFetch.status,
      body: await responseFetch.json(),
    };

    return response;
  },

  async updateStatus(saleId, status) {
    const data = JSON.stringify({
      status,
    });

    const token = tokenService.getToken();
    const init = {
      method: 'put',
      body: data,
      headers: {
        'Content-Type': contentJson,
        Authorization: token,
      },
    };

    console.log(init);

    const responseFetch = await fetch(`${endpoints.customerOrders}/${saleId}`, init);

    const response = {
      status: responseFetch.status,
      body: await responseFetch.json(),
    };

    return response;
  },
};
