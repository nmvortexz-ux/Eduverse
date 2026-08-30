import fs from 'fs';
import path from 'path';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 1: Components of Food (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which chemical reagent turns blue-black in the presence of starch?",
    options: ["Dilute iodine solution", "Copper sulphate solution", "Caustic soda", "Ethanol"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Dilute iodine solution reacts with starch (a carbohydrate) to produce a characteristic deep blue-black complex."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which food component is primarily tested using Copper Sulphate and Caustic Soda solutions?",
    options: ["Fats", "Proteins", "Starch", "Dietary fibres"],
    correctAnswer: 1,
    difficulty: "EASY",
    damage: 150,
    explanation: "Biuret test for proteins uses 2 drops of copper sulphate and 10 drops of caustic soda (NaOH), turning the solution violet."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "An oily, translucent patch left on a piece of paper after crushing a food item indicates the presence of:",
    options: ["Proteins", "Fats", "Carbohydrates", "Minerals"],
    correctAnswer: 1,
    difficulty: "EASY",
    damage: 150,
    explanation: "Lipids and fats leave a greasy, translucent mark on paper that permits light to pass through weakly."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which nutrient group provides the maximum energy per gram to our body?",
    options: ["Carbohydrates", "Fats", "Proteins", "Vitamins"],
    correctAnswer: 1,
    difficulty: "EASY",
    damage: 150,
    explanation: "Fats yield more than twice the metabolic energy (~9 kcal/g) compared to carbohydrates or proteins (~4 kcal/g)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which nutrients are commonly known as 'body-building foods'?",
    options: ["Carbohydrates", "Proteins", "Vitamins", "Fats"],
    correctAnswer: 1,
    difficulty: "EASY",
    damage: 150,
    explanation: "Proteins are required for the structural growth, cellular maintenance, and repair of damaged body tissues."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which vitamin keeps our eyes, hair, and skin healthy and is abundant in carrots and papayas?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Vitamin A (Retinol) is essential for maintaining rhodopsin in the retina, promoting clear vision and healthy epithelial tissues."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which vitamin is easily destroyed by excessive heat during cooking?",
    options: ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
    correctAnswer: 2,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ascorbic acid (Vitamin C) is thermolabile and oxidizes rapidly when subjected to thermal cooking."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Dietary fibres present in whole grains, pulses, and fresh vegetables are also referred to as:",
    options: ["Roughage", "Starch", "Amino acids", "Enzymes"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Roughage comprises indigestible plant cellulose that adds bulk to digestive waste, preventing constipation."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which deficiency disease is caused by a severe lack of Vitamin C in the diet?",
    options: ["Beri-beri", "Scurvy", "Rickets", "Night blindness"],
    correctAnswer: 1,
    difficulty: "EASY",
    damage: 150,
    explanation: "Scurvy results from Vitamin C deficiency, causing bleeding gums, fragile capillary walls, and delayed wound healing."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which mineral is required for the formation of red haemoglobin in our blood?",
    options: ["Calcium", "Iron", "Iodine", "Sodium"],
    correctAnswer: 1,
    difficulty: "EASY",
    damage: 150,
    explanation: "Iron forms the core coordination ion of haemoglobin molecules responsible for transporting oxygen in red blood cells."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Enlargement of the thyroid gland in the neck region (Goitre) is caused by the deficiency of:",
    options: ["Iron", "Calcium", "Iodine", "Phosphorus"],
    correctAnswer: 2,
    difficulty: "EASY",
    damage: 150,
    explanation: "Iodine is required to synthesize thyroxine hormone; its deficiency leads to compensatory thyroid hypertrophy (Goitre)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which vitamin is synthesized naturally by our skin when exposed to morning sunlight?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correctAnswer: 3,
    difficulty: "EASY",
    damage: 150,
    explanation: "Photochemical reaction in the dermal layers under ultraviolet sunlight converts 7-dehydrocholesterol into Vitamin D."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Why should we avoid repeatedly washing raw rice and pulses with large amounts of water before cooking?",
    options: [
      "It dissolves water-soluble vitamins (like Vitamin B complex and C) and minerals, washing them away",
      "It converts carbohydrates into harmful toxins",
      "It increases fat content",
      "It prevents food from getting cooked"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Frequent vigorous washing leaches out water-soluble micronutrients like thiamine, niacin, and essential minerals."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "What physical symptoms are exhibited by a child suffering from Kwashiorkor (protein deficiency)?",
    options: [
      "Swollen swollen belly (pot belly), discoloured hair, stunted growth, and skin diseases",
      "Extremely soft bones bending into bow legs",
      "Bleeding gums and loose teeth",
      "Inability to see in low light"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Severe protein malnutrition leads to hypoalbuminemia causing abdominal edema (pot belly) and depigmented hair."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "A diet containing excessive fat-rich fried foods, samosas, and sweets over long periods can lead to a condition called:",
    options: ["Anemia", "Obesity", "Marasmus", "Goitre"],
    correctAnswer: 1,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Unburned surplus dietary calories from saturated fats get stored as adipose tissue, resulting in clinical obesity."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Why does our body need roughage (dietary fibre) even though it provides zero energy and no nutrients?",
    options: [
      "It adds bulk to the food, aids normal peristalsis, and helps our body expel undigested waste smoothly",
      "It fights bacterial infections directly",
      "It builds muscular tissues",
      "It produces red blood cells"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cellulose fibres stimulate intestinal peristaltic contractions, facilitating efficient transit of fecal bolus."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which mineral works in synergy with Vitamin D to maintain mineralized bone density and strong enamel on teeth?",
    options: ["Iron", "Calcium and Phosphorus", "Sodium", "Potassium"],
    correctAnswer: 1,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hydroxyapatite crystals of bones and teeth are composed primarily of calcium phosphate complexes."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "What happens during a severe deficiency of Vitamin B1 (Thiamine)?",
    options: [
      "Beri-beri with weak muscles and very little physical energy to work",
      "Soft bones and bowed legs",
      "Swollen neck gland",
      "Pale skin and dizziness"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Thiamine deficiency impairs carbohydrate metabolism and neurological signaling, causing peripheral neuromuscular weakness (Beri-beri)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Why is drinking 2 to 3 litres of clean water every day essential for human physiological health?",
    options: [
      "Water absorbs nutrients from food into the bloodstream and helps excrete metabolic wastes as urine and sweat",
      "Water replaces the need for carbohydrates",
      "Water generates body heat during cold weather",
      "Water provides dietary vitamins"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Water serves as the biological universal solvent, regulating thermoregulation and renal clearance of toxins."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which symptom specifically characterizes Rickets in growing children?",
    options: [
      "Bones become soft, fragile, and bend into bow legs or knock knees",
      "Impaired twilight vision",
      "Bleeding from gums upon brushing",
      "Enlarged neck thyroid gland"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Lack of Vitamin D impairs calcium absorption, leading to defective osteoid mineralization that deforms weight-bearing leg bones."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which of the following foods is the richest source of animal protein containing all essential amino acids?",
    options: ["Eggs, fish, and milk", "Polished white rice", "Mustard oil", "Raw sugar"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Animal proteins like ovalbumin in eggs and casein in milk provide high biological value complete amino acid profiles."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Why do athletes and physical labourers require higher amounts of carbohydrate-rich foods compared to sedentary desk workers?",
    options: [
      "Carbohydrates are rapidly broken down into glucose, providing immediate ATP energy for strenuous muscular contractions",
      "Carbohydrates repair broken bone joints",
      "Carbohydrates prevent night blindness",
      "Carbohydrates cool down muscle temperature"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Glycolysis of carbohydrate substrates provides the fastest fuel pathway for high-output skeletal muscle work."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which pair of food items is predominantly rich in starch?",
    options: ["Boiled potato and boiled rice", "Mustard oil and butter", "Egg white and fish", "Spinach and lemon juice"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tubers (potatoes) and cereal grains (rice) store excess photosynthetic energy primarily in the form of amylose/amylopectin starch granules."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "What is a 'Balanced Diet'?",
    options: [
      "A diet providing all essential nutrients in proper proportions, along with adequate roughage and water for optimal health",
      "A diet composed only of fruits and green salad",
      "A diet containing equal weights of butter and sugar",
      "A meal eaten only once every 24 hours"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A balanced diet supplies macro and micronutrients in physiological proportions to sustain metabolic requirements without deficits."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Why does the government mandate the iodization of common edible table salt (NaCl)?",
    options: [
      "To ensure regular microscopic intake of iodine across all populations to prevent goitre and mental impairment in children",
      "To make table salt white in color",
      "To prevent table salt from absorbing moisture",
      "To improve salt sweetness"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Universal salt iodization with potassium iodate is an effective public health intervention preventing iodine deficiency disorders (IDD)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which symptom indicates a clinical deficiency of Iron (Anemia)?",
    options: [
      "General fatigue, physical weakness, pale skin, shortness of breath, and reduced stamina",
      "Spongy and bleeding gums",
      "Night blindness and dry corneas",
      "Bent leg bones"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Decreased erythrocyte haemoglobin reduces systemic tissue oxygenation, causing chronic fatigue and pallor (Anemia)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Which of the following citrus fruits provides the highest concentration of natural Vitamin C?",
    options: ["Amla (Indian gooseberry) and Lemon", "Dry almond nuts", "Boiled wheat grain", "Clarified butter (Ghee)"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Amla is one of the richest botanical sources of ascorbic acid, packing up to 600 mg of Vitamin C per 100 g."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Why is deep-frying vegetables at high temperatures considered nutritionally detrimental?",
    options: [
      "High heat oxidizes and destroys delicate vitamins while loading the food with unhealthy oxidized fats",
      "It turns starch into stone",
      "It removes all water and makes food heavy",
      "It freezes minerals"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Prolonged thermal stress degrades heat-sensitive vitamins (C, B-complex) and generates free fatty acid radicals."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Read the statements:\nAssertion (A): Boiling peeled vegetables in excess water and discarding the broth causes major nutritional loss.\nReason (R): Water-soluble vitamins like Vitamin C and Vitamin B-complex leach into the boiling water and are discarded.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Water-soluble vitamins dissolve readily into cooking water; throwing away the boiling broth removes these vital micronutrients."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Spot the IMPOSTER in the following group of micronutrient deficiency diseases:\nGroup: [Scurvy, Beri-beri, Rickets, Kwashiorkor]",
    "options": ["Scurvy", "Beri-beri", "Rickets", "Kwashiorkor"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Kwashiorkor is a MACRONUTRIENT deficiency disease (severe protein deficiency), whereas Scurvy (Vit C), Beri-beri (Vit B1), and Rickets (Vit D) are VITAMIN (micronutrient) deficiencies."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "A student performs three biochemical tests on a food extract 'X':\n1. Iodine Test: No color change (remains brown)\n2. Biuret Test: Turns brilliant violet\n3. Paper Grease Test: No translucent patch\nWhat is the predominant nutrient present in food 'X'?",
    "options": ["Proteins", "Starch", "Fats", "Dietary fibres only"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Positive Biuret reaction (violet color) confirms peptide bonds of proteins, while negative iodine and paper tests exclude starch and lipids."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "A child from an economically disadvantaged family consumes only plain white rice without pulses, vegetables, or dairy for over a year. Which dual condition is this child at greatest risk of developing?",
    "options": [
      "Marasmus (Protein-Calorie Malnutrition) along with multiple Vitamin & Mineral deficiencies",
      "Clinical obesity and high stamina",
      "Excessive bone hardening",
      "Hyperthyroidism"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Monotonous carbohydrate diets lacking proteins, micronutrients, and lipids lead to progressive wasting and growth arrest (Marasmus)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Match Column I with Column II:\n(a) Vitamin A  -> (i) Bleeding gums\n(b) Vitamin B1 -> (ii) Rickets (bowed bones)\n(c) Vitamin C  -> (iii) Poor vision in dim light\n(d) Vitamin D  -> (iv) Beri-beri (weak muscles)",
    "options": [
      "a-(iii), b-(iv), c-(i), d-(ii)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(ii), b-(i), c-(iv), d-(iii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Vit A deficiency causes nyctalopia; Vit B1 causes Beri-beri; Vit C causes Scurvy; Vit D causes Rickets."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Read the statements:\nAssertion (A): Consuming only fat-rich food like samosas and malai is NOT healthier than eating carbohydrates, even though fats yield more energy.\nReason (R): The body requires a broad balance of amino acids, complex fibres, and micronutrients; excessive fats trigger cardiovascular strain and obesity without supplying complete nutrition.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Metabolic health requires diverse macro/micronutrients. Excess lipid intake without micronutrients causes obesity and atherogenesis."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Consider four food items:\n- Food 1: Groundnut seed paste\n- Food 2: Boiled egg yolk\n- Food 3: Butter\n- Food 4: Cucumber slice\nWhich food item will produce the WEAKEST or NO translucent grease spot on filter paper?",
    "options": ["Food 4 (Cucumber slice)", "Food 1 (Groundnut)", "Food 2 (Egg yolk)", "Food 3 (Butter)"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Cucumber consists of >95% water and fibres with near-zero lipids, leaving no permanent greasy translucent lipid stain upon drying."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Why do sailors on ancient long-distance wooden ships historically suffer from loose teeth, joint pain, and bleeding skin lesions after months at sea?",
    "options": [
      "Absence of fresh fruits and green vegetables on long voyages resulted in severe nutritional Scurvy (Vitamin C depletion)",
      "Excessive ocean salt in drinking water",
      "Lack of carbohydrate energy",
      "Infection from sea fish"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Non-perishable ship rations (hardtack, salted meat) lacked fresh produce, inducing severe scorbutic collagen breakdown (James Lind's trials)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Read the statements:\nStatement 1: Milk is a complete food source containing proteins, fats, carbohydrates, and minerals like calcium, but lacks Vitamin C and Iron.\nStatement 2: Dietary fibres (roughage) are digested by human stomach enzymes into simple sugars.\nStatement 3: Iodine deficiency in pregnant mothers can cause mental disability in the newborn child.\nWhich statements are TRUE?",
    "options": ["Statements 1 and 3 only", "Statements 2 and 3 only", "Statements 1 and 2 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because humans lack cellulase enzymes to digest dietary cellulose. Statements 1 and 3 are correct."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "A student adds 2 drops of Copper Sulphate and 10 drops of Caustic Soda to a test tube containing crushed soybean powder mixed with water. What sequence of physical observations confirms protein presence?",
    "options": [
      "The white suspension turns distinct violet/purple after shaking and standing for a few minutes",
      "The solution immediately turns deep blue-black",
      "The test tube gets freezing cold with gas bubbles",
      "A yellow precipitate settles down"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Biuret test: Cu2+ ions coordinate with unprotonated peptide nitrogen atoms in alkaline conditions, forming a violet chelate."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "Why are sprouted seeds (like sprouted moong and chana) significantly more nutritious than raw dry seeds?",
    "options": [
      "Sprouting triggers enzymatic synthesis of vitamins (especially Vitamin C and B-complex) and converts complex starches into easily digestible nutrients",
      "Sprouting multiplies fat percentage by 100 times",
      "Sprouting removes all water content",
      "Sprouted seeds become mineral stones"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Germination activates endogenous hydrolytic enzymes, deactivating anti-nutrients (phytates) and bio-synthesizing vitamins and bioactive peptides."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 1: Components of Food",
    question: "In an experiment, four students eat different single-item diets for breakfast:\n- Student A: 2 Boiled Eggs\n- Student B: 2 Sweet Potatoes\n- Student C: 50g Pure Butter\n- Student D: 1 Large Apple\nWhich student consumed the highest amount of STARCH?",
    "options": ["Student B (Sweet Potatoes)", "Student A (Eggs)", "Student C (Butter)", "Student D (Apple)"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Sweet potatoes store complex plant carbohydrates (starch), whereas eggs are protein-rich, butter is pure lipid, and apples contain fructose."
  }
];

console.log('Generated Science:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/science_ch1.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
