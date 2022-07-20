const { createCategoryService } = require('../services/categoriesService');

const createCategoryController = async (req, res) => {
  const result = await createCategoryService(req.body);
  return res.status(201).json(result);
};

module.exports = { createCategoryController };
