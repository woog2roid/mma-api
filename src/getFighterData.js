const axios = require('axios');
const cheerio = require('cheerio');

let fighter = {
	name: "",
	nickname: "",
	age: "",
	birthday: "",
	locality: "",
	nationality: "",
	association: "",
	height: "",
	weight: "",
	weight_class: "",
	image_url: "",
	wins: {
		total: 0,
		knockouts: 0,
		submissions: 0,
		decisions: 0,
		others: 0
	},
	losses: {
		total: 0,
		knockouts: 0,
		submissions: 0,
		decisions: 0,
		others: 0            
	},
	no_contests: 0,
	fights: []
};

//parse fighter's data from sherdog HTML file
module.exports.getFighterData = async (url) => {
	try {
		const html = await axios.get(url);
		const $ = await cheerio.load(html.data);
		
		//fighter's basic info
		const info = $('.fighter-info');
		fighter.name = info.find('[itemprop="name"]>.fn').text();
		const nickname = info.find('[itemprop="name"]>.nickname').text();
		fighter.nickname = nickname.substring(1, nickname.length-1);
		fighter.image_url = info.find('img.profile-image.photo').attr('src');
		fighter.age = info.find('[itemprop="birthDate"]').prevAll('b').text();
		fighter.birthday = info.find('[itemprop="birthDate"]').text();
		fighter.locality = info.find('[itemprop="addressLocality"]').text();
		fighter.nationality = info.find('strong[itemprop="nationality"]').text();
		fighter.height = info.find('[itemprop="height"]').parent().text();
		fighter.weight = info.find('[itemprop="weight"]').parent().text();
		fighter.association = info.find('.association>[itemprop="name"]').text();
		fighter.weight_class = info.find('.association-class>a').text();
		
		//fighter's record
		const wins = $('.wins');
		const losses = $('.loses');
		const nc = $('.nc');
		const winBy = wins.find('.pl'); 
		const loseBy = losses.find('.pl');
		fighter.wins.total = wins.find('.win span:nth-child(2)').text();
		fighter.wins.knockouts = $(winBy.get(0)).text();
		fighter.wins.submissions = $(winBy.get(1)).text();
		fighter.wins.decisions = $(winBy.get(2)).text();
		fighter.wins.others = $(winBy.get(3)).text();
		fighter.losses.total = losses.find('.lose span:nth-child(2)').text();
		fighter.losses.knockouts = $(loseBy.get(0)).text();
		fighter.losses.submissions = $(loseBy.get(1)).text();
		fighter.losses.decisions = $(loseBy.get(2)).text();
		fighter.losses.others = $(loseBy.get(3)).text();
		fighter.no_contests = nc.find('span:nth-child(2)').text();
		
		//fighter's fight history
		$('.module.fight_history tr:not(.table_head)').each((index, item) => {
			const el = $(item);
			const result = el.find('td:nth-child(1) .final_result').text();
			const opponent_name = el.find('td:nth-child(2) a').text();
			const opponent_url = el.find('td:nth-child(2) a').attr('href');
			const event_name = el.find('td:nth-child(3) a').text();
			const event_url = el.find('td:nth-child(3) a').attr('href');
			const event_date = el.find('td:nth-child(3) .sub_line').text();
			const method = el.find('td:nth-child(4)').text().split(/\)(.*)/)[0] + ")";
			const referee = el.find('td:nth-child(4) .sub_line').text();
			const round = el.find('td:nth-child(5)').text();
			const time = el.find('td:nth-child(6)').text();
			
			const fight = {
				name: event_name,
				date: event_date,
				opponent: opponent_name,
				result,          
				method,
				referee,
				round,
				time,
				event_url,
				opponent_url,
			};
			
			if (result !== "") fighter.fights.push(fight);
		});
		console.log(fighter);
		return fighter;
	} catch(err) {
		console.log(err);
	}
};