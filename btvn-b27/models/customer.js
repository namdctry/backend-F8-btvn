"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Một khách hàng chỉ thuộc về một người dùng
      Customer.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.INTEGER,
      province_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      deleteAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
