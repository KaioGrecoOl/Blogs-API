const { Category } = require('../database/models/index');

const createCategoryService = async ({ name }) => {
  const createCategory = await Category.create({ name });
  return createCategory;
};

const getAllCategoriesService = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = { createCategoryService, getAllCategoriesService };