const { Router } = require('express');

const { createUserController } = require('../controllers/userController');
const { getAllUsersController, getUserByIdController } = require('../controllers/userController');
const { tokenMiddleware } = require('../middlewares/tokenMiddleware');

const router = Router();

router.post('/user', createUserController);
router.get('/user', tokenMiddleware, getAllUsersController);
router.get('/user/:id', tokenMiddleware, getUserByIdController);

module.exports = router;
