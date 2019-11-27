'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    totalPrice: DataTypes.DECIMAL
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.hasMany(models.OrderItem)
  };
  return Order;
};