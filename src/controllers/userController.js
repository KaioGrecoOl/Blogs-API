const { createUserService } = require('../services/userService');

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await createUserService(displayName, email, password, image);
  
  if (user.message) return res.status(user.status).json({ message: user.message });
  
  return res.status(201).json({ token: user.token });
};

module.exports = { createUserController };
