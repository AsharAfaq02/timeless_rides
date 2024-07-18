module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Ashar123@",
    DB: "posts",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };