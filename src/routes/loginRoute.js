const { Router } = require('express');

const { createLoginController } = require('../controllers/loginController');
const { loginMiddleware } = require('../middlewares/loginMiddleware');

const router = Router();

router.post('/login', loginMiddleware, createLoginController);

module.exports = router;
