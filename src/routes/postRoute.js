const { Router } = require('express');

const { getAllPostsController } = require('../controllers/postController');
const { tokenMiddleware } = require('../middlewares/tokenMiddleware');

const router = Router();

router.get('/post', tokenMiddleware, getAllPostsController);

module.exports = router;