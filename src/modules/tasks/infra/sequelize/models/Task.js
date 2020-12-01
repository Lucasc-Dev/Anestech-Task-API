const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID, 
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false, 
                unique: true,
            },
            user_id: DataTypes.UUID,
            description: DataTypes.STRING,
            status: DataTypes.STRING,
            started_at: DataTypes.DATE,
            finished_at: DataTypes.DATE,
        }, {
            sequelize, 
        });
    }

    static associate(models) {
        this.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id',
        });
    }
}

module.exports = Task;