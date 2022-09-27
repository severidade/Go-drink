const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

const jwtService = {
  createToken: (data) => jwt.sign({ data }, secret),

  verifyToken: (authorization) => jwt.verify(authorization, secret),

  decodeTokenId: ({ authorization }) => (jwt.decode(authorization)).data.id,
};

module.exports = jwtService;