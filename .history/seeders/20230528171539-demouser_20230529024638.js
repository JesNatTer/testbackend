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
          id: 1,
          username: "JesseTerblanche",
          email: "jessenterblanche@gmail.com",
          password: "wetcatfood1!",
        },
        {
          id: 2,
          username: "testman",
          email: "testman@test.com",
          password: "drycatfood!",
        },
        {
          id: 3,
          username: "testman2",
          email: "testman2@test.com",
          password: "drycatfood2!",
        },
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
