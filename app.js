const fs = require('fs');

const data = {
    "1": {
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
    "2": {
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
    "3": {
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
    "4": {
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
    "5": {
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
    "6": {
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
    "7": {
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
    "8": {
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
    "9": {
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
    "10": {
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
    "11": {
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
    "12": {
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
    "13": {
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
    "14": {
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
    "15": {
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
    "16": {
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
    "17": {
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
    "18": {
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
    "19": {
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
    "20": {
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
    "21": {
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
    "22": {
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
    "23": {
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
    "24": {
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
    "25": {
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
    "26": {
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
    "27": {
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
    "28": {
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
    "29": {
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
    "30": {
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
    "31": {
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
    "32": {
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
    "33": {
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
    "34": {
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
    "35": {
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
    "36": {
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
    "37": {
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
    "38": {
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
    "39": {
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
    "40": {
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
    "41": {
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
    "42": {
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
    "43": {
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
    "44": {
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
    "45": {
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
    "46": {
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
    "47": {
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
    "48": {
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
    "49": {
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
    "50": {
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
    "51": {
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
    "52": {
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
    "53": {
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
    "54": {
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
    "55": {
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
    "56": {
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
    "57": {
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
    "58": {
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
    "59": {
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
    "60": {
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
    "61": {
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
    "62": {
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
    "63": {
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
    "64": {
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
    "65": {
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
    "66": {
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
    "67": {
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
    "68": {
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
    "69": {
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
    "70": {
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
    "71": {
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
    "72": {
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
    "73": {
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
    "74": {
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
    "75": {
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
    "76": {
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
    "77": {
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
    "78": {
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
    "79": {
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
    "80": {
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
    "81": {
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
    "82": {
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
    "83": {
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
    "84": {
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
    "85": {
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
    "86": {
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
    "87": {
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
    "88": {
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
    "89": {
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
    "90": {
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
    "91": {
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
    "92": {
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
    "93": {
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
    "94": {
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
    "95": {
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
    "96": {
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
    "97": {
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
    "98": {
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
    "99": {
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
    "100": {
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
    "101": {
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
    "102": {
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
    "103": {
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
    "104": {
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
    "105": {
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
    "106": {
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
    "107": {
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
    "108": {
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
    "109": {
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
    "110": {
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
    "111": {
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
    "112": {
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
    "113": {
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
    "114": {
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
    "115": {
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
    "116": {
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
    "117": {
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
    "118": {
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
    "119": {
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
    "120": {
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
    "121": {
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
    "122": {
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
    "123": {
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
    "124": {
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
    "125": {
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
    "126": {
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
    "127": {
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
    "128": {
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
    "129": {
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
    "130": {
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
    "131": {
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
    "132": {
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
    "133": {
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
    "134": {
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
    "135": {
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
    "136": {
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
    "137": {
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
    "138": {
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
    "139": {
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
    "140": {
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
    "141": {
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
    "142": {
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
    "143": {
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
    "144": {
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
    "145": {
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
    "146": {
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
    "147": {
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
    "148": {
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
    "149": {
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
    "150": {
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
    "151": {
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
    "152": {
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
    "153": {
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
    "154": {
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
    "155": {
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
    "156": {
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
    "157": {
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
    "158": {
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
    "159": {
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
    "160": {
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
    "161": {
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
    "162": {
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
    "163": {
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
    "164": {
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
    "165": {
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
    "166": {
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
    "167": {
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
    "168": {
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
    "169": {
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
    "170": {
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
    "171": {
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
    "172": {
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
    "173": {
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
    "174": {
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
    "175": {
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
    "176": {
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
    "177": {
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
    "178": {
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
    "179": {
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
    "180": {
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
    "181": {
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
    "182": {
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
    "183": {
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
    "184": {
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
    "185": {
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
    "186": {
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
    "187": {
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
    "188": {
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
    "189": {
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
    "190": {
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
    "191": {
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
    "192": {
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
    "193": {
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
    "194": {
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
    "195": {
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
    "196": {
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
    "197": {
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
    "198": {
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
    "199": {
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
    "200": {
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
    "201": {
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
    "202": {
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
    "203": {
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
    "204": {
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
    "205": {
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
    "206": {
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
    "207": {
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
    "208": {
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
    "209": {
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
    "210": {
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
    "211": {
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
    "212": {
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
    "213": {
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
    "214": {
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
    "215": {
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
    "216": {
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
    "217": {
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
    "218": {
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
    "219": {
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
    "220": {
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
    "221": {
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
    "222": {
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
    "223": {
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
    "224": {
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
    "225": {
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
    "226": {
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
    "227": {
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
    "228": {
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
    "229": {
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
    "230": {
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
    "231": {
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
    "232": {
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
    "233": {
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
    "234": {
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
    "235": {
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
    "236": {
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
    "237": {
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
    "238": {
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
    "239": {
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
    "240": {
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
    "241": {
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
    "242": {
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
    "243": {
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
    "244": {
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
    "245": {
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
    "246": {
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
    "247": {
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
    "248": {
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
    "249": {
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
    "250": {
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
    "251": {
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
    "252": {
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
    "253": {
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
    "254": {
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
    "255": {
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
    "256": {
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
    "257": {
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
    "258": {
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
    "259": {
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
    "260": {
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
    "261": {
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
    "262": {
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
    "263": {
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
    "264": {
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
    "265": {
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
    "266": {
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
    "267": {
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
    "268": {
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
    "269": {
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
    "270": {
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
    "271": {
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
    "272": {
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
    "273": {
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
    "274": {
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
    "275": {
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
    "276": {
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
    "277": {
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
    "278": {
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
    "279": {
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
    "280": {
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
    "281": {
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
    "282": {
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
    "283": {
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
    "284": {
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
    "285": {
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
    "286": {
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
    "287": {
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
    "288": {
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
    "289": {
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
    "290": {
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
    "291": {
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
    "292": {
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
    "293": {
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
    "294": {
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
    "295": {
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
    "296": {
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
    "297": {
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
    "298": {
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
    "299": {
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
    "300": {
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
    "301": {
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
    "302": {
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
    "303": {
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
    "304": {
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
    "305": {
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
    "306": {
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
    "307": {
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
    "308": {
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
    "309": {
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
    "310": {
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
    "311": {
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
    "312": {
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
    "313": {
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
    "314": {
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
    "315": {
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
    "316": {
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
    "317": {
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
    "318": {
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
    "319": {
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
    "320": {
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
    "321": {
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
    "322": {
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
    "323": {
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
    "324": {
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
    "325": {
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
    "326": {
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
    "327": {
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
    "328": {
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
    "329": {
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
    "330": {
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
    "331": {
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
    "332": {
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
    "333": {
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
    "334": {
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
    "335": {
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
    "336": {
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
    "337": {
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
    "338": {
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
    "339": {
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
    "340": {
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
    "341": {
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
    "342": {
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
    "343": {
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
    "344": {
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
    "345": {
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
    "346": {
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
    "347": {
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
    "348": {
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
    "349": {
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
    "350": {
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
    "351": {
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
    "352": {
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
    "353": {
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
    "354": {
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
    "355": {
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
    "356": {
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
    "357": {
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
    "358": {
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
    "359": {
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
    "360": {
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
    "361": {
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
    "362": {
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
    "363": {
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
    "364": {
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
    "365": {
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
    "366": {
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
    "367": {
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
    "368": {
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
    "369": {
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
    "370": {
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
    "371": {
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
    "372": {
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
    "373": {
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
    "374": {
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
    "375": {
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
    "376": {
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
    "377": {
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
    "378": {
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
    "379": {
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
    "380": {
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
    "381": {
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
    "382": {
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
    "383": {
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
    "384": {
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
    "385": {
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
    "386": {
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
    "387": {
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
    "388": {
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
    "389": {
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
    "390": {
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
    "391": {
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
    "392": {
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
    "393": {
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
    "394": {
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
    "395": {
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
    "396": {
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
    "397": {
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
    "398": {
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
    "399": {
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
    "400": {
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
    "401": {
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
    "402": {
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
    "403": {
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
    "404": {
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
    "405": {
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
    "406": {
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
    "407": {
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
    "408": {
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
    "409": {
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
    "410": {
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
    "411": {
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
    "412": {
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
    "413": {
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
    "414": {
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
    "415": {
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
    "416": {
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
    "417": {
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
    "418": {
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
    "419": {
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
    "420": {
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
    "421": {
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
    "422": {
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
    "423": {
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
    "424": {
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
    "425": {
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
    "426": {
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
    "427": {
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
    "428": {
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
    "429": {
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
    "430": {
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
    "431": {
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
    "432": {
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
    "433": {
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
    "434": {
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
    "435": {
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
    "436": {
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
    "437": {
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
    "438": {
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
    "439": {
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
    "440": {
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
    "441": {
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
    "442": {
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
    "443": {
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
    "444": {
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
    "445": {
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
    "446": {
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
    "447": {
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
    "448": {
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
    "449": {
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
    "450": {
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
    "451": {
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
    "452": {
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
    "453": {
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
    "454": {
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
    "455": {
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
    "456": {
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
    "457": {
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
    "458": {
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
    "459": {
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
    "460": {
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
    "461": {
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
    "462": {
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
    "463": {
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
    "464": {
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
    "465": {
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
    "466": {
      "fullName": "Meloetta",
      "hp": 100,
      "attack": 77,
      "defense": 77,
      "specialAttack": 128,
      "specialDefense": 128,
      "speed": 90,
      "total": 600,
      "height": "60 cm",
      "weight": "6.5 kg",
      "category": "Melody Pokémon",
      "types": [
        "NORMAL",
        "PSYCHIC"
      ],
      "abilities": []
    },
    "467": {
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
    "468": {
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
    "469": {
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
    "470": {
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

// Create a new object with Pokémon names as keys
const reconstructedData = {};
for (const id in data) {
    const pokemon = data[id];
    reconstructedData[pokemon.fullName] = { id, ...pokemon };
}

// Write the reconstructed data to a new file
const outputFilename = 'reconstructed_data.json';
fs.writeFileSync(outputFilename, JSON.stringify(reconstructedData, null, 2));

console.log(`Reconstructed data has been written to ${outputFilename}`);
