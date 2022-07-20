const { Router } = require('express');

const { createCategoryController, 
  getAllCategoriesController,
} = require('../controllers/categorieController');
const { categoriesMiddleware } = require('../middlewares/categoriesMiddleware');
const { tokenMiddleware } = require('../middlewares/tokenMiddleware');

const router = Router();

router.post('/categories', tokenMiddleware, categoriesMiddleware, createCategoryController);
router.get('/categories', tokenMiddleware, getAllCategoriesController);

module.exports = router;
