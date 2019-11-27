'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    name: DataTypes.STRING
  }, {});
  ProductCategory.associate = function(models) {
    // associations can be defined here
    ProductCategory.hasMany(models.Product)
  };
  return ProductCategory;
};