import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 10: Fun with Magnets (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What is a naturally occurring magnetic rock/mineral consisting of iron oxide (Fe₃O₄) that was discovered in ancient Greece?",
    options: ["Magnetite (Lodestone)", "Hematite", "Bauxite", "Pyrite"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Magnetite is a natural permanent magnet discovered in Magnesia, ancient Greece, also called 'lodestone' ('leading stone')."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Who was the ancient Greek shepherd who discovered natural magnetic rock when the iron tip of his walking stick and iron nails in his shoes got stuck to a black rock?",
    options: ["Magnes", "Archimedes", "Aristotle", "Socrates"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Legend says the shepherd Magnes discovered magnetic ore on Mount Ida when his iron-tipped staff stuck to magnetite rocks."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Materials that are attracted strongly towards a magnet (such as iron, nickel, cobalt, and steel) are called:",
    options: ["Magnetic Materials", "Non-magnetic Materials", "Insulators", "Plastic Materials"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ferromagnetic materials containing unpaired d-electrons (Fe, Ni, Co) are attracted to magnetic fields."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Materials that are NOT attracted towards a magnet (such as wood, plastic, rubber, glass, paper, gold, aluminium) are called:",
    options: ["Non-magnetic Materials", "Magnetic Materials", "Electromagnets", "Lodestones"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Non-magnetic materials lack permanent atomic magnetic dipoles and do not exhibit magnetic attraction."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "How many magnetic poles does EVERY magnet possess, regardless of its shape or size?",
    options: [
      "Two poles (North Pole 'N' and South Pole 'S')",
      "One single pole",
      "Three poles",
      "Four poles"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Magnetic dipoles always exist in pairs: a North-seeking pole (N) and a South-seeking pole (S)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Where is the magnetic force (attraction power) of a bar magnet the STRONGEST?",
    options: [
      "Near its two end Poles (North and South Poles)",
      "Exactly at the center of the magnet",
      "Uniform everywhere across its body",
      "Only on its top surface"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Magnetic field flux density converges at the two terminal poles, where iron filings cling in dense clusters."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "In which geographical direction does a freely suspended bar magnet ALWAYS come to rest?",
    options: [
      "North-South direction (N-S)",
      "East-West direction (E-W)",
      "North-East direction",
      "Any random direction"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A freely pivoted magnet aligns with Earth's geomagnetic field lines along the geographic North-South meridian."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What navigational instrument uses a magnetized needle freely pivoted inside a dial to find geographical directions?",
    options: ["Magnetic Compass", "Speedometer", "Barometer", "Thermometer"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A magnetic compass features a pivoted magnetized needle whose painted North tip indicates geomagnetic north."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What happens when two LIKE magnetic poles (North and North, or South and South) are brought close to each other?",
    options: [
      "They REPEL (push away from) each other",
      "They attract each other",
      "They stick together tightly",
      "They turn into copper"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Fundamental magnetic law: Like poles repel (N-N or S-S); unlike poles attract (N-S)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What happens when two UNLIKE magnetic poles (North and South) are brought close to each other?",
    options: [
      "They ATTRACT (pull towards) each other",
      "They repel each other",
      "They lose their magnetism immediately",
      "They heat up and melt"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Opposite magnetic polarities (N and S) experience mutual attractive Lorentz/dipolar forces."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Which of the following is a classic artificial shape of manufactured permanent magnets?",
    options: [
      "Bar magnet, Horse-shoe magnet, Cylindrical magnet, and Ball-ended magnet",
      "Square paper magnet",
      "Liquid water magnet",
      "Cloth magnet"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Artificial magnets are cast/sintered in bar, horseshoe, disc, cylindrical, and ring geometries."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What is the surest and only foolproof test to confirm whether an unknown metal piece is an active magnet or merely a magnetic iron piece?",
    options: [
      "REPULSION test (only another magnet will experience repulsion; an ordinary iron piece is attracted to both poles)",
      "Attraction test",
      "Weighing test",
      "Color test"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Unmagnetized ferromagnetic iron is attracted by both N and S poles; only a true magnet repels like poles."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What happens when a bar magnet is cut or broken into TWO halves across its middle?",
    options: [
      "Each broken piece becomes a complete, independent magnet with its own North and South Pole (Magnetic monopoles do NOT exist)",
      "One piece becomes pure North pole and the other pure South pole",
      "Both pieces lose all magnetism permanently",
      "The magnet explodes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Atomic magnetic domains remain dipolar; cutting a magnet creates two smaller dipoles each with N and S poles."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "How can you magnetize an ordinary iron nail or sewing needle using the 'Single-Touch' method?",
    options: [
      "Stroke the iron nail with one pole of a bar magnet repeatedly in ONE fixed direction along its length (30–40 times) without reversing direction",
      "Rub the magnet back and forth randomly",
      "Heat the nail in a fire with the magnet",
      "Drop the nail in cold water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Unidirectional stroking aligns magnetic Weiss domains in the ferromagnetic nail along the stroke vector."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Which of the following actions can cause a permanent magnet to LOSE its magnetism (Demagnetization)?",
    options: [
      "Heating to high temperatures, hammering vigorously with a mallet, or dropping it repeatedly from a height onto hard floor",
      "Washing it with clean water",
      "Keeping it in a dark wooden box",
      "Using it to pick up paper clips"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Thermal energy (above Curie temperature) and mechanical impact randomize aligned magnetic domain orientations."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "How should Bar Magnets be safely stored in pairs to preserve their magnetic strength over years?",
    options: [
      "Stored in pairs with UNLIKE poles opposite each other, separated by a wooden spacer in the middle and connected by soft iron pieces (Keepers) across their ends",
      "Stored with like poles touching",
      "Stored loose in an iron bucket",
      "Stored submerged in salt water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Soft iron magnetic keepers close magnetic flux loops, preventing self-demagnetizing free pole dissipation."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "How should a Horseshoe Magnet be stored properly?",
    options: [
      "By placing a single piece of soft iron (magnetic keeper) across its two open poles",
      "By bending its arms together",
      "By heating it before storing",
      "By wrapping it in aluminium foil"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A soft iron keeper across both adjacent poles of a horseshoe magnet bridges the gap, completing the magnetic circuit."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Why does the Earth itself behave like a colossal gigantic magnet?",
    options: [
      "Circulating molten iron-nickel liquid currents in Earth's outer core generate a geomagnetic field, with its magnetic south pole located near the geographic North Pole",
      "Because Earth is made of giant plastic magnets",
      "Because mountains are magnetic",
      "Because satellites magnetize Earth"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Geodynamo convection in the outer core generates Earth's geomagnetic field; geographic North hosts geomagnetic South polarity."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What ancient Chinese legend describes an emperor's chariot equipped with a rotating wooden statue holding an outstretched arm that always pointed SOUTH?",
    options: ["The South-Pointing Chariot of Emperor Huang Di", "The Dragon Compass", "The Great Wall Chariot", "The Silk Navigator"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Huang Di's legendary chariot utilized a lodestone/geared mechanism whose statue arm consistently pointed South."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Why should permanent strong magnets be kept away from cassette tapes, credit cards, computer hard drives, and mobile phones?",
    options: [
      "The strong magnetic field can alter or erase the magnetic data encoded on magnetic strips, chips, and micro-circuitry",
      "Because magnets will catch fire near phones",
      "Because phones will become too heavy",
      "Because phone glass turns into mirror"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "External stray magnetic flux can corrupt magnetically stored binary bits and saturate Hall sensors in electronics."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "If an iron needle is magnetized by stroking with the North pole of a bar magnet starting from end A to end B, what magnetic pole is formed at end B?",
    options: [
      "South Pole (opposite to the stroking pole)",
      "North Pole",
      "No pole is formed",
      "End B becomes non-magnetic"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The trailing end B of the stroke acquires opposite polarity (South pole) to the departing North pole."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Can magnetic force act through non-magnetic barriers (like a sheet of paper, cardboard, or a plastic ruler)?",
    options: [
      "Yes, magnetic field lines penetrate through non-magnetic materials like paper, glass, plastic, and water effortlessly",
      "No, paper blocks all magnetic forces completely",
      "Only if the paper is wet",
      "Only in space"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Magnetic flux permeates non-ferromagnetic dielectric media with magnetic permeability μ ≈ μ₀."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "A tailor dropped a box of sewing needles into a box of sawdust. What is the fastest and easiest way to separate all the steel needles without searching by hand?",
    options: [
      "Pass a strong magnet through the sawdust; all steel needles will cling to the magnet instantly",
      "Burn the sawdust",
      "Dissolve in water",
      "Use a microscope"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Magnetic separation extracts ferromagnetic steel needles while leaving non-magnetic sawdust behind."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Which of the following modern technological devices utilizes powerful magnets to operate?",
    options: ["Electric motors, Dynamos, MRI medical scanners, Maglev trains, and Audio speakers", "Wooden chairs", "Cotton shirts", "Glass bottles"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Electromagnetic induction and magnetic levitation power electric motors, Maglev transit, MRI tomography, and acoustic transducers."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "How does a Maglev (Magnetic Levitation) high-speed bullet train run without touching the track rails?",
    options: [
      "Superconducting electromagnets on the train and track repel each other with strong like magnetic poles, levitating the train in air and eliminating mechanical friction",
      "It flies using jet wings",
      "It rolls on millions of tiny ball bearings",
      "It floats on a layer of hot steam"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Electrodynamic/electromagnetic levitation utilizes magnetic repulsion to float carriages ~10–15 mm above guideways."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What is an 'Electromagnet'?",
    options: [
      "A temporary magnet formed by winding an insulated copper wire around a soft iron core and passing electric current through it",
      "A rock found in the ocean",
      "A permanent bar magnet that never loses magnetism",
      "A magnet made of pure plastic"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "An electromagnet generates a controllable magnetic field via current flow through an insulated solenoid coil."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Why do iron filings sprinkle on a sheet of paper over a bar magnet arrange themselves in distinct curved lines?",
    options: [
      "Each tiny iron filing becomes a miniature induced magnet and aligns along the invisible curved Magnetic Field Lines running from North to South pole",
      "Because the paper is curved",
      "Because iron filings melt",
      "Because of gravity pulling them sideways"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Induced magnetic dipolar moments torque iron filings tangent to lines of magnetic flux density."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What happens if a freely suspended bar magnet is brought near another strong magnet?",
    options: [
      "The suspended magnet will rotate and re-align: its North pole will be attracted to the other's South pole and repelled by its North pole",
      "It will stop moving forever",
      "It will turn into copper",
      "It will ignore the second magnet"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Torque τ = m × B causes the pivoted dipole to rotate until its magnetic moment aligns with the external field."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Read the statements:\nAssertion (A): It is physically impossible to isolate a single, independent magnetic monopole (pure North or pure South pole) in classical physics.\nReason (R): Magnetism originates from circulating microscopic atomic electron dipoles; breaking a magnet simply divides the dipoles, creating pairs of North and South poles in every fragment.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Gauss's Law for Magnetism (∇ · B = 0) establishes that magnetic field lines are continuous closed loops without monopole sources."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Spot the IMPOSTER in the following group of materials categorized as Non-magnetic:\nGroup: [Pure Aluminium, Copper coin, Brass screw, Cobalt plate]",
    options: ["Pure Aluminium", "Copper coin", "Brass screw", "Cobalt plate"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Cobalt is a powerful FERROMAGNETIC material (like Iron and Nickel) that is strongly attracted to magnets."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "A student suspends an unmarked metallic bar X-Y freely. End X points towards geographic North. When the North pole of a known bar magnet is brought near end X, end X is strongly REPELLED. What can you conclude definitively about end X and end Y?",
    options: [
      "The bar is a magnet; end X is a North Pole and end Y is a South Pole",
      "The bar is ordinary non-magnetic aluminium",
      "End X is a South Pole",
      "The bar is unmagnetized soft iron"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Repulsion definitively confirms that bar X-Y is a magnet and end X is a North pole."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Match Column I (Magnetic Phenomena) with Column II (Scientific Principles):\n(a) Freely suspended magnet -> (i) Opposite poles experience mutual attraction\n(b) Like poles (N-N / S-S)     -> (ii) Like poles experience mutual repulsion\n(c) Unlike poles (N-S)       -> (iii) Aligns along Earth's geomagnetic N-S meridian\n(d) Soft iron keeper         -> (iv) Closes magnetic flux loop preventing demagnetization",
    options: [
      "a-(iii), b-(ii), c-(i), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(ii), b-(iv), c-(i), d-(iii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Suspended magnet = Earth N-S; Like poles = Repulsion; Unlike poles = Attraction; Keepers = Prevents demagnetization."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Read the statements regarding magnetic properties:\nStatement 1: A magnet attracts an unmagnetized iron piece by first inducing temporary opposite magnetic polarity in the nearest part of the iron (Magnetic Induction).\nStatement 2: Heating a magnet above its Curie temperature permanently destroys its ferromagnetic domain alignment.\nStatement 3: Plastic can be magnetized using the single-touch stroking method.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because plastic has no ferromagnetic domains and cannot be magnetized. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Why does the geographic North Pole of Earth attract the NORTH-seeking pole of a compass needle?",
    options: [
      "Because Earth's geomagnetic SOUTH magnetic pole is physically located near the geographic North Pole, exerting attractive force on the needle's North pole",
      "Because like poles attract in space",
      "Because geographic north has positive electricity",
      "Because the compass is upside down"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Earth's internal magnetic dipole is inverted relative to geography: the geomagnetic South pole resides near Arctic geographic North."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "A heavy-duty industrial magnetic crane in a junkyard lifts 5 tonnes of scrap iron cars and drops them precisely into a furnace. How does the crane operator release the scrap iron instantly?",
    options: [
      "The crane uses a powerful Electromagnet; switching OFF the electric current stops the magnetic field instantly, releasing the scrap iron",
      "By hitting the magnet with a hammer",
      "By spraying cold water on the cars",
      "By turning the crane upside down"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Electromagnets provide instantaneous on/off control: cutting the solenoid circuit demagnetizes the soft iron core, dropping the load."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Consider four rings placed over a vertical wooden pencil:\nRing 1: Magnet (N on top, S at bottom)\nRing 2: Magnet (S on top, N at bottom)\nRing 3: Magnet (N on top, S at bottom)\nRing 4: Soft Iron ring\nWhich pair of adjacent rings will LEVITATE (float) with a visible air gap between them?",
    options: [
      "Between Ring 1 and Ring 2 (both facing surfaces have South Pole 'S-S', causing strong mutual repulsion and levitation)",
      "Between Ring 2 and Ring 3",
      "Between Ring 3 and Ring 4",
      "All rings stick tightly without gaps"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bottom of Ring 1 (S) meets Top of Ring 2 (S): identical S-S poles repel, levitating Ring 1 above Ring 2."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "Why is Soft Iron preferred over Hard Steel for making magnetic keepers and cores of electromagnets?",
    options: [
      "Soft iron has high magnetic permeability and low retentivity, magnetizing and demagnetizing instantly without retaining permanent residual magnetism",
      "Because soft iron is cheaper than wood",
      "Because soft iron is transparent",
      "Because steel cannot be magnetized"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Soft iron possesses low coercive force and narrow hysteresis loop, ideal for temporary magnetic coupling."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What is an alloy made of Aluminium, Nickel, and Cobalt widely used to manufacture ultra-strong permanent industrial magnets called?",
    options: ["Alnico (Al-Ni-Co)", "Brass", "Bronze", "Solder"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Alnico ferromagnetic alloys combine high coercivity and temperature stability for permanent magnets."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "A compass is placed near an unknown hidden box. The compass needle deflects wildly away when brought near one corner of the box and deflects in reverse at the other corner. What is inside the box?",
    options: [
      "A permanent magnet (the deflection reversals reflect the presence of North and South dipolar poles)",
      "A piece of gold jewelry",
      "A bottle of pure water",
      "An empty wooden block"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bipolar deflection matching inverse field directions proves an active magnetic dipole source inside the enclosure."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 10: Fun with Magnets",
    question: "What protective geomagnetic structure shields Earth's biosphere from deadly ionizing solar wind and cosmic radiation?",
    options: [
      "Earth's Magnetosphere (Van Allen radiation belts)",
      "The Ozone layer only",
      "The Troposphere",
      "Ocean tides"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The geomagnetic magnetosphere deflects charged interplanetary solar wind plasma around Earth, shielding life."
  }
];

console.log('Generated Science Ch10:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/science_ch10.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
