const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const router = Router();

const usersController = new UsersController();

router.post('', usersController.create);
router.get('/:user_id', usersController.show);
router.get('', usersController.index);
router.put('/:user_id', usersController.update);
router.delete('/:user_id', usersController.delete);

module.exports = router;