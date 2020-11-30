'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('permissions', [
      {
        id: uuidv4(),
        name: 'CREATE_USER'
      },
      {
        id: uuidv4(),
        name: 'SHOW_USER'
      },
      {
        id: uuidv4(),
        name: 'LIST_USERS'
      },
      {
        id: uuidv4(),
        name: 'UPDATE_USER'
      },
      {
        id: uuidv4(),
        name: 'DELETE_USER'
      },
      {
        id: uuidv4(),
        name: 'CREATE_TASK'
      },
      {
        id: uuidv4(),
        name: 'UPDATE_TASK'
      },
      {
        id: uuidv4(),
        name: 'LIST_TASKS'
      },
      {
        id: uuidv4(),
        name: 'SHOW_TASK'
      },
      {
        id: uuidv4(),
        name: 'LIST_INDICATORS'
      },
    ]);

    await queryInterface.bulkInsert('roles', [
      {
        id: uuidv4(),
        name: 'ADMIN_ROLE',
        updated_at: new Date(),
        created_at: new Date(),
      },
      {
        id: uuidv4(),
        name: 'AGENT_ROLE',
        updated_at: new Date(),
        created_at: new Date(),
      },
    ]);

    const permissions = await queryInterface.sequelize.query('SELECT * FROM permissions');

    const agentPermissions = [
      'CREATE_TASK',
      'UPDATE_TASK',
      'LIST_TASKS',
      'SHOW_TASK',
    ]

    const agentPermissionsEntities = permissions[0].filter(permission => agentPermissions.includes(permission.name));
    const adminPermissionsEntities = permissions[0];

    const agentRoleEntity = await queryInterface.sequelize.query("SELECT * FROM roles WHERE name = 'AGENT_ROLE'");
    const adminRoleEntity = await queryInterface.sequelize.query("SELECT * FROM roles WHERE name = 'ADMIN_ROLE'");

    const agentRoleId = agentRoleEntity[0][0].id;
    const adminRoleId = adminRoleEntity[0][0].id;

    const agentData = agentPermissionsEntities.map(permission => ({
      role_id: agentRoleId,
      permission_id: permission.id
    }));

    const adminData = adminPermissionsEntities.map(permission => ({
      role_id: adminRoleId,
      permission_id: permission.id
    }));
    
    await queryInterface.bulkInsert('role_permission', [...agentData, ...adminData], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('role_permission', null, {});
    
    await queryInterface.bulkDelete('roles', null, {});

    await queryInterface.bulkDelete('permissions', null, {});

  }
};
