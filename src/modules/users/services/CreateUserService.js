const AppError = require('../../../shared/errors/AppError');

class CreateUserService {
    constructor(usersRepository, rolesRepository) {
        this.usersRepository = usersRepository;

        this.rolesRepository = rolesRepository;
    }

    async execute({ name, email, roles }) {
        const findEmail = await this.usersRepository.findByEmail(email);

        if (findEmail) {
            throw new AppError('E-mail already registered');
        }

        let rolesModels;

        if (roles) {
            rolesModels = await this.rolesRepository.findManyByName(roles);

            if (!rolesRepository) {
                throw new AppError('Roles not found');
            }
        }else {
            rolesModels = await this.rolesRepository.findManyByName([process.env.DEFAULT_ROLE]);
        }

        const user = await this.usersRepository.create({ name, email, roles: rolesModels });

        return user;
    }
}

module.exports = CreateUserService;