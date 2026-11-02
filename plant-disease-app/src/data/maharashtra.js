// Image fields are empty for now. Later put a path like '/images/black-soil.jpg'.

export const soils = [
  {
    id: 'black',
    name: 'Black Soil (Regur)',
    alsoCalled: 'Regur, black cotton soil',
    whereFound:
      'Most of the Deccan plateau: Western Maharashtra, Marathwada, North Maharashtra and western Vidarbha. It forms from weathered basalt (Deccan Trap) rock.',
    features: [
      'Clay-rich and holds moisture for a long time',
      'Swells when wet and cracks when dry',
      'Rich in calcium, magnesium and potash, but often low in nitrogen and organic matter',
    ],
    bestCrops: ['Cotton', 'Soybean', 'Jowar', 'Sugarcane', 'Tur'],
    image: '',
  },
  {
    id: 'laterite',
    name: 'Laterite Soil',
    alsoCalled: 'Red laterite',
    whereFound: 'The Konkan coast and the slopes of the Western Ghats, where rainfall is very heavy.',
    features: [
      'Acidic, and nutrients wash away easily in the rain',
      'Low in nitrogen and phosphorus',
      'Needs organic manure to stay productive',
    ],
    bestCrops: ['Rice', 'Alphonso mango', 'Cashew', 'Ragi', 'Coconut'],
    image: '',
  },
  {
    id: 'red',
    name: 'Red and Yellow Soil',
    alsoCalled: 'Red soil',
    whereFound: 'Eastern Vidarbha (Chandrapur, Gadchiroli, Bhandara, Gondia) and some southern parts of the state.',
    features: [
      'Light, sandy to loamy texture',
      'Red colour comes from iron content',
      'Drains quickly and is low in humus',
    ],
    bestCrops: ['Rice', 'Groundnut', 'Pulses', 'Millets'],
    image: '',
  },
  {
    id: 'alluvial',
    name: 'Alluvial and Coastal Soil',
    alsoCalled: 'River and coastal alluvium',
    whereFound: 'Narrow strips along rivers and the Konkan coast. Some patches near the sea are salty.',
    features: [
      'Fertile and easy to plough in river valleys',
      'Coastal patches can be saline',
      'Good water availability',
    ],
    bestCrops: ['Rice', 'Coconut', 'Vegetables', 'Banana'],
    image: '',
  },
]

export const crops = [
  { id: 1, name: 'Cotton', type: 'Cash crop', season: 'Kharif', grownIn: 'Vidarbha, Marathwada, Khandesh', image: '' },
  { id: 2, name: 'Soybean', type: 'Oilseed', season: 'Kharif', grownIn: 'Marathwada, Vidarbha', image: '' },
  { id: 3, name: 'Sugarcane', type: 'Cash crop', season: '12–18 months', grownIn: 'Kolhapur, Sangli, Satara, Pune, Solapur', image: '' },
  { id: 4, name: 'Jowar', type: 'Cereal', season: 'Kharif and Rabi', grownIn: 'Solapur, Marathwada', image: '' },
  { id: 5, name: 'Rice', type: 'Cereal', season: 'Kharif', grownIn: 'Konkan, eastern Vidarbha', image: '' },
  { id: 6, name: 'Grapes', type: 'Fruit', season: 'Perennial', grownIn: 'Nashik, Sangli', image: '' },
  { id: 7, name: 'Onion', type: 'Vegetable', season: 'Kharif and Rabi', grownIn: 'Nashik, Pune, Ahilyanagar', image: '' },
  { id: 8, name: 'Pomegranate', type: 'Fruit', season: 'Perennial', grownIn: 'Solapur, Sangli, Nashik', image: '' },
  { id: 9, name: 'Alphonso Mango', type: 'Fruit', season: 'Perennial', grownIn: 'Ratnagiri, Sindhudurg', image: '' },
  { id: 10, name: 'Orange', type: 'Fruit', season: 'Perennial', grownIn: 'Nagpur, Amravati', image: '' },
]

export const seasons = [
  {
    id: 'summer',
    name: 'Summer',
    months: 'March to May',
    description:
      'Hot and dry in the interior, with temperatures often crossing 40°C in parts of Vidarbha. Konkan stays hot and humid.',
    cropSeason: 'Zaid season: watermelon, cucumber, fodder crops',
  },
  {
    id: 'monsoon',
    name: 'Monsoon',
    months: 'June to September',
    description:
      'The southwest monsoon brings most of the yearly rain. Sowing of the main crops happens at the start of this season.',
    cropSeason: 'Kharif season: cotton, soybean, rice, tur, jowar',
  },
  {
    id: 'winter',
    name: 'Winter',
    months: 'October to February',
    description: 'Mild and mostly dry, with cooler nights in the interior. Good for crops that like cool weather.',
    cropSeason: 'Rabi season: wheat, gram, rabi jowar, onion',
  },
]

export const climateNote =
  'Rainfall varies a lot across the state. Konkan and the Western Ghats receive well above 2,000 mm a year, while the rain-shadow region on the eastern side of the ghats often gets only roughly 500–700 mm. This is why drought is a repeated problem in parts of Marathwada and Madhya Maharashtra.'

export const regions = [
  {
    id: 'konkan',
    name: 'Konkan',
    districts: 'Thane, Palghar, Raigad, Ratnagiri, Sindhudurg',
    soil: 'Laterite and coastal soil',
    climate: 'Hot, humid, very heavy monsoon rain',
    mainCrops: ['Rice', 'Alphonso mango', 'Cashew', 'Coconut'],
    image: '',
  },
  {
    id: 'western',
    name: 'Western Maharashtra',
    districts: 'Pune, Satara, Sangli, Kolhapur, Solapur, Ahilyanagar',
    soil: 'Black soil, mostly medium to deep',
    climate: 'Moderate rain in the west, dry in the east',
    mainCrops: ['Sugarcane', 'Pomegranate', 'Jowar', 'Onion'],
    image: '',
  },
  {
    id: 'north',
    name: 'North Maharashtra',
    districts: 'Nashik, Dhule, Nandurbar, Jalgaon',
    soil: 'Black soil with some alluvial patches',
    climate: 'Hot summers, moderate rain',
    mainCrops: ['Grapes', 'Onion', 'Cotton', 'Banana'],
    image: '',
  },
  {
    id: 'marathwada',
    name: 'Marathwada',
    districts: 'Chhatrapati Sambhajinagar, Jalna, Beed, Latur, Dharashiv, Nanded, Parbhani, Hingoli',
    soil: 'Black soil',
    climate: 'Dry, with low and uncertain rain',
    mainCrops: ['Soybean', 'Cotton', 'Tur', 'Jowar'],
    image: '',
  },
  {
    id: 'vidarbha',
    name: 'Vidarbha',
    districts: 'Nagpur, Amravati, Akola, Yavatmal, Wardha, Chandrapur, Gadchiroli, Bhandara, Gondia, Washim, Buldhana',
    soil: 'Black soil in the west, red and yellow soil in the east',
    climate: 'Very hot summers, good monsoon, cool winters',
    mainCrops: ['Cotton', 'Soybean', 'Orange', 'Rice'],
    image: '',
  },
]