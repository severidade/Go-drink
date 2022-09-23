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
      body: data,
    };

    const response = await fetch(endpoints.createUser, init);
    return response;
  },
};
