"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SendEmail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SendEmail.init(
    {
      toEmail: DataTypes.STRING,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      status: { type: DataTypes.TINYINT, defaultValue: 0 },
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "SendEmail",
    }
  );
  return SendEmail;
};
