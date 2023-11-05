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
        email: "example2@example.com",
        password: bcrypt.hashSync("1", saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "example3@example.com",
        password: bcrypt.hashSync("1", saltRounds),
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
