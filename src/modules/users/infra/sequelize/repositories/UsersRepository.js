const User = require('../models/User');
const Role = require('../models/Role');
const Permission = require('../models/Permission');

class UsersRepository{
    async create({ roles, name, email }) {
        const user = await User.create({ name, email });
        
        await user.setRoles(roles.map(role => role.dataValues.id));

        return user;
    }

    async save(user) {
        await user.save();
    }

    async findMany(page) {
        const users = await User.findAndCountAll({ offset: 5 * page, limit: 5 });

        return users;
    }

    async findById(id, includePermissions = false) {
        const user = await User.findByPk(
            id, 
            { 
                include: includePermissions ? { 
                    model: Role,
                    as: 'roles',
                    through: { attributes: [] },
                    include: {
                        model: Permission,
                        as: 'permissions',
                        through: { attributes: [] },
                    }
                } : {
                    model: Role,
                    as: 'roles',
                    through: { attributes: [] },
                }
            }
        );

        return user;
    }

    async findByEmail(email, includePermissions = false) {
        const user = await User.findOne(
            { 
                where: { email },
                include: includePermissions ? { 
                    model: Role,
                    as: 'roles',
                    through: { attributes: [] },
                    include: {
                        model: Permission,
                        as: 'permissions',
                        through: { attributes: [] },
                    }
                } : {
                    model: Role,
                    as: 'roles',
                    through: { attributes: [] },
                }
            }
        );

        return user;
    }

    async delete(id) {
        await User.destroy({ where: { id }});

        return;
    }
}

module.exports = UsersRepository;