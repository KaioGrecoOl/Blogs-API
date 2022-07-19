const { User } = require('../database/models/index');
const jwt = require('./jwtServices');

const createLoginService = async ({ email, password }) => {
  const result = await User.findOne({ where: { email } });
  if (!result || result.password !== password) {
    return { status: 400, message: 'Invalid fields' };
  }
  const token = jwt.createToken(result);
  return { status: 200, token };
};

module.exports = { createLoginService };
