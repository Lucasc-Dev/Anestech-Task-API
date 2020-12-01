const UsersRepository = require('../../sequelize/repositories/UsersRepository');
const RolesRepository = require('../../sequelize/repositories/RolesRepository');

const CreateUserService = require('../../../services/CreateUserService');
const ShowUserService = require('../../../services/ShowUserService');
const ListUsersService = require('../../../services/ListUsersService');
const DeleteUserService = require('../../../services/DeleteUserService');
const UpdateUserService = require('../../../services/UpdateUserService');

const usersRepository = new UsersRepository();
const rolesRepository = new RolesRepository();

class UsersController {
    async create(request, response) {
        const { name, email, roles } = request.body;

        const createUser = new CreateUserService(usersRepository, rolesRepository);

        const user = await createUser.execute({ name, email, roles });

        return response.json(user);
    }

    async show(request, response) {
        const { user_id } = request.params;

        const showUser = new ShowUserService(usersRepository);

        const user = await showUser.execute(user_id);

        return response.json(user);
    }

    async index(request, response) {
        const { page } = request.query;

        const listUsers = new ListUsersService(usersRepository);

        const users = await listUsers.execute({ page });

        return response.json(users);
    }

    async update(request, response) {
        const { user_id } = request.params;
        const { email, name, roles } = request.body;

        const updateUser = new UpdateUserService(usersRepository, rolesRepository);

        const user = await updateUser.execute({ user_id, email, name, roles });

        return response.json(user);
    }

    async delete(request, response) {
        const { user_id } = request.params;

        const deleteUser = new DeleteUserService(usersRepository);

        await deleteUser.execute(user_id);

        return response.status(200).send();
    }
}

module.exports = UsersController;