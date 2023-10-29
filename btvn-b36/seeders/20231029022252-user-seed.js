"use strict";
const hash = require("../utils/hash");
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
        name: "nam",
        email: "1@gmail.com",
        password: hash.make("1"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "nam2",
        email: "2@gmail.com",
        password: hash.make("2"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "nam3",
        email: "3@gmail.com",
        password: hash.make("3"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
