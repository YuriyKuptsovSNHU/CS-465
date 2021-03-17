var fs = require('fs');
var blog = JSON.parse(fs.readFileSync('data/blog.json', 'utf8'));
var testimonials = JSON.parse(fs.readFileSync('data/testimonials.json', 'utf8'));
var features = JSON.parse(fs.readFileSync('data/features.json', 'utf8'));
var data = new Object();

data.blog = blog;
data.testimonials = testimonials;
data.features = features;

/* GET homepage */
const index = (req, res) => {
	res.render('index', { title: 'Travlr Getaways', data});
};
module.exports = {
	index
};
