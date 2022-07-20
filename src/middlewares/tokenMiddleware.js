require('dotenv').config();

const jwt = require('jsonwebtoken');

const tokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};
module.exports = { tokenMiddleware };
