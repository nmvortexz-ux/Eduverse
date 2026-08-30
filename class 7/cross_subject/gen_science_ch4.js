import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 4: Acids, Bases and Salts (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Chemical substances that have a characteristic SOUR taste and turn Blue Litmus paper RED are called:",
    options: ["Acids", "Bases", "Salts", "Alkalies"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Acids (from Latin 'acere' meaning sour) taste sour and turn blue litmus red."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Chemical substances that taste BITTER and feel SOAPY/slippery to touch are called:",
    options: ["Bases", "Acids", "Salts", "Indicators"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Bases taste bitter, feel slippery/soapy on the skin, and turn red litmus blue."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Special chemical substances used to test whether a solution is acidic or basic by changing their color are called:",
    options: ["Indicators", "Catalysts", "Solvents", "Reactants"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Indicators (such as litmus, phenolphthalein, turmeric) exhibit distinct colors in acidic and basic solutions."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is the natural source from which the most commonly used natural indicator, LITMUS, is extracted?",
    options: ["Lichens", "Rose petals", "Turmeric plant", "Beetroot"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Litmus is a natural dye extracted from lichens, possessing a mauve (purple) color in distilled water."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What organic acid is naturally present in Curd and sour milk?",
    options: ["Lactic Acid", "Citric Acid", "Acetic Acid", "Tartaric Acid"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Lactobacillus bacteria ferment lactose into Lactic Acid in curd and yogurt."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Which acid is naturally present in Citrus fruits (such as lemons, oranges, and limes)?",
    options: ["Citric Acid", "Formic Acid", "Oxalic Acid", "Lactic Acid"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Citrus fruits contain high concentrations of Citric Acid and Ascorbic Acid (Vitamin C)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Which acid is injected into human skin during an ANT STING, causing a burning painful sensation and swelling?",
    options: ["Formic Acid (Methanoic Acid)", "Hydrochloric Acid", "Sulfuric Acid", "Acetic Acid"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ant stings inject Formic Acid (HCOOH), causing painful burning inflammation."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is the common chemical name of Vinegar used in cooking and food preservation?",
    options: ["Dilute Acetic Acid (Ethanoic Acid)", "Sodium Hydroxide", "Calcium Hydroxide", "Lactic Acid"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Vinegar is a 4% to 8% aqueous solution of Acetic Acid (CH₃COOH)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is the chemical name of the base 'Milk of Magnesia' commonly used as an Antacid for relieving acidity?",
    options: ["Magnesium Hydroxide [Mg(OH)₂]", "Sodium Hydroxide [NaOH]", "Calcium Hydroxide [Ca(OH)₂]", "Ammonium Hydroxide [NH₄OH]"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Milk of Magnesia is a mild suspension of Magnesium Hydroxide [Mg(OH)₂]."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "The chemical reaction between an Acid and a Base to form Salt and Water with the evolution of heat is called:",
    options: ["Neutralization Reaction", "Combustion", "Photosynthesis", "Fermentation"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Acid + Base → Salt + Water + Heat (Exothermic Neutralization)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What color does the synthetic indicator Phenolphthalein show in a BASIC solution?",
    options: ["Bright Pink", "Colorless", "Deep Blue", "Bright Yellow"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Phenolphthalein turns vivid pink in alkaline/basic solutions (pH > 8.2) and remains colorless in acidic solutions."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is the chemical name of Slaked Lime / Lime Water used to test carbon dioxide?",
    options: ["Calcium Hydroxide [Ca(OH)₂]", "Calcium Carbonate [CaCO₃]", "Sodium Chloride [NaCl]", "Potassium Hydroxide [KOH]"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Lime water is a saturated aqueous solution of Calcium Hydroxide [Ca(OH)₂]."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What happens when a yellow turmeric stain on a white shirt is scrubbed with washing SOAP?",
    options: [
      "The yellow turmeric stain turns REDDISH-BROWN because soap is basic in nature; when washed with plenty of water, it turns yellow again",
      "The stain turns blue",
      "The stain disappears completely",
      "The shirt catches fire"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Curcumin in turmeric acts as a natural indicator, shifting from yellow to reddish-brown in basic alkaline media (soap)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "How does natural China Rose (Hibiscus) indicator change color in acidic and basic solutions?",
    options: [
      "Turns ACIDIC solutions to DARK PINK (Magenta) and BASIC solutions to GREEN",
      "Turns acidic to green and basic to pink",
      "Turns both solutions blue",
      "Shows no color change in either"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "China rose anthocyanin extract turns acidic solutions dark magenta/pink and basic solutions bright green."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Why is Calamine lotion (containing Zinc Carbonate) or moist Baking Soda applied to skin after an Ant bite?",
    options: [
      "Zinc carbonate and baking soda are mild BASES that neutralize the acidic formic acid injected by the ant bite, relieving pain",
      "To kill the ant",
      "Because calamine is an acid",
      "To make the skin waterproof"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Basic calamine (ZnCO₃) or sodium hydrogen carbonate (NaHCO₃) chemically neutralizes injected acidic formic acid."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Why must agricultural soil that has become too ACIDIC due to excessive chemical fertilizer use be treated with Quicklime (Calcium Oxide) or Slaked Lime (Calcium Hydroxide)?",
    options: [
      "Quicklime and slaked lime are BASES that neutralize soil acidity, restoring the optimal neutral pH for healthy plant root growth",
      "To add color to the soil",
      "To kill earthworms",
      "To make the soil sandy"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Liming agricultural soil neutralizes toxic soil acidity, optimizing nutrient uptake."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "If agricultural soil is too BASIC (alkaline), what is added to improve soil fertility?",
    options: [
      "Organic Matter / Manure (which decomposes to release natural acids that neutralize the basic soil)",
      "More quicklime",
      "Baking soda",
      "Bleaching powder"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Decaying organic compost/manure releases humic and fulvic acids, neutralizing alkaline soil."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Why must acidic factory effluents and industrial chemical waste be strictly treated with basic substances before being discharged into rivers?",
    options: [
      "Untreated acidic waste drastically lowers river water pH, poisoning and killing fish, aquatic organisms, and destroying freshwater ecosystems",
      "To change the color of river water to red",
      "To make water boil",
      "Because fish like drinking base"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Neutralization of industrial effluents prevents aquatic ecotoxicity and preserves aquatic biodiversity."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is 'Acid Rain' and what atmospheric pollutant gases cause it?",
    options: [
      "Rain containing excessive dissolved acids formed when atmospheric pollutants like Sulfur Dioxide (SO₂) and Nitrogen Dioxide (NO₂) react with rain droplets to form Sulfuric and Nitric acids",
      "Rain of pure hydrochloric acid falling from clouds",
      "Rain caused by burning wood only",
      "Rain containing lemon juice"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Atmospheric SO₂ and NO₂ form H₂SO₄ and HNO₃, causing acid precipitation (pH < 5.6) damaging monuments (Taj Mahal marble cancer)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What organic acid is naturally found in Tamarind (Imli), unripened green Grapes, and raw Mangoes?",
    options: ["Tartaric Acid", "Acetic Acid", "Lactic Acid", "Oxalic Acid"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tartaric acid is a dicarboxylic organic acid abundant in tamarind and unripe grapes."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What acid is naturally present in Spinach (Palak) and Tomatoes?",
    options: ["Oxalic Acid", "Citric Acid", "Formic Acid", "Sulfuric Acid"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Spinach and tomatoes contain naturally occurring Oxalic Acid."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is the chemical name and formula of Common Salt used in daily food?",
    options: ["Sodium Chloride (NaCl)", "Sodium Bicarbonate (NaHCO₃)", "Calcium Chloride (CaCl₂)", "Potassium Chloride (KCl)"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Common table salt is Sodium Chloride (NaCl), formed by neutralizing HCl with NaOH."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What happens to the temperature of the reaction mixture during a Neutralization Reaction in a test tube?",
    options: [
      "The temperature INCREASES (the test tube feels hot because neutralization is an exothermic reaction that releases heat energy)",
      "The temperature decreases and turns into ice",
      "The temperature remains exactly unchanged",
      "The mixture catches fire instantly"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Enthalpy of neutralization: H⁺(aq) + OH⁻(aq) → H₂O(l) + 57.3 kJ/mol (exothermic heat release)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Which base is used in window-cleaning fluids and glass sprays?",
    options: ["Ammonium Hydroxide [NH₄OH]", "Sodium Hydroxide [NaOH]", "Calcium Hydroxide [Ca(OH)₂]", "Magnesium Hydroxide [Mg(OH)₂]"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ammonium hydroxide [NH₄OH] dissolves grease cleanly without leaving residue on glass windows."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Which strong base is used in manufacturing hard bar soaps and unclogging drain pipes?",
    options: ["Sodium Hydroxide (Caustic Soda - NaOH)", "Lactic Acid", "Magnesium Hydroxide", "Ammonium Hydroxide"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sodium hydroxide (NaOH / caustic soda) saponifies fats in soap making and dissolves organic drain blockages."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is the nature of a solution that shows NO color change on both Red Litmus paper and Blue Litmus paper?",
    options: ["Neutral Solution (such as pure distilled water, sugar solution, or common salt solution)", "Strongly Acidic Solution", "Strongly Basic Solution", "Corrosive Acid"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Neutral solutions (pH = 7) exhibit no proton exchange with litmus dye, causing zero color change."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is Ascorbic Acid commonly known as in human nutrition?",
    options: ["Vitamin C (essential for immune health and preventing scurvy)", "Vitamin A", "Vitamin D", "Vitamin B12"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ascorbic acid is Vitamin C, found abundantly in amla (Indian gooseberry) and citrus fruits."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What happens when dilute Hydrochloric Acid (HCl) is mixed with Sodium Hydroxide (NaOH) in equal proportions?",
    options: [
      "They neutralize each other completely to produce neutral Sodium Chloride (NaCl), Water (H₂O), and heat: HCl + NaOH -> NaCl + H₂O",
      "They produce poisonous chlorine gas only",
      "They turn into pure alcohol",
      "They freeze into solid dry ice"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Equimolar strong acid-strong base neutralization yields neutral aqueous NaCl and water: HCl + NaOH → NaCl + H₂O + ΔH."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Read the statements:\nAssertion (A): Marble monuments like the Taj Mahal suffer from 'Marble Cancer' (yellowing and pitting of stone surfaces) when exposed to Acid Rain.\nReason (R): Sulfuric acid in acid rain reacts chemically with Calcium Carbonate (marble) to form soluble Calcium Sulfate, gradually dissolving and corroding the stone structure.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Acidic precipitation: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂, chemically corroding marble facades."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Spot the IMPOSTER in the following group of naturally occurring organic acids and their biological sources:\nGroup:\n1. Vinegar - Acetic Acid\n2. Curd - Lactic Acid\n3. Tamarind - Tartaric Acid\n4. Lemon - Hydrochloric Acid",
    options: ["Pair 1", "Pair 2", "Pair 3", "Pair 4 (Lemon contains CITRIC ACID, NOT mineral Hydrochloric Acid)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Pair 4 is an imposter: lemons contain organic Citric Acid; Hydrochloric acid is a strong mineral acid."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "A student is given three unlabeled test tubes containing: (A) Dilute Hydrochloric Acid, (B) Sodium Hydroxide solution, and (C) Distilled Water. She has ONLY Phenolphthalein indicator. How can she identify all three liquids?",
    options: [
      "Add phenolphthalein to all 3: tube turning PINK is Base (B) ; mix pink solution into remaining two: the one that de-colorizes pink back to colorless is Acid (A), and the one that simply dilutes pink is Water (C)",
      "Drink all three liquids to taste them",
      "Heat all three until they explode",
      "Phenolphthalein cannot identify them without litmus"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Sequential titration logic: base triggers pink chromophore; acid neutralizes pink back to colorless; water maintains diluted pink."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Match Column I (Natural Indicators) with Column II (Color in Acid vs Base):\n(a) Litmus Paper         -> (i) Red in Acid ; Blue in Base\n(b) Turmeric Paste       -> (ii) Yellow in Acid ; Reddish-brown in Base\n(c) China Rose Extract   -> (iii) Dark Pink/Magenta in Acid ; Green in Base\n(d) Phenolphthalein      -> (iv) Colorless in Acid ; Pink in Base",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Litmus = Red/Blue; Turmeric = Yellow/Red-brown; China rose = Magenta/Green; Phenolphthalein = Colorless/Pink."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Read the statements regarding salts formed in neutralization reactions:\nStatement 1: The reaction between a Strong Acid and a Strong Base produces a NEUTRAL salt (pH = 7, e.g. NaCl).\nStatement 2: The reaction between a Strong Acid and a Weak Base produces an ACIDIC salt (pH < 7, e.g. Ammonium Chloride).\nStatement 3: All salts are sour in taste and turn blue litmus red.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because salts have diverse taste profiles (salty, bitter, neutral) and neutral salts do not change litmus color. Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Why should sour and acidic foodstuffs (such as curd, pickles, lemon juice, vinegar) NEVER be stored in Brass, Copper, or Bronze metal containers?",
    options: [
      "Organic acids react with copper and zinc to form toxic, poisonous metallic salts that can cause severe food poisoning",
      "Because curd makes brass melt into water",
      "Because brass makes curd taste like honey",
      "Because copper turns into gold in acid"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Acidic corrosion of copper/brass yields toxic verdigris and cupric/zinc salts, causing heavy metal toxicity."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is the difference between an 'Organic Acid' and a 'Mineral Acid'?",
    options: [
      "Organic acids are naturally occurring weak acids derived from plants and animals (e.g. citric, lactic, acetic) ; Mineral acids are strong synthetic laboratory acids derived from minerals (e.g. HCl, H₂SO₄, HNO₃)",
      "Organic acids are made of rock, mineral acids are made of water",
      "Mineral acids can be safely drunk by humans",
      "Both are identical in chemical strength"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Organic acids contain carbon carboxylic chains (weak electrolytes); mineral acids are inorganic strong protic acids."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Consider four household substances:\n1. Lemon juice\n2. Soap solution\n3. Pure distilled water\n4. Baking soda solution\nWhich of these will turn Red Litmus paper BLUE?",
    options: ["Substances 2 and 4 (Soap solution and Baking soda solution, because both are basic)", "Substances 1 and 3", "Substance 1 only", "Substance 3 only"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bases turn red litmus blue: soap (alkaline fatty acid salt) and baking soda (NaHCO₃) are basic."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Why does adding a few drops of universal indicator to a solution provide far more diagnostic information than litmus paper?",
    options: [
      "Universal indicator is a blend of indicators that displays a continuous spectrum of colors corresponding to specific pH values from 0 to 14, indicating exact strength rather than just acid/base binary",
      "Because universal indicator is made of silver",
      "Because litmus paper works only in sunlight",
      "Because universal indicator turns everything gold"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Universal indicator displays a multi-spectral chromatic gradient mapping directly to the continuous 0–14 pH scale."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "Why does our stomach produce Hydrochloric Acid (HCl) naturally during digestion, and why does Hyperacidity require antacids?",
    options: [
      "Gastric HCl creates an optimal acidic environment (pH ~1.5) for the protein enzyme pepsin; excess acid secretion causes painful gastritis and heartburn, requiring basic antacids (Mg(OH)₂) to neutralize excess H⁺ ions",
      "HCl is produced to burn bones",
      "Antacids turn stomach acid into milk",
      "The stomach produces acid only when we sleep"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Physiological balance: gastric parietal cells secrete HCl for pepsinogen activation; hyperchlorhydria is buffered via basic antacids."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What is the chemical reaction when Baking Soda (Sodium Hydrogen Carbonate) reacts with Vinegar (Acetic Acid)?",
    options: [
      "NaHCO₃ + CH₃COOH -> CH₃COONa + H₂O + CO₂ (vigorous effervescence of Carbon Dioxide gas bubbles)",
      "They freeze into ice instantly",
      "They form pure oxygen gas",
      "No reaction occurs"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Carbonate-acid effervescence: NaHCO₃ + CH₃COOH → CH₃COONa (sodium acetate) + H₂O + CO₂↑."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 4: Acids, Bases and Salts",
    question: "What overarching chemical principle summarizes Chapter 4 of NCERT Class 7 Science?",
    options: [
      "Acids, Bases, and Salts form the foundational triad of chemical reactivity, where acid-base neutralization governs physiological homeostasis, agricultural soil fertility, industrial environmental safety, and natural indicator chemistry",
      "All chemicals are dangerous acids",
      "Salts cannot dissolve in water",
      "Indicators change color only in darkness"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 4 establishes the fundamental aqueous chemical taxonomy: acid-base dissociation, indicator mechanisms, and neutralization equilibria."
  }
];

console.log('Generated Class 7 Science Ch4:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/science_ch4.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
