
// Parse URL parameters
const urlParams = new URLSearchParams(window.location.search);
const firstPokeParam = urlParams.get('firstpoke');
const secondPokeParam = urlParams.get('secondpoke');



console.log('Connecting to API...');
console.log('API connected!');
console.log('Fetching data...');
console.log('Data received!');
console.log('Processing data...');
console.log('Data processing complete!');

const data = {
  "Bulbasaur": {
    "id": "1",
    "fullName": "Bulbasaur",
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "specialAttack": 65,
    "specialDefense": 65,
    "speed": 45,
    "total": 318,
    "height": "70 cm",
    "weight": "6.9 kg",
    "category": "Seed Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Chlorophyll",
        "hidden": true
      }
    ]
  },
  "Ivysaur": {
    "id": "2",
    "fullName": "Ivysaur",
    "hp": 60,
    "attack": 62,
    "defense": 63,
    "specialAttack": 80,
    "specialDefense": 80,
    "speed": 60,
    "total": 405,
    "height": "100 cm",
    "weight": "13 kg",
    "category": "Seed Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Chlorophyll",
        "hidden": true
      }
    ]
  },
  "Venusaur": {
    "id": "3",
    "fullName": "Venusaur",
    "hp": 80,
    "attack": 82,
    "defense": 83,
    "specialAttack": 100,
    "specialDefense": 100,
    "speed": 80,
    "total": 525,
    "height": "200 cm",
    "weight": "100 kg",
    "category": "Seed Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Chlorophyll",
        "hidden": true
      }
    ]
  },
  "Charmander": {
    "id": "4",
    "fullName": "Charmander",
    "hp": 39,
    "attack": 52,
    "defense": 43,
    "specialAttack": 60,
    "specialDefense": 50,
    "speed": 65,
    "total": 309,
    "height": "60 cm",
    "weight": "8.5 kg",
    "category": "Lizard Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Solar Power",
        "hidden": true
      }
    ]
  },
  "Charmeleon": {
    "id": "5",
    "fullName": "Charmeleon",
    "hp": 58,
    "attack": 64,
    "defense": 58,
    "specialAttack": 80,
    "specialDefense": 65,
    "speed": 80,
    "total": 405,
    "height": "110 cm",
    "weight": "19 kg",
    "category": "Flame Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Solar Power",
        "hidden": true
      }
    ]
  },
  "Charizard": {
    "id": "6",
    "fullName": "Charizard",
    "hp": 78,
    "attack": 84,
    "defense": 78,
    "specialAttack": 109,
    "specialDefense": 85,
    "speed": 100,
    "total": 534,
    "height": "170 cm",
    "weight": "90.5 kg",
    "category": "Flame Pokémon",
    "types": [
      "FIRE",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Solar Power",
        "hidden": true
      }
    ]
  },
  "Squirtle": {
    "id": "7",
    "fullName": "Squirtle",
    "hp": 44,
    "attack": 48,
    "defense": 65,
    "specialAttack": 50,
    "specialDefense": 64,
    "speed": 43,
    "total": 314,
    "height": "50 cm",
    "weight": "9 kg",
    "category": "Tiny Turtle Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Rain Dish",
        "hidden": true
      }
    ]
  },
  "Wartortle": {
    "id": "8",
    "fullName": "Wartortle",
    "hp": 59,
    "attack": 63,
    "defense": 80,
    "specialAttack": 65,
    "specialDefense": 80,
    "speed": 58,
    "total": 405,
    "height": "100 cm",
    "weight": "22.5 kg",
    "category": "Turtle Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Rain Dish",
        "hidden": true
      }
    ]
  },
  "Blastoise": {
    "id": "9",
    "fullName": "Blastoise",
    "hp": 79,
    "attack": 83,
    "defense": 100,
    "specialAttack": 85,
    "specialDefense": 105,
    "speed": 78,
    "total": 530,
    "height": "160 cm",
    "weight": "85.5 kg",
    "category": "Shellfish Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Rain Dish",
        "hidden": true
      }
    ]
  },
  "Caterpie": {
    "id": "10",
    "fullName": "Caterpie",
    "hp": 45,
    "attack": 30,
    "defense": 35,
    "specialAttack": 20,
    "specialDefense": 20,
    "speed": 45,
    "total": 195,
    "height": "30 cm",
    "weight": "2.9 kg",
    "category": "Worm Pokémon",
    "types": [
      "BUG"
    ],
    "abilities": [
      {
        "name": "Shield Dust",
        "hidden": false
      },
      {
        "name": "Run Away",
        "hidden": true
      }
    ]
  },
  "Metapod": {
    "id": "11",
    "fullName": "Metapod",
    "hp": 50,
    "attack": 20,
    "defense": 55,
    "specialAttack": 25,
    "specialDefense": 25,
    "speed": 30,
    "total": 205,
    "height": "70 cm",
    "weight": "9.9 kg",
    "category": "Cocoon Pokémon",
    "types": [
      "BUG"
    ],
    "abilities": [
      {
        "name": "Shed Skin",
        "hidden": false
      },
      {
        "name": "Shed Skin",
        "hidden": true
      }
    ]
  },
  "Butterfree": {
    "id": "12",
    "fullName": "Butterfree",
    "hp": 60,
    "attack": 45,
    "defense": 50,
    "specialAttack": 80,
    "specialDefense": 80,
    "speed": 70,
    "total": 385,
    "height": "110 cm",
    "weight": "32 kg",
    "category": "Butterfly Pokémon",
    "types": [
      "BUG",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Compound Eyes",
        "hidden": false
      },
      {
        "name": "Tinted Lens",
        "hidden": true
      }
    ]
  },
  "Weedle": {
    "id": "13",
    "fullName": "Weedle",
    "hp": 40,
    "attack": 35,
    "defense": 30,
    "specialAttack": 20,
    "specialDefense": 20,
    "speed": 50,
    "total": 195,
    "height": "30 cm",
    "weight": "3.2 kg",
    "category": "Hairy Bug Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Shield Dust",
        "hidden": false
      },
      {
        "name": "Run Away",
        "hidden": true
      }
    ]
  },
  "Kakuna": {
    "id": "14",
    "fullName": "Kakuna",
    "hp": 45,
    "attack": 25,
    "defense": 50,
    "specialAttack": 25,
    "specialDefense": 25,
    "speed": 35,
    "total": 205,
    "height": "60 cm",
    "weight": "10 kg",
    "category": "Cocoon Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Shed Skin",
        "hidden": false
      },
      {
        "name": "Shed Skin",
        "hidden": true
      }
    ]
  },
  "Beedrill": {
    "id": "15",
    "fullName": "Beedrill",
    "hp": 65,
    "attack": 80,
    "defense": 40,
    "specialAttack": 45,
    "specialDefense": 80,
    "speed": 75,
    "total": 385,
    "height": "100 cm",
    "weight": "29.5 kg",
    "category": "Poison Bee Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": true
      }
    ]
  },
  "Pidgey": {
    "id": "16",
    "fullName": "Pidgey",
    "hp": 40,
    "attack": 45,
    "defense": 40,
    "specialAttack": 35,
    "specialDefense": 35,
    "speed": 56,
    "total": 251,
    "height": "30 cm",
    "weight": "1.8 kg",
    "category": "Tiny Bird Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Tangled Feet",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Big Pecks",
        "hidden": true
      }
    ]
  },
  "Pidgeotto": {
    "id": "17",
    "fullName": "Pidgeotto",
    "hp": 63,
    "attack": 60,
    "defense": 55,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 71,
    "total": 349,
    "height": "110 cm",
    "weight": "30 kg",
    "category": "Bird Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Tangled Feet",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Big Pecks",
        "hidden": true
      }
    ]
  },
  "Pidgeot": {
    "id": "18",
    "fullName": "Pidgeot",
    "hp": 83,
    "attack": 80,
    "defense": 75,
    "specialAttack": 70,
    "specialDefense": 70,
    "speed": 91,
    "total": 469,
    "height": "150 cm",
    "weight": "39.5 kg",
    "category": "Bird Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Tangled Feet",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Big Pecks",
        "hidden": true
      }
    ]
  },
  "Rattata": {
    "id": "19",
    "fullName": "Rattata",
    "hp": 30,
    "attack": 56,
    "defense": 35,
    "specialAttack": 25,
    "specialDefense": 35,
    "speed": 72,
    "total": 253,
    "height": "30 cm",
    "weight": "3.5 kg",
    "category": "Mouse Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": true
      }
    ]
  },
  "Raticate": {
    "id": "20",
    "fullName": "Raticate",
    "hp": 55,
    "attack": 81,
    "defense": 60,
    "specialAttack": 50,
    "specialDefense": 70,
    "speed": 97,
    "total": 413,
    "height": "70 cm",
    "weight": "18.5 kg",
    "category": "Mouse Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": true
      }
    ]
  },
  "Spearow": {
    "id": "21",
    "fullName": "Spearow",
    "hp": 40,
    "attack": 60,
    "defense": 30,
    "specialAttack": 31,
    "specialDefense": 31,
    "speed": 70,
    "total": 262,
    "height": "30 cm",
    "weight": "2 kg",
    "category": "Tiny Bird Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": true
      }
    ]
  },
  "Fearow": {
    "id": "22",
    "fullName": "Fearow",
    "hp": 65,
    "attack": 90,
    "defense": 65,
    "specialAttack": 61,
    "specialDefense": 61,
    "speed": 100,
    "total": 442,
    "height": "120 cm",
    "weight": "38 kg",
    "category": "Beak Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": true
      }
    ]
  },
  "Ekans": {
    "id": "23",
    "fullName": "Ekans",
    "hp": 35,
    "attack": 60,
    "defense": 44,
    "specialAttack": 40,
    "specialDefense": 54,
    "speed": 55,
    "total": 288,
    "height": "200 cm",
    "weight": "6.9 kg",
    "category": "Snake Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Shed Skin",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Arbok": {
    "id": "24",
    "fullName": "Arbok",
    "hp": 60,
    "attack": 85,
    "defense": 69,
    "specialAttack": 65,
    "specialDefense": 79,
    "speed": 80,
    "total": 438,
    "height": "350 cm",
    "weight": "65 kg",
    "category": "Cobra Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Shed Skin",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Pikachu": {
    "id": "25",
    "fullName": "Pikachu",
    "hp": 35,
    "attack": 55,
    "defense": 30,
    "specialAttack": 50,
    "specialDefense": 40,
    "speed": 90,
    "total": 300,
    "height": "40 cm",
    "weight": "6 kg",
    "category": "Mouse Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Lightning Rod",
        "hidden": true
      }
    ]
  },
  "Raichu": {
    "id": "26",
    "fullName": "Raichu",
    "hp": 60,
    "attack": 90,
    "defense": 55,
    "specialAttack": 90,
    "specialDefense": 80,
    "speed": 100,
    "total": 475,
    "height": "80 cm",
    "weight": "30 kg",
    "category": "Mouse Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Lightning Rod",
        "hidden": true
      }
    ]
  },
  "Sandshrew": {
    "id": "27",
    "fullName": "Sandshrew",
    "hp": 50,
    "attack": 75,
    "defense": 85,
    "specialAttack": 20,
    "specialDefense": 30,
    "speed": 40,
    "total": 300,
    "height": "60 cm",
    "weight": "12 kg",
    "category": "Mouse Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Sand Rush",
        "hidden": true
      }
    ]
  },
  "Sandslash": {
    "id": "28",
    "fullName": "Sandslash",
    "hp": 75,
    "attack": 100,
    "defense": 110,
    "specialAttack": 45,
    "specialDefense": 55,
    "speed": 65,
    "total": 450,
    "height": "100 cm",
    "weight": "29.5 kg",
    "category": "Mouse Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Sand Rush",
        "hidden": true
      }
    ]
  },
  "Nidoran F": {
    "id": "29",
    "fullName": "Nidoran F",
    "hp": 55,
    "attack": 47,
    "defense": 52,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 41,
    "total": 275,
    "height": "40 cm",
    "weight": "7 kg",
    "category": "Poison Pin Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": true
      }
    ]
  },
  "Nidorina": {
    "id": "30",
    "fullName": "Nidorina",
    "hp": 70,
    "attack": 62,
    "defense": 67,
    "specialAttack": 55,
    "specialDefense": 55,
    "speed": 56,
    "total": 365,
    "height": "80 cm",
    "weight": "20 kg",
    "category": "Poison Pin Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": true
      }
    ]
  },
  "Nidoqueen": {
    "id": "31",
    "fullName": "Nidoqueen",
    "hp": 90,
    "attack": 82,
    "defense": 87,
    "specialAttack": 75,
    "specialDefense": 85,
    "speed": 76,
    "total": 495,
    "height": "130 cm",
    "weight": "60 kg",
    "category": "Drill Pokémon",
    "types": [
      "POISON",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Nidoran M": {
    "id": "32",
    "fullName": "Nidoran M",
    "hp": 46,
    "attack": 57,
    "defense": 40,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 50,
    "total": 273,
    "height": "50 cm",
    "weight": "9 kg",
    "category": "Poison Pin Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": true
      }
    ]
  },
  "Nidorino": {
    "id": "33",
    "fullName": "Nidorino",
    "hp": 61,
    "attack": 72,
    "defense": 57,
    "specialAttack": 55,
    "specialDefense": 55,
    "speed": 65,
    "total": 365,
    "height": "90 cm",
    "weight": "19.5 kg",
    "category": "Poison Pin Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": true
      }
    ]
  },
  "Nidoking": {
    "id": "34",
    "fullName": "Nidoking",
    "hp": 81,
    "attack": 92,
    "defense": 77,
    "specialAttack": 85,
    "specialDefense": 75,
    "speed": 85,
    "total": 495,
    "height": "140 cm",
    "weight": "62 kg",
    "category": "Drill Pokémon",
    "types": [
      "POISON",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Clefairy": {
    "id": "35",
    "fullName": "Clefairy",
    "hp": 70,
    "attack": 45,
    "defense": 48,
    "specialAttack": 60,
    "specialDefense": 65,
    "speed": 35,
    "total": 323,
    "height": "60 cm",
    "weight": "7.5 kg",
    "category": "Fairy Pokémon",
    "types": [
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Magic Guard",
        "hidden": false
      },
      {
        "name": "Cute Charm",
        "hidden": false
      },
      {
        "name": "Friend Guard",
        "hidden": true
      }
    ]
  },
  "Clefable": {
    "id": "36",
    "fullName": "Clefable",
    "hp": 95,
    "attack": 70,
    "defense": 73,
    "specialAttack": 85,
    "specialDefense": 90,
    "speed": 60,
    "total": 473,
    "height": "130 cm",
    "weight": "40 kg",
    "category": "Fairy Pokémon",
    "types": [
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Magic Guard",
        "hidden": false
      },
      {
        "name": "Cute Charm",
        "hidden": false
      },
      {
        "name": "Unaware",
        "hidden": true
      }
    ]
  },
  "Vulpix": {
    "id": "37",
    "fullName": "Vulpix",
    "hp": 38,
    "attack": 41,
    "defense": 40,
    "specialAttack": 50,
    "specialDefense": 65,
    "speed": 65,
    "total": 299,
    "height": "60 cm",
    "weight": "9.9 kg",
    "category": "Fox Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Drought",
        "hidden": true
      }
    ]
  },
  "Ninetales": {
    "id": "38",
    "fullName": "Ninetales",
    "hp": 73,
    "attack": 76,
    "defense": 75,
    "specialAttack": 81,
    "specialDefense": 100,
    "speed": 100,
    "total": 505,
    "height": "110 cm",
    "weight": "19.9 kg",
    "category": "Fox Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Drought",
        "hidden": true
      }
    ]
  },
  "Jigglypuff": {
    "id": "39",
    "fullName": "Jigglypuff",
    "hp": 115,
    "attack": 45,
    "defense": 20,
    "specialAttack": 45,
    "specialDefense": 25,
    "speed": 20,
    "total": 270,
    "height": "50 cm",
    "weight": "5.5 kg",
    "category": "Balloon Pokémon",
    "types": [
      "NORMAL",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Cute Charm",
        "hidden": false
      },
      {
        "name": "Friend Guard",
        "hidden": true
      }
    ]
  },
  "Wigglytuff": {
    "id": "40",
    "fullName": "Wigglytuff",
    "hp": 140,
    "attack": 70,
    "defense": 45,
    "specialAttack": 75,
    "specialDefense": 50,
    "speed": 45,
    "total": 425,
    "height": "100 cm",
    "weight": "12 kg",
    "category": "Balloon Pokémon",
    "types": [
      "NORMAL",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Cute Charm",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": true
      }
    ]
  },
  "Zubat": {
    "id": "41",
    "fullName": "Zubat",
    "hp": 40,
    "attack": 45,
    "defense": 35,
    "specialAttack": 30,
    "specialDefense": 40,
    "speed": 55,
    "total": 245,
    "height": "80 cm",
    "weight": "7.5 kg",
    "category": "Bat Pokémon",
    "types": [
      "POISON",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": true
      }
    ]
  },
  "Golbat": {
    "id": "42",
    "fullName": "Golbat",
    "hp": 75,
    "attack": 80,
    "defense": 70,
    "specialAttack": 65,
    "specialDefense": 75,
    "speed": 90,
    "total": 455,
    "height": "160 cm",
    "weight": "55 kg",
    "category": "Bat Pokémon",
    "types": [
      "POISON",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": true
      }
    ]
  },
  "Oddish": {
    "id": "43",
    "fullName": "Oddish",
    "hp": 45,
    "attack": 50,
    "defense": 55,
    "specialAttack": 75,
    "specialDefense": 65,
    "speed": 30,
    "total": 320,
    "height": "50 cm",
    "weight": "5.4 kg",
    "category": "Weed Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Run Away",
        "hidden": true
      }
    ]
  },
  "Gloom": {
    "id": "44",
    "fullName": "Gloom",
    "hp": 60,
    "attack": 65,
    "defense": 70,
    "specialAttack": 85,
    "specialDefense": 75,
    "speed": 40,
    "total": 395,
    "height": "80 cm",
    "weight": "8.6 kg",
    "category": "Weed Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Stench",
        "hidden": true
      }
    ]
  },
  "Vileplume": {
    "id": "45",
    "fullName": "Vileplume",
    "hp": 75,
    "attack": 80,
    "defense": 85,
    "specialAttack": 100,
    "specialDefense": 90,
    "speed": 50,
    "total": 480,
    "height": "120 cm",
    "weight": "18.6 kg",
    "category": "Flower Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Effect Spore",
        "hidden": true
      }
    ]
  },
  "Paras": {
    "id": "46",
    "fullName": "Paras",
    "hp": 35,
    "attack": 70,
    "defense": 55,
    "specialAttack": 45,
    "specialDefense": 55,
    "speed": 25,
    "total": 285,
    "height": "30 cm",
    "weight": "5.4 kg",
    "category": "Mushroom Pokémon",
    "types": [
      "BUG",
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Effect Spore",
        "hidden": false
      },
      {
        "name": "Dry Skin",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": true
      }
    ]
  },
  "Parasect": {
    "id": "47",
    "fullName": "Parasect",
    "hp": 60,
    "attack": 95,
    "defense": 80,
    "specialAttack": 60,
    "specialDefense": 80,
    "speed": 30,
    "total": 405,
    "height": "100 cm",
    "weight": "29.5 kg",
    "category": "Mushroom Pokémon",
    "types": [
      "BUG",
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Effect Spore",
        "hidden": false
      },
      {
        "name": "Dry Skin",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": true
      }
    ]
  },
  "Venonat": {
    "id": "48",
    "fullName": "Venonat",
    "hp": 60,
    "attack": 55,
    "defense": 50,
    "specialAttack": 40,
    "specialDefense": 55,
    "speed": 45,
    "total": 305,
    "height": "100 cm",
    "weight": "30 kg",
    "category": "Insect Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Compound Eyes",
        "hidden": false
      },
      {
        "name": "Tinted Lens",
        "hidden": false
      },
      {
        "name": "Run Away",
        "hidden": true
      }
    ]
  },
  "Venomoth": {
    "id": "49",
    "fullName": "Venomoth",
    "hp": 70,
    "attack": 65,
    "defense": 60,
    "specialAttack": 90,
    "specialDefense": 75,
    "speed": 90,
    "total": 450,
    "height": "150 cm",
    "weight": "12.5 kg",
    "category": "Poison Moth Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Shield Dust",
        "hidden": false
      },
      {
        "name": "Tinted Lens",
        "hidden": false
      },
      {
        "name": "Wonder Skin",
        "hidden": true
      }
    ]
  },
  "Diglett": {
    "id": "50",
    "fullName": "Diglett",
    "hp": 10,
    "attack": 55,
    "defense": 25,
    "specialAttack": 35,
    "specialDefense": 45,
    "speed": 95,
    "total": 265,
    "height": "20 cm",
    "weight": "0.8 kg",
    "category": "Mole Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Arena Trap",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Sand Force",
        "hidden": true
      }
    ]
  },
  "Dugtrio": {
    "id": "51",
    "fullName": "Dugtrio",
    "hp": 35,
    "attack": 80,
    "defense": 50,
    "specialAttack": 50,
    "specialDefense": 70,
    "speed": 120,
    "total": 405,
    "height": "70 cm",
    "weight": "33.3 kg",
    "category": "Mole Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Arena Trap",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Sand Force",
        "hidden": true
      }
    ]
  },
  "Meowth": {
    "id": "52",
    "fullName": "Meowth",
    "hp": 40,
    "attack": 45,
    "defense": 35,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 90,
    "total": 290,
    "height": "40 cm",
    "weight": "4.2 kg",
    "category": "Scratch Cat Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Pickup",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Persian": {
    "id": "53",
    "fullName": "Persian",
    "hp": 65,
    "attack": 70,
    "defense": 60,
    "specialAttack": 65,
    "specialDefense": 65,
    "speed": 115,
    "total": 440,
    "height": "100 cm",
    "weight": "32 kg",
    "category": "Classy Cat Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Limber",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Psyduck": {
    "id": "54",
    "fullName": "Psyduck",
    "hp": 50,
    "attack": 52,
    "defense": 48,
    "specialAttack": 65,
    "specialDefense": 50,
    "speed": 55,
    "total": 320,
    "height": "80 cm",
    "weight": "19.6 kg",
    "category": "Duck Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Damp",
        "hidden": false
      },
      {
        "name": "Cloud Nine",
        "hidden": false
      },
      {
        "name": "Swift Swim",
        "hidden": true
      }
    ]
  },
  "Golduck": {
    "id": "55",
    "fullName": "Golduck",
    "hp": 80,
    "attack": 82,
    "defense": 78,
    "specialAttack": 95,
    "specialDefense": 80,
    "speed": 85,
    "total": 500,
    "height": "170 cm",
    "weight": "76.6 kg",
    "category": "Duck Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Damp",
        "hidden": false
      },
      {
        "name": "Cloud Nine",
        "hidden": false
      },
      {
        "name": "Swift Swim",
        "hidden": true
      }
    ]
  },
  "Mankey": {
    "id": "56",
    "fullName": "Mankey",
    "hp": 40,
    "attack": 80,
    "defense": 35,
    "specialAttack": 35,
    "specialDefense": 45,
    "speed": 70,
    "total": 305,
    "height": "50 cm",
    "weight": "28 kg",
    "category": "Pig Monkey Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Vital Spirit",
        "hidden": false
      },
      {
        "name": "Anger Point",
        "hidden": false
      },
      {
        "name": "Defiant",
        "hidden": true
      }
    ]
  },
  "Primeape": {
    "id": "57",
    "fullName": "Primeape",
    "hp": 65,
    "attack": 105,
    "defense": 60,
    "specialAttack": 60,
    "specialDefense": 70,
    "speed": 95,
    "total": 455,
    "height": "100 cm",
    "weight": "32 kg",
    "category": "Pig Monkey Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Vital Spirit",
        "hidden": false
      },
      {
        "name": "Anger Point",
        "hidden": false
      },
      {
        "name": "Defiant",
        "hidden": true
      }
    ]
  },
  "Growlithe": {
    "id": "58",
    "fullName": "Growlithe",
    "hp": 55,
    "attack": 70,
    "defense": 45,
    "specialAttack": 70,
    "specialDefense": 50,
    "speed": 60,
    "total": 350,
    "height": "70 cm",
    "weight": "19 kg",
    "category": "Puppy Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Justified",
        "hidden": true
      }
    ]
  },
  "Arcanine": {
    "id": "59",
    "fullName": "Arcanine",
    "hp": 90,
    "attack": 110,
    "defense": 80,
    "specialAttack": 100,
    "specialDefense": 80,
    "speed": 95,
    "total": 555,
    "height": "190 cm",
    "weight": "155 kg",
    "category": "Legendary Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Justified",
        "hidden": true
      }
    ]
  },
  "Poliwag": {
    "id": "60",
    "fullName": "Poliwag",
    "hp": 40,
    "attack": 50,
    "defense": 40,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 90,
    "total": 300,
    "height": "60 cm",
    "weight": "12.4 kg",
    "category": "Tadpole Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": false
      },
      {
        "name": "Swift Swim",
        "hidden": true
      }
    ]
  },
  "Poliwhirl": {
    "id": "61",
    "fullName": "Poliwhirl",
    "hp": 65,
    "attack": 65,
    "defense": 65,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 90,
    "total": 385,
    "height": "100 cm",
    "weight": "20 kg",
    "category": "Tadpole Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": false
      },
      {
        "name": "Swift Swim",
        "hidden": true
      }
    ]
  },
  "Poliwrath": {
    "id": "62",
    "fullName": "Poliwrath",
    "hp": 90,
    "attack": 85,
    "defense": 95,
    "specialAttack": 70,
    "specialDefense": 90,
    "speed": 70,
    "total": 500,
    "height": "130 cm",
    "weight": "54 kg",
    "category": "Tadpole Pokémon",
    "types": [
      "WATER",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": false
      },
      {
        "name": "Swift Swim",
        "hidden": true
      }
    ]
  },
  "Abra": {
    "id": "63",
    "fullName": "Abra",
    "hp": 25,
    "attack": 20,
    "defense": 15,
    "specialAttack": 105,
    "specialDefense": 55,
    "speed": 90,
    "total": 310,
    "height": "90 cm",
    "weight": "19.5 kg",
    "category": "Psi Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Magic Guard",
        "hidden": true
      }
    ]
  },
  "Kadabra": {
    "id": "64",
    "fullName": "Kadabra",
    "hp": 40,
    "attack": 35,
    "defense": 30,
    "specialAttack": 120,
    "specialDefense": 70,
    "speed": 105,
    "total": 400,
    "height": "130 cm",
    "weight": "56.5 kg",
    "category": "Psi Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Magic Guard",
        "hidden": true
      }
    ]
  },
  "Alakazam": {
    "id": "65",
    "fullName": "Alakazam",
    "hp": 55,
    "attack": 50,
    "defense": 45,
    "specialAttack": 135,
    "specialDefense": 85,
    "speed": 120,
    "total": 490,
    "height": "150 cm",
    "weight": "48 kg",
    "category": "Psi Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Magic Guard",
        "hidden": true
      }
    ]
  },
  "Machop": {
    "id": "66",
    "fullName": "Machop",
    "hp": 70,
    "attack": 80,
    "defense": 50,
    "specialAttack": 35,
    "specialDefense": 35,
    "speed": 35,
    "total": 305,
    "height": "80 cm",
    "weight": "19.5 kg",
    "category": "Superpower Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "No Guard",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": false
      },
      {
        "name": "Steadfast",
        "hidden": true
      }
    ]
  },
  "Machoke": {
    "id": "67",
    "fullName": "Machoke",
    "hp": 80,
    "attack": 100,
    "defense": 70,
    "specialAttack": 50,
    "specialDefense": 60,
    "speed": 45,
    "total": 405,
    "height": "150 cm",
    "weight": "70.5 kg",
    "category": "Superpower Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "No Guard",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": false
      },
      {
        "name": "Steadfast",
        "hidden": true
      }
    ]
  },
  "Machamp": {
    "id": "68",
    "fullName": "Machamp",
    "hp": 90,
    "attack": 130,
    "defense": 80,
    "specialAttack": 65,
    "specialDefense": 85,
    "speed": 55,
    "total": 505,
    "height": "160 cm",
    "weight": "130 kg",
    "category": "Superpower Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "No Guard",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": false
      },
      {
        "name": "Steadfast",
        "hidden": true
      }
    ]
  },
  "Bellsprout": {
    "id": "69",
    "fullName": "Bellsprout",
    "hp": 50,
    "attack": 75,
    "defense": 35,
    "specialAttack": 70,
    "specialDefense": 30,
    "speed": 40,
    "total": 300,
    "height": "70 cm",
    "weight": "4 kg",
    "category": "Flower Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Gluttony",
        "hidden": true
      }
    ]
  },
  "Weepinbell": {
    "id": "70",
    "fullName": "Weepinbell",
    "hp": 65,
    "attack": 90,
    "defense": 50,
    "specialAttack": 85,
    "specialDefense": 45,
    "speed": 55,
    "total": 390,
    "height": "100 cm",
    "weight": "6.4 kg",
    "category": "Flycatcher Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Gluttony",
        "hidden": true
      }
    ]
  },
  "Victreebel": {
    "id": "71",
    "fullName": "Victreebel",
    "hp": 80,
    "attack": 105,
    "defense": 65,
    "specialAttack": 100,
    "specialDefense": 60,
    "speed": 70,
    "total": 480,
    "height": "170 cm",
    "weight": "15.5 kg",
    "category": "Flycatcher Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Gluttony",
        "hidden": true
      }
    ]
  },
  "Tentacool": {
    "id": "72",
    "fullName": "Tentacool",
    "hp": 40,
    "attack": 40,
    "defense": 35,
    "specialAttack": 50,
    "specialDefense": 100,
    "speed": 70,
    "total": 335,
    "height": "90 cm",
    "weight": "45.5 kg",
    "category": "Jellyfish Pokémon",
    "types": [
      "WATER",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Clear Body",
        "hidden": false
      },
      {
        "name": "Liquid Ooze",
        "hidden": false
      },
      {
        "name": "Rain Dish",
        "hidden": true
      }
    ]
  },
  "Tentacruel": {
    "id": "73",
    "fullName": "Tentacruel",
    "hp": 80,
    "attack": 70,
    "defense": 65,
    "specialAttack": 80,
    "specialDefense": 120,
    "speed": 100,
    "total": 515,
    "height": "160 cm",
    "weight": "55 kg",
    "category": "Jellyfish Pokémon",
    "types": [
      "WATER",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Clear Body",
        "hidden": false
      },
      {
        "name": "Liquid Ooze",
        "hidden": false
      },
      {
        "name": "Rain Dish",
        "hidden": true
      }
    ]
  },
  "Geodude": {
    "id": "74",
    "fullName": "Geodude",
    "hp": 40,
    "attack": 80,
    "defense": 100,
    "specialAttack": 30,
    "specialDefense": 30,
    "speed": 20,
    "total": 300,
    "height": "40 cm",
    "weight": "20 kg",
    "category": "Rock Pokémon",
    "types": [
      "ROCK",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": true
      }
    ]
  },
  "Graveler": {
    "id": "75",
    "fullName": "Graveler",
    "hp": 55,
    "attack": 95,
    "defense": 115,
    "specialAttack": 45,
    "specialDefense": 45,
    "speed": 35,
    "total": 390,
    "height": "100 cm",
    "weight": "105 kg",
    "category": "Rock Pokémon",
    "types": [
      "ROCK",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": true
      }
    ]
  },
  "Golem": {
    "id": "76",
    "fullName": "Golem",
    "hp": 80,
    "attack": 110,
    "defense": 130,
    "specialAttack": 55,
    "specialDefense": 65,
    "speed": 45,
    "total": 485,
    "height": "140 cm",
    "weight": "300 kg",
    "category": "Megaton Pokémon",
    "types": [
      "ROCK",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": true
      }
    ]
  },
  "Ponyta": {
    "id": "77",
    "fullName": "Ponyta",
    "hp": 50,
    "attack": 85,
    "defense": 55,
    "specialAttack": 65,
    "specialDefense": 65,
    "speed": 90,
    "total": 410,
    "height": "100 cm",
    "weight": "30 kg",
    "category": "Fire Horse Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Flame Body",
        "hidden": true
      }
    ]
  },
  "Rapidash": {
    "id": "78",
    "fullName": "Rapidash",
    "hp": 65,
    "attack": 100,
    "defense": 70,
    "specialAttack": 80,
    "specialDefense": 80,
    "speed": 105,
    "total": 500,
    "height": "170 cm",
    "weight": "95 kg",
    "category": "Fire Horse Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Flame Body",
        "hidden": true
      }
    ]
  },
  "Slowpoke": {
    "id": "79",
    "fullName": "Slowpoke",
    "hp": 90,
    "attack": 65,
    "defense": 65,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 15,
    "total": 315,
    "height": "120 cm",
    "weight": "36 kg",
    "category": "Dopey Pokémon",
    "types": [
      "WATER",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Own Tempo",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Slowbro": {
    "id": "80",
    "fullName": "Slowbro",
    "hp": 95,
    "attack": 75,
    "defense": 110,
    "specialAttack": 100,
    "specialDefense": 80,
    "speed": 30,
    "total": 490,
    "height": "160 cm",
    "weight": "78.5 kg",
    "category": "Hermit Crab Pokémon",
    "types": [
      "WATER",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Own Tempo",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Magnemite": {
    "id": "81",
    "fullName": "Magnemite",
    "hp": 25,
    "attack": 35,
    "defense": 70,
    "specialAttack": 95,
    "specialDefense": 55,
    "speed": 45,
    "total": 325,
    "height": "30 cm",
    "weight": "6 kg",
    "category": "Magnet Pokémon",
    "types": [
      "STEEL",
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Magnet Pull",
        "hidden": false
      },
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Analytic",
        "hidden": true
      }
    ]
  },
  "Magneton": {
    "id": "82",
    "fullName": "Magneton",
    "hp": 50,
    "attack": 60,
    "defense": 95,
    "specialAttack": 120,
    "specialDefense": 70,
    "speed": 70,
    "total": 465,
    "height": "100 cm",
    "weight": "60 kg",
    "category": "Magnet Pokémon",
    "types": [
      "STEEL",
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Magnet Pull",
        "hidden": false
      },
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Analytic",
        "hidden": true
      }
    ]
  },
  "Farfetch'd": {
    "id": "83",
    "fullName": "Farfetch'd",
    "hp": 52,
    "attack": 65,
    "defense": 55,
    "specialAttack": 58,
    "specialDefense": 62,
    "speed": 60,
    "total": 352,
    "height": "80 cm",
    "weight": "15 kg",
    "category": "Wild Duck Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Defiant",
        "hidden": true
      }
    ]
  },
  "Doduo": {
    "id": "84",
    "fullName": "Doduo",
    "hp": 35,
    "attack": 85,
    "defense": 45,
    "specialAttack": 35,
    "specialDefense": 35,
    "speed": 75,
    "total": 310,
    "height": "140 cm",
    "weight": "39.2 kg",
    "category": "Twin Bird Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Tangled Feet",
        "hidden": true
      }
    ]
  },
  "Dodrio": {
    "id": "85",
    "fullName": "Dodrio",
    "hp": 60,
    "attack": 110,
    "defense": 70,
    "specialAttack": 60,
    "specialDefense": 60,
    "speed": 100,
    "total": 460,
    "height": "180 cm",
    "weight": "85.2 kg",
    "category": "Triple Bird Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Tangled Feet",
        "hidden": true
      }
    ]
  },
  "Seel": {
    "id": "86",
    "fullName": "Seel",
    "hp": 65,
    "attack": 45,
    "defense": 55,
    "specialAttack": 45,
    "specialDefense": 70,
    "speed": 45,
    "total": 325,
    "height": "110 cm",
    "weight": "90 kg",
    "category": "Sea Lion Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Thick Fat",
        "hidden": false
      },
      {
        "name": "Hydration",
        "hidden": false
      },
      {
        "name": "Ice Body",
        "hidden": true
      }
    ]
  },
  "Dewgong": {
    "id": "87",
    "fullName": "Dewgong",
    "hp": 90,
    "attack": 70,
    "defense": 80,
    "specialAttack": 70,
    "specialDefense": 95,
    "speed": 70,
    "total": 475,
    "height": "170 cm",
    "weight": "120 kg",
    "category": "Sea Lion Pokémon",
    "types": [
      "WATER",
      "ICE"
    ],
    "abilities": [
      {
        "name": "Thick Fat",
        "hidden": false
      },
      {
        "name": "Hydration",
        "hidden": false
      },
      {
        "name": "Ice Body",
        "hidden": true
      }
    ]
  },
  "Grimer": {
    "id": "88",
    "fullName": "Grimer",
    "hp": 80,
    "attack": 80,
    "defense": 50,
    "specialAttack": 40,
    "specialDefense": 50,
    "speed": 25,
    "total": 325,
    "height": "90 cm",
    "weight": "30 kg",
    "category": "Sludge Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Stench",
        "hidden": false
      },
      {
        "name": "Sticky Hold",
        "hidden": false
      },
      {
        "name": "Poison Touch",
        "hidden": true
      }
    ]
  },
  "Muk": {
    "id": "89",
    "fullName": "Muk",
    "hp": 105,
    "attack": 105,
    "defense": 75,
    "specialAttack": 65,
    "specialDefense": 100,
    "speed": 50,
    "total": 500,
    "height": "120 cm",
    "weight": "30 kg",
    "category": "Sludge Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Stench",
        "hidden": false
      },
      {
        "name": "Sticky Hold",
        "hidden": false
      },
      {
        "name": "Poison Touch",
        "hidden": true
      }
    ]
  },
  "Shellder": {
    "id": "90",
    "fullName": "Shellder",
    "hp": 30,
    "attack": 65,
    "defense": 100,
    "specialAttack": 45,
    "specialDefense": 25,
    "speed": 40,
    "total": 305,
    "height": "30 cm",
    "weight": "4 kg",
    "category": "Bivalve Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Shell Armor",
        "hidden": false
      },
      {
        "name": "Skill Link",
        "hidden": false
      },
      {
        "name": "Overcoat",
        "hidden": true
      }
    ]
  },
  "Cloyster": {
    "id": "91",
    "fullName": "Cloyster",
    "hp": 50,
    "attack": 95,
    "defense": 180,
    "specialAttack": 85,
    "specialDefense": 45,
    "speed": 70,
    "total": 525,
    "height": "150 cm",
    "weight": "132.5 kg",
    "category": "Bivalve Pokémon",
    "types": [
      "WATER",
      "ICE"
    ],
    "abilities": [
      {
        "name": "Shell Armor",
        "hidden": false
      },
      {
        "name": "Skill Link",
        "hidden": false
      },
      {
        "name": "Overcoat",
        "hidden": true
      }
    ]
  },
  "Gastly": {
    "id": "92",
    "fullName": "Gastly",
    "hp": 30,
    "attack": 35,
    "defense": 30,
    "specialAttack": 100,
    "specialDefense": 35,
    "speed": 80,
    "total": 310,
    "height": "130 cm",
    "weight": "0.1 kg",
    "category": "Gas Pokémon",
    "types": [
      "GHOST",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Levitate",
        "hidden": true
      }
    ]
  },
  "Haunter": {
    "id": "93",
    "fullName": "Haunter",
    "hp": 45,
    "attack": 50,
    "defense": 45,
    "specialAttack": 115,
    "specialDefense": 55,
    "speed": 95,
    "total": 405,
    "height": "160 cm",
    "weight": "0.1 kg",
    "category": "Gas Pokémon",
    "types": [
      "GHOST",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Levitate",
        "hidden": true
      }
    ]
  },
  "Gengar": {
    "id": "94",
    "fullName": "Gengar",
    "hp": 60,
    "attack": 65,
    "defense": 60,
    "specialAttack": 130,
    "specialDefense": 75,
    "speed": 110,
    "total": 500,
    "height": "150 cm",
    "weight": "40.5 kg",
    "category": "Shadow Pokémon",
    "types": [
      "GHOST",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Levitate",
        "hidden": true
      }
    ]
  },
  "Onix": {
    "id": "95",
    "fullName": "Onix",
    "hp": 35,
    "attack": 45,
    "defense": 160,
    "specialAttack": 30,
    "specialDefense": 45,
    "speed": 70,
    "total": 385,
    "height": "880 cm",
    "weight": "210 kg",
    "category": "Rock Snake Pokémon",
    "types": [
      "ROCK",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Weak Armor",
        "hidden": true
      }
    ]
  },
  "Drowzee": {
    "id": "96",
    "fullName": "Drowzee",
    "hp": 60,
    "attack": 48,
    "defense": 45,
    "specialAttack": 43,
    "specialDefense": 90,
    "speed": 42,
    "total": 328,
    "height": "100 cm",
    "weight": "32.4 kg",
    "category": "Hypnosis Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Forewarn",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": true
      }
    ]
  },
  "Hypno": {
    "id": "97",
    "fullName": "Hypno",
    "hp": 85,
    "attack": 73,
    "defense": 70,
    "specialAttack": 73,
    "specialDefense": 115,
    "speed": 67,
    "total": 483,
    "height": "160 cm",
    "weight": "75.6 kg",
    "category": "Hypnosis Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Forewarn",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": true
      }
    ]
  },
  "Krabby": {
    "id": "98",
    "fullName": "Krabby",
    "hp": 30,
    "attack": 105,
    "defense": 90,
    "specialAttack": 25,
    "specialDefense": 25,
    "speed": 50,
    "total": 325,
    "height": "40 cm",
    "weight": "6.5 kg",
    "category": "River Crab Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Shell Armor",
        "hidden": false
      },
      {
        "name": "Hyper Cutter",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Kingler": {
    "id": "99",
    "fullName": "Kingler",
    "hp": 55,
    "attack": 130,
    "defense": 115,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 75,
    "total": 475,
    "height": "130 cm",
    "weight": "60 kg",
    "category": "Pincer Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Shell Armor",
        "hidden": false
      },
      {
        "name": "Hyper Cutter",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Voltorb": {
    "id": "100",
    "fullName": "Voltorb",
    "hp": 40,
    "attack": 30,
    "defense": 50,
    "specialAttack": 55,
    "specialDefense": 55,
    "speed": 100,
    "total": 330,
    "height": "50 cm",
    "weight": "10.4 kg",
    "category": "Ball Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Soundproof",
        "hidden": false
      },
      {
        "name": "Aftermath",
        "hidden": true
      }
    ]
  },
  "Electrode": {
    "id": "101",
    "fullName": "Electrode",
    "hp": 60,
    "attack": 50,
    "defense": 70,
    "specialAttack": 80,
    "specialDefense": 80,
    "speed": 140,
    "total": 480,
    "height": "120 cm",
    "weight": "66.6 kg",
    "category": "Ball Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Soundproof",
        "hidden": false
      },
      {
        "name": "Aftermath",
        "hidden": true
      }
    ]
  },
  "Exeggcute": {
    "id": "102",
    "fullName": "Exeggcute",
    "hp": 60,
    "attack": 40,
    "defense": 80,
    "specialAttack": 60,
    "specialDefense": 45,
    "speed": 40,
    "total": 325,
    "height": "40 cm",
    "weight": "2.5 kg",
    "category": "Egg Pokémon",
    "types": [
      "GRASS",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Harvest",
        "hidden": true
      }
    ]
  },
  "Exeggutor": {
    "id": "103",
    "fullName": "Exeggutor",
    "hp": 95,
    "attack": 95,
    "defense": 85,
    "specialAttack": 125,
    "specialDefense": 65,
    "speed": 55,
    "total": 520,
    "height": "200 cm",
    "weight": "120 kg",
    "category": "Coconut Pokémon",
    "types": [
      "GRASS",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Harvest",
        "hidden": true
      }
    ]
  },
  "Cubone": {
    "id": "104",
    "fullName": "Cubone",
    "hp": 50,
    "attack": 50,
    "defense": 95,
    "specialAttack": 40,
    "specialDefense": 50,
    "speed": 35,
    "total": 320,
    "height": "40 cm",
    "weight": "6.5 kg",
    "category": "Lonely Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Lightning Rod",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Battle Armor",
        "hidden": true
      }
    ]
  },
  "Marowak": {
    "id": "105",
    "fullName": "Marowak",
    "hp": 60,
    "attack": 80,
    "defense": 110,
    "specialAttack": 50,
    "specialDefense": 80,
    "speed": 45,
    "total": 425,
    "height": "100 cm",
    "weight": "45 kg",
    "category": "Bone Keeper Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Lightning Rod",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Battle Armor",
        "hidden": true
      }
    ]
  },
  "Hitmonlee": {
    "id": "106",
    "fullName": "Hitmonlee",
    "hp": 50,
    "attack": 120,
    "defense": 53,
    "specialAttack": 35,
    "specialDefense": 110,
    "speed": 87,
    "total": 455,
    "height": "150 cm",
    "weight": "49.8 kg",
    "category": "Kicking Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Limber",
        "hidden": false
      },
      {
        "name": "Reckless",
        "hidden": false
      },
      {
        "name": "Unburden",
        "hidden": true
      }
    ]
  },
  "Hitmonchan": {
    "id": "107",
    "fullName": "Hitmonchan",
    "hp": 50,
    "attack": 105,
    "defense": 79,
    "specialAttack": 35,
    "specialDefense": 110,
    "speed": 76,
    "total": 455,
    "height": "140 cm",
    "weight": "50.2 kg",
    "category": "Punching Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Iron Fist",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": true
      }
    ]
  },
  "Lickitung": {
    "id": "108",
    "fullName": "Lickitung",
    "hp": 90,
    "attack": 55,
    "defense": 75,
    "specialAttack": 60,
    "specialDefense": 75,
    "speed": 30,
    "total": 385,
    "height": "120 cm",
    "weight": "65.5 kg",
    "category": "Licking Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Own Tempo",
        "hidden": false
      },
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Cloud Nine",
        "hidden": true
      }
    ]
  },
  "Koffing": {
    "id": "109",
    "fullName": "Koffing",
    "hp": 40,
    "attack": 65,
    "defense": 95,
    "specialAttack": 60,
    "specialDefense": 45,
    "speed": 35,
    "total": 340,
    "height": "60 cm",
    "weight": "1 kg",
    "category": "Poison Gas Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Stench",
        "hidden": true
      }
    ]
  },
  "Weezing": {
    "id": "110",
    "fullName": "Weezing",
    "hp": 65,
    "attack": 90,
    "defense": 120,
    "specialAttack": 85,
    "specialDefense": 70,
    "speed": 60,
    "total": 490,
    "height": "120 cm",
    "weight": "9.5 kg",
    "category": "Poison Gas Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Stench",
        "hidden": true
      }
    ]
  },
  "Rhyhorn": {
    "id": "111",
    "fullName": "Rhyhorn",
    "hp": 80,
    "attack": 85,
    "defense": 95,
    "specialAttack": 30,
    "specialDefense": 30,
    "speed": 25,
    "total": 345,
    "height": "100 cm",
    "weight": "115 kg",
    "category": "Spikes Pokémon",
    "types": [
      "GROUND",
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Lightning Rod",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Reckless",
        "hidden": true
      }
    ]
  },
  "Rhydon": {
    "id": "112",
    "fullName": "Rhydon",
    "hp": 105,
    "attack": 130,
    "defense": 120,
    "specialAttack": 45,
    "specialDefense": 45,
    "speed": 40,
    "total": 485,
    "height": "190 cm",
    "weight": "120 kg",
    "category": "Drill Pokémon",
    "types": [
      "GROUND",
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Lightning Rod",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Reckless",
        "hidden": true
      }
    ]
  },
  "Chansey": {
    "id": "113",
    "fullName": "Chansey",
    "hp": 250,
    "attack": 5,
    "defense": 5,
    "specialAttack": 35,
    "specialDefense": 105,
    "speed": 50,
    "total": 450,
    "height": "110 cm",
    "weight": "34.6 kg",
    "category": "Egg Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Serene Grace",
        "hidden": false
      },
      {
        "name": "Healer",
        "hidden": true
      }
    ]
  },
  "Tangela": {
    "id": "114",
    "fullName": "Tangela",
    "hp": 65,
    "attack": 55,
    "defense": 115,
    "specialAttack": 100,
    "specialDefense": 40,
    "speed": 60,
    "total": 435,
    "height": "100 cm",
    "weight": "35 kg",
    "category": "Vine Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Kangaskhan": {
    "id": "115",
    "fullName": "Kangaskhan",
    "hp": 105,
    "attack": 95,
    "defense": 80,
    "specialAttack": 40,
    "specialDefense": 80,
    "speed": 90,
    "total": 490,
    "height": "220 cm",
    "weight": "80 kg",
    "category": "Parent Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Scrappy",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": true
      }
    ]
  },
  "Horsea": {
    "id": "116",
    "fullName": "Horsea",
    "hp": 30,
    "attack": 40,
    "defense": 70,
    "specialAttack": 70,
    "specialDefense": 25,
    "speed": 60,
    "total": 295,
    "height": "40 cm",
    "weight": "8 kg",
    "category": "Dragon Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": true
      }
    ]
  },
  "Seadra": {
    "id": "117",
    "fullName": "Seadra",
    "hp": 55,
    "attack": 65,
    "defense": 95,
    "specialAttack": 95,
    "specialDefense": 45,
    "speed": 85,
    "total": 440,
    "height": "120 cm",
    "weight": "25 kg",
    "category": "Dragon Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": true
      }
    ]
  },
  "Goldeen": {
    "id": "118",
    "fullName": "Goldeen",
    "hp": 45,
    "attack": 67,
    "defense": 60,
    "specialAttack": 35,
    "specialDefense": 50,
    "speed": 63,
    "total": 320,
    "height": "60 cm",
    "weight": "15 kg",
    "category": "Goldfish Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Water Veil",
        "hidden": false
      },
      {
        "name": "Lightning Rod",
        "hidden": true
      }
    ]
  },
  "Seaking": {
    "id": "119",
    "fullName": "Seaking",
    "hp": 80,
    "attack": 92,
    "defense": 65,
    "specialAttack": 65,
    "specialDefense": 80,
    "speed": 68,
    "total": 450,
    "height": "130 cm",
    "weight": "39 kg",
    "category": "Goldfish Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Water Veil",
        "hidden": false
      },
      {
        "name": "Lightning Rod",
        "hidden": true
      }
    ]
  },
  "Staryu": {
    "id": "120",
    "fullName": "Staryu",
    "hp": 30,
    "attack": 45,
    "defense": 55,
    "specialAttack": 70,
    "specialDefense": 55,
    "speed": 85,
    "total": 340,
    "height": "80 cm",
    "weight": "34.5 kg",
    "category": "Star Shape Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Illuminate",
        "hidden": false
      },
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Analytic",
        "hidden": true
      }
    ]
  },
  "Starmie": {
    "id": "121",
    "fullName": "Starmie",
    "hp": 60,
    "attack": 75,
    "defense": 85,
    "specialAttack": 100,
    "specialDefense": 85,
    "speed": 115,
    "total": 520,
    "height": "110 cm",
    "weight": "80 kg",
    "category": "Mysterious Pokémon",
    "types": [
      "WATER",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Illuminate",
        "hidden": false
      },
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Analytic",
        "hidden": true
      }
    ]
  },
  "Mr. Mime": {
    "id": "122",
    "fullName": "Mr. Mime",
    "hp": 40,
    "attack": 45,
    "defense": 65,
    "specialAttack": 100,
    "specialDefense": 120,
    "speed": 90,
    "total": 460,
    "height": "130 cm",
    "weight": "54.5 kg",
    "category": "Barrier Pokémon",
    "types": [
      "PSYCHIC",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Soundproof",
        "hidden": false
      },
      {
        "name": "Filter",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": true
      }
    ]
  },
  "Scyther": {
    "id": "123",
    "fullName": "Scyther",
    "hp": 70,
    "attack": 110,
    "defense": 80,
    "specialAttack": 55,
    "specialDefense": 80,
    "speed": 105,
    "total": 500,
    "height": "150 cm",
    "weight": "56 kg",
    "category": "Mantis Pokémon",
    "types": [
      "BUG",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": false
      },
      {
        "name": "Steadfast",
        "hidden": true
      }
    ]
  },
  "Jynx": {
    "id": "124",
    "fullName": "Jynx",
    "hp": 65,
    "attack": 50,
    "defense": 35,
    "specialAttack": 115,
    "specialDefense": 95,
    "speed": 95,
    "total": 455,
    "height": "140 cm",
    "weight": "40.6 kg",
    "category": "Human Shape Pokémon",
    "types": [
      "ICE",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Forewarn",
        "hidden": false
      },
      {
        "name": "Dry Skin",
        "hidden": true
      }
    ]
  },
  "Electabuzz": {
    "id": "125",
    "fullName": "Electabuzz",
    "hp": 65,
    "attack": 83,
    "defense": 57,
    "specialAttack": 95,
    "specialDefense": 85,
    "speed": 105,
    "total": 490,
    "height": "110 cm",
    "weight": "30 kg",
    "category": "Electric Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": true
      }
    ]
  },
  "Magmar": {
    "id": "126",
    "fullName": "Magmar",
    "hp": 65,
    "attack": 95,
    "defense": 57,
    "specialAttack": 100,
    "specialDefense": 85,
    "speed": 93,
    "total": 495,
    "height": "130 cm",
    "weight": "44.5 kg",
    "category": "Spitfire Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": true
      }
    ]
  },
  "Pinsir": {
    "id": "127",
    "fullName": "Pinsir",
    "hp": 65,
    "attack": 125,
    "defense": 100,
    "specialAttack": 55,
    "specialDefense": 70,
    "speed": 85,
    "total": 500,
    "height": "150 cm",
    "weight": "55 kg",
    "category": "Stag Beetle Pokémon",
    "types": [
      "BUG"
    ],
    "abilities": [
      {
        "name": "Hyper Cutter",
        "hidden": false
      },
      {
        "name": "Mold Breaker",
        "hidden": false
      },
      {
        "name": "Moxie",
        "hidden": true
      }
    ]
  },
  "Tauros": {
    "id": "128",
    "fullName": "Tauros",
    "hp": 75,
    "attack": 100,
    "defense": 95,
    "specialAttack": 40,
    "specialDefense": 70,
    "speed": 110,
    "total": 490,
    "height": "140 cm",
    "weight": "88.4 kg",
    "category": "Wild Bull Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Anger Point",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Magikarp": {
    "id": "129",
    "fullName": "Magikarp",
    "hp": 20,
    "attack": 10,
    "defense": 55,
    "specialAttack": 15,
    "specialDefense": 20,
    "speed": 80,
    "total": 200,
    "height": "90 cm",
    "weight": "10 kg",
    "category": "Fish Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Rattled",
        "hidden": true
      }
    ]
  },
  "Gyarados": {
    "id": "130",
    "fullName": "Gyarados",
    "hp": 95,
    "attack": 125,
    "defense": 79,
    "specialAttack": 60,
    "specialDefense": 100,
    "speed": 81,
    "total": 540,
    "height": "650 cm",
    "weight": "235 kg",
    "category": "Atrocious Pokémon",
    "types": [
      "WATER",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Moxie",
        "hidden": true
      }
    ]
  },
  "Lapras": {
    "id": "131",
    "fullName": "Lapras",
    "hp": 130,
    "attack": 85,
    "defense": 80,
    "specialAttack": 85,
    "specialDefense": 95,
    "speed": 60,
    "total": 535,
    "height": "250 cm",
    "weight": "220 kg",
    "category": "Transport Pokémon",
    "types": [
      "WATER",
      "ICE"
    ],
    "abilities": [
      {
        "name": "Shell Armor",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Hydration",
        "hidden": true
      }
    ]
  },
  "Ditto": {
    "id": "132",
    "fullName": "Ditto",
    "hp": 48,
    "attack": 48,
    "defense": 48,
    "specialAttack": 48,
    "specialDefense": 48,
    "speed": 48,
    "total": 288,
    "height": "30 cm",
    "weight": "4 kg",
    "category": "Transform Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Limber",
        "hidden": false
      },
      {
        "name": "Imposter",
        "hidden": true
      }
    ]
  },
  "Eevee": {
    "id": "133",
    "fullName": "Eevee",
    "hp": 55,
    "attack": 55,
    "defense": 50,
    "specialAttack": 45,
    "specialDefense": 65,
    "speed": 55,
    "total": 325,
    "height": "30 cm",
    "weight": "6.5 kg",
    "category": "Evolution Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Adaptability",
        "hidden": false
      },
      {
        "name": "Anticipation",
        "hidden": true
      }
    ]
  },
  "Vaporeon": {
    "id": "134",
    "fullName": "Vaporeon",
    "hp": 130,
    "attack": 65,
    "defense": 60,
    "specialAttack": 110,
    "specialDefense": 95,
    "speed": 65,
    "total": 525,
    "height": "100 cm",
    "weight": "29 kg",
    "category": "Bubble Jet Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Hydration",
        "hidden": true
      }
    ]
  },
  "Jolteon": {
    "id": "135",
    "fullName": "Jolteon",
    "hp": 65,
    "attack": 65,
    "defense": 60,
    "specialAttack": 110,
    "specialDefense": 95,
    "speed": 130,
    "total": 525,
    "height": "80 cm",
    "weight": "24.5 kg",
    "category": "Lightning Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Volt Absorb",
        "hidden": false
      },
      {
        "name": "Quick Feet",
        "hidden": true
      }
    ]
  },
  "Flareon": {
    "id": "136",
    "fullName": "Flareon",
    "hp": 65,
    "attack": 130,
    "defense": 60,
    "specialAttack": 95,
    "specialDefense": 110,
    "speed": 65,
    "total": 525,
    "height": "90 cm",
    "weight": "25 kg",
    "category": "Flame Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": true
      }
    ]
  },
  "Porygon": {
    "id": "137",
    "fullName": "Porygon",
    "hp": 65,
    "attack": 60,
    "defense": 70,
    "specialAttack": 85,
    "specialDefense": 75,
    "speed": 40,
    "total": 395,
    "height": "80 cm",
    "weight": "36.5 kg",
    "category": "Virtual Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Trace",
        "hidden": false
      },
      {
        "name": "Download",
        "hidden": false
      },
      {
        "name": "Analytic",
        "hidden": true
      }
    ]
  },
  "Omanyte": {
    "id": "138",
    "fullName": "Omanyte",
    "hp": 35,
    "attack": 40,
    "defense": 100,
    "specialAttack": 90,
    "specialDefense": 55,
    "speed": 35,
    "total": 355,
    "height": "40 cm",
    "weight": "7.5 kg",
    "category": "Spiral Pokémon",
    "types": [
      "ROCK",
      "WATER"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Shell Armor",
        "hidden": false
      },
      {
        "name": "Weak Armor",
        "hidden": true
      }
    ]
  },
  "Omastar": {
    "id": "139",
    "fullName": "Omastar",
    "hp": 70,
    "attack": 60,
    "defense": 125,
    "specialAttack": 115,
    "specialDefense": 70,
    "speed": 55,
    "total": 495,
    "height": "100 cm",
    "weight": "35 kg",
    "category": "Spiral Pokémon",
    "types": [
      "ROCK",
      "WATER"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Shell Armor",
        "hidden": false
      },
      {
        "name": "Weak Armor",
        "hidden": true
      }
    ]
  },
  "Kabuto": {
    "id": "140",
    "fullName": "Kabuto",
    "hp": 30,
    "attack": 80,
    "defense": 90,
    "specialAttack": 55,
    "specialDefense": 45,
    "speed": 55,
    "total": 355,
    "height": "50 cm",
    "weight": "11.5 kg",
    "category": "Shellfish Pokémon",
    "types": [
      "ROCK",
      "WATER"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Battle Armor",
        "hidden": false
      },
      {
        "name": "Weak Armor",
        "hidden": true
      }
    ]
  },
  "Kabutops": {
    "id": "141",
    "fullName": "Kabutops",
    "hp": 60,
    "attack": 115,
    "defense": 105,
    "specialAttack": 65,
    "specialDefense": 70,
    "speed": 80,
    "total": 495,
    "height": "130 cm",
    "weight": "40.5 kg",
    "category": "Shellfish Pokémon",
    "types": [
      "ROCK",
      "WATER"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Battle Armor",
        "hidden": false
      },
      {
        "name": "Weak Armor",
        "hidden": true
      }
    ]
  },
  "Aerodactyl": {
    "id": "142",
    "fullName": "Aerodactyl",
    "hp": 80,
    "attack": 105,
    "defense": 65,
    "specialAttack": 60,
    "specialDefense": 75,
    "speed": 130,
    "total": 515,
    "height": "180 cm",
    "weight": "59 kg",
    "category": "Fossil Pokémon",
    "types": [
      "ROCK",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Snorlax": {
    "id": "143",
    "fullName": "Snorlax",
    "hp": 160,
    "attack": 110,
    "defense": 65,
    "specialAttack": 65,
    "specialDefense": 110,
    "speed": 30,
    "total": 540,
    "height": "210 cm",
    "weight": "460 kg",
    "category": "Sleeping Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Thick Fat",
        "hidden": false
      },
      {
        "name": "Immunity",
        "hidden": false
      },
      {
        "name": "Gluttony",
        "hidden": true
      }
    ]
  },
  "Articuno": {
    "id": "144",
    "fullName": "Articuno",
    "hp": 90,
    "attack": 85,
    "defense": 100,
    "specialAttack": 95,
    "specialDefense": 125,
    "speed": 85,
    "total": 580,
    "height": "170 cm",
    "weight": "55.4 kg",
    "category": "Freeze Pokémon",
    "types": [
      "ICE",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Snow Cloak",
        "hidden": true
      }
    ]
  },
  "Zapdos": {
    "id": "145",
    "fullName": "Zapdos",
    "hp": 90,
    "attack": 90,
    "defense": 85,
    "specialAttack": 125,
    "specialDefense": 90,
    "speed": 100,
    "total": 580,
    "height": "160 cm",
    "weight": "52.6 kg",
    "category": "Electric Pokémon",
    "types": [
      "ELECTRIC",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Lightning Rod",
        "hidden": true
      }
    ]
  },
  "Moltres": {
    "id": "146",
    "fullName": "Moltres",
    "hp": 90,
    "attack": 100,
    "defense": 90,
    "specialAttack": 125,
    "specialDefense": 85,
    "speed": 90,
    "total": 580,
    "height": "200 cm",
    "weight": "60 kg",
    "category": "Flame Pokémon",
    "types": [
      "FIRE",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Flame Body",
        "hidden": true
      }
    ]
  },
  "Dratini": {
    "id": "147",
    "fullName": "Dratini",
    "hp": 41,
    "attack": 64,
    "defense": 45,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 50,
    "total": 300,
    "height": "180 cm",
    "weight": "3.3 kg",
    "category": "Dragon Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Shed Skin",
        "hidden": false
      },
      {
        "name": "Marvel Scale",
        "hidden": true
      }
    ]
  },
  "Dragonair": {
    "id": "148",
    "fullName": "Dragonair",
    "hp": 61,
    "attack": 84,
    "defense": 65,
    "specialAttack": 70,
    "specialDefense": 70,
    "speed": 70,
    "total": 420,
    "height": "400 cm",
    "weight": "16.5 kg",
    "category": "Dragon Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Shed Skin",
        "hidden": false
      },
      {
        "name": "Marvel Scale",
        "hidden": true
      }
    ]
  },
  "Dragonite": {
    "id": "149",
    "fullName": "Dragonite",
    "hp": 91,
    "attack": 134,
    "defense": 95,
    "specialAttack": 100,
    "specialDefense": 100,
    "speed": 80,
    "total": 600,
    "height": "220 cm",
    "weight": "210 kg",
    "category": "Dragon Pokémon",
    "types": [
      "DRAGON",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Multiscale",
        "hidden": true
      }
    ]
  },
  "Mewtwo": {
    "id": "150",
    "fullName": "Mewtwo",
    "hp": 106,
    "attack": 110,
    "defense": 90,
    "specialAttack": 154,
    "specialDefense": 90,
    "speed": 130,
    "total": 680,
    "height": "200 cm",
    "weight": "122 kg",
    "category": "Genetic Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Immunity",
        "hidden": true
      }
    ]
  },
  "Mew": {
    "id": "151",
    "fullName": "Mew",
    "hp": 100,
    "attack": 100,
    "defense": 100,
    "specialAttack": 100,
    "specialDefense": 100,
    "speed": 100,
    "total": 600,
    "height": "40 cm",
    "weight": "4 kg",
    "category": "New Species Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Synchronize",
        "hidden": true
      }
    ]
  },
  "Chikorita": {
    "id": "152",
    "fullName": "Chikorita",
    "hp": 45,
    "attack": 49,
    "defense": 65,
    "specialAttack": 49,
    "specialDefense": 65,
    "speed": 45,
    "total": 318,
    "height": "90 cm",
    "weight": "6.4 kg",
    "category": "Leaf Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": true
      }
    ]
  },
  "Bayleef": {
    "id": "153",
    "fullName": "Bayleef",
    "hp": 60,
    "attack": 62,
    "defense": 80,
    "specialAttack": 63,
    "specialDefense": 80,
    "speed": 60,
    "total": 405,
    "height": "120 cm",
    "weight": "15.8 kg",
    "category": "Leaf Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": true
      }
    ]
  },
  "Meganium": {
    "id": "154",
    "fullName": "Meganium",
    "hp": 80,
    "attack": 82,
    "defense": 100,
    "specialAttack": 83,
    "specialDefense": 100,
    "speed": 80,
    "total": 525,
    "height": "180 cm",
    "weight": "100.5 kg",
    "category": "Herb Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": true
      }
    ]
  },
  "Cyndaquil": {
    "id": "155",
    "fullName": "Cyndaquil",
    "hp": 39,
    "attack": 52,
    "defense": 43,
    "specialAttack": 60,
    "specialDefense": 50,
    "speed": 65,
    "total": 309,
    "height": "50 cm",
    "weight": "7.9 kg",
    "category": "Fire Mouse Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Flash Fire",
        "hidden": true
      }
    ]
  },
  "Quilava": {
    "id": "156",
    "fullName": "Quilava",
    "hp": 58,
    "attack": 64,
    "defense": 58,
    "specialAttack": 80,
    "specialDefense": 65,
    "speed": 80,
    "total": 405,
    "height": "90 cm",
    "weight": "19 kg",
    "category": "Volcano Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Flash Fire",
        "hidden": true
      }
    ]
  },
  "Typhlosion": {
    "id": "157",
    "fullName": "Typhlosion",
    "hp": 78,
    "attack": 84,
    "defense": 78,
    "specialAttack": 109,
    "specialDefense": 85,
    "speed": 100,
    "total": 534,
    "height": "170 cm",
    "weight": "79.5 kg",
    "category": "Volcano Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Flash Fire",
        "hidden": true
      }
    ]
  },
  "Totodile": {
    "id": "158",
    "fullName": "Totodile",
    "hp": 50,
    "attack": 65,
    "defense": 64,
    "specialAttack": 44,
    "specialDefense": 48,
    "speed": 43,
    "total": 314,
    "height": "60 cm",
    "weight": "9.5 kg",
    "category": "Big Jaw Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Croconaw": {
    "id": "159",
    "fullName": "Croconaw",
    "hp": 65,
    "attack": 80,
    "defense": 80,
    "specialAttack": 59,
    "specialDefense": 63,
    "speed": 58,
    "total": 405,
    "height": "110 cm",
    "weight": "25 kg",
    "category": "Big Jaw Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Feraligatr": {
    "id": "160",
    "fullName": "Feraligatr",
    "hp": 85,
    "attack": 105,
    "defense": 100,
    "specialAttack": 79,
    "specialDefense": 83,
    "speed": 78,
    "total": 530,
    "height": "230 cm",
    "weight": "88.8 kg",
    "category": "Big Jaw Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Sentret": {
    "id": "161",
    "fullName": "Sentret",
    "hp": 35,
    "attack": 46,
    "defense": 34,
    "specialAttack": 35,
    "specialDefense": 45,
    "speed": 20,
    "total": 215,
    "height": "80 cm",
    "weight": "6 kg",
    "category": "Scout Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": true
      }
    ]
  },
  "Furret": {
    "id": "162",
    "fullName": "Furret",
    "hp": 85,
    "attack": 76,
    "defense": 64,
    "specialAttack": 45,
    "specialDefense": 55,
    "speed": 90,
    "total": 415,
    "height": "180 cm",
    "weight": "32.5 kg",
    "category": "Long Body Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": true
      }
    ]
  },
  "Hoothoot": {
    "id": "163",
    "fullName": "Hoothoot",
    "hp": 60,
    "attack": 30,
    "defense": 30,
    "specialAttack": 36,
    "specialDefense": 56,
    "speed": 50,
    "total": 262,
    "height": "70 cm",
    "weight": "21.2 kg",
    "category": "Owl Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Tinted Lens",
        "hidden": true
      }
    ]
  },
  "Noctowl": {
    "id": "164",
    "fullName": "Noctowl",
    "hp": 100,
    "attack": 50,
    "defense": 50,
    "specialAttack": 76,
    "specialDefense": 96,
    "speed": 70,
    "total": 442,
    "height": "160 cm",
    "weight": "40.8 kg",
    "category": "Owl Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Tinted Lens",
        "hidden": true
      }
    ]
  },
  "Ledyba": {
    "id": "165",
    "fullName": "Ledyba",
    "hp": 40,
    "attack": 20,
    "defense": 30,
    "specialAttack": 40,
    "specialDefense": 80,
    "speed": 55,
    "total": 265,
    "height": "100 cm",
    "weight": "10.8 kg",
    "category": "Five Star Pokémon",
    "types": [
      "BUG",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Rattled",
        "hidden": true
      }
    ]
  },
  "Ledian": {
    "id": "166",
    "fullName": "Ledian",
    "hp": 55,
    "attack": 35,
    "defense": 50,
    "specialAttack": 55,
    "specialDefense": 110,
    "speed": 85,
    "total": 390,
    "height": "140 cm",
    "weight": "35.6 kg",
    "category": "Five Star Pokémon",
    "types": [
      "BUG",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Iron Fist",
        "hidden": true
      }
    ]
  },
  "Spinarak": {
    "id": "167",
    "fullName": "Spinarak",
    "hp": 40,
    "attack": 60,
    "defense": 40,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 30,
    "total": 250,
    "height": "50 cm",
    "weight": "8.5 kg",
    "category": "String Spit Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": true
      }
    ]
  },
  "Ariados": {
    "id": "168",
    "fullName": "Ariados",
    "hp": 70,
    "attack": 90,
    "defense": 70,
    "specialAttack": 60,
    "specialDefense": 60,
    "speed": 40,
    "total": 390,
    "height": "110 cm",
    "weight": "33.5 kg",
    "category": "Long Leg Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": true
      }
    ]
  },
  "Crobat": {
    "id": "169",
    "fullName": "Crobat",
    "hp": 85,
    "attack": 90,
    "defense": 80,
    "specialAttack": 70,
    "specialDefense": 80,
    "speed": 130,
    "total": 535,
    "height": "180 cm",
    "weight": "75 kg",
    "category": "Bat Pokémon",
    "types": [
      "POISON",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": true
      }
    ]
  },
  "Chinchou": {
    "id": "170",
    "fullName": "Chinchou",
    "hp": 75,
    "attack": 38,
    "defense": 38,
    "specialAttack": 56,
    "specialDefense": 56,
    "speed": 67,
    "total": 330,
    "height": "50 cm",
    "weight": "12 kg",
    "category": "Angler Pokémon",
    "types": [
      "WATER",
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Illuminate",
        "hidden": false
      },
      {
        "name": "Volt Absorb",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": true
      }
    ]
  },
  "Lanturn": {
    "id": "171",
    "fullName": "Lanturn",
    "hp": 125,
    "attack": 58,
    "defense": 58,
    "specialAttack": 76,
    "specialDefense": 76,
    "speed": 67,
    "total": 460,
    "height": "120 cm",
    "weight": "22.5 kg",
    "category": "Light Pokémon",
    "types": [
      "WATER",
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Illuminate",
        "hidden": false
      },
      {
        "name": "Volt Absorb",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": true
      }
    ]
  },
  "Pichu": {
    "id": "172",
    "fullName": "Pichu",
    "hp": 20,
    "attack": 40,
    "defense": 15,
    "specialAttack": 35,
    "specialDefense": 35,
    "speed": 60,
    "total": 205,
    "height": "30 cm",
    "weight": "2 kg",
    "category": "Tiny Mouse Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Lightning Rod",
        "hidden": true
      }
    ]
  },
  "Cleffa": {
    "id": "173",
    "fullName": "Cleffa",
    "hp": 50,
    "attack": 25,
    "defense": 28,
    "specialAttack": 45,
    "specialDefense": 55,
    "speed": 15,
    "total": 218,
    "height": "30 cm",
    "weight": "3 kg",
    "category": "Star Shape Pokémon",
    "types": [
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Magic Guard",
        "hidden": false
      },
      {
        "name": "Cute Charm",
        "hidden": false
      },
      {
        "name": "Friend Guard",
        "hidden": true
      }
    ]
  },
  "Igglybuff": {
    "id": "174",
    "fullName": "Igglybuff",
    "hp": 90,
    "attack": 30,
    "defense": 15,
    "specialAttack": 40,
    "specialDefense": 20,
    "speed": 15,
    "total": 210,
    "height": "30 cm",
    "weight": "1 kg",
    "category": "Balloon Pokémon",
    "types": [
      "NORMAL",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Cute Charm",
        "hidden": false
      },
      {
        "name": "Friend Guard",
        "hidden": true
      }
    ]
  },
  "Togepi": {
    "id": "175",
    "fullName": "Togepi",
    "hp": 35,
    "attack": 20,
    "defense": 65,
    "specialAttack": 40,
    "specialDefense": 65,
    "speed": 20,
    "total": 245,
    "height": "30 cm",
    "weight": "1.5 kg",
    "category": "Spike Ball Pokémon",
    "types": [
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Hustle",
        "hidden": false
      },
      {
        "name": "Serene Grace",
        "hidden": false
      },
      {
        "name": "Super Luck",
        "hidden": true
      }
    ]
  },
  "Togetic": {
    "id": "176",
    "fullName": "Togetic",
    "hp": 55,
    "attack": 40,
    "defense": 85,
    "specialAttack": 80,
    "specialDefense": 105,
    "speed": 40,
    "total": 405,
    "height": "60 cm",
    "weight": "3.2 kg",
    "category": "Happiness Pokémon",
    "types": [
      "FAIRY",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Hustle",
        "hidden": false
      },
      {
        "name": "Serene Grace",
        "hidden": false
      },
      {
        "name": "Super Luck",
        "hidden": true
      }
    ]
  },
  "Natu": {
    "id": "177",
    "fullName": "Natu",
    "hp": 40,
    "attack": 50,
    "defense": 45,
    "specialAttack": 70,
    "specialDefense": 45,
    "speed": 70,
    "total": 320,
    "height": "20 cm",
    "weight": "2 kg",
    "category": "Tiny Bird Pokémon",
    "types": [
      "PSYCHIC",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Magic Bounce",
        "hidden": true
      }
    ]
  },
  "Xatu": {
    "id": "178",
    "fullName": "Xatu",
    "hp": 65,
    "attack": 75,
    "defense": 70,
    "specialAttack": 95,
    "specialDefense": 70,
    "speed": 95,
    "total": 470,
    "height": "150 cm",
    "weight": "15 kg",
    "category": "Mystic Pokémon",
    "types": [
      "PSYCHIC",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Magic Bounce",
        "hidden": true
      }
    ]
  },
  "Mareep": {
    "id": "179",
    "fullName": "Mareep",
    "hp": 55,
    "attack": 40,
    "defense": 40,
    "specialAttack": 65,
    "specialDefense": 45,
    "speed": 35,
    "total": 280,
    "height": "60 cm",
    "weight": "7.8 kg",
    "category": "Wool Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Plus",
        "hidden": true
      }
    ]
  },
  "Flaaffy": {
    "id": "180",
    "fullName": "Flaaffy",
    "hp": 70,
    "attack": 55,
    "defense": 55,
    "specialAttack": 80,
    "specialDefense": 60,
    "speed": 45,
    "total": 365,
    "height": "80 cm",
    "weight": "13.3 kg",
    "category": "Wool Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Plus",
        "hidden": true
      }
    ]
  },
  "Ampharos": {
    "id": "181",
    "fullName": "Ampharos",
    "hp": 90,
    "attack": 75,
    "defense": 75,
    "specialAttack": 115,
    "specialDefense": 90,
    "speed": 55,
    "total": 500,
    "height": "140 cm",
    "weight": "61.5 kg",
    "category": "Light Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Plus",
        "hidden": true
      }
    ]
  },
  "Bellossom": {
    "id": "182",
    "fullName": "Bellossom",
    "hp": 75,
    "attack": 80,
    "defense": 85,
    "specialAttack": 90,
    "specialDefense": 100,
    "speed": 50,
    "total": 480,
    "height": "40 cm",
    "weight": "5.8 kg",
    "category": "Flower Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Healer",
        "hidden": true
      }
    ]
  },
  "Marill": {
    "id": "183",
    "fullName": "Marill",
    "hp": 70,
    "attack": 20,
    "defense": 50,
    "specialAttack": 20,
    "specialDefense": 50,
    "speed": 40,
    "total": 250,
    "height": "40 cm",
    "weight": "8.5 kg",
    "category": "Aqua Mouse Pokémon",
    "types": [
      "WATER",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Huge Power",
        "hidden": false
      },
      {
        "name": "Thick Fat",
        "hidden": false
      },
      {
        "name": "Sap Sipper",
        "hidden": true
      }
    ]
  },
  "Azumarill": {
    "id": "184",
    "fullName": "Azumarill",
    "hp": 100,
    "attack": 50,
    "defense": 80,
    "specialAttack": 50,
    "specialDefense": 80,
    "speed": 50,
    "total": 410,
    "height": "80 cm",
    "weight": "28.5 kg",
    "category": "Aqua Rabbit Pokémon",
    "types": [
      "WATER",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Huge Power",
        "hidden": false
      },
      {
        "name": "Thick Fat",
        "hidden": false
      },
      {
        "name": "Sap Sipper",
        "hidden": true
      }
    ]
  },
  "Sudowoodo": {
    "id": "185",
    "fullName": "Sudowoodo",
    "hp": 70,
    "attack": 100,
    "defense": 115,
    "specialAttack": 30,
    "specialDefense": 65,
    "speed": 30,
    "total": 410,
    "height": "120 cm",
    "weight": "38 kg",
    "category": "Imitation Pokémon",
    "types": [
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Rattled",
        "hidden": true
      }
    ]
  },
  "Politoed": {
    "id": "186",
    "fullName": "Politoed",
    "hp": 90,
    "attack": 75,
    "defense": 75,
    "specialAttack": 90,
    "specialDefense": 100,
    "speed": 70,
    "total": 500,
    "height": "110 cm",
    "weight": "33.9 kg",
    "category": "Frog Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": false
      },
      {
        "name": "Drizzle",
        "hidden": true
      }
    ]
  },
  "Hoppip": {
    "id": "187",
    "fullName": "Hoppip",
    "hp": 35,
    "attack": 35,
    "defense": 40,
    "specialAttack": 35,
    "specialDefense": 55,
    "speed": 50,
    "total": 250,
    "height": "40 cm",
    "weight": "0.5 kg",
    "category": "Cottonweed Pokémon",
    "types": [
      "GRASS",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": true
      }
    ]
  },
  "Skiploom": {
    "id": "188",
    "fullName": "Skiploom",
    "hp": 55,
    "attack": 45,
    "defense": 50,
    "specialAttack": 45,
    "specialDefense": 65,
    "speed": 80,
    "total": 340,
    "height": "60 cm",
    "weight": "1 kg",
    "category": "Cottonweed Pokémon",
    "types": [
      "GRASS",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": true
      }
    ]
  },
  "Jumpluff": {
    "id": "189",
    "fullName": "Jumpluff",
    "hp": 75,
    "attack": 55,
    "defense": 70,
    "specialAttack": 55,
    "specialDefense": 85,
    "speed": 110,
    "total": 450,
    "height": "80 cm",
    "weight": "3 kg",
    "category": "Cottonweed Pokémon",
    "types": [
      "GRASS",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": true
      }
    ]
  },
  "Aipom": {
    "id": "190",
    "fullName": "Aipom",
    "hp": 55,
    "attack": 70,
    "defense": 55,
    "specialAttack": 40,
    "specialDefense": 55,
    "speed": 85,
    "total": 360,
    "height": "80 cm",
    "weight": "11.5 kg",
    "category": "Long Tail Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Pickup",
        "hidden": false
      },
      {
        "name": "Skill Link",
        "hidden": true
      }
    ]
  },
  "Sunkern": {
    "id": "191",
    "fullName": "Sunkern",
    "hp": 30,
    "attack": 30,
    "defense": 30,
    "specialAttack": 30,
    "specialDefense": 30,
    "speed": 30,
    "total": 180,
    "height": "30 cm",
    "weight": "1.8 kg",
    "category": "Seed Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Solar Power",
        "hidden": false
      },
      {
        "name": "Early Bird",
        "hidden": true
      }
    ]
  },
  "Sunflora": {
    "id": "192",
    "fullName": "Sunflora",
    "hp": 75,
    "attack": 75,
    "defense": 55,
    "specialAttack": 105,
    "specialDefense": 85,
    "speed": 30,
    "total": 425,
    "height": "80 cm",
    "weight": "8.5 kg",
    "category": "Sun Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Solar Power",
        "hidden": false
      },
      {
        "name": "Early Bird",
        "hidden": true
      }
    ]
  },
  "Yanma": {
    "id": "193",
    "fullName": "Yanma",
    "hp": 65,
    "attack": 65,
    "defense": 45,
    "specialAttack": 75,
    "specialDefense": 45,
    "speed": 95,
    "total": 390,
    "height": "120 cm",
    "weight": "38 kg",
    "category": "Clear Wing Pokémon",
    "types": [
      "BUG",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Speed Boost",
        "hidden": false
      },
      {
        "name": "Compound Eyes",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": true
      }
    ]
  },
  "Wooper": {
    "id": "194",
    "fullName": "Wooper",
    "hp": 55,
    "attack": 45,
    "defense": 45,
    "specialAttack": 25,
    "specialDefense": 25,
    "speed": 15,
    "total": 210,
    "height": "40 cm",
    "weight": "8.5 kg",
    "category": "Water Fish Pokémon",
    "types": [
      "WATER",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Damp",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Unaware",
        "hidden": true
      }
    ]
  },
  "Quagsire": {
    "id": "195",
    "fullName": "Quagsire",
    "hp": 95,
    "attack": 85,
    "defense": 85,
    "specialAttack": 65,
    "specialDefense": 65,
    "speed": 35,
    "total": 430,
    "height": "140 cm",
    "weight": "75 kg",
    "category": "Water Fish Pokémon",
    "types": [
      "WATER",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Damp",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Unaware",
        "hidden": true
      }
    ]
  },
  "Espeon": {
    "id": "196",
    "fullName": "Espeon",
    "hp": 65,
    "attack": 65,
    "defense": 60,
    "specialAttack": 130,
    "specialDefense": 95,
    "speed": 110,
    "total": 525,
    "height": "90 cm",
    "weight": "26.5 kg",
    "category": "Sun Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Magic Bounce",
        "hidden": true
      }
    ]
  },
  "Umbreon": {
    "id": "197",
    "fullName": "Umbreon",
    "hp": 95,
    "attack": 65,
    "defense": 110,
    "specialAttack": 60,
    "specialDefense": 130,
    "speed": 65,
    "total": 525,
    "height": "100 cm",
    "weight": "27 kg",
    "category": "Moonlight Pokémon",
    "types": [
      "DARK"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": true
      }
    ]
  },
  "Murkrow": {
    "id": "198",
    "fullName": "Murkrow",
    "hp": 60,
    "attack": 85,
    "defense": 42,
    "specialAttack": 85,
    "specialDefense": 42,
    "speed": 91,
    "total": 405,
    "height": "50 cm",
    "weight": "2.1 kg",
    "category": "Darkness Pokémon",
    "types": [
      "DARK",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Super Luck",
        "hidden": false
      },
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Prankster",
        "hidden": true
      }
    ]
  },
  "Slowking": {
    "id": "199",
    "fullName": "Slowking",
    "hp": 95,
    "attack": 75,
    "defense": 80,
    "specialAttack": 100,
    "specialDefense": 110,
    "speed": 30,
    "total": 490,
    "height": "200 cm",
    "weight": "79.5 kg",
    "category": "Royal Pokémon",
    "types": [
      "WATER",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Own Tempo",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Misdreavus": {
    "id": "200",
    "fullName": "Misdreavus",
    "hp": 60,
    "attack": 60,
    "defense": 60,
    "specialAttack": 85,
    "specialDefense": 85,
    "speed": 85,
    "total": 435,
    "height": "70 cm",
    "weight": "1 kg",
    "category": "Screech Pokémon",
    "types": [
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Levitate",
        "hidden": true
      }
    ]
  },
  "Unown": {
    "id": "201",
    "fullName": "Unown",
    "hp": 48,
    "attack": 72,
    "defense": 48,
    "specialAttack": 72,
    "specialDefense": 48,
    "speed": 48,
    "total": 336,
    "height": "50 cm",
    "weight": "5 kg",
    "category": "Symbol Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Mummy",
        "hidden": true
      }
    ]
  },
  "Wobbuffet": {
    "id": "202",
    "fullName": "Wobbuffet",
    "hp": 190,
    "attack": 33,
    "defense": 58,
    "specialAttack": 33,
    "specialDefense": 58,
    "speed": 33,
    "total": 405,
    "height": "130 cm",
    "weight": "28.5 kg",
    "category": "Patient Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Shadow Tag",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Girafarig": {
    "id": "203",
    "fullName": "Girafarig",
    "hp": 70,
    "attack": 80,
    "defense": 65,
    "specialAttack": 90,
    "specialDefense": 65,
    "speed": 85,
    "total": 455,
    "height": "150 cm",
    "weight": "41.5 kg",
    "category": "Long Neck Pokémon",
    "types": [
      "NORMAL",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Sap Sipper",
        "hidden": true
      }
    ]
  },
  "Pineco": {
    "id": "204",
    "fullName": "Pineco",
    "hp": 50,
    "attack": 65,
    "defense": 90,
    "specialAttack": 35,
    "specialDefense": 35,
    "speed": 15,
    "total": 290,
    "height": "60 cm",
    "weight": "7.2 kg",
    "category": "Bagworm Pokémon",
    "types": [
      "BUG"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Overcoat",
        "hidden": true
      }
    ]
  },
  "Forretress": {
    "id": "205",
    "fullName": "Forretress",
    "hp": 75,
    "attack": 90,
    "defense": 140,
    "specialAttack": 60,
    "specialDefense": 60,
    "speed": 40,
    "total": 465,
    "height": "120 cm",
    "weight": "125.8 kg",
    "category": "Bagworm Pokémon",
    "types": [
      "BUG",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Overcoat",
        "hidden": true
      }
    ]
  },
  "Dunsparce": {
    "id": "206",
    "fullName": "Dunsparce",
    "hp": 100,
    "attack": 70,
    "defense": 70,
    "specialAttack": 65,
    "specialDefense": 65,
    "speed": 45,
    "total": 415,
    "height": "150 cm",
    "weight": "14 kg",
    "category": "Land Snake Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Serene Grace",
        "hidden": false
      },
      {
        "name": "Rattled",
        "hidden": true
      }
    ]
  },
  "Gligar": {
    "id": "207",
    "fullName": "Gligar",
    "hp": 65,
    "attack": 75,
    "defense": 105,
    "specialAttack": 35,
    "specialDefense": 65,
    "speed": 85,
    "total": 430,
    "height": "110 cm",
    "weight": "64.8 kg",
    "category": "FlyScorpion Pokémon",
    "types": [
      "GROUND",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Hyper Cutter",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Immunity",
        "hidden": true
      }
    ]
  },
  "Steelix": {
    "id": "208",
    "fullName": "Steelix",
    "hp": 75,
    "attack": 85,
    "defense": 200,
    "specialAttack": 55,
    "specialDefense": 65,
    "speed": 30,
    "total": 510,
    "height": "920 cm",
    "weight": "400 kg",
    "category": "Iron Snake Pokémon",
    "types": [
      "STEEL",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Snubbull": {
    "id": "209",
    "fullName": "Snubbull",
    "hp": 60,
    "attack": 80,
    "defense": 50,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 30,
    "total": 300,
    "height": "60 cm",
    "weight": "7.8 kg",
    "category": "Fairy Pokémon",
    "types": [
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Rattled",
        "hidden": true
      }
    ]
  },
  "Granbull": {
    "id": "210",
    "fullName": "Granbull",
    "hp": 90,
    "attack": 120,
    "defense": 75,
    "specialAttack": 60,
    "specialDefense": 60,
    "speed": 45,
    "total": 450,
    "height": "140 cm",
    "weight": "48.7 kg",
    "category": "Fairy Pokémon",
    "types": [
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Quick Feet",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Rattled",
        "hidden": true
      }
    ]
  },
  "Qwilfish": {
    "id": "211",
    "fullName": "Qwilfish",
    "hp": 65,
    "attack": 95,
    "defense": 75,
    "specialAttack": 55,
    "specialDefense": 55,
    "speed": 85,
    "total": 430,
    "height": "50 cm",
    "weight": "3.9 kg",
    "category": "Balloon Pokémon",
    "types": [
      "WATER",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": true
      }
    ]
  },
  "Scizor": {
    "id": "212",
    "fullName": "Scizor",
    "hp": 70,
    "attack": 130,
    "defense": 100,
    "specialAttack": 55,
    "specialDefense": 80,
    "speed": 65,
    "total": 500,
    "height": "180 cm",
    "weight": "118 kg",
    "category": "Pincer Pokémon",
    "types": [
      "BUG",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": false
      },
      {
        "name": "Light Metal",
        "hidden": true
      }
    ]
  },
  "Shuckle": {
    "id": "213",
    "fullName": "Shuckle",
    "hp": 20,
    "attack": 10,
    "defense": 230,
    "specialAttack": 10,
    "specialDefense": 230,
    "speed": 5,
    "total": 505,
    "height": "60 cm",
    "weight": "20.5 kg",
    "category": "Mold Pokémon",
    "types": [
      "BUG",
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Gluttony",
        "hidden": false
      },
      {
        "name": "Contrary",
        "hidden": true
      }
    ]
  },
  "Heracross": {
    "id": "214",
    "fullName": "Heracross",
    "hp": 80,
    "attack": 125,
    "defense": 75,
    "specialAttack": 40,
    "specialDefense": 95,
    "speed": 85,
    "total": 500,
    "height": "150 cm",
    "weight": "54 kg",
    "category": "Single Horn Pokémon",
    "types": [
      "BUG",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": false
      },
      {
        "name": "Moxie",
        "hidden": true
      }
    ]
  },
  "Sneasel": {
    "id": "215",
    "fullName": "Sneasel",
    "hp": 55,
    "attack": 95,
    "defense": 55,
    "specialAttack": 35,
    "specialDefense": 75,
    "speed": 115,
    "total": 430,
    "height": "90 cm",
    "weight": "28 kg",
    "category": "Sharp Claw Pokémon",
    "types": [
      "DARK",
      "ICE"
    ],
    "abilities": [
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Pickpocket",
        "hidden": true
      }
    ]
  },
  "Teddiursa": {
    "id": "216",
    "fullName": "Teddiursa",
    "hp": 60,
    "attack": 80,
    "defense": 50,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 40,
    "total": 330,
    "height": "60 cm",
    "weight": "8.8 kg",
    "category": "Little Bear Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Quick Feet",
        "hidden": false
      },
      {
        "name": "Pickup",
        "hidden": false
      },
      {
        "name": "Honey Gather",
        "hidden": true
      }
    ]
  },
  "Ursaring": {
    "id": "217",
    "fullName": "Ursaring",
    "hp": 90,
    "attack": 130,
    "defense": 75,
    "specialAttack": 75,
    "specialDefense": 75,
    "speed": 55,
    "total": 500,
    "height": "180 cm",
    "weight": "125.8 kg",
    "category": "Hibernator Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Quick Feet",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Slugma": {
    "id": "218",
    "fullName": "Slugma",
    "hp": 40,
    "attack": 40,
    "defense": 40,
    "specialAttack": 70,
    "specialDefense": 40,
    "speed": 20,
    "total": 250,
    "height": "70 cm",
    "weight": "35 kg",
    "category": "Lava Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Magma Armor",
        "hidden": false
      },
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Weak Armor",
        "hidden": true
      }
    ]
  },
  "Magcargo": {
    "id": "219",
    "fullName": "Magcargo",
    "hp": 50,
    "attack": 50,
    "defense": 120,
    "specialAttack": 80,
    "specialDefense": 80,
    "speed": 30,
    "total": 410,
    "height": "80 cm",
    "weight": "55 kg",
    "category": "Lava Pokémon",
    "types": [
      "FIRE",
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Magma Armor",
        "hidden": false
      },
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Weak Armor",
        "hidden": true
      }
    ]
  },
  "Swinub": {
    "id": "220",
    "fullName": "Swinub",
    "hp": 50,
    "attack": 50,
    "defense": 40,
    "specialAttack": 30,
    "specialDefense": 30,
    "speed": 50,
    "total": 250,
    "height": "40 cm",
    "weight": "6.5 kg",
    "category": "Pig Pokémon",
    "types": [
      "ICE",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Snow Cloak",
        "hidden": false
      },
      {
        "name": "Thick Fat",
        "hidden": true
      }
    ]
  },
  "Piloswine": {
    "id": "221",
    "fullName": "Piloswine",
    "hp": 100,
    "attack": 100,
    "defense": 80,
    "specialAttack": 60,
    "specialDefense": 60,
    "speed": 50,
    "total": 450,
    "height": "110 cm",
    "weight": "55.8 kg",
    "category": "Swine Pokémon",
    "types": [
      "ICE",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Snow Cloak",
        "hidden": false
      },
      {
        "name": "Thick Fat",
        "hidden": true
      }
    ]
  },
  "Corsola": {
    "id": "222",
    "fullName": "Corsola",
    "hp": 55,
    "attack": 55,
    "defense": 85,
    "specialAttack": 65,
    "specialDefense": 85,
    "speed": 35,
    "total": 380,
    "height": "60 cm",
    "weight": "5 kg",
    "category": "Coral Pokémon",
    "types": [
      "WATER",
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Hustle",
        "hidden": false
      },
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Remoraid": {
    "id": "223",
    "fullName": "Remoraid",
    "hp": 35,
    "attack": 65,
    "defense": 35,
    "specialAttack": 65,
    "specialDefense": 35,
    "speed": 65,
    "total": 300,
    "height": "60 cm",
    "weight": "12 kg",
    "category": "Jet Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Hustle",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": false
      },
      {
        "name": "Moody",
        "hidden": true
      }
    ]
  },
  "Octillery": {
    "id": "224",
    "fullName": "Octillery",
    "hp": 75,
    "attack": 105,
    "defense": 75,
    "specialAttack": 105,
    "specialDefense": 75,
    "speed": 45,
    "total": 480,
    "height": "90 cm",
    "weight": "28.5 kg",
    "category": "Jet Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Suction Cups",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": false
      },
      {
        "name": "Moody",
        "hidden": true
      }
    ]
  },
  "Delibird": {
    "id": "225",
    "fullName": "Delibird",
    "hp": 45,
    "attack": 55,
    "defense": 45,
    "specialAttack": 65,
    "specialDefense": 45,
    "speed": 75,
    "total": 330,
    "height": "90 cm",
    "weight": "16 kg",
    "category": "Delivery Pokémon",
    "types": [
      "ICE",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Vital Spirit",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": false
      },
      {
        "name": "Snow Warning",
        "hidden": true
      }
    ]
  },
  "Mantine": {
    "id": "226",
    "fullName": "Mantine",
    "hp": 65,
    "attack": 40,
    "defense": 70,
    "specialAttack": 80,
    "specialDefense": 140,
    "speed": 70,
    "total": 465,
    "height": "210 cm",
    "weight": "220 kg",
    "category": "Kite Pokémon",
    "types": [
      "WATER",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Water Veil",
        "hidden": true
      }
    ]
  },
  "Skarmory": {
    "id": "227",
    "fullName": "Skarmory",
    "hp": 65,
    "attack": 80,
    "defense": 140,
    "specialAttack": 40,
    "specialDefense": 70,
    "speed": 70,
    "total": 465,
    "height": "170 cm",
    "weight": "50.5 kg",
    "category": "Armor Bird Pokémon",
    "types": [
      "STEEL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Weak Armor",
        "hidden": true
      }
    ]
  },
  "Houndour": {
    "id": "228",
    "fullName": "Houndour",
    "hp": 45,
    "attack": 60,
    "defense": 30,
    "specialAttack": 80,
    "specialDefense": 50,
    "speed": 65,
    "total": 330,
    "height": "60 cm",
    "weight": "10.8 kg",
    "category": "Dark Pokémon",
    "types": [
      "DARK",
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Houndoom": {
    "id": "229",
    "fullName": "Houndoom",
    "hp": 75,
    "attack": 90,
    "defense": 50,
    "specialAttack": 110,
    "specialDefense": 80,
    "speed": 95,
    "total": 500,
    "height": "140 cm",
    "weight": "35 kg",
    "category": "Dark Pokémon",
    "types": [
      "DARK",
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Early Bird",
        "hidden": false
      },
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Kingdra": {
    "id": "230",
    "fullName": "Kingdra",
    "hp": 75,
    "attack": 95,
    "defense": 95,
    "specialAttack": 95,
    "specialDefense": 95,
    "speed": 85,
    "total": 540,
    "height": "180 cm",
    "weight": "152 kg",
    "category": "Dragon Pokémon",
    "types": [
      "WATER",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Sniper",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": true
      }
    ]
  },
  "Phanpy": {
    "id": "231",
    "fullName": "Phanpy",
    "hp": 90,
    "attack": 60,
    "defense": 60,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 40,
    "total": 330,
    "height": "50 cm",
    "weight": "33.5 kg",
    "category": "Long Nose Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Pickup",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": true
      }
    ]
  },
  "Donphan": {
    "id": "232",
    "fullName": "Donphan",
    "hp": 90,
    "attack": 120,
    "defense": 120,
    "specialAttack": 60,
    "specialDefense": 60,
    "speed": 50,
    "total": 500,
    "height": "110 cm",
    "weight": "120 kg",
    "category": "Armor Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": true
      }
    ]
  },
  "Porygon2": {
    "id": "233",
    "fullName": "Porygon2",
    "hp": 85,
    "attack": 80,
    "defense": 90,
    "specialAttack": 105,
    "specialDefense": 95,
    "speed": 60,
    "total": 515,
    "height": "60 cm",
    "weight": "32.5 kg",
    "category": "Virtual Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Trace",
        "hidden": false
      },
      {
        "name": "Download",
        "hidden": false
      },
      {
        "name": "Analytic",
        "hidden": true
      }
    ]
  },
  "Stantler": {
    "id": "234",
    "fullName": "Stantler",
    "hp": 73,
    "attack": 95,
    "defense": 62,
    "specialAttack": 85,
    "specialDefense": 65,
    "speed": 85,
    "total": 465,
    "height": "140 cm",
    "weight": "71.2 kg",
    "category": "Big Horn Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": false
      },
      {
        "name": "Sap Sipper",
        "hidden": true
      }
    ]
  },
  "Smeargle": {
    "id": "235",
    "fullName": "Smeargle",
    "hp": 55,
    "attack": 20,
    "defense": 35,
    "specialAttack": 20,
    "specialDefense": 45,
    "speed": 75,
    "total": 250,
    "height": "120 cm",
    "weight": "58 kg",
    "category": "Painter Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Own Tempo",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": false
      },
      {
        "name": "Moody",
        "hidden": true
      }
    ]
  },
  "Tyrogue": {
    "id": "236",
    "fullName": "Tyrogue",
    "hp": 35,
    "attack": 35,
    "defense": 35,
    "specialAttack": 35,
    "specialDefense": 35,
    "speed": 35,
    "total": 210,
    "height": "70 cm",
    "weight": "21 kg",
    "category": "Scuffle Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Guts",
        "hidden": false
      },
      {
        "name": "Steadfast",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": true
      }
    ]
  },
  "Hitmontop": {
    "id": "237",
    "fullName": "Hitmontop",
    "hp": 50,
    "attack": 95,
    "defense": 95,
    "specialAttack": 35,
    "specialDefense": 110,
    "speed": 70,
    "total": 455,
    "height": "140 cm",
    "weight": "48 kg",
    "category": "Handstand Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": false
      },
      {
        "name": "Steadfast",
        "hidden": true
      }
    ]
  },
  "Smoochum": {
    "id": "238",
    "fullName": "Smoochum",
    "hp": 45,
    "attack": 30,
    "defense": 15,
    "specialAttack": 85,
    "specialDefense": 65,
    "speed": 65,
    "total": 305,
    "height": "40 cm",
    "weight": "6 kg",
    "category": "Kiss Pokémon",
    "types": [
      "ICE",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Forewarn",
        "hidden": false
      },
      {
        "name": "Hydration",
        "hidden": true
      }
    ]
  },
  "Elekid": {
    "id": "239",
    "fullName": "Elekid",
    "hp": 45,
    "attack": 63,
    "defense": 37,
    "specialAttack": 65,
    "specialDefense": 55,
    "speed": 95,
    "total": 360,
    "height": "60 cm",
    "weight": "23.5 kg",
    "category": "Electric Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": true
      }
    ]
  },
  "Magby": {
    "id": "240",
    "fullName": "Magby",
    "hp": 45,
    "attack": 75,
    "defense": 37,
    "specialAttack": 70,
    "specialDefense": 55,
    "speed": 83,
    "total": 365,
    "height": "70 cm",
    "weight": "21.4 kg",
    "category": "Live Coal Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": true
      }
    ]
  },
  "Miltank": {
    "id": "241",
    "fullName": "Miltank",
    "hp": 95,
    "attack": 80,
    "defense": 105,
    "specialAttack": 40,
    "specialDefense": 70,
    "speed": 100,
    "total": 490,
    "height": "120 cm",
    "weight": "75.5 kg",
    "category": "Milk Cow Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Thick Fat",
        "hidden": false
      },
      {
        "name": "Scrappy",
        "hidden": false
      },
      {
        "name": "Sap Sipper",
        "hidden": true
      }
    ]
  },
  "Blissey": {
    "id": "242",
    "fullName": "Blissey",
    "hp": 255,
    "attack": 10,
    "defense": 10,
    "specialAttack": 75,
    "specialDefense": 135,
    "speed": 55,
    "total": 540,
    "height": "150 cm",
    "weight": "46.8 kg",
    "category": "Happiness Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Serene Grace",
        "hidden": false
      },
      {
        "name": "Healer",
        "hidden": true
      }
    ]
  },
  "Raikou": {
    "id": "243",
    "fullName": "Raikou",
    "hp": 90,
    "attack": 85,
    "defense": 75,
    "specialAttack": 115,
    "specialDefense": 100,
    "speed": 115,
    "total": 580,
    "height": "190 cm",
    "weight": "178 kg",
    "category": "Thunder Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Volt Absorb",
        "hidden": true
      }
    ]
  },
  "Entei": {
    "id": "244",
    "fullName": "Entei",
    "hp": 115,
    "attack": 115,
    "defense": 85,
    "specialAttack": 90,
    "specialDefense": 75,
    "speed": 100,
    "total": 580,
    "height": "210 cm",
    "weight": "198 kg",
    "category": "Volcano Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Flash Fire",
        "hidden": true
      }
    ]
  },
  "Suicune": {
    "id": "245",
    "fullName": "Suicune",
    "hp": 100,
    "attack": 75,
    "defense": 115,
    "specialAttack": 90,
    "specialDefense": 115,
    "speed": 85,
    "total": 580,
    "height": "200 cm",
    "weight": "187 kg",
    "category": "Aurora Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": true
      }
    ]
  },
  "Larvitar": {
    "id": "246",
    "fullName": "Larvitar",
    "hp": 50,
    "attack": 64,
    "defense": 50,
    "specialAttack": 45,
    "specialDefense": 50,
    "speed": 41,
    "total": 300,
    "height": "60 cm",
    "weight": "72 kg",
    "category": "Rock Skin Pokémon",
    "types": [
      "ROCK",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Guts",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": true
      }
    ]
  },
  "Pupitar": {
    "id": "247",
    "fullName": "Pupitar",
    "hp": 70,
    "attack": 84,
    "defense": 70,
    "specialAttack": 65,
    "specialDefense": 70,
    "speed": 51,
    "total": 410,
    "height": "120 cm",
    "weight": "152 kg",
    "category": "Hard Shell Pokémon",
    "types": [
      "ROCK",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Shed Skin",
        "hidden": false
      },
      {
        "name": "Shed Skin",
        "hidden": true
      }
    ]
  },
  "Tyranitar": {
    "id": "248",
    "fullName": "Tyranitar",
    "hp": 100,
    "attack": 134,
    "defense": 110,
    "specialAttack": 95,
    "specialDefense": 100,
    "speed": 61,
    "total": 600,
    "height": "200 cm",
    "weight": "202 kg",
    "category": "Armor Pokémon",
    "types": [
      "ROCK",
      "DARK"
    ],
    "abilities": [
      {
        "name": "Sand Stream",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Lugia": {
    "id": "249",
    "fullName": "Lugia",
    "hp": 106,
    "attack": 90,
    "defense": 130,
    "specialAttack": 90,
    "specialDefense": 154,
    "speed": 110,
    "total": 680,
    "height": "520 cm",
    "weight": "216 kg",
    "category": "Diving Pokémon",
    "types": [
      "PSYCHIC",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Multiscale",
        "hidden": true
      }
    ]
  },
  "Ho-Oh": {
    "id": "250",
    "fullName": "Ho-Oh",
    "hp": 106,
    "attack": 130,
    "defense": 90,
    "specialAttack": 110,
    "specialDefense": 154,
    "speed": 90,
    "total": 680,
    "height": "380 cm",
    "weight": "199 kg",
    "category": "Rainbow Pokémon",
    "types": [
      "FIRE",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Celebi": {
    "id": "251",
    "fullName": "Celebi",
    "hp": 100,
    "attack": 100,
    "defense": 100,
    "specialAttack": 100,
    "specialDefense": 100,
    "speed": 100,
    "total": 600,
    "height": "60 cm",
    "weight": "5 kg",
    "category": "Time Travel Pokémon",
    "types": [
      "PSYCHIC",
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Natural Cure",
        "hidden": true
      }
    ]
  },
  "Azurill": {
    "id": "252",
    "fullName": "Azurill",
    "hp": 50,
    "attack": 20,
    "defense": 40,
    "specialAttack": 20,
    "specialDefense": 40,
    "speed": 20,
    "total": 190,
    "height": "20 cm",
    "weight": "2 kg",
    "category": "Polka Dot Pokémon",
    "types": [
      "NORMAL",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Huge Power",
        "hidden": false
      },
      {
        "name": "Thick Fat",
        "hidden": false
      },
      {
        "name": "Sap Sipper",
        "hidden": true
      }
    ]
  },
  "Wynaut": {
    "id": "253",
    "fullName": "Wynaut",
    "hp": 95,
    "attack": 23,
    "defense": 48,
    "specialAttack": 23,
    "specialDefense": 48,
    "speed": 23,
    "total": 260,
    "height": "60 cm",
    "weight": "14 kg",
    "category": "Bright Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Shadow Tag",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Ambipom": {
    "id": "254",
    "fullName": "Ambipom",
    "hp": 75,
    "attack": 100,
    "defense": 66,
    "specialAttack": 60,
    "specialDefense": 66,
    "speed": 115,
    "total": 482,
    "height": "120 cm",
    "weight": "20.3 kg",
    "category": "Long Tail Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Technician",
        "hidden": false
      },
      {
        "name": "Pickup",
        "hidden": false
      },
      {
        "name": "Skill Link",
        "hidden": true
      }
    ]
  },
  "Mismagius": {
    "id": "255",
    "fullName": "Mismagius",
    "hp": 60,
    "attack": 60,
    "defense": 60,
    "specialAttack": 105,
    "specialDefense": 105,
    "speed": 105,
    "total": 495,
    "height": "90 cm",
    "weight": "4.4 kg",
    "category": "Magical Pokémon",
    "types": [
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Levitate",
        "hidden": true
      }
    ]
  },
  "Honchkrow": {
    "id": "256",
    "fullName": "Honchkrow",
    "hp": 100,
    "attack": 125,
    "defense": 52,
    "specialAttack": 105,
    "specialDefense": 52,
    "speed": 71,
    "total": 505,
    "height": "90 cm",
    "weight": "27.3 kg",
    "category": "Big Boss Pokémon",
    "types": [
      "DARK",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Super Luck",
        "hidden": false
      },
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Moxie",
        "hidden": true
      }
    ]
  },
  "Bonsly": {
    "id": "257",
    "fullName": "Bonsly",
    "hp": 50,
    "attack": 80,
    "defense": 95,
    "specialAttack": 10,
    "specialDefense": 45,
    "speed": 10,
    "total": 290,
    "height": "50 cm",
    "weight": "15 kg",
    "category": "Bonsai Pokémon",
    "types": [
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Rattled",
        "hidden": true
      }
    ]
  },
  "Mime Jr.": {
    "id": "258",
    "fullName": "Mime Jr.",
    "hp": 20,
    "attack": 25,
    "defense": 45,
    "specialAttack": 70,
    "specialDefense": 90,
    "speed": 60,
    "total": 310,
    "height": "60 cm",
    "weight": "13 kg",
    "category": "Mime Pokémon",
    "types": [
      "PSYCHIC",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Soundproof",
        "hidden": false
      },
      {
        "name": "Filter",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": true
      }
    ]
  },
  "Happiny": {
    "id": "259",
    "fullName": "Happiny",
    "hp": 100,
    "attack": 5,
    "defense": 5,
    "specialAttack": 15,
    "specialDefense": 65,
    "speed": 30,
    "total": 220,
    "height": "60 cm",
    "weight": "24.4 kg",
    "category": "Playhouse Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Serene Grace",
        "hidden": false
      },
      {
        "name": "Friend Guard",
        "hidden": true
      }
    ]
  },
  "Munchlax": {
    "id": "260",
    "fullName": "Munchlax",
    "hp": 135,
    "attack": 85,
    "defense": 40,
    "specialAttack": 40,
    "specialDefense": 85,
    "speed": 5,
    "total": 390,
    "height": "60 cm",
    "weight": "105 kg",
    "category": "Big Eater Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Pickup",
        "hidden": false
      },
      {
        "name": "Thick Fat",
        "hidden": false
      },
      {
        "name": "Gluttony",
        "hidden": true
      }
    ]
  },
  "Mantyke": {
    "id": "261",
    "fullName": "Mantyke",
    "hp": 45,
    "attack": 20,
    "defense": 50,
    "specialAttack": 60,
    "specialDefense": 120,
    "speed": 50,
    "total": 345,
    "height": "100 cm",
    "weight": "65 kg",
    "category": "Kite Pokémon",
    "types": [
      "WATER",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": false
      },
      {
        "name": "Water Veil",
        "hidden": true
      }
    ]
  },
  "Weavile": {
    "id": "262",
    "fullName": "Weavile",
    "hp": 70,
    "attack": 120,
    "defense": 65,
    "specialAttack": 45,
    "specialDefense": 85,
    "speed": 125,
    "total": 510,
    "height": "110 cm",
    "weight": "34 kg",
    "category": "Sharp Claw Pokémon",
    "types": [
      "DARK",
      "ICE"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Pickpocket",
        "hidden": true
      }
    ]
  },
  "Magnezone": {
    "id": "263",
    "fullName": "Magnezone",
    "hp": 70,
    "attack": 70,
    "defense": 115,
    "specialAttack": 130,
    "specialDefense": 90,
    "speed": 60,
    "total": 535,
    "height": "120 cm",
    "weight": "180 kg",
    "category": "Magnet Area Pokémon",
    "types": [
      "STEEL",
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Magnet Pull",
        "hidden": false
      },
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Analytic",
        "hidden": true
      }
    ]
  },
  "Lickilicky": {
    "id": "264",
    "fullName": "Lickilicky",
    "hp": 110,
    "attack": 85,
    "defense": 95,
    "specialAttack": 80,
    "specialDefense": 95,
    "speed": 50,
    "total": 515,
    "height": "170 cm",
    "weight": "140 kg",
    "category": "Licking Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Own Tempo",
        "hidden": false
      },
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Cloud Nine",
        "hidden": true
      }
    ]
  },
  "Rhyperior": {
    "id": "265",
    "fullName": "Rhyperior",
    "hp": 115,
    "attack": 140,
    "defense": 130,
    "specialAttack": 55,
    "specialDefense": 55,
    "speed": 40,
    "total": 535,
    "height": "240 cm",
    "weight": "282.8 kg",
    "category": "Drill Pokémon",
    "types": [
      "GROUND",
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Lightning Rod",
        "hidden": false
      },
      {
        "name": "Solid Rock",
        "hidden": false
      },
      {
        "name": "Reckless",
        "hidden": true
      }
    ]
  },
  "Tangrowth": {
    "id": "266",
    "fullName": "Tangrowth",
    "hp": 100,
    "attack": 100,
    "defense": 125,
    "specialAttack": 110,
    "specialDefense": 50,
    "speed": 50,
    "total": 535,
    "height": "200 cm",
    "weight": "128.6 kg",
    "category": "Vine Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Chlorophyll",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Electivire": {
    "id": "267",
    "fullName": "Electivire",
    "hp": 75,
    "attack": 123,
    "defense": 67,
    "specialAttack": 95,
    "specialDefense": 85,
    "speed": 95,
    "total": 540,
    "height": "180 cm",
    "weight": "138.6 kg",
    "category": "Thunderbolt Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Motor Drive",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": true
      }
    ]
  },
  "Magmortar": {
    "id": "268",
    "fullName": "Magmortar",
    "hp": 75,
    "attack": 95,
    "defense": 67,
    "specialAttack": 125,
    "specialDefense": 95,
    "speed": 83,
    "total": 540,
    "height": "160 cm",
    "weight": "68 kg",
    "category": "Blast Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": true
      }
    ]
  },
  "Togekiss": {
    "id": "269",
    "fullName": "Togekiss",
    "hp": 85,
    "attack": 50,
    "defense": 95,
    "specialAttack": 120,
    "specialDefense": 115,
    "speed": 80,
    "total": 545,
    "height": "150 cm",
    "weight": "38 kg",
    "category": "Jubilee Pokémon",
    "types": [
      "FAIRY",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Hustle",
        "hidden": false
      },
      {
        "name": "Serene Grace",
        "hidden": false
      },
      {
        "name": "Super Luck",
        "hidden": true
      }
    ]
  },
  "Yanmega": {
    "id": "270",
    "fullName": "Yanmega",
    "hp": 86,
    "attack": 76,
    "defense": 86,
    "specialAttack": 116,
    "specialDefense": 56,
    "speed": 95,
    "total": 515,
    "height": "190 cm",
    "weight": "51.5 kg",
    "category": "Ogre Darner Pokémon",
    "types": [
      "BUG",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Speed Boost",
        "hidden": false
      },
      {
        "name": "Tinted Lens",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": true
      }
    ]
  },
  "Leafeon": {
    "id": "271",
    "fullName": "Leafeon",
    "hp": 65,
    "attack": 110,
    "defense": 130,
    "specialAttack": 60,
    "specialDefense": 65,
    "speed": 95,
    "total": 525,
    "height": "100 cm",
    "weight": "25.5 kg",
    "category": "Verdant Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Leaf Guard",
        "hidden": false
      },
      {
        "name": "Chlorophyll",
        "hidden": true
      }
    ]
  },
  "Glaceon": {
    "id": "272",
    "fullName": "Glaceon",
    "hp": 65,
    "attack": 60,
    "defense": 110,
    "specialAttack": 130,
    "specialDefense": 95,
    "speed": 65,
    "total": 525,
    "height": "80 cm",
    "weight": "25.9 kg",
    "category": "Fresh Snow Pokémon",
    "types": [
      "ICE"
    ],
    "abilities": [
      {
        "name": "Snow Cloak",
        "hidden": false
      },
      {
        "name": "Ice Body",
        "hidden": true
      }
    ]
  },
  "Gliscor": {
    "id": "273",
    "fullName": "Gliscor",
    "hp": 75,
    "attack": 95,
    "defense": 125,
    "specialAttack": 45,
    "specialDefense": 75,
    "speed": 95,
    "total": 510,
    "height": "200 cm",
    "weight": "42.5 kg",
    "category": "Fang Scorp Pokémon",
    "types": [
      "GROUND",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Hyper Cutter",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Poison Heal",
        "hidden": true
      }
    ]
  },
  "Mamoswine": {
    "id": "274",
    "fullName": "Mamoswine",
    "hp": 110,
    "attack": 130,
    "defense": 80,
    "specialAttack": 70,
    "specialDefense": 60,
    "speed": 80,
    "total": 530,
    "height": "250 cm",
    "weight": "291 kg",
    "category": "Twin Tusk Pokémon",
    "types": [
      "ICE",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Snow Cloak",
        "hidden": false
      },
      {
        "name": "Thick Fat",
        "hidden": true
      }
    ]
  },
  "Porygon-Z": {
    "id": "275",
    "fullName": "Porygon-Z",
    "hp": 85,
    "attack": 80,
    "defense": 70,
    "specialAttack": 135,
    "specialDefense": 75,
    "speed": 90,
    "total": 535,
    "height": "90 cm",
    "weight": "34 kg",
    "category": "Virtual Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Adaptability",
        "hidden": false
      },
      {
        "name": "Download",
        "hidden": false
      },
      {
        "name": "Analytic",
        "hidden": true
      }
    ]
  },
  "Treecko": {
    "id": "276",
    "fullName": "Treecko",
    "hp": 40,
    "attack": 45,
    "defense": 35,
    "specialAttack": 65,
    "specialDefense": 55,
    "speed": 70,
    "total": 310,
    "height": "50 cm",
    "weight": "5 kg",
    "category": "Wood Gecko Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Unburden",
        "hidden": true
      }
    ]
  },
  "Grovyle": {
    "id": "277",
    "fullName": "Grovyle",
    "hp": 50,
    "attack": 65,
    "defense": 45,
    "specialAttack": 85,
    "specialDefense": 65,
    "speed": 95,
    "total": 405,
    "height": "90 cm",
    "weight": "21.6 kg",
    "category": "Wood Gecko Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Unburden",
        "hidden": true
      }
    ]
  },
  "Sceptile": {
    "id": "278",
    "fullName": "Sceptile",
    "hp": 70,
    "attack": 85,
    "defense": 65,
    "specialAttack": 105,
    "specialDefense": 85,
    "speed": 120,
    "total": 530,
    "height": "170 cm",
    "weight": "52.2 kg",
    "category": "Forest Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Unburden",
        "hidden": true
      }
    ]
  },
  "Torchic": {
    "id": "279",
    "fullName": "Torchic",
    "hp": 45,
    "attack": 60,
    "defense": 40,
    "specialAttack": 70,
    "specialDefense": 50,
    "speed": 45,
    "total": 310,
    "height": "40 cm",
    "weight": "2.5 kg",
    "category": "Chick Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Speed Boost",
        "hidden": true
      }
    ]
  },
  "Combusken": {
    "id": "280",
    "fullName": "Combusken",
    "hp": 60,
    "attack": 85,
    "defense": 60,
    "specialAttack": 85,
    "specialDefense": 60,
    "speed": 55,
    "total": 405,
    "height": "90 cm",
    "weight": "19.5 kg",
    "category": "Young Fowl Pokémon",
    "types": [
      "FIRE",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Speed Boost",
        "hidden": true
      }
    ]
  },
  "Blaziken": {
    "id": "281",
    "fullName": "Blaziken",
    "hp": 80,
    "attack": 120,
    "defense": 70,
    "specialAttack": 110,
    "specialDefense": 70,
    "speed": 80,
    "total": 530,
    "height": "190 cm",
    "weight": "52 kg",
    "category": "Blaze Pokémon",
    "types": [
      "FIRE",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Speed Boost",
        "hidden": true
      }
    ]
  },
  "Mudkip": {
    "id": "282",
    "fullName": "Mudkip",
    "hp": 50,
    "attack": 70,
    "defense": 50,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 40,
    "total": 310,
    "height": "40 cm",
    "weight": "7.6 kg",
    "category": "Mud Fish Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": true
      }
    ]
  },
  "Marshtomp": {
    "id": "283",
    "fullName": "Marshtomp",
    "hp": 70,
    "attack": 85,
    "defense": 70,
    "specialAttack": 60,
    "specialDefense": 70,
    "speed": 50,
    "total": 405,
    "height": "70 cm",
    "weight": "28 kg",
    "category": "Mud Fish Pokémon",
    "types": [
      "WATER",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": true
      }
    ]
  },
  "Swampert": {
    "id": "284",
    "fullName": "Swampert",
    "hp": 100,
    "attack": 110,
    "defense": 90,
    "specialAttack": 85,
    "specialDefense": 90,
    "speed": 60,
    "total": 535,
    "height": "150 cm",
    "weight": "81.9 kg",
    "category": "Mud Fish Pokémon",
    "types": [
      "WATER",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Damp",
        "hidden": true
      }
    ]
  },
  "Ralts": {
    "id": "285",
    "fullName": "Ralts",
    "hp": 28,
    "attack": 25,
    "defense": 25,
    "specialAttack": 45,
    "specialDefense": 35,
    "speed": 40,
    "total": 198,
    "height": "40 cm",
    "weight": "6.6 kg",
    "category": "Feeling Pokémon",
    "types": [
      "PSYCHIC",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Trace",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Kirlia": {
    "id": "286",
    "fullName": "Kirlia",
    "hp": 38,
    "attack": 35,
    "defense": 35,
    "specialAttack": 65,
    "specialDefense": 55,
    "speed": 50,
    "total": 278,
    "height": "80 cm",
    "weight": "20.2 kg",
    "category": "Emotion Pokémon",
    "types": [
      "PSYCHIC",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Trace",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Gardevoir": {
    "id": "287",
    "fullName": "Gardevoir",
    "hp": 68,
    "attack": 65,
    "defense": 65,
    "specialAttack": 125,
    "specialDefense": 115,
    "speed": 80,
    "total": 518,
    "height": "160 cm",
    "weight": "48.4 kg",
    "category": "Embrace Pokémon",
    "types": [
      "PSYCHIC",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Synchronize",
        "hidden": false
      },
      {
        "name": "Trace",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Gallade": {
    "id": "288",
    "fullName": "Gallade",
    "hp": 68,
    "attack": 125,
    "defense": 65,
    "specialAttack": 65,
    "specialDefense": 115,
    "speed": 80,
    "total": 518,
    "height": "160 cm",
    "weight": "52 kg",
    "category": "Blade Pokémon",
    "types": [
      "PSYCHIC",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Steadfast",
        "hidden": false
      },
      {
        "name": "Justified",
        "hidden": true
      }
    ]
  },
  "Shedinja": {
    "id": "289",
    "fullName": "Shedinja",
    "hp": 1,
    "attack": 90,
    "defense": 45,
    "specialAttack": 30,
    "specialDefense": 30,
    "speed": 40,
    "total": 236,
    "height": "80 cm",
    "weight": "1.2 kg",
    "category": "Shed Pokémon",
    "types": [
      "BUG",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Wonder Guard",
        "hidden": false
      },
      {
        "name": "Wonder Guard",
        "hidden": true
      }
    ]
  },
  "Kecleon": {
    "id": "290",
    "fullName": "Kecleon",
    "hp": 60,
    "attack": 90,
    "defense": 70,
    "specialAttack": 60,
    "specialDefense": 120,
    "speed": 40,
    "total": 440,
    "height": "100 cm",
    "weight": "22 kg",
    "category": "Color Swap Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Color Change",
        "hidden": false
      },
      {
        "name": "Protean",
        "hidden": true
      }
    ]
  },
  "Beldum": {
    "id": "291",
    "fullName": "Beldum",
    "hp": 40,
    "attack": 55,
    "defense": 80,
    "specialAttack": 35,
    "specialDefense": 60,
    "speed": 30,
    "total": 300,
    "height": "60 cm",
    "weight": "95.2 kg",
    "category": "Iron Ball Pokémon",
    "types": [
      "STEEL",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Clear Body",
        "hidden": false
      },
      {
        "name": "Light Metal",
        "hidden": true
      }
    ]
  },
  "Metang": {
    "id": "292",
    "fullName": "Metang",
    "hp": 60,
    "attack": 75,
    "defense": 100,
    "specialAttack": 55,
    "specialDefense": 80,
    "speed": 50,
    "total": 420,
    "height": "120 cm",
    "weight": "202.5 kg",
    "category": "Iron Claw Pokémon",
    "types": [
      "STEEL",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Clear Body",
        "hidden": false
      },
      {
        "name": "Light Metal",
        "hidden": true
      }
    ]
  },
  "Metagross": {
    "id": "293",
    "fullName": "Metagross",
    "hp": 80,
    "attack": 135,
    "defense": 130,
    "specialAttack": 95,
    "specialDefense": 90,
    "speed": 70,
    "total": 600,
    "height": "160 cm",
    "weight": "550 kg",
    "category": "Iron Leg Pokémon",
    "types": [
      "STEEL",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Clear Body",
        "hidden": false
      },
      {
        "name": "Light Metal",
        "hidden": true
      }
    ]
  },
  "Bidoof": {
    "id": "294",
    "fullName": "Bidoof",
    "hp": 59,
    "attack": 45,
    "defense": 40,
    "specialAttack": 35,
    "specialDefense": 40,
    "speed": 31,
    "total": 250,
    "height": "50 cm",
    "weight": "20 kg",
    "category": "Plump Mouse Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Simple",
        "hidden": false
      },
      {
        "name": "Unaware",
        "hidden": false
      },
      {
        "name": "Moody",
        "hidden": true
      }
    ]
  },
  "Spiritomb": {
    "id": "295",
    "fullName": "Spiritomb",
    "hp": 50,
    "attack": 92,
    "defense": 108,
    "specialAttack": 92,
    "specialDefense": 108,
    "speed": 35,
    "total": 485,
    "height": "100 cm",
    "weight": "108 kg",
    "category": "Forbidden Pokémon",
    "types": [
      "DARK",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": true
      }
    ]
  },
  "Lucario": {
    "id": "296",
    "fullName": "Lucario",
    "hp": 70,
    "attack": 110,
    "defense": 70,
    "specialAttack": 115,
    "specialDefense": 70,
    "speed": 90,
    "total": 525,
    "height": "120 cm",
    "weight": "54 kg",
    "category": "Aura Pokémon",
    "types": [
      "FIGHTING",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Steadfast",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Justified",
        "hidden": true
      }
    ]
  },
  "Gible": {
    "id": "297",
    "fullName": "Gible",
    "hp": 58,
    "attack": 70,
    "defense": 45,
    "specialAttack": 40,
    "specialDefense": 45,
    "speed": 42,
    "total": 300,
    "height": "70 cm",
    "weight": "20.5 kg",
    "category": "Land Shark Pokémon",
    "types": [
      "DRAGON",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Rough Skin",
        "hidden": true
      }
    ]
  },
  "Gabite": {
    "id": "298",
    "fullName": "Gabite",
    "hp": 68,
    "attack": 90,
    "defense": 65,
    "specialAttack": 50,
    "specialDefense": 55,
    "speed": 82,
    "total": 410,
    "height": "140 cm",
    "weight": "56 kg",
    "category": "Cave Pokémon",
    "types": [
      "DRAGON",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Rough Skin",
        "hidden": true
      }
    ]
  },
  "Garchomp": {
    "id": "299",
    "fullName": "Garchomp",
    "hp": 108,
    "attack": 130,
    "defense": 95,
    "specialAttack": 80,
    "specialDefense": 85,
    "speed": 102,
    "total": 600,
    "height": "190 cm",
    "weight": "95 kg",
    "category": "Mach Pokémon",
    "types": [
      "DRAGON",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Rough Skin",
        "hidden": true
      }
    ]
  },
  "Mawile": {
    "id": "300",
    "fullName": "Mawile",
    "hp": 50,
    "attack": 85,
    "defense": 85,
    "specialAttack": 55,
    "specialDefense": 55,
    "speed": 50,
    "total": 380,
    "height": "60 cm",
    "weight": "11.5 kg",
    "category": "Deceiver Pokémon",
    "types": [
      "STEEL",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Hyper Cutter",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Lileep": {
    "id": "301",
    "fullName": "Lileep",
    "hp": 66,
    "attack": 41,
    "defense": 77,
    "specialAttack": 61,
    "specialDefense": 87,
    "speed": 23,
    "total": 355,
    "height": "100 cm",
    "weight": "23.8 kg",
    "category": "Sea Lily Pokémon",
    "types": [
      "ROCK",
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Suction Cups",
        "hidden": false
      },
      {
        "name": "Storm Drain",
        "hidden": true
      }
    ]
  },
  "Cradily": {
    "id": "302",
    "fullName": "Cradily",
    "hp": 86,
    "attack": 81,
    "defense": 97,
    "specialAttack": 81,
    "specialDefense": 107,
    "speed": 43,
    "total": 495,
    "height": "150 cm",
    "weight": "60.4 kg",
    "category": "Barnacle Pokémon",
    "types": [
      "ROCK",
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Suction Cups",
        "hidden": false
      },
      {
        "name": "Storm Drain",
        "hidden": true
      }
    ]
  },
  "Anorith": {
    "id": "303",
    "fullName": "Anorith",
    "hp": 45,
    "attack": 95,
    "defense": 50,
    "specialAttack": 40,
    "specialDefense": 50,
    "speed": 75,
    "total": 355,
    "height": "70 cm",
    "weight": "12.5 kg",
    "category": "Old Shrimp Pokémon",
    "types": [
      "ROCK",
      "BUG"
    ],
    "abilities": [
      {
        "name": "Battle Armor",
        "hidden": false
      },
      {
        "name": "Swift Swim",
        "hidden": true
      }
    ]
  },
  "Armaldo": {
    "id": "304",
    "fullName": "Armaldo",
    "hp": 75,
    "attack": 125,
    "defense": 100,
    "specialAttack": 70,
    "specialDefense": 80,
    "speed": 45,
    "total": 495,
    "height": "150 cm",
    "weight": "68.2 kg",
    "category": "Plate Pokémon",
    "types": [
      "ROCK",
      "BUG"
    ],
    "abilities": [
      {
        "name": "Battle Armor",
        "hidden": false
      },
      {
        "name": "Swift Swim",
        "hidden": true
      }
    ]
  },
  "Cranidos": {
    "id": "305",
    "fullName": "Cranidos",
    "hp": 67,
    "attack": 125,
    "defense": 40,
    "specialAttack": 30,
    "specialDefense": 30,
    "speed": 58,
    "total": 350,
    "height": "90 cm",
    "weight": "31.5 kg",
    "category": "Head Butt Pokémon",
    "types": [
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Mold Breaker",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Rampardos": {
    "id": "306",
    "fullName": "Rampardos",
    "hp": 97,
    "attack": 165,
    "defense": 60,
    "specialAttack": 65,
    "specialDefense": 50,
    "speed": 58,
    "total": 495,
    "height": "160 cm",
    "weight": "102.5 kg",
    "category": "Head Butt Pokémon",
    "types": [
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Mold Breaker",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Shieldon": {
    "id": "307",
    "fullName": "Shieldon",
    "hp": 30,
    "attack": 42,
    "defense": 118,
    "specialAttack": 42,
    "specialDefense": 88,
    "speed": 30,
    "total": 350,
    "height": "50 cm",
    "weight": "57 kg",
    "category": "Shield Pokémon",
    "types": [
      "ROCK",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Soundproof",
        "hidden": true
      }
    ]
  },
  "Bastiodon": {
    "id": "308",
    "fullName": "Bastiodon",
    "hp": 60,
    "attack": 52,
    "defense": 168,
    "specialAttack": 47,
    "specialDefense": 138,
    "speed": 30,
    "total": 495,
    "height": "130 cm",
    "weight": "149.5 kg",
    "category": "Shield Pokémon",
    "types": [
      "ROCK",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Soundproof",
        "hidden": true
      }
    ]
  },
  "Slaking": {
    "id": "309",
    "fullName": "Slaking",
    "hp": 150,
    "attack": 160,
    "defense": 100,
    "specialAttack": 95,
    "specialDefense": 65,
    "speed": 100,
    "total": 670,
    "height": "200 cm",
    "weight": "130.5 kg",
    "category": "Lazy Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Truant",
        "hidden": false
      },
      {
        "name": "Truant",
        "hidden": true
      }
    ]
  },
  "Absol": {
    "id": "310",
    "fullName": "Absol",
    "hp": 65,
    "attack": 130,
    "defense": 60,
    "specialAttack": 75,
    "specialDefense": 60,
    "speed": 75,
    "total": 465,
    "height": "120 cm",
    "weight": "47 kg",
    "category": "Disaster Pokémon",
    "types": [
      "DARK"
    ],
    "abilities": [
      {
        "name": "Super Luck",
        "hidden": false
      },
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Justified",
        "hidden": true
      }
    ]
  },
  "Duskull": {
    "id": "311",
    "fullName": "Duskull",
    "hp": 20,
    "attack": 40,
    "defense": 90,
    "specialAttack": 30,
    "specialDefense": 90,
    "speed": 25,
    "total": 295,
    "height": "80 cm",
    "weight": "15 kg",
    "category": "Requiem Pokémon",
    "types": [
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": true
      }
    ]
  },
  "Dusclops": {
    "id": "312",
    "fullName": "Dusclops",
    "hp": 40,
    "attack": 70,
    "defense": 130,
    "specialAttack": 60,
    "specialDefense": 130,
    "speed": 25,
    "total": 455,
    "height": "160 cm",
    "weight": "30.6 kg",
    "category": "Beckon Pokémon",
    "types": [
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": true
      }
    ]
  },
  "Dusknoir": {
    "id": "313",
    "fullName": "Dusknoir",
    "hp": 45,
    "attack": 100,
    "defense": 135,
    "specialAttack": 65,
    "specialDefense": 135,
    "speed": 45,
    "total": 525,
    "height": "220 cm",
    "weight": "106.6 kg",
    "category": "Gripper Pokémon",
    "types": [
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": true
      }
    ]
  },
  "Wailord": {
    "id": "314",
    "fullName": "Wailord",
    "hp": 170,
    "attack": 90,
    "defense": 45,
    "specialAttack": 90,
    "specialDefense": 45,
    "speed": 60,
    "total": 500,
    "height": "1450 cm",
    "weight": "398 kg",
    "category": "Float Whale Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Water Veil",
        "hidden": false
      },
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Pressure",
        "hidden": true
      }
    ]
  },
  "Arceus": {
    "id": "315",
    "fullName": "Arceus",
    "hp": 120,
    "attack": 120,
    "defense": 120,
    "specialAttack": 120,
    "specialDefense": 120,
    "speed": 120,
    "total": 720,
    "height": "320 cm",
    "weight": "320 kg",
    "category": "Alpha Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Multitype",
        "hidden": false
      },
      {
        "name": "Multitype",
        "hidden": true
      }
    ]
  },
  "Turtwig": {
    "id": "316",
    "fullName": "Turtwig",
    "hp": 55,
    "attack": 68,
    "defense": 64,
    "specialAttack": 45,
    "specialDefense": 55,
    "speed": 31,
    "total": 318,
    "height": "40 cm",
    "weight": "10.2 kg",
    "category": "Tiny Leaf Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Shell Armor",
        "hidden": true
      }
    ]
  },
  "Grotle": {
    "id": "317",
    "fullName": "Grotle",
    "hp": 75,
    "attack": 89,
    "defense": 85,
    "specialAttack": 55,
    "specialDefense": 65,
    "speed": 36,
    "total": 405,
    "height": "110 cm",
    "weight": "97 kg",
    "category": "Grove Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Shell Armor",
        "hidden": true
      }
    ]
  },
  "Torterra": {
    "id": "318",
    "fullName": "Torterra",
    "hp": 95,
    "attack": 109,
    "defense": 105,
    "specialAttack": 75,
    "specialDefense": 85,
    "speed": 56,
    "total": 525,
    "height": "220 cm",
    "weight": "310 kg",
    "category": "Continent Pokémon",
    "types": [
      "GRASS",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Overgrow",
        "hidden": false
      },
      {
        "name": "Shell Armor",
        "hidden": true
      }
    ]
  },
  "Chimchar": {
    "id": "319",
    "fullName": "Chimchar",
    "hp": 44,
    "attack": 58,
    "defense": 44,
    "specialAttack": 58,
    "specialDefense": 44,
    "speed": 61,
    "total": 309,
    "height": "50 cm",
    "weight": "6.2 kg",
    "category": "Chimp Pokémon",
    "types": [
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Iron Fist",
        "hidden": true
      }
    ]
  },
  "Monferno": {
    "id": "320",
    "fullName": "Monferno",
    "hp": 64,
    "attack": 78,
    "defense": 52,
    "specialAttack": 78,
    "specialDefense": 52,
    "speed": 81,
    "total": 405,
    "height": "90 cm",
    "weight": "22 kg",
    "category": "Playful Pokémon",
    "types": [
      "FIRE",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Iron Fist",
        "hidden": true
      }
    ]
  },
  "Infernape": {
    "id": "321",
    "fullName": "Infernape",
    "hp": 76,
    "attack": 104,
    "defense": 71,
    "specialAttack": 104,
    "specialDefense": 71,
    "speed": 108,
    "total": 534,
    "height": "120 cm",
    "weight": "55 kg",
    "category": "Flame Pokémon",
    "types": [
      "FIRE",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Blaze",
        "hidden": false
      },
      {
        "name": "Iron Fist",
        "hidden": true
      }
    ]
  },
  "Piplup": {
    "id": "322",
    "fullName": "Piplup",
    "hp": 53,
    "attack": 51,
    "defense": 53,
    "specialAttack": 61,
    "specialDefense": 56,
    "speed": 40,
    "total": 314,
    "height": "40 cm",
    "weight": "5.2 kg",
    "category": "Penguin Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Defiant",
        "hidden": true
      }
    ]
  },
  "Prinplup": {
    "id": "323",
    "fullName": "Prinplup",
    "hp": 64,
    "attack": 66,
    "defense": 68,
    "specialAttack": 81,
    "specialDefense": 76,
    "speed": 50,
    "total": 405,
    "height": "80 cm",
    "weight": "23 kg",
    "category": "Penguin Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Defiant",
        "hidden": true
      }
    ]
  },
  "Empoleon": {
    "id": "324",
    "fullName": "Empoleon",
    "hp": 84,
    "attack": 86,
    "defense": 88,
    "specialAttack": 111,
    "specialDefense": 101,
    "speed": 60,
    "total": 530,
    "height": "170 cm",
    "weight": "84.5 kg",
    "category": "Emperor Pokémon",
    "types": [
      "WATER",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Torrent",
        "hidden": false
      },
      {
        "name": "Defiant",
        "hidden": true
      }
    ]
  },
  "Nosepass": {
    "id": "325",
    "fullName": "Nosepass",
    "hp": 30,
    "attack": 45,
    "defense": 135,
    "specialAttack": 45,
    "specialDefense": 90,
    "speed": 30,
    "total": 375,
    "height": "100 cm",
    "weight": "97 kg",
    "category": "Compass Pokémon",
    "types": [
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Magnet Pull",
        "hidden": false
      },
      {
        "name": "Sand Force",
        "hidden": true
      }
    ]
  },
  "Probopass": {
    "id": "326",
    "fullName": "Probopass",
    "hp": 60,
    "attack": 55,
    "defense": 145,
    "specialAttack": 75,
    "specialDefense": 150,
    "speed": 40,
    "total": 525,
    "height": "140 cm",
    "weight": "340 kg",
    "category": "Compass Pokémon",
    "types": [
      "ROCK",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Magnet Pull",
        "hidden": false
      },
      {
        "name": "Sand Force",
        "hidden": true
      }
    ]
  },
  "Honedge": {
    "id": "327",
    "fullName": "Honedge",
    "hp": 45,
    "attack": 80,
    "defense": 100,
    "specialAttack": 35,
    "specialDefense": 37,
    "speed": 28,
    "total": 325,
    "height": "80 cm",
    "weight": "2 kg",
    "category": "Sword Pokémon",
    "types": [
      "STEEL",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "No Guard",
        "hidden": false
      },
      {
        "name": "No Guard",
        "hidden": true
      }
    ]
  },
  "Doublade": {
    "id": "328",
    "fullName": "Doublade",
    "hp": 59,
    "attack": 110,
    "defense": 150,
    "specialAttack": 45,
    "specialDefense": 49,
    "speed": 35,
    "total": 448,
    "height": "80 cm",
    "weight": "2 kg",
    "category": "Sword Pokémon",
    "types": [
      "STEEL",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "No Guard",
        "hidden": false
      },
      {
        "name": "No Guard",
        "hidden": true
      }
    ]
  },
  "Aegislash": {
    "id": "329",
    "fullName": "Aegislash",
    "hp": 60,
    "attack": 50,
    "defense": 150,
    "specialAttack": 50,
    "specialDefense": 150,
    "speed": 60,
    "total": 520,
    "height": "170 cm",
    "weight": "53 kg",
    "category": "Royal Sword Pokémon",
    "types": [
      "STEEL",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Stance Change",
        "hidden": false
      },
      {
        "name": "Stance Change",
        "hidden": true
      }
    ]
  },
  "Pawniard": {
    "id": "330",
    "fullName": "Pawniard",
    "hp": 45,
    "attack": 85,
    "defense": 70,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 60,
    "total": 340,
    "height": "50 cm",
    "weight": "10.2 kg",
    "category": "Sharp Blade Pokémon",
    "types": [
      "DARK",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Defiant",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Pressure",
        "hidden": true
      }
    ]
  },
  "Bisharp": {
    "id": "331",
    "fullName": "Bisharp",
    "hp": 65,
    "attack": 125,
    "defense": 100,
    "specialAttack": 60,
    "specialDefense": 70,
    "speed": 70,
    "total": 490,
    "height": "160 cm",
    "weight": "70 kg",
    "category": "Sword Blade Pokémon",
    "types": [
      "DARK",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Defiant",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Pressure",
        "hidden": true
      }
    ]
  },
  "Luxray": {
    "id": "332",
    "fullName": "Luxray",
    "hp": 80,
    "attack": 120,
    "defense": 79,
    "specialAttack": 95,
    "specialDefense": 79,
    "speed": 70,
    "total": 523,
    "height": "140 cm",
    "weight": "42 kg",
    "category": "Gleam Eyes Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": true
      }
    ]
  },
  "Aggron": {
    "id": "333",
    "fullName": "Aggron",
    "hp": 70,
    "attack": 110,
    "defense": 180,
    "specialAttack": 60,
    "specialDefense": 60,
    "speed": 50,
    "total": 530,
    "height": "210 cm",
    "weight": "360 kg",
    "category": "Iron Armor Pokémon",
    "types": [
      "STEEL",
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Heavy Metal",
        "hidden": true
      }
    ]
  },
  "Flygon": {
    "id": "334",
    "fullName": "Flygon",
    "hp": 80,
    "attack": 100,
    "defense": 80,
    "specialAttack": 80,
    "specialDefense": 80,
    "speed": 100,
    "total": 520,
    "height": "200 cm",
    "weight": "82 kg",
    "category": "Mystic Pokémon",
    "types": [
      "GROUND",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Dry Skin",
        "hidden": true
      }
    ]
  },
  "Milotic": {
    "id": "335",
    "fullName": "Milotic",
    "hp": 95,
    "attack": 60,
    "defense": 79,
    "specialAttack": 100,
    "specialDefense": 125,
    "speed": 81,
    "total": 540,
    "height": "620 cm",
    "weight": "162 kg",
    "category": "Tender Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Marvel Scale",
        "hidden": false
      },
      {
        "name": "Cute Charm",
        "hidden": true
      }
    ]
  },
  "Salamence": {
    "id": "336",
    "fullName": "Salamence",
    "hp": 95,
    "attack": 135,
    "defense": 80,
    "specialAttack": 110,
    "specialDefense": 80,
    "speed": 100,
    "total": 600,
    "height": "150 cm",
    "weight": "102.6 kg",
    "category": "Dragon Pokémon",
    "types": [
      "DRAGON",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Moxie",
        "hidden": true
      }
    ]
  },
  "Klinklang": {
    "id": "337",
    "fullName": "Klinklang",
    "hp": 60,
    "attack": 100,
    "defense": 115,
    "specialAttack": 70,
    "specialDefense": 85,
    "speed": 90,
    "total": 520,
    "height": "60 cm",
    "weight": "81 kg",
    "category": "Gear Pokémon",
    "types": [
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Plus",
        "hidden": false
      },
      {
        "name": "Minus",
        "hidden": false
      },
      {
        "name": "Clear Body",
        "hidden": true
      }
    ]
  },
  "Zoroark": {
    "id": "338",
    "fullName": "Zoroark",
    "hp": 60,
    "attack": 105,
    "defense": 60,
    "specialAttack": 120,
    "specialDefense": 60,
    "speed": 105,
    "total": 510,
    "height": "160 cm",
    "weight": "81.1 kg",
    "category": "Illusion Fox Pokémon",
    "types": [
      "DARK"
    ],
    "abilities": [
      {
        "name": "Illusion",
        "hidden": false
      },
      {
        "name": "Illusion",
        "hidden": true
      }
    ]
  },
  "Sylveon": {
    "id": "339",
    "fullName": "Sylveon",
    "hp": 95,
    "attack": 65,
    "defense": 65,
    "specialAttack": 110,
    "specialDefense": 130,
    "speed": 60,
    "total": 525,
    "height": "100 cm",
    "weight": "23.5 kg",
    "category": "Intertwining Pokémon",
    "types": [
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Cute Charm",
        "hidden": false
      },
      {
        "name": "Pixilate",
        "hidden": true
      }
    ]
  },
  "Kyogre": {
    "id": "340",
    "fullName": "Kyogre",
    "hp": 100,
    "attack": 100,
    "defense": 90,
    "specialAttack": 150,
    "specialDefense": 140,
    "speed": 90,
    "total": 670,
    "height": "450 cm",
    "weight": "352 kg",
    "category": "Sea Basin Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Drizzle",
        "hidden": false
      },
      {
        "name": "Drizzle",
        "hidden": true
      }
    ]
  },
  "Groudon": {
    "id": "341",
    "fullName": "Groudon",
    "hp": 100,
    "attack": 150,
    "defense": 140,
    "specialAttack": 100,
    "specialDefense": 90,
    "speed": 90,
    "total": 670,
    "height": "350 cm",
    "weight": "950 kg",
    "category": "Continent Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Drought",
        "hidden": false
      },
      {
        "name": "Drought",
        "hidden": true
      }
    ]
  },
  "Rayquaza": {
    "id": "342",
    "fullName": "Rayquaza",
    "hp": 105,
    "attack": 150,
    "defense": 90,
    "specialAttack": 150,
    "specialDefense": 90,
    "speed": 95,
    "total": 680,
    "height": "700 cm",
    "weight": "206.5 kg",
    "category": "Sky High Pokémon",
    "types": [
      "DRAGON",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Air Lock",
        "hidden": false
      },
      {
        "name": "Air Lock",
        "hidden": true
      }
    ]
  },
  "Dialga": {
    "id": "343",
    "fullName": "Dialga",
    "hp": 100,
    "attack": 120,
    "defense": 120,
    "specialAttack": 150,
    "specialDefense": 100,
    "speed": 90,
    "total": 680,
    "height": "540 cm",
    "weight": "683 kg",
    "category": "Temporal Pokémon",
    "types": [
      "STEEL",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Palkia": {
    "id": "344",
    "fullName": "Palkia",
    "hp": 90,
    "attack": 120,
    "defense": 100,
    "specialAttack": 150,
    "specialDefense": 120,
    "speed": 100,
    "total": 680,
    "height": "420 cm",
    "weight": "336 kg",
    "category": "Spatial Pokémon",
    "types": [
      "WATER",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Giratina": {
    "id": "345",
    "fullName": "Giratina",
    "hp": 150,
    "attack": 100,
    "defense": 120,
    "specialAttack": 100,
    "specialDefense": 120,
    "speed": 90,
    "total": 680,
    "height": "450 cm",
    "weight": "750 kg",
    "category": "Renegade Pokémon",
    "types": [
      "GHOST",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Regigigas": {
    "id": "346",
    "fullName": "Regigigas",
    "hp": 110,
    "attack": 160,
    "defense": 110,
    "specialAttack": 80,
    "specialDefense": 110,
    "speed": 100,
    "total": 670,
    "height": "370 cm",
    "weight": "420 kg",
    "category": "Colossal Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Slow Start",
        "hidden": false
      },
      {
        "name": "Mold Breaker",
        "hidden": true
      }
    ]
  },
  "Darkrai": {
    "id": "347",
    "fullName": "Darkrai",
    "hp": 70,
    "attack": 90,
    "defense": 90,
    "specialAttack": 135,
    "specialDefense": 90,
    "speed": 125,
    "total": 600,
    "height": "150 cm",
    "weight": "50.5 kg",
    "category": "Pitch-Black Pokémon",
    "types": [
      "DARK"
    ],
    "abilities": [
      {
        "name": "Bad Dreams",
        "hidden": false
      },
      {
        "name": "White Smoke",
        "hidden": true
      }
    ]
  },
  "Genesect": {
    "id": "348",
    "fullName": "Genesect",
    "hp": 71,
    "attack": 120,
    "defense": 95,
    "specialAttack": 120,
    "specialDefense": 95,
    "speed": 99,
    "total": 600,
    "height": "150 cm",
    "weight": "82.5 kg",
    "category": "Paleozoic Pokémon",
    "types": [
      "BUG",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Download",
        "hidden": false
      },
      {
        "name": "Motor Drive",
        "hidden": true
      }
    ]
  },
  "Reshiram": {
    "id": "349",
    "fullName": "Reshiram",
    "hp": 100,
    "attack": 120,
    "defense": 100,
    "specialAttack": 150,
    "specialDefense": 120,
    "speed": 90,
    "total": 680,
    "height": "320 cm",
    "weight": "330 kg",
    "category": "Vast White Pokémon",
    "types": [
      "DRAGON",
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Turboblaze",
        "hidden": false
      },
      {
        "name": "Flare Boost",
        "hidden": true
      }
    ]
  },
  "Zekrom": {
    "id": "350",
    "fullName": "Zekrom",
    "hp": 100,
    "attack": 150,
    "defense": 120,
    "specialAttack": 120,
    "specialDefense": 100,
    "speed": 90,
    "total": 680,
    "height": "290 cm",
    "weight": "345 kg",
    "category": "Deep Black Pokémon",
    "types": [
      "DRAGON",
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Teravolt",
        "hidden": false
      },
      {
        "name": "Volt Absorb",
        "hidden": true
      }
    ]
  },
  "Kyurem": {
    "id": "351",
    "fullName": "Kyurem",
    "hp": 125,
    "attack": 130,
    "defense": 90,
    "specialAttack": 130,
    "specialDefense": 90,
    "speed": 95,
    "total": 660,
    "height": "300 cm",
    "weight": "325 kg",
    "category": "Boundary Pokémon",
    "types": [
      "DRAGON",
      "ICE"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Ice Body",
        "hidden": true
      }
    ]
  },
  "Roserade": {
    "id": "352",
    "fullName": "Roserade",
    "hp": 60,
    "attack": 70,
    "defense": 55,
    "specialAttack": 125,
    "specialDefense": 105,
    "speed": 90,
    "total": 505,
    "height": "90 cm",
    "weight": "14.5 kg",
    "category": "Bouquet Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": true
      }
    ]
  },
  "Drifblim": {
    "id": "353",
    "fullName": "Drifblim",
    "hp": 150,
    "attack": 80,
    "defense": 44,
    "specialAttack": 90,
    "specialDefense": 54,
    "speed": 80,
    "total": 498,
    "height": "120 cm",
    "weight": "15 kg",
    "category": "Blimp Pokémon",
    "types": [
      "GHOST",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Aftermath",
        "hidden": false
      },
      {
        "name": "Unburden",
        "hidden": false
      },
      {
        "name": "Flare Boost",
        "hidden": true
      }
    ]
  },
  "Lopunny": {
    "id": "354",
    "fullName": "Lopunny",
    "hp": 65,
    "attack": 76,
    "defense": 84,
    "specialAttack": 54,
    "specialDefense": 96,
    "speed": 105,
    "total": 480,
    "height": "120 cm",
    "weight": "33.3 kg",
    "category": "Rabbit Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Cute Charm",
        "hidden": false
      },
      {
        "name": "Klutz",
        "hidden": false
      },
      {
        "name": "Limber",
        "hidden": true
      }
    ]
  },
  "Breloom": {
    "id": "355",
    "fullName": "Breloom",
    "hp": 60,
    "attack": 130,
    "defense": 80,
    "specialAttack": 60,
    "specialDefense": 60,
    "speed": 70,
    "total": 460,
    "height": "120 cm",
    "weight": "39.2 kg",
    "category": "Mushroom Pokémon",
    "types": [
      "GRASS",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Effect Spore",
        "hidden": false
      },
      {
        "name": "Poison Heal",
        "hidden": false
      },
      {
        "name": "Technician",
        "hidden": true
      }
    ]
  },
  "Ninjask": {
    "id": "356",
    "fullName": "Ninjask",
    "hp": 61,
    "attack": 90,
    "defense": 45,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 160,
    "total": 456,
    "height": "80 cm",
    "weight": "12 kg",
    "category": "Ninja Pokémon",
    "types": [
      "BUG",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Speed Boost",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": true
      }
    ]
  },
  "Banette": {
    "id": "357",
    "fullName": "Banette",
    "hp": 64,
    "attack": 115,
    "defense": 65,
    "specialAttack": 83,
    "specialDefense": 63,
    "speed": 65,
    "total": 455,
    "height": "110 cm",
    "weight": "12.5 kg",
    "category": "Marionette Pokémon",
    "types": [
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": false
      },
      {
        "name": "Cursed Body",
        "hidden": true
      }
    ]
  },
  "Rotom": {
    "id": "358",
    "fullName": "Rotom",
    "hp": 50,
    "attack": 50,
    "defense": 77,
    "specialAttack": 95,
    "specialDefense": 77,
    "speed": 91,
    "total": 440,
    "height": "30 cm",
    "weight": "0.3 kg",
    "category": "Plasma Pokémon",
    "types": [
      "ELECTRIC",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Levitate",
        "hidden": true
      }
    ]
  },
  "Reuniclus": {
    "id": "359",
    "fullName": "Reuniclus",
    "hp": 110,
    "attack": 65,
    "defense": 75,
    "specialAttack": 125,
    "specialDefense": 85,
    "speed": 30,
    "total": 490,
    "height": "100 cm",
    "weight": "20.1 kg",
    "category": "Multiplying Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Overcoat",
        "hidden": false
      },
      {
        "name": "Magic Guard",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Whimsicott": {
    "id": "360",
    "fullName": "Whimsicott",
    "hp": 60,
    "attack": 67,
    "defense": 85,
    "specialAttack": 77,
    "specialDefense": 75,
    "speed": 116,
    "total": 480,
    "height": "70 cm",
    "weight": "6.6 kg",
    "category": "Windveiled Pokémon",
    "types": [
      "GRASS",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Prankster",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": false
      },
      {
        "name": "Chlorophyll",
        "hidden": true
      }
    ]
  },
  "Krookodile": {
    "id": "361",
    "fullName": "Krookodile",
    "hp": 95,
    "attack": 117,
    "defense": 70,
    "specialAttack": 65,
    "specialDefense": 70,
    "speed": 92,
    "total": 509,
    "height": "150 cm",
    "weight": "96.3 kg",
    "category": "Intimidation Pokémon",
    "types": [
      "GROUND",
      "DARK"
    ],
    "abilities": [
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Moxie",
        "hidden": false
      },
      {
        "name": "Anger Point",
        "hidden": true
      }
    ]
  },
  "Cofagrigus": {
    "id": "362",
    "fullName": "Cofagrigus",
    "hp": 58,
    "attack": 50,
    "defense": 145,
    "specialAttack": 95,
    "specialDefense": 105,
    "speed": 30,
    "total": 483,
    "height": "170 cm",
    "weight": "76.5 kg",
    "category": "Coffin Pokémon",
    "types": [
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Mummy",
        "hidden": false
      },
      {
        "name": "Mummy",
        "hidden": true
      }
    ]
  },
  "Galvantula": {
    "id": "363",
    "fullName": "Galvantula",
    "hp": 70,
    "attack": 77,
    "defense": 60,
    "specialAttack": 97,
    "specialDefense": 60,
    "speed": 108,
    "total": 472,
    "height": "80 cm",
    "weight": "14.3 kg",
    "category": "Tarantula Pokémon",
    "types": [
      "BUG",
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Compound Eyes",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": false
      },
      {
        "name": "Swarm",
        "hidden": true
      }
    ]
  },
  "Ferrothorn": {
    "id": "364",
    "fullName": "Ferrothorn",
    "hp": 74,
    "attack": 94,
    "defense": 131,
    "specialAttack": 54,
    "specialDefense": 116,
    "speed": 20,
    "total": 489,
    "height": "100 cm",
    "weight": "110 kg",
    "category": "Thorn Pod Pokémon",
    "types": [
      "GRASS",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Iron Barbs",
        "hidden": false
      },
      {
        "name": "Iron Barbs",
        "hidden": true
      }
    ]
  },
  "Litwick": {
    "id": "365",
    "fullName": "Litwick",
    "hp": 50,
    "attack": 30,
    "defense": 55,
    "specialAttack": 65,
    "specialDefense": 55,
    "speed": 20,
    "total": 275,
    "height": "30 cm",
    "weight": "3.1 kg",
    "category": "Candle Pokémon",
    "types": [
      "GHOST",
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Shadow Tag",
        "hidden": true
      }
    ]
  },
  "Lampent": {
    "id": "366",
    "fullName": "Lampent",
    "hp": 60,
    "attack": 40,
    "defense": 60,
    "specialAttack": 95,
    "specialDefense": 60,
    "speed": 55,
    "total": 370,
    "height": "60 cm",
    "weight": "13 kg",
    "category": "Lamp Pokémon",
    "types": [
      "GHOST",
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Shadow Tag",
        "hidden": true
      }
    ]
  },
  "Chandelure": {
    "id": "367",
    "fullName": "Chandelure",
    "hp": 60,
    "attack": 55,
    "defense": 90,
    "specialAttack": 145,
    "specialDefense": 90,
    "speed": 80,
    "total": 520,
    "height": "100 cm",
    "weight": "34.3 kg",
    "category": "Luring Pokémon",
    "types": [
      "GHOST",
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flash Fire",
        "hidden": false
      },
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Shadow Tag",
        "hidden": true
      }
    ]
  },
  "Haxorus": {
    "id": "368",
    "fullName": "Haxorus",
    "hp": 76,
    "attack": 147,
    "defense": 90,
    "specialAttack": 60,
    "specialDefense": 70,
    "speed": 97,
    "total": 540,
    "height": "180 cm",
    "weight": "105.5 kg",
    "category": "Axe Jaw Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Mold Breaker",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Golurk": {
    "id": "369",
    "fullName": "Golurk",
    "hp": 89,
    "attack": 124,
    "defense": 80,
    "specialAttack": 55,
    "specialDefense": 80,
    "speed": 55,
    "total": 483,
    "height": "280 cm",
    "weight": "330 kg",
    "category": "Automaton Pokémon",
    "types": [
      "GROUND",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Iron Fist",
        "hidden": false
      },
      {
        "name": "Klutz",
        "hidden": false
      },
      {
        "name": "No Guard",
        "hidden": true
      }
    ]
  },
  "Pyukumuku": {
    "id": "370",
    "fullName": "Pyukumuku",
    "hp": 55,
    "attack": 60,
    "defense": 130,
    "specialAttack": 30,
    "specialDefense": 130,
    "speed": 5,
    "total": 410,
    "height": "30 cm",
    "weight": "1.2 kg",
    "category": "Sea Cucumber Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Innards Out",
        "hidden": false
      },
      {
        "name": "Unaware",
        "hidden": true
      }
    ]
  },
  "Klefki": {
    "id": "371",
    "fullName": "Klefki",
    "hp": 57,
    "attack": 80,
    "defense": 91,
    "specialAttack": 80,
    "specialDefense": 87,
    "speed": 75,
    "total": 470,
    "height": "20 cm",
    "weight": "3 kg",
    "category": "Key Ring Pokémon",
    "types": [
      "STEEL",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Prankster",
        "hidden": false
      },
      {
        "name": "Magician",
        "hidden": true
      }
    ]
  },
  "Talonflame": {
    "id": "372",
    "fullName": "Talonflame",
    "hp": 78,
    "attack": 81,
    "defense": 71,
    "specialAttack": 74,
    "specialDefense": 69,
    "speed": 126,
    "total": 499,
    "height": "120 cm",
    "weight": "24.5 kg",
    "category": "Scorching Pokémon",
    "types": [
      "FIRE",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Big Pecks",
        "hidden": false
      },
      {
        "name": "Gale Wings",
        "hidden": true
      }
    ]
  },
  "Mimikyu": {
    "id": "373",
    "fullName": "Mimikyu",
    "hp": 55,
    "attack": 90,
    "defense": 80,
    "specialAttack": 50,
    "specialDefense": 105,
    "speed": 96,
    "total": 476,
    "height": "20 cm",
    "weight": "0.7 kg",
    "category": "Disguise Pokémon",
    "types": [
      "GHOST",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Disguise",
        "hidden": false
      },
      {
        "name": "Disguise",
        "hidden": true
      }
    ]
  },
  "Volcarona": {
    "id": "374",
    "fullName": "Volcarona",
    "hp": 85,
    "attack": 60,
    "defense": 65,
    "specialAttack": 135,
    "specialDefense": 105,
    "speed": 100,
    "total": 550,
    "height": "160 cm",
    "weight": "46 kg",
    "category": "Sun Pokémon",
    "types": [
      "BUG",
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Swarm",
        "hidden": true
      }
    ]
  },
  "Deino": {
    "id": "375",
    "fullName": "Deino",
    "hp": 52,
    "attack": 65,
    "defense": 50,
    "specialAttack": 45,
    "specialDefense": 50,
    "speed": 38,
    "total": 300,
    "height": "80 cm",
    "weight": "17.3 kg",
    "category": "Irate Pokémon",
    "types": [
      "DARK",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Hustle",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": true
      }
    ]
  },
  "Zweilous": {
    "id": "376",
    "fullName": "Zweilous",
    "hp": 72,
    "attack": 85,
    "defense": 70,
    "specialAttack": 65,
    "specialDefense": 70,
    "speed": 58,
    "total": 420,
    "height": "140 cm",
    "weight": "50 kg",
    "category": "Hostile Pokémon",
    "types": [
      "DARK",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Hustle",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": true
      }
    ]
  },
  "Hydreigon": {
    "id": "377",
    "fullName": "Hydreigon",
    "hp": 92,
    "attack": 105,
    "defense": 90,
    "specialAttack": 125,
    "specialDefense": 90,
    "speed": 98,
    "total": 600,
    "height": "180 cm",
    "weight": "160 kg",
    "category": "Brutal Pokémon",
    "types": [
      "DARK",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Hustle",
        "hidden": true
      }
    ]
  },
  "Latias": {
    "id": "378",
    "fullName": "Latias",
    "hp": 80,
    "attack": 80,
    "defense": 90,
    "specialAttack": 110,
    "specialDefense": 130,
    "speed": 110,
    "total": 600,
    "height": "140 cm",
    "weight": "40 kg",
    "category": "Eon Pokémon",
    "types": [
      "DRAGON",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Levitate",
        "hidden": true
      }
    ]
  },
  "Latios": {
    "id": "379",
    "fullName": "Latios",
    "hp": 80,
    "attack": 90,
    "defense": 80,
    "specialAttack": 130,
    "specialDefense": 110,
    "speed": 110,
    "total": 600,
    "height": "200 cm",
    "weight": "60 kg",
    "category": "Eon Pokémon",
    "types": [
      "DRAGON",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Levitate",
        "hidden": true
      }
    ]
  },
  "Deoxys": {
    "id": "380",
    "fullName": "Deoxys",
    "hp": 50,
    "attack": 150,
    "defense": 50,
    "specialAttack": 150,
    "specialDefense": 50,
    "speed": 150,
    "total": 600,
    "height": "170 cm",
    "weight": "60.8 kg",
    "category": "DNA Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Pressure",
        "hidden": false
      },
      {
        "name": "Pressure",
        "hidden": true
      }
    ]
  },
  "Jirachi": {
    "id": "381",
    "fullName": "Jirachi",
    "hp": 100,
    "attack": 100,
    "defense": 100,
    "specialAttack": 100,
    "specialDefense": 100,
    "speed": 100,
    "total": 600,
    "height": "30 cm",
    "weight": "1.1 kg",
    "category": "Wish Pokémon",
    "types": [
      "STEEL",
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Serene Grace",
        "hidden": false
      },
      {
        "name": "Serene Grace",
        "hidden": true
      }
    ]
  },
  "Nincada": {
    "id": "382",
    "fullName": "Nincada",
    "hp": 31,
    "attack": 45,
    "defense": 90,
    "specialAttack": 30,
    "specialDefense": 30,
    "speed": 40,
    "total": 266,
    "height": "50 cm",
    "weight": "5.5 kg",
    "category": "Trainee Pokémon",
    "types": [
      "BUG",
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Compound Eyes",
        "hidden": false
      },
      {
        "name": "Run Away",
        "hidden": true
      }
    ]
  },
  "Bibarel": {
    "id": "383",
    "fullName": "Bibarel",
    "hp": 79,
    "attack": 85,
    "defense": 60,
    "specialAttack": 55,
    "specialDefense": 60,
    "speed": 71,
    "total": 410,
    "height": "100 cm",
    "weight": "31.5 kg",
    "category": "Beaver Pokémon",
    "types": [
      "NORMAL",
      "WATER"
    ],
    "abilities": [
      {
        "name": "Simple",
        "hidden": false
      },
      {
        "name": "Unaware",
        "hidden": false
      },
      {
        "name": "Moody",
        "hidden": true
      }
    ]
  },
  "Riolu": {
    "id": "384",
    "fullName": "Riolu",
    "hp": 40,
    "attack": 70,
    "defense": 40,
    "specialAttack": 35,
    "specialDefense": 40,
    "speed": 60,
    "total": 285,
    "height": "70 cm",
    "weight": "20.2 kg",
    "category": "Emanation Pokémon",
    "types": [
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Steadfast",
        "hidden": false
      },
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Prankster",
        "hidden": true
      }
    ]
  },
  "Slakoth": {
    "id": "385",
    "fullName": "Slakoth",
    "hp": 60,
    "attack": 60,
    "defense": 60,
    "specialAttack": 35,
    "specialDefense": 35,
    "speed": 30,
    "total": 280,
    "height": "80 cm",
    "weight": "24 kg",
    "category": "Slacker Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Truant",
        "hidden": false
      },
      {
        "name": "Truant",
        "hidden": true
      }
    ]
  },
  "Vigoroth": {
    "id": "386",
    "fullName": "Vigoroth",
    "hp": 80,
    "attack": 80,
    "defense": 80,
    "specialAttack": 55,
    "specialDefense": 55,
    "speed": 90,
    "total": 440,
    "height": "140 cm",
    "weight": "46.5 kg",
    "category": "Wild Monkey Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Vital Spirit",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": true
      }
    ]
  },
  "Wailmer": {
    "id": "387",
    "fullName": "Wailmer",
    "hp": 130,
    "attack": 70,
    "defense": 35,
    "specialAttack": 70,
    "specialDefense": 35,
    "speed": 60,
    "total": 400,
    "height": "200 cm",
    "weight": "130 kg",
    "category": "Ball Whale Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Water Veil",
        "hidden": false
      },
      {
        "name": "Oblivious",
        "hidden": false
      },
      {
        "name": "Pressure",
        "hidden": true
      }
    ]
  },
  "Shinx": {
    "id": "388",
    "fullName": "Shinx",
    "hp": 45,
    "attack": 65,
    "defense": 34,
    "specialAttack": 40,
    "specialDefense": 34,
    "speed": 45,
    "total": 263,
    "height": "50 cm",
    "weight": "9.5 kg",
    "category": "Flash Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": true
      }
    ]
  },
  "Luxio": {
    "id": "389",
    "fullName": "Luxio",
    "hp": 60,
    "attack": 85,
    "defense": 49,
    "specialAttack": 60,
    "specialDefense": 49,
    "speed": 60,
    "total": 363,
    "height": "90 cm",
    "weight": "30.5 kg",
    "category": "Spark Pokémon",
    "types": [
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Guts",
        "hidden": true
      }
    ]
  },
  "Aron": {
    "id": "390",
    "fullName": "Aron",
    "hp": 50,
    "attack": 70,
    "defense": 100,
    "specialAttack": 40,
    "specialDefense": 40,
    "speed": 30,
    "total": 330,
    "height": "40 cm",
    "weight": "60 kg",
    "category": "Iron Armor Pokémon",
    "types": [
      "STEEL",
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Heavy Metal",
        "hidden": true
      }
    ]
  },
  "Lairon": {
    "id": "391",
    "fullName": "Lairon",
    "hp": 60,
    "attack": 90,
    "defense": 140,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 40,
    "total": 430,
    "height": "90 cm",
    "weight": "120 kg",
    "category": "Iron Armor Pokémon",
    "types": [
      "STEEL",
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Sturdy",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Heavy Metal",
        "hidden": true
      }
    ]
  },
  "Trapinch": {
    "id": "392",
    "fullName": "Trapinch",
    "hp": 45,
    "attack": 100,
    "defense": 45,
    "specialAttack": 45,
    "specialDefense": 45,
    "speed": 10,
    "total": 290,
    "height": "70 cm",
    "weight": "15 kg",
    "category": "Ant Pit Pokémon",
    "types": [
      "GROUND"
    ],
    "abilities": [
      {
        "name": "Hyper Cutter",
        "hidden": false
      },
      {
        "name": "Arena Trap",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Vibrava": {
    "id": "393",
    "fullName": "Vibrava",
    "hp": 50,
    "attack": 70,
    "defense": 50,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 70,
    "total": 340,
    "height": "110 cm",
    "weight": "15.3 kg",
    "category": "Vibration Pokémon",
    "types": [
      "GROUND",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Levitate",
        "hidden": false
      },
      {
        "name": "Levitate",
        "hidden": true
      }
    ]
  },
  "Feebas": {
    "id": "394",
    "fullName": "Feebas",
    "hp": 20,
    "attack": 15,
    "defense": 20,
    "specialAttack": 10,
    "specialDefense": 55,
    "speed": 80,
    "total": 200,
    "height": "60 cm",
    "weight": "7.4 kg",
    "category": "Fish Pokémon",
    "types": [
      "WATER"
    ],
    "abilities": [
      {
        "name": "Swift Swim",
        "hidden": false
      },
      {
        "name": "Adaptability",
        "hidden": true
      }
    ]
  },
  "Bagon": {
    "id": "395",
    "fullName": "Bagon",
    "hp": 45,
    "attack": 75,
    "defense": 60,
    "specialAttack": 40,
    "specialDefense": 30,
    "speed": 50,
    "total": 300,
    "height": "60 cm",
    "weight": "42.1 kg",
    "category": "Rock Head Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Sheer Force",
        "hidden": true
      }
    ]
  },
  "Shelgon": {
    "id": "396",
    "fullName": "Shelgon",
    "hp": 65,
    "attack": 95,
    "defense": 100,
    "specialAttack": 60,
    "specialDefense": 50,
    "speed": 50,
    "total": 420,
    "height": "110 cm",
    "weight": "110.5 kg",
    "category": "Endurance Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Rock Head",
        "hidden": false
      },
      {
        "name": "Overcoat",
        "hidden": true
      }
    ]
  },
  "Klink": {
    "id": "397",
    "fullName": "Klink",
    "hp": 40,
    "attack": 55,
    "defense": 70,
    "specialAttack": 45,
    "specialDefense": 60,
    "speed": 30,
    "total": 300,
    "height": "30 cm",
    "weight": "21 kg",
    "category": "Gear Pokémon",
    "types": [
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Plus",
        "hidden": false
      },
      {
        "name": "Minus",
        "hidden": false
      },
      {
        "name": "Clear Body",
        "hidden": true
      }
    ]
  },
  "Klang": {
    "id": "398",
    "fullName": "Klang",
    "hp": 60,
    "attack": 80,
    "defense": 95,
    "specialAttack": 70,
    "specialDefense": 85,
    "speed": 50,
    "total": 440,
    "height": "60 cm",
    "weight": "51 kg",
    "category": "Gear Pokémon",
    "types": [
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Plus",
        "hidden": false
      },
      {
        "name": "Minus",
        "hidden": false
      },
      {
        "name": "Clear Body",
        "hidden": true
      }
    ]
  },
  "Zorua": {
    "id": "399",
    "fullName": "Zorua",
    "hp": 40,
    "attack": 65,
    "defense": 40,
    "specialAttack": 80,
    "specialDefense": 40,
    "speed": 65,
    "total": 330,
    "height": "70 cm",
    "weight": "12.5 kg",
    "category": "Tricky Fox Pokémon",
    "types": [
      "DARK"
    ],
    "abilities": [
      {
        "name": "Illusion",
        "hidden": false
      },
      {
        "name": "Illusion",
        "hidden": true
      }
    ]
  },
  "Budew": {
    "id": "400",
    "fullName": "Budew",
    "hp": 40,
    "attack": 30,
    "defense": 35,
    "specialAttack": 50,
    "specialDefense": 70,
    "speed": 55,
    "total": 280,
    "height": "20 cm",
    "weight": "1.2 kg",
    "category": "Bud Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": true
      }
    ]
  },
  "Roselia": {
    "id": "401",
    "fullName": "Roselia",
    "hp": 50,
    "attack": 60,
    "defense": 45,
    "specialAttack": 100,
    "specialDefense": 80,
    "speed": 65,
    "total": 400,
    "height": "30 cm",
    "weight": "2 kg",
    "category": "Thorn Pokémon",
    "types": [
      "GRASS",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Leaf Guard",
        "hidden": true
      }
    ]
  },
  "Drifloon": {
    "id": "402",
    "fullName": "Drifloon",
    "hp": 90,
    "attack": 50,
    "defense": 34,
    "specialAttack": 60,
    "specialDefense": 44,
    "speed": 70,
    "total": 348,
    "height": "40 cm",
    "weight": "1.2 kg",
    "category": "Balloon Pokémon",
    "types": [
      "GHOST",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Aftermath",
        "hidden": false
      },
      {
        "name": "Unburden",
        "hidden": false
      },
      {
        "name": "Flare Boost",
        "hidden": true
      }
    ]
  },
  "Buneary": {
    "id": "403",
    "fullName": "Buneary",
    "hp": 55,
    "attack": 66,
    "defense": 44,
    "specialAttack": 44,
    "specialDefense": 56,
    "speed": 85,
    "total": 350,
    "height": "40 cm",
    "weight": "5.5 kg",
    "category": "Rabbit Pokémon",
    "types": [
      "NORMAL"
    ],
    "abilities": [
      {
        "name": "Run Away",
        "hidden": false
      },
      {
        "name": "Klutz",
        "hidden": false
      },
      {
        "name": "Limber",
        "hidden": true
      }
    ]
  },
  "Shroomish": {
    "id": "404",
    "fullName": "Shroomish",
    "hp": 60,
    "attack": 40,
    "defense": 60,
    "specialAttack": 40,
    "specialDefense": 60,
    "speed": 35,
    "total": 295,
    "height": "40 cm",
    "weight": "4.5 kg",
    "category": "Mushroom Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Effect Spore",
        "hidden": false
      },
      {
        "name": "Poison Heal",
        "hidden": false
      },
      {
        "name": "Quick Feet",
        "hidden": true
      }
    ]
  },
  "Shuppet": {
    "id": "405",
    "fullName": "Shuppet",
    "hp": 44,
    "attack": 75,
    "defense": 35,
    "specialAttack": 63,
    "specialDefense": 33,
    "speed": 45,
    "total": 295,
    "height": "60 cm",
    "weight": "2.3 kg",
    "category": "Puppet Pokémon",
    "types": [
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Insomnia",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": false
      },
      {
        "name": "Cursed Body",
        "hidden": true
      }
    ]
  },
  "Solosis": {
    "id": "406",
    "fullName": "Solosis",
    "hp": 45,
    "attack": 30,
    "defense": 40,
    "specialAttack": 105,
    "specialDefense": 50,
    "speed": 20,
    "total": 290,
    "height": "30 cm",
    "weight": "1 kg",
    "category": "Cell Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Overcoat",
        "hidden": false
      },
      {
        "name": "Magic Guard",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Duosion": {
    "id": "407",
    "fullName": "Duosion",
    "hp": 65,
    "attack": 40,
    "defense": 50,
    "specialAttack": 125,
    "specialDefense": 60,
    "speed": 30,
    "total": 370,
    "height": "60 cm",
    "weight": "8 kg",
    "category": "Mitosis Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Overcoat",
        "hidden": false
      },
      {
        "name": "Magic Guard",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Cottonee": {
    "id": "408",
    "fullName": "Cottonee",
    "hp": 40,
    "attack": 27,
    "defense": 60,
    "specialAttack": 37,
    "specialDefense": 50,
    "speed": 66,
    "total": 280,
    "height": "30 cm",
    "weight": "0.6 kg",
    "category": "Cotton Puff Pokémon",
    "types": [
      "GRASS",
      "FAIRY"
    ],
    "abilities": [
      {
        "name": "Prankster",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": false
      },
      {
        "name": "Chlorophyll",
        "hidden": true
      }
    ]
  },
  "Sandile": {
    "id": "409",
    "fullName": "Sandile",
    "hp": 50,
    "attack": 72,
    "defense": 35,
    "specialAttack": 35,
    "specialDefense": 35,
    "speed": 65,
    "total": 292,
    "height": "70 cm",
    "weight": "15.2 kg",
    "category": "Desert Croc Pokémon",
    "types": [
      "GROUND",
      "DARK"
    ],
    "abilities": [
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Moxie",
        "hidden": false
      },
      {
        "name": "Anger Point",
        "hidden": true
      }
    ]
  },
  "Krokorok": {
    "id": "410",
    "fullName": "Krokorok",
    "hp": 60,
    "attack": 82,
    "defense": 45,
    "specialAttack": 45,
    "specialDefense": 45,
    "speed": 74,
    "total": 351,
    "height": "100 cm",
    "weight": "33.4 kg",
    "category": "Desert Croc Pokémon",
    "types": [
      "GROUND",
      "DARK"
    ],
    "abilities": [
      {
        "name": "Intimidate",
        "hidden": false
      },
      {
        "name": "Moxie",
        "hidden": false
      },
      {
        "name": "Anger Point",
        "hidden": true
      }
    ]
  },
  "Yamask": {
    "id": "411",
    "fullName": "Yamask",
    "hp": 38,
    "attack": 30,
    "defense": 85,
    "specialAttack": 55,
    "specialDefense": 65,
    "speed": 30,
    "total": 303,
    "height": "50 cm",
    "weight": "1.5 kg",
    "category": "Spirit Pokémon",
    "types": [
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Mummy",
        "hidden": false
      },
      {
        "name": "Mummy",
        "hidden": true
      }
    ]
  },
  "Joltik": {
    "id": "412",
    "fullName": "Joltik",
    "hp": 50,
    "attack": 47,
    "defense": 50,
    "specialAttack": 57,
    "specialDefense": 50,
    "speed": 65,
    "total": 319,
    "height": "10 cm",
    "weight": "0.6 kg",
    "category": "Attaching Pokémon",
    "types": [
      "BUG",
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Compound Eyes",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": false
      },
      {
        "name": "Swarm",
        "hidden": true
      }
    ]
  },
  "Ferroseed": {
    "id": "413",
    "fullName": "Ferroseed",
    "hp": 44,
    "attack": 50,
    "defense": 91,
    "specialAttack": 24,
    "specialDefense": 86,
    "speed": 10,
    "total": 305,
    "height": "60 cm",
    "weight": "18.8 kg",
    "category": "Thorn Seed Pokémon",
    "types": [
      "GRASS",
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Iron Barbs",
        "hidden": false
      },
      {
        "name": "Iron Barbs",
        "hidden": true
      }
    ]
  },
  "Axew": {
    "id": "414",
    "fullName": "Axew",
    "hp": 46,
    "attack": 87,
    "defense": 60,
    "specialAttack": 30,
    "specialDefense": 40,
    "speed": 57,
    "total": 320,
    "height": "60 cm",
    "weight": "18 kg",
    "category": "Tusk Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Mold Breaker",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Fraxure": {
    "id": "415",
    "fullName": "Fraxure",
    "hp": 66,
    "attack": 117,
    "defense": 70,
    "specialAttack": 40,
    "specialDefense": 50,
    "speed": 67,
    "total": 410,
    "height": "100 cm",
    "weight": "36 kg",
    "category": "Axe Jaw Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Rivalry",
        "hidden": false
      },
      {
        "name": "Mold Breaker",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Golett": {
    "id": "416",
    "fullName": "Golett",
    "hp": 59,
    "attack": 74,
    "defense": 50,
    "specialAttack": 35,
    "specialDefense": 50,
    "speed": 35,
    "total": 303,
    "height": "100 cm",
    "weight": "92 kg",
    "category": "Automaton Pokémon",
    "types": [
      "GROUND",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Iron Fist",
        "hidden": false
      },
      {
        "name": "Klutz",
        "hidden": false
      },
      {
        "name": "No Guard",
        "hidden": true
      }
    ]
  },
  "Fletchling": {
    "id": "417",
    "fullName": "Fletchling",
    "hp": 45,
    "attack": 50,
    "defense": 43,
    "specialAttack": 40,
    "specialDefense": 38,
    "speed": 62,
    "total": 278,
    "height": "30 cm",
    "weight": "1.7 kg",
    "category": "TinyRobin Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Big Pecks",
        "hidden": false
      },
      {
        "name": "Gale Wings",
        "hidden": true
      }
    ]
  },
  "Fletchinder": {
    "id": "418",
    "fullName": "Fletchinder",
    "hp": 62,
    "attack": 73,
    "defense": 55,
    "specialAttack": 56,
    "specialDefense": 52,
    "speed": 84,
    "total": 382,
    "height": "70 cm",
    "weight": "16 kg",
    "category": "Ember Pokémon",
    "types": [
      "FIRE",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Gale Wings",
        "hidden": true
      }
    ]
  },
  "Larvesta": {
    "id": "419",
    "fullName": "Larvesta",
    "hp": 55,
    "attack": 85,
    "defense": 55,
    "specialAttack": 50,
    "specialDefense": 55,
    "speed": 60,
    "total": 360,
    "height": "110 cm",
    "weight": "28.8 kg",
    "category": "Torch Pokémon",
    "types": [
      "BUG",
      "FIRE"
    ],
    "abilities": [
      {
        "name": "Flame Body",
        "hidden": false
      },
      {
        "name": "Swarm",
        "hidden": true
      }
    ]
  },
  "Stunfisk": {
    "id": "420",
    "fullName": "Stunfisk",
    "hp": 109,
    "attack": 66,
    "defense": 84,
    "specialAttack": 81,
    "specialDefense": 99,
    "speed": 32,
    "total": 471,
    "height": "70 cm",
    "weight": "11 kg",
    "category": "Trap Pokémon",
    "types": [
      "GROUND",
      "ELECTRIC"
    ],
    "abilities": [
      {
        "name": "Static",
        "hidden": false
      },
      {
        "name": "Limber",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": true
      }
    ]
  },
  "Sableye": {
    "id": "421",
    "fullName": "Sableye",
    "hp": 50,
    "attack": 75,
    "defense": 75,
    "specialAttack": 65,
    "specialDefense": 65,
    "speed": 50,
    "total": 380,
    "height": "50 cm",
    "weight": "11 kg",
    "category": "Darkness Pokémon",
    "types": [
      "DARK",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Stall",
        "hidden": false
      },
      {
        "name": "Prankster",
        "hidden": true
      }
    ]
  },
  "Venipede": {
    "id": "422",
    "fullName": "Venipede",
    "hp": 30,
    "attack": 45,
    "defense": 59,
    "specialAttack": 30,
    "specialDefense": 39,
    "speed": 57,
    "total": 260,
    "height": "40 cm",
    "weight": "5.3 kg",
    "category": "Centipede Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Speed Boost",
        "hidden": true
      }
    ]
  },
  "Whirlipede": {
    "id": "423",
    "fullName": "Whirlipede",
    "hp": 40,
    "attack": 55,
    "defense": 99,
    "specialAttack": 40,
    "specialDefense": 79,
    "speed": 47,
    "total": 360,
    "height": "120 cm",
    "weight": "58.5 kg",
    "category": "Curlipede Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Speed Boost",
        "hidden": true
      }
    ]
  },
  "Scolipede": {
    "id": "424",
    "fullName": "Scolipede",
    "hp": 60,
    "attack": 100,
    "defense": 89,
    "specialAttack": 55,
    "specialDefense": 69,
    "speed": 112,
    "total": 485,
    "height": "250 cm",
    "weight": "200.5 kg",
    "category": "Megapede Pokémon",
    "types": [
      "BUG",
      "POISON"
    ],
    "abilities": [
      {
        "name": "Poison Point",
        "hidden": false
      },
      {
        "name": "Swarm",
        "hidden": false
      },
      {
        "name": "Speed Boost",
        "hidden": true
      }
    ]
  },
  "Tyrunt": {
    "id": "425",
    "fullName": "Tyrunt",
    "hp": 58,
    "attack": 89,
    "defense": 77,
    "specialAttack": 45,
    "specialDefense": 45,
    "speed": 48,
    "total": 362,
    "height": "80 cm",
    "weight": "26 kg",
    "category": "Royal Heir Pokémon",
    "types": [
      "ROCK",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Strong Jaw",
        "hidden": false
      },
      {
        "name": "Sturdy",
        "hidden": true
      }
    ]
  },
  "Tyrantrum": {
    "id": "426",
    "fullName": "Tyrantrum",
    "hp": 82,
    "attack": 121,
    "defense": 119,
    "specialAttack": 69,
    "specialDefense": 59,
    "speed": 71,
    "total": 521,
    "height": "250 cm",
    "weight": "270 kg",
    "category": "Despot Pokémon",
    "types": [
      "ROCK",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Strong Jaw",
        "hidden": false
      },
      {
        "name": "Rock Head",
        "hidden": true
      }
    ]
  },
  "Snorunt": {
    "id": "427",
    "fullName": "Snorunt",
    "hp": 50,
    "attack": 50,
    "defense": 50,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 50,
    "total": 300,
    "height": "70 cm",
    "weight": "16.8 kg",
    "category": "Snow Hat Pokémon",
    "types": [
      "ICE"
    ],
    "abilities": [
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Ice Body",
        "hidden": false
      },
      {
        "name": "Moody",
        "hidden": true
      }
    ]
  },
  "Glalie": {
    "id": "428",
    "fullName": "Glalie",
    "hp": 80,
    "attack": 80,
    "defense": 80,
    "specialAttack": 80,
    "specialDefense": 80,
    "speed": 80,
    "total": 480,
    "height": "150 cm",
    "weight": "256.5 kg",
    "category": "Face Pokémon",
    "types": [
      "ICE"
    ],
    "abilities": [
      {
        "name": "Inner Focus",
        "hidden": false
      },
      {
        "name": "Ice Body",
        "hidden": false
      },
      {
        "name": "Moody",
        "hidden": true
      }
    ]
  },
  "Froslass": {
    "id": "429",
    "fullName": "Froslass",
    "hp": 70,
    "attack": 80,
    "defense": 70,
    "specialAttack": 80,
    "specialDefense": 70,
    "speed": 110,
    "total": 480,
    "height": "130 cm",
    "weight": "26.6 kg",
    "category": "Snow Land Pokémon",
    "types": [
      "ICE",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Snow Cloak",
        "hidden": false
      },
      {
        "name": "Cursed Body",
        "hidden": true
      }
    ]
  },
  "Oricorio Baile Style": {
    "id": "430",
    "fullName": "Oricorio Baile Style",
    "hp": 75,
    "attack": 70,
    "defense": 70,
    "specialAttack": 98,
    "specialDefense": 70,
    "speed": 93,
    "total": 476,
    "height": "60 cm",
    "weight": "3.4 kg",
    "category": "Dancing Pokémon",
    "types": [
      "FIRE",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Dancer",
        "hidden": false
      }
    ]
  },
  "Oricorio Pom-Pom Style": {
    "id": "431",
    "fullName": "Oricorio Pom-Pom Style",
    "hp": 75,
    "attack": 70,
    "defense": 70,
    "specialAttack": 98,
    "specialDefense": 70,
    "speed": 93,
    "total": 476,
    "height": "60 cm",
    "weight": "3.4 kg",
    "category": "Dancing Pokémon",
    "types": [
      "ELECTRIC",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Dancer",
        "hidden": false
      }
    ]
  },
  "Oricorio Pa'u Style": {
    "id": "432",
    "fullName": "Oricorio Pa'u Style",
    "hp": 75,
    "attack": 70,
    "defense": 70,
    "specialAttack": 98,
    "specialDefense": 70,
    "speed": 93,
    "total": 476,
    "height": "60 cm",
    "weight": "3.4 kg",
    "category": "Dancing Pokémon",
    "types": [
      "PSYCHIC",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Dancer",
        "hidden": false
      }
    ]
  },
  "Oricorio Sensu Style": {
    "id": "433",
    "fullName": "Oricorio Sensu Style",
    "hp": 75,
    "attack": 70,
    "defense": 70,
    "specialAttack": 98,
    "specialDefense": 70,
    "speed": 93,
    "total": 476,
    "height": "60 cm",
    "weight": "3.4 kg",
    "category": "Dancing Pokémon",
    "types": [
      "GHOST",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Dancer",
        "hidden": false
      }
    ]
  },
  "Trubbish": {
    "id": "434",
    "fullName": "Trubbish",
    "hp": 50,
    "attack": 50,
    "defense": 62,
    "specialAttack": 40,
    "specialDefense": 62,
    "speed": 65,
    "total": 329,
    "height": "60 cm",
    "weight": "31 kg",
    "category": "Trash Bag Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Stench",
        "hidden": false
      },
      {
        "name": "Sticky Hold",
        "hidden": false
      },
      {
        "name": "Aftermath",
        "hidden": true
      }
    ]
  },
  "Garbodor": {
    "id": "435",
    "fullName": "Garbodor",
    "hp": 80,
    "attack": 95,
    "defense": 82,
    "specialAttack": 60,
    "specialDefense": 82,
    "speed": 75,
    "total": 474,
    "height": "190 cm",
    "weight": "107.3 kg",
    "category": "Trash Heap Pokémon",
    "types": [
      "POISON"
    ],
    "abilities": [
      {
        "name": "Stench",
        "hidden": false
      },
      {
        "name": "Weak Armor",
        "hidden": false
      },
      {
        "name": "Aftermath",
        "hidden": true
      }
    ]
  },
  "Carvanha": {
    "id": "436",
    "fullName": "Carvanha",
    "hp": 45,
    "attack": 90,
    "defense": 20,
    "specialAttack": 65,
    "specialDefense": 20,
    "speed": 65,
    "total": 305,
    "height": "80 cm",
    "weight": "20.8 kg",
    "category": "Savage Pokémon",
    "types": [
      "WATER",
      "DARK"
    ],
    "abilities": [
      {
        "name": "Rough Skin",
        "hidden": false
      },
      {
        "name": "Speed Boost",
        "hidden": true
      }
    ]
  },
  "Sharpedo": {
    "id": "437",
    "fullName": "Sharpedo",
    "hp": 70,
    "attack": 120,
    "defense": 40,
    "specialAttack": 95,
    "specialDefense": 40,
    "speed": 95,
    "total": 460,
    "height": "180 cm",
    "weight": "88.8 kg",
    "category": "Brutal Pokémon",
    "types": [
      "WATER",
      "DARK"
    ],
    "abilities": [
      {
        "name": "Rough Skin",
        "hidden": false
      },
      {
        "name": "Speed Boost",
        "hidden": true
      }
    ]
  },
  "Phantump": {
    "id": "438",
    "fullName": "Phantump",
    "hp": 43,
    "attack": 70,
    "defense": 48,
    "specialAttack": 50,
    "specialDefense": 60,
    "speed": 38,
    "total": 309,
    "height": "40 cm",
    "weight": "7 kg",
    "category": "Stump Pokémon",
    "types": [
      "GHOST",
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": false
      },
      {
        "name": "Harvest",
        "hidden": true
      }
    ]
  },
  "Trevenant": {
    "id": "439",
    "fullName": "Trevenant",
    "hp": 85,
    "attack": 110,
    "defense": 76,
    "specialAttack": 65,
    "specialDefense": 82,
    "speed": 56,
    "total": 474,
    "height": "150 cm",
    "weight": "71 kg",
    "category": "Elder Tree Pokémon",
    "types": [
      "GRASS",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Frisk",
        "hidden": false
      },
      {
        "name": "Harvest",
        "hidden": true
      }
    ]
  },
  "Noibat": {
    "id": "440",
    "fullName": "Noibat",
    "hp": 40,
    "attack": 30,
    "defense": 35,
    "specialAttack": 45,
    "specialDefense": 40,
    "speed": 55,
    "total": 245,
    "height": "50 cm",
    "weight": "8 kg",
    "category": "Sound Wave Pokémon",
    "types": [
      "FLYING",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Frisk",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Noivern": {
    "id": "441",
    "fullName": "Noivern",
    "hp": 85,
    "attack": 70,
    "defense": 80,
    "specialAttack": 97,
    "specialDefense": 80,
    "speed": 123,
    "total": 535,
    "height": "150 cm",
    "weight": "85 kg",
    "category": "Sound Wave Pokémon",
    "types": [
      "FLYING",
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Frisk",
        "hidden": false
      },
      {
        "name": "Infiltrator",
        "hidden": false
      },
      {
        "name": "Telepathy",
        "hidden": true
      }
    ]
  },
  "Swablu": {
    "id": "442",
    "fullName": "Swablu",
    "hp": 45,
    "attack": 40,
    "defense": 60,
    "specialAttack": 40,
    "specialDefense": 75,
    "speed": 50,
    "total": 310,
    "height": "40 cm",
    "weight": "1.2 kg",
    "category": "Cotton Bird Pokémon",
    "types": [
      "NORMAL",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Cloud Nine",
        "hidden": true
      }
    ]
  },
  "Altaria": {
    "id": "443",
    "fullName": "Altaria",
    "hp": 75,
    "attack": 70,
    "defense": 90,
    "specialAttack": 70,
    "specialDefense": 105,
    "speed": 80,
    "total": 490,
    "height": "110 cm",
    "weight": "20.6 kg",
    "category": "Humming Pokémon",
    "types": [
      "DRAGON",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Natural Cure",
        "hidden": false
      },
      {
        "name": "Cloud Nine",
        "hidden": true
      }
    ]
  },
  "Goomy": {
    "id": "444",
    "fullName": "Goomy",
    "hp": 45,
    "attack": 50,
    "defense": 35,
    "specialAttack": 55,
    "specialDefense": 75,
    "speed": 40,
    "total": 300,
    "height": "30 cm",
    "weight": "2.8 kg",
    "category": "Soft Tissue Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Sap Sipper",
        "hidden": false
      },
      {
        "name": "Hydration",
        "hidden": false
      },
      {
        "name": "Gooey",
        "hidden": true
      }
    ]
  },
  "Sliggoo": {
    "id": "445",
    "fullName": "Sliggoo",
    "hp": 68,
    "attack": 75,
    "defense": 53,
    "specialAttack": 83,
    "specialDefense": 113,
    "speed": 60,
    "total": 452,
    "height": "80 cm",
    "weight": "17.5 kg",
    "category": "Soft Tissue Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Sap Sipper",
        "hidden": false
      },
      {
        "name": "Hydration",
        "hidden": false
      },
      {
        "name": "Gooey",
        "hidden": true
      }
    ]
  },
  "Goodra": {
    "id": "446",
    "fullName": "Goodra",
    "hp": 90,
    "attack": 100,
    "defense": 70,
    "specialAttack": 110,
    "specialDefense": 150,
    "speed": 80,
    "total": 600,
    "height": "200 cm",
    "weight": "150.5 kg",
    "category": "Dragon Pokémon",
    "types": [
      "DRAGON"
    ],
    "abilities": [
      {
        "name": "Sap Sipper",
        "hidden": false
      },
      {
        "name": "Hydration",
        "hidden": false
      },
      {
        "name": "Gooey",
        "hidden": true
      }
    ]
  },
  "Regirock": {
    "id": "447",
    "fullName": "Regirock",
    "hp": 80,
    "attack": 100,
    "defense": 200,
    "specialAttack": 50,
    "specialDefense": 100,
    "speed": 50,
    "total": 580,
    "height": "170 cm",
    "weight": "230 kg",
    "category": "Rock Peak Pokémon",
    "types": [
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Clear Body",
        "hidden": false
      },
      {
        "name": "Sturdy",
        "hidden": true
      }
    ]
  },
  "Regice": {
    "id": "448",
    "fullName": "Regice",
    "hp": 80,
    "attack": 50,
    "defense": 100,
    "specialAttack": 100,
    "specialDefense": 200,
    "speed": 50,
    "total": 580,
    "height": "180 cm",
    "weight": "175 kg",
    "category": "Iceberg Pokémon",
    "types": [
      "ICE"
    ],
    "abilities": [
      {
        "name": "Clear Body",
        "hidden": false
      },
      {
        "name": "Ice Body",
        "hidden": true
      }
    ]
  },
  "Registeel": {
    "id": "449",
    "fullName": "Registeel",
    "hp": 80,
    "attack": 75,
    "defense": 150,
    "specialAttack": 75,
    "specialDefense": 150,
    "speed": 50,
    "total": 580,
    "height": "190 cm",
    "weight": "205 kg",
    "category": "Iron Pokémon",
    "types": [
      "STEEL"
    ],
    "abilities": [
      {
        "name": "Clear Body",
        "hidden": false
      },
      {
        "name": "Light Metal",
        "hidden": true
      }
    ]
  },
  "Necrozma": {
    "id": "450",
    "fullName": "Necrozma",
    "hp": 97,
    "attack": 107,
    "defense": 101,
    "specialAttack": 127,
    "specialDefense": 89,
    "speed": 79,
    "total": 600,
    "height": "240 cm",
    "weight": "230 kg",
    "category": "Prism Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": [
      {
        "name": "Prism Armor",
        "hidden": false
      }
    ]
  },
  "Stufful": {
    "id": "451",
    "fullName": "Stufful",
    "hp": 70,
    "attack": 75,
    "defense": 50,
    "specialAttack": 45,
    "specialDefense": 50,
    "speed": 50,
    "total": 340,
    "height": "50 cm",
    "weight": "6.8 kg",
    "category": "Flailing Pokémon",
    "types": [
      "NORMAL",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Fluffy",
        "hidden": false
      },
      {
        "name": "Klutz",
        "hidden": false
      },
      {
        "name": "Cute Charm",
        "hidden": true
      }
    ]
  },
  "Bewear": {
    "id": "452",
    "fullName": "Bewear",
    "hp": 120,
    "attack": 125,
    "defense": 80,
    "specialAttack": 55,
    "specialDefense": 60,
    "speed": 60,
    "total": 500,
    "height": "210 cm",
    "weight": "135 kg",
    "category": "Strong Arm Pokémon",
    "types": [
      "NORMAL",
      "FIGHTING"
    ],
    "abilities": [
      {
        "name": "Fluffy",
        "hidden": false
      },
      {
        "name": "Klutz",
        "hidden": false
      },
      {
        "name": "Unnerve",
        "hidden": true
      }
    ]
  },
  "Dhelmise": {
    "id": "453",
    "fullName": "Dhelmise",
    "hp": 70,
    "attack": 131,
    "defense": 100,
    "specialAttack": 86,
    "specialDefense": 90,
    "speed": 40,
    "total": 517,
    "height": "390 cm",
    "weight": "210 kg",
    "category": "Sea Creeper Pokémon",
    "types": [
      "GHOST",
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Steelworker",
        "hidden": false
      }
    ]
  },
  "Mareanie": {
    "id": "454",
    "fullName": "Mareanie",
    "hp": 50,
    "attack": 53,
    "defense": 62,
    "specialAttack": 43,
    "specialDefense": 52,
    "speed": 45,
    "total": 305,
    "height": "40 cm",
    "weight": "8 kg",
    "category": "Brutal Star Pokémon",
    "types": [
      "POISON",
      "WATER"
    ],
    "abilities": [
      {
        "name": "Merciless",
        "hidden": false
      },
      {
        "name": "Limber",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Toxapex": {
    "id": "455",
    "fullName": "Toxapex",
    "hp": 50,
    "attack": 63,
    "defense": 152,
    "specialAttack": 53,
    "specialDefense": 142,
    "speed": 35,
    "total": 495,
    "height": "70 cm",
    "weight": "14.5 kg",
    "category": "Brutal Star Pokémon",
    "types": [
      "POISON",
      "WATER"
    ],
    "abilities": [
      {
        "name": "Merciless",
        "hidden": false
      },
      {
        "name": "Limber",
        "hidden": false
      },
      {
        "name": "Regenerator",
        "hidden": true
      }
    ]
  },
  "Hawlucha": {
    "id": "456",
    "fullName": "Hawlucha",
    "hp": 78,
    "attack": 92,
    "defense": 75,
    "specialAttack": 74,
    "specialDefense": 63,
    "speed": 118,
    "total": 500,
    "height": "80 cm",
    "weight": "21.5 kg",
    "category": "Wrestling Pokémon",
    "types": [
      "FIGHTING",
      "FLYING"
    ],
    "abilities": [
      {
        "name": "Limber",
        "hidden": false
      },
      {
        "name": "Unburden",
        "hidden": false
      },
      {
        "name": "Mold Breaker",
        "hidden": true
      }
    ]
  },
  "Cacnea": {
    "id": "457",
    "fullName": "Cacnea",
    "hp": 50,
    "attack": 85,
    "defense": 40,
    "specialAttack": 85,
    "specialDefense": 40,
    "speed": 35,
    "total": 335,
    "height": "40 cm",
    "weight": "51.3 kg",
    "category": "Cactus Pokémon",
    "types": [
      "GRASS"
    ],
    "abilities": [
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": true
      }
    ]
  },
  "Cacturne": {
    "id": "458",
    "fullName": "Cacturne",
    "hp": 70,
    "attack": 115,
    "defense": 60,
    "specialAttack": 115,
    "specialDefense": 60,
    "speed": 55,
    "total": 475,
    "height": "130 cm",
    "weight": "77.4 kg",
    "category": "Scarecrow Pokémon",
    "types": [
      "GRASS",
      "DARK"
    ],
    "abilities": [
      {
        "name": "Sand Veil",
        "hidden": false
      },
      {
        "name": "Water Absorb",
        "hidden": true
      }
    ]
  },
  "Sandygast": {
    "id": "459",
    "fullName": "Sandygast",
    "hp": 55,
    "attack": 55,
    "defense": 80,
    "specialAttack": 70,
    "specialDefense": 45,
    "speed": 15,
    "total": 320,
    "height": "50 cm",
    "weight": "70 kg",
    "category": "Sand Heap Pokémon",
    "types": [
      "GROUND",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Water Compaction",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": true
      }
    ]
  },
  "Palossand": {
    "id": "460",
    "fullName": "Palossand",
    "hp": 85,
    "attack": 75,
    "defense": 110,
    "specialAttack": 100,
    "specialDefense": 75,
    "speed": 35,
    "total": 480,
    "height": "130 cm",
    "weight": "250 kg",
    "category": "Sand Castle Pokémon",
    "types": [
      "GROUND",
      "GHOST"
    ],
    "abilities": [
      {
        "name": "Water Compaction",
        "hidden": false
      },
      {
        "name": "Sand Veil",
        "hidden": true
      }
    ]
  },
  "Amaura": {
    "id": "461",
    "fullName": "Amaura",
    "hp": 77,
    "attack": 59,
    "defense": 50,
    "specialAttack": 67,
    "specialDefense": 63,
    "speed": 46,
    "total": 362,
    "height": "130 cm",
    "weight": "25.2 kg",
    "category": "Tundra Pokémon",
    "types": [
      "ROCK",
      "ICE"
    ],
    "abilities": [
      {
        "name": "Refrigerate",
        "hidden": false
      },
      {
        "name": "Snow Warning",
        "hidden": true
      }
    ]
  },
  "Aurorus": {
    "id": "462",
    "fullName": "Aurorus",
    "hp": 123,
    "attack": 77,
    "defense": 72,
    "specialAttack": 99,
    "specialDefense": 92,
    "speed": 58,
    "total": 521,
    "height": "270 cm",
    "weight": "225 kg",
    "category": "Tundra Pokémon",
    "types": [
      "ROCK",
      "ICE"
    ],
    "abilities": [
      {
        "name": "Refrigerate",
        "hidden": false
      },
      {
        "name": "Snow Warning",
        "hidden": true
      }
    ]
  },
  "Rockruff": {
    "id": "463",
    "fullName": "Rockruff",
    "hp": 45,
    "attack": 65,
    "defense": 40,
    "specialAttack": 30,
    "specialDefense": 40,
    "speed": 60,
    "total": 280,
    "height": "50 cm",
    "weight": "9.2 kg",
    "category": "Puppy Pokémon",
    "types": [
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": false
      },
      {
        "name": "Steadfast",
        "hidden": true
      }
    ]
  },
  "Lycanroc Midday": {
    "id": "464",
    "fullName": "Lycanroc Midday",
    "hp": 75,
    "attack": 115,
    "defense": 65,
    "specialAttack": 55,
    "specialDefense": 65,
    "speed": 112,
    "total": 487,
    "height": "80 cm",
    "weight": "25 kg",
    "category": "Wolf Pokémon",
    "types": [
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Sand Rush",
        "hidden": false
      },
      {
        "name": "Steadfast",
        "hidden": true
      }
    ]
  },
  "Lycanroc Midnight": {
    "id": "465",
    "fullName": "Lycanroc Midnight",
    "hp": 85,
    "attack": 115,
    "defense": 75,
    "specialAttack": 55,
    "specialDefense": 75,
    "speed": 82,
    "total": 487,
    "height": "110 cm",
    "weight": "25 kg",
    "category": "Wolf Pokémon",
    "types": [
      "ROCK"
    ],
    "abilities": [
      {
        "name": "Keen Eye",
        "hidden": false
      },
      {
        "name": "Vital Spirit",
        "hidden": false
      }
    ]
  },
  "Meloetta": {
    "id": "467",
    "fullName": "Meloetta",
    "hp": 100,
    "attack": 128,
    "defense": 90,
    "specialAttack": 77,
    "specialDefense": 77,
    "speed": 128,
    "total": 600,
    "height": "60 cm",
    "weight": "6.5 kg",
    "category": "Melody Pokémon",
    "types": [
      "NORMAL",
      "FIGHTING"
    ],
    "abilities": []
  },
  "Cresselia": {
    "id": "468",
    "fullName": "Cresselia",
    "hp": 120,
    "attack": 70,
    "defense": 120,
    "specialAttack": 75,
    "specialDefense": 130,
    "speed": 85,
    "total": 600,
    "height": "150 cm",
    "weight": "85.6 kg",
    "category": "Lunar Pokémon",
    "types": [
      "PSYCHIC"
    ],
    "abilities": []
  },
  "Bruxish": {
    "id": "469",
    "fullName": "Bruxish",
    "hp": 68,
    "attack": 105,
    "defense": 70,
    "specialAttack": 70,
    "specialDefense": 70,
    "speed": 92,
    "total": 475,
    "height": "90 cm",
    "weight": "19 kg",
    "category": "Gnash Teeth Pokémon",
    "types": [
      "WATER",
      "PSYCHIC"
    ],
    "abilities": []
  },
  "Ultra Necrozma": {
    "id": "470",
    "fullName": "Ultra Necrozma",
    "hp": 97,
    "attack": 167,
    "defense": 97,
    "specialAttack": 167,
    "specialDefense": 97,
    "speed": 129,
    "total": 754,
    "height": "750 cm",
    "weight": "230 kg",
    "category": "Prism Pokémon",
    "types": [
      "PSYCHIC",
      "DRAGON"
    ],
    "abilities": []
  }
}




