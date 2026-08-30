import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 2: Nutrition in Animals (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "The process of taking food into the body through the mouth is called:",
    options: ["Ingestion", "Digestion", "Absorption", "Egestion"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ingestion is the initial physiological step of taking food into the buccal cavity/oral mouth."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "The breakdown of complex, insoluble food substances into simpler, soluble absorbable molecules is called:",
    options: ["Digestion", "Ingestion", "Assimilation", "Respiration"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Digestion is the biochemical and mechanical hydrolysis of complex food polymers into absorbable monomer units."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What is the continuous muscular canal starting at the buccal cavity and ending at the anus called?",
    options: ["Alimentary Canal (Digestive Tract)", "Respiratory Tract", "Circulatory System", "Spinal Cord"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The alimentary canal is the continuous ~9-metre muscular digestive tube extending from mouth to anus."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Which flat, chisel-shaped front teeth are specialized for BITING and CUTTING food?",
    options: ["Incisors", "Canines", "Premolars", "Molars"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Incisors (4 in each jaw = 8 total) have sharp chisel edges designed for cutting and biting food."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Which sharp, pointed teeth situated next to the incisors are specialized for PIERCING and TEARING tough food/meat?",
    options: ["Canines", "Incisors", "Molars", "Premolars"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Canines (2 in each jaw = 4 total) possess pointed conical cusps adapted for tearing."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Which broad, flat teeth with ridged surfaces at the back of the jaw are specialized for CHEWING and GRINDING food?",
    options: ["Premolars and Molars", "Incisors and Canines", "Only Canines", "Only Incisors"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Premolars (8 total) and Molars (12 total including wisdom teeth) crush and grind food."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What digestive fluid is secreted by the Salivary Glands into the mouth to moisten food and break down starch into simple sugars?",
    options: ["Saliva (containing Salivary Amylase)", "Bile juice", "Gastric juice", "Pancreatic juice"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Saliva contains ptyalin/amylase which initiates the chemical digestion of starch into maltose sugar."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What acid is secreted by the inner lining of the Stomach to kill harmful bacteria ingested with food and provide an acidic medium for pepsin?",
    options: ["Hydrochloric Acid (HCl)", "Sulfuric Acid", "Citric Acid", "Nitric Acid"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gastric parietal cells secrete dilute HCl (pH ~1.5–2) to kill pathogens and activate the protein enzyme pepsin."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Which is the LARGEST gland in the human body, reddish-brown in color, situated in the upper abdomen on the right side?",
    options: ["Liver", "Pancreas", "Thyroid", "Pituitary"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The liver is the heaviest internal metabolic gland (~1.5 kg in adults), secreting bile for fat emulsification."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Where is Bile juice stored in the body before being released into the small intestine?",
    options: ["Gall Bladder", "Stomach", "Pancreas", "Large Intestine"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Bile secreted by hepatic cells is concentrated and stored inside the muscular sac-like Gall Bladder."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What are the thousands of tiny, finger-like outgrowths on the inner walls of the Small Intestine that dramatically increase the surface area for food absorption called?",
    options: ["Villi (singular: Villus)", "Cilia", "Pseudopodia", "Flagella"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Intestinal villi and microvilli expand internal surface area multi-hundredfold, lined with rich capillary networks for nutrient absorption."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "How does the microscopic single-celled organism Amoeba capture and engulf its food?",
    options: [
      "By extending finger-like false feet called Pseudopodia around the food particle to form a Food Vacuole",
      "Using sharp teeth",
      "Through a wide mouth",
      "By swimming with fins"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Amoeba uses cytoplasmic streaming to extend pseudopodia, engulfing prey by phagocytosis into a food vacuole."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Why do cows, buffaloes, and other grass-eating animals chew continuously even when they are resting and not eating fresh grass?",
    options: [
      "They quickly swallow grass into the Rumen where it is partially digested into 'Cud'; later, cud returns to the mouth in small lumps for thorough chewing (Rumination)",
      "Because their teeth never stop growing",
      "Because they are chewing bubblegum",
      "To make grass colder"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ruminants regurgitate cud from the rumen back to the buccal cavity for secondary mastication and enzymatic breakdown."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Why can ruminant animals (cows, goats) digest tough plant Cellulose while human beings CANNOT digest cellulose at all?",
    options: [
      "Ruminants have a large sac-like Caecum containing specialized symbiotic anaerobic bacteria and protozoa that produce cellulose-digesting enzymes (cellulase), which humans lack",
      "Because humans have smaller teeth than cows",
      "Because human stomachs have no acid",
      "Because cows drink more water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ruminant caecum/rumen harbors cellulolytic microbes breaking β-1,4-glycosidic cellulose bonds, which humans pass as dietary fiber."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What protects the delicate inner wall lining of the Stomach from being corroded and digested by its own potent Hydrochloric Acid?",
    options: [
      "A thick, slippery protective layer of Mucous secreted by gastric mucosal cells",
      "A layer of plastic",
      "Saliva from the mouth",
      "Bile juice"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gastric epithelial mucous cells secrete a bicarbonate-rich mucosal barrier protecting against acid-peptic autodigestion."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What is the wave-like muscular contraction and relaxation of the walls of the Food Pipe (Oesophagus) that pushes swallowed food down into the stomach called?",
    options: ["Peristalsis (Peristaltic Movement)", "Circulation", "Respiration", "Filtration"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Peristalsis is the rhythmic, coordinated involuntary contraction of longitudinal and circular gastrointestinal muscles."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What crucial digestive role does Bile Juice play in the digestion of dietary FATS in the small intestine?",
    options: [
      "It emulsifies large fat globules into tiny micro-droplets, dramatically increasing the surface area for pancreatic lipase enzymes to break down fats into fatty acids and glycerol",
      "It converts fats directly into proteins",
      "It turns fats into solid bones",
      "It freezes fats so they cannot enter blood"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Bile salts (sodium glycocholate/taurocholate) act as biological detergents, emulsifying lipid triglycerides for lipase action."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What is 'Tooth Decay' (Dental Caries) and what causes it?",
    options: [
      "Bacteria present in mouth feed on leftover sugary food particles and produce corrosive ACIDS that gradually dissolve the hard calcium enamel and dentine",
      "Eating too many green vegetables",
      "Brushing teeth with toothpaste twice a day",
      "Drinking cold water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Streptococcus mutans ferment oral sucrose into lactic acid, demineralizing hydroxyapatite enamel below critical pH 5.5."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What is the primary physiological function of the LARGE INTESTINE in the human digestive system?",
    options: [
      "Absorption of water and essential mineral salts from unabsorbed, undigested food matter, forming solid fecal waste for egestion",
      "Complete digestion of proteins and fats",
      "Secretion of hydrochloric acid",
      "Pumping blood to the heart"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The colon/large intestine reabsorbs ~90% of residual luminal water and electrolytes, consolidating solid feces."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What is 'Assimilation' in animal nutrition?",
    options: [
      "The transport and utilization of absorbed nutrient molecules by body cells to build complex tissues (proteins, cell membranes) and release energy for growth",
      "The removal of undigested feces through anus",
      "Chewing food in mouth",
      "Swallowing water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Assimilation is the cellular anabolic incorporation of absorbed amino acids, monosaccharides, and fatty acids into living protoplasm."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What happens during severe Diarrhoea, and why is administering Oral Rehydration Solution (ORS) life-saving?",
    options: [
      "Severe diarrhoea causes rapid, life-threatening loss of water and vital electrolytes (dehydration); ORS restores fluid, sodium, and glucose balance rapidly",
      "ORS makes a person sleepy",
      "ORS changes blood into milk",
      "Diarrhoea is harmless and needs no water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "ORS exploits intestinal sodium-glucose co-transport mechanisms (SGLT1) to rapidly rehydrate hypovolemic patients."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "How does the unique marine animal Starfish (Asterias) feed on hard-shelled mollusks (clams and oysters)?",
    options: [
      "It pries open the shell, pops its own stomach OUT through its mouth into the shell to digest the soft animal inside, and then pulls its stomach back in",
      "It swallows the whole shell and crushes it with teeth",
      "It drills a hole with a laser",
      "It injects poison and waits for 10 years"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Starfish exhibit extraordinary eversible cardiac stomach feeding: everting stomach into bivalve shells for external enzymatic digestion."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What is the historical medical discovery made by American doctor William Beaumont in 1822 through the unhealed gunshot stomach wound of Alexis St. Martin?",
    options: [
      "He directly observed that the stomach walls churn food mechanically, secrete digestive acid/juices, and digestion proceeds only when food is exposed to these fluids",
      "He discovered that the stomach is made of bone",
      "He found that food turns into gold inside",
      "He proved the stomach has teeth"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dr. Beaumont's pioneering gastric fistula experiments laid the empirical foundation of human gastrointestinal physiology."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What are the four primary taste modalities detected by taste buds located on different regional zones of the human Tongue?",
    options: ["Sweet, Sour, Salty, and Bitter", "Hot, Cold, Wet, and Dry", "Soft, Hard, Rough, and Smooth", "Red, Blue, Green, and Yellow"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gustatory papillae taste buds detect Sweet, Salty, Sour, Bitter (and Umami) gustatory modalities."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Into what simpler, absorbable end-products are the three major food components broken down during complete digestion in the small intestine?",
    options: [
      "Carbohydrates -> Glucose ; Proteins -> Amino Acids ; Fats -> Fatty Acids and Glycerol",
      "Carbohydrates -> Starch ; Proteins -> Meat ; Fats -> Oil",
      "All three turn into pure water",
      "Carbohydrates -> Carbon ; Proteins -> Nitrogen ; Fats -> Oxygen"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Terminal enzymatic hydrolysis yields absorbable monomer units: glucose/monosaccharides, amino acids, and fatty acids/glycerol."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Why does chewing a piece of dry plain bread or boiled rice for several minutes without swallowing make it taste increasingly SWEET in the mouth?",
    options: [
      "Salivary amylase enzyme present in saliva breaks down complex, tasteless starch molecules into sweet-tasting maltose sugar",
      "Because teeth have sugar crystals",
      "Because bread absorbs sugar from air",
      "Because saliva turns into honey"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Oral mastication blends salivary amylase with starch, hydrolyzing poly-saccharides into sweet disaccharide maltose."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What is the 'Milk Teeth' set in human children, and at what age are they replaced by the permanent adult dentition?",
    options: [
      "The first temporary set of 20 deciduous teeth that erupt in infancy and fall off between the ages of 6 and 8 years",
      "Teeth made of dried milk",
      "Teeth that never fall out",
      "Adult teeth that appear at age 40"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Deciduous milk teeth (20 in total) shed sequentially between 6–8 years as secondary permanent teeth erupt."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Why do we cough or choke violently if we laugh or talk hurriedly while swallowing food?",
    options: [
      "The flap-like Epiglottis fails to close the windpipe (trachea) entrance in time, allowing food particles to enter the windpipe and triggering the coughing reflex",
      "Because food hits the ears",
      "Because teeth bite the tongue",
      "Because the stomach is full of air"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Laryngeal epiglottic closure guards the glottis during deglutition; talking diverts food into the trachea, invoking the protective cough reflex."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Read the statements:\nAssertion (A): The small intestine (~7.5 metres long) is the principal site for the COMPLETE digestion and maximum absorption of all dietary nutrients in the human body.\nReason (R): It receives digestive secretions from both the Liver (bile) and Pancreas (pancreatic amylase, trypsin, lipase) alongside its own intestinal brush-border succus entericus enzymes, and contains millions of highly vascularized villi.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The small intestine couples comprehensive enzymatic hydrolysis with expansive microvillar surface area for total absorption."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Spot the IMPOSTER in the following sequence of steps in Animal Nutrition:\nCorrect Sequence: [Ingestion -> Digestion -> Absorption -> Assimilation -> Egestion]\nGroup tested:\n1. Ingestion - Taking in food\n2. Absorption - Cellular use of food to release energy and build protoplasm\n3. Digestion - Breakdown of complex molecules\n4. Egestion - Expulsion of fecal undigested waste",
    options: [
      "Statement 1",
      "Statement 2 (Absorption is taking nutrients into blood ; Assimilation is cellular utilization)",
      "Statement 3",
      "Statement 4"
    ],
    correctAnswer: 1,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 falsely defines Absorption with the definition of Assimilation. Absorption is the passage of nutrients into intestinal capillaries/lymph."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "A student sets up two test tubes:\nTest Tube A: 1 teaspoon of boiled starch (rice water) + 2 drops of Iodine solution.\nTest Tube B: 1 teaspoon of boiled starch chewed in mouth for 4 minutes + 2 drops of Iodine solution.\nWhat will be the observed color in both tubes?",
    options: [
      "Test Tube A turns deep Blue-Black (starch present) ; Test Tube B shows NO blue-black color (remains pale yellowish-brown because salivary amylase broke starch down into sugar)",
      "Both turn deep blue-black",
      "Neither tube shows any color change",
      "Test Tube B turns blue-black and Tube A remains clear"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Salivary amylase in Test Tube B enzymatically hydrolyzes starch into non-reactive maltose, testing negative with iodine."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Match Column I (Digestive Organs) with Column II (Primary Biochemical Functions):\n(a) Buccal Cavity   -> (i) Hydrochloric acid & pepsin protein digestion\n(b) Stomach         -> (ii) Emulsification of fats via bile juice\n(c) Liver           -> (iii) Complete digestion & villi nutrient absorption\n(d) Small Intestine -> (iv) Mastication & starch digestion by salivary amylase",
    options: [
      "a-(iv), b-(i), c-(ii), d-(iii)",
      "a-(i), b-(iv), c-(iii), d-(ii)",
      "a-(ii), b-(iii), c-(iv), d-(i)",
      "a-(iii), b-(ii), c-(i), d-(iv)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mouth = starch hydrolysis; Stomach = HCl/protein; Liver = bile emulsification; Small Intestine = terminal absorption."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Read the statements regarding animal digestion:\nStatement 1: Amoeba digests its food inside a temporary intracellular food vacuole using lysosomal digestive enzymes.\nStatement 2: The small intestine in adult humans is wider in diameter than the large intestine.\nStatement 3: In ruminants, the true stomach chamber where gastric juices act on food is called the Abomasum.\nWhich statements are TRUE?",
    options: ["Statements 1 and 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because the small intestine is NARROWER in diameter than the large intestine (hence named 'small'). Statements 1 and 3 are true."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Consider the anatomical dental formula of an adult human with 32 permanent teeth:\nHow many Incisors, Canines, Premolars, and Molars are present in the ENTIRE mouth (both upper and lower jaws combined)?",
    options: [
      "Incisors: 8 ; Canines: 4 ; Premolars: 8 ; Molars: 12 (Dental formula: 2-1-2-3 / 2-1-2-3 × 2 = 32)",
      "Incisors: 4 ; Canines: 8 ; Premolars: 12 ; Molars: 8",
      "Incisors: 8 ; Canines: 8 ; Premolars: 8 ; Molars: 8",
      "Incisors: 10 ; Canines: 2 ; Premolars: 10 ; Molars: 10"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Human adult heterodont dentition: 8 incisors (2×4), 4 canines (1×4), 8 premolars (2×4), 12 molars (3×4) = 32 teeth."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Why do fatty acids and glycerol absorbed by intestinal villi enter the central Lymphatic Lacteal vessels rather than direct blood capillaries?",
    options: [
      "Water-insoluble fatty acids are re-synthesized into chylomicron lipid droplets inside epithelial cells, which are too large to cross blood capillary pores and enter the wider lacteal lymphatic system",
      "Because blood destroys all fats immediately",
      "Because lacteals are made of fat",
      "Because fats turn into blood in the liver"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chylomicrons exit enterocytes via exocytosis, entering permeable lacteal lymphatics for thoracic duct delivery to circulation."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What is the structural and functional similarity between nutrition in the single-celled Amoeba and multi-cellular Human beings?",
    options: [
      "Both require complex food intake, chemical enzymatic breakdown into soluble nutrients, cellular absorption/assimilation, and expulsion of undigested waste",
      "Both chew food with enamel teeth",
      "Both possess an 8-meter long alimentary canal",
      "Both use pseudopodia for swallowing"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Universal holozoic nutrition across metazoa and protozoa follows identical sequential biochemical phases: ingestion, digestion, absorption, assimilation, egestion."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Why does the Pancreatic Juice contain sodium bicarbonate in addition to digestive enzymes (trypsin, amylase, lipase)?",
    options: [
      "To neutralize the highly acidic chyme arriving from the stomach, creating an optimal ALKALINE medium (pH ~8.0) required for pancreatic enzymes to function",
      "To make the food spicy",
      "To cool the stomach down",
      "To produce bubbles in blood"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Pancreatic ductal HCO₃⁻ neutralizes gastric HCl, establishing an alkaline duodenal environment (pH 7.8–8.2) for enzyme kinetics."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "Consider four physiological events in human digestion:\n1. Emulsification of lipids\n2. Acidic denaturation of proteins by pepsin\n3. Amylase hydrolysis of dietary starch\n4. Reabsorption of water in the colon\nWhat is the correct chronological pathway as food passes through the digestive tract?",
    options: [
      "Event 3 (Mouth) -> Event 2 (Stomach) -> Event 1 (Small Intestine) -> Event 4 (Large Intestine)",
      "Event 1 -> Event 2 -> Event 3 -> Event 4",
      "Event 2 -> Event 1 -> Event 4 -> Event 3",
      "Event 4 -> Event 3 -> Event 2 -> Event 1"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chronological transit: Buccal starch breakdown (3) → Gastric pepsin (2) → Duodenal fat emulsification (1) → Colonic water reabsorption (4)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What is the specialized evolutionary adaptation in Hydra for capturing aquatic prey and injecting paralyzing neurotoxins?",
    options: [
      "Stinging cells called Nematocysts (Cnidocytes) located on its flexible tentacles around the mouth",
      "Sharp incisor teeth",
      "Pseudopodia",
      "A muscular tongue"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hydra fires microscopic pressurized nematocyst barbed threads containing hypnotoxin to immobilize aquatic prey."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 2: Nutrition in Animals",
    question: "What overarching biological concept summarizes Chapter 2 of NCERT Class 7 Science?",
    options: [
      "Holozoic animal nutrition is a marvel of evolutionary specialization: diverse organisms possess intricate mechanical and biochemical systems tailored to ingest, hydrolyze, assimilate nutrients, and sustain metabolic life",
      "All animals have identical stomachs and teeth",
      "Digestion only happens in mouth",
      "Animals do not require any enzymes for digestion"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 2 synthesizes comparative digestive morphology, biochemical enzyme cascades, and metabolic assimilation across the animal kingdom."
  }
];

console.log('Generated Class 7 Science Ch2:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/science_ch2.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
