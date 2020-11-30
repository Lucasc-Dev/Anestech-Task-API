const Role = require('../models/Role');

class RolesRepository{
    async create(data) {
        const role = await Role.create(data);

        return role;
    }

    async findManyByName(names) {
        const roles = await Role.findAll({ where: { name: names } });

        return roles;
    }

    async findById(id) {
        const role = await Role.findByPk(id, { include: { association: 'permissions' } });

        return role;
    }

    async findByName(name) {
        const role = await Role.findOne({ where: { name } });

        return role;
    }
}

module.exports = RolesRepository;