const pokemonNameOne = firstPokeParam;
const pokemonNameTwo = secondPokeParam;
// const data   object here
// const dexIdOne = data[pokemonNameOne]["id"];
// const dexIdTwo = data[pokemonNameTwo]["id"];
//  console.log(dexIdOne, dexIdTwo, pokemonNameOne, pokemonNameTwo);



//  function generateFusionImages (dexIdOne, dexIdTwo)
const generateFusionImages = (dexIdOne, dexIdTwo) => {
  const firstCustomSpriteImageUrl = `https://cdn.jsdelivr.net/gh/8vish/custom-sprites/CustomBattlers/${dexIdOne}.${dexIdTwo}.png`;
  const secondCustomSpriteImageUrl = `https://cdn.jsdelivr.net/gh/8vish/custom-sprites/CustomBattlers/${dexIdTwo}.${dexIdOne}.png`;

  // Generate image URLs for autogen sprites
  const firstAutogenSpriteImageUrl = `https://cdn.jsdelivr.net/gh/8vish/autogen-sprites/Battlers/${dexIdOne}/${dexIdOne}.${dexIdTwo}.png`;
  const secondAutogenSpriteImageUrl = `https://cdn.jsdelivr.net/gh/8vish/autogen-sprites/Battlers/${dexIdTwo}/${dexIdTwo}.${dexIdOne}.png`;

  // Generate Fused Pokemon Name
  const firstFusedPokemonName = `${pokemonNameOne.slice(0, Math.floor(pokemonNameOne.length / 2))}${pokemonNameTwo.slice(Math.floor(pokemonNameTwo.length / 2))}`;
  const secondFusedPokemonName = `${pokemonNameTwo.slice(0, Math.floor(pokemonNameTwo.length / 2))}${pokemonNameOne.slice(Math.floor(pokemonNameOne.length / 2))}`;

  // Calculate dex numbers
  const firstCustomSpriteDexId = `${dexIdOne}.${dexIdTwo}`;
  const secondCustomSpriteDexId = `${dexIdTwo}.${dexIdOne}`;
  const firstAutogenSpriteDexId = `${dexIdOne}.${dexIdTwo}`;
  const secondAutogenSpriteDexId = `${dexIdTwo}.${dexIdOne}`;

  // Return an object containing all image URLs, fused Pokémon names, and their corresponding dex IDs
  return {
    firstCustomSpriteImageUrl,
    secondCustomSpriteImageUrl,
    firstAutogenSpriteImageUrl,
    secondAutogenSpriteImageUrl,
    firstCustomSpriteDexId,
    secondCustomSpriteDexId,
    firstAutogenSpriteDexId,
    secondAutogenSpriteDexId,
    firstFusedPokemonName,
    secondFusedPokemonName
  };
};





