const AppError = require('../../../shared/errors/AppError');
const authConfig = require('../../../configs/auth');

class AuthenticateUserService {
    constructor(usersRepository, tokenProvider) {
        this.usersRepository = usersRepository;
        this.tokenProvider = tokenProvider;
    }

    async execute({ email }) {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Email not registered');
        }
        
        const { secret, expiresIn } = authConfig.jwt;

        const token = await this.tokenProvider.generateToken({
            subject: user.id,
            secret,
            expiresIn,
        });

        return { user, token };
    }
}

module.exports = AuthenticateUserService;