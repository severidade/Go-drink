const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const jwtService = {
  createToken: (data) => jwt.sign({ data }, secret),

  verifyToken: ({ authorization }) => jwt.verify(authorization, secret),

  decodeTokenRole: ({ authorization }) => (jwt.decode(authorization)).data.role,
};

module.exports = jwtService;