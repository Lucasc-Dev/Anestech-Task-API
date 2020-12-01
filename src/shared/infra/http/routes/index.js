const { Router } = require('express');

const UsersRouter = require('../../../../modules/users/infra/http/routes/users.routes');
const TasksRouter = require('../../../../modules/tasks/infra/http/routes/tasks.routes');
const SessionsRouter = require('../../../../modules/users/infra/http/routes/sessions.routes');
const IndicatorsRouter = require('../../../../modules/tasks/infra/http/routes/indicators.routes');

const router = Router();

router.use('/users', UsersRouter);
router.use('/tasks', TasksRouter);
router.use('/sessions', SessionsRouter);
router.use('/indicators', IndicatorsRouter);

module.exports = router;