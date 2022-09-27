import jwtDecode from 'jwt-decode';

export default {
  getToken() {
    const { token } = localStorage;
    return token;
  },
  decodeToken(token) {
    const payload = jwtDecode(token);
    return payload.data;
  },
};
