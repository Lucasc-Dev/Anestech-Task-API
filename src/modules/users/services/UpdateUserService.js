const AppError = require('../../../shared/errors/AppError');

class UpdateUserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ user_id, email, name }) {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new AppError('User not found');
        }

        if (email && user.email !== email) {
            const findEmail = await this.usersRepository.findByEmail(email);

            if (findEmail) {
                throw new AppError('Email already registered')
            }

            user.email = email;
        }

        user.name = name;

        await this.usersRepository.save(user);

        return user;
    }
}

module.exports = UpdateUserService;