console.log('text')
// require('dotenv').require({path:`${__dirname}/../../.env`})
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

console.log(process.env.URL)


const sequelize = new Sequelize(process.env.URL, {
  // host: process.env.HOST,
  // dialect: process.env.DIALECT,
  pool : {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle
  }
})

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, Sequelize);
db.Follow = require('./Follow')(sequelize, Sequelize);
db.Post = require('./Post')(sequelize, Sequelize);
db.Like = require('./Likes')(sequelize, Sequelize);

module.exports = db;
