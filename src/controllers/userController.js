const { createUserService, 
  getAllUsersService, 
  getUserByIdService,
} = require('../services/userService');

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const user = await createUserService(displayName, email, password, image);
  
  if (user.message) return res.status(user.status).json({ message: user.message });
  
  return res.status(201).json({ token: user.token });
};

const getAllUsersController = async (req, res) => {
  const result = await getAllUsersService();
  return res.status(200).json(result);
};

const getUserByIdController = async (req, res) => {
  const { id } = req.params;
  const user = await getUserByIdService(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

module.exports = { createUserController, getAllUsersController, getUserByIdController };
