import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 6: Respiration in Organisms (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "The biochemical process of breakdown of food (glucose) in the cells with the release of biological energy (ATP) is called:",
    options: ["Cellular Respiration", "Digestion", "Photosynthesis", "Transpiration"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Cellular respiration is the biochemical catabolism of glucose inside cells to liberate metabolic energy in the form of ATP."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "When the breakdown of glucose occurs in the PRESENCE of Oxygen gas, yielding carbon dioxide, water, and large energy, it is called:",
    options: ["Aerobic Respiration", "Anaerobic Respiration", "Fermentation", "Breathing"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Aerobic respiration breaks down glucose completely in the presence of O₂: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "When the breakdown of glucose occurs in the ABSENCE of Oxygen (such as in single-celled Yeast), it is called:",
    options: ["Anaerobic Respiration (Fermentation)", "Aerobic Respiration", "Combustion", "Inhalation"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Anaerobic respiration occurs without oxygen: Glucose → Alcohol (Ethanol) + Carbon dioxide + Energy."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What single-celled anaerobic fungus is widely used in breweries to make Wine and in bakeries to make fluffy Bread?",
    options: ["Yeast (Saccharomyces cerevisiae)", "Amoeba", "Paramecium", "Bread mold (Rhizopus)"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Yeast respires anaerobically, producing ethanol (for alcoholic beverages) and CO₂ gas (which causes bread dough to rise)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "During heavy, rigorous exercise or fast running, the accumulation of which chemical substance in muscle cells causes painful MUSCLE CRAMPS?",
    options: ["Lactic Acid", "Hydrochloric Acid", "Acetic Acid", "Citric Acid"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Under temporary oxygen deficit during strenuous exercise, muscle cells respire anaerobically, producing lactic acid: Glucose → Lactic acid + Energy."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "How does taking a hot water bath or receiving a vigorous body massage provide immediate relief from muscle cramps?",
    options: [
      "It improves blood circulation, increasing the oxygen supply to muscle cells which oxidizes accumulated lactic acid completely into CO₂ and water",
      "It cools the skin",
      "It removes water from muscles",
      "It stops blood flow"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Enhanced circulatory perfusion restores oxygen levels, metabolizing lactic acid into CO₂ and H₂O."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What is the normal resting Breathing Rate (breaths per minute) of an average adult human being at rest?",
    options: ["15 to 18 breaths per minute", "40 to 50 breaths per minute", "5 to 8 breaths per minute", "60 to 70 breaths per minute"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A healthy resting human adult breathes approximately 15 to 18 times per minute."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What large, muscular dome-shaped sheet forms the floor of the human chest (thoracic) cavity and moves during breathing?",
    options: ["The Diaphragm", "The Trachea", "The Bronchus", "The Rib cage"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The diaphragm is the primary muscular partition separating the thoracic cavity from the abdominal cavity."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Through which specialized respiratory organs do Fish breathe dissolved oxygen in water?",
    options: ["Gills (vascularized filamentous branchiae)", "Lungs", "Skin only", "Tracheae"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Fish utilize richly vascularized gill filaments with thin membranes to extract dissolved oxygen from water."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Through which organ does an Earthworm exchange respiratory gases (O₂ and CO₂)?",
    options: ["Its thin, moist, and slimy skin (Cutaneous respiration)", "Lungs", "Gills", "Spiracles"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Earthworms absorb oxygen and expel CO₂ directly by diffusion through their moist, mucus-coated skin."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Through which small lateral openings and network of air tubes do Cockroaches and insects breathe?",
    options: ["Spiracles and Tracheal Tubes (Tracheae)", "Gills", "Lungs", "Moist skin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Insects have lateral body pores called spiracles connecting to a branching network of air tubes (tracheae)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What tiny microscopic pores on the surface of plant leaves facilitate the exchange of Oxygen and Carbon Dioxide during respiration and photosynthesis?",
    options: ["Stomata (guarded by Guard Cells)", "Xylem vessels", "Phloem tubes", "Root caps"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Stomata surrounded by specialized guard cells regulate gaseous exchange and transpiration in plant leaves."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What mechanical movements occur in the rib cage and diaphragm during human INHALATION (breathing in)?",
    options: [
      "The Ribs move UP and OUTWARDS, the Diaphragm contracts and moves DOWNWARDS, increasing the thoracic volume, lowering pressure, and drawing air in",
      "The Ribs move down and in, and diaphragm moves up",
      "The lungs stop moving",
      "The stomach contracts only"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Inhalation: external intercostal muscles elevate ribs (up/out), diaphragm flattens down, expanding lung volume and dropping intrapulmonary pressure."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What mechanical movements occur during human EXHALATION (breathing out)?",
    options: [
      "The Ribs move DOWN and INWARDS, the Diaphragm relaxes and arches UPWARDS into its dome shape, reducing thoracic volume and expelling air",
      "The Ribs move up and outwards",
      "The Diaphragm moves down",
      "The chest expands"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Exhalation: intercostal muscles relax, ribs depress down/in, diaphragm arches up to resting dome position, compressing thoracic space."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "How does the percentage composition of Inhaled Air compare with Exhaled Air in human beings?",
    options: [
      "Inhaled Air: 21% O₂ and 0.04% CO₂ ; Exhaled Air: 16.4% O₂ and 4.4% CO₂",
      "Inhaled Air: 100% O₂ ; Exhaled Air: 100% CO₂",
      "Inhaled Air: 0% O₂ ; Exhaled Air: 21% CO₂",
      "Inhaled Air and Exhaled Air are identical"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Human respiration extracts ~4.6% oxygen from inhaled air and enriches exhaled air with ~4.4% CO₂ alongside saturated water vapor."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "How do adult Frogs breathe in their dual (amphibious) habitats?",
    options: [
      "On land they breathe through a pair of Lungs (pulmonary respiration) ; in water they breathe through their moist, slimy Skin (cutaneous respiration)",
      "They only breathe through gills",
      "They only breathe through lungs",
      "They do not breathe in water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Amphibian respiration: terrestrial lung ventilation supplemented by aquatic cutaneous microvascular diffusion."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Why do plant roots die and rot if a potted plant is over-watered continuously for many days (waterlogging)?",
    options: [
      "Water fills all the microscopic air spaces between soil particles, cutting off oxygen supply to root cells, preventing cellular respiration",
      "Because roots drink too much water and explode",
      "Because water turns into acid",
      "Because sunlight cannot reach the leaves"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Waterlogging creates soil anoxia; root cells cannot perform aerobic respiration to generate ATP for active mineral transport, causing asphyxiation."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Why does breathing become much faster and deeper during vigorous physical exercise (like running or swimming)?",
    options: [
      "Working muscle cells demand more energy (ATP) rapidly, requiring increased Oxygen intake to accelerate aerobic respiration and quickly eliminate excess CO₂",
      "Because the lungs shrink in cold air",
      "Because the heart stops beating",
      "To cool the shoes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Elevated metabolic rate increases oxygen consumption and arterial CO₂ tension (hypercapnia), triggering central chemoreceptors to elevate ventilation rate."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Why do we sneeze when we inhale foreign irritants (like dust particles, smoke, or pollen)?",
    options: [
      "The irritants trigger sensory nerves in the nasal lining, initiating a powerful reflex violent expulsion of air to clear foreign contaminants from the nasal tract",
      "To exercise chest muscles",
      "To cool the brain",
      "Because the stomach is full"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The sternutatory (sneeze) reflex forcefully expels air (~150 km/h) to cleanse the upper respiratory epithelium of particulate irritants."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Why does a mirror fog up when you exhale your breath closely onto its clean glass surface?",
    options: [
      "Warm exhaled breath is saturated with Water Vapor produced during cellular respiration, which immediately condenses into tiny liquid droplets on the cooler glass surface",
      "Dust settles on the mirror",
      "The mirror glass melts",
      "The mirror absorbs carbon dioxide"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cellular respiration produces water vapor byproduct (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O); exhaled warm vapor condenses on cool glass."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "How do Whale and Dolphin mammals breathe while swimming underwater in oceans?",
    options: [
      "They do NOT have gills; they possess Lungs and must periodically surface to inhale fresh atmospheric air through a Blowhole located atop their heads",
      "They breathe through gills like fish",
      "They absorb oxygen through their fins",
      "They do not breathe oxygen"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cetaceans are air-breathing mammals with lungs that surface to exchange tidal volume via dorsal blowholes."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "In the human respiratory tract, what is the role of the fine Mucus and tiny Cilia lining the nasal passages?",
    options: [
      "They trap dust, pollen, soot particles, and microbes from inhaled air, warming and humidifying the air before it reaches the delicate lungs",
      "They cool the lungs to 0°C",
      "They make speaking louder",
      "They produce digestive enzymes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mucociliary escalator: goblet cell mucus traps airborne particulates while ciliated epithelium propels debris pharyngeally."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What are 'Lenticels' in woody trees and stems?",
    options: [
      "Small porous openings on the woody bark of old stems and roots that facilitate continuous respiratory gas exchange (O₂ and CO₂)",
      "Flower buds",
      "Roots that store sugar",
      "Leaves that produce poison"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Lenticels are specialized loosely-packed cork cell fissures in woody periderm enabling gas diffusion into internal parenchyma."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What happens in a bell-jar and Y-tube plastic bottle model when the rubber sheet tied at the bottom is PULLED DOWNWARDS?",
    options: [
      "The volume inside the bottle increases, air pressure drops, and atmospheric air rushes in to INFLATE the two small balloons (simulating lungs)",
      "The balloons deflate",
      "The bottle cracks",
      "Water fills the bottle"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Simulating Boyle's Law: downward displacement of the rubber diaphragm expands internal volume, reducing chamber pressure and inflating lung balloons."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Why do mountaineers climbing Mount Everest carry portable Oxygen Cylinders with them?",
    options: [
      "At high altitudes, the atmospheric pressure and amount of available oxygen in the thin air is drastically lower than at sea level",
      "To make their backpacks heavier",
      "To light campfires",
      "Because mountains have no wind"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "High-altitude hypobaric hypoxia: barometric pressure drops with altitude, reducing alveolar oxygen partial pressure (pO₂)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Why is yawning often triggered when we are sleepy, bored, or tired?",
    options: [
      "When we are sleepy, our breathing rate slows down, causing oxygen levels in the blood to drop; a deep yawn takes in a large volume of oxygen to restore alertness",
      "Because the jaw muscles are tired",
      "To make ourselves fall asleep faster",
      "Because of loud noises"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Shallow hypoventilation during drowsiness triggers reflex deep inspiratory yawning to expand collapsed alveoli and oxygenate blood."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What is the respiratory pigment in human red blood cells (RBCs) that binds with Oxygen to form Oxyhemoglobin for transport to all body cells?",
    options: ["Hemoglobin (iron-containing protein)", "Chlorophyll", "Melanin", "Keratin"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hemoglobin (Hb) tetramer binds up to four O₂ molecules forming oxyhemoglobin (HbO₈) for systemic cellular delivery."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "In what way is Breathing fundamentally different from Cellular Respiration?",
    options: [
      "Breathing is a physical mechanical process of inhaling O₂ and exhaling CO₂ ; Cellular Respiration is a biochemical intracellular catabolic reaction that breaks down glucose to release energy",
      "Breathing produces food and respiration destroys food",
      "Breathing only happens in plants",
      "Both are exactly the same thing"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Breathing is organismal biophysical ventilation; cellular respiration is enzymatic intracellular mitochondrial ATP bioenergetics."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Read the statements:\nAssertion (A): Anaerobic respiration in human skeletal muscles during extreme sprinting yields significantly less energy per glucose molecule than aerobic respiration.\nReason (R): In anaerobic glycolysis, glucose is only partially broken down into Lactic Acid, releasing a meager 2 ATP molecules, whereas full aerobic oxidation into CO₂ and H₂O releases up to 36–38 ATP molecules.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Aerobic cellular respiration completes Krebs cycle and oxidative phosphorylation (~36 ATP), whereas anaerobic glycolysis yields net 2 ATP."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Spot the IMPOSTER in the following animal respiratory adaptations:\nGroup:\n1. Earthworm - Moist Cutaneous Respiration\n2. Cockroach - Tracheal tubes and Spiracles\n3. Fish - Vascularized Branchial Gills\n4. Tadpole of Frog - Fully developed functional lungs only",
    options: ["Adaptation 1", "Adaptation 2", "Adaptation 3", "Adaptation 4 (Frog tadpoles breathe through GILLS in aquatic larval stage ; lungs develop upon metamorphosis)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Adaptation 4 is false: amphibian tadpoles respire via external and internal branchial gills; pulmonary lungs develop during metamorphic transition."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "In the countercurrent exchange mechanism operating in Fish Gills:\nWhy is blood flow in gill lamellae oriented in the EXACT OPPOSITE direction to the flow of water across the gills?",
    options: [
      "Countercurrent flow maintains a continuous, steep oxygen concentration gradient across the entire length of the capillary bed, extracting over 80% of dissolved oxygen from water",
      "To prevent water from entering the stomach",
      "To make the fish swim backwards",
      "To warm up the ocean water"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Countercurrent gill geometry maximizes diffusion gradient across the lamellar surface, reaching >80% O₂ extraction efficiency."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Match Column I (Organisms) with Column II (Primary Respiratory Mechanism / Pathway):\n(a) Yeast cells          -> (i) Anaerobic Fermentation yielding Ethanol + CO₂\n(b) Active human muscles -> (ii) Anaerobic Glycolysis yielding Lactic Acid\n(c) Cockroach            -> (iii) Network of Tracheal tubes carrying air directly to cells\n(d) Plant roots          -> (iv) Root hairs absorbing soil air from particle interstices",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Exact biological mapping: Yeast = ethanol fermentation; Muscle deficit = lactic acid; Insect = tracheae; Root = soil interstitial diffusion."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Read the statements regarding plant respiration:\nStatement 1: Plants respire continuously during day AND night, consuming oxygen and releasing carbon dioxide.\nStatement 2: During daylight hours, the rate of photosynthesis is much higher than respiration, resulting in net oxygen release.\nStatement 3: Plants do not respire at all because they have no lungs.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false: plant cells respire 24/7 via mitochondria. During daytime, photosynthetic O₂ production exceeds respiratory O₂ consumption."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What is the structural and physiological significance of the microscopic 'Alveoli' (air sacs) in human lungs?",
    options: [
      "Millions of thin-walled alveoli provide an immense total surface area (~80 m², size of a tennis court) densely wrapped in capillaries for rapid gas diffusion",
      "They store food inside the lungs",
      "They pump blood directly to the brain",
      "They filter water out of blood"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Human lungs contain ~300-500 million alveoli, creating an enormous ~80 m² microvascular surface area for Fickian gas diffusion."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Why do insect tracheal respiratory systems impose a strict physical upper limit on the maximum body size an insect can achieve?",
    options: [
      "Tracheal gas transport relies primarily on passive gaseous diffusion through narrow tubes; over longer body distances (> a few centimeters), oxygen diffusion slows down drastically",
      "Because insect legs cannot support weight",
      "Because insects have no eyes",
      "Because insects do not eat meat"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Diffusion kinetics (scaling as distance squared) restrict effective tracheal oxygen delivery to small body lengths under modern 21% atmospheric O₂."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Consider four physiological states:\n1. Resting during deep sleep\n2. Brisk walking in a park\n3. Sprinting 100 metres at top speed\n4. Sitting in a classroom\nArrange these states in INCREASING order of Breathing Rate and Cellular Oxygen Demand:",
    options: ["1 < 4 < 2 < 3", "3 < 2 < 4 < 1", "4 < 1 < 2 < 3", "2 < 4 < 1 < 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Deep sleep (lowest metabolic rate) < Sitting in class < Brisk walking < 100 m sprint (maximal metabolic rate and anaerobic oxygen debt)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "Why does Carbon Monoxide (CO) gas poisoning cause rapid asphyxiation and death even when ambient oxygen is present?",
    options: [
      "Carbon monoxide has an affinity for Hemoglobin over 200 times higher than oxygen, forming stable Carboxyhemoglobin and completely blocking oxygen transport to tissues",
      "CO freezes the lungs instantly",
      "CO destroys all bones in the body",
      "CO turns blood into water"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "CO binds competitively to heme iron with >200× affinity, stabilizing the R-state and preventing allosteric O₂ delivery to brain and heart."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What is 'Oxygen Debt' incurred during strenuous anaerobic exercise?",
    options: [
      "The extra volume of oxygen required after exercise to oxidize accumulated lactic acid in the liver back into pyruvate/glucose and replenish ATP/phosphocreatine reserves",
      "The amount of money paid for oxygen cylinders",
      "The loss of breath during swimming",
      "The oxygen stored in the stomach"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Excess Post-exercise Oxygen Consumption (EPOC / oxygen debt) metabolizes lactic acid via the Cori cycle in hepatocytes and restabilizes homeostatic reserves."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "How do mangrove plants (like Rhizophora) growing in oxygen-poor, saline waterlogged coastal marshes breathe?",
    options: [
      "They produce specialized vertical aerial roots called 'Pneumatophores' (breathing roots) that grow upwards out of the water and mud with lenticels to intake air",
      "They absorb oxygen through ocean fish",
      "They do not require oxygen",
      "They grow only under sand"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Halophytic mangroves deploy negatively geotropic pneumatophores (respiratory knee-roots) equipped with lenticels and aerenchyma for subterranean aeration."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 6: Respiration in Organisms",
    question: "What overarching bioenergetic reality is established in Chapter 6 of NCERT Class 7 Science?",
    options: [
      "Respiration is the universal cellular engine of all biological life, converting chemical potential energy stored in organic nutrients into kinetic metabolic ATP that powers growth, repair, movement, and physiological homeostasis across every living kingdom",
      "That only animals need energy to survive",
      "That respiration only occurs during running",
      "That breathing and burning wood are identical processes"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 6 illuminates the bioenergetic unity of life: metabolic breakdown of glucose to generate ATP through aerobic and anaerobic evolutionary pathways."
  }
];

console.log('Generated Class 7 Science Ch6:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/science_ch6.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
