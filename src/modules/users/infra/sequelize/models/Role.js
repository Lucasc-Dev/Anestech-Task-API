const Sequelize = require('sequelize');

class Role extends Sequelize.Model {
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
            sequelize
        });
    }

    static associate(models) {
        this.belongsToMany(model.Permission, {
            through: 'role_permission',
            as: 'permissions',
            foreignKey: 'role_id'
        });

        this.belongsToMany(model.Role, {
            through: 'user_role',
            as: 'users',
            foreignKey: 'role_id',
        })
    }
}

module.exports = Role;