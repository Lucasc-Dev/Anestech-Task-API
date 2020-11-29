const { sign } = require('jsonwebtoken');

class JsonWebToken {
    async generateToken({ subject, secret, expiresIn }) {
        const token = sign({}, secret, {
            subject,
            expiresIn,
        });

        return token;
    }
}

module.exports = JsonWebToken;