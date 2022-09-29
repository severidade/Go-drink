import endpoints from './endpoints';
import tokenService from '../token/tokenService';

const contentJson = 'application/json';

export default {
  async register(name, email, password) {
    const data = {
      name,
      email,
      password,
    };

    const init = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': contentJson,
      },
    };

    const responseFetch = await fetch(endpoints.users, init);
    const response = {
      status: responseFetch.status,
      body: await responseFetch.json(),
    };
    return response;
  },

  async login(email, password) {
    const data = {
      email,
      password,
    };

    const init = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': contentJson,
      },
    };

    const responseFetch = await fetch(endpoints.login, init);

    const response = {
      status: responseFetch.status,
      body: await responseFetch.json(),
    };
    return response;
  },

  async getSeller() {
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': contentJson,
        Authorization: tokenService.getToken(),
      },
    };
    const responseFetch = await fetch(endpoints.users, init);
    const bodyFetch = await responseFetch.json();
    const response = {
      status: responseFetch.status,
      body: bodyFetch.filter((e) => e.role === 'seller'),
    };
    return response;
  },
};
