var fs = require('fs');
var data = JSON.parse(fs.readFileSync('data/news.json', 'utf8'));

/* GET homepage */
const news = (req, res) => {
	res.render('news', { title: 'News - Travlr Getaways', data});
};
module.exports = {
	news
};
