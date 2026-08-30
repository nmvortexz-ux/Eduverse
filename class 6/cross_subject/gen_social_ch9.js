import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 9: Vital Villages, Thriving Towns (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Around how many years ago did the use of IRON tools and weapons begin on a large scale in the Indian subcontinent?",
    options: ["About 3,000 years ago (around 1000 BCE)", "10,000 years ago", "500 years ago", "1,000 years ago"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Iron technology emerged around 3,000 years ago, expanding around 2,500 years ago with iron axes and ploughshares."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Which iron agricultural tool revolutionized farming around 2,500 years ago by enabling farmers to dig deep into heavy clay soils, greatly increasing grain production?",
    options: ["Iron Ploughshare", "Iron sickle", "Iron spear", "Iron hammer"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The iron ploughshare allowed deep inversion of fertile alluvial soils, drastically raising crop yields."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What artificial systems were constructed by kings to supply water to agricultural fields to boost crop yields?",
    options: ["Irrigation Systems (Canals, Wells, Tanks, and Artificial Lakes)", "Road networks", "Stone walls", "Granaries"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Irrigation works (canals, tanks, wells, reservoirs) transformed rainfed fields into double-cropped farmland."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "In the ancient Tamil region (South India), what were large, wealthy landowners called?",
    options: ["Vellalar", "Uzhavar", "Kadaisiyar", "Adimai"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Sangam texts identify large aristocratic landholders as 'Vellalar'."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "In the ancient Tamil region, what were ordinary ploughmen/farmers called?",
    options: ["Uzhavar", "Vellalar", "Kadaisiyar", "Gramabhojaka"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ordinary small-scale tenant ploughmen were termed 'Uzhavar'."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "In the ancient Tamil region, what were landless agricultural labourers and slaves called?",
    options: ["Kadaisiyar and Adimai", "Vellalar", "Uzhavar", "Grihapati"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Landless daily laborers were 'Kadaisiyar' and bonded slaves were 'Adimai'."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "In northern Indian villages, who was the influential Village Headman who owned the largest land and collected taxes for the king?",
    options: ["Gramabhojaka", "Grihapati", "Karmakara", "Dasa"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The hereditary 'Gramabhojaka' was the largest landlord, tax collector, judge, and police authority in northern villages."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "In northern Indian villages, what were independent small landowners called?",
    options: ["Grihapatis", "Gramabhojaka", "Karmakaras", "Samantas"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Grihapatis' were independent small-scale peasant farmers working their own family land."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What were landless men and women who earned a living by working on other people's fields called in northern India?",
    options: ["Dasas and Karmakaras", "Gramabhojaka", "Grihapatis", "Vellalar"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Dasa-Karmakaras' were landless laborers compelled to work on wealthy farms for subsistence wages."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What is the earliest body of Tamil literature composed around 2,300 years ago in assemblies of poets held in the city of Madurai called?",
    options: ["Sangam Literature", "Vedic Literature", "Upanishads", "Puranas"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Sangam' literature refers to ancient Tamil poetry anthologies compiled in assemblies (sangams) of bards under Pandyan patronage."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What are the earliest coins used in India for about 500 years (from c. 600 BCE), made of silver or copper punched with distinct symbols called?",
    options: ["Punch-Marked Coins (Aahat Mudra)", "Gold Dinars", "Rupees", "Cowrie shells"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Punch-marked coins were stamped with metallurgical dies featuring symbols (hills, trees, animals) on silver and copper flans."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Which ancient coastal port settlement in Puducherry (excavated by Sir Mortimer Wheeler) was a thriving international trade hub with the Roman Empire between 2200 and 1900 years ago?",
    options: ["Arikamedu (Podouke of the Periplus)", "Kaveripattinam", "Lothal", "Surat"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Arikamedu excavations yielded Roman amphorae wine jars, Arretine red-glazed pottery, and Roman gold coins."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What were 'Shrenis' in ancient Indian urban centers?",
    options: [
      "Associations and guilds formed by craftspersons and merchants to procure raw materials, train artisans, distribute goods, and function as banks",
      "Royal palaces of kings",
      "Military battalions",
      "Taxes paid by farmers"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Shrenis operated as merchant/artisan guilds, providing credit finance, technical quality control, and banking services."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Why was Mathura a major, thriving multi-functional urban city for over 2,500 years?",
    options: [
      "It was located at the vital crossroads of two major ancient trade routes (North-west to East, and North to South), a center of fine sculpture, and a religious hub for Krishna worship, Buddhism, and Jainism",
      "Because it had gold mines",
      "Because it was on the sea coast",
      "Because it had no agriculture"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mathura's strategic commercial crossroads location and vibrant religious syncretism made it the second capital of the Kushanas."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What was 'Northern Black Polished Ware' (NBPW) produced in ancient urban centers of the Gangetic valley?",
    options: [
      "A very fine, ultra-smooth, glossy black earthenware pottery with a mirror-like metallic shine used as luxury tableware",
      "A heavy iron shield",
      "A type of black stone",
      "A wooden plate"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "NBPW was premium deluxe tableware fired at high kilns, producing an iridescent black gloss."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What were 'Ring Wells' discovered in archaeological excavations of ancient cities like Delhi and Hastinapur used for?",
    options: [
      "As domestic toilets, drain pipes, or garbage waste pits by stacking terracotta rings vertically in the ground",
      "As gold treasure vaults",
      "As musical instruments",
      "As animal traps"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Stacked ceramic terracotta ring wells served as soakage pits, sullage drains, and latrines in dense urban quarters."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What ancient Greco-Roman travel guidebook written by an anonymous Greek sailor in the 1st century CE describes Indian coastal ports and maritime trade items?",
    options: ["The Periplus of the Erythraean Sea ('Periplus of the Red/Arabian Sea')", "Indica by Megasthenes", "Geographia by Ptolemy", "Naturalis Historia"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 'Periplus of the Erythraean Sea' details trade goods traded at Bharuch (Barygaza), Muziris, and Arikamedu."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What goods were EXPORTED from Indian ports like Barygaza (Bharuch in Gujarat) to the Roman Empire?",
    options: [
      "Fine cotton textiles, silk, black pepper and spices, ivory, agate, jasper, and medicinal herbs",
      "Wine and Italian pottery",
      "Roman gold and silver coins",
      "Tin, lead, and glass"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Indian exports comprised fine muslins, black pepper ('black gold'), ivory, precious gemstones, and aromatics."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What goods were IMPORTED into India from the Mediterranean Roman world?",
    options: [
      "Italian wine in amphorae jars, Roman gold and silver coins, copper, tin, lead, coral, and topaz",
      "Black pepper and cardamoms",
      "Fine cotton cloth",
      "Ivory and peacocks"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rome exported wine, metals (tin/lead), coral, and huge hoards of imperial gold/silver denarii to balance trade."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What were 'Arretine Ware' vessels discovered at Arikamedu?",
    options: [
      "Fine red-glazed Roman pottery named after the Italian city of Arezzo, stamped with decorative designs using wet clay molds",
      "Chinese porcelain vases",
      "Ancient bronze statues",
      "Iron cooking pots"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Arretine ware was Italian fine slip-coated red terra sigillata exported across Mediterranean maritime trade networks."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Why did Pliny the Elder, a Roman historian, lament that 'not a year passes without India taking fifty million sesterces of Roman gold'?",
    options: [
      "Because Roman wealth was draining into India to purchase Indian luxury spices (black pepper), silk, and gemstones",
      "Because India was buying all Roman wheat",
      "Because Roman armies lost wars to India",
      "Because Roman emperors gave gifts to India"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Pliny's 'Naturalis Historia' lamented the massive trade deficit and gold drain caused by aristocratic Roman addiction to Indian luxury spices."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What were the famous ancient centers of cotton textile weaving in northern and southern India mentioned in Kautilya's Arthashastra?",
    options: [
      "Varanasi (in the north) and Madurai (in the south)",
      "Delhi and Mumbai",
      "Taxila and Ujjain",
      "Patliputra and Kanchi"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Arthashastra identifies Varanasi and Madurai as renowned manufacturing guild centers of fine cotton textiles."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Why was the post of 'Gramabhojaka' hereditary in northern villages?",
    options: [
      "The position passed from father to son across generations within the village's wealthiest landowning family",
      "Because kings held elections every year",
      "Because villagers voted with stones",
      "Because only priests could hold the post"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hereditary succession maintained aristocratic lineage control over village revenues and rural administration."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What are 'Jatakas' in ancient Indian literature?",
    options: [
      "Popular folk stories depicting previous lives of the Buddha, composed by ordinary people and written down by Buddhist monks",
      "Royal inscriptions carved on rocks",
      "Mathematical textbooks",
      "Military strategies of kings"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Jatakas are moral Buddhist folk narratives (e.g. story of the clever poor young man) preserved in Pali canon."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What crucial archaeological evidence proves the existence of flourishing international trade at ancient port sites?",
    options: [
      "Foreign coins, imported amphorae wine jars, foreign stamped pottery, and specialized port warehouse brick structures",
      "Modern asphalt roads",
      "Plastic toys",
      "Steel cargo ships"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Numismatic hoards, imported pottery (terra sigillata), and wharves confirm historical maritime trade connectivity."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "How did the invention and expansion of Iron tools transform civilization between 1000 BCE and 500 BCE?",
    options: [
      "Heavy iron axes cleared dense subtropical Gangetic monsoon forests for settled farming, and iron ploughs dramatically increased food surpluses, sustaining urbanization",
      "It destroyed all cities",
      "It stopped all agriculture",
      "It made people leave India"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Iron metallurgy enabled forest clearance and agricultural surplus in the Gangetic basin, catalyzing the Second Urbanization."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What religious donations were inscribed on stone pillars and railings of Buddhist stupas (such as Sanchi and Mathura)?",
    options: [
      "Votive Inscriptions recording gifts given by kings, queens, guild merchants, weavers, goldsmiths, and monks/nuns",
      "Tax receipts from farmers",
      "Cooking recipes",
      "War declarations"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Votive epigraphs record pious donations by diverse socio-economic strata (guilds, artisans, lay devotees) to monastic orders."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Why was the ancient port of Barygaza (modern Bharuch) in the Gulf of Khambhat difficult for foreign ships to navigate?",
    options: [
      "The gulf was narrow, shallow, and plagued by fierce tidal bore currents, requiring skillful local fishermen employed by the king to steer ships into port",
      "Because of icebergs",
      "Because of pirates with cannons",
      "Because there was no water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 'Periplus' records that violent tidal bores in the narrow Gulf of Khambhat required specialized pilots."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Read the statements:\nAssertion (A): The 'Second Urbanization' of India (c. 6th century BCE to 3rd century CE) in the Gangetic valley and Peninsular India was deeply rooted in rural agricultural prosperity.\nReason (R): Iron technology, advanced canal/tank irrigation, and paddy transplantation created substantial food surpluses that could support non-agricultural urban craftspersons, merchants, and administrative elites.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Urban craft guilds, trade networks, and civic administration relied fundamentally on agrarian food surpluses enabled by iron tools."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Spot the IMPOSTER in the following group of ancient Tamil agrarian categories from Sangam texts:\nGroup: [Vellalar (Large Landowner), Uzhavar (Ploughman), Kadaisiyar (Landless Labourer), Gramabhojaka (Slaves in Tamil Nadu)]",
    options: ["Vellalar (Large Landowner)", "Uzhavar (Ploughman)", "Kadaisiyar (Landless Labourer)", "Gramabhojaka (Slaves in Tamil Nadu)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Gramabhojaka' was the village headman in NORTHERN India, NOT a slave in Tamil Nadu (slaves in Tamil were 'Adimai')."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "An archaeologist excavates an ancient trade site and discovers: (1) Amphorae containing dried wine residue, (2) Red-glazed stamped pottery, (3) Roman gold coins of Emperor Augustus. What historical site is represented?",
    options: [
      "Arikamedu (near Puducherry on the southeastern Coromandel coast)",
      "Harappa",
      "Taxila",
      "Mohenjo-daro"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mortimer Wheeler's excavations at Arikamedu proved it was an Indo-Roman maritime emporium."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Match Column I (Ancient Terms) with Column II (Definitions & Roles):\n(a) Shrenis        -> (i) Earliest stamped silver/copper coins\n(b) Gramabhojaka   -> (ii) Guilds of craftspersons & merchants\n(c) Punch-marked   -> (iii) Hereditary village headman & tax collector (North)\n(d) Sangam         -> (iv) Assemblies of ancient Tamil poets in Madurai",
    options: [
      "a-(ii), b-(iii), c-(i), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Shrenis = guilds; Gramabhojaka = northern village headman; Punch-marked = coins; Sangam = poet assemblies."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Read the statements regarding ancient craft and trade:\nStatement 1: Shrenis provided vocational apprenticeship training to artisans, procured raw materials, and distributed finished products.\nStatement 2: Shrenis served as banks where wealthy men and women deposited money, earning interest support for monasteries.\nStatement 3: Punch-marked coins had detailed inscriptions of kings' names written in English.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because punch-marked coins had punched symbols (trees, hills, bulls) without alphabetic inscriptions. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What was the significance of Mathura becoming the second capital of the Kushana Empire (under Emperor Kanishka)?",
    options: [
      "It became a premier center of red sandstone sculpture (producing magnificent Buddha images) and a crossroads linking Gandhara with Gangetic trade",
      "It was made of ice",
      "It was abandoned forever",
      "It was only used as a prison"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mathura flourished as the southern capital of the Kushanas, creating the Mathura school of art in mottled red Sikri sandstone."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Why was the process of 'Paddy (Rice) Transplantation' around 2,500 years ago a major technological turning point in Gangetic agriculture?",
    options: [
      "Instead of scattering dry seeds on soil where many died, saplings were grown in nurseries and transplanted into water-logged flooded fields, ensuring far higher plant survival and bumper yields",
      "Because it stopped weeds by burning",
      "Because rice could grow without water",
      "Because animals did all the work"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Transplantation minimized seedling mortality, drastically raising grain productivity per hectare."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "Consider four occupational groups in an ancient village:\n1. Gramabhojaka\n2. Grihapati\n3. Dasa-Karmakara\n4. Blacksmith (Lohar)\nArrange them in order from the LARGEST landholding power to ZERO land ownership:",
    options: ["1 -> 2 -> 4 -> 3", "3 -> 4 -> 2 -> 1", "2 -> 1 -> 3 -> 4", "4 -> 3 -> 2 -> 1"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Gramabhojaka (vast estate) > Grihapati (small peasant plot) > Artisan (craft holding) > Dasa-Karmakara (landless daily laborer)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What archaeological feature distinguishes Northern Black Polished Ware (NBPW) from earlier Painted Grey Ware (PGW)?",
    options: [
      "NBPW is characterized by its lustrous, mirror-like jet-black surface sheen achieved by two-stage reducing atmosphere kiln firing and organic slip application",
      "NBPW is made of metal",
      "NBPW has red flowers painted on it",
      "NBPW is unbaked mud"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "NBPW's distinctive black mirror gloss derived from iron-rich ferruginous slips subjected to reduction firing in sealed kilns."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What do the numerous Megalithic burial stone circles in South India (dating from c. 1000 BCE) contain inside them that proves early iron metallurgy?",
    options: [
      "Large assortments of iron weapons, iron hoes, sickles, horse equipment, and black-and-red pottery buried alongside human skeletons",
      "Paper books and modern pens",
      "Steam engines",
      "Plastic utensils"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Megalithic cists and urns contain funerary grave goods: iron swords, daggers, agricultural sickles, and horse bits."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "How did ancient kings in India ensure the loyalty of the Gramabhojaka in administering rural territories?",
    options: [
      "By recognizing his hereditary local land power and delegating official state functions (tax collection, judicial dispute settlement, and local policing) to him",
      "By imprisoning his family",
      "By destroying his crops",
      "By replacing him every month"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Monarchs co-opted dominant local landed elites, delegating fiscal and judicial power in exchange for tax remittance."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 9: Vital Villages, Thriving Towns",
    question: "What holistic picture of ancient society emerges from reading NCERT Class 6 History on villages and towns?",
    options: [
      "An interdependent socio-economic web where thriving agricultural villages, specialized urban craft guilds, and global maritime ports sustained flourishing civilization through trade and cultural exchange",
      "A society where towns had no connection to villages",
      "A civilization that had no tools or trade",
      "A world without any laws or coins"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "History portrays an integrated ecosystem connecting agrarian villages, craft guilds, and international maritime trade emporia."
  }
];

console.log('Generated Social Science Ch9:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/social_ch9.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
