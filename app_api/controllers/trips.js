const mongoose = require('mongoose');
const Model = mongoose.model('trips');

const getUser = (req, res, callback) => {
	  (req, res, userName) => {
		const locationId = req.params.locationid;
		if (locationId) {
		  Loc
			.findById(locationId)
			.select('reviews')
			.exec((err, location) => {
			   if (err) {
				 return res
				   .status(400)
				   .json(err);
			  } else {
				doAddReview(req, res, location, userName);
			   }
			 });
		} else {
		  res
			.status(404)
			.json({"message": "Location not found"});
		}
	  }
};

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

const deleteTripByCode =  async(req, res) => {
	getUser(req, res,
		(req, res) => {
		console.log('deleteTripByCode(' + req.params.tripCode + ')');
		Model
			.remove({'code': req.params.tripCode})
			.exec((err, trip) => {
				if (! trip) {
					console.log("Trip not found!");
					return res.status(404).json({"message": "trip not found"});
				} else if (err) {
					console.log("Error: " + err);
					return res.status(404).json(err);
				} else {
					return res.status(200).json(trip);
				}
			});
	});
};

const tripsAddTrip = async (req, res) => {
	getUser(req, res,
	(req, res) => {
		Model.create({
			code: req.body.code,
			name: req.body.name,
			length: req.body.length,
			start: req.body.start,
			resort: req.body.resort,
			perPerson: req.body.perPerson,
			image: req.body.image,
			description: req.body.description
		},
		(err, trip) => {
			if (err) {
				return res.status(400).json(err);	// bad request
			} else {
				return res.status(201).json(trip);	// created
			}
		});
	});
};

const tripsUpdateTrip = async (req, res) => {
	getUser(req, res,
		(req, res) => {
		console.log(req.body);
		Model
			.findOneAndUpdate({ 'code': req.params.tripCode }, {
				code: req.body.code,
				name: req.body.name,
				length: req.body.length,
				start: req.body.start,
				resort: req.body.resort,
				perPerson: req.body.perPerson,
				image: req.body.image,
				description: req.body.description
			}, { new: true })
			.then(trip => {
				if (!trip) {
					return res
						.status(404)
						.send({
							message: "Trip not found with code "
								+ req.params.tripCode
						});
				}
				res.send(trip);
			}).catch(err => {
				if (err.kind === 'ObjectId') {
					return res
						.status(404)
						.send({
							message: "Trip not found with code "
								+ req.params.tripCode
						});
				}
				return res
					.status(500) // server error
					.json(err);
			});
	});
}

module.exports = {
	"tripList": tripsList,
	"tripsFindByCode": tripsFindByCode,
	"deleteTripByCode": deleteTripByCode,
	"tripsAddTrip": tripsAddTrip,
	"tripsUpdateTrip": tripsUpdateTrip
};