const calculateStats = (pokemonNameOne, pokemonNameTwo) => {
  const pokemonOne = data[pokemonNameOne];
  const pokemonTwo = data[pokemonNameTwo];

  // Check if both Pokémon exist in the data object
  if (!pokemonOne || !pokemonTwo) {
    return null; // Return null if either Pokémon name is invalid
  }

  // Destructure the stat values from the data object
  const { hp: headHP, attack: headAttack, defense: headDefense, specialAttack: headSpecialAttack, specialDefense: headSpecialDefense, speed: headSpeed, total: headTotal } = pokemonOne;
  const { hp: bodyHP, attack: bodyAttack, defense: bodyDefense, specialAttack: bodySpecialAttack, specialDefense: bodySpecialDefense, speed: bodySpeed, total: bodyTotal } = pokemonTwo;

  // Calculate fused stats using the correct formulas
  const fusedHP = Math.floor(2 * headHP / 3 + bodyHP / 3);
  const fusedAttack = Math.floor(2 * bodyAttack / 3 + headAttack / 3);
  const fusedDefense = Math.floor(2 * bodyDefense / 3 + headDefense / 3);
  const fusedSpecialAttack = Math.floor(2 * headSpecialAttack / 3 + bodySpecialAttack / 3);
  const fusedSpecialDefense = Math.floor(2 * headSpecialDefense / 3 + bodySpecialDefense / 3);
  const fusedSpeed = Math.floor(2 * bodySpeed / 3 + headSpeed / 3);
  const fusedTotal = fusedHP + fusedAttack + fusedDefense + fusedSpecialAttack + fusedSpecialDefense + fusedSpeed;

  // Calculate stat differences
  const hpDifference = headHP - fusedHP;
  const attackDifference = bodyAttack - fusedAttack;
  const defenseDifference = bodyDefense - fusedDefense;
  const specialAttackDifference = headSpecialAttack - fusedSpecialAttack;
  const specialDefenseDifference = headSpecialDefense - fusedSpecialDefense;
  const speedDifference = bodySpeed - fusedSpeed;
  const totalDifference = headTotal - fusedTotal;

  // Construct the output object
  const output = {
    hp: {
      value: `${fusedHP} (${hpDifference < 0 ? hpDifference : (hpDifference === 0 ? '+0' : '+' + hpDifference)})`,
      color: hpDifference === 0 ? 'Yellow' : hpDifference < 0 ? 'Red' : 'Green'
    },
    attack: {
      value: `${fusedAttack} (${attackDifference < 0 ? attackDifference : (attackDifference === 0 ? '+0' : '+' + attackDifference)})`,
      color: attackDifference === 0 ? 'Yellow' : attackDifference < 0 ? 'Red' : 'Green'
    },
    defense: {
      value: `${fusedDefense} (${defenseDifference < 0 ? defenseDifference : (defenseDifference === 0 ? '+0' : '+' + defenseDifference)})`,
      color: defenseDifference === 0 ? 'Yellow' : defenseDifference < 0 ? 'Red' : 'Green'
    },
    specialAttack: {
      value: `${fusedSpecialAttack} (${specialAttackDifference < 0 ? specialAttackDifference : (specialAttackDifference === 0 ? '+0' : '+' + specialAttackDifference)})`,
      color: specialAttackDifference === 0 ? 'Yellow' : specialAttackDifference < 0 ? 'Red' : 'Green'
    },
    specialDefense: {
      value: `${fusedSpecialDefense} (${specialDefenseDifference < 0 ? specialDefenseDifference : (specialDefenseDifference === 0 ? '+0' : '+' + specialDefenseDifference)})`,
      color: specialDefenseDifference === 0 ? 'Yellow' : specialDefenseDifference < 0 ? 'Red' : 'Green'
    },
    speed: {
      value: `${fusedSpeed} (${speedDifference < 0 ? speedDifference : (speedDifference === 0 ? '+0' : '+' + speedDifference)})`,
      color: speedDifference === 0 ? 'Yellow' : speedDifference < 0 ? 'Red' : 'Green'
    },
    total: {
      value: `${fusedTotal} (${totalDifference < 0 ? totalDifference : (totalDifference === 0 ? '+0' : '+' + totalDifference)})`,
      color: totalDifference === 0 ? 'Yellow' : totalDifference < 0 ? 'Red' : 'Green'
    }
  };

  return output;
};

