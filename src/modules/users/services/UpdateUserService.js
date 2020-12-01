const AppError = require('../../../shared/errors/AppError');

class UpdateUserService {
    constructor(usersRepository, rolesRepository) {
        this.usersRepository = usersRepository;

        this.rolesRepository = rolesRepository;
    }

    async execute({ user_id, email, name, roles }) {
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

        let rolesModels;

        if (roles) {
            rolesModels = await this.rolesRepository.findManyByName(roles);

            if (!rolesModels) {
                throw new AppError('Roles not found');
            }
        }

        user.name = name;

        const updatedUser = await this.usersRepository.save({ user, roles: rolesModels });

        return updatedUser;
    }
}

module.exports = UpdateUserService;