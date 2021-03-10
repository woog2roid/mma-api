# MMA Fighter API
Get fighter JSON by name.  

## Install
From source:

```
git clone https://github.com/woog2roid/mma-api
cd mma-api
npm install
```

~~From npm:~~ 
```
This version is not on the npm
```
## Use

```
> var mma = require('mma');
> mma.fighter("Jon Jones", function(data) {
    console.log(data);
  });
> {
  name: 'Jon Jones',
  nickname: 'Bones',
  association: 'Jackson-Wink MMA',
  age: '33',
  birthday: '1987-07-19',
  hometown: 'Rochester, New York',
  nationality: 'United States',
  location: '',
  height: `6'4"`,
  weight: '205 lbs',
  weight_class: 'Light Heavyweight',
  wins: {
    total: 26,
    knockouts: 10,
    submissions: 6,
    decisions: 10,
    others: 0
  },
  losses: { total: 1, knockouts: 0, submissions: 0, decisions: 0, others: 0 },
  fights: [
    {
      name: 'UFC 247 - Jones vs. Reyes',
      date: 'Feb / 08 / 2020',
      url: '/events/UFC-247-Jones-vs-Reyes-82427',
      result: 'win',
      method: 'Decision (Unanimous)',
      referee: 'Dan Miragliotta',
      round: '5',
      time: '5:00',
      opponent: 'Dominick Reyes'
    },
    {
      name: 'UFC 239 - Jones vs. Santos',
      date: 'Jul / 06 / 2019',
      url: '/events/UFC-239-Jones-vs-Santos-75113',
      result: 'win',
      method: 'Decision (Split)',
      referee: 'Herb Dean',
      round: '5',
      time: '5:00',
      opponent: 'Thiago Santos'
    },
    {
      name: 'UFC 235 - Jones vs. Smith',
      date: 'Mar / 02 / 2019',
      url: '/events/UFC-235-Jones-vs-Smith-72027',
      result: 'win',
      method: 'Decision (Unanimous)',
      referee: 'Herb Dean',
      round: '5',
      time: '5:00',
      opponent: 'Anthony Smith'
    },
    {
      name: 'UFC 232 - Jones vs. Gustafsson 2',
      date: 'Dec / 29 / 2018',
      url: '/events/UFC-232-Jones-vs-Gustafsson-2-69297',
      result: 'win',
      method: 'KO (Punches)',
      referee: 'Mike Beltran',
      round: '3',
      time: '2:02',
      opponent: 'Alexander Gustafsson'
    },
    {
      name: 'UFC 214 - Cormier vs. Jones 2',
      date: 'Jul / 29 / 2017',
      url: '/events/UFC-214-Cormier-vs-Jones-2-57825',
      result: 'NC',
      method: 'No Contest (Overturned by CSAC)',
      referee: 'John McCarthy',
      round: '3',
      time: '3:01',
      opponent: 'Daniel Cormier'
    },
    {
      name: 'UFC 197 - Jones vs. St. Preux',
      date: 'Apr / 23 / 2016',
      url: '/events/UFC-197-Jones-vs-St-Preux-50485',
      result: 'win',
      method: 'Decision (Unanimous)',
      referee: 'Herb Dean',
      round: '5',
      time: '5:00',
      opponent: 'Ovince St. Preux'
    },
    {
      name: 'UFC 182 - Jones vs. Cormier',
      date: 'Jan / 03 / 2015',
      url: '/events/UFC-182-Jones-vs-Cormier-38841',
      result: 'win',
      method: 'Decision (Unanimous)',
      referee: 'Herb Dean',
      round: '5',
      time: '5:00',
      opponent: 'Daniel Cormier'
    },
    {
      name: 'UFC 172 - Jones vs. Teixeira',
      date: 'Apr / 26 / 2014',
      url: '/events/UFC-172-Jones-vs-Teixeira-34401',
      result: 'win',
      method: 'Decision (Unanimous)',
      referee: 'Dan Miragliotta',
      round: '5',
      time: '5:00',
      opponent: 'Glover Teixeira'
    },
    {
      name: 'UFC 165 - Jones vs. Gustafsson',
      date: 'Sep / 21 / 2013',
      url: '/events/UFC-165-Jones-vs-Gustafsson-30249',
      result: 'win',
      method: 'Decision (Unanimous)',
      referee: 'John McCarthy',
      round: '5',
      time: '5:00',
      opponent: 'Alexander Gustafsson'
    },
    {
      name: 'UFC 159 - Jones vs. Sonnen',
      date: 'Apr / 27 / 2013',
      url: '/events/UFC-159-Jones-vs-Sonnen-25825',
      result: 'win',
      method: 'TKO (Elbows and Punches)',
      referee: 'Keith Peterson',
      round: '1',
      time: '4:33',
      opponent: 'Chael Sonnen'
    },
    {
      name: 'UFC 152 - Jones vs. Belfort',
      date: 'Sep / 22 / 2012',
      url: '/events/UFC-152-Jones-vs-Belfort-21045',
      result: 'win',
      method: 'Submission (Keylock)',
      referee: 'John McCarthy',
      round: '4',
      time: '0:54',
      opponent: 'Vitor Belfort'
    },
    {
      name: 'UFC 145 - Jones vs. Evans',
      date: 'Apr / 21 / 2012',
      url: '/events/UFC-145-Jones-vs-Evans-20031',
      result: 'win',
      method: 'Decision (Unanimous)',
      referee: 'Herb Dean',
      round: '5',
      time: '5:00',
      opponent: 'Rashad Evans'
    },
    {
      name: 'UFC 140 - Jones vs. Machida',
      date: 'Dec / 10 / 2011',
      url: '/events/UFC-140-Jones-vs-Machida-17274',
      result: 'win',
      method: 'Technical Submission (Guillotine Choke)',
      referee: 'John McCarthy',
      round: '2',
      time: '4:26',
      opponent: 'Lyoto Machida'
    },
    {
      name: 'UFC 135 - Jones vs. Rampage',
      date: 'Sep / 24 / 2011',
      url: '/events/UFC-135-Jones-vs-Rampage-17043',
      result: 'win',
      method: 'Submission (Rear-Naked Choke)',
      referee: 'Josh Rosenthal',
      round: '4',
      time: '1:14',
      opponent: 'Quinton Jackson'
    },
    {
      name: 'UFC 128 - Shogun vs. Jones',
      date: 'Mar / 19 / 2011',
      url: '/events/UFC-128-Shogun-vs-Jones-15483',
      result: 'win',
      method: 'TKO (Punches and Knees)',
      referee: 'Herb Dean',
      round: '3',
      time: '2:37',
      opponent: 'Mauricio Rua'
    },
    {
      name: 'UFC 126 - Silva vs. Belfort',
      date: 'Feb / 05 / 2011',
      url: '/events/UFC-126-Silva-vs-Belfort-15104',
      result: 'win',
      method: 'Submission (Guillotine Choke)',
      referee: 'Herb Dean',
      round: '2',
      time: '4:20',
      opponent: 'Ryan Bader'
    },
    {
      name: 'UFC Live 2 - Jones vs. Matyushenko',
      date: 'Aug / 01 / 2010',
      url: '/events/UFC-Live-2-Jones-vs-Matyushenko-13294',
      result: 'win',
      method: 'TKO (Elbows)',
      referee: 'Herb Dean',
      round: '1',
      time: '1:52',
      opponent: 'Vladimir Matyushenko'
    },
    {
      name: 'UFC Live 1 - Vera vs. Jones',
      date: 'Mar / 21 / 2010',
      url: '/events/UFC-Live-1-Vera-vs-Jones-12389',
      result: 'win',
      method: 'TKO (Elbows and Punches)',
      referee: 'Herb Dean',
      round: '1',
      time: '3:19',
      opponent: 'Brandon Vera'
    },
    {
      name: 'UFC - The Ultimate Fighter 10 Finale',
      date: 'Dec / 05 / 2009',
      url: '/events/UFC-The-Ultimate-Fighter-10-Finale-11054',
      result: 'loss',
      method: 'Disqualification (Illegal Elbows)',
      referee: 'Steve Mazzagatti',
      round: '1',
      time: '4:14',
      opponent: 'Matt Hamill'
    },
    {
      name: 'UFC 100 - Lesnar vs. Mir 2',
      date: 'Jul / 11 / 2009',
      url: '/events/UFC-100-Lesnar-vs-Mir-2-9568',
      result: 'win',
      method: 'Submission (Guillotine Choke)',
      referee: 'Yves Lavigne',
      round: '2',
      time: '2:43',
      opponent: "Jake O'Brien"
    },
    {
      name: 'UFC 94 - St. Pierre vs. Penn 2',
      date: 'Jan / 31 / 2009',
      url: '/events/UFC-94-St-Pierre-vs-Penn-2-8465',
      result: 'win',
      method: 'Decision (Unanimous)',
      referee: 'Steve Mazzagatti',
      round: '3',
      time: '5:00',
      opponent: 'Stephan Bonnar'
    },
    {
      name: 'UFC 87 - Seek and Destroy',
      date: 'Aug / 09 / 2008',
      url: '/events/UFC-87-Seek-and-Destroy-6779',
      result: 'win',
      method: 'Decision (Unanimous)',
      referee: 'Daryl Guthmiller',
      round: '3',
      time: '5:00',
      opponent: 'Andre Gusmao'
    },
    {
      name: 'BCX 5 - Battle Cage Xtreme 5',
      date: 'Jul / 12 / 2008',
      url: '/events/BCX-5-Battle-Cage-Xtreme-5-8041',
      result: 'win',
      method: 'TKO (Punches)',
      referee: 'Kevin Mulhall',
      round: '2',
      time: '1:58',
      opponent: 'Moyses Gabin'
    },
    {
      name: 'WCF - World Championship Fighting 3',
      date: 'Jun / 20 / 2008',
      url: '/events/WCF-World-Championship-Fighting-3-7429',
      result: 'win',
      method: 'KO (Punch)',
      referee: 'N/A',
      round: '1',
      time: '0:36',
      opponent: 'Parker Porter'
    },
    {
      name: 'USFL - War in the Woods 3',
      date: 'May / 09 / 2008',
      url: '/events/USFL-War-in-the-Woods-3-9386',
      result: 'win',
      method: 'TKO (Punches)',
      referee: 'N/A',
      round: '1',
      time: '0:14',
      opponent: 'Ryan Verrett'
    },
    {
      name: 'ICE Fighter - ICE Fighter',
      date: 'Apr / 25 / 2008',
      url: '/events/ICE-Fighter-ICE-Fighter-7412',
      result: 'win',
      method: 'Submission (Guillotine Choke)',
      referee: 'N/A',
      round: '1',
      time: '1:15',
      opponent: 'Anthony Pina'
    },
    {
      name: 'BCX 4 - Battle Cage Xtreme 4',
      date: 'Apr / 19 / 2008',
      url: '/events/BCX-4-Battle-Cage-Xtreme-4-7245',
      result: 'win',
      method: 'KO (Punches)',
      referee: 'Kevin Mulhall',
      round: '3',
      time: '0:24',
      opponent: 'Carlos Eduardo'
    },
    {
      name: 'FFP - Untamed 20',
      date: 'Apr / 12 / 2008',
      url: '/events/FFP-Untamed-20-7175',
      result: 'win',
      method: 'TKO (Punches)',
      referee: 'N/A',
      round: '1',
      time: '1:32',
      opponent: 'Brad Bernard'
    }
  ]
}
``` 

### More data coming soon: 
- All fighter ranking information from FightMatrix.com profiles @ [fight-matrix-api](https://github.com/valish/fight-matrix-api)
