const { Router } = require('express');

const UsersController = require('../controllers/UsersController');

const router = Router();

const usersController = new UsersController();

router.post('', usersController.create);

module.exports = router;