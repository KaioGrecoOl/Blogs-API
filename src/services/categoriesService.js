const { Category } = require('../database/models/index');

const createCategoryService = async ({ name }) => {
  const createCategory = await Category.create({ name });
  return createCategory;
};

module.exports = { createCategoryService };