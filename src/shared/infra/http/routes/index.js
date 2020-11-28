const { Router } = require('express');

const UsersRouter = require('../../../../modules/users/infra/http/routes/users.routes');

const router = Router();

router.use('/users', UsersRouter);

module.exports = router;