const calculateTypes = (pokemonNameOne, pokemonNameTwo) => {
  // Declare variables of pokemon head and body types
  const pokemonHeadTypes = data[pokemonNameOne]["types"];
  const pokemonBodyTypes = data[pokemonNameTwo]["types"];

  // Check if both Pokémon exist in the data object
  if (!pokemonHeadTypes || !pokemonBodyTypes) {
    return null; // Return null if either Pokémon ID is invalid
  }

  // Check if the head Pokémon has a swapped type
  const swappedHeadTypes = checkSwappedTypes(pokemonNameOne, pokemonHeadTypes);

  // Check if the body Pokémon has a swapped type
  const swappedBodyTypes = checkSwappedTypes(pokemonNameTwo, pokemonBodyTypes);

  // Check if the head Pokémon has a dominant type
  const dominantHeadType = checkDominantType(pokemonNameOne, swappedHeadTypes);

  // Check if the body Pokémon has a dominant type
  const dominantBodyType = checkDominantType(pokemonNameTwo, swappedBodyTypes);

  // Determine the fused types
  let fusedTypes = [];

  if (dominantHeadType) {
    fusedTypes.push(dominantHeadType);
  } else {
    fusedTypes.push(swappedHeadTypes[0]);
  }

  if (dominantBodyType) {
    fusedTypes.push(dominantBodyType);
  } else if (swappedBodyTypes.length > 1 && !fusedTypes.includes(swappedBodyTypes[1])) {
    fusedTypes.push(swappedBodyTypes[1]);
  } else if (swappedBodyTypes.length === 1 && !fusedTypes.includes(swappedBodyTypes[0])) {
    fusedTypes.push(swappedBodyTypes[0]);
  }

  // check if fusedTypes both types are the same so return only one type (array length is 1)
  if (fusedTypes[0] === fusedTypes[1]) {
    fusedTypes = [fusedTypes[0]];
  }

  // Check if the fused types are valid
  return fusedTypes;
};

