const { createLoginService } = require('../services/loginService');

const createLoginController = async (req, res) => {
  const result = await createLoginService(req.body);
  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(result.status).json({ token: result.token });
};

module.exports = { createLoginController };
