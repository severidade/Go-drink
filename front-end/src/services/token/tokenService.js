import jwtDecode from 'jwt-decode';

export default {
  getToken() {
    const { token } = JSON.parse(localStorage.getItem('user'));
    console.log(token);
    return token;
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
};
