'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user', [
        {
          id: 1,
          username: "JesseTerblanche",
          email: "jessenterblanche@gmail.com",
          password: "wetcatfood1!",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          username: "testman",
          email: "testman@test.com",
          password: "drycatfood!",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          username: "testman2",
          email: "testman2@test.com",
          password: "drycatfood2!",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          username: "testman3",
          email: "testman3@test.com",
          password: "drycatfood3!",
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
