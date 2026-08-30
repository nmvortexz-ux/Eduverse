import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 8: Indian Geography, Climate & Resources (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the HIGHEST mountain peak in India (located in the Karakoram range in Ladakh / Gilgit-Baltistan), standing at 8,611 metres?",
    options: ["K2 (Mount Godwin-Austen)", "Kanchenjunga", "Nanda Devi", "Annapurna"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "K2 (8,611 m) is the highest peak in India and second highest on Earth; Kanchenjunga (8,586 m) in Sikkim is the highest peak entirely in undisputed Indian territory."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the LONGEST river flowing entirely within India, having a total length of approximately 2,525 km originating from Gangotri Glacier?",
    options: ["The Ganga", "The Godavari", "The Brahmaputra", "The Indus"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Ganga (2,525 km) is India's longest and most sacred river, formed at Devprayag by the confluence of Bhagirathi and Alaknanda."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which place in the Khasi Hills of Meghalaya holds the world record for the HIGHEST AVERAGE ANNUAL RAINFALL on Earth (~11,872 mm)?",
    options: ["Mawsynram (near Cherrapunji)", "Agumbe", "Mahabaleshwar", "Shillong"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mawsynram in Meghalaya is the wettest inhabited place on planet Earth due to funnel-shaped monsoon cloud trapping in the Khasi hills."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the LARGEST peninsular river in India, often called 'Dakshin Ganga' (Ganga of the South)?",
    options: ["The Godavari (length ~1,465 km originating at Trimbakeshwar, Nashik)", "The Krishna", "The Cauvery", "The Mahanadi"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Godavari is the second-longest river in India (1,465 km) and largest in the Peninsular plateau, earning the title Dakshin Ganga."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the ONLY active volcano in India and South Asia, located in the Andaman and Nicobar Islands?",
    options: ["Barren Island Volcano", "Narcondam Island", "Deccan Traps", "Dhinodhar Hills"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Barren Island in the Andaman Sea is South Asia's only confirmed active volcanic island."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which National Park in Assam is world-famous for protecting over two-thirds of the world's population of the Great ONE-HORNED RHINOCEROS?",
    options: ["Kaziranga National Park", "Manas National Park", "Jim Corbett National Park", "Sundarbans National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kaziranga National Park (UNESCO World Heritage Site) is the global stronghold of the Indian one-horned rhinoceros (Rhinoceros unicornis)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which National Park in Gujarat is the ONLY natural habitat in the world where the majestic ASIATIC LION (Panthera leo persica) survives in the wild?",
    options: ["Gir National Park", "Ranthambore National Park", "Kanha National Park", "Bandhavgarh National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gir National Park and Wildlife Sanctuary in Saurashtra, Gujarat is the exclusive global refuge of wild Asiatic lions."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the OLDEST National Park in India, established in 1936 in Uttarakhand for the protection of the Bengal Tiger?",
    options: ["Jim Corbett National Park (originally Hailey National Park)", "Kaziranga", "Kanha", "Periyar"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Jim Corbett National Park in Nainital/Pauri Garhwal was established in 1936 and was the first to launch Project Tiger in 1973."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What is the world's largest mangrove delta forest, formed by the confluence of the Ganga, Brahmaputra, and Meghna rivers, and home to the Royal Bengal Tiger?",
    options: ["The Sundarbans Delta (Sundarbans Mangroves)", "Godavari Delta", "Mahanadi Delta", "Indus Delta"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Sundarbans (named after the dominant Sundari mangrove tree, Heritiera fomes) is the largest contiguous halophytic mangrove forest on Earth."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which parallel of latitude passes almost halfway through the middle of India, dividing the country into Tropical and Sub-tropical zones?",
    options: ["The Tropic of Cancer (23° 30' N)", "The Equator (0°)", "The Tropic of Capricorn (23° 30' S)", "The Arctic Circle (66° 30' N)"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Tropic of Cancer (23°30'N) passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the LARGEST state in India in terms of geographical land area?",
    options: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rajasthan is India's largest state by area (~342,239 sq km), covering 10.4% of the country's total landmass."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which meridian is taken as the Standard Meridian of India to determine Indian Standard Time (IST = UTC + 5:30), passing through Mirzapur in Uttar Pradesh?",
    options: ["82° 30' E Longitude", "80° E Longitude", "90° E Longitude", "75° E Longitude"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "82°30' E longitude is the Standard Meridian for IST, located 5 hours 30 minutes ahead of Greenwich Mean Time (GMT)."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the HIGHEST peak in the Western Ghats (and in the entire Peninsular South India), located in the Anamalai Hills of Kerala at 2,695 metres?",
    options: ["Anamudi (2,695 m)", "Doda Betta (Nilgiris)", "Kalsubai", "Mahendragiri"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Anamudi ('Elephant's head', 2,695 m) in Kerala is the undisputed highest peak in South India and the Western Ghats."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What are the three parallel longitudinal ranges of the mighty Himalayas from north to south?",
    options: [
      "1. Great Himalayas / Inner Himalayas (Himadri) ; 2. Middle / Lesser Himalayas (Himachal) ; 3. Outer Himalayas (Shiwalik)",
      "Vindhyas, Satpuras, and Aravallis",
      "Karakoram, Ladakh, and Zanskar",
      "Western Ghats, Eastern Ghats, and Nilgiris"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Himalayan tripartite physiography: Himadri (highest perennial snow ranges, >6,000 m), Himachal (hill resorts, 3,700–4,500 m), and Shiwaliks (outer foothills, 900–1,100 m)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the OLDEST fold mountain range in India (and one of the oldest in the world), running from Gujarat across Rajasthan to Delhi?",
    options: ["The Aravalli Range (highest peak Guru Shikhar, 1,722 m)", "The Himalayan Range", "The Vindhya Range", "The Satpura Range"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Aravalli Range is a relict Precambrian fold belt eroded over hundreds of millions of years, terminating near Mount Abu."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which two major Peninsular Indian rivers flow WESTWARDS through fault-formed Rift Valleys and drain into the Arabian Sea without forming deltas?",
    options: ["The Narmada and the Tapi (Tapti)", "The Godavari and Krishna", "The Ganga and Yamuna", "The Mahanadi and Cauvery"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Narmada (in rift between Vindhyas and Satpuras) and Tapi flow westwards into the Gulf of Khambhat, creating estuaries rather than deltas."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What narrow maritime strait and shallow sea separate India from Sri Lanka?",
    options: ["Palk Strait and Gulf of Mannar", "Malacca Strait", "Strait of Hormuz", "Ten Degree Channel"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Palk Strait and Gulf of Mannar lie between Tamil Nadu (India) and the Jaffna peninsula of Sri Lanka."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which ocean channel separates the Andaman Islands from the Nicobar Islands in the Bay of Bengal?",
    options: ["The Ten Degree Channel (10° N Latitude)", "The Nine Degree Channel", "The Eight Degree Channel", "The Palk Strait"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 10° N parallel Ten Degree Channel bisects the Andaman archipelago to the north from the Nicobar group to the south."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What is the coral island archipelago of India situated in the Arabian Sea, with its administrative capital at Kavaratti?",
    options: ["Lakshadweep Islands (comprising 36 coral atolls and reefs)", "Andaman and Nicobar Islands", "Majuli Island", "Elephanta Island"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Lakshadweep is a pristine union territory consisting of 36 biogenic coral atolls, submerged banks, and coral sand cays."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What is the world's LARGEST inhabited RIVER ISLAND, situated in the Brahmaputra River in Assam?",
    options: ["Majuli Island", "Srirangam Island", "Divar Island", "Munroe Island"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Majuli in the Brahmaputra is the world's largest riverine island (UNESCO recognized) and a celebrated seat of Assamese Neo-Vaishnavite Satra culture."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the LARGEST freshwater natural lake in India, located in the Bandipora district of Jammu and Kashmir?",
    options: ["Wular Lake", "Dal Lake", "Chilika Lake", "Loktak Lake"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Wular Lake (fed by the Jhelum river) is India's largest tectonic freshwater lake."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which is the LARGEST coastal brackish water lagoon lake in India (and second largest in the world), located in Odisha?",
    options: ["Chilika Lake", "Pulicat Lake", "Vembanad Lake", "Kolleru Lake"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Chilika Lake in Odisha is Asia's largest brackish lagoon, celebrated for wintering migratory waterfowl and Irrawaddy dolphins."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What is the unique 'Floating National Park' in the world (Keibul Lamjao National Park) situated on Loktak Lake in Manipur, home to the endangered Sangai brow-antlered deer?",
    options: ["Keibul Lamjao National Park (famous for floating Phumdis)", "Kaziranga", "Namdapha", "Nokrek"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Keibul Lamjao on Loktak Lake is the world's only floating national park, supported by floating biomass mats known as Phumdis."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What are the two major seasonal branches of the advancing South-West Summer Monsoon that brings over 75% of India's annual rainfall between June and September?",
    options: [
      "The Arabian Sea Branch and the Bay of Bengal Branch",
      "The Northern Branch and Southern Branch",
      "The Himalayan Branch and Thar Branch",
      "The Pacific Branch and Atlantic Branch"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The SW monsoon splits into the Arabian Sea branch (striking the Western Ghats) and the Bay of Bengal branch (striking the Northeast and Gangetic plains)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which Indian coastal region receives the majority of its annual rainfall during the RETREATING North-East Winter Monsoon (October–November)?",
    options: [
      "The Coromandel Coast (Tamil Nadu and coastal Andhra Pradesh)",
      "The Malabar Coast",
      "The Konkan Coast",
      "The Gujarat Coast"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Retreating NE monsoon winds pick up moisture over the Bay of Bengal and deposit heavy winter precipitation along the Coromandel coast."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What are the four physical soil zones of the Northern Plains from north to south along the Himalayan foothills?",
    options: [
      "Bhabar (pebble zone where streams disappear) -> Terai (marshy wet jungle) -> Bhangar (older alluvial terrace) -> Khadar (new fertile flood plain)",
      "Desert -> Forest -> Sand -> Mud",
      "Black soil -> Red soil -> Laterite -> Peaty",
      "Mountain -> River -> Ocean -> Delta"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Northern plains geomorphology: Bhabar (porous gravels) → Terai (swampy re-emergence) → Bhangar (older alluvium) → Khadar (annual renewed silt)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Which fertile soil formed from the weathering of ancient Deccan lava flows (basalt) is ideal for growing COTTON in Maharashtra and Gujarat?",
    options: ["Black Soil (Regur Soil / Black Cotton Soil)", "Alluvial Soil", "Laterite Soil", "Red Soil"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Regur (Black Soil) is rich in clay minerals, highly moisture-retentive, and renowned for cotton agriculture."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Where do the Western Ghats and the Eastern Ghats mountain ranges converge in South India?",
    options: ["The Nilgiri Hills (Blue Mountains - with Dodabetta peak)", "The Cardamom Hills", "The Anamalai Hills", "The Shevaroy Hills"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Western and Eastern Ghats meet at the Nilgiri orographic node in Tamil Nadu/Karnataka/Kerala."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Read the statements:\nAssertion (A): The Western Ghats (Sahyadri) receive torrential orographic rainfall on their western windward slopes, while the interior Deccan Plateau remains in a semi-arid Rain-Shadow zone.\nReason (R): High elevation escarpments of the Western Ghats force incoming moisture-laden Arabian Sea monsoon winds to rise, cool adiabatically, and condense into rain on the windward side, descending as dry warm winds on the leeward plateau.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Classic orographic rainfall dynamics: windward escarpments (e.g. Mahabaleshwar ~6,000 mm) vs leeward rain shadow (e.g. Pune ~700 mm)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Spot the IMPOSTER in the following group of Major River Tributaries and their Master River systems in India:\nGroup:\n1. Yamuna, Son, Ghaghara, Gandak, Kosi - Ganga River System\n2. Jhelum, Chenab, Ravi, Beas, Satluj - Indus River System\n3. Dibang, Lohit, Subansiri, Manas, Teesta - Brahmaputra River System\n4. Tungabhadra, Bhima, Koyna - Narmada River System",
    options: ["System 1", "System 2", "System 3", "System 4 (Tungabhadra, Bhima, and Koyna are major tributaries of the KRISHNA RIVER, not the Narmada)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Tungabhadra, Bhima, Ghataprabha, Malaprabha, and Koyna are tributaries of the Krishna River."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What are the 'Western Disturbances' that bring crucial winter rainfall and snowfall to Northwest India (Punjab, Haryana, Jammu & Kashmir, Himachal)?",
    options: [
      "Extratropical cyclonic low-pressure storms originating over the Mediterranean Sea, steered into northwest India by the Subtropical Westerly Jet Stream",
      "Dust storms blowing from the Thar desert",
      "Cyclones rising from the Indian Ocean",
      "Winds blowing from the South Pole"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mediterranean extratropical depressions transported via westerly jet streams sustain the vital winter Rabi wheat harvest."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Match Column I (Indian Biosphere Reserves / National Parks) with Column II (Keystone Flora/Fauna & Geographic Features):\n(a) Gulf of Mannar       -> (i) Marine Biosphere Reserve famous for Dugongs (Sea Cows) & coral reefs\n(b) Sundarbans           -> (ii) Mangrove ecosystem, Royal Bengal Tiger, Sundari trees & estuarine crocodiles\n(c) Great Rann of Kutch  -> (iii) White salt desert sanctuary of the Indian Wild Ass (Khur)\n(d) Hemis National Park  -> (iv) High-altitude Ladakh park, global capital of the Snow Leopard",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Gulf of Mannar = Dugongs; Sundarbans = Mangrove tigers; Rann of Kutch = Wild Ass; Hemis = Snow Leopards."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Read the statements regarding India's geomorphology:\nStatement 1: The Peninsular Plateau is an ancient, rigid Gondwanaland continental shield of crystalline granites and gneisses.\nStatement 2: The Himalayas are young, seismically active fold mountains with deep V-shaped valleys and rapid glacial erosion.\nStatement 3: The Thar Desert was formed by glaciers melting 10 years ago.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an absurd falsehood. Statement 1 (Precambrian Gondwana shield) and Statement 2 (Tertiary fold orogeny) represent bedrock physical geology."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What is the strategic and ecological significance of the 'Siliguri Corridor' (often called the 'Chicken's Neck')?",
    options: [
      "A narrow strip of land in West Bengal (~22 km wide at its narrowest) connecting the entire eight states of Northeast India with the rest of mainland India",
      "A bridge between India and Sri Lanka",
      "A mountain pass to Afghanistan",
      "A canal through the Thar desert"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Siliguri Corridor is the critical geopolitical chokepoint linking mainland India to the eight northeastern sister states."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Why is the Chota Nagpur Plateau in eastern India celebrated as the 'Ruhr of India'?",
    options: [
      "It contains the richest concentration of metallic and mineral wealth in India, including massive reserves of Iron Ore, Coal (Jharia, Bokaro), Mica, Bauxite, and Uranium",
      "Because it has the most rivers",
      "Because it is covered in snow all year",
      "Because it produces gold only"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Like Germany's Ruhr basin, the Chota Nagpur plateau is India's mineral heartland, powering the nation's steel and heavy manufacturing."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Consider four major multi-purpose river valley projects in India:\n1. Bhakra Nangal Dam (Satluj River - Punjab/Himachal)\n2. Tehri Dam (Bhagirathi River - Uttarakhand, highest dam in India)\n3. Hirakud Dam (Mahanadi River - Odisha, longest earthen dam)\n4. Sardar Sarovar Dam (Narmada River - Gujarat)\nWhat primary developmental benefits do these dams provide?",
    options: [
      "Hydroelectric power generation, extensive canal irrigation networks for agriculture, flood mitigation, and industrial drinking water security",
      "They stop all rivers from flowing",
      "They are built only for boating tourist sports",
      "They turn fresh water into salt water"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Multi-purpose hydro projects (Nehru's 'Temples of Modern India') integrate hydroelectric generation, perennial irrigation, and flood mitigation."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What is the 'Tropical Evergreen Forest' biome in India (found in the Western Ghats, Northeast India, and Andaman & Nicobar)?",
    options: [
      "Dense, multi-layered rain forests receiving >200 cm rainfall with trees (Rosewood, Mahogany, Ebony) that do not shed leaves simultaneously, remaining green throughout the year",
      "Forests with thorny bushes and no leaves",
      "Forests that only grow in snow",
      "Forests of pure pine needles"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Tropical evergreen rainforests exhibit complex vertical stratification, dense multi-tiered canopies, and immense biodiversity."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What is the 'Indira Point' in the Nicobar Islands?",
    options: [
      "The southernmost geographic point of the sovereign territory of the Republic of India (located at 6° 45' N on Great Nicobar Island)",
      "The northernmost point in Kashmir",
      "The highest peak in Rajasthan",
      "The easternmost point in Arunachal Pradesh"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Indira Point on Great Nicobar (submerged partially in the 2004 tsunami) marks India's southernmost geographical point."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "Why is the Western Ghats recognized by UNESCO as one of the world's eight 'Hottest Hotspots' of Biological Diversity?",
    options: [
      "It harbors thousands of endemic species of flora, fauna, birds, amphibians, and reptiles found nowhere else on Earth, amidst high anthropogenic habitat pressure",
      "Because it is the hottest desert on Earth",
      "Because it has no trees",
      "Because it has active gold mines"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Western Ghats harbor immense floral/faunal endemism (Lion-tailed macaque, Nilgiri tahr, Malabar gliders) under acute conservation vulnerability."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 8: Indian Geography, Physical Features, Climate & Resources",
    question: "What overarching geographic reality defines the Indian Subcontinent in Chapter 8 of General Knowledge?",
    options: [
      "An extraordinary physical mosaic uniting towering Himalayan snow ranges, fertile riverine alluvial plains, ancient mineral-rich plateaus, sun-drenched coastlines, and monsoon rhythms that sustain India's immense biological and civilizational vitality",
      "A uniform desert with no physical variation",
      "An island completely cut off from the rest of the world",
      "A land without any rivers or forests"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 8 synthesizes India's diverse physiography, drainage basins, tropical monsoon meteorology, and precious mineral-ecological patrimony."
  }
];

console.log('Generated Class 7 GK Ch8:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/gk_ch8.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
