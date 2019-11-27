'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define('OrderItem', {
    productName: DataTypes.STRING,
    productPrice: DataTypes.DECIMAL,
    amount: DataTypes.INTEGER
  }, {});
  OrderItem.associate = function(models) {
    // associations can be defined here
    OrderItem.belongsTo(models.Product)
  };
  return OrderItem;
};