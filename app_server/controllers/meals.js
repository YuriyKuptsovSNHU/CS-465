var fs = require('fs');
var featured_meals = JSON.parse(fs.readFileSync('data/meals.json', 'utf8'));

/* GET travel view */
const meals = (req, res) => {
    res.render('meals', { title: 'Foods', featured_meals });
};
module.exports = {
    meals
};
