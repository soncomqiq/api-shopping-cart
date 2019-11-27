'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.ProductCategory)
    Product.hasMany(models.OrderItem)
  };
  return Product;
};