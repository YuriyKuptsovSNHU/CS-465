/* GET homepage */
const contact = (req, res) => {
	res.render('contact', { title: 'Contact - Travlr Getaways',
                            address: '123 Lorem Ipsum Cove, Sed Ut City, LI 12345',
                            telephone: '1-800-999-9999',
                            fax: '1-800-111-1111'
                        });
};
module.exports = {
	contact
};
