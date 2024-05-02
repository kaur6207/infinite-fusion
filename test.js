const typeChart = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1], // Normal
  [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1], // Fire
  [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1], // Water
  [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1], // Electric
  [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1], // Grass
  [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1], // Ice
  [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1], // Fighting
  [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1], // Poison
  [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1], // Ground
  [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1], // Flying
  [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1], // Psychic
  [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1], // Bug
  [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1], // Rock
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1], // Ghost
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1], // Dragon
  [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1], // Dark
  [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1], // Steel
  [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1] // Fairy
];


const typeNames = [
    "NORMAL", "FIRE", "WATER", "ELECTRIC", "GRASS", "ICE", "FIGHTING", "POISON",
    "GROUND", "FLYING", "PSYCHIC", "BUG", "ROCK", "GHOST", "DRAGON", "DARK", "STEEL", "FAIRY"
]



function calculateTypeWeakness(types) {
  let weaknesses = {
      '0x': [],
      '0.25x': [],
      '0.5x': [],
      '1x': [],
      '2x': [],
      '4x': []
  };

  // Flatten the types array if it's a dual type
  if (types.length > 1) {
      types = types.flat();
  }

  for (let i = 0; i < typeChart.length; i++) {
      let multiplier = 1;
      for (let j = 0; j < types.length; j++) {
          multiplier *= typeChart[i][typeNames.indexOf(types[j])];
      }

      if (multiplier === 0) {
          weaknesses['0x'].push(typeNames[i]);
      } else if (multiplier === 0.25) {
          weaknesses['0.25x'].push(typeNames[i]);
      } else if (multiplier === 0.5) {
          weaknesses['0.5x'].push(typeNames[i]);
      } else if (multiplier === 1) {
          weaknesses['1x'].push(typeNames[i]);
      } else if (multiplier === 2) {
          weaknesses['2x'].push(typeNames[i]);
      } else if (multiplier === 4) {
          weaknesses['4x'].push(typeNames[i]);
      }
  }

  return weaknesses;
}

// Example usage:
const types = ["GRASS", "POISON"];
const weaknesses = calculateTypeWeakness(types);
console.log(weaknesses);
