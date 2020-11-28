const User = require('../models/User');

class UsersRepository {
    async create(data) {
        const user = await User.create(data);

        return user;
    }
}

module.exports = UsersRepository;