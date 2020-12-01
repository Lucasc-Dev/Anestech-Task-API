const { sign, verify } = require('jsonwebtoken');

class JsonWebToken {
    async generateToken({ subject, secret, expiresIn }) {
        const token = sign({}, secret, {
            subject,
            expiresIn,
        });

        return token;
    }

    verifyToken({ token, secret }) {
        const decoded = verify(token, secret);
        
        return decoded;
    }
}

module.exports = JsonWebToken;