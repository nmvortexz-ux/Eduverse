import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 3: Heat (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "A reliable, scientific numerical measure of the degree of hotness or coldness of an object is called its:",
    options: ["Temperature", "Heat energy", "Density", "Pressure"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Temperature is the objective physical quantity measuring the average kinetic energy of constituent particles."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "The device used specifically to measure the temperature of the human body is called a:",
    options: ["Clinical Thermometer", "Laboratory Thermometer", "Barometer", "Speedometer"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A clinical thermometer measures human body temperature across a narrow physiological range."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "What is the temperature scale range of a standard Clinical Thermometer in Celsius degrees?",
    options: ["35°C to 42°C", "-10°C to 110°C", "0°C to 100°C", "32°F to 212°F only"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Clinical thermometers span 35°C to 42°C because human body temperature rarely drops below 35°C or exceeds 42°C."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "What is the normal healthy average temperature of the human body on the Celsius scale?",
    options: ["37°C (98.6°F)", "35°C", "39°C", "100°C"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Standard basal human homeostatic body temperature averages 37.0°C (98.6°F)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "What is the standard measurement range of a Laboratory Thermometer?",
    options: ["-10°C to 110°C", "35°C to 42°C", "0°C to 50°C", "-50°C to 200°C"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Laboratory thermometers generally span from -10°C up to 110°C to measure physical and chemical reactions."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "The process by which heat is transferred from the hotter end to the colder end of a SOLID object without the actual movement of its particles is called:",
    options: ["Conduction", "Convection", "Radiation", "Insulation"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Conduction is solid-state thermal energy transfer through vibrational atomic collisions."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Materials that allow heat to pass through them easily and rapidly (such as copper, aluminium, iron) are called:",
    options: ["Conductors of Heat", "Insulators", "Semiconductors", "Radiators"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Thermal conductors possess free electrons facilitating rapid kinetic energy transfer."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Materials that do not allow heat to pass through them easily (such as wood, plastic, rubber, air) are called:",
    options: ["Insulators (Poor Conductors)", "Good Conductors", "Metals", "Absorbers"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Thermal insulators have high thermal resistance, impeding heat flux."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "The mode of heat transfer in LIQUIDS and GASES where the fluid particles themselves move physically from hotter to colder regions is called:",
    options: ["Convection", "Conduction", "Radiation", "Refraction"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Convection is bulk macroscopic fluid transport driven by buoyancy and thermal density differentials."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "The mode of heat transfer that does NOT require any material medium and can travel through a vacuum (such as sunlight reaching Earth) is called:",
    options: ["Radiation", "Conduction", "Convection", "Advection"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Thermal radiation propagates as electromagnetic infrared photons across spatial vacuum."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "In coastal areas during the DAYTIME, cool breeze blowing from the sea towards the land is called:",
    options: ["Sea Breeze", "Land Breeze", "Monsoon", "Cyclone"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "During the day, land heats faster than water, creating lower pressure that draws cool oceanic air inland as Sea Breeze."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "In coastal areas during the NIGHT-TIME, cool breeze blowing from the land towards the sea is called:",
    options: ["Land Breeze", "Sea Breeze", "Trade Wind", "Tornado"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "At night, land cools faster than the sea, so air over warmer ocean rises and cool land air flows seaward as Land Breeze."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "What is the structural purpose of the tiny 'Kink' (constriction) in the capillary tube just above the bulb of a traditional mercury clinical thermometer?",
    options: [
      "It prevents the mercury level from falling down on its own when removed from the patient's mouth, allowing accurate reading",
      "It makes the mercury flow faster",
      "It prevents the thermometer from breaking",
      "It colors the mercury silver"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The capillary kink introduces mechanical surface tension resistance, preserving the peak mercury reading."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why should a clinical thermometer NEVER be washed or sterilized in boiling hot water?",
    options: [
      "Boiling water (100°C) far exceeds the 42°C upper limit; extreme mercury thermal expansion will shatter the glass capillary bulb",
      "Because hot water turns mercury into water",
      "Because boiling water erases the painted numbers",
      "Because glass melts at 100°C"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "High hydrothermal thermal expansion overpressurizes the narrow sealed glass bore, risking explosive rupture."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why are digital thermometers rapidly replacing traditional mercury glass thermometers in clinics and homes?",
    options: [
      "Mercury is a toxic, hazardous heavy metal that is extremely difficult to dispose of safely if the glass thermometer breaks",
      "Digital thermometers use laser light",
      "Mercury has stopped being manufactured worldwide",
      "Digital thermometers are made of pure gold"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Elemental mercury is a potent neurotoxin; digital thermistors eliminate breakage contamination hazards."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why do we prefer to wear light-colored or white clothes in hot summer and dark/black clothes in cold winter?",
    options: [
      "Light-colored clothes reflect most radiant heat keeping us cool; dark clothes absorb more radiant heat keeping us warm",
      "White clothes are lighter in physical weight",
      "Dark clothes produce their own electricity",
      "Light colors keep mosquitoes away"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "High albedo white surfaces reflect incident thermal radiation, while black surfaces have high infrared emissivity and absorptivity."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why does wearing TWO thin woolen sweaters keep us significantly WARMER in winter than wearing one single thick woolen sweater of equal thickness?",
    options: [
      "A layer of still air is trapped between the two thin sweaters; air is an excellent thermal insulator that prevents body heat from escaping",
      "Two sweaters create friction that generates fire",
      "Two sweaters weigh twice as much",
      "One thick sweater attracts cold radiation"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Trapped air gaps provide high boundary-layer thermal insulation due to air's low thermal conductivity (k ≈ 0.026 W/m·K)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why are cooking utensils (like frying pans) made of metals like aluminium or stainless steel, but their handles are made of bakelite plastic or wood?",
    options: [
      "Metal pans conduct heat quickly to cook food, while plastic/wooden handles are poor conductors (insulators) allowing safe handling without burning hands",
      "Because plastic is too heavy to make pans",
      "Because wood melts on fire",
      "Because metal looks shiny"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Engineered thermal partitioning: metallic cooking vessel conducts heat to food while thermoset bakelite handles insulate user grasp."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "When heating water in a round-bottom flask, why does water at the bottom rise to the top while cold water from the sides moves downwards?",
    options: [
      "Heated water expands, becomes less dense (lighter), and rises; cooler, denser water from sides sinks to replace it, setting up Convection Currents",
      "Heated water becomes heavier",
      "Bubbles push the water down",
      "Water molecules repel heat"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Thermal volumetric expansion reduces fluid density, initiating buoyancy-driven Rayleigh-Bénard convection loops."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why is a laboratory thermometer kept strictly vertical and read while ITS BULB IS STILL IMMERSED in the substance being measured?",
    options: [
      "Because it has NO kink; the moment it is removed from the substance, its mercury level immediately starts dropping or rising due to ambient air",
      "Because tilting breaks the glass",
      "Because mercury evaporates outside",
      "Because laboratory thermometers only work under water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Lacking a retentive kink, laboratory thermometers respond instantly to ambient thermal shifts upon removal."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why do houses in hot tropical climates have their outer walls painted WHITE or light pastel colors?",
    options: [
      "White walls reflect the majority of incoming solar radiant heat, keeping the interiors significantly cooler",
      "White paint is waterproof only",
      "To make houses look bigger",
      "White paint repels wind"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Passive architectural cooling: high solar reflectance index (SRI) coatings minimize thermal envelope heat gain."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why do rooms have electric room heaters placed on the floor and air-conditioners installed near the ceiling?",
    options: [
      "Heated air expands, rises up to warm the whole room via convection; cold air from AC is dense and sinks down to cool the living space",
      "To keep AC out of reach of children",
      "Because heaters look better on floors",
      "Because ceilings are always hotter than floors"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Optimized convective atmospheric circulation: dense chilled air descends while buoyant warm air ascends."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why does a metal chair feel much COLDER to touch than a wooden table in the same room during cold winter mornings?",
    options: [
      "Metal is a good conductor that rapidly draws heat away from your hand; wood is an insulator that conducts heat very slowly",
      "The metal chair is actually at a lower temperature than the wooden table",
      "Wood produces its own internal heat",
      "Metal absorbs cold from the floor"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Both objects are at thermal equilibrium; metal feels colder due to its high thermal effusivity rapidly conducting hand heat away."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "How does a double-walled thermos flask keep hot tea hot and cold water cold for hours?",
    options: [
      "A vacuum between double glass walls eliminates conduction and convection, while silvery mirrored surfaces reflect radiant heat back",
      "It contains an internal battery heater",
      "It is made of thick lead",
      "It freezes air around it"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dewar flask design eliminates conduction/convection via evacuating interstitial air and halts radiation via reflective silvering."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "What happens when you hold one hand above a burning candle flame and one hand on the side of the flame?",
    options: [
      "The hand above the flame feels much hotter because air above is heated by CONVECTION currents rising upward; the side hand feels only mild radiation",
      "Both hands feel exactly the same heat",
      "The side hand feels hotter",
      "Neither hand feels any heat"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Thermal buoyancy channels convective heat plumes vertically above the flame; lateral heat transfer occurs solely by radiation."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "What is the relationship between Celsius (°C) and Fahrenheit (°F) temperature scales?",
    options: ["F = (9/5 × C) + 32", "F = (5/9 × C) - 32", "F = C + 100", "F = 2C + 32"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Linear thermometric conversion equation: °F = (°C × 9/5) + 32."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why does wool fiber provide superior thermal warmth in winter garments?",
    options: [
      "Wool fibers have natural crimp/curls that trap substantial air pockets, and air is a poor conductor that traps body heat",
      "Wool produces chemical heat",
      "Wool absorbs sunlight into blood",
      "Wool is a heavy metal"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Crimp morphology in wool keratin fibers creates macroscopic porous dead-air insulation lattices."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "What is 'Thermal Equilibrium' between two contacting bodies?",
    options: [
      "The state where both bodies reach the exact same temperature, resulting in zero net transfer of heat energy between them",
      "When both bodies melt",
      "When one body freezes the other",
      "When heat doubles in both bodies"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Zeroth Law of Thermodynamics: thermal equilibrium is attained when thermodynamic temperature gradient equals zero (dT/dx = 0)."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Read the statements:\nAssertion (A): Sea Breeze blows during daytime while Land Breeze blows during nighttime in coastal regions.\nReason (R): Specific heat capacity of water is much higher than that of dry land; land heats up faster and cools down faster than sea water.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "High specific heat capacity of water (4,184 J/kg·K vs ~800 J/kg·K for soil) drives diurnal isobaric coastal pressure differentials."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Spot the IMPOSTER in the following group of heat transfer mechanisms and examples:\nGroup:\n1. Conduction - Heating a metal spoon in hot tea\n2. Convection - Rising of hot air balloon\n3. Radiation - Solar heat warming Earth across space\n4. Conduction - Boiling water circulating in a glass beaker",
    options: ["Example 1", "Example 2", "Example 3", "Example 4 (Circulating boiling water transfers heat by CONVECTION, not conduction)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bulk fluid circulation in heated water is a classic manifestation of Convection, not solid-state Conduction."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "A copper rod has wax drops fixed at intervals of 5 cm along its length with thumbtacks attached. The other end is heated over a burner flame. What is observed?",
    options: [
      "The wax drop closest to the burner flame melts first and its tack falls off, followed sequentially by successive drops, demonstrating linear thermal conduction along solids",
      "All wax drops melt simultaneously at the exact same second",
      "The farthest wax drop melts first",
      "None of the wax drops melt"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Fourier's Law of Heat Conduction: thermal flux diffuses progressively along the longitudinal temperature gradient."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Match Column I (Thermal Concepts) with Column II (Scientific Principles):\n(a) Clinical Thermometer -> (i) Has capillary kink & spans 35°C to 42°C\n(b) Laboratory Thermometer-> (ii) Measures -10°C to 110°C without kink\n(c) Sea Breeze            -> (iii) Daytime oceanic convective airflow to land\n(d) Radiation             -> (iv) Infrared electromagnetic heat transfer without medium",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Clinical = kink/35-42°C; Lab = -10-110°C; Sea breeze = daytime onshore; Radiation = electromagnetic vacuum transfer."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Read the statements regarding thermometry:\nStatement 1: Temperature is a fundamental SI base physical quantity measured in Kelvin (K).\nStatement 2: At absolute zero (-273.15°C or 0 K), all classical molecular kinetic motion ceases.\nStatement 3: Heat always spontaneously flows from a body at lower temperature to a body at higher temperature without external work.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 violates the Second Law of Thermodynamics (heat flows spontaneously from hot to cold). Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why are stainless steel cooking pans frequently manufactured with a bonded COPPER BOTTOM plate?",
    options: [
      "Copper has much higher thermal conductivity than stainless steel, distributing heat uniformly across the base and eliminating localized food burning",
      "Copper makes the pan heavier so it does not shake",
      "Copper changes the color of food",
      "Copper stops water from boiling"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Thermal conductivity of copper (k ≈ 385 W/m·K) exceeds stainless steel (k ≈ 15 W/m·K) by ~25×, eliminating localized hot spots."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "If 1 litre of water at 30°C is mixed thoroughly with 1 litre of water at 50°C in an insulated vessel, what will be the final equilibrium temperature?",
    options: [
      "Between 30°C and 50°C (specifically 40°C)",
      "80°C (30 + 50)",
      "20°C (50 - 30)",
      "More than 50°C"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Principle of Calorimetry for equal masses of identical fluid: T_final = (30 + 50) / 2 = 40°C."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "An iron ball at 40°C is dropped into a mug containing water at 40°C. How will heat flow?",
    options: [
      "Heat will NOT flow from iron ball to water or from water to iron ball (Zero net heat flow due to thermal equilibrium)",
      "Heat will flow from iron ball to water",
      "Heat will flow from water to iron ball",
      "The temperature of both will increase to 80°C"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Thermal energy transfer requires a finite temperature gradient (ΔT ≠ 0); since ΔT = 0, net heat flux is zero."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why do birds fluff up their feathers during freezing winter mornings?",
    options: [
      "Fluffing feathers traps a thicker layer of stationary insulating air between plumage barbules, reducing convective and conductive body heat loss",
      "To make themselves look bigger to predators",
      "To absorb more rain",
      "Because feathers become heavier in cold"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Piloerection expands boundary-layer air entrapment, increasing effective thermal resistance against ambient cold."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Consider four identical metal blocks (Copper, Aluminium, Iron, Lead) of equal mass heated to 100°C and placed on a slab of ice. Which block melts the most ice?",
    options: [
      "The block with the HIGHEST Specific Heat Capacity (Aluminium melts the most ice because it stores more thermal energy per unit mass)",
      "Lead block",
      "Iron block",
      "All four melt the exact same amount of ice"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Heat released Q = m·c·ΔT. Aluminium possesses the highest specific heat capacity (c ≈ 900 J/kg·K), yielding greatest enthalpy to melt ice."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "Why does the greenhouse effect trap heat inside a glass greenhouse or parked closed car in the sun?",
    options: [
      "Glass is transparent to short-wavelength solar radiant light but opaque to long-wavelength infrared thermal radiation emitted by interior surfaces, trapping heat energy inside",
      "Glass produces heat from carbon dioxide",
      "Because glass turns sunlight into hot water",
      "Because car metal generates electricity"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Spectral selectivity: shortwave solar photons penetrate glass, heating interior surfaces which re-radiate longwave IR blocked by glass."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 3: Heat",
    question: "What fundamental thermodynamic principle summarizes Chapter 3 of NCERT Class 7 Science?",
    options: [
      "Heat is thermal energy in transit driven by temperature differentials, propagating via Conduction in solids, Convection in fluids, and Radiation through vacuum, governing terrestrial weather, thermal insulation, and life adaptation",
      "Heat and temperature are identical concepts",
      "Heat only travels in metal wires",
      "Vacuum can conduct heat by convection"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 3 provides an integrated thermodynamic foundation: modes of heat transfer, thermometry, meteorological breeze circulation, and thermal engineering."
  }
];

console.log('Generated Class 7 Science Ch3:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/science_ch3.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
