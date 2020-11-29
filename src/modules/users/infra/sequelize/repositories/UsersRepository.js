const User = require('../models/User');

class UsersRepository{
    async create(data) {
        const user = await User.create(data);

        return user;
    }

    async findMany(page) {
        const users = await User.findAll();

        return users;
    }

    async findById(id) {
        const user = await User.findOne({ where: { id } });

        return user;
    }

    async findByEmail(email) {
        const user = await User.findOne({ where: { email } });

        return user;
    }
}

module.exports = UsersRepository;