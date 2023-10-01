"use strict";

const md5 = require("md5");

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
        id: 1,
        name: "nguyen nam",
        email: "admin@gmail.com",
        password: md5("12345"),
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "do minh",
        email: "admin1@gmail.com",
        password: md5("12345"),
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "tran quang",
        email: "admin2@gmail.com",
        password: md5("12345"),
        role: 1,
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
    return queryInterface.bulkDelete("Users", null, {});
  },
};
