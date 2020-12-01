const Sequelize = require('sequelize');

class Permission extends Sequelize.Model {
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
        }, {
            sequelize, 
            timestamps: false,
        });
    }

    static associate(models) {
        this.belongsToMany(models.Role, {
            through: 'role_permission',
            as: 'roles',
            foreignKey: 'permission_id',
            timestamps: false,
        });
    }
}

module.exports = Permission;