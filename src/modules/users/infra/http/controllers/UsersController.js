const UsersRepository = require('../../sequelize/repositories/UsersRepository');

class UsersController {
    async create(request, response) {
        const { name, email } = request.body;

        const usersRepo = new UsersRepository();

        const user = await usersRepo.create({ name, email });

        return response.json(user);
    }
}

module.exports = UsersController;