const checkSwappedTypes = (pokemonName, types) => {
  const dexId = data[pokemonName]["id"];
  const swappedTypesMap = {
    81: ["Electric", "Steel"], // Magnemite
    82: ["Electric", "Steel"], // Magneton
    295: ["Ghost", "Dark"], // Spiritomb
  };

  if (swappedTypesMap[dexId]) {
    return swappedTypesMap[dexId];
  }

  return types;
};

const checkDominantType = (pokemonName, types) => {
  const dexId = data[pokemonName]["id"];
  const dominantTypesMap = {
    1: "GRASS", // Bulbasaur
    2: "GRASS", // Ivysaur
    3: "GRASS", // Venusaur
    6: "FIRE", // Charizard
    74: "ROCK", // Geodude
    75: "ROCK", // Graveler
    76: "ROCK", // Golem
    92: "GHOST", // Gastly
    93: "GHOST", // Haunter
    94: "GHOST", // Gengar
    95: "ROCK", // Onix
    123: "BUG", // Scyther
    130: "WATER", // Gyarados
    144: "ICE", // Articuno
    145: "ELECTRIC", // Zapdos
    146: "FIRE", // Moltres
    149: "DRAGON", // Dragonite
    208: "STEEL", // Steelix
    16: "NORMAL", // Pidgey
    17: "NORMAL", // Pidgeotto
    18: "NORMAL", // Pidgeot
    // Add more dominant types as needed
  };

  if (dominantTypesMap[dexId]) {
    return dominantTypesMap[dexId];
  }

  if (types.includes("Normal") && types.includes("Flying")) {
    return "Flying";
  }

  return null;
};

