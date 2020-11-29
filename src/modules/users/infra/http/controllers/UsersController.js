const UsersRepository = require('../../sequelize/repositories/UsersRepository');

const CreateUserService = require('../../../services/CreateUserService');
const ListUsersService = require('../../../services/ListUsersService');

const usersRepository = new UsersRepository();

class UsersController {
    async create(request, response) {
        const { name, email } = request.body;

        const createUser = new CreateUserService(usersRepository);

        const user = await createUser.execute({ name, email });

        return response.json(user);
    }

    async index(request, response) {
        const { page } = request.query;

        const listUsers = new ListUsersService(usersRepository);

        const users = await listUsers.execute({ page });

        return response.json(users);
    }
}

module.exports = UsersController;