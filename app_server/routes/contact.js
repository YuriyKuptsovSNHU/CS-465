var express = require('express');
var router = express.Router();
const controller= require('../controllers/contact');

/* GET users listing. */
router.get('/', controller.contact);
module.exports = router;
