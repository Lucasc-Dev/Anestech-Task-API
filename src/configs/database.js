module.exports = {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.HOST,
  "dialect": "mysql",
  "logging": false,
  "define": {
    "timestamps": true,
    "underscored": true,
    "underscoredAll": true,
  },
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "define": {
      "timestamps": true,
      "underscored": true,
      "underscoredAll": true,
    },
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "logging": false,
    "define": {
      "timestamps": true,
      "underscored": true,
      "underscoredAll": true,
    },
  }
}