const AppError = require('../../../shared/errors/AppError');

class CreateUserService {
    usersRepository;

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ name, email }) {
        const findEmail = await this.usersRepository.findByEmail(email);

        if (findEmail) {
            throw new AppError('E-mail already registered');
        }

        const user = await this.usersRepository.create({ name, email });

        return user;
    }
}

module.exports = CreateUserService;