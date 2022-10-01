export default {
  getUserId() {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const { id } = JSON.parse(userJson);
      return id;
    }
    return undefined;
  },
};
