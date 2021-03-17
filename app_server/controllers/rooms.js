var fs = require('fs');
var accomodations = JSON.parse(fs.readFileSync('data/accomodations.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Rooms - Travlr Getaways Website Template', accomodations });
};
module.exports = {
    rooms
};
