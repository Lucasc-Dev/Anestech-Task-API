const Sequelize = require('sequelize');
const databaseConfig = require('../../../../configs/database');

const User = require('./models/User');
const Role = require('./models/Role');
const Permission = require('./models/Permission');

const connection = new Sequelize(databaseConfig);

User.init(connection);
Role.init(connection);
Permission.init(connection);

module.exports = connection;