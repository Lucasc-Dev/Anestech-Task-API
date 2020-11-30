const User = require('../models/User');

class UsersRepository{
    async create(data) {
        const user = await User.create(data);

        if (data.roles) {
            await user.setRoles(data.roles);
        }

        return user;
    }

    async save(user) {
        await user.save();
    }

    async findMany(page) {
        const users = await User.findAll();

        return users;
    }

    async findById(id) {
        const user = await User.findByPk(id, { include: { association: 'roles' } });

        return user;
    }

    async findByEmail(email) {
        const user = await User.findOne({ where: { email } });

        return user;
    }

    async delete(id) {
        await User.destroy({ where: { id }});

        return;
    }
}

module.exports = UsersRepository;