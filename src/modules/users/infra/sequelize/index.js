const Sequelize = require('sequelize');
const databaseConfig = require('../../../../configs/database');

const User = require('./models/User');

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

module.exports = new Database();