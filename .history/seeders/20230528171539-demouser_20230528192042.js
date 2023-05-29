'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('user', [
        {
          username: "JesseTerblanche",
          email: "jessenterblanche@gmail.com",
          pass: "wetcatfood1!",
        },
        {
          username: "JesseTerblanche",
          email: "jessenterblanche@gmail.com",
          pass: "wetcatfood1!",
        }
        ], 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
