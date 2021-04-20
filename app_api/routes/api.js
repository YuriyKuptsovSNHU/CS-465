const express = require('express');
const router = express.Router();
const controller= require('../controllers/trips');
const authController = require('../controllers/authentication');
const jwt = require('express-jwt');
const auth = jwt({
	secret: process.env.JWT_SECRET,
	userProperty: 'payload',
    algorithms: ['HS256']
});

/* GET home page. */
router.route('/trips')
    .get(controller.tripList)
    .post(auth, controller.tripsAddTrip)
    .put(auth, controller.tripsUpdateTrip);
router.route('/trips/delete/:tripCode').delete(auth, controller.deleteTripByCode);
router.route('/trips/:tripCode').get(controller.tripsFindByCode);

router
	.route('/login')
	.post(authController.login);

router
	.route('/register')
	.post(authController.register);

module.exports = router;
