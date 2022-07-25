'use strict';

//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    tableName: 'PostCategories',
  });
  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      { through: 'PostCategory', foreignKey: 'postId', as: 'blogPosts', otherKey: 'categoryId' });
  
    models.BlogPost.belongsToMany(models.Category,
      { through: 'PostCategory', foreignKey: 'categoryId', as: 'categories', otherKey: 'postId' });
    };
  return PostCategory;
};

module.exports = PostCategory;
