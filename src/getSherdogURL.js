const googleIt = require('google-it');

//return fighter's sherdog url by google
module.exports.getSherdogURL = async (fighter) => {
	try {
		const results = await googleIt({ 'no-display': true, query: fighter + ' sherdog' });
		for (const item of results) {
			if (item.link.indexOf('sherdog.com/fighter') > -1) {
				const sherdog_url = item.link;
				//console.log(`[sherdog url is ${sherdog_url}]`);
				return sherdog_url;
			}
		}
	} catch (err) {
		console.log(err);
	}
};