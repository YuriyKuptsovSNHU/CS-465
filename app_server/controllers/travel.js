var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('data/trips.json', 'utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Dive Sites - Bhaccasyoniztas Beach Resort', trips });
};
module.exports = {
    travel
};
