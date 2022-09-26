const jwt = require('../../api/service/JwtService');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    jwt.verifyToken(authorization);
    next();
  } catch (e) {
    const error = new Error('Expired or invalid token');
    error.status = 401;
    throw error; 
  }
};