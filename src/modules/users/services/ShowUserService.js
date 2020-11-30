const AppError = require('../../../shared/errors/AppError');

class ShowUserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute(user_id) {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        return user;
    }
}

module.exports = ShowUserService;