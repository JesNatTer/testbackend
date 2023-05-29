'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING
      },
      following: {
        type: Sequelize.INTEGER
      },
      followers: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
    await queryInterface.createTable('post', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'user',
          key: 'id'}
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      likes: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    await queryInterface.createTable('likes', {
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'user',
          key: 'id'}
      },
    });
    await queryInterface.createTable('follows', {
      follower_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id'
        }
      },
      followee_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'user',
          key: 'id'}
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables;
  }
};