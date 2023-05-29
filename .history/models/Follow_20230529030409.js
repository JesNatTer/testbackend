'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    static associate() {
      this.belongsToMany(User), {foreignKey: 'user_id'}
    }
  }
  Follow.init({
    follower_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    followee_id: {
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
  return Followers;
};