const determineFusedTypes = (headTypes, bodyTypes) => {
  let fusedTypes = [];

  headTypes.forEach(type => {
    if (!fusedTypes.includes(type)) {
      fusedTypes.push(type);
    }
  });

  bodyTypes.forEach(type => {
    if (!fusedTypes.includes(type)) {
      fusedTypes.push(type);
    }
  });

  return fusedTypes;
};

const calculateAbility = (pokemonNameOne, pokemonNameTwo) => {
  const pokemonHeadAbilities = data[pokemonNameOne]["abilities"];
  const pokemonBodyAbilities = data[pokemonNameTwo]["abilities"];

  // Check if both Pokémon exist in the data object
  if (!pokemonHeadAbilities || !pokemonBodyAbilities) {
    return null; // Return null if either Pokémon name is invalid
  }

  // Check if the head or body Pokémon has swapped abilities
  const swappedHeadAbilities = checkSwappedAbilities(pokemonNameOne, pokemonHeadAbilities);
  const swappedBodyAbilities = checkSwappedAbilities(pokemonNameTwo, pokemonBodyAbilities);

  // Define arrays to store hidden and normal abilities
  const hiddenAbilities = [];
  const normalAbilities = [];

  // Add abilities to the respective arrays
  for (const ability of swappedHeadAbilities.concat(swappedBodyAbilities)) {
    if (ability.hidden) {
      hiddenAbilities.push(ability.name);
    } else {
      normalAbilities.push(ability.name);
    }
  }

  // Return an object containing hidden and normal abilities
  return { hiddenAbilities, normalAbilities };
};



