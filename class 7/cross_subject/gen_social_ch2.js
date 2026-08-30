import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 2: New Kings and Kingdoms (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "In the 8th century, who was the Rashtrakuta chief who overthrew his Chalukya overlord and performed the famous 'Hiranya-garbha' (Golden Womb) rebirth ritual to claim Kshatriya status?",
    options: ["Dantidurga", "Pulakeshin II", "Rajaraja I", "Nagabhata I"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rashtrakuta chief Dantidurga performed the Hiranya-garbha ritual with Brahmana priests to ritually transform into a Kshatriya monarch."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What does the Sanskrit term 'Hiranya-garbha' literally translate to?",
    options: ["Golden Womb (a ritual of spiritual rebirth as a Kshatriya ruler)", "Golden Crown", "Golden Sword", "Golden Horse"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Hiranya (gold) + Garbha (womb) symbolizes ritual rebirth as an anointed Kshatriya ruler."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Which three major medieval Indian dynasties fought the centuries-long famous 'Tripartite Struggle' for control over the prized strategic city of KANNAUJ in the Gangetic valley?",
    options: [
      "Gurjara-Pratiharas, Rashtrakutas, and Palas",
      "Cholas, Cheras, and Pandyas",
      "Guptas, Mauryas, and Kushanas",
      "Mughals, Marathas, and British"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Tripartite Struggle pitted the Gurjara-Pratiharas (West/North), Palas (East/Bengal), and Rashtrakutas (Deccan) over Kannauj."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Who was the 12th-century Kashmiri Sanskrit scholar and poet who composed the legendary historical Sanskrit verse chronicle 'Rajatarangini' (River of Kings)?",
    options: ["Kalhana", "Banabhatta", "Harisena", "Bilhana"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kalhana authored the Rajatarangini (1148–1150 CE), an exceptionally objective, critical historical chronicle of Kashmiri monarchs."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Which famous Chahamana (Chauhan) ruler defeated the Afghan ruler Sultan Muhammad Ghori in the First Battle of Tarain in 1191 CE?",
    options: ["Prithviraja III (Prithviraj Chauhan)", "Vigraharaja IV", "Harshavardhana", "Rana Sanga"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Prithviraja III defeated Muhammad Ghori at Tarain in 1191 CE (though lost the second battle in 1192 CE)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Who was the founder of the Imperial Chola dynasty who captured the Kaveri delta from the Muttaraiyar chiefs in the middle of the 9th century and built Thanjavur?",
    options: ["Vijayalaya Chola", "Rajaraja I", "Rajendra I", "Karikala"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Vijayalaya Chola captured Thanjavur (Tanjore) c. 850 CE, establishing the imperial Chola dynastic capital."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Who was considered the most powerful and celebrated Chola ruler, ascending the throne in 985 CE, who built the grand Brihadisvara Temple at Thanjavur?",
    options: ["Rajaraja I (Rajaraja Chola)", "Vijayalaya", "Rajendra I", "Kulothunga I"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rajaraja I (r. 985–1014 CE) reorganized Chola administration, commanded powerful naval armadas, and built the colossal Brihadisvara Temple."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Which ambitious Chola king (son of Rajaraja I) marched his armies north to the Ganga river, built the magnificent new capital 'Gangaikondacholapuram', and launched naval expeditions to conquer Srivijaya (Southeast Asia)?",
    options: ["Rajendra I", "Vijayalaya", "Rajaraja II", "Aditya I"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rajendra I assumed the title 'Gangaikondachola' (Conqueror of the Ganga) and founded Gangaikondacholapuram in 1025 CE."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What world-renowned fine metallic art form reached its supreme zenith of aesthetic elegance during the Chola period (such as the famous dancing Nataraja Shiva)?",
    options: ["Chola Lost-Wax Bronze Sculptures", "Terracotta pottery", "Marble carvings", "Gold coins only"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Chola cire-perdue (lost-wax) bronze sculptures, particularly the Nataraja cosmic dancer, are celebrated among the finest in world art."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "In Chola rural administration, what was a settlement / village assembly of peasant cultivators called?",
    options: ["Ur", "Sabha", "Nagaram", "Mandalam"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The 'Ur' was the autonomous village assembly of non-Brahmana peasant landholders in the Chola realm."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "In Chola administration, what was an assembly of prominent Brahmana landholders governing a Brahmadeya (tax-free land grant) village called?",
    options: ["Sabha", "Ur", "Nagaram", "Valanadu"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The 'Sabha' was the democratic council of learned Brahmana landholders managing Brahmadeya villages through specialized committees."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Which famous Tamil Nadu temple inscription in Kanchipuram district provides detailed, exact rules and democratic lottery qualification procedures for election to the Sabha committees?",
    options: ["Uttaramerur Inscription", "Aihole Inscription", "Prayag Prashasti", "Hathigumpha Inscription"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The 10th-century Parantaka I Uttaramerur inscriptions lay down precise democratic eligibility criteria and the pot-lottery (Kudavolai) voting system."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "How did Kadamba Mayurasharman and Gurjara-Pratihara Harichandra establish their royal dynasties in Karnataka and Rajasthan despite being Brahmanas by birth?",
    options: [
      "They gave up their traditional priestly vocations, took up arms and military warfare, and successfully carved out independent sovereign kingdoms by force",
      "They were crowned by Roman emperors",
      "They inherited the kingdoms from Buddhist monks",
      "They purchased the land with Greek gold"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Brahmana chiefs Mayurasharman and Harichandra abandoned sacerdotal duties, taking up arms to establish Kadamba and Pratihara kingdoms."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What was the 'Kudavolai' system of democratic committee selection recorded in the Uttaramerur inscription of the Cholas?",
    options: [
      "Names of eligible candidates were written on palm-leaf tickets, placed in an earthenware pot, and a young boy was asked to pick tickets one by one to form specialized governing committees (Variyams)",
      "Candidates fought a sword duel",
      "The King chose his family members only",
      "People raised hands in a large stadium"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Kudavolai pot-lottery system selected committee members (Variyams) for irrigation, gardens, and temples via blind ballot draws."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What rigorous eligibility criteria were mandated for a candidate to contest election to the Chola Sabha committees at Uttaramerur?",
    options: [
      "Must own tax-paying land, have a private house, be aged 35–70, possess knowledge of the Vedas, be honest, and must NOT have served on any committee in the previous 3 years",
      "Must be the richest merchant in the city",
      "Must have won at least 10 wars",
      "Must be a relative of the King"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Uttaramerur rules: age 35–70, Vedic literacy, property ownership, financial integrity, and mandatory 3-year term rotation."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Why was Kalhana's Sanskrit historical chronicle 'Rajatarangini' unique and remarkably distinct from typical contemporary court Prashastis?",
    options: [
      "Unlike eulogistic court poets who only praised monarchs, Kalhana critically analyzed inscriptions, coins, and earlier chronicles, openly criticizing rulers for bad policies and unjust governance",
      "Because it was written in Persian poetry",
      "Because Kalhana was an Arab cartographer",
      "Because it contains only fictional fairy tales"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Kalhana practiced critical historiography: cross-examining multiple epigraphic sources and offering candid critiques of royal misrule."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Why did Mahmud of Ghazni (ruler of Ghazni, Afghanistan) repeatedly raid and plunder wealthy northern Indian temple cities (such as Somnath in Gujarat) between 1000 and 1025 CE?",
    options: [
      "To loot immense accumulated gold and diamond temple wealth to finance his imperial campaigns, armies, and grand capital city of Ghazni in Central Asia",
      "To build Hindu temples in Afghanistan",
      "To settle down as a farmer in Gujarat",
      "To study Sanskrit literature in Varanasi"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mahmud of Ghazni raided temple treasuries (Somnath 1026 CE) to finance Central Asian military expansions and embellish Ghazni."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Who was the profound Persian scholar and polymath whom Mahmud of Ghazni brought to India to study Indian culture, who authored the definitive encyclopedic work 'Kitab al-Hind'?",
    options: ["Al-Biruni (Abu Rayhan al-Biruni)", "Ibn Battuta", "Ziauddin Barani", "Amir Khusrau"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Al-Biruni mastered Sanskrit and consulted Brahmana pandits to author 'Kitab al-Hind' (1030 CE), a masterwork on Indian science, religion, and philosophy."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What agricultural and hydraulic revolution engineered by the Cholas transformed the Kaveri delta into the granary of South India?",
    options: [
      "Constructing massive river embankments to prevent flooding, digging extensive canal networks to channel Kaveri waters directly into paddy fields, and building enormous water storage tanks (Eris)",
      "Spraying chemical fertilizers imported from China",
      "Building glass greenhouses across all farms",
      "Planting only wheat in coastal mud"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Chola hydraulic engineering: sluices, bunds, inter-connected irrigation canals, and community rainfed tanks (eris) yielding 2–3 rice crops annually."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "In Chola inscriptions, what did the term 'Brahmadeya' signify?",
    options: [
      "Tax-free agricultural land gifted as a royal endowment to learned Brahmanas",
      "Land gifted to military generals",
      "Land belonging to non-Brahmana peasants",
      "Land maintained for royal hunting"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Brahmadeya was revenue-exempt land granted by monarchs to Brahmanas to promote Vedic learning and agricultural settlement."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What were the administrative territorial divisions in the Chola Empire called (from largest to smallest)?",
    options: [
      "Mandalams (Provinces) -> Valanadus (Districts) -> Nadus (Groups of villages) -> Grama / Ur (Village)",
      "States -> Cities -> Towns -> Houses",
      "Janapadas -> Mahajanapadas -> Empires",
      "Subas -> Sarkars -> Parganas"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Chola administrative hierarchy: Mandalam (province) → Valanadu (district) → Nadu (taluk/village cluster) → Grama/Ur (village unit)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "In the 400 different tax terms recorded in Chola inscriptions, what was 'Vetti' and 'Kadamai'?",
    options: [
      "'Vetti' was tax taken not in cash but in the form of FORCED LABOUR ; 'Kadamai' was land revenue tax",
      "'Vetti' was a tax on horses ; 'Kadamai' was a tax on houses",
      "'Vetti' was tax on gold ; 'Kadamai' was tax on silk",
      "Both were voluntary donations"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Chola fiscal records (e.g. Thanjavur): Vetti represented uncompensated corvée forced labor, while Kadamai was agricultural land revenue."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What happened to the Gurjara-Pratiharas, Rashtrakutas, and Palas at the end of the long Tripartite Struggle?",
    options: [
      "All three dynasties exhausted their military and economic resources in continuous war, leading to their mutual decline and replacement by feudatories (like Chauhans, Paramaras, Senas)",
      "They formed a single combined world empire",
      "They ruled India together until the 19th century",
      "They all migrated to Rome"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Protracted attrition over Kannauj drained the treasuries of all three empires, fragmenting northern and peninsular India into smaller Rajput and Deccan states."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What grand titles did powerful medieval monarchs adopt to display imperial sovereignty (e.g. Tribhuvana-chakravartin)?",
    options: [
      "Maharajadhiraja (Great King of Kings) and Tribhuvana-chakravartin (Lord of the Three Worlds)",
      "Raja only",
      "Samanta",
      "Gramani"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Medieval monarchs adopted grandiloquent imperial epithets (Maharajadhiraja, Tribhuvana-chakravartin) to project absolute cosmological authority."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "In Chola land classification, what was 'Vellanvagai' land?",
    options: ["Land of non-Brahmana peasant proprietors", "Land gifted to temples", "Land for maintenance of schools", "Land gifted to Jain institutions"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Vellanvagai designated agricultural land holdings belonging to non-Brahmana Vellalar peasant proprietors."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "In Chola land classification, what was 'Shalabhoga' land?",
    options: ["Land granted for the maintenance of a school (shala)", "Land gifted to temples", "Land for cattle grazing", "Land given to palace cooks"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Shala' (school) + 'Bhoga' (endowment): Shalabhoga was land reserved exclusively to fund educational academies."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "In Chola land classification, what was 'Devadana' (or Tirunamattukkani)?",
    options: ["Land gifted directly to temples as sacred endowments", "Land gifted to soldiers", "Land belonging to the king", "Forest land"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Devadana (gift to gods) lands generated perennial revenue to maintain temple rituals, priests, musicians, and festivals."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What was 'Pallichchhandam' in Chola land grants?",
    options: ["Land donated to Jaina institutions and basadis", "Land for Buddhist stupas", "Land for building roads", "Land for royal stables"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Pallichchhandam represented tax-free land endowments donated to support Jain monastic establishments (basadis)."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Read the statements:\nAssertion (A): The grand structural temples built by Chola kings (Thanjavur and Gangaikondacholapuram) were not merely religious places of worship, but the socio-economic and cultural nuclei of entire regional settlements.\nReason (R): Temple endowments generated vast employment for priests, garland-makers, cooks, musicians, dancers, bronze-smiths, managed massive irrigation treasuries, and drove urban craft markets.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chola monumental temples operated as central economic redistributive engines, banking institutions, and cultural epicenters."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Spot the IMPOSTER in the following group of early medieval dynasties matched with their core geographical heartlands:\nGroup:\n1. Gurjara-Pratiharas - Western India & Rajasthan\n2. Palas - Bengal and Bihar\n3. Rashtrakutas - Deccan (Maharashtra / Karnataka)\n4. Cholas - Punjab and Kashmir",
    options: ["Match 1", "Match 2", "Match 3", "Match 4 (Cholas ruled the Kaveri Delta and Tamil Country in South India, NOT Punjab/Kashmir)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Chola heartland was the Kaveri river basin (Cholamandalam) in Tamil Nadu, NOT Punjab or Kashmir."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Analyze the 'Lost-Wax Technique' (Cire Perdue) perfected by Chola master bronze craftsmen:\nWhat was the exact technological sequence?",
    options: [
      "Sculpt a detailed beeswax model -> coat with fine clay & dry -> heat to melt and drain wax out through a hole -> pour molten bronze into the hollow clay mold -> cool and break clay casing to polish the bronze statue",
      "Carve bronze with a hammer directly from stone",
      "Pour cold water on hot copper sheets",
      "Dip wooden statues into gold paint"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Lost-wax casting: wax modeling → refractory clay encasing → thermal de-waxing → molten bronze pour → deshelling and chasing/burnishing."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Match Column I (Chola Land Terms) with Column II (Exact Definitions from Inscriptions):\n(a) Vellanvagai    -> (i) Land of non-Brahmana peasant proprietors\n(b) Brahmadeya      -> (ii) Land gifted to Brahmanas\n(c) Shalabhoga      -> (iii) Land for the maintenance of a school\n(d) Pallichchhandam -> (iv) Land donated to Jaina institutions",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Vellanvagai = peasant land; Brahmadeya = Brahmana grant; Shalabhoga = school; Pallichchhandam = Jain grant."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Read the statements regarding the Battle of Tarain:\nStatement 1: The First Battle of Tarain (1191 CE) ended in a decisive victory for Prithviraja Chauhan, routing Muhammad Ghori's forces.\nStatement 2: The Second Battle of Tarain (1192 CE) resulted in the defeat of Prithviraja Chauhan, paving the way for the establishment of the Delhi Sultanate.\nStatement 3: Prithviraja Chauhan fought using modern gunpowder cannons and tanks.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an anachronistic falsehood (artillery/gunpowder came centuries later). Statements 1 and 2 are historical facts."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Why did medieval kings deliberately build colossal, soaring stone temples and adorn them with lavish gold and jewel endowments?",
    options: [
      "To proclaim their supreme wealth, imperial power, piety, and divine sanction, while creating economic patronage networks with local elites",
      "Because temples were used as prisons for soldiers",
      "Because stone was the only building material available",
      "To hide from invading foreign armies"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Monumental temple patronage legitimized royal sovereignty, embodying divine kingship and cementing fiscal-agrarian hegemony."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "How did the Chola navy under Rajaraja I and Rajendra I achieve maritime hegemony across the Bay of Bengal (often called the 'Chola Lake')?",
    options: [
      "They constructed a powerful high-seas naval fleet that conquered the Maldives, Sri Lanka, and launched maritime expeditions against the Srivijaya Empire (Sumatra/Malaysia) to protect strategic trade routes to China",
      "They hired European pirate ships",
      "They built bridges across the entire ocean",
      "They drained the Bay of Bengal"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chola blue-water thalassocracy secured maritime trade networks across the Malacca Straits, trading with Song Dynasty China."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What democratic safeguard was enforced in the Uttaramerur Sabha election rules to prevent corruption, dynastic entrenchment, and power abuse?",
    options: [
      "Anyone who had been a member of any committee for the past 3 years, or who had failed to submit full audited financial accounts of his past committee tenure, was STRICTLY DISQUALIFIED from contesting",
      "Candidates had to pay 100 gold coins to vote",
      "Only the oldest man in the village could rule",
      "Votes were decided by sword fighting"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mandatory 3-year term limits and strict financial account auditing barred entrenched dynastic oligarchies in the Sabha."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Consider four prominent rulers of early medieval India:\n1. Dantidurga (Rashtrakuta)\n2. Prithviraja III (Chauhan)\n3. Rajendra I (Chola)\n4. Mahmud of Ghazni (Ghaznavid)\nWhich monarch led an overseas naval expedition across Southeast Asia against Srivijaya?",
    options: ["Ruler 3 (Rajendra I Chola)", "Ruler 1", "Ruler 2", "Ruler 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "In 1025 CE, Rajendra I dispatched an armada attacking Srivijaya ports across the Indonesian archipelago and Malay Peninsula."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What was the role of the 'Nagaram' in the Chola imperial commercial economy?",
    options: [
      "Merchant associations and trading guilds that maintained commercial markets, levied local trade tariffs, and performed municipal administrative functions in mercantile towns",
      "Peasant farming assemblies in forests",
      "Assemblies of temple dancers only",
      "The King's personal bodyguard unit"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Nagarams (like Ayyavole and Manigramam guilds) managed civic urban commerce, merchant law, and maritime emporiums."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "Why is the 9th–12th century Chola administration celebrated by modern political scientists as a pioneer of 'Decentralized Grassroots Democracy'?",
    options: [
      "While maintaining an overarching imperial defense and foreign policy, local village assemblies (Urs and Sabhas) enjoyed complete self-governance, running committees for canals, dispute settlement, and local taxation",
      "Because the Cholas had no central king",
      "Because elections were held on modern electronic machines",
      "Because all land was owned by the British"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Chola state balanced centralized imperial thalassocracy with highly autonomous, democratic village-level communal governance."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 2: New Kings and Kingdoms",
    question: "What master historical synthesis is established in Chapter 2 of NCERT Class 7 History?",
    options: [
      "The transition from early feudal chieftains (Samantas) to powerful regional and pan-regional imperial dynasties, characterized by grand temple building, sophisticated hydraulic agrarian engineering, fine bronze arts, and self-governing local village institutions",
      "A period of total darkness without any kings or art",
      "The complete destruction of all agriculture",
      "The end of Indian history"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 2 illuminates the rise of dynamic regional kingdoms, military statecraft, temple-centered urbanization, and grassroots rural democracy."
  }
];

console.log('Generated Class 7 Social Science Ch2:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/social_ch2.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
