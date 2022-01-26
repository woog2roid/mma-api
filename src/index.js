/*
  NodeJS based MMA API providing fighter's data by crawling sherdog
  Copyright: [woog2roid]
  License: [MIT]
*/

const { getSherdogURL } = require('./getSherdogURL');
const { getFighterData } = require('./getFighterData');

//1.search fighter's sherdog url by google
//2.parse data from sherdog url
const api = async (fighter, callback) => {
	try {
		const url = await getSherdogURL(fighter);
		const data = await getFighterData(url);
		if(callback && (typeof callback == "function")) callback(data);
		return data;
	} catch(err) {
		console.log(err);
	}
};

module.exports.api = api;