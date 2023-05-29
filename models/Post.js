'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate() {
      this.belongsTo(User), {foreignKey: 'user_id'}
      this.hasMany(Likes), {foreignKey: 'post_id'}
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
    likes: DataTypes.INTEGER,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {
    sequelize,
    modelName: 'post',
  });
  return Post;
};