const checkSwappedAbilities = (pokemonName, abilities) => {
  const swappedAbilitiesMap = {
    "Pidgey": [abilities[1], abilities[0]],
    "Ekans": [abilities[1], abilities[0]],
    "Diglett": [abilities[1], abilities[0]],
    "Growlithe": [abilities[1], abilities[0]],
    "Machop": [abilities[1], abilities[0]],
    "Geodude": [abilities[1], abilities[0]],
    "Farfetch'd": [abilities[1], abilities[0]],
    "Onix": [abilities[1], abilities[0]],
    "Krabby": [abilities[1], abilities[0]],
    "Voltorb": [abilities[1], abilities[0]],
    "Cubone": [abilities[1], abilities[0]],
    "Hitmonchan": [abilities[1], abilities[0]],
    "Lapras": [abilities[1], abilities[0]],
    "Snorlax": [abilities[1], abilities[0]],
    "Aerodactyl": [abilities[1], abilities[0]],
    "Chinchou": [abilities[1], abilities[0]],
    "Marill": [abilities[1], abilities[0]],
    "Dunsparce": [abilities[1], abilities[0]],
    "Murkrow": [abilities[1], abilities[0]],
    "Snubbull": [abilities[1], abilities[0]],
    "Teddiursa": [abilities[1], abilities[0]],
    "Absol": [abilities[1], abilities[0]],
    "Clefairy": [abilities[1], abilities[0]],
    "Clefable": [abilities[1], abilities[0]],
    // Add more cases as needed
  };

  if (swappedAbilitiesMap[pokemonName]) {
    return swappedAbilitiesMap[pokemonName];
  }

  return abilities;
};


const typeName = ["NORMAL", "FIRE", "WATER", "ELECTRIC", "GRASS", "ICE", "FIGHTING", "POISON", "GROUND", "FLYING", "PSYCHIC", "BUG", "ROCK", "GHOST", "DRAGON", "DARK", "STEEL", "FAIRY"];

const typesChart = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0, 1, 1, 0.5, 1, 1],              // Normal
  [1, 0.5, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 0.5, 1, 0.5, 1, 2, 1, 1],          // Fire
  [1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1],            // Water
  [1, 1, 2, 0.5, 0.5, 1, 1, 1, 0, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1],            // Electric
  [1, 0.5, 2, 1, 0.5, 1, 1, 0.5, 2, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 1, 1],    // Grass
  [1, 0.5, 0.5, 1, 2, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 0.5, 1, 1],          // Ice
  [2, 1, 1, 1, 1, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 2, 0, 1, 2, 2, 0.5, 1],        // Fighting
  [1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2, 1],          // Poison
  [1, 2, 1, 2, 0.5, 1, 1, 2, 1, 0, 1, 0.5, 2, 1, 1, 1, 2, 1, 1],              // Ground
  [1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 0.5, 1, 1],            // Flying
  [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 0.5, 1, 1, 1, 1, 0, 0.5, 1, 1],              // Psychic
  [1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 1, 0.5, 2, 1, 1, 0.5, 1, 2, 0.5, 0.5, 1],    // Bug
  [1, 2, 1, 1, 1, 2, 0.5, 1, 0.5, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1],            // Rock
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 1, 1],                // Ghost
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0, 1],                // Dragon
  [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 2, 1, 1, 2, 1, 0.5, 1, 0.5, 1],            // Dark
  [1, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5, 2, 1],          // Steel
  [1, 0.5, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 2, 2, 0.5, 1, 1],            // Fairy
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]                   // None
];

const calculateTypeWeakness = (types) => {
  let weaknesses = {
    "4x": [],
    "2x": [],
    "1x": [],
    "0.5x": [],
    "0.25x": [],
    "0x": []
  };


  // Initialize result array with 1
  let result = Array.from({ length: typeName.length }, () => 1);

  // Calculate weaknesses
  for (let type of types) {
    let index = typeName.indexOf(type);
    if (index !== -1) {
      for (let i = 0; i < typeName.length; i++) {
        result[i] *= typesChart[index][i];
      }
    }
  }

  // Categorize weaknesses
  for (let i = 0; i < typeName.length; i++) {
    let multiplier = result[i];
    if (multiplier === 0) {
      weaknesses["0x"].push(typeName[i]);
    } else if (multiplier === 0.25) {
      weaknesses["0.25x"].push(typeName[i]);
    } else if (multiplier === 0.5) {
      weaknesses["0.5x"].push(typeName[i]);
    } else if (multiplier === 1) {
      weaknesses["1x"].push(typeName[i]);
    } else if (multiplier === 2) {
      weaknesses["2x"].push(typeName[i]);
    } else if (multiplier === 4) {
      weaknesses["4x"].push(typeName[i]);
    }
  }

  return weaknesses;
};







// const fusedPokemonImages = generateFusionImages(dexIdOne, dexIdTwo);
// const pokemonOneStats = calculateStats(pokemonNameOne, pokemonNameTwo);
// const pokemonTwoStats = calculateStats(pokemonNameTwo, pokemonNameOne);
// const pokemonOneTypes = calculateTypes(dexIdOne, dexIdTwo);
// const pokemonTwoTypes = calculateTypes(dexIdTwo, dexIdOne);
// const pokemonOneAbility = calculateAbility(pokemonNameOne, pokemonNameTwo);
// const pokemonTwoAbility = calculateAbility(pokemonNameTwo, pokemonNameOne);
// const pokemonOneTypeWeaknesses = calculateTypeWeakness(pokemonOneTypes);
// const pokemonTwoTypeWeaknesses = calculateTypeWeakness(pokemonTwoTypes);

// console.table(pokemonOneStats);
// console.table(pokemonTwoStats);
// console.table(pokemonOneTypes);
// console.table(pokemonTwoTypes);
// console.table(pokemonOneAbility);
// console.table(pokemonTwoAbility);
// console.table(pokemonOneTypeWeaknesses);
// console.table(pokemonTwoTypeWeaknesses);
// console.table(fusedPokemonImages);







const runAllFunctions = (pokemonNameOne, pokemonNameTwo) => {
  const dexIdOne = data[pokemonNameOne]["id"];
  const dexIdTwo = data[pokemonNameTwo]["id"];

  // Execute all functions
  const fusedPokemonImages = generateFusionImages(dexIdOne, dexIdTwo);
  const pokemonOneStats = calculateStats(pokemonNameOne, pokemonNameTwo);
  const pokemonTwoStats = calculateStats(pokemonNameTwo, pokemonNameOne);
  const pokemonOneTypes = calculateTypes(pokemonNameOne, pokemonNameTwo);
  const pokemonTwoTypes = calculateTypes(pokemonNameTwo, pokemonNameOne);
  const pokemonOneAbility = calculateAbility(pokemonNameOne, pokemonNameTwo);
  const pokemonTwoAbility = calculateAbility(pokemonNameTwo, pokemonNameOne);
  const pokemonOneTypeWeaknesses = calculateTypeWeakness(pokemonOneTypes);
  const pokemonTwoTypeWeaknesses = calculateTypeWeakness(pokemonTwoTypes);

  // Construct result object
  const result = {
    fusedPokemonImages,
    pokemonOneStats,
    pokemonTwoStats,
    pokemonOneTypes,
    pokemonTwoTypes,
    pokemonOneAbility,
    pokemonTwoAbility,
    pokemonOneTypeWeaknesses,
    pokemonTwoTypeWeaknesses
  };

  return result;
};















// Now Code For DOM

////\\\\////\\\\   POPULATE THE INPUT OF FIRST POKEMON AND SECOND POKEMON   ////\\\\////\\\\
// Get references to the datalists


const firstPokemonDatalist = document.getElementById("FirstPokemonDatalist");
const secondPokemonDatalist = document.getElementById("SecondPokemonDatalist");

const populateDatalists = () => {
  for (const pokemon in data) {
    const option = document.createElement("option");
    option.value = pokemon;
    option.textContent = `(${data[pokemon].id}) ${pokemon}`;

    firstPokemonDatalist.appendChild(option.cloneNode(true));
    secondPokemonDatalist.appendChild(option);
  }
};

populateDatalists();


const fusePokemon = () => {
  const firstPokemon = document.getElementById("FirstPokemon").value;
  const secondPokemon = document.getElementById("SecondPokemon").value;

  if (firstPokemon && secondPokemon) {
    const url = `/?firstpoke=${firstPokemon}&secondpoke=${secondPokemon}`;
    window.location.href = url;
  }
};


const getRandomPokemon = () => {
  const getRandomOption = (datalist) => {
    const options = datalist.options;
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex].value;
  };

  const firstPokemonInput = document.getElementById("FirstPokemon");
  const secondPokemonInput = document.getElementById("SecondPokemon");

  firstPokemonInput.value = getRandomOption(document.getElementById("FirstPokemonDatalist"));
  secondPokemonInput.value = getRandomOption(document.getElementById("SecondPokemonDatalist"));

  fusePokemon();
};

// in reset pokemon run reload home page url
function resetPokemon() {
  window.location.href = "/";
}

document.getElementById("FusePokemon").addEventListener("click", fusePokemon);
document.getElementById("RandomPokemon").addEventListener("click", getRandomPokemon);
document.getElementById("Reset").addEventListener("click", resetPokemon);





const populateDom = (result) => {
  // first display block (unhide) elements that we need to calculate so use dom pi to get this element #PokemonImages, #PokemonAbilityParent, #StatsParent, #weakness and add them style display block

  // Get references to the elements
  const CopyLink = document.getElementById("CopyLink");
  const pokemonImages = document.getElementById("PokemonImages");
  const PokemonAbilityParent = document.getElementById("PokemonAbilityParent");
  const StatsParent = document.getElementById("StatsParent");
  const weakness = document.getElementById("weakness");

  // Remove the 'hidden' class from the elements
  CopyLink.classList.remove("hidden");
  pokemonImages.classList.remove("hidden");
  PokemonAbilityParent.classList.remove("hidden");
  StatsParent.classList.remove("hidden");
  weakness.classList.remove("hidden");


  // Set document title
  document.title = `Fusion of ${pokemonNameOne} (${data[pokemonNameOne]["id"]}) & ${pokemonNameTwo} (${data[pokemonNameTwo]["id"]}) is ${result.fusedPokemonImages.firstFusedPokemonName} (${result.fusedPokemonImages.firstCustomSpriteDexId}) and ${result.fusedPokemonImages.secondFusedPokemonName} (${result.fusedPokemonImages.secondCustomSpriteDexId})`;


  // JavaScript code to scroll to the element with the id "PokemonInput" when the page loads
  document.addEventListener('DOMContentLoaded', function () {
    const pokemonInput = document.getElementById('PokemonInput');
    if (pokemonInput) {
      pokemonInput.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // populate input
  document.getElementById("FirstPokemon").value = pokemonNameOne;
  document.getElementById("SecondPokemon").value = pokemonNameTwo;

  document.addEventListener('DOMContentLoaded', function () {
    // Get the input and button elements
    const linkInput = document.getElementById('LinkInput');
    const copyLinkButton = document.getElementById('CopyLinkButton');

    // Set the value of the input to the current page URL
    linkInput.value = window.location.href;

    // Add an event listener to the button for copying the link
    copyLinkButton.addEventListener('click', function () {
      // Select the text in the input field
      linkInput.select();
      linkInput.setSelectionRange(0, 99999); // For mobile devices

      // Copy the selected text to the clipboard
      document.execCommand('copy');

      // Alert the user that the link has been copied
      alert('Link copied to clipboard!');
    });
  });


  // Get references to DOM elements
  const pokemonOneNameElement = document.getElementById("PokemonOneName");
  const pokemonTwoNameElement = document.getElementById("PokemonTwoName");
  const pokemonOneCustomSpriteElement = document.querySelector("#PokemonOneImages .ImageCards:nth-child(1) img");
  const pokemonOneAutogenSpriteElement = document.querySelector("#PokemonOneImages .ImageCards:nth-child(2) img");
  const pokemonTwoCustomSpriteElement = document.querySelector("#PokemonTwoImages .ImageCards:nth-child(1) img");
  const pokemonTwoAutogenSpriteElement = document.querySelector("#PokemonTwoImages .ImageCards:nth-child(2) img");
  const pokemonOneTypesElement = document.getElementById("PokemonOneTypes");
  const pokemonTwoTypesElement = document.getElementById("PokemonTwoTypes");
  const pokemonOneAbilityElement = document.getElementById("PokemonOneAbility");
  const pokemonTwoAbilityElement = document.getElementById("PokemonTwoAbility");


  // Populate Pokémon names
  pokemonOneNameElement.innerHTML = `<strong>${result.fusedPokemonImages.firstFusedPokemonName}</strong>: <span class="DexIdColor">(${result.fusedPokemonImages.firstCustomSpriteDexId})</span>`;
  pokemonTwoNameElement.innerHTML = `<strong>${result.fusedPokemonImages.secondFusedPokemonName}</strong>: <span class="DexIdColor">(${result.fusedPokemonImages.secondCustomSpriteDexId})</span>`;

  // Populate Pokémon images

  // Populate Pokémon images with error handling
  pokemonOneCustomSpriteElement.src = result.fusedPokemonImages.firstCustomSpriteImageUrl;
  pokemonOneCustomSpriteElement.onerror = function () {
    this.src = '/static/images/not_found.jpg';
  };
  pokemonOneAutogenSpriteElement.src = result.fusedPokemonImages.firstAutogenSpriteImageUrl;
  pokemonOneAutogenSpriteElement.onerror = function () {
    this.src = '/static/images/not_found.jpg';
  };
  pokemonTwoCustomSpriteElement.src = result.fusedPokemonImages.secondCustomSpriteImageUrl;
  pokemonTwoCustomSpriteElement.onerror = function () {
    this.src = '/static/images/not_found.jpg';
  };
  pokemonTwoAutogenSpriteElement.src = result.fusedPokemonImages.secondAutogenSpriteImageUrl;
  pokemonTwoAutogenSpriteElement.onerror = function () {
    this.src = '/static/images/not_found.jpg';
  };

  // Populate Pokémon types
  pokemonOneTypesElement.innerHTML = result.pokemonOneTypes.map(type => `<div class="types" id="${type}">${type}</div>`).join('');
  pokemonTwoTypesElement.innerHTML = result.pokemonTwoTypes.map(type => `<div class="types" id="${type}">${type}</div>`).join('');

  // Populate Pokémon abilities
  populateAbilities(pokemonOneAbilityElement, result.pokemonOneAbility, result.fusedPokemonImages.firstFusedPokemonName, result.fusedPokemonImages.firstCustomSpriteDexId, "PokemonOneAbilityHeading");
  populateAbilities(pokemonTwoAbilityElement, result.pokemonTwoAbility, result.fusedPokemonImages.secondFusedPokemonName, result.fusedPokemonImages.secondCustomSpriteDexId, "PokemonTwoAbilityHeading");

  document.getElementById("PokemonOneNameWeakness").innerHTML = `${result.fusedPokemonImages.firstFusedPokemonName}`;
  document.getElementById("PokemonTwoNameWeakness").innerHTML = `${result.fusedPokemonImages.secondFusedPokemonName}`;

  document.getElementById("PokemonOne4XMultipliers").innerHTML = result.pokemonOneTypeWeaknesses["4x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');
  document.getElementById("PokemonTwo4XMultipliers").innerHTML = result.pokemonTwoTypeWeaknesses["4x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');

  document.getElementById("PokemonOne2XMultipliers").innerHTML = result.pokemonOneTypeWeaknesses["2x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');
  document.getElementById("PokemonTwo2XMultipliers").innerHTML = result.pokemonTwoTypeWeaknesses["2x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');

  document.getElementById("PokemonOne1XMultipliers").innerHTML = result.pokemonOneTypeWeaknesses["1x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');
  document.getElementById("PokemonTwo1XMultipliers").innerHTML = result.pokemonTwoTypeWeaknesses["1x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');

  document.getElementById("PokemonOneHalfXMultipliers").innerHTML = result.pokemonOneTypeWeaknesses["0.5x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');
  document.getElementById("PokemonTwoHalfXMultipliers").innerHTML = result.pokemonTwoTypeWeaknesses["0.5x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');

  document.getElementById("PokemonOneQuarterXMultipliers").innerHTML = result.pokemonOneTypeWeaknesses["0.25x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');
  document.getElementById("PokemonTwoQuarterXMultipliers").innerHTML = result.pokemonTwoTypeWeaknesses["0.25x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');

  document.getElementById("PokemonOneZeroXMultipliers").innerHTML = result.pokemonOneTypeWeaknesses["0x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');
  document.getElementById("PokemonTwoZeroXMultipliers").innerHTML = result.pokemonTwoTypeWeaknesses["0x"].map(type => `<div class="WeaknessesTypes" id="${type}">${type}</div>`).join('');
  // Populate stat values

  // get id TablePokemonOneName and TablePokemonTwoName and populate Fused Pokemon Name
  document.getElementById("TablePokemonOneName").innerHTML = `${result.fusedPokemonImages.firstFusedPokemonName} Stats`;
  document.getElementById("TablePokemonTwoName").innerHTML = `${result.fusedPokemonImages.secondFusedPokemonName} Stats`;



  populateStatValue("PokemonOneHP", result.pokemonOneStats.hp);
  populateStatValue("PokemonOneAttack", result.pokemonOneStats.attack);
  populateStatValue("PokemonOneDefense", result.pokemonOneStats.defense);
  populateStatValue("PokemonOneSpecialAttack", result.pokemonOneStats.specialAttack);
  populateStatValue("PokemonOneSpecialDefense", result.pokemonOneStats.specialDefense);
  populateStatValue("PokemonOneSpeed", result.pokemonOneStats.speed);
  populateStatValue("PokemonOneTotal", result.pokemonOneStats.total);

  populateStatValue("PokemonTwoHP", result.pokemonTwoStats.hp);
  populateStatValue("PokemonTwoAttack", result.pokemonTwoStats.attack);
  populateStatValue("PokemonTwoDefense", result.pokemonTwoStats.defense);
  populateStatValue("PokemonTwoSpecialAttack", result.pokemonTwoStats.specialAttack);
  populateStatValue("PokemonTwoSpecialDefense", result.pokemonTwoStats.specialDefense);
  populateStatValue("PokemonTwoSpeed", result.pokemonTwoStats.speed);
  populateStatValue("PokemonTwoTotal", result.pokemonTwoStats.total);
};

const populateStatValue = (elementId, stat) => {
  const element = document.getElementById(elementId);
  element.textContent = `${stat.value}`;
  element.classList.add(stat.color);

};

const populateAbilities = (element, abilities, fusedPokemonName, dexId, headingId) => {
  const abilityHeadingElement = document.getElementById(headingId);
  abilityHeadingElement.innerHTML = `${fusedPokemonName} (<span class="DexIdColor">${dexId}</span>): Ability`;

  abilities.normalAbilities.forEach(ability => {
    const abilityDiv = document.createElement('div');
    abilityDiv.className = 'ability';
    abilityDiv.id = `${ability}`;
    abilityDiv.innerText = `${ability}`;
    element.appendChild(abilityDiv);
  });

  abilities.hiddenAbilities.forEach(ability => {
    const hiddenAbilityDiv = document.createElement('div');
    hiddenAbilityDiv.className = 'ability';
    hiddenAbilityDiv.id = `${ability}`;
    hiddenAbilityDiv.innerHTML = `${ability}<span class="HiddenIcon">&nbsp;<img class="HiddenSVG" width="20" height="20" src="/static/images/close-eye.svg" alt="Close Eye SVG Icon"></span>`;
    element.appendChild(hiddenAbilityDiv);
  });
};





if (firstPokeParam && secondPokeParam) {
  const result = runAllFunctions(pokemonNameOne, pokemonNameTwo);
  console.log(result);
  populateDom(result)
} else {
  console.log("No Params Found");
}