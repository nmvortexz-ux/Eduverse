import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 4: Wildlife & National Parks of India (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the National Animal of India, symbolizing grace, strength, agility, and enormous power?",
    options: ["Royal Bengal Tiger (Panthera tigris)", "Asiatic Lion", "Indian Elephant", "Snow Leopard"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Royal Bengal Tiger was declared the National Animal of India in April 1973 with the launch of Project Tiger."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the National Bird of India, known for its iridescent blue-green plumage and fan-shaped crest?",
    options: ["Indian Peacock (Pavo cristatus)", "Great Indian Bustard", "Indian Roller", "Himalayan Monal"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Indian Peacock was declared the National Bird of India in 1963 due to its cultural integration and elegance."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the National Aquatic Animal of India, found in the freshwater river system of the Ganga-Brahmaputra?",
    options: ["Ganges River Dolphin (Platanista gangetica)", "Olive Ridley Sea Turtle", "Gharial", "Blue Whale"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Declared in 2009, the Ganges River Dolphin is an ultrasonic-navigating freshwater cetacean indicator of river health."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the National Heritage Animal of India, declared in 2010 to promote its conservation?",
    options: ["Indian Elephant (Elephas maximus indicus)", "One-Horned Rhinoceros", "Wild Water Buffalo", "Blackbuck"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Indian Elephant was declared the National Heritage Animal of India in October 2010."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the oldest and first National Park established in India (established in 1936 in Uttarakhand)?",
    options: ["Jim Corbett National Park (originally Hailey National Park)", "Kaziranga National Park", "Gir National Park", "Kanha National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Established in 1936 in Nainital district, Uttarakhand, Corbett is India's first national park."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which Indian national park is the ONLY natural home of the endangered Asiatic Lion in the wild?",
    options: ["Gir National Park (Gujarat)", "Ranthambore National Park", "Bandhavgarh National Park", "Periyar National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gir National Park in Saurashtra, Gujarat houses the world's only surviving population of Asiatic lions."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which national park in Assam is famous for hosting the world's largest population of the Great Indian One-Horned Rhinoceros?",
    options: ["Kaziranga National Park", "Manas National Park", "Sundarbans National Park", "Dudhwa National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kaziranga is a UNESCO World Heritage Site in Golaghat/Nagaon districts, Assam, protecting over 2,600 one-horned rhinos."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the National Tree of India, famous for its aerial prop roots and vast shade-giving canopy?",
    options: ["Indian Banyan Tree (Ficus benghalensis / Bargad)", "Neem Tree", "Peepal Tree", "Teak Tree"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The immortal Banyan tree with infinite branching prop roots symbolizes eternal life in Indian cultural tradition."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the National Flower of India, which blooms in sacred waters symbolizing purity and divinity?",
    options: ["Lotus (Nelumbo nucifera)", "Rose", "Jasmine", "Marigold"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The sacred Lotus represents spiritual purity, enlightenment, and untouched beauty in Indian philosophy."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the National Reptile of India, recognized as the world's longest venomous snake?",
    options: ["King Cobra (Ophiophagus hannah)", "Indian Krait", "Russell's Viper", "Indian Python"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The King Cobra, capable of reaching lengths up to 5.5 meters in Western Ghats and rainforests, is India's national reptile."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which Indian state has the LARGEST number of National Parks and Tiger Reserves in the country?",
    options: ["Madhya Pradesh (the 'Tiger State of India')", "Maharashtra", "Karnataka", "Uttarakhand"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Madhya Pradesh leads India with 12 National Parks (Kanha, Bandhavgarh, Pench, Panna, Kuno) and over 780 tigers."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which high-altitude national park in Ladakh is the LARGEST national park in India by total area?",
    options: ["Hemis National Park (4,400 km²)", "Desert National Park", "Gangotri National Park", "Namdapha National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Hemis National Park in Ladakh spans over 4,400 km² and is world-famous as the global stronghold of the Snow Leopard."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which wildlife sanctuary in Kerala is situated around a scenic artificial lake and famous for wild Asian elephants and boat safaris?",
    options: ["Periyar Wildlife Sanctuary (Thekkady)", "Silent Valley National Park", "Wayanad Sanctuary", "Eravikulam National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Periyar is situated in the Cardamom and Pandalam Hills, centered on the artificial Periyar Lake formed by Mullaperiyar Dam."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which national park in Rajasthan is renowned for royal Bengal tiger sightings against the majestic backdrop of a 10th-century medieval fort?",
    options: ["Ranthambore National Park (Sawai Madhopur)", "Sariska Tiger Reserve", "Keoladeo National Park", "Mukundra Hills"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ranthambore is famous for its diurnal tiger population inhabiting ancient fortress ruins and Padam Talao."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which UNESCO World Heritage wetland in Bharatpur, Rajasthan is world-famous as a paradise for thousands of migratory birds (including Siberian cranes)?",
    options: ["Keoladeo Ghana National Park", "Sambhar Lake", "Rann of Kutch", "Chilika Lake"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Keoladeo Ghana is a man-made wetland hosting over 370 bird species during winter migratory flyways."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which national park in West Bengal is the world's largest mangrove forest reserve and home to swimming Royal Bengal Tigers?",
    options: ["Sundarbans National Park", "Gorumara National Park", "Jaldapara National Park", "Buxa Tiger Reserve"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sundarbans spans the tidal delta of the Ganga-Brahmaputra, where tigers have adapted to swim across saline tidal creeks."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which national park in Madhya Pradesh served as the real-life ecological inspiration for Rudyard Kipling's famous classic 'The Jungle Book'?",
    options: ["Kanha National Park / Pench National Park", "Bandhavgarh", "Panna", "Satpura"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The lush sal and bamboo forests of the Seoni/Pench and Kanha regions inspired Mowgli's Seoni wolf pack adventures."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which national park in Madhya Pradesh made global conservation history in 2022 by reintroducing African Cheetahs to India after 70 years of extinction?",
    options: ["Kuno National Park", "Kanha National Park", "Panna National Park", "Madhav National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Project Cheetah translocated African cheetahs from Namibia and South Africa to Kuno National Park in September 2022."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which pristine tropical evergreen rainforest in the Palakkad district of Kerala is named after its absence of noisy cicada insects?",
    options: ["Silent Valley National Park", "Eravikulam National Park", "Periyar National Park", "Anamudi Shola"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Silent Valley is a core virgin rainforest in the Nilgiri Biosphere Reserve, harboring endemic Lion-tailed Macaques."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which endangered mountain goat species is found ONLY in the high montane shola grasslands of Eravikulam National Park and Nilgiris?",
    options: ["Nilgiri Tahr (Nilgiritragus hylocrius)", "Himalayan Ibex", "Markhor", "Chiru (Tibetan Antelope)"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Nilgiri Tahr is an endemic ungulate inhabiting the cliff edges and high-altitude shola-grasslands of Western Ghats."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which national park in Jammu & Kashmir is the ONLY protected sanctuary for the critically endangered Hangul (Kashmir Stag)?",
    options: ["Dachigam National Park", "Kishtwar National Park", "Hemis National Park", "Salim Ali National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dachigam ('Ten Villages') near Srinagar protects the last viable wild population of Cervus hanglu hanglu."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the famous annual mass nesting phenomenon of Olive Ridley sea turtles on the coastal beaches of Gahirmatha and Rushikulya in Odisha called?",
    options: ["Arribada", "Migration", "Hibernation", "Metamorphosis"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Arribada (Spanish for 'arrival') sees hundreds of thousands of female Olive Ridley turtles lay eggs simultaneously on Odisha beaches."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "In which year was 'Project Tiger' launched by the Government of India to save the Royal Bengal Tiger from extinction?",
    options: ["1973 (at Corbett National Park)", "1985", "1992", "2000"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Launched on 1 April 1973 under Prime Minister Indira Gandhi, Project Tiger established dedicated core tiger reserves across India."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "In which year was 'Project Elephant' launched to protect Asian elephants, their migration corridors, and prevent human-elephant conflict?",
    options: ["1992", "1973", "1980", "2005"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Project Elephant was initiated by the Ministry of Environment and Forests in February 1992."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which high-altitude feline is celebrated as the 'Ghost of the Mountains' in the trans-Himalayan cliffs of Ladakh, Spiti, and Sikkim?",
    options: ["Snow Leopard (Panthera uncia)", "Clouded Leopard", "Indian Leopard", "Caracal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Snow Leopard is a master of camouflage in rugged rocky alpine terrain at elevations between 3,000 to 5,500 meters."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which national park in Arunachal Pradesh boasts the greatest altitudinal variation (from 200m to 4,500m) and harbors all four big cat species (Tiger, Leopard, Snow Leopard, Clouded Leopard)?",
    options: ["Namdapha National Park", "Mouling National Park", "Pakke Tiger Reserve", "Manas National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Namdapha in Changlang district, Arunachal Pradesh spans tropical to alpine biomes housing all four pantherine cat species."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which unique crocodilian species native to the deep clear rivers of the Indian subcontinent has a long, narrow snout with a bulbous 'ghara' at the tip?",
    options: ["Gharial (Gavialis gangeticus)", "Mugger Crocodile", "Saltwater Crocodile", "Spectacled Caiman"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The fish-eating Gharial is critically endangered, thriving in protected sanctuaries on the Chambal, Son, and Girwa rivers."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which is the largest and heaviest species of wild deer found in the sal and deciduous forests of India?",
    options: ["Sambar Deer (Rusa unicolor)", "Chital (Spotted Deer)", "Barking Deer (Muntjac)", "Musk Deer"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Sambar is a massive forest deer weighing up to 350 kg, serving as the primary prey base for tigers in central and south India."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Read the statements:\nAssertion (A): The Nilgiri Biosphere Reserve was designated as India's very first UNESCO Biosphere Reserve in 1986.\nReason (R): It forms the vital biogeographic confluence of the Western Ghats and Eastern Ghats, safeguarding critical biodiversity and elephant corridors.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Encompassing Bandipur, Mudumalai, Nagarhole, Silent Valley, and Wayanad, Nilgiri was India's pioneer biosphere reserve."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Spot the IMPOSTER in the following list of National Parks paired with their home States:\nGroup: [Kaziranga - Assam, Kanha - Madhya Pradesh, Gir - Gujarat, Periyar - Tamil Nadu]",
    options: ["Kaziranga - Assam", "Kanha - Madhya Pradesh", "Gir - Gujarat", "Periyar - Tamil Nadu"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Periyar National Park is located in KERALA (Idukki/Pathanamthitta districts), NOT in Tamil Nadu."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the only ape species found in the wild forests of India (specifically in the tropical rainforests of Northeast India)?",
    options: ["Western Hoolock Gibbon (Hoolock hoolock)", "Chimpanzee", "Orangutan", "Gorilla"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Hoolock Gibbon is the sole tailless lesser ape native to India, protected in the Hoollongapar Gibbon Sanctuary in Assam."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Match the following endangered wildlife species with their primary habitat sanctuaries:\n(a) Great Indian Bustard   -> (i) Desert National Park (Rajasthan)\n(b) Sangai (Dancing Deer) -> (ii) Keibul Lamjao National Park (Manipur)\n(c) Lion-tailed Macaque   -> (iii) Silent Valley National Park (Kerala)\n(d) Red Panda             -> (iv) Singalila National Park (West Bengal / Sikkim)",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Great Indian Bustard = Desert NP; Sangai = Keibul Lamjao; Lion-tailed Macaque = Silent Valley; Red Panda = Singalila."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Read the statements:\nStatement 1: India is home to over 70% of the world's wild tiger population.\nStatement 2: The cheetah was declared officially extinct in India in 1952.\nStatement 3: Rhinoceros horns are made of bone attached to the skull.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because rhino horns are composed of compressed agglutinated keratin (the same protein as hair and fingernails), not bone. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which medicinal plant native to India is revered as 'The Queen of Herbs' and 'Tulsi' (Ocimum sanctum) for its antiviral, respiratory, and adaptogenic properties?",
    options: ["Holy Basil (Tulsi)", "Ashwagandha", "Brahmi", "Giloy"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Tulsi (Ocimum sanctum) contains eugenol, rosmarinic acid, and caryophyllene, celebrated in Ayurvedic medicine."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which state tree of Uttarakhand and Himachal Pradesh produces brilliant scarlet-red flowers across the Himalayas and is known as 'Buransh'?",
    options: ["Rhododendron (Rhododendron arboreum)", "Deodar Cedar", "Chir Pine", "Blue Pine"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Rhododendron arboreum (Buransh) blooms across high subalpine elevations, yielding famous antioxidant herbal juices."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which high-altitude mountain national park in Chamoli, Uttarakhand is a UNESCO World Heritage Site famous for endemic alpine floral meadows blooming with Brahmakamal?",
    options: ["Valley of Flowers National Park", "Nanda Devi National Park", "Rajaji National Park", "Govind Pashu Vihar"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Discovered by Frank Smythe in 1931, the Valley of Flowers is carpeted with thousands of Himalayan wildflowers and rare orchids."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the crucial ecological difference between a 'National Park' and a 'Wildlife Sanctuary' in India under the Wildlife Protection Act 1972?",
    options: [
      "In a National Park, human activities (grazing, timber harvesting, private land ownership) are strictly prohibited, whereas in a Wildlife Sanctuary, limited traditional human activities may be permitted",
      "Sanctuaries only have birds while parks have lions",
      "National parks are owned by private companies",
      "There is zero difference"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "National Parks have a higher degree of statutory protection with complete prohibition on livestock grazing and resource extraction."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which marine national park in Gujarat was the FIRST Marine National Park established in India (in 1982 in the Gulf of Kutch)?",
    options: ["Marine National Park, Gulf of Kutch", "Gulf of Mannar Marine National Park", "Mahatma Gandhi Marine National Park (Andamans)", "Malvan Marine Sanctuary"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Encompassing 42 islands in the Gulf of Kutch, it protects vibrant coral reefs, sponges, sea anemones, and dugongs."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "What is the critically endangered state bird of Rajasthan that faces severe electrocution threats from overhead power transmission lines in the Thar desert?",
    options: ["Great Indian Bustard (Godawan / Ardeotis nigriceps)", "Houbara Bustard", "Black Francolin", "Sarus Crane"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "With fewer than 150 individuals remaining in the wild, the massive terrestrial Godawan is India's most endangered grassland bird."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 4: Wildlife, Flora & National Parks of India",
    question: "Which aromatic evergreen timber tree native to the dry deciduous forests of Karnataka and Tamil Nadu is renowned as 'White Gold' (Chandan)?",
    options: ["Indian Sandalwood (Santalum album)", "Rosewood (Sheesham)", "Teak (Sagwan)", "Sal"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Santalum album is a hemiparasitic fragrant tree celebrated worldwide for prized santalol essential oil and carvings."
  }
];

console.log('Generated GK Ch4:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/gk_ch4.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
