import { Router } from 'express';

import UsersController from '../controllers/UsersController.js';

const router = Router();

const usersController = new UsersController();

router.get('', usersController.create);

export default router;