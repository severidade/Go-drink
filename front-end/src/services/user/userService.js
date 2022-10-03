export default {
  getUserId() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const { id } = JSON.parse(userJson);
      return id;
    }
    return undefined;
  },
  getUserRole() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const { role } = JSON.parse(userJson);
      return role;
    }
    return undefined;
  },

  getUserName() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const { name } = JSON.parse(userJson);
      return name;
    }
    return '';
  },
};
