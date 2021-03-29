const mongoose = require('mongoose');
const Model = mongoose.model('trips');

// Get: /trips - lists all the trips
const tripsList = async(req, res) => {
	Model
		.find({})	// empty filter for all
		.exec((err, trips) => {
			if (! trips) {
				return res.status(404).json({"message": "trips not found"});
			} else if (err) {
				return res.status(404).json(err);
			} else {
				return res.status(200).json(trips);
			}
		});
};

// Get: /trips/:tripCode - returns a single tip
const tripsFindByCode = async(req, res) => {
	Model
		.find({'code': req.params.tripCode})
		.exec((err, trip) => {
			if (! trip) {
				return res.status(404).json({"message": "trip not found"});
			} else if (err) {
				return res.status(404).json(err);
			} else {
				return res.status(200).json(trip);
			}
		});
};

module.exports = {
	"tripList": tripsList,
	"tripsFindByCode": tripsFindByCode
};
