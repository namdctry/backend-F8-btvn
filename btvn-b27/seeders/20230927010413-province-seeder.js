"use strict";

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
    return queryInterface.bulkInsert("Provinces", [
      {
        id: 1,
        name: "ha noi",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "da nang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: "ho chi minh",
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
    return queryInterface.bulkDelete("Provinces", null, {});
  },
};
