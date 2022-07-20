const { Router } = require('express');

const { createCategoryController } = require('../controllers/categorieController');
const { categoriesMiddleware } = require('../middlewares/categoriesMiddleware');
const { tokenMiddleware } = require('../middlewares/tokenMiddleware');

const router = Router();

router.post('/categories', tokenMiddleware, categoriesMiddleware, createCategoryController);

module.exports = router;
