const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.UUID, 
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
                allowNull: false, 
                unique: true,
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
        }, {
            sequelize
        });

        return this;
    }
}

module.exports = User;