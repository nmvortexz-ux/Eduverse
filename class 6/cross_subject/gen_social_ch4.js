import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 4: Maps (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "A representation or a drawing of the Earth's surface or a part of it drawn on a flat surface according to a scale is called a:",
    options: ["Map", "Globe", "Sketch", "Plan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A map is a scaled, symbolic flat 2D graphic representation of terrestrial spatial features."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Maps showing natural features of the Earth such as mountains, plateaus, plains, rivers, and oceans are called:",
    options: ["Physical Maps (or Relief Maps)", "Political Maps", "Thematic Maps", "Topographical Maps"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Physical maps depict natural topography, terrain elevation, and hydrographic drainage networks."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Maps showing cities, towns, villages, and different countries and states of the world with their administrative boundaries are called:",
    options: ["Political Maps", "Physical Maps", "Thematic Maps", "Geological Maps"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Political maps demarcate sovereign international borders, provincial lines, capitals, and administrative jurisdictions."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Maps that focus on specific information, such as road networks, rainfall distribution, forests, or industries, are called:",
    options: ["Thematic Maps", "Physical Maps", "Political Maps", "Cadastral Maps"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Thematic maps illustrate specialized spatial themes (e.g. population density, annual rainfall, mineral deposits)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What are the THREE essential components of any standard map?",
    options: ["Distance, Direction, and Symbols", "Color, Size, and Paper", "Mountains, Rivers, and Towns", "Latitude, Longitude, and Orbit"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Cartography rests on three foundational structural components: Scale (Distance), Orientation (Direction), and Legend (Symbols)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "The ratio between the actual ground distance on the Earth and the distance shown on the map paper is called the:",
    options: ["Scale of the map", "Legend", "Compass", "Meridian"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Map scale = (Distance on Map) / (Actual Ground Distance)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What are the FOUR major Cardinal Points / Directions on a map?",
    options: ["North, South, East, and West", "North-East, North-West, South-East, South-West", "Up, Down, Left, Right", "Top, Bottom, Front, Back"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The four primary cardinal directions are North (N), South (S), East (E), and West (W)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What are the four intermediate directions located between the cardinal points?",
    options: [
      "North-East (NE), South-East (SE), South-West (SW), and North-West (NW)",
      "North-Up, South-Down, East-Left, West-Right",
      "Zenith, Nadir, Horizon, Meridian",
      "Central, Upper, Lower, Outer"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The four ordinal/intercardinal compass bearings are NE (45°), SE (135°), SW (225°), and NW (315°)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "An instrument used to find the main directions, featuring a magnetic needle that always points towards the North-South direction, is a:",
    options: ["Magnetic Compass", "Barometer", "Thermometer", "Anemometer"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A magnetic compass needle aligns itself with the geomagnetic dipole axis pointing towards magnetic North."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Symbols on a map that are internationally agreed upon and recognized across the world are called:",
    options: ["Conventional Symbols", "Decorative Symbols", "Local Symbols", "Abstract Sketches"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Conventional signs and symbols follow standardized international cartographic conventions (e.g. blue for water, green for forests)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "On a standard physical map, what natural feature is universally represented using BLUE color?",
    options: ["Water bodies (Oceans, Seas, Rivers, Lakes)", "Mountains", "Forests and vegetation", "Plateaus"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In standard topographic symbology, cyan/blue shades denote water bodies, streams, and reservoirs."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "A book or bound collection of various maps of the world, continents, and countries is called an:",
    options: ["Atlas", "Encyclopedia", "Dictionary", "Almanac"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An Atlas is a comprehensive bound volume of geographical, thematic, and political charts."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What is the key difference between a 'Small Scale Map' and a 'Large Scale Map'?",
    options: [
      "A Small Scale map shows large areas (continents/countries) with less detail (e.g. 1 cm = 500 km), while a Large Scale map shows small areas (villages/towns) with great detail (e.g. 1 cm = 50 m)",
      "A Small scale map is drawn on tiny paper",
      "A Large scale map shows only outer space",
      "There is no difference"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Scale fraction 1/50,000,000 is small (macro coverage), while 1/5,000 is large (micro granular street detail)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What is a 'Sketch' in cartography?",
    options: [
      "A rough drawing mainly based on memory and spot observation without any scale",
      "A mathematically accurate scaled blueprint",
      "A satellite photograph",
      "A globe"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A sketch map is a rapid, non-instrumental mental drawing showing landmarks to guide directions without scale."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What is a 'Plan' in cartography and architecture?",
    options: [
      "A drawing of a small area (like a single room or house) drawn on a very large scale showing minute measurements like length and breadth",
      "A rough sketch of a continent",
      "A world map",
      "A weather forecast"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A plan provides ultra-large-scale engineering dimensions for an individual architectural space or plot."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What does the letter 'N' with an arrow at the upper right-hand corner of a map indicate?",
    options: ["The North Direction (North Line)", "National Highway", "New Town", "No Entry"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The North Arrow indicates true geodetic or grid north, establishing map orientation for navigation."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "On a standard physical map, what colors are conventionally used for Mountains, Plateaus, and Plains respectively?",
    options: [
      "Mountains: Brown ; Plateaus: Yellow ; Plains: Green",
      "Mountains: Green ; Plateaus: Red ; Plains: Blue",
      "Mountains: Yellow ; Plateaus: Brown ; Plains: White",
      "Mountains: White ; Plateaus: Green ; Plains: Black"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hypsometric tinting: Brown indicates high mountain relief, Yellow denotes intermediate plateau tablelands, and Green indicates low plains."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Why are conventional symbols, letters, shades, and signs extensively used in maps?",
    options: [
      "They allow large amounts of spatial information (roads, bridges, trees, railways, temples) to be depicted clearly in a limited map space",
      "To make maps look like paintings",
      "To hide secrets from enemies",
      "Because map makers cannot write words"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cartographic symbols compress complex multidimensional geographic features into concise, universally decodable visual tokens."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "If a map uses a scale of '1 cm = 5 km', what is the actual ground distance between two railway stations that are 6 cm apart on the map?",
    options: ["30 km (6 cm × 5 km/cm)", "11 km", "60 km", "5 km"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ground distance = Map distance × Scale factor = 6 cm × 5 km/cm = 30 kilometers."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What is the conventional cartographic symbol for a 'Broad Gauge Railway Line' with a railway station?",
    options: [
      "A black track with alternating cross-hatches and a rectangle marked 'RS'",
      "A continuous red line",
      "A blue wavy curve",
      "A green circle"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Survey of India standards use a hatched black band with an attached 'RS' box for broad gauge railway stations."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What conventional symbol is used to represent a 'Metalled Road' versus an 'Unmetalled Road' on Indian topographical maps?",
    options: [
      "Metalled Road: Two parallel continuous red lines ; Unmetalled Road: Two parallel broken/dashed red lines",
      "Metalled: Solid blue line ; Unmetalled: Green line",
      "Metalled: Black dots ; Unmetalled: Solid square",
      "Metalled: Star ; Unmetalled: Triangle"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Pucca metalled roads are depicted as continuous double red lines, while kuccha unmetalled tracks are dashed double lines."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What abbreviation is conventionally used on Indian maps for 'Post Office', 'Post and Telegraph Office', and 'Police Station'?",
    options: ["PO, PTO, and PS respectively", "PO, POST, POL", "P, PT, PL", "OFF, TEL, COP"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Standard Survey of India abbreviations: PO = Post Office, PTO = Post & Telegraph Office, PS = Police Station."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What is the main limitation of a flat 2D map when representing the entire spherical Earth?",
    options: [
      "A spherical surface (like an orange peel) cannot be flattened onto a flat plane without some geometric distortion of shape, area, or distance",
      "Maps are too heavy to carry",
      "Maps cannot show colors",
      "Maps erase the oceans"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gauss's Theorema Egregium: A sphere possesses positive Gaussian curvature and cannot be mapped onto a flat plane without metric distortion."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Why is a Globe more advantageous than a Map when studying the Earth as a planetary whole?",
    options: [
      "A globe is a true, undistorted 3D three-dimensional model showing exact shapes, relative sizes, and spatial orientations of continents and oceans",
      "A globe can fit in a pocket easily",
      "A globe shows every small street in a village",
      "A globe can be folded into a book"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A globe preserves true conformal shapes, area ratios, and geodetic arcs without projection distortions."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "If you are walking facing the rising Sun in the early morning, which directions are directly on your LEFT, RIGHT, and BACK?",
    options: [
      "Left: North ; Right: South ; Back: West",
      "Left: South ; Right: North ; Back: West",
      "Left: West ; Right: North ; Back: South",
      "Left: East ; Right: West ; Back: North"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Facing East (090° azimuth): Left is 90° counterclockwise (North), Right is 90° clockwise (South), and behind is West."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What is the science and art of making and drawing maps called?",
    options: ["Cartography", "Calligraphy", "Topography", "Geology"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cartography (from French carte = map, graphie = writing) is the discipline of map conception, design, and production."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Which type of map would a town planner or revenue officer use to show individual cadastral land ownership plots in a village?",
    options: ["A Cadastral / Large-Scale Village Plan Map", "A World Thematic Map", "A Global Physical Map", "A Small-Scale Atlas Map"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cadastral maps are very large-scale (e.g. 1:1,000 to 1:4,000) legal boundary surveys showing parcel ownership."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "How is an International Boundary conventionally depicted on standard maps?",
    options: [
      "A bold line of alternating dark thick dashes and dots",
      "A thin dotted line",
      "A solid green double line",
      "A wavy blue line"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "International borders are designated by thick black alternating dash-dot-dash lines."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Read the statements:\nAssertion (A): A Large Scale map provides far more detailed spatial information than a Small Scale map.\nReason (R): In a Large Scale map, a small area on the ground is represented by a relatively large distance on paper (e.g., 1 cm = 50 meters).\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Larger representative fraction (1/5,000 > 1/5,000,000) permits micro-features like individual buildings, lanes, and wells to be drawn."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Spot the IMPOSTER in the following classification of maps:\nGroup: [Physical Map, Political Map, Thematic Map, Thermometer]",
    options: ["Physical Map", "Political Map", "Thematic Map", "Thermometer"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Thermometer is an instrument measuring temperature, while Physical, Political, and Thematic are the three major types of maps."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "A hiker at a base camp wants to walk towards a scenic waterfall located exactly halfway between North and West. In which direction must the hiker set their compass bearing?",
    options: ["North-West (NW / 315° bearing)", "North-East (NE)", "South-West (SW)", "South-East (SE)"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Halfway between North (000°/360°) and West (270°) is North-West (315°)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Match Column I (Map Components & Types) with Column II (Descriptions):\n(a) Physical Map  -> (i) Shows distribution of rainfall or industries\n(b) Political Map -> (ii) Shows relief, rivers, mountains, and plains\n(c) Thematic Map  -> (iii) Shows national and state administrative boundaries\n(d) Scale         -> (iv) Ratio of map distance to ground distance",
    options: [
      "a-(ii), b-(iii), c-(i), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Physical = relief/rivers; Political = boundaries; Thematic = rainfall/industries; Scale = distance ratio."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Read the statements:\nStatement 1: A sketch is drawn without scale and is based on memory and rough observation.\nStatement 2: A plan shows length and breadth of rooms in a building that cannot be shown on an ordinary map.\nStatement 3: An atlas contains only physical maps and never political maps.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because atlases contain physical, political, thematic, historical, and demographic maps. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "On a topographical sheet drawn on a scale of 1:50,000, two towns are separated by 8 cm on the map. What is the actual straight-line distance on the ground in kilometers?",
    options: ["4 km (8 cm × 50,000 = 400,000 cm = 4,000 m = 4 km)", "40 km", "2 km", "8 km"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "8 cm × 50,000 = 400,000 cm = 4,000 meters = 4.0 kilometers."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Why does the magnetic needle of a compass always align itself along the North-South direction anywhere on Earth's surface?",
    options: [
      "The Earth itself acts as a gigantic magnet with geomagnetic poles near its geographic poles, exerting magnetic torque on the compass needle",
      "Because the Sun attracts it",
      "Because wind blows from north to south",
      "Because the needle is heavy at one end"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Earth's liquid outer core dynamo generates a global geomagnetic field that aligns magnetized dipoles with geomagnetic flux lines."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Which of the following represents the correct Representative Fraction (R.F.) for a map scale given as '2 cm = 1 km'?",
    options: ["1 : 50,000 (since 1 km = 100,000 cm, so 2 / 100,000 = 1 / 50,000)", "1 : 100,000", "1 : 25,000", "1 : 2,000"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "R.F. = Map Distance / Ground Distance = 2 cm / 100,000 cm = 1 : 50,000."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Consider four map scales:\n1. 1 : 2,500\n2. 1 : 50,000\n3. 1 : 250,000\n4. 1 : 5,000,000\nWhich scale is the LARGEST Scale among these?",
    options: ["Scale 1 (1 : 2,500)", "Scale 2", "Scale 3", "Scale 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The smaller the denominator, the larger the fraction (1/2,500 = 0.0004 vs 1/5,000,000 = 0.0000002). Hence 1:2,500 is the largest scale."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "Why is a Map generally more practical and convenient for daily travel navigation than a 3D Globe?",
    options: [
      "Maps are portable, can be folded, can focus on a specific small locality (city/road), and provide high-density localized data on a flat surface",
      "Globes are always inaccurate",
      "Maps are made of gold",
      "Globes cannot show oceans"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Portability, high-resolution thematic zoom, ease of plotting, and selective regional coverage make maps far superior for navigation."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "What is the conventional color used on topographical maps to show agricultural cultivable farmland?",
    options: ["Yellow color", "Green color", "Brown color", "Red color"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "On Survey of India topographic sheets, yellow wash denotes cultivated agricultural land, while green denotes forest/woodland cover."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 4: Maps",
    question: "If a village church is located to the South-East (SE) of a school, in which direction is the school located relative to the church?",
    options: ["North-West (NW)", "North-East (NE)", "South-West (SW)", "South-East (SE)"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The diametrically opposite direction of South-East (135°) is North-West (315°)."
  }
];

console.log('Generated Social Science Ch4:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/social_ch4.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
