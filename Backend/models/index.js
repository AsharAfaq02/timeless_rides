const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

const initializeDatabase = async () => {
    try {
      // Ensure sync does not drop tables by accident
      await sequelize.sync(); // Use { force: true } only when necessary
      console.log('Database synchronized');
    } catch (error) {
      console.error('Unable to synchronize the database:', error);
    }
  };

  db.initializeDatabase = initializeDatabase;
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

module.exports = db;