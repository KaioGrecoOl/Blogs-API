const { User } = require('../database/models/index');
const jwt = require('./jwtServices');
const { bodyValidation } = require('../helpers/userHelper');

const createUserService = async (displayName, email, password, image) => {
  const displayNameValid = bodyValidation.displayNameValidation(displayName);
  const emailValid = await bodyValidation.emailValidation(email);
  const passwordValid = bodyValidation.passwordValidation(password);
  
  if (displayNameValid) return displayNameValid;
  if (passwordValid) return passwordValid;
  if (emailValid) return emailValid;

  await User.create({
      displayName, email, password, image,
  });

  const getUser = await User.findOne({ where: { email } });
  const token = jwt.createToken({ data: getUser });

  return { token };
};

const getAllUsersService = async () => {
  const result = await User.findAll({ attributes: { exclude: 'password' } });
  return result;
};

module.exports = { createUserService, getAllUsersService };
