import { Router } from 'express';

import UsersRouter from '../../../../modules/users/infra/http/routes/users.routes.js';

const router = Router();

router.use('/users', UsersRouter);

export default router;