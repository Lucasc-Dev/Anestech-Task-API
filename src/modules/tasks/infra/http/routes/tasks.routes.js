const { Router } = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const { permission } = require('../../../../../modules/users/infra/http/middlewares/Permissions');

const TasksController = require('../controllers/TasksController');

const router = Router();

const tasksController = new TasksController();

router.get(
    '', 
    permission('LIST_TASKS'), 
    tasksController.index
);
router.get(
    '/:task_id', 
    permission('SHOW_TASK'), 
    tasksController.show
);
router.put(
    '/:task_id', 
    celebrate({
        [Segments.BODY]: {
            description: Joi.string(),
            status: Joi.string(),
            started_at: Joi.date(),
            finished_at: Joi.date(),
        }
    }),
    permission('UPDATE_TASK'), 
    tasksController.update
);
router.post(
    '', 
    celebrate({
        [Segments.BODY]: {
            description: Joi.string().required(),
        }
    }),
    permission('CREATE_TASK'), 
    tasksController.create
);

module.exports = router;