function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
function numPointsScored(playerName) {
  const game = gameObject(); //expression
  const homePlayers = game.home.players; //Object
  const awayPlayers = game.away.players; //object away

  const homePlayer = homePlayers[playerName]; //playerObjet or undefined
  const awayPlayer = awayPlayers[playerName];

  if (homePlayer) {
    return homePlayer.points;
  }
  if (awayPlayer) {
    return awayPlayer.points;
  }
}

function shoeSize(playerName) {
  const game = gameObject(); //expression
  const homePlayers = game.home.players; //Object
  const awayPlayers = game.away.players; //object away

  const homePlayer = homePlayers[playerName]; //playerObjet or undefined
  const awayPlayer = awayPlayers[playerName];

  if (homePlayer) {
    return homePlayer.shoe;
  }
  if (awayPlayer) {
    return awayPlayer.shoe;
  }
}

function teamColors(teamName) {
  const game = gameObject();
  const home = game.home;

  const away = game.away;

  if (home.teamName === teamName) {
    return home.colors;
  }
  if (away.teamName === teamName) {
    return away.colors;
  }
}

function teamNames() {
  const game = gameObject();
  const home = game.home;

  const away = game.away;

  return [home.teamName, away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  const home = game.home;

  const away = game.away;

  if (home.teamName === teamName) {
    const players = home.players; //{}
    const playerKeys = Object.keys(players); //["Alan Anderson", "Reggie Evens",...]
    let jerseyNumbers = [];
    for (let i = 0; i < playerKeys.length; i++) {
      let playerKey = playerKeys[i]; //Alan Anderson ,Reggie Evens
      let playerObj = players[playerKey]; //{number:0,shoe:16,...}
      let jerseyNumber = playerObj.number;
      jerseyNumbers.push(jerseyNumber);
    }
    return jerseyNumbers;
  }
  if (away.teamName === teamName) {
    const players = away.players; //{}
    const playerKeys = Object.keys(players); //["Alan Anderson", "Reggie Evens",...]
    let jerseyNumbers = [];
    for (let i = 0; i < playerKeys.length; i++) {
      let playerKey = playerKeys[i]; //Alan Anderson ,Reggie Evens
      let playerObj = players[playerKey]; //{number:0,shoe:16,...}
      let jerseyNumber = playerObj.number;
      jerseyNumbers.push(jerseyNumber);
    }
    return jerseyNumbers;
  }
}

function playerStats(playerName) {
  const game = gameObject();
  const home = game.home;

  const away = game.away;

  if (home.players[playerName]) {
    return home.players[playerName];
  }
  if (away.players[playerName]) {
    return away.players[playerName];
  }
}

//hinst get object keys as an array
//transverse the object using object keys
function bigShoeRebounds() {
  return 12;
}
