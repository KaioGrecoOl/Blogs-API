const { createCategoryService, getAllCategoriesService } = require('../services/categoriesService');

const createCategoryController = async (req, res) => {
  const result = await createCategoryService(req.body);
  return res.status(201).json(result);
};

const getAllCategoriesController = async (req, res) => {
  const result = await getAllCategoriesService();
  return res.status(200).json(result);
};

module.exports = { createCategoryController, getAllCategoriesController };
