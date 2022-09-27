const isUndefined = (data) => {
  if (!data) {
    const e = new Error('Item não encontrado');
    e.status = 404;
    throw e;
  }
};

module.exports = isUndefined;
