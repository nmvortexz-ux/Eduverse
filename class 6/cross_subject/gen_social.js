import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 1: The Earth in the Solar System (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Celestial bodies that have their own heat and light, which they emit in large amounts, are called:",
    options: ["Stars", "Planets", "Satellites", "Asteroids"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Stars are huge, incandescent celestial bodies composed of burning gases undergoing nuclear fusion, emitting light and heat."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Which celestial star is closest to the planet Earth and provides light and heat to the solar system?",
    options: ["The Sun", "Alpha Centauri", "Proxima Centauri", "Sirius"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Sun is an average G-type main-sequence star situated approximately 150 million kilometres from Earth."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "The recognizable patterns formed by various groups of stars in the night sky are called:",
    options: ["Constellations", "Galaxies", "Nebulae", "Comets"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Constellations (like Ursa Major / Great Bear and Orion) are arbitrary geometric visual groupings of distant stars."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "The North Star that indicates the true geographical north direction is known as the:",
    options: ["Pole Star (Polaris)", "Sirius (Dog Star)", "Vega", "Betelgeuse"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Pole Star stays fixed directly above the Earth's rotational North Pole in the northern sky."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "How many planets are there in our Solar System according to the International Astronomical Union (IAU)?",
    options: ["8 planets", "9 planets", "10 planets", "7 planets"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The 8 official planets in order from the Sun are: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Which planet is known as 'Earth's Twin' because its size, mass, and shape are very similar to Earth?",
    options: ["Venus", "Mars", "Mercury", "Jupiter"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Venus is dubbed 'Earth's Twin' due to comparable terrestrial diameter (12,104 km) and bulk composition."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What is the unique spherical shape of planet Earth (slightly flattened at the poles and bulged at the equator) called?",
    options: ["Geoid (Earth-like shape)", "Perfect Sphere", "Cube", "Oval"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Geoid' literally means 'Earth-shaped', describing an oblate spheroid flattened at poles due to axial rotation."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Why is planet Earth uniquely known as the 'Blue Planet' when viewed from outer space?",
    options: [
      "Two-thirds (around 71%) of its surface is covered by liquid water in oceans and seas",
      "Its atmosphere is made of blue smoke",
      "Earth is covered with blue soil",
      "Sunlight reflects blue from mountains"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rayleigh scattering off expansive oceanic hydrosphere gives Earth its brilliant azure appearance from space."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "How long does the Moon take to complete one revolution around the Earth?",
    options: ["About 27 days (and takes exactly the same time to complete one rotation on its axis)", "365 days", "24 hours", "30 days"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Synchronous tidal locking causes the Moon's orbital period (~27.3 days) to match its axial rotation period."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "The tiny rocky celestial objects that revolve around the Sun primarily between the orbits of Mars and Jupiter are called:",
    options: ["Asteroids", "Meteoroids", "Comets", "Dwarf Stars"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Main Asteroid Belt is a circumstellar disc located between the orbital paths of terrestrial Mars and gas giant Jupiter."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Small chunks of rock and metallic debris that travel around the Sun and sometimes enter Earth's atmosphere causing a streak of light are:",
    options: ["Meteoroids (Shooting stars)", "Asteroids", "Satellites", "Constellations"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Frictional atmospheric compression heats falling meteoroids, creating incandescent trails (meteors / shooting stars)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What is our home spiral galaxy called, which appears as a faint glowing band of stars across the clear night sky?",
    options: ["Milky Way Galaxy (Akash Ganga)", "Andromeda Galaxy", "Triangulum", "Whirlpool Galaxy"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Our solar system resides inside the Orion Arm of the Milky Way barred spiral galaxy, traditionally called Akash Ganga."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Why do we always see only ONE side of the Moon from the Earth?",
    options: [
      "Because the Moon takes exactly the same time (~27 days) to complete one rotation on its axis as it takes to revolve once around the Earth (Synchronous Rotation)",
      "The other side of the Moon is pitch dark without light",
      "The Moon does not rotate at all",
      "Clouds block the other side"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gravitational tidal lock equalizes orbital revolution and axial spin, keeping the lunar near-side permanently facing Earth."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Why is Earth considered the only unique planet in the Solar System capable of supporting biological life?",
    options: [
      "It has moderate temperature conditions, life-supporting oxygen gas in atmosphere, and abundant liquid water in hydrological cycles",
      "It has zero gravity",
      "It is the closest planet to the Sun",
      "It is made entirely of gold and diamonds"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Earth sits squarely inside the circumstellar Goldilocks Habitable Zone, sustaining liquid water and breathable N2-O2 atmosphere."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "How long does light from the Sun take to reach the surface of planet Earth?",
    options: ["About 8 minutes and 20 seconds", "1 minute", "24 hours", "Instantaneously in 1 second"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "At light speed c = 300,000 km/s across 150,000,000 km distance: time t = 150,000,000 ÷ 300,000 = 500 seconds = 8 min 20 sec."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Who was the first human astronaut to step onto the surface of the Moon on 20 July 1969?",
    options: ["Neil Armstrong", "Yuri Gagarin", "Rakesh Sharma", "Buzz Aldrin"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "American Apollo 11 astronaut Neil Armstrong made historic first contact on the lunar Mare Tranquillitatis."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What is a 'Human-made (Artificial) Satellite'?",
    options: [
      "An artificial body designed by scientists to gather information about the universe or for telecommunication, placed in Earth's orbit by rockets",
      "A natural rock orbiting Mars",
      "A telescope on a mountain",
      "An aeroplane flying in clouds"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Spacecraft like INSAT, IRS, and EDUSAT are engineered payloads injected into orbit for communications and remote sensing."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Why was Pluto reclassified from a major planet to a 'Dwarf Planet' by the International Astronomical Union (IAU) in August 2006?",
    options: [
      "Pluto failed to clear its orbital neighborhood of other icy trans-Neptunian Kuiper belt debris",
      "Pluto melted into water",
      "Pluto collided with the Sun",
      "Pluto stopped revolving"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "IAU planetary criteria require a planet to: orbit the Sun, attain hydrostatic equilibrium, and have cleared its orbital neighborhood."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What are the four 'Inner Planets' of the Solar System?",
    options: [
      "Mercury, Venus, Earth, and Mars (terrestrial rocky planets close to the Sun)",
      "Jupiter, Saturn, Uranus, and Neptune",
      "Earth, Moon, Sun, and Mars",
      "Pluto, Ceres, Eris, and Haumea"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Inner planets are dense, rocky silicates situated inside the main asteroid belt, unlike outer gas/ice giants."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Which outer planet in the Solar System possesses the most spectacular and prominent system of rings composed of ice and dust chunks?",
    options: ["Saturn", "Jupiter", "Neptune", "Mars"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Saturn's extensive ring system spans up to 282,000 km, composed of reflective water-ice particles and rocky debris."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What is the famous seven-star constellation known as 'Saptarishi' in Indian astronomy?",
    options: [
      "A group of seven prominent stars that forms part of the Ursa Major (Great Bear) constellation",
      "A cluster of seven planets",
      "The seven moons of Jupiter",
      "The Orion Hunter belt"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Saptarishi asterism (Big Dipper) forms the prominent tail and body of the constellation Ursa Major."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "How can one locate the position of the North Pole Star in the night sky using the Saptarishi constellation?",
    options: [
      "By drawing an imaginary straight pointer line through the two forward pointer stars of Saptarishi and extending it northward",
      "By looking directly behind the Moon",
      "By pointing toward the southern horizon",
      "By tracking the movement of Mars"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Extending the line connecting pointer stars Merak and Dubhe northward leads directly to Polaris."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What happens when a large meteoroid does not burn up completely in Earth's atmosphere and crashes onto the Earth's surface?",
    options: [
      "It is called a Meteorite and creates a hollow impact crater in the ground",
      "It turns into a new planet",
      "It bounces back to outer space",
      "It dissolves into rain clouds"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Surviving solid fragments that strike planetary crust are termed meteorites, forming impact structures (e.g., Lonar Crater)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Which is the fastest planet to complete one revolution around the Sun (taking only 88 days)?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "By Kepler's Third Law, Mercury's closest orbital proximity (57.9 million km) results in a brief 88-day sidereal year."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What is the primary source of all heat and light energy throughout our Solar System?",
    options: ["The Sun", "The Moon", "Volcanoes on Earth", "The Asteroid Belt"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Thermonuclear fusion of hydrogen into helium in the Sun's core generates the solar irradiance powering the entire system."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Which of the following Indian artificial satellites was launched for educational tele-broadcasting?",
    options: ["EDUSAT (GSAT-3)", "Aryabhata", "Rohini", "Chandrayaan-1"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Launched in 2004 by ISRO, EDUSAT was India's dedicated satellite for distance educational curriculum delivery."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What is a 'New Moon' night known as in the Indian calendar?",
    options: ["Amavasya (when the Moon is not visible at all)", "Poornima (Full Moon)", "Ekadashi", "Prathama"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "During Amavasya (New Moon), the Moon sits between Earth and Sun, presenting its unilluminated shadowed face toward Earth."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What is a 'Full Moon' night known as in the Indian calendar?",
    options: ["Poornima (when the whole disc of the Moon is illuminated)", "Amavasya", "Chaturdashi", "Ashtami"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Poornima occurs when Earth lies between Sun and Moon, allowing the full hemisphere of lunar reflection to be viewed."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Read the statements:\nAssertion (A): We cannot see the Moon and all tiny bright stars during daytime.\nReason (R): The immensely bright glare of sunlight does not allow us to see these bright celestial objects in the day sky.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Atmospheric solar ray scattering illuminates the daytime sky to an optical intensity far surpassing the dim flux of background stars."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Spot the IMPOSTER in the following group of planets based on their physical composition:\nGroup: [Mercury, Venus, Earth, Jupiter]",
    "options": ["Mercury", "Venus", "Earth", "Jupiter"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Jupiter is a giant GASEOUS outer planet composed of hydrogen and helium, whereas Mercury, Venus, and Earth are solid TERRESTRIAL rocky inner planets."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Arrange the planets in order of their increasing distance from the Sun:\n1. Mars\n2. Mercury\n3. Earth\n4. Venus",
    "options": ["2 -> 4 -> 3 -> 1 (Mercury -> Venus -> Earth -> Mars)", "1 -> 2 -> 3 -> 4", "4 -> 2 -> 3 -> 1", "2 -> 3 -> 4 -> 1"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The radial orbital order from the Sun is Mercury (1st), Venus (2nd), Earth (3rd), and Mars (4th)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Read the statements:\nAssertion (A): The Earth is described as an oblate spheroid (Geoid).\nReason (R): Centrifugal forces generated by Earth's axial rotation cause a slight equatorial bulge and polar flattening.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Planetary rotation creates equatorial rotational bulge, making the equatorial radius ~21 km larger than polar radius."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What is the fundamental scientific difference between a Planet and a Star?",
    "options": [
      "Stars generate their own heat and light through nuclear fusion; planets have no internal fusion and only reflect light from stars",
      "Planets are always bigger than stars",
      "Stars revolve around planets",
      "Stars are made of liquid water"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Self-luminous stars undergo stellar nucleosynthesis, whereas non-luminous planets shine solely via reflected starlight."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Read the statements regarding the Solar System:\nStatement 1: All eight planets revolve around the Sun in fixed, elongated elliptical paths called Orbits.\nStatement 2: The Asteroid belt is located between the orbits of Venus and Earth.\nStatement 3: Millions of galaxies together form the Universe.\nWhich statements are TRUE?",
    "options": ["Statements 1 and 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because the main Asteroid belt lies between Mars and Jupiter. Statements 1 and 3 are correct."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Match the celestial bodies with their distinctive characteristics:\n(a) Venus     -> (i) Red Planet (iron oxide dust)\n(b) Mars      -> (ii) Earth's Twin\n(c) Jupiter   -> (iii) Ringed Gas Giant\n(d) Saturn    -> (iv) Largest planet in solar system",
    "options": [
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Venus = Earth's Twin; Mars = Red planet; Jupiter = Largest planet; Saturn = Prominent ring system."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Why does the Moon have extreme surface temperatures (100°C+ during lunar day and -170°C at lunar night) with zero liquid water?",
    "options": [
      "The Moon lacks a protective blanket of atmosphere to trap or shield solar radiation and regulate heat",
      "The Moon is made of radioactive fire",
      "The Moon is too close to the Sun",
      "The Moon is surrounded by ice clouds"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Lunar vacuum exosphere offers zero greenhouse buffering, subjecting the regolith to brutal unshielded solar irradiance and radiative cooling."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Why is the word 'Planet' derived from the ancient Greek word 'Planetai'?",
    "options": [
      "Because 'Planetai' means 'Wanderers', describing how planets appeared to wander across fixed stellar constellations",
      "Because it means 'Giant Stone'",
      "Because it means 'Water Carrier'",
      "Because it means 'King of Sky'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ancient astronomers tracked planets drifting apparent retrograde loops relative to background stellar coordinates, naming them wanderers."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Consider four celestial objects:\n1. Sirius (Dog Star)\n2. Titan (Moon of Saturn)\n3. Ceres (Dwarf planet in asteroid belt)\n4. Halley's Comet\nWhich of these generates self-luminous radiant energy via nuclear fusion?",
    "options": ["1 only (Sirius)", "2 and 3 only", "1 and 4 only", "All 1, 2, 3, and 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Sirius is a massive luminous main-sequence star; Titan, Ceres, and Halley are non-fusion planetary/cometary bodies."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "What is the speed of light in vacuum, and how is it used to define astronomical distances (Light Years)?",
    "options": [
      "300,000 km per second (3 × 10⁸ m/s); a light year is the total distance light travels in one full year (~9.46 trillion km)",
      "1,000 km per hour",
      "30,000 km per second",
      "150 million km per second"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Light speed c = 3 × 10⁸ m/s in vacuum; 1 light year = c × 31,557,600 s ≈ 9.46 × 10¹² km."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 1: The Earth in the Solar System",
    question: "Why do astronauts floating in the International Space Station or standing on the Moon see the outer space sky as pitch BLACK even in broad daylight?",
    "options": [
      "There is no atmospheric medium in space to scatter incoming sunlight (Rayleigh scattering does not occur in vacuum)",
      "The Sun is turned off in space",
      "Space helmets have black glass",
      "Earth blocks all light"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Without air molecules to scatter blue optical wavelengths, the vacuum of space appears pitch black even when the Sun blazes brightly."
  }
];

console.log('Generated Social Science:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/social_ch1.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
