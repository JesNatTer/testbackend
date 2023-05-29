console.log(__dirname+'../../.env')
const Sequelize = require('sequelize');
const dotenv = require('dotenv')
const config = require('../config/config');
const db = {};

dotenv.config({path:`${__dirname}../.env`})

const sequelize = new Sequelize( process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
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

db.User = require('./user')(sequelize, Sequelize);
db.Follow = require('./Follow')(sequelize, Sequelize);
db.Post = require('./Post')(sequelize, Sequelize);
db.Like = require('./Likes')(sequelize, Sequelize);

module.exports = db;
