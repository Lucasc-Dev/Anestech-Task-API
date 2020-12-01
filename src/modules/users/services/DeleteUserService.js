const AppError = require('../../../shared/errors/AppError');

class DeleteUserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute(user_id) {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        await this.usersRepository.delete(user.id);

        return;
    }
}  

module.exports = DeleteUserService;