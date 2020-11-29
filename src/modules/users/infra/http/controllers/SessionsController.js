const AuthenticateUserService = require('../../../services/AuthenticateUserService');
const UsersRepository = require('../../sequelize/repositories/UsersRepository');
const TokenProvider = require('../../../providers/TokenProvider');

const usersRepository = new UsersRepository();
const tokenProvider = new TokenProvider();

class SessionsController {
    async create(request, response) {
        const { email } = request.body;

        const authenticateUser = new AuthenticateUserService(usersRepository, tokenProvider);

        const user = await authenticateUser.execute({ email });

        return response.json(user);
    }
}

module.exports = SessionsController;