const { Router } = require('express');
const { permission } = require('../../../../../modules/users/infra/http/middlewares/Permissions');

const IndicatorsController = require('../controllers/IndicatorsController');

const router = Router();

const indicatorsController = new IndicatorsController();

router.get('', permission('LIST_INDICATORS'), indicatorsController.show);

module.exports = router;