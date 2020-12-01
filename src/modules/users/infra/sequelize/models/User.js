const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID, 
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false, 
                unique: true,
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsToMany(models.Role, {
            through: 'user_role',
            as: 'roles',
            foreignKey: 'user_id',
            timestamps: false,
        });

        this.hasMany(models.Task, {
            foreignKey: 'user_id',
            as: 'tasks',
        })
    }
}

module.exports = User;