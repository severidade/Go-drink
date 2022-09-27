const isUndefined = (data, msg) => {
  if (!data) {
    const e = new Error(msg || 'Item não encontrado');
    e.status = 404;
    throw e;
  }
};

module.exports = isUndefined;
