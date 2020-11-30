'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('role_permission');
    await queryInterface.dropTable('user_role');

    await queryInterface.createTable(
      'user_role', 
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.UUID,
          references: { model: 'users', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          allowNull: false,
        },
        role_id: {
          type: Sequelize.UUID,
          references: { model: 'roles', key: 'id' },
          onDelete: 'CASCADE',
          onUpdatse: 'CASCADE',
          allowNull: false,
        },
      }
    );

    await queryInterface.createTable(
      'role_permission',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        role_id: {
          type: Sequelize.UUID,
          references: { model: 'roles', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          allowNull: false,
        },
        permission_id: {
          type: Sequelize.UUID,
          references: { model: 'permissions', key: 'id' },
          onDelete: 'CASCADE',
          onUpdatse: 'CASCADE',
          allowNull: false,
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('role_permission');
    await queryInterface.dropTable('user_role');

    await queryInterface.createTable(
      'role_permission',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        role_id: {
          type: Sequelize.UUID,
          references: { model: 'roles', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          allowNull: false,
        },
        permission_id: {
          type: Sequelize.UUID,
          references: { model: 'permissions', key: 'id' },
          onDelete: 'CASCADE',
          onUpdatse: 'CASCADE',
          allowNull: false,
        },
      }
    );

    await queryInterface.createTable(
      'user_role', 
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          allowNull: false,
          unique: true,
        },
        user_id: {
          type: Sequelize.UUID,
          references: { model: 'users', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          allowNull: false,
        },
        role_id: {
          type: Sequelize.UUID,
          references: { model: 'roles', key: 'id' },
          onDelete: 'CASCADE',
          onUpdatse: 'CASCADE',
          allowNull: false,
        },
      }
    );
  }
};
