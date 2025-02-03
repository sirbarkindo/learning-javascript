'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };


//   1)

  for (let i = 0; i < game.scored.length; i++ ) {

    console.log(`Goal ${i + 1}: ${game.scored[i]}`);
    
  };

//   Another solution

for (const [i, player] of  game.scored.entries())
    console.log(`Goal ${i + 1}: ${player}`);
    
  

//   2)

let sum = 0;
let count = 0;

for(let key in game.odds ) {
    sum += game.odds[key];
    count ++;
}

const average = sum /count;

console.log(average);

// Another solution

let average1 = 0;
for (const odd of Object.values(game.odds))
    average1 += odd;
average1 /=  Object.values(game.odds).length;

console.log(average1);


// 3
for (const [team , odd] of Object.entries(game.odds)) {
    const teamStr  = team === 'x' ? 'draw' : `victory ${game[team]}`;
    team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
    
}
// 4)
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player] : (scorers[player] = 1);
}