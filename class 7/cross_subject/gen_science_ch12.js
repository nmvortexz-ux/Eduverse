import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 12: Forests: Our Lifeline & Wastewater Story (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is the continuous roof-like overhead layer formed by the leafy branches and foliage of tall trees in a dense forest called?",
    options: ["The Canopy", "The Crown", "The Understorey", "The Forest Floor"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The canopy is the uppermost continuous ceiling formed by the interlocking leafy crowns of mature tall trees in a forest."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is the branchy upper part of an individual tree above the stem or trunk called?",
    options: ["The Crown of the tree", "The Canopy", "The Understorey", "The Root system"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The crown is the top portion of a tree comprising branches, twigs, and foliage radiating outward above the trunk."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What are the horizontal vegetation layers of smaller trees, shrubs, tall herbs, and grasses growing beneath the high canopy called?",
    options: ["The Understorey", "The Canopy", "The Crown", "The Soil layer"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The understorey consists of intermediate vegetation strata (small trees, shrubs, bushes, herbs) thriving in the shade below the canopy."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Why are forests celebrated and referred to as the 'GREEN LUNGS' of our planet?",
    options: [
      "Through photosynthesis, forest trees release vast amounts of OXYGEN into the atmosphere and absorb CARBON DIOXIDE, maintaining atmospheric gas balance",
      "Because trees are green in color",
      "Because leaves look like human lungs",
      "Because animals sleep in forests"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Forests regulate planetary gas exchange: green plants fix carbon dioxide and release life-sustaining oxygen during photosynthesis."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What are the specialized micro-organisms (bacteria and fungi) that break down dead plant and animal matter into dark, nutrient-rich HUMUS called?",
    options: ["Decomposers (Saprophytes)", "Producers", "Herbivores", "Carnivores"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Decomposers recycle organic biomass by converting decaying detritus into dark fertile humus that replenishes soil nutrients."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "How do forest tree root systems and the forest floor prevent destructive FLASH FLOODS and SOIL EROSION?",
    options: [
      "The thick forest floor and root networks act as a giant natural sponge, slowing down rainwater runoff, allowing water to seep into the ground to recharge groundwater",
      "Trees block rain from falling from clouds",
      "Trees push water into the ocean directly",
      "Trees turn rainwater into solid ice"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Forest leaf litter and dense root networks decelerate raindrops, arrest surface runoff, facilitate groundwater percolation, and bind topsoil."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is 'SEWAGE' in environmental science?",
    options: [
      "Liquid wastewater produced by households, industries, hospitals, and commercial establishments carrying dissolved and suspended contaminants",
      "Clean drinking water from mountain streams",
      "Rainwater stored in reservoirs",
      "Solid garbage collected in trucks"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Sewage is municipal liquid waste carrying fecal matter, detergents, pathogens, organic refuse, and hazardous chemical contaminants."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What does the technological abbreviation 'WWTP' stand for in municipal water management?",
    options: ["Wastewater Treatment Plant", "Water Wind Turbine Project", "Waste Weather Temperature Program", "Worldwide Tanker Petroleum"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A Wastewater Treatment Plant (WWTP) is a facility that removes physical, biological, and chemical pollutants from sewage water."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "In the first primary stage of a WWTP, what mechanical filters are used to screen out large physical debris such as rags, plastic bottles, sticks, and cans?",
    options: ["Bar Screens", "Sand filters", "Aeration tanks", "Chlorine chambers"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Bar screens are vertical metal grids that intercept and remove coarse floating solids (plastics, rags, wood) from raw sewage."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is the semi-solid organic matter that settles at the bottom of the large central sedimentation tank (clarifier) in a WWTP called?",
    options: ["Sludge (Primary / Activated Sludge)", "Grit", "Scum", "Foam"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Sludge is the settled organic particulate matter scraped from clarifier bottoms, subsequently digested in anaerobic bio-reactors."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What common disinfectant chemical (or gas) is added to treated wastewater before releasing it into rivers to kill harmful disease-causing microbes?",
    options: ["Chlorine (or Ozone / Ultraviolet Light)", "Salt", "Sugar", "Sulfuric acid"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Chlorination (or UV irradiation/ozonation) oxidizes and eradicates pathogenic bacteria, viruses, and parasites before environmental discharge."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Which fast-growing tree species is recommended to be planted alongside wastewater sewage ponds because it absorbs surplus wastewater rapidly and releases pure water vapor into the air?",
    options: ["Eucalyptus Trees", "Cactus", "Banyan Tree", "Pine Tree"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Eucalyptus trees have high transpiration rates, absorbing large volumes of wastewater and purifying groundwater bio-ecologically."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Why is a forest referred to as a 'DYNAMIC LIVING ENTITY — FULL OF LIFE AND VITALITY'?",
    options: [
      "It sustains an interconnected web of diverse flora, fauna, insects, and decomposers where nutrients are endlessly recycled, energy flows continuously, and life regenerates autonomously",
      "Because trees walk around at night",
      "Because it is powered by electric generators",
      "Because humans plant every tree every year"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Forest ecosystems exhibit complex trophic self-regulation: producers, consumers, and decomposers recycle matter in an enduring dynamic equilibrium."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What occurs during the 'AERATION' stage in a modern Wastewater Treatment Plant?",
    options: [
      "Compressed air is vigorously pumped into clarified wastewater to stimulate the rapid growth of AEROBIC BACTERIA that consume human waste, food residue, and soaps",
      "Water is frozen into solid ice blocks",
      "Water is boiled in giant furnaces",
      "Chemicals are added to dye the water blue"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Aeration tanks supply dissolved oxygen to heterotrophic aerobic microorganisms, accelerating the biological decomposition of organic pollutants."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "How is the organic 'Sludge' collected from clarifier tanks beneficially utilized in sustainable waste management?",
    options: [
      "It is transferred to closed digester tanks where ANAEROBIC BACTERIA decompose it, producing BIOGAS (used as fuel/electricity) and nutrient-rich manure for farming",
      "It is thrown into the ocean",
      "It is turned into plastic toys",
      "It is burned as coal in train engines"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Anaerobic sludge digestion yields methane-rich biogas for renewable energy and sterile bio-solids for agricultural soil fertilization."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Why should used cooking oils and animal fats NEVER be poured down domestic kitchen sink drains?",
    options: [
      "Fats harden and solidify inside drain pipes, clogging plumbing, and in open drains they block soil pores, impairing natural water filtration",
      "Fats attract fish into the pipes",
      "Fats make water smell like roses",
      "Fats dissolve metal pipes instantly"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cooking fats congeal into stubborn 'fatbergs', obstructing sewer lines and coating soil particles, which impedes wastewater filtration."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Why should discarded chemical paints, solvents, motor oil, and expired medicines not be thrown into toilets or drains?",
    options: [
      "These toxic chemicals kill the beneficial microbes in wastewater treatment plants that naturally break down sewage waste",
      "They cause water to turn into solid rock",
      "They make water too clear to see",
      "They freeze the sewer pipes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Toxic chemicals and pharmaceuticals poison the beneficial biocatalytic bacterial populations essential for biological sewage purification."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is a 'Septic Tank' on-site sewage disposal system?",
    options: [
      "A watertight underground settling chamber where sewage decomposes anaerobically; suitable for isolated homes, rural hospitals, or clusters of houses without municipal sewer networks",
      "A large tank that stores clean rainwater",
      "A truck that transports bottled water",
      "A chemical factory making fertilizers"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Septic tanks provide decentralized on-site anaerobic sewage digestion and effluent soil absorption for unsewered locations."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is the 'Vermi-Processing Toilet' developed and tested successfully in India?",
    options: [
      "A low-cost, hygienic, water-saving toilet system where earthworms (like red worms) completely process human excreta into high-nutrient vermicompost cakes",
      "A toilet with electric heaters",
      "A toilet connected to car engines",
      "A toilet that uses chemical gases"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Vermi-toilets utilize earthworms to bioconvert human fecal sludge into odorless, pathogen-free, high-grade organic vermicompost."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "How do forests influence the local atmospheric CLIMATE and the WATER CYCLE?",
    options: [
      "Forests transpire enormous volumes of water vapor into the air through their leaves, cooling the ambient climate, increasing atmospheric humidity, and inducing rainfall",
      "Forests heat the air like stoves",
      "Forests absorb all clouds",
      "Forests stop winds from blowing"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Evapotranspiration from forest canopies generates regional atmospheric moisture flux, lowering surface temperatures and promoting convective precipitation."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Consider a typical forest food chain: Grass → Insects → Frog → Snake → Eagle. What happens if all the FROGS are removed from this ecosystem?",
    options: [
      "The population of insects will explode and damage vegetation, while snakes will face food scarcity and starve, destabilizing the food web",
      "Eagles will start eating grass",
      "Nothing will change in the forest",
      "Grass will stop growing"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Trophic cascade: removing intermediate secondary consumers (frogs) triggers pest outbreaks at lower levels and predator starvation at higher levels."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is 'Scum' in a WWTP sedimentation clarifier tank?",
    options: [
      "Light, floatable impurities such as oils, grease, and fats that float on the water surface and are removed by a specialized mechanical skimmer",
      "Heavy rocks at the bottom",
      "Air bubbles in the pipes",
      "Clean water flowing out"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Low-density floatable contaminants (fats, oils, grease) float to the surface as scum and are skimmed off mechanically."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is 'Grit and Sand Removal' in a WWTP?",
    options: [
      "Wastewater passes through a tank at a reduced velocity so that heavy coarse sand, grit, and small pebbles settle down by gravity",
      "Water is filtered through silk cloth",
      "Water is spun in a centrifuge",
      "Sand is added to make water cleaner"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Velocity retardation in grit chambers causes dense mineral particles (sand, gravel) to precipitate out without settling organic matter."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Why does deforestation lead to severe SOIL EROSION and LAND DEGRADATION?",
    options: [
      "Tree roots physically bind the soil together; in the absence of trees, heavy rain and wind wash away the fertile topsoil, turning fertile land into barren desert (desertification)",
      "Because trees eat the soil",
      "Because dead roots turn into water",
      "Because wind cannot blow in forests"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Arbor root networks anchor soil horizons; deforested slopes suffer catastrophic topsoil sheet wash, rill erosion, and desertification."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What deadly water-borne diseases are transmitted by untreated municipal sewage contaminating drinking water sources?",
    options: ["Cholera, Typhoid, Dysentery, Hepatitis, and Polio", "Malaria and Dengue only", "Asthma and Bronchitis", "Diabetes and Hypertension"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Untreated fecal wastewater contains microbial pathogens (Vibrio cholerae, Salmonella typhi, Entamoeba) that cause lethal diarrheal epidemics."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is 'Activated Sludge' produced in the aeration tank of a WWTP?",
    options: [
      "A concentrated biological mass consisting of millions of active aerobic bacteria, protozoa, and suspended organic matter (~97% water)",
      "A radioactive sludge",
      "Sludge mixed with gasoline",
      "Solid plastic powder"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Activated sludge is a living microbial floc of active aerobic decomposers that digest organic pollutants in aeration basins."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is the primary role of forest tree canopy in regulating the impact of HEAVY MONSOON RAINS on soil?",
    options: [
      "The multi-tiered canopy intercept the falling raindrops, breaking their kinetic velocity so that water drips gently down branches and trunks, preventing soil compaction",
      "It completely evaporates all rain before it reaches the ground",
      "It turns rain into hail",
      "It reflects rain back into clouds"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Canopy interception dissipates the destructive kinetic energy of torrential rain, converting erosive downpours into gentle stemflow and leaf drip."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is a 'Manhole' in urban municipal sewerage systems?",
    options: [
      "An access opening located every 50 to 60 metres along sewer lines, at junctions and bends, allowing sanitary workers to inspect, clean, and unblock underground pipes",
      "A place to store drinking water",
      "A doorway into a subway train",
      "A trash bin on the street"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Manholes provide vital physical maintenance entry points along subterranean sewer networks at standardized intervals and directional junctions."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Read the statements:\nAssertion (A): Forests act as natural self-sustaining water purification and flood control systems.\nReason (R): The dense root systems bind soil particles, while the porous organic humus on the forest floor facilitates deep vertical rainwater infiltration, preventing runoff surges and continuously recharging subterranean aquifers.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Forest hydrology: the spongy leaf litter and root bio-matrix maximize infiltration capacity, preventing surface floods and sustaining baseflows."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Spot the IMPOSTER in the following sequence of Wastewater Treatment Plant (WWTP) unit operations:\nGroup:\n1. Bar Screening - Intercepts large floating rags and plastic items\n2. Grit Chamber - Settles coarse mineral sand and pebbles by gravity\n3. Aeration Basin - Aerobic bacteria digest soluble organic wastes\n4. Sugar Crystallizer - Adds chocolate syrup to sweeten drinking water",
    options: ["Unit 1", "Unit 2", "Unit 3", "Unit 4 (WWTP processes involve physical clarification, biological digestion, and chemical disinfection; they NEVER add confectionery sugars or chocolate syrup)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Unit 4 is an absurd distortion: municipal wastewater engineering uses disinfection (chlorine/UV/ozone), not confectionery sweeteners."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Analyze the biological mechanism of 'Biochemical Oxygen Demand' (BOD) in wastewater analysis:\nWhy is a high BOD in sewage effluent dangerous for aquatic life?",
    options: [
      "High BOD indicates a massive load of organic pollutants; as aerobic bacteria consume dissolved oxygen to decompose this waste, oxygen levels in the river plummet to near zero, causing catastrophic fish suffocations",
      "High BOD turns water into acid that melts fish scales",
      "High BOD freezes the river solid",
      "High BOD increases river water salinity to ocean levels"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "BOD quantifies the oxygen consumed by microbes decomposing organic waste. High BOD causes severe aquatic anoxia, killing fish and invertebrates."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Match Column I (WWTP Treatment Stages) with Column II (Primary Environmental Functions):\n(a) Bar Screens         -> (i) Mechanical removal of coarse solid plastic/rag debris\n(b) Aeration Basin      -> (ii) Aerobic microbiological oxidation of dissolved organic wastes\n(c) Anaerobic Digester  -> (iii) Methanogenic fermentation of sludge producing combustible biogas\n(d) UV / Chlorination   -> (iv) Pathogen disinfection and destruction of waterborne bacteria",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bar screens = coarse screening; Aeration = aerobic oxidation; Digester = biogas generation; Chlorination = pathogen disinfection."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Read the statements regarding forest ecology:\nStatement 1: In a climax virgin forest, no waste is generated because every decaying organic matter is decomposed and recycled into nutrients.\nStatement 2: Diverse canopy strata provide distinct ecological niches, supporting high biodiversity of birds, mammals, and insects.\nStatement 3: Forests produce toxic carbon monoxide that destroys the ozone layer.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an absurd falsehood (forests produce oxygen). Statements 1 (zero-waste biogeochemical cycling) and 2 (canopy microhabitats) are true."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is the biological role of 'Fungi and Micro-arthropods' in the humification process on the forest floor?",
    options: [
      "They secrete extracellular enzymes that digest recalcitrant plant polymers (lignin, cellulose), transforming leaf litter into stable, dark, mineral-rich colloidal humus",
      "They eat living tree trunks and kill the forest",
      "They convert soil into solid glass",
      "They absorb all sunlight on the ground"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Saprophytic fungi (white-rot, brown-rot) and soil micro-arthropods enzymatically cleave complex lignin/cellulose polymers into nutrient-rich humus."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "How do constructed wetland bio-filtration systems (like Phytoremediation reed beds) purify sewage water without electricity?",
    options: [
      "Aquatic plants (like reeds and cattails) absorb heavy metals and excess nitrogen/phosphorus, while microbial biofilms around their root zones biologically degrade organic pollutants",
      "By boiling water using solar mirrors",
      "By adding chemical dyes that hide dirt",
      "By freezing sewage into ice bricks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Phytoremediation leverages rhizosphere microbiology and macrophyte bio-accumulation to remediate wastewater naturally and passively."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Consider four environmental management practices:\n1. Reclaiming methane biogas from anaerobic sewage digesters for clean electricity\n2. Planting multi-species agroforestry green belts around industrial zones\n3. Discharging untreated raw factory effluents into freshwater rivers\n4. Using vermicompost from human waste toilets as organic soil conditioner\nWhich of these practices represent SUSTAINABLE CIRCULAR BIO-ECONOMY?",
    options: ["Practices 1, 2, and 4 only", "Practice 3 only", "Practices 1 and 3 only", "All 1, 2, 3, and 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Practice 3 is environmentally destructive pollution. Practices 1, 2, and 4 embody closed-loop circular resource recovery."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "Why does the presence of high levels of Coliform Bacteria (such as E. coli) in a river or well indicate severe water pollution?",
    options: [
      "Coliform bacteria are natural inhabitants of the human and warm-blooded animal intestinal tract; their presence proves direct contamination by raw sewage and high risk of lethal enteric pathogens",
      "Because coliform bacteria eat fish",
      "Because they produce poisonous radioactive gases",
      "Because they make water turn red"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Coliforms serve as universal microbiological fecal indicator organisms, demonstrating sewage contamination and the presence of enteric waterborne pathogens."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What is the physical cause of 'Eutrophication' in freshwater lakes receiving untreated domestic sewage and detergent runoff?",
    options: [
      "Excessive nitrogen and phosphate nutrients trigger explosive algal blooms; when the algae die, decomposing bacteria consume all dissolved oxygen, suffocating aquatic animals",
      "The lake gets too cold to support fish",
      "Detergents turn water into solid jelly",
      "Algae turn into large carnivorous plants"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Nutrient hyper-enrichment (phosphates/nitrates) drives algal blooms whose subsequent decomposition induces severe lake hypolimnetic anoxia."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "How do deep-rooted forest trees prevent Hillside LANDSLIDES during torrential cloudbursts?",
    options: [
      "The extensive taproot and lateral root networks act as bio-mechanical anchors, interlocking soil strata and bedrock, while continuous transpiration drains excess soil pore-water pressure",
      "Trees build stone walls with their branches",
      "Trees absorb earthquakes",
      "Trees freeze the mud"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Arbor roots provide tensile soil reinforcement, increasing mechanical shear strength and relieving pore-water pressure that triggers slope failure."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 12: Forests: Our Lifeline & Wastewater Story",
    question: "What supreme ecological synthesis concludes the NCERT Class 7 Science curriculum in Chapter 12?",
    options: [
      "Human health, ecological balance, clean water, and planetary survival depend inextricably on conserving living forest biomes as our vital life-support systems and adopting responsible, closed-loop circular sanitation to keep our water bodies pure and vibrant",
      "That nature can be destroyed without consequences",
      "That wastewater treatment is unnecessary",
      "That technology will replace all natural forests"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 12 synthesizes forest conservation, hydrological cycles, ecological stewardship, and circular environmental engineering."
  }
];

console.log('Generated Class 7 Science Ch12:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/science_ch12.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
