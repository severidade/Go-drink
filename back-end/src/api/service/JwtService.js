require('dotenv/config');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtService = {
  createToken: (data) => jwt.sign({ data }, JWT_SECRET),

  verifyToken: (authorization) => jwt.verify(authorization, JWT_SECRET),

  decodeTokenId: ({ authorization }) => (jwt.decode(authorization)).data.id,
};

module.exports = jwtService;