module.exports = {
  development: {
    username: "postgres",
    password: "postdtbase",
    database: "snsthing",
    host: "localhost",
    dialect: "postgres",
    pool : {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}
