import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 1: Nutrition in Plants (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "The mode of nutrition in which organisms make food themselves from simple inorganic substances is called:",
    options: ["Autotrophic Nutrition", "Heterotrophic Nutrition", "Saprotrophic Nutrition", "Parasitic Nutrition"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Autotrophic nutrition (Auto = self, trophos = nourishment) is the synthesis of organic food by green plants from simple substances."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "The green pigment present in the leaves of plants that captures solar radiant energy for photosynthesis is called:",
    options: ["Chlorophyll", "Hemoglobin", "Carotene", "Anthocyanin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Chlorophyll is the green magnesium-containing pigment in chloroplasts that absorbs sunlight energy for photosynthesis."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Tiny microscopic pores present on the surface of plant leaves surrounded by guard cells are called:",
    options: ["Stomata", "Vessels", "Chloroplasts", "Lenticels"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Stomata are microscopic dermal pores enclosed by bean-shaped guard cells that regulate gas exchange and transpiration."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What are the essential raw materials required by green plants to carry out Photosynthesis?",
    options: [
      "Carbon dioxide, Water, Chlorophyll, and Sunlight",
      "Oxygen, Sugar, Soil, and Nitrogen",
      "Carbon monoxide, Salt, Heat, and Sand",
      "Glucose, Protein, Clay, and Water"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Photosynthesis combines CO₂ and H₂O in the presence of light and chlorophyll to synthesize carbohydrates and O₂."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What is the primary carbohydrate food product and by-product gas synthesized during photosynthesis?",
    options: [
      "Glucose (stored as Starch) and Oxygen gas (O₂)",
      "Proteins and Carbon dioxide",
      "Fats and Nitrogen gas",
      "Minerals and Hydrogen gas"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Photosynthesis converts CO₂ + H₂O into Glucose (stored as Starch) while releasing Oxygen (O₂) as a vital by-product."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Which yellow, tubular, non-green twining plant is a classic example of a total plant PARASITE that climbs on host trees?",
    options: ["Cuscuta (Amarbel)", "Pitcher Plant", "Mushroom", "Lichen"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Cuscuta (Amarbel) lacks chlorophyll and uses haustorial root suckers to derive ready-made nutrients from its host tree."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Which insect-eating carnivorous plant has a modified leaf blade shaped like a pitcher with a lid and downward-pointing hairs?",
    options: ["Pitcher Plant (Nepenthes)", "Cuscuta", "Mushroom", "Rose plant"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Pitcher Plant (Nepenthes) traps insects inside its digestive enzyme-filled pitcher to obtain supplemental nitrogen."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Organisms that derive their nourishment in solution form from dead and decaying organic matter (such as Fungi/Mushrooms) are called:",
    options: ["Saprotrophs (Saprotrophic Nutrition)", "Autotrophs", "Parasites", "Herbivores"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Saprotrophs secrete digestive enzymes onto decaying substrates and absorb the liquefied nutrients."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "A symbiotic association in which an Alga (autotroph) and a Fungus (saprotroph) live together in mutual benefit is called a:",
    options: ["Lichen", "Cuscuta", "Rhizobium", "Mistletoe"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In Lichens, the green alga manufactures food via photosynthesis while the fungus provides shelter, water, and minerals."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Which chemical test is used to detect the presence of Starch in a green leaf after photosynthesis?",
    options: ["Iodine Solution Test (turns blue-black in presence of starch)", "Benedict Test", "Litmus Test", "Acid Test"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Iodine solution forms a characteristic blue-black charge-transfer complex with starch molecules in leaves."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What are the slimy, green floating patches commonly seen in stagnant ponds and ditches formed by simple photosynthetic organisms called?",
    options: ["Algae", "Fungi", "Protozoa", "Bacteria"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Algae are simple thallophyte organisms containing chlorophyll that conduct aquatic photosynthesis."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Which beneficial bacterium lives inside the root nodules of leguminous crops (grams, peas, beans) to fix atmospheric nitrogen into soluble soil nitrates?",
    options: ["Rhizobium", "Lactobacillus", "E. coli", "Salmonella"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rhizobium bacteria form symbiotic root nodules with legumes, biologically fixing inert atmospheric N₂ into fertile nitrates."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why do insectivorous plants (like the Pitcher Plant) capture and digest insects even though their green leaves carry out photosynthesis?",
    options: [
      "They grow in nitrogen-deficient, boggy acidic soils and trap insects to obtain essential nitrogenous compounds required for protein synthesis",
      "Because they cannot make any glucose at all",
      "To protect themselves from insect bites",
      "Because they do not need sunlight"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Insectivorous plants are autotrophic for carbon/carbohydrates but carnivorous to supplement nitrogen deficient in marsh soils."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "How do water and dissolved mineral nutrients absorbed by roots travel upwards to reach the green leaves?",
    options: [
      "Through continuous pipe-like vascular vessels (Xylem tissue) running like pipelines throughout roots, stem, branches, and leaves",
      "By diffusing across the outer bark",
      "Carried inside pollen grains",
      "Through stomatal pores"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Xylem vessels form continuous hollow tracheary conduits transporting water and minerals upwards by capillary and transpirational pull."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why do leaves that are deep red, brown, or violet in color (such as Croton leaves) also carry out photosynthesis successfully?",
    options: [
      "They contain large amounts of red and brown accessory pigments that mask the green chlorophyll, but chlorophyll is still present and functional underneath",
      "Because red color is better than green for photosynthesis",
      "They absorb food directly from surrounding air",
      "They only photosynthesize in the dark"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Anthocyanin and carotenoid pigments mask the green chlorophyll optical color, but photosynthesis proceeds normally."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why does a piece of moist bread develop a fluffy, cottony growth (mold) of green, white, or brown patches when left in a warm, moist room for 2-3 days?",
    options: [
      "Airborne fungal spores land on the moist nutrient-rich bread, germinate into thread-like hyphae, and feed saprotrophically",
      "The bread converts into green grass",
      "Bacteria produce green paint",
      "Moisture turns bread into plastic"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dormant fungal spores (like Rhizopus bread mold) germinate upon contact with warm moist organic substrates."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why is the Sun rightfully described as the 'Ultimate Source of Energy' for all living organisms on planet Earth?",
    options: [
      "Solar radiant energy captured by green autotrophic plants through photosynthesis forms the foundational chemical energy that powers all herbivores, carnivores, and human food webs",
      "Because the sun burns all waste materials",
      "Because animals can make food directly from sunlight without plants",
      "Because the sun produces soil directly"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Solar photons captured during photosynthetic light reactions drive primary biomass production across the global biosphere."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "How do green plants synthesize PROTEINS when photosynthesis only directly produces carbohydrates (Carbon, Hydrogen, and Oxygen)?",
    options: [
      "Plants combine carbohydrates with soluble Nitrogen absorbed from soil (via nitrogen-fixing bacteria and fertilizers) to synthesize amino acids and proteins",
      "Plants absorb proteins directly from rainwater",
      "Chlorophyll turns directly into protein in sunlight",
      "Plants convert sunlight into iron"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Proteins require nitrogen along with C, H, O. Plants utilize soil nitrates absorbed by roots to synthesize amino acids."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why do farmers rarely need to add synthetic nitrogenous fertilizers to fields where leguminous crops (like peas, grams, or lentils) are cultivated?",
    options: [
      "Symbiotic Rhizobium bacteria living in the legume root nodules naturally enrich the soil with fixed nitrogen, replenishing soil fertility naturally",
      "Because legumes do not require any nitrogen",
      "Because legume leaves produce chemical fertilizer powder",
      "Because legumes absorb nitrogen through flowers"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rhizobium-legume symbiosis enriches rhizosphere nitrogen stocks, reducing synthetic chemical fertilizer requirements."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What happens when a potted green plant is kept inside a pitch-dark room for 72 hours (3 days) before an Iodine test?",
    options: [
      "The plant gets 'destarched' as it consumes all its stored starch reserve in respiration without producing new starch, testing negative with iodine (no blue-black color)",
      "The leaves turn permanently blue-black",
      "The plant produces double the amount of starch",
      "The roots turn into stems"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Destarching in prolonged darkness exhausts leaf starch reserves via metabolic cellular respiration."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What is the symbiotic relationship between a Fungus and the roots of higher forest trees (such as Pinus / Oak) known as?",
    options: [
      "Mycorrhiza (Fungus absorbs water and minerals for the tree, while the tree provides photosynthetic carbohydrates to the fungus)",
      "Parasitism",
      "Predation",
      "Insectivory"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mycorrhizal mutualism expands root surface area for phosphorus/water uptake in exchange for host plant photosynthate."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "How do Guard Cells regulate the opening and closing of stomatal pores on leaves?",
    options: [
      "Guard cells swell and curve outward when water flows into them to open the pore, and shrink flaccid when water leaves to close the pore",
      "Guard cells spin around like wheels",
      "They melt in hot sunlight",
      "They break apart permanently at night"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Turgor pressure dynamics: osmotic potassium/water influx increases guard cell turgidity, bowing differential cell walls open."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why is Cuscuta (Amarbel) classified as a 'Parasite' while the host tree is harmed?",
    options: [
      "It deprives the host tree of valuable synthesized nutrients without contributing any benefit, weakening the host's vigor",
      "Because it provides water to the host",
      "Because it cleans the host tree leaves",
      "Because it makes the tree grow twice as fast"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Parasitism represents a (+/-) relationship where the parasite extracts vascular sap without returning metabolic reciprocity."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What is the role of boiling a leaf in alcohol (ethanol) inside a water bath during the classic Starch test experiment?",
    options: [
      "To dissolve and extract the green chlorophyll completely so that the blue-black iodine color change can be observed clearly without green interference",
      "To make the leaf grow bigger",
      "To kill the starch molecules",
      "To turn the leaf into sugar"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Boiling in ethanol de-pigments the leaf by dissolving photosynthetic chlorophyll lipids, ensuring clear iodine colorimetry."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why cannot human beings or other non-green animals synthesize their own food from atmospheric CO₂ and water like green plants do?",
    options: [
      "Animal cells lack chloroplasts and the green pigment Chlorophyll necessary to absorb and convert solar photonic energy into chemical bonds",
      "Because animals do not drink enough water",
      "Because animal skin is too thick",
      "Because animals walk on legs"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Heterotrophs lack thylakoid chloroplast machinery and chlorophyll complexes capable of light-driven photophosphorylation."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What is the chemical word equation representing Photosynthesis?",
    options: [
      "Carbon dioxide + Water --(Sunlight / Chlorophyll)--> Carbohydrate (Glucose) + Oxygen",
      "Glucose + Oxygen ----> Carbon dioxide + Water + Energy",
      "Nitrogen + Water ----> Protein + Hydrogen",
      "Carbon dioxide + Soil ----> Starch + Salt"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Photosynthetic stoichiometry: 6CO₂ + 6H₂O + radiant energy → C₆H₁₂O₆ + 6O₂."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why do fungal infections frequently spoil leather shoes, pickles, wet clothes, and wood furniture during hot and humid monsoon weather?",
    options: [
      "High humidity (moisture) and warm ambient temperatures provide optimal ecological conditions for airborne fungal spores to settle, germinate, and proliferate rapidly",
      "Because leather shoes make food for fungi",
      "Because rain turns clothes into fungi",
      "Because sunlight stops shining entirely"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Microscopic ubiquitous fungal spores require warm (25–35°C) and humid (>70% RH) substrates for vegetative hyphal growth."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "How do major macronutrients like Nitrogen, Phosphorus, and Potassium (NPK) get depleted in soil over continuous farming?",
    options: [
      "Growing crops continuously absorb massive quantities of mineral nutrients from the soil, requiring periodic replenishment via manure, compost, or fertilizers",
      "Rain washes away all soil rocks",
      "Earthworms eat all the soil nitrogen",
      "Wind blows away minerals into clouds"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Crop harvest continuously exports bio-accumulated N-P-K mineral reserves from agricultural soils, requiring systematic replenishment."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Read the statements:\nAssertion (A): Life on planet Earth would be utterly impossible in the complete absence of photosynthesis.\nReason (R): Photosynthesis is the sole biological process that captures solar energy to manufacture organic food for the entire biosphere while releasing all the oxygen gas required for aerobic respiration.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Photosynthesis underpins terrestrial life as the primary thermodynamic transducer of solar energy into bio-available trophic food and atmospheric O₂."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Spot the IMPOSTER in the following group of organisms categorized by their primary mode of nutrition:\nGroup: [Mushroom - Saprotroph, Yeast - Saprotroph, Bread Mold (Rhizopus) - Saprotroph, Cuscuta (Amarbel) - Saprotroph]",
    options: [
      "Mushroom - Saprotroph",
      "Yeast - Saprotroph",
      "Bread Mold (Rhizopus) - Saprotroph",
      "Cuscuta (Amarbel) - Saprotroph"
    ],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Cuscuta (Amarbel) is a PARASITE (living on live host plants), whereas Mushroom, Yeast, and Bread Mold are Saprotrophs (feeding on dead organic matter)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "A variegated leaf of a Coleus plant (having green center and white non-green border) is exposed to bright sunlight for 6 hours and tested with Iodine solution. What will be the observed result?",
    options: [
      "Only the green central region turns blue-black (showing starch present), while the white non-green border remains pale yellow-brown (no starch), proving chlorophyll is indispensable for photosynthesis",
      "The entire leaf turns uniform blue-black",
      "Only the white border turns blue-black",
      "The whole leaf turns bright red"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Starch is synthesized exclusively in chlorophyll-containing green areas, confirming chlorophyll's essential catalytic role."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Match Column I (Modes of Plant Nutrition) with Column II (Representative Examples):\n(a) Autotroph       -> (i) Cuscuta (Amarbel)\n(b) Parasite        -> (ii) Pitcher Plant (Nepenthes)\n(c) Saprotroph      -> (iii) Green Algae & Mango tree\n(d) Insectivorous   -> (iv) Mushroom (Agaricus)",
    options: [
      "a-(iii), b-(i), c-(iv), d-(ii)",
      "a-(i), b-(iii), c-(ii), d-(iv)",
      "a-(iv), b-(ii), c-(iii), d-(i)",
      "a-(ii), b-(iv), c-(i), d-(iii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Autotroph = Algae/Mango; Parasite = Cuscuta; Saprotroph = Mushroom; Insectivorous = Pitcher plant."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Read the statements regarding plant physiology:\nStatement 1: Stomata remain open primarily during daylight hours for CO₂ assimilation and close at night to minimize transpirational water loss.\nStatement 2: Desert plants (like Cacti) perform photosynthesis using their green fleshy stems while leaves are reduced to spines.\nStatement 3: Rhizobium bacteria can manufacture their own carbohydrate food through photosynthesis.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because Rhizobium is heterotrophic and receives carbohydrates from the legume host. Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why is the partial carnivorous adaptation in Drosera (Sundew) and Utricularia (Bladderwort) considered an evolutionary masterpiece?",
    options: [
      "It allows plants to colonize ultra-oligotrophic, waterlogged, and nutrient-poor wetlands where competing non-carnivorous autotrophs cannot survive due to nitrogen starvation",
      "Because it turns the plants into active animals",
      "Because they no longer require any water or carbon dioxide",
      "Because they live underground without light"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Carnivory circumvents soil nitrogen/phosphorus limitations in bogs through enzymatic breakdown of captured arthropod biomass."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Why do underwater submerged aquatic plants (like Hydrilla and Vallisneria) have narrow ribbon-like leaves and lack stomatal pores with cuticles?",
    options: [
      "Narrow flexible leaves withstand flowing water currents without tearing, and dissolved gases (CO₂ and O₂) diffuse directly across thin epidermal cell walls",
      "Because they do not need any carbon dioxide",
      "To avoid being eaten by sharks",
      "Because they only absorb food from soil"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hydrophytic adaptations eliminate stomata/cuticles to allow direct trans-epidermal diffusion of dissolved aquatic gases."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "Consider four experimental setups of potted plants:\nSet 1: In sunlight, bell jar with KOH (potassium hydroxide pellets which absorb CO₂)\nSet 2: In sunlight, bell jar without KOH\nSet 3: In total darkness for 72 hours\nSet 4: Normal sunlight, open air\nWhich leaves will show a POSITIVE blue-black starch reaction with Iodine?",
    options: ["Sets 2 and 4 only", "Sets 1 and 3 only", "Set 4 only", "All 4 Sets"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Set 1 lacks CO₂ (absorbed by KOH) and Set 3 lacks light; neither synthesizes starch. Sets 2 and 4 synthesize starch normally."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "How do Lichens serve as sensitive 'Bio-indicators' of atmospheric air quality in environmental monitoring?",
    options: [
      "Lichens are extraordinarily sensitive to toxic atmospheric Sulfur Dioxide (SO₂) air pollution and cannot survive in heavily polluted urban/industrial areas",
      "They change their color to neon purple in clean air",
      "They absorb plastic from the air",
      "They only grow on factory chimneys"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Lacking roots and protective cuticles, symbiotic lichens hyper-absorb atmospheric SO₂, serving as classic biological air quality monitors."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What is the precise cellular organelle inside green plant mesophyll cells where photosynthesis takes place?",
    options: ["Chloroplast", "Mitochondria", "Ribosome", "Golgi apparatus"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chloroplasts contain thylakoid membranes with light-harvesting chlorophyll and stroma enzymes for Calvin cycle carbohydrate synthesis."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What biochemical transformation happens to glucose molecules immediately after synthesis in leaf mesophyll cells?",
    options: [
      "Excess glucose is rapidly polymerized into insoluble complex Starch for compact long-term storage and later translocated as sucrose via phloem",
      "Glucose turns into pure gold crystals",
      "It evaporates immediately into the sky",
      "It converts into toxic carbon monoxide"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Soluble osmotic glucose is condensed into insoluble, non-reactive amylose/amylopectin starch grains for osmotic equilibrium."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 1: Nutrition in Plants",
    question: "What overarching biological principle is illuminated in Chapter 1 of NCERT Class 7 Science?",
    options: [
      "Autotrophic green plants form the indispensable biological bedrock of terrestrial life, sustaining global biogeochemical energy flow, oxygen renewal, and complex symbiotic networks",
      "Plants depend completely on animals for all their food",
      "Parasitic plants are the only beneficial organisms in nature",
      "Soil fertility never requires any replenishment"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 1 establishes plant autotrophy and ecological symbiosis as the foundational energy conduit of terrestrial biomes."
  }
];

console.log('Generated Class 7 Science Ch1:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/science_ch1.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
