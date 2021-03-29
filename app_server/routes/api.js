const express = require('express');
const router = express.Router();
const controller= require('../controllers/trips');
/* GET home page. */
router.route('/trips').get(controller.tripList);
router.route('/trips/:tripCode').get(controller.tripsFindByCode);
module.exports = router;