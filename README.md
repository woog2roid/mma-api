# mma-api
NodeJS based MMA-API providing fighter's data by crawling Sherdog

### Cathegory
- [Manual](#Manual)
- [Issue](#Issue)

## Manual
#### Installation
```
npm install mma-api
```
#### Usage
```javascript
//by callback function
const mma = require('mma-api');
mma.api('Korean Zombie', (data) => {
	console.log(data);
});

//by return value
const mma = require('mma-api');
const index = async () => {
	const data = await mma.api('Korean Zombie');
	console.log(data);
}
index();

//Result is
{
	"url": "https://www.sherdog.com/fighter/Chan-Sung-Jung-36155",
	"name": "Chan Sung Jung",
	"nickname": "The Korean Zombie",
	"age": "34",
	"birthday": "Mar 17, 1987",
	"locality": "Gyeongju, North Gyeongsang",
	"nationality": "South Korea",
	"association": "Fight Ready",
	"height": "5'9\" / 175.26 cm",
	"weight": "145 lbs / 65.77 kg",
	"weight_class": "Featherweight",
	"image_url": "/image_crop/200/300/_images/fighter/1601319214Chan_Sung_Jung.jpg",
	"wins": { "total": 17, "knockouts": 6, "submissions": 8, "decisions": 3, "others": 0 },
	"losses": { "total": 6, "knockouts": 3, "submissions": 0, "decisions": 3, "others": 0 },
	"no_contests": 0,
	"fights": [
		{
			"name": "UFC on ESPN 25 - Korean Zombie vs. Ige",
			"date": "Jun / 19 / 2021",
			"opponent": "Dan Ige",
			"result": "win",
			"method": "Decision (Unanimous)",
			"referee": "Herb Dean",
			"round": "5",
			"time": "5:00",
			"event_url": "/events/UFC-on-ESPN-25-Korean-Zombie-vs-Ige-88795",
			"opponent_url": "/fighter/Dan-Ige-136499"
		},
		{
			"name": "UFC Fight Night 180 - Ortega vs. Korean Zombie",
			"date": "Oct / 17 / 2020",
			"opponent": "Brian Ortega",
			"result": "loss",
			"method": "Decision (Unanimous)",
			"referee": "Lukasz Bosacki",
			"round": "5",
			"time": "5:00",
			"event_url": "/events/UFC-Fight-Night-180-Ortega-vs-Korean-Zombie-87277",
			"opponent_url": "/fighter/Brian-Ortega-65310"
		},
		{
			"name": "UFC Fight Night 165 - Edgar vs. Korean Zombie",
			"date": "Dec / 21 / 2019",
			"opponent": "Frankie Edgar",
			"result": "win",
			"method": "TKO (Punches)",
			"referee": "Marc Goddard",
			"round": "1",
			"time": "3:18",
			"event_url": "/events/UFC-Fight-Night-165-Edgar-vs-Korean-Zombie-76609",
			"opponent_url": "/fighter/Frankie-Edgar-14204"
		},
		//...
}
```

## Issue
#### robots.txt and legal issue
This software parses Google's search pages to improve the accuracy of the search.
It has many positive results, such as detecting typos and selecting more frequently searched fighters in cases of duplicate named ones.

However checking Google and Sherdog's "robots.txt", Sherdog completely allowed the search of robots, but Google did not allow the /search pages.
- [Sherdog's robots.txt](https://www.sherdog.com/robots.txt)
- [Google's robots.txt](https://www.google.com/robots.txt)  

Although "robots.txt" does not hold a legal effect(meaning simple crawling is not illegal), there are precedents of legal punishements in which financial benefits were taken by crawling unauthorized pages.
If a legal issues arise by using this module, module developer has no responsibility under [the license](https://github.com/woog2roid/mma-api/blob/main/LICENSE).