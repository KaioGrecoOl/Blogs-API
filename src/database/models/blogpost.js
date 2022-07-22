'use strict';

//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const BlogPost = (sequelize, DataTypes) => {
 const BlogPost = sequelize.define('BlogPost', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
 }, {
   tableName: 'BlogPosts',
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'User' });
  };
  return BlogPost;
};

module.exports = BlogPost;