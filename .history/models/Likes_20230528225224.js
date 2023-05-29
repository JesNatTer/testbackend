'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate() {
      this.belongsTo(Post), {foreignKey: 'post_id'}
    }
  }
  User.init({
    post_id: {
      type: DataTypes.INTERGER,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTERGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'user',
  });
  return Likes;
};