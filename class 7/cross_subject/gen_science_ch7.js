import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 7: Transportation in Animals and Plants (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What is the fluid connective tissue in humans that transports oxygen, nutrients, hormones, and metabolic wastes throughout the body?",
    options: ["Blood", "Lymph", "Saliva", "Urine"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Blood is the primary circulating fluid comprising plasma, erythrocytes (RBCs), leukocytes (WBCs), and thrombocytes (platelets)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What is the straw-colored fluid matrix part of blood in which all blood cells are suspended?",
    options: ["Plasma (constituting ~55% of blood volume)", "Hemoglobin", "Platelet", "Serum"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Plasma is the liquid extracellular matrix containing 90–92% water, dissolved proteins, glucose, minerals, and waste products."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Which red iron-containing protein pigment in Red Blood Cells (RBCs) binds with Oxygen to carry it to all body cells?",
    options: ["Hemoglobin", "Chlorophyll", "Myoglobin", "Keratin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Hemoglobin in RBCs binds O₂ to form oxyhemoglobin, imparting the characteristic red color to blood."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Which blood cells act as the body's immune soldiers, fighting and destroying disease-causing germs and foreign microbes?",
    options: ["White Blood Cells (WBCs / Leukocytes)", "Red Blood Cells (RBCs)", "Platelets", "Plasma"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "White Blood Cells (Leukocytes) produce antibodies and perform phagocytosis to neutralize pathogens."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Which cellular fragments in blood form a dark red clot over cuts and wounds to prevent excessive fatal bleeding?",
    options: ["Platelets (Thrombocytes)", "Red Blood Cells", "White Blood Cells", "Hemoglobin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Platelets initiate the coagulation cascade, forming fibrin mesh clots to seal broken blood vessels."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Which blood vessels carry oxygen-rich blood away from the heart to all parts of the body under high pressure, having thick elastic walls?",
    options: ["Arteries", "Veins", "Capillaries", "Vena Cava"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Arteries possess thick, muscular, elastic walls to withstand pulsatile high hydrostatic systolic blood pressure from the heart."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Which blood vessels carry carbon dioxide-rich deoxygenated blood from all organs back towards the heart, having internal VALVES to prevent backflow?",
    options: ["Veins", "Arteries", "Aorta", "Capillaries"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Veins are thin-walled, low-pressure vessels equipped with unidirectional semilunar valves ensuring forward blood flow to the heart."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What is the rhythmic throbbing felt in the radial artery at the wrist caused by blood surging through arteries called?",
    options: ["Pulse (normal resting rate is 72 to 80 beats per minute)", "Blood Pressure", "Heart Murmur", "Respiration"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The arterial pulse reflects ventricular systole; normal human resting pulse rate ranges between 72–80 bpm."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "How many muscular pumping chambers are there in the human heart to prevent the mixing of oxygenated and deoxygenated blood?",
    options: [
      "4 Chambers (Two upper Atria and two lower Ventricles separated by a muscular Septum)",
      "2 Chambers",
      "3 Chambers",
      "6 Chambers"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The human heart has 4 chambers: Right/Left Atria and Right/Left Ventricles, partitioned by an interventricular septum."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What medical acoustic instrument invented by René Laennec in 1816 is used by doctors to amplify and listen to heartbeat sounds?",
    options: ["Stethoscope", "Sphygmomanometer", "Thermometer", "Microscope"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A stethoscope uses a chest diaphragm, acoustic tube, and earpieces to auscultate cardiac valve closure sounds (Lub-Dub)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Which specialized vascular conducting tissue transports Water and dissolved mineral nutrients UPWARDS from roots to leaves in plants?",
    options: ["Xylem (Vascular tissue)", "Phloem", "Cortex", "Stomata"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Xylem vessels form a continuous microscopic hydraulic pipeline conducting water and minerals from soil to leaves."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Which vascular conducting tissue transports synthesized Food (sucrose/glucose) from the green leaves to all non-photosynthetic parts of the plant?",
    options: ["Phloem (Translocation)", "Xylem", "Root hairs", "Epidermis"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Phloem sieve tubes and companion cells translocate organic food bidirectional throughout the plant."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Which is the ONLY artery in the human body that carries DEOXYGENATED (CO₂-rich) blood?",
    options: [
      "The Pulmonary Artery (carries deoxygenated blood from the right ventricle to the lungs)",
      "The Aorta",
      "The Renal Artery",
      "The Carotid Artery"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "By definition, arteries carry blood away from the heart; the pulmonary artery delivers deoxygenated venous blood to pulmonary alveoli."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Which is the ONLY vein in the human body that carries OXYGENATED (O₂-rich) blood?",
    options: [
      "The Pulmonary Vein (carries oxygenated blood from the lungs back to the left atrium of the heart)",
      "The Superior Vena Cava",
      "The Inferior Vena Cava",
      "The Jugular Vein"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Pulmonary veins drain oxygenated blood from pulmonary capillaries directly into the left atrium."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What are the microscopic, extremely thin single-cell-walled blood vessels connecting arterioles to venules, where diffusion of gases, glucose, and wastes occurs?",
    options: ["Capillaries", "Arteries", "Veins", "Aorta"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Capillaries have single-cell endothelial walls (diameter ~7-8 µm) permitting rapid nutrient, waste, and gas exchange."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What is the biological mechanism of 'Transpiration' in plants and what vital cooling/suction force does it generate?",
    options: [
      "Evaporation of water vapor through stomata creates a continuous negative suction pressure (Transpirational Pull) that pulls water hundreds of feet high in tall trees while cooling the foliage",
      "Absorption of carbon dioxide by roots",
      "Release of oxygen into the soil",
      "Transport of sugars to roots"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Transpiration generates negative hydrostatic tension (transpirational pull / cohesion-tension theory) elevating sap through xylem."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What is the main toxic nitrogenous excretory waste filtered and removed from human blood by the Kidneys?",
    options: ["Urea", "Uric Acid only", "Ammonia gas only", "Carbon Dioxide"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Human excretion is ureotelic: hepatic deamination converts toxic ammonia into urea, which is cleared by renal filtration."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What is the average normal chemical composition of human Urine excreted by a healthy adult (approx. 1.0 to 1.8 liters per day)?",
    options: [
      "95% Water, 2.5% Urea, and 2.5% other metabolic waste salts and minerals",
      "50% Water and 50% Sugar",
      "100% pure Water",
      "90% Acid and 10% Blood"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Normal urine consists of ~95% water, 2.5% urea, and 2.5% dissolved mineral ions (sodium, potassium, creatinine, phosphates)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What is the correct pathway of Urine from formation to discharge in the human excretory system?",
    options: [
      "Kidneys -> Ureters (muscular tubes) -> Urinary Bladder (storage pouch) -> Urethra (muscular exit opening)",
      "Kidneys -> Urethra -> Bladder -> Ureters",
      "Bladder -> Kidneys -> Ureters -> Urethra",
      "Ureters -> Kidneys -> Bladder -> Urethra"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Renal glomeruli filter blood → nephron tubules drain into ureters → stored in urinary bladder → voided via urethra."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What is the medical procedure of 'Dialysis' used when a patient experiences acute or chronic Renal (Kidney) Failure?",
    options: [
      "An artificial kidney machine periodically filters toxic nitrogenous wastes, urea, and excess salts from the patient's blood through semi-permeable membranes",
      "Injecting water directly into the heart",
      "Pumping oxygen into the stomach",
      "A surgery to replace bones"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hemodialysis circulates patient blood through dialyzer semi-permeable cartridges to clear metabolic toxins and normalize electrolytes."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Why do we develop white salty patches on our cotton clothes under the armpits on hot summer days?",
    options: [
      "Sweat glands secrete sweat containing water and dissolved mineral SALTS (NaCl) ; as water evaporates to cool the body, white solid salt crystals are left behind on fabric",
      "Dust settles from the ceiling",
      "The cloth bleach dissolves",
      "Bacteria produce salt"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Eccrine sweat evaporation cools the epidermis (latent heat of vaporization), leaving solute sodium chloride residues on clothing."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Why do simple aquatic organisms like Sponges (Porifera) and Hydra NOT possess any specialized circulatory system or blood?",
    options: [
      "Water circulating through their porous body cavities continuously brings food and oxygen directly to all cells and washes away carbon dioxide and waste products",
      "Because they have no cells",
      "Because they live in trees",
      "Because they produce pure gold"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sponges and Hydra have diploblastic body plans where ambient aquatic currents directly service cellular diffusion without vascular tissue."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "How do Root Hairs in plants increase the absorption of water and dissolved minerals from the soil?",
    options: [
      "They massively increase the total surface area of root epidermal contact with soil capillary water films, facilitating rapid Osmosis",
      "They drill deep holes like metal drills",
      "They produce heat to melt soil",
      "They turn soil into sand"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Unicellular root hair extensions amplify root surface area thousands-fold, driving water uptake via osmotic potential gradients."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "In what form do Birds, Lizards, and Snakes (terrestrial reptiles) excrete nitrogenous waste to conserve precious body water?",
    options: [
      "Semi-solid white paste composed of insoluble URIC ACID",
      "Liquid ammonia in large water volume",
      "Liquid urea",
      "Dry carbon powder"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Uricotelic adaptation: birds and reptiles precipitate non-toxic insoluble uric acid paste to minimize evaporative water loss."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "In what form do aquatic freshwater Fish excrete their nitrogenous waste directly into surrounding water?",
    options: [
      "Readily soluble gaseous AMMONIA (Ammonotelic excretion)",
      "Insoluble uric acid crystals",
      "Solid urea pellets",
      "Gaseous nitrogen"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ammonotelic fish diffuse toxic ammonia directly across branchial gill membranes into the surrounding aquatic sink."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What is the primary function of the 'Septum' dividing the left and right halves of the human heart?",
    options: [
      "It acts as a complete muscular dividing wall preventing oxygen-rich blood on the left side from mixing with carbon dioxide-rich blood on the right side",
      "It filters water from blood",
      "It cools the heart muscle",
      "It produces new red blood cells"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The cardiac septum enforces complete separation of pulmonary and systemic circulations, maximizing arterial oxygen saturation."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What makes the 'Lub-Dub' sound heard through a stethoscope during each complete cardiac cycle?",
    options: [
      "The rhythmic, rapid closure of cardiac valves (Atrioventricular valves snapping shut for 'Lub', and Semilunar aortic/pulmonary valves for 'Dub')",
      "Blood splashing against the ribs",
      "Air rushing into the lungs",
      "The heart rubbing against the stomach"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "First heart sound S₁ ('Lub') = AV (tricuspid/mitral) valve closure; Second sound S₂ ('Dub') = semilunar (aortic/pulmonic) valve closure."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What happens when a leafy balsam plant stem is kept in water colored with Red Ink (Eosin) for a few hours?",
    options: [
      "The red colored water travels UPWARDS through the Xylem vessels, staining the stem vascular bundles and leaf veins distinctly red",
      "The leaves turn completely black",
      "The plant catches fire",
      "The roots dissolve"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Classic xylem transport demonstration: capillary xylem tracheary elements conduct eosin dye upwards into leaf petiole veins."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Read the statements:\nAssertion (A): Human systemic arterial circulation maintains complete double circulation (Pulmonary and Systemic loops).\nReason (R): Blood passes through the human 4-chambered heart TWICE during each complete circuit of the body, preventing any mixing of oxygenated and deoxygenated blood and providing high-pressure oxygen delivery to endothermic tissues.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Double circulation decouples low-pressure pulmonary gas exchange from high-pressure systemic perfusion in warm-blooded homeotherms."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Spot the IMPOSTER in the following group of Nitrogenous Excretory Products and their animal classifications:\nGroup:\n1. Aquatic bony fish - Ammonia (Ammonotelic)\n2. Adult humans and mammals - Urea (Ureotelic)\n3. Birds and Desert Lizards - Uric Acid (Uricotelic)\n4. Earthworms and Frogs - Pure Gold crystals only",
    options: ["Classification 1", "Classification 2", "Classification 3", "Classification 4 (Frogs and Earthworms excrete Urea and Ammonia, NEVER gold)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Classification 4 is an absurd impossibility: amphibians and annelids excrete urea and ammonia according to hydration state."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Trace the EXACT pathway of deoxygenated blood entering the human heart from body tissues until it leaves as oxygenated blood for systemic distribution:\nSequence:\n1. Vena Cava -> Right Atrium -> Right Ventricle\n2. Pulmonary Artery -> Lungs (Oxygenation)\n3. Pulmonary Vein -> Left Atrium -> Left Ventricle\n4. Aorta -> Systemic Arteries to Body Organs\nWhich chamber of the heart has the THICKEST, most powerful muscular myocardium wall to pump blood to the entire body?",
    options: [
      "The LEFT VENTRICLE (which pumps oxygenated blood under immense pressure into the systemic Aorta)",
      "The Right Atrium",
      "The Left Atrium",
      "The Right Ventricle"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The left ventricle possesses a thick muscular wall (3× thicker than the right) to overcome total systemic vascular peripheral resistance."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Match Column I (Vascular / Circulatory Components) with Column II (Physiological Functions):\n(a) Xylem Tracheids & Vessels -> (i) Unidirectional upward conduction of water & minerals via transpirational tension\n(b) Phloem Sieve Tubes         -> (ii) Bidirectional translocation of synthesized sucrose/photosynthates\n(c) Blood Platelets            -> (iii) Hemostasis and thromboplastin cascade for clot formation\n(d) Renal Nephrons             -> (iv) Ultrafiltration and selective reabsorption to produce urine",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Xylem = water tension; Phloem = food translocation; Platelets = coagulation; Nephrons = renal filtration."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Read the statements regarding physiological transport in plants:\nStatement 1: Transpiration creates a negative tension (suction pull) that can elevate water columns exceeding 100 metres in giant Sequoia trees.\nStatement 2: Osmotic absorption in root hairs is driven by higher solute concentration inside root cells compared to soil water.\nStatement 3: Phloem vessels only conduct water downwards and are made of dead hollow stone cells.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (phloem contains living sieve tubes translocating food bidirectionally; dead tracheary cells compose xylem). Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What physical-chemical properties of water molecules explain how tall redwood trees sustain unbroken water columns in xylem without snapping under massive tension?",
    options: [
      "Cohesion (mutual attraction between water molecules) and Adhesion (attraction between water molecules and hydrophilic xylem cellulose walls)",
      "Water molecules turning into ice inside the stem",
      "Magnetic attraction between roots and clouds",
      "Air bubbles pushing the water"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Dixon-Joly Cohesion-Tension theory: hydrogen bonding provides immense tensile strength (>100 atm) resisting cavitation."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Why is William Harvey (1578–1657) celebrated as a founding father of modern physiology for his discovery of blood circulation?",
    options: [
      "He disproved Galen's 1,400-year doctrine by experimentally demonstrating that the heart acts as a muscular pump circulating a fixed volume of blood unidirectionally through closed circuits of arteries and veins",
      "He invented blood transfusions in 1500",
      "He discovered that blood has no cells",
      "He proved that the liver pumps blood to the lungs"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Harvey's 'De Motu Cordis' (1628) established closed unidirectional hemodynamics driven by mechanical ventricular pumping."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Consider four physiological events:\n1. Glomerular Ultrafiltration in Kidneys\n2. Transpirational pull in Leaf Stomata\n3. Clotting of blood by Platelet Fibrinogen\n4. Phagocytosis of bacteria by Macrophages/WBCs\nWhich of these are ESSENTIAL HOMEOSTATIC EXCRETORY OR VASCULAR DEFENSE MECHANISMS?",
    options: ["All 1, 2, 3, and 4", "1 and 2 only", "3 and 4 only", "1 and 3 only"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "All four represent core biological regulatory systems: renal clearance, plant sap ascent, hemostasis, and cellular immunology."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What happens during 'Kidney Dialysis' when blood is drawn from a patient's radial artery?",
    options: [
      "Blood is mixed with an anticoagulant (heparin), passed through dialyzing cellophane tubes bathed in isotonic dialyzing fluid lacking nitrogenous wastes, where urea diffuses out, and purified blood is returned via a vein",
      "Blood is boiled to kill germs",
      "Blood is replaced entirely with water",
      "All white blood cells are removed permanently"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Dialysis relies on concentration gradients across semi-permeable cellophane: metabolic wastes diffuse into dialysate while cellular components return safely."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "Why does the left side of the heart handle ONLY oxygenated blood while the right side handles ONLY deoxygenated blood in mammals and birds?",
    options: [
      "High metabolic rates of warm-blooded endotherms require maximum oxygen supply to generate cellular body heat and sustain constant body temperature",
      "Because mammals have no veins",
      "Because birds have no lungs",
      "To keep the lungs cold"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Endothermic homeothermy demands high ATP turnover, requiring complete separation of systemic and pulmonary hemodynamics."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What would happen to a plant if all its Phloem tissue were carefully removed in a continuous ring around the stem (Girdling / Ringing experiment)?",
    options: [
      "Photosynthesized sugars cannot reach the subterranean roots; the roots starve and die first, followed by the death of the entire plant",
      "The plant grows twice as fast",
      "Water immediately stops reaching the leaves",
      "The leaves turn into flowers"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Malpighi's girdling experiment proves phloem translocates carbohydrates: removing the phloem ring starves root parenchyma, collapsing active ion uptake."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 7: Transportation in Animals and Plants",
    question: "What overarching biological principle is established in Chapter 7 of NCERT Class 7 Science?",
    options: [
      "Complex multicellular organisms require specialized vascular internal transport networks (blood circulation and plant vascular bundles) and waste excretion systems to maintain cellular homeostasis, nutrient delivery, and metabolic balance across trillions of cells",
      "That small animals do not need any food",
      "That plants have hearts like mammals",
      "That blood only moves when humans run"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 7 synthesizes organismal transport and excretion: convective hemodynamics, renal ultrafiltration, and botanical vascular sap translocation."
  }
];

console.log('Generated Class 7 Science Ch7:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/science_ch7.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
