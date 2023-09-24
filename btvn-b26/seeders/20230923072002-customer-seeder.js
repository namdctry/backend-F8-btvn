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
    return queryInterface.bulkInsert("customers", [
      {
        name: "nguyen nam",
        email: "admin@gmail.com",
        password: md5("12345"),
        status: 1,
        province_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "do minh",
        email: "admin2@gmail.com",
        password: md5("12345"),
        status: 0,
        province_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tran an",
        email: "admin3@gmail.com",
        password: md5("12345"),
        status: 1,
        province_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tran an3",
        email: "admin33@gmail.com",
        password: md5("12345"),
        status: 1,
        province_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tran an4",
        email: "admin34@gmail.com",
        password: md5("12345"),
        status: 1,
        province_id: 8,
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
    return queryInterface.bulkDelete("provinces", null, {});
  },
};
