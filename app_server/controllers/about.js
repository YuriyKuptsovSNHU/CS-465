var fs = require('fs');
var about_section = JSON.parse(fs.readFileSync('data/about.json', 'utf8'));

/* GET homepage */
const about = (req, res) => {
	res.render('about', { title: 'About - Travlr Getaways', about_section});
};
module.exports = {
	about
};
