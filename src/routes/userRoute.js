const { Router } = require('express');

const { createUserController } = require('../controllers/userController');

const router = Router();

router.post('/user', createUserController);

module.exports = router;
