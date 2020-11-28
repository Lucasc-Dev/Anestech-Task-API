const UsersRepository = require('../../sequelize/repositories/UsersRepository');
const CreateUserService = require('../../../services/CreateUserService');

class UsersController {
    async create(request, response) {
        const { name, email } = request.body;

        const usersRepository = new UsersRepository();

        const createUser = new CreateUserService(usersRepository);

        const user = await createUser.execute({ name, email });

        return response.json(user);
    }
}

module.exports = UsersController;