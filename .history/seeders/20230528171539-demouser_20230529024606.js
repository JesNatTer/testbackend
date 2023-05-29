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
          password: "wetcatfood1!",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          username: "testman",
          email: "testman@test.com",
          password: "drycatfood!",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          username: "testman2",
          email: "testman2@test.com",
          password: "drycatfood2!",
          created_at: new Date(),
          updated_at: new Date()
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
