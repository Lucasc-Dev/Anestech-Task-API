const Sequelize = require('sequelize');
const databaseConfig = require('../../../configs/database');

const User = require('../../../modules/users/infra/sequelize/models/User');
const Role = require('../../../modules/users/infra/sequelize/models/Role');
const Task = require('../../../modules/tasks/infra/sequelize/models/Task');
const Permission = require('../../../modules/users/infra/sequelize/models/Permission');

const connection = new Sequelize(databaseConfig);

const models = [ User, Task, Role, Permission ];

models.map(model => model.init(connection))
models.map(model => model.associate && model.associate(connection.models));

module.exports = connection;