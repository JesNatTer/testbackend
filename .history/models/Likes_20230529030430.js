'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate() {
      this.belongsTo(Post), {foreignKey: 'post_id'}
    }
  }
  Like.init({
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
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