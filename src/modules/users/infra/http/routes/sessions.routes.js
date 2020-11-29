const { Router } = require('express');

const SessionsController = require('../controllers/SessionsController');

const router = Router();

const sessionsController = new SessionsController();

router.post('', sessionsController.create);

module.exports = router;