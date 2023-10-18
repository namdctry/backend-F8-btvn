"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Link.belongsTo(models.User, {
        foreignKey: "id", // Tên tùy chỉnh cho khóa ngoại
      });
    }
  }
  Link.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      originalUrl: DataTypes.STRING,
      shortUrl: DataTypes.STRING,
      clicks: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Link",
    }
  );
  return Link;
};
