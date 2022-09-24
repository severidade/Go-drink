import endpoints from './endpoints';

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
        'Content-Type': 'application/json',
      },
    };

    const responseFetch = await fetch(endpoints.createUser, init);
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
        'Content-Type': 'application/json',
      },
    };

    const responseFetch = await fetch(endpoints.login, init);

    const response = {
      status: responseFetch.status,
      body: await responseFetch.json(),
    };
    return response;
  },
};
