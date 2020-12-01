const { Router } = require('express');
const { celebrate, Joi, Segments } = require('celebrate');

const SessionsController = require('../controllers/SessionsController');

const router = Router();

const sessionsController = new SessionsController();

router.post(
    '',
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
        }
    }),
    sessionsController.create,
);

module.exports = router;