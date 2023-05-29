'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate() {
      this.belongsTo(User), {foreignKey: 'user_id'}
      this.hasMany(Likes), {onDelete: 'Cascade'}
    }
  }
  Post.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    content: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
       model: 'user',
       key: 'id' 
      }
    },
    likes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return Post;
};