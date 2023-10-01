"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Một người dùng có thể có nhiều khách hàng
      User.hasMany(models.Customer, {
        foreignKey: "user_id",
        as: "customers",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
