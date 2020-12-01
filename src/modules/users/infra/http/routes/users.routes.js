const { Router } = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const { permission } = require('../middlewares/Permissions');

const UsersController = require('../controllers/UsersController');

const router = Router();

const usersController = new UsersController();

router.post(
    '', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            roles: Joi.array(),
        }
    }),
    permission('CREATE_USER'), 
    usersController.create,
);
router.get(
    '/:user_id', 
    permission('SHOW_USER'), 
    usersController.show,
);
router.get(
    '', 
    permission('LIST_USERS'), 
    usersController.index,
);
router.put(
    '/:user_id', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email(),
        }
    }),
    permission('UPDATE_USER'), 
    usersController.update,
);
router.delete(
    '/:user_id', 
    permission('DELETE_USER'), 
    usersController.delete,
);

module.exports = router;