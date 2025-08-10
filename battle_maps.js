const battleMaps = [
  {
    id: 'oblivion_spire_prime_exterior',
    name: 'Oblivion Spire Prime – Exterior',
    faction: 'Sith Empire',
    lighting: 'dark red and black',
    verticalLayers: 3,
    features: [
      'Massive black monolith spire dominating the skyline',
      'Landing pads for Dreadcarriers',
      'Elevated sniper towers',
      'Energy shield gates that can be disabled mid-match'
    ],
    hazards: {
      description: 'Orbital bombardment strikes at random intervals',
      optional: true
    },
    interactiveObjects: [
      'Shield generator controls',
      'Weapon crates'
    ]
  },
  {
    id: 'oblivion_spire_prime_throne_hall',
    name: 'Oblivion Spire Prime – Throne Hall Interior',
    faction: 'Sith Empire',
    lighting: 'dark red and black',
    verticalLayers: 2,
    features: [
      'Grand central chamber with Sith banners and lava-light pools',
      'Close-quarters choke points',
      'Floor panels that can drop into reactor shafts'
    ],
    hazards: {
      description: 'Force vortex bursts',
      optional: true
    },
    interactiveObjects: [
      'Control panels',
      'Weapon crates'
    ]
  },
  {
    id: 'biden_fortress_courtyard',
    name: 'Biden Fortress Courtyard',
    faction: 'Neutral',
    lighting: 'balanced neutrals',
    verticalLayers: 2,
    features: [
      'Symmetrical battle area for fair competitive matches',
      'Multiple cover points and walls that crumble after heavy fire'
    ],
    hazards: {
      description: 'Automated turret emplacements',
      optional: true
    },
    interactiveObjects: [
      'Shield generator controls'
    ]
  },
  {
    id: 'kuat_shipyards',
    name: 'Kuat Shipyards',
    faction: 'Sith Empire',
    lighting: 'industrial tones',
    verticalLayers: 3,
    features: [
      'Industrial platform with assembly cranes and parked starfighters',
      'Conveyor belts that move across the map, potentially crushing units'
    ],
    hazards: {
      description: 'Falling ship components',
      optional: true
    },
    interactiveObjects: [
      'Control panels'
    ]
  },
  {
    id: 'hidden_spire_command_level',
    name: 'Hidden Spire – Command Level',
    faction: 'Sith Empire',
    lighting: 'high-tech interior with red highlights',
    verticalLayers: 2,
    features: [
      'Sleek, high-tech interior with command consoles and hologram tables',
      'Elevators that move between upper and lower areas'
    ],
    hazards: {
      description: 'Electric floor traps',
      optional: true
    },
    interactiveObjects: [
      'Command consoles',
      'Weapon crates'
    ]
  },
  {
    id: 'unity_flagship_bridge',
    name: 'Unity Flagship Bridge',
    faction: 'Unity',
    lighting: 'lighter tones with blues and silvers',
    verticalLayers: 2,
    features: [
      'Narrow bridge area over a massive hangar pit',
      'Central command chair platform'
    ],
    hazards: {
      description: 'Breakable glass floor sections',
      optional: true
    },
    interactiveObjects: [
      'Shield generator controls'
    ]
  },
  {
    id: 'tatooine_desert',
    name: 'Tatooine-Style Desert Battlefield',
    faction: 'Neutral',
    lighting: 'sunny desert',
    verticalLayers: 2,
    features: [
      'Open map with scattered rocky outcroppings'
    ],
    hazards: {
      description: 'Sandstorms randomly reduce visibility and sinkholes swallow units',
      optional: true
    },
    interactiveObjects: []
  },
  {
    id: 'coruscant_urban_warzone',
    name: 'Urban Warzone – Coruscant Streets',
    faction: 'Unity',
    lighting: 'lighter tones with blues and silvers',
    verticalLayers: 3,
    features: [
      'Tight alleyways and tall building cover',
      'Walkways connecting rooftops'
    ],
    hazards: {
      description: 'Collapsing buildings after sustained damage',
      optional: true
    },
    interactiveObjects: [
      'Control panels',
      'Weapon crates'
    ]
  }
];

if (require.main === module) {
  console.log('Available Battle Maps:');
  for (const map of battleMaps) {
    console.log(`- ${map.name}`);
  }
}

module.exports = battleMaps;
