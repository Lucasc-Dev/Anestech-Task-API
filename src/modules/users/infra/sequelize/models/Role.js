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
        this.belongsToMany(models.Permission, {
            through: 'role_permission',
            as: 'permissions',
            foreignKey: 'role_id',
            timestamps: false,
        });

        this.belongsToMany(models.User, {
            through: 'user_role',
            as: 'users',
            foreignKey: 'role_id',
            timestamps: false,
        })
    }
}

module.exports = Role;