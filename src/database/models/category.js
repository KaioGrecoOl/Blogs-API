'use strict';

//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {  
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false
  })
  return Category;
};

module.exports = Category;
