const { Router } = require('express');

const UsersRouter = require('../../../../modules/users/infra/http/routes/users.routes');
const SessionsRouter = require('../../../../modules/users/infra/http/routes/sessions.routes');

const router = Router();

router.use('/users', UsersRouter);
router.use('/sessions', SessionsRouter);

module.exports = router;