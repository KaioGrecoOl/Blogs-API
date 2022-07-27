const { Router } = require('express');

const { getAllPostsController, 
  getPostByIdController } = require('../controllers/postController');
const { tokenMiddleware } = require('../middlewares/tokenMiddleware');

const router = Router();

router.get('/post', tokenMiddleware, getAllPostsController);
router.get('/post/:id', tokenMiddleware, getPostByIdController);

module.exports = router;