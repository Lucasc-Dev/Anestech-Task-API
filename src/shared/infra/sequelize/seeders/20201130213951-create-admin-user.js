'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const adminRoleEntity = await queryInterface.sequelize.query("SELECT * FROM roles WHERE name = 'ADMIN_ROLE'");

    const role_id = adminRoleEntity[0][0].id;

    await queryInterface.bulkInsert('users', [{
      id: uuidv4(),
      name: 'Master',
      email: 'master@email.com',
      updated_at: new Date(),
      created_at: new Date(),
    }], {});

    const userEntity = await queryInterface.sequelize.query("SELECT * FROM users WHERE email = 'master@email.com'");

    const user_id = userEntity[0][0].id;

    await queryInterface.bulkInsert('user_role', [{
      user_id,
      role_id,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
