import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 11: Earth's Interior, Rocks, Minerals & Landforms (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What is the outermost, thinnest solid layer of the Earth called?",
    options: ["The Crust", "The Mantle", "The Outer Core", "The Inner Core"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The crust is the outermost solid lithospheric layer of the Earth, averaging 35 km on continental masses and only 5 km on ocean floors."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are the two main mineral constituents of the CONTINENTAL CRUST (often called 'SIAL')?",
    options: ["Silica and Alumina (SIAL)", "Silica and Magnesium (SIMA)", "Nickel and Iron (NIFE)", "Copper and Gold"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The continental crust is composed predominantly of Silica and Alumina, hence abbreviated as SIAL."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are the main mineral constituents of the OCEANIC CRUST (called 'SIMA')?",
    options: ["Silica and Magnesium (SIMA)", "Silica and Alumina (SIAL)", "Nickel and Ferrous", "Calcium and Carbon"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The basaltic oceanic crust mainly comprises Silica and Magnesium, hence named SIMA."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are the main mineral constituents of the innermost central layer of the Earth—the CORE (called 'NIFE')?",
    options: ["Nickel and Ferrous / Iron (NIFE)", "Silica and Magnesium", "Silica and Alumina", "Aluminum and Copper"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Earth's core (radius ~3,500 km) is composed of heavy dense metals: Nickel (Ni) and Ferrous/Iron (Fe), termed NIFE."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Which layer of the Earth lies directly beneath the crust and extends to a depth of 2,900 km?",
    options: ["The Mantle (Asthenosphere)", "The Crust", "The Inner Core", "The Lithosphere"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The mantle forms the intermediate layer of the Earth, extending to a depth of 2,900 km below the crust."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Rocks that are formed directly by the cooling and solidification of molten magma or lava are called:",
    options: ["Igneous Rocks (Primary Rocks)", "Sedimentary Rocks", "Metamorphic Rocks", "Fossil Rocks"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Igneous rocks (Latin 'Ignis' = fire) are the primary parent rocks formed directly from cooling magma or lava."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Which type of igneous rock is formed when molten lava comes out onto the Earth's surface and cools down RAPIDLY, forming fine-grained rocks like the Basalt of the Deccan Plateau?",
    options: ["Extrusive Igneous Rocks (e.g. Basalt)", "Intrusive Igneous Rocks", "Sedimentary Rocks", "Metamorphic Rocks"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Extrusive (volcanic) rocks cool rapidly on the surface, producing fine-grained crystalline structures like Basalt."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Which type of igneous rock is formed when molten magma cools SLOWLY deep inside the Earth's crust, forming large crystals like Granite?",
    options: ["Intrusive Igneous Rocks (e.g. Granite)", "Extrusive Igneous Rocks", "Sedimentary Rocks", "Sandstone"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Intrusive (plutonic) rocks cool slowly within the crust, forming coarse-grained crystalline textures like Granite."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Rocks formed by the deposition, accumulation, and compression of mineral sediments and organic remains in layers (containing FOSSILS) are called:",
    options: ["Sedimentary Rocks (e.g. Sandstone, Limestone, Shale)", "Igneous Rocks", "Metamorphic Rocks", "Basalt"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Sedimentary rocks (Latin 'sedimentum' = settle down) are layered strata formed by compacted sediments and frequently contain fossils."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "When igneous and sedimentary rocks undergo dramatic transformations under intense HEAT and extreme PRESSURE, what new class of rocks is formed?",
    options: ["Metamorphic Rocks (e.g. Clay into Slate, Limestone into Marble)", "Primary Rocks", "Extrusive Rocks", "Magma"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Metamorphic rocks (Greek 'metamorphose' = change of form) result from recrystallization under extreme heat and pressure."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "The continuous geological transformation of one rock type into another under cyclical physical processes is known as the:",
    options: ["The Rock Cycle", "The Water Cycle", "The Nitrogen Cycle", "The Carbon Cycle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The rock cycle describes the cyclic transitions among igneous, sedimentary, and metamorphic rocks driven by geological forces."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Which white metamorphic rock, transformed from sedimentary limestone under high temperature, was used to construct the world-famous TAJ MAHAL at Agra?",
    options: ["White Marble (Makrana Marble)", "Red Sandstone", "Granite", "Basalt"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Makrana white marble (metamorphosed limestone from Rajasthan) was used to construct the iconic Taj Mahal."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What is the fundamental difference between ENDOGENIC forces and EXOGENIC forces shaping the Earth's surface?",
    options: [
      "Endogenic forces originate deep within the Earth's interior (causing earthquakes, volcanic eruptions, and mountain building) ; Exogenic forces operate on the Earth's exterior surface (weathering and erosion by rivers, wind, glaciers, sea waves)",
      "Endogenic forces are in oceans and Exogenic forces are in air",
      "Endogenic forces cause rain and Exogenic forces cause fire",
      "There is no difference"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Endogenic = internal tectonic/magmatic forces; Exogenic = external geomorphic weathering and erosional agents."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What is the place in the Earth's crust where an earthquake vibration originates called, and what is the point on the surface directly above it called?",
    options: [
      "The origin point inside the crust is the FOCUS (Hypocenter) ; The point on the surface directly above the focus is the EPICENTER",
      "Surface is Focus and interior is Epicenter",
      "Both are called Crater",
      "Both are called Magma Chamber"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The focus is the subterranean seismic rupture origin; the epicenter is the surface point directly perpendicular above the focus."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Which scientific instrument is used to record and measure the vibrations and waves of an Earthquake?",
    options: ["A Seismograph (and measured on the Richter Scale)", "A Barometer", "An Anemometer", "A Hygrometer"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Earthquake seismic tremors are recorded by seismographs, with magnitude quantified on the logarithmic Richter scale."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are the large S-shaped curves and loops formed by a meandering river across a flat valley plain called?",
    options: ["Meanders", "Waterfalls", "Glacial moraines", "Sand dunes"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Meanders are sinuous serpentine curves formed along a mature river's course by continuous lateral erosion and deposition."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What happens when a river meander loop becomes so acute that the river cuts through the narrow neck, leaving behind a crescent-shaped cutoff water body?",
    options: ["An Oxbow Lake", "A Waterfall", "A Delta", "A Canyon"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "An oxbow lake is a crescent-shaped cutoff lake formed when a river cuts straight through a meandering loop neck during floods."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What is the triangular landform formed at the mouth of a river where it enters the sea and deposits its entire sediment load called?",
    options: ["A River Delta (like the Sundarbans Delta)", "An Estuary", "A Floodplain", "A Cliff"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A delta is a triangular depositional landform formed at a river mouth by distributaries depositing silt into a standing sea/lake."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are the isolated rock pillars left standing in the ocean after the roofs of 'Sea Arches' collapse under relentless wave erosion called?",
    options: ["Sea Stacks", "Sea Caves", "Sea Cliffs", "Beaches"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Coastal wave progression: sea cave → sea arch (roof pierced) → sea stack (roof collapses, leaving isolated vertical rock pillars)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are the rock formations in hot deserts that have a narrow base and a wide top due to wind eroding the lower section faster than the upper part called?",
    options: ["Mushroom Rocks (Rock Pedestals)", "Sand Dunes", "Loess", "Moraines"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mushroom rocks develop in arid deserts because wind-borne sand abrasion is concentrated within 1 meter of the ground, undercutting rock bases."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are the crescent-shaped or ridge-like mounds of sand deposited by desert winds called?",
    options: ["Sand Dunes (Barchans)", "Loess", "Moraines", "Oxbows"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sand dunes are dynamic depositional mounds of sand accumulated by aeolian wind action in desert landscapes."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are the vast deposits of fine, yellowish, wind-blown silt found extensively in northern China called?",
    options: ["Loess Deposits", "Sand Dunes", "Glacial Moraines", "Floodplains"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Loess is fine, mineral-rich, windblown silt deposited over extensive regional plains (notably in China's Loess Plateau)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are the ridges of rocks, gravel, sand, and clay deposited by melting glaciers along their valley margins called?",
    options: ["Glacial Moraines", "Waterfalls", "Meanders", "Deltas"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Glacial moraines are linear ridges of unsorted glacial till (boulders, gravel, sand, clay) dumped by retreating valley glaciers."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Which of the following sedimentary rocks was extensively used to construct the historic RED FORT in Delhi?",
    options: ["Red Sandstone", "Granite", "Basalt", "Marble"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Mughal Red Fort in Delhi and Agra Fort were constructed using red quartzitic sandstone quarried in Rajasthan."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What are 'Fossils' found embedded within sedimentary rock strata?",
    options: [
      "The preserved mineralized remains, impressions, or traces of ancient dead plants, animals, and microorganisms trapped in layered rocks millions of years ago",
      "Magma bubbles",
      "Precious jewels made in labs",
      "Pieces of broken pottery"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Fossils are organic paleontological relics entombed within sedimentary depositional beds over geological epochs."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What is the 'Asthenosphere' in geology?",
    options: [
      "The semi-fluid, ductile upper region of the Earth's mantle directly below the lithosphere where extreme heat permits solid rock to flow slowly, driving plate tectonics",
      "The layer of air around the Earth",
      "The bottom of the ocean",
      "The solid center of the core"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The ductile asthenosphere undergoes slow convection currents, transporting the rigid lithospheric tectonic plates floating above it."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Why is the inner core of the Earth solid despite scorching temperatures exceeding 5,000°C?",
    options: [
      "The colossal, overwhelming overlying gravitational Pressure at the Earth's center compresses the iron-nickel atoms into a solid crystalline state",
      "Because the core is made of ice",
      "Because no heat reaches the center",
      "Because the core rotates too fast"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Extreme lithostatic pressure (~3.6 million atmospheres) raises the melting point of iron-nickel, keeping the inner core solid."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What is the steep, nearly vertical rock face rising directly above sea water formed by continuous wave erosion called?",
    options: ["A Sea Cliff", "A Sea Arch", "A Beach", "A Sand Spit"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A sea cliff is a dramatic vertical coastal rock precipice produced by hydraulic wave action undercutting the shoreface."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Read the statements:\nAssertion (A): The Earth's crust is fragmented into multiple rigid Lithospheric Plates that move continuously by a few millimeters each year.\nReason (R): Slow thermal convection currents in the molten and ductile magma within the mantle drive the perpetual continental drift, seafloor spreading, and plate collisions.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Plate tectonics is driven by mantle thermal convection cells carrying tectonic lithospheric slabs across the asthenosphere."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Spot the IMPOSTER in the following rock types and their metamorphic transformations:\nGroup:\n1. Limestone -> Marble\n2. Clay / Shale -> Slate\n3. Granite -> Gneiss\n4. Liquid Water -> Igneous Basalt",
    options: ["Transformation 1", "Transformation 2", "Transformation 3", "Transformation 4 (Basalt is formed by the cooling of molten LAVA/MAGMA, NOT by freezing liquid water)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Transformation 4 is an absurd impossibility: basalt is an extrusive igneous rock crystallized from silicate lava melts."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Analyze the three types of seismic earthquake waves generated during a tectonic fault slip:\n1. P-Waves (Primary / Longitudinal waves - fastest, travel through solid, liquid, and gas)\n2. S-Waves (Secondary / Transverse waves - travel ONLY through solids)\n3. L-Waves (Surface waves - slowest, cause maximum destructive ground displacement)\nHow did the behavior of S-Waves reveal the nature of the Earth's OUTER CORE?",
    options: [
      "S-Waves completely disappear at the core-mantle boundary (2,900 km depth), proving conclusively that the Earth's OUTER CORE is in a MOLTEN LIQUID state",
      "S-Waves prove that the whole Earth is hollow",
      "S-Waves show that the core is made of diamond",
      "S-Waves reflect back into space"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The S-wave shadow zone beyond 105° proved that the outer core cannot support shear stress, establishing its liquid metallic nature."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Match Column I (Geomorphic Landforms) with Column II (Primary Natural Agents of Erosion / Deposition):\n(a) Meanders and Oxbow Lakes -> (i) Running River Water (Fluvial agent)\n(b) Mushroom Rocks and Dunes   -> (ii) Desert Wind Action (Aeolian agent)\n(c) Moraines and U-Valleys    -> (iii) Moving Glacial Ice (Glacial agent)\n(d) Sea Stacks and Sea Arches -> (iv) Coastal Ocean Waves (Marine agent)",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Meanders = rivers; Mushroom rocks = wind; Moraines = glaciers; Stacks = sea waves."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Read the statements regarding the Earth's geological layers:\nStatement 1: The crust forms only 1% of the volume of the Earth, the mantle forms 84%, and the core forms 15%.\nStatement 2: The radius of the Earth is approximately 6,371 km.\nStatement 3: The Earth's mantle is made of liquid gold and silver.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an absurd falsehood (mantle is solid silicate rock). Statements 1 (volumetric ratios) and 2 (Earth radius = 6,371 km) are accurate."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "How did the massive volcanic lava plateaus (like the DECCAN TRAPS in western and central India) form around 66 million years ago?",
    options: [
      "Enormous fissure eruptions poured millions of cubic kilometers of fluid basaltic magma over the landscape, creating thick horizontal flood-basalt lava sheets",
      "A giant meteor made of basalt crashed into India",
      "Basalt was washed down from the Himalayas by rivers",
      "Humans mined and piled up the basalt rocks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Deccan Traps formed via flood basalt volcanism during India's passage over the Reunion thermal mantle plume in the Late Cretaceous."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What is the crucial role of the Earth's molten metallic liquid OUTER CORE in generating the GEOMAGNETIC FIELD (the Geodynamo)?",
    options: [
      "Thermal convection currents of molten iron and nickel, combined with planetary Coriolis rotation, generate powerful electric currents that produce the Earth's protective magnetic shield against solar radiation",
      "It acts as a giant refrigerator cooling the crust",
      "It generates ocean tides",
      "It creates oxygen for the atmosphere"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The convective geodynamo in the liquid iron outer core generates Earth's magnetosphere, shielding life from lethal solar winds."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Consider four geographical features:\n1. The Grand Canyon (USA)\n2. The Sundarbans Mangrove Delta (India/Bangladesh)\n3. The Victoria Falls (Zambia/Zimbabwe)\n4. Barchan sand dunes of Thar Desert (Rajasthan)\nWhich of these are purely FLUVIAL landforms formed by running river water?",
    options: ["Features 1, 2, and 3 only", "Feature 4 only", "Features 2 and 4 only", "All 1, 2, 3, and 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Canyon (river erosion), Delta (river deposition), Waterfall (river knickpoint) are fluvial. Barchan dunes are aeolian wind landforms."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What is the geological origin of 'Natural Levees' along the banks of mature lowland rivers?",
    options: [
      "During seasonal overbank flooding, coarse sediments are deposited immediately along river margins where water velocity drops first, building elevated natural embankment ridges",
      "Humans constructed them with concrete",
      "Wind blew sand onto the river banks",
      "Earthquakes pushed the banks upwards"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Natural levees are coarse sediment embankments deposited parallel to river channels during flood overflows."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "Why do metamorphic rocks often exhibit distinct parallel mineral bands, foliation, or striped textures (such as in Gneiss or Schist)?",
    options: [
      "Extreme directional tectonic pressure and shear stress force platy and elongated minerals to realign perpendicular to the compressive stress axis",
      "Because different colored paints were applied to them",
      "Because water carved lines into them",
      "Because they were made by lightning"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Metamorphic foliation is the structural alignment of mineral grains perpendicular to principal tectonic stress directions under high P-T conditions."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What distinguishes a 'Mineral' from an ordinary rock?",
    options: [
      "A mineral is a naturally occurring inorganic substance with a definite chemical composition and an ordered internal atomic crystalline structure, whereas a rock is an aggregate of one or more minerals",
      "Minerals are artificial man-made materials",
      "Rocks are always transparent",
      "Minerals do not exist inside rocks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Minerals are homogeneous crystalline chemical compounds (e.g. Quartz, Feldspar, Calcite), whereas rocks are heterogeneous lithified aggregates."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 11: Inside Our Earth, Rocks, Minerals & Dynamic Landforms",
    question: "What master geographical insight is established in Chapter 11 of NCERT Class 7 Geography?",
    options: [
      "The Earth is a dynamic, living planet in perpetual transformation—where internal convective forces constantly build and reshape lithospheric crust, while external erosional agents continuously sculpt majestic landforms that sustain human agriculture, civilizational settlements, and mineral wealth",
      "That the Earth's surface never changes",
      "That rocks have no economic or ecological value",
      "That all continents will sink into the core tomorrow"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 11 establishes dynamic planetary geomorphology: the perpetual equilibrium between endogenic tectonic construction and exogenic denudational sculpting."
  }
];

console.log('Generated Class 7 Social Science Ch11:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/social_ch11.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
