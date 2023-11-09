"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert("Users", [
      {
        email: "1@gmail.com",
        password: bcrypt.hashSync("1", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "2@gmail.com",
        password: bcrypt.hashSync("2", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "3@gmail.com",
        password: bcrypt.hashSync("3", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "4@gmail.com",
        password: bcrypt.hashSync("4", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "5@gmail.com",
        password: bcrypt.hashSync("5", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
