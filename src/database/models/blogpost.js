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
    autoIncrement: true
  },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  published:  {
    type: DataTypes.DATE,
    defaultValue: new Date()
  },
  updated: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  }, 
 }, {
   tableName: 'BlogPosts',
   timestamps: false,
  });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };
  return BlogPost;
};

module.exports = BlogPost;