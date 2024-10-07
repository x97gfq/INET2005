const fs = require('fs');

// Read the JSON file
fs.readFile('player_stats.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const players = JSON.parse(data).players;

  // Example: Calculate total passing yards for all quarterbacks
  const totalPassingYards = players
    .filter(player => player.position === 'Quarterback')
    .reduce((sum, player) => sum + player.passing_yards, 0);

  console.log(`Total Passing Yards for all Quarterbacks: ${totalPassingYards}`);
});
