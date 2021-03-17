var express = require('express');
var router = express.Router();
const controller= require('../controllers/news');

/* GET users listing. */
router.get('/', controller.news);
module.exports = router;