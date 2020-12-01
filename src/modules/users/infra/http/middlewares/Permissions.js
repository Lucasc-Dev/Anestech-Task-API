const AppError = require('../../../../../shared/errors/AppError');
const authConfig = require('../../../../../configs/auth');

const UsersRepository = require('../../sequelize/repositories/UsersRepository');
const TokenProvider = require('../../../providers/TokenProvider');

function permission(permission) {
    const execute = async (request, response, next) => {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            throw new AppError('Missing JWT token');
        }

        const token = authHeader.split(' ')[1];
        
        let user;

        try {
            const { verifyToken } = new TokenProvider();
            const usersRepository = new UsersRepository();
            
            const { sub } = verifyToken({ token, secret: authConfig.jwt.secret });
            
            user = await usersRepository.findById(sub, true);

            if (!user) {
                throw new AppError('Invalid JWT token');
            }
        }catch(err) {
            throw new AppError('Invalid JWT token');
        }
            
        const containsPermission = user.roles.some(role => 
            role.permissions.some(role_permission => role_permission.dataValues.name === permission)
        );

        if (!containsPermission) {
            throw new AppError('Insufficient permissions');
        }

        request.user = user;

        return next();
    }

    return execute;
}

module.exports = {
    permission,
}