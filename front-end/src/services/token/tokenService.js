import jwtDecode from 'jwt-decode';

export default {
  getToken() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const { token } = JSON.parse(userJson);
      return token;
    }
    return undefined;
  },

  decodeToken(token) {
    const payload = jwtDecode(token);
    return payload.data;
  },

  saveLocalStorage(token) {
    const data = this.decodeToken(token);
    data.token = token;
    const dataStringify = JSON.stringify(data);
    localStorage.setItem('user', dataStringify);
  },
  clearLocalStorage() {
    localStorage.removeItem('user');
  },
};
