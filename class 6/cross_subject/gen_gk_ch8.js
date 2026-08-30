import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 8: Wildlife & Biodiversity of India (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the National Animal of India, protected under wildlife laws?",
    options: ["Royal Bengal Tiger (Panthera tigris)", "Asiatic Lion", "Indian Elephant", "Indian Leopard"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Royal Bengal Tiger was declared the National Animal of India in April 1973 for its strength, grace, and apex ecological role."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the National Bird of India, renowned for its dazzling plumage and monsoon rain dance?",
    options: ["Indian Peacock (Pavo cristatus)", "Great Indian Bustard", "Flamingo", "Hornbill"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Indian Peacock was declared the National Bird of India in 1963, celebrated in Indian folklore and biodiversity."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the National Aquatic Animal of India, found in the freshwater river system of northern India?",
    options: ["Gangetic River Dolphin (Platanista gangetica)", "Gharial", "Olive Ridley Sea Turtle", "Mahseer Fish"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Declared in 2009, the blind freshwater Gangetic Dolphin is a flagship bio-indicator species of the health of the River Ganga."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the National Heritage Animal of India, symbolizing cultural reverence and ecological connectivity?",
    options: ["Indian Elephant (Elephas maximus indicus)", "One-horned Rhinoceros", "Snow Leopard", "Wild Water Buffalo"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Indian Elephant was declared the National Heritage Animal in 2010 to bolster elephant corridor conservation under Project Elephant."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What was the landmark flagship wildlife conservation programme launched by the Government of India on 1st April 1973 to save Bengal Tigers from extinction?",
    options: ["Project Tiger (initiated at Jim Corbett National Park)", "Project Lion", "Project Rhino", "Project Cheetah"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Launched in 1973 under Prime Minister Indira Gandhi, Project Tiger has expanded to over 54 tiger reserves across India."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the OLDEST National Park in India, established in 1936 in Uttarakhand (initially called Hailey National Park)?",
    options: ["Jim Corbett National Park", "Kaziranga National Park", "Gir National Park", "Kanha National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Established in 1936 in the Nainital foothills, Jim Corbett National Park was India's first national park."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which National Park in Assam is world-famous as the home of the Great Indian One-Horned Rhinoceros (hosting two-thirds of the world's population)?",
    options: ["Kaziranga National Park", "Manas National Park", "Sundarbans National Park", "Periyar National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kaziranga on the Brahmaputra floodplain is a UNESCO World Heritage site harboring over 2,600 one-horned rhinos."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which National Park in Gujarat is the ONLY remaining natural habitat in the world for wild Asiatic Lions (Panthera leo persica)?",
    options: ["Gir National Park and Wildlife Sanctuary", "Ranthambore National Park", "Bandipur National Park", "Dudhwa National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gir forest in Saurashtra, Gujarat is the exclusive global refuge for the majestic Asiatic Lion."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which grassroots non-violent forest conservation movement started in the 1970s in the Garhwal Himalayas of Uttarakhand, where villagers hugged forest trees to prevent contractors from felling them?",
    options: ["Chipko Movement (led by Sunderlal Bahuguna & Gaura Devi)", "Appiko Movement", "Narmada Bachao Andolan", "Silent Valley Movement"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The 1973 Chipko Movement in Reni village, Chamoli mobilized Himalayan women hugging trees ('Chipko' = cling/hug) to protect ecologies."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "On which date is 'World Environment Day' celebrated globally every year to foster worldwide environmental awareness and climate action?",
    options: ["5th June", "22nd April", "16th September", "21st March"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "UNEP designated 5 June as World Environment Day following the 1972 Stockholm Conference on Human Environment."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "On which date is 'Earth Day' celebrated globally every year to demonstrate support for environmental protection?",
    options: ["22nd April", "5th June", "3rd March", "2nd October"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "First celebrated in 1970, Earth Day on 22 April mobilizes over 1 billion people annually for ecological stewardship."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which is the FIRST and OLDEST Biosphere Reserve established in India in 1986, located at the tri-junction of Tamil Nadu, Kerala, and Karnataka?",
    options: ["Nilgiri Biosphere Reserve", "Sundarbans Biosphere Reserve", "Nanda Devi Biosphere Reserve", "Gulf of Mannar"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Designated in 1986 under UNESCO MAB, Nilgiri spans 5,520 km² across the Western Ghats harboring the endangered Lion-tailed Macaque."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the international treaty signed in 1971 in Iran for the conservation and sustainable utilization of vital wetland habitats called?",
    options: ["The Ramsar Convention on Wetlands", "Kyoto Protocol", "Paris Agreement", "Montreal Protocol"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Ramsar Convention protects critical wetlands (like Chilika Lake, Keoladeo Ghana, Wular Lake, Sundarbans) across India."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which coastal lagoon in Odisha is the LARGEST brackish water lagoon in India and a designated Ramsar wetland site, famous for Irrawaddy dolphins and migratory birds?",
    options: ["Chilika Lake", "Pulicat Lake", "Vembanad Lake", "Kolleru Lake"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Chilika Lake spans over 1,100 km², serving as the largest wintering ground for migratory waterfowl on the Indian subcontinent."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which beach in Odisha (Gahirmatha Marine Sanctuary / Rushikulya Rookery) is world-famous as the largest mass nesting site (Arribada) of which endangered sea turtle?",
    options: ["Olive Ridley Sea Turtle (Lepidochelys olivacea)", "Leatherback Sea Turtle", "Green Sea Turtle", "Hawksbill Turtle"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hundreds of thousands of female Olive Ridley turtles synchronise mass annual nocturnal arribada nesting on Odisha's coast."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the ONLY floating national park in the world, located on Loktak Lake in Manipur, home to the endangered Brow-antlered deer (Sangai / Dancing Deer)?",
    options: ["Keibul Lamjao National Park", "Nokrek National Park", "Namdapha National Park", "Dachigam National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Keibul Lamjao features unique floating biomass mats ('phumdis') sustaining the endemic endangered Sangai deer."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which National Park in Jammu & Kashmir is the exclusive protected habitat of the critically endangered Kashmiri Stag ('Hangul')?",
    options: ["Dachigam National Park", "Kishtwar National Park", "Hemis National Park", "Salim Ali National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dachigam ('Ten Villages') near Srinagar safeguards the sub-alpine coniferous habitat of the endemic Hangul (Cervus hanglu)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which is the LARGEST National Park in India by area, located in high-altitude Ladakh, famous for protecting Snow Leopards?",
    options: ["Hemis National Park (4,400 sq km)", "Desert National Park", "Gangotri National Park", "Namdapha National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hemis High Altitude National Park in eastern Ladakh spans 4,400 km², hosting the highest density of snow leopards in any protected area."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the comprehensive statutory legislation enacted by the Parliament of India in 1972 to provide rigorous legal protection to wild animals, birds, and plants?",
    options: ["Wild Life (Protection) Act, 1972", "Forest Conservation Act, 1980", "Environment Protection Act, 1986", "Biological Diversity Act, 2002"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Wild Life (Protection) Act, 1972 establishes schedules of protected wildlife and mandates penal action against poaching and illegal trade."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Who was the legendary ornithologist and naturalist reverently known as the 'Birdman of India' who authored seminal field books on Indian birds?",
    options: ["Dr. Salim Ali (Salim Moizuddin Abdul Ali)", "Dr. M.S. Swaminathan", "Sunderlal Bahuguna", "Kailash Sankhala"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dr. Salim Ali conducted systematic ornithological surveys across India and helped establish Bharatpur Bird Sanctuary and Silent Valley National Park."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which famous bird sanctuary in Bharatpur, Rajasthan (now Keoladeo National Park) is a UNESCO World Heritage wetland hosting thousands of migratory Siberian cranes and waterfowl?",
    options: ["Keoladeo Ghana National Park", "Sultanpur Bird Sanctuary", "Vedanthangal Bird Sanctuary", "Ranganathittu Bird Sanctuary"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Keoladeo is a man-made wetland refuge hosting over 370 bird species along the Central Asian Flyway."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the global public catalog published by the International Union for Conservation of Nature (IUCN) tracking threatened biological species?",
    options: ["IUCN Red List of Threatened Species", "Green Book", "Blue Planet Registry", "Flora Indica"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The IUCN Red List evaluates conservation status from Least Concern to Critically Endangered and Extinct."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which wildlife sanctuary in Kerala is renowned for its scenic artificial lake surrounded by dense evergreen rainforests harboring wild elephant herds and tigers?",
    options: ["Periyar National Park (Thekkady)", "Silent Valley National Park", "Eravikulam National Park", "Wayanad Wildlife Sanctuary"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Periyar is a protected tiger and elephant reserve set around the 1895 Mullaperiyar reservoir in the Cardamom Hills."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "In September 2022, which extinct apex predator was reintroduced into the wild in India (at Kuno National Park, Madhya Pradesh) after 70 years of national extinction?",
    options: ["African Cheetah (Acinonyx jubatus)", "Snow Leopard", "Clouded Leopard", "Caracal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Project Cheetah translocated cheetahs from Namibia and South Africa to Kuno to revive India's savanna predator guild."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which community in Rajasthan is famous for its 500-year-old sacred vow to protect trees and wild blackbucks, exemplified by Amrita Devi's supreme sacrifice in 1730 at Khejarli?",
    options: ["Bishnoi Community (followers of Guru Jambheshwar's 29 tenets)", "Bhils", "Gaddis", "Gonds"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "363 Bishnois led by Amrita Devi sacrificed their lives in 1730 hugging Khejri trees against royal axemen in Jodhpur."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is an ecological 'Biodiversity Hotspot'?",
    options: [
      "A biogeographic region characterized by exceptional levels of endemic plant/animal species that is simultaneously under severe threat of habitat destruction",
      "A region with very hot desert temperatures",
      "A volcanic mountain range",
      "A city with many zoo parks"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Defined by Norman Myers, hotspots contain ≥1,500 endemic vascular plant species and have lost ≥70% of primary native vegetation."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "How many Global Biodiversity Hotspots overlap with the territory of India?",
    options: [
      "4 Hotspots (The Himalayas, Western Ghats, Indo-Burma, and Sundaland including Nicobar)",
      "2 Hotspots",
      "6 Hotspots",
      "1 Hotspot"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "India hosts portions of 4 global biodiversity hotspots: 1. Himalayas, 2. Western Ghats-Sri Lanka, 3. Indo-Burma, and 4. Sundaland."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the primary objective of the 'Montreal Protocol' (1987), universally ratified as one of the most successful international environmental treaties?",
    options: [
      "Phasing out the production and consumption of Ozone-Depleting Substances (ODSs like CFCs and Halons) to protect the stratospheric Ozone layer",
      "Banning plastic water bottles",
      "Stopping car production",
      "Cleaning all ocean beaches"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Montreal Protocol phased out chlorofluorocarbons, leading to the gradual healing of the Antarctic ozone hole."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Read the statements:\nAssertion (A): Biosphere Reserves operate a multi-purpose zonation model consisting of a Core Zone, a Buffer Zone, and a Transition Zone.\nReason (R): This zoning reconciles strict wildlife conservation in the undisturbed Core with sustainable scientific research in the Buffer and community development in the Transition zone.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "UNESCO MAB Biosphere Reserve zonation balances ecological integrity with indigenous human livelihood cooperation."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Spot the IMPOSTER in the following group of National Parks paired with their home Indian States:\nGroup: [Kanha National Park - Madhya Pradesh, Kaziranga - Assam, Periyar - Kerala, Ranthambore - Gujarat]",
    options: ["Kanha National Park - Madhya Pradesh", "Kaziranga - Assam", "Periyar - Kerala", "Ranthambore - Gujarat"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ranthambore National Park is located in RAJASTHAN (Sawai Madhopur), NOT in Gujarat (Gujarat has Gir National Park)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the critically endangered avian species of the arid grasslands of Rajasthan and Gujarat, known as the 'Godawan', currently facing severe threat from overhead high-voltage power transmission lines?",
    options: ["Great Indian Bustard (Ardeotis nigriceps)", "Bengal Florican", "Lesser Florican", "Sarus Crane"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "With fewer than 150 individuals surviving in Thar, the heavy-bodied Great Indian Bustard suffers high mortality from powerline collisions."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Match Column I (Conservation Projects) with Column II (Year of Launch in India):\n(a) Project Tiger     -> (i) 1973\n(b) Project Elephant  -> (ii) 1992\n(c) Project Snow Leopard -> (iii) 2009\n(d) Project Cheetah   -> (iv) 2022",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Tiger = 1973; Elephant = 1992; Snow Leopard = 2009; Cheetah = 2022."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Read the statements:\nStatement 1: India contains over 75% of the world's wild tiger population, documented through biennial camera-trap census by the National Tiger Conservation Authority (NTCA).\nStatement 2: The Lion-tailed Macaque is endemic exclusively to the tropical evergreen rainforests of the Western Ghats.\nStatement 3: Plastic bags decompose naturally in soil within 2 days.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is completely false because synthetic non-biodegradable plastics persist for hundreds of years. Statements 1 and 2 are wildlife facts."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the unique marine mammal species known as the 'Sea Cow' (Dugong dugon), herbivorous and protected in the Gulf of Mannar and Palk Bay Dugong Conservation Reserve?",
    options: ["Dugong (Sea Cow)", "Blue Whale", "Walrus", "Sea Lion"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Dugongs are endangered sirenians grazing exclusively on coastal seagrass beds in Tamil Nadu's Palk Bay and Andaman waters."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which high-altitude mountain lake in Ladakh at 4,350 m altitude is a Ramsar wetland site famous for breeding colonies of the rare Black-necked Crane and Bar-headed Geese?",
    options: ["Tso Kar / Tsomoriri Lake", "Dal Lake", "Wular Lake", "Naini Lake"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Tso Kar and Tsomoriri in Changthang, Ladakh provide alpine nesting wetlands for vulnerable Black-necked Cranes (Grus nigricollis)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Who was the renowned environmental activist and forester from Assam known as the 'Forest Man of India', who single-handedly planted an entire 1,360-acre forest (Molai Forest) over 30 years on a barren Brahmaputra sandbar?",
    options: ["Jadav Payeng (Molai)", "Chandi Prasad Bhatt", "Medha Patkar", "Kailash Satyarthi"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Jadav Payeng created a thriving forest ecosystem single-handedly on Majuli sandbars, attracting elephants, tigers, and rhinos."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the biological phenomenon of 'Bio-magnification' (or Bio-accumulation) in environmental toxicology?",
    options: [
      "The progressive increase in concentration of persistent toxic non-biodegradable chemicals (like DDT or mercury) at successively higher trophic levels of a food chain",
      "The growth of large trees in forests",
      "The increase in fish population in clean rivers",
      "The magnification of cells under a microscope"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Lipophilic xenobiotics accumulate in adipose tissue, concentrating exponentially towards apex carnivores (e.g. vultures and raptors)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Why did the populations of three species of vultures (Gyps species) in India collapse by over 99% during the 1990s, leading to a catastrophic ecological crisis?",
    options: [
      "Veterinary use of the non-steroidal anti-inflammatory drug 'Diclofenac' in cattle, which caused acute renal failure and visceral gout in scavenging vultures",
      "Deforestation of all tall trees",
      "A viral epidemic from Europe",
      "Hunting by humans for meat"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Diclofenac residues in livestock carcasses proved lethally nephrotoxic to vultures, leading to a total national veterinary ban on diclofenac."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "Which ancient tribal forest community in the Niyamgiri hills of Odisha successfully asserted their sacred ecological rights under the Forest Rights Act to save their mountain from bauxite mining?",
    options: ["Dongria Kondh Tribe", "Santhals", "Mundas", "Garasias"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Dongria Kondh venerate the Niyamgiri ranges as Niyam Raja, winning a historic Supreme Court forest rights consensus in 2013."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 8: Environmental Studies, Biodiversity & Wildlife Conservation of India",
    question: "What is the primary objective of the 'International Solar Alliance' (ISA), headquartered in Gurugram, India, co-founded by India and France in 2015?",
    options: [
      "To mobilize global investments and deploy massive solar photovoltaic energy across sunshine-rich countries (between Tropics of Cancer & Capricorn) to fight climate change",
      "To build spaceships to fly to the Sun",
      "To ban all coal mines in one day",
      "To build atomic reactors worldwide"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The ISA coordinates over 120 member states to unlock $1 trillion in solar infrastructure deployment under the 'One Sun One World One Grid' vision."
  }
];

console.log('Generated GK Ch8:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/gk_ch8.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
