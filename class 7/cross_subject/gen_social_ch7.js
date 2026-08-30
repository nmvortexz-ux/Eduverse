import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 7: Tribes, Nomads & Settled Communities (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What distinct social organization characterized tribal societies compared to the caste-based (Varna) societies of medieval India?",
    options: [
      "Tribal societies did NOT follow rigid social rules and caste divisions prescribed by Brahmans; they were organized into egalitarian kinship / clan groups with shared natural resources",
      "They had hundreds of rigid sub-castes",
      "They lived only in marble palaces",
      "They were ruled by foreign emperors"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tribal communities organized social life around kinship bonds, communal land ownership, and egalitarian clan structures without Brahmanical varna hierarchies."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Which vast forested region of central India (comprising modern Madhya Pradesh, Chhattisgarh, and Maharashtra) was the homeland of the GONDS?",
    options: ["Gondwana ('Country inhabited by Gonds')", "Brahmaputra Valley", "Thar Desert", "Konkan Coast"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gondwana was the historical central Indian forest region where Gond kingdoms practiced shifting cultivation."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What rich Gond kingdom mentioned in the Akbar Nama contained 70,000 villages and grew wealthy by exporting wild elephants to other kingdoms?",
    options: ["Garha Katanga", "Chanda", "Deogarh", "Kherla"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Garha Katanga was a prosperous Gond kingdom ruling 70,000 villages, enriched through the capture and export of wild elephants."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Which brave, heroic Rajput princess married the Gond King Dalpat and ruled Garha Katanga on behalf of her young son Bir Narain, dying in battle against the Mughal general Asaf Khan in 1565?",
    options: ["Rani Durgavati", "Rani Lakshmibai", "Rani Padmini", "Rani Rudrama Devi"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rani Durgavati of Garha Katanga (daughter of Chandel king Salbahan) fought valiantly against Asaf Khan's Mughal invasion until her martyrdom."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Which powerful tribal community migrated from present-day Myanmar into the Brahmaputra River valley (Assam) in the 13th century, establishing a flourishing independent state?",
    options: ["The Ahoms (led by Chaolung Sukapha)", "The Gonds", "The Bhils", "The Santhals"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Tai-Ahom people under Sukapha settled the upper Brahmaputra valley in 1228 CE, creating the mighty Ahom kingdom."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What were historical historical chronicles and official state records written in the Ahom language and later in Assamese called?",
    options: ["Buranjis", "Tuzuks", "Prashastis", "Khels"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Buranjis are the invaluable historical chronicles written by Ahom court scribes recording political and diplomatic history."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "In the Ahom state, what were the adult male villagers who were legally obliged to render compulsory rotational labor for public works called?",
    options: ["Paiks", "Khels", "Samantas", "Mansabdars"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Under the Ahom Paik system, each village supplied rotational corvée laborers (Paiks) for constructing dykes, canals, and military service."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "In Ahom society, what were the clans or collective administrative units that controlled several villages called?",
    options: ["Khels", "Paiks", "Garhs", "Buranjis"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A Khel was a clan-based corporate unit commanding specific Paiks and distributing village land."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Which major warrior tribes dominated the Punjab region during the 13th and 14th centuries (whose chief Kamal Khan Gakkhar was made a noble by Akbar)?",
    options: ["Khokhars and Gakkhars", "Bhils and Kolis", "Ahoms and Nagas", "Gonds and Santhals"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Khokhars and Gakkhars were influential martial tribes of Punjab; Emperor Akbar appointed Gakkhar chief Kamal Khan as a high Mansabdar."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Which large tribal group inhabited the forested hilly regions of the Western Ghats and Central India across Rajasthan, Gujarat, and Maharashtra?",
    options: ["The Bhils (and Kolis)", "The Ahoms", "The Gakkhars", "The Cheros"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Bhils spread across the Western Ghats and Vindhyas, transitioning between hunter-gathering, shifting farming, and archery."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What agricultural method involving cutting and burning trees and bushes in forest plots to plant crops in the fertile ash for a few years was practiced by Gonds?",
    options: ["Shifting Cultivation (Jhum / Podu)", "Terrace Farming only", "Hydroponics", "Plantation Farming"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Shifting cultivation (slash-and-burn) was the traditional agrarian system of forest-dwelling tribal communities like the Gonds."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Which pastoral shepherd tribe lived in the western Himalayas (Himachal Pradesh), migrating with sheep and goat herds according to seasons?",
    options: ["Gaddis (and Gujjar Bakarwals)", "Ahoms", "Gonds", "Cheros"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Gaddis are transhumant pastoral shepherds of the western Himalayas migrating between alpine meadows and valley winters."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What was the administrative division hierarchy of the centralized Gond kingdom of Garha Katanga?",
    options: [
      "Kingdom was divided into Garhs (controlled by Gond clans) ; each Garh was divided into Chaurasis (units of 84 villages) ; each Chaurasi was subdivided into Barhots (units of 12 villages)",
      "Kingdom -> Suba -> Sarkar -> Pargana",
      "Kingdom was divided into 1,000 islands",
      "Kingdom had no divisions"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gond administrative structure: Garh (clan territory) → Chaurasi (84 villages) → Barhot (12 villages)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Why did the Gond Raja of Garha Katanga, Aman Das, adopt the prestigious title of 'Sangram Shah'?",
    options: [
      "To elevate his social and political status to that of a Kshatriya / Rajput ruler, seeking parity with established northern dynasties",
      "Because he won an Olympic medal",
      "Because the British gave him the title",
      "Because he moved to Europe"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gond chieftains Sanskritized their identity (Rajputization) by assuming Kshatriya titles (Sangram Shah) and forming Rajput matrimonial alliances."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "How did the introduction of advanced Gunpowder and Firearms in the 16th century transform the military strength of the Ahom kingdom?",
    options: [
      "The Ahoms quickly mastered metallurgy to manufacture high-quality gunpowder and cast heavy bronze cannons as early as the 1530s, successfully repelling numerous invasions",
      "They bought weapons from China only",
      "Gunpowder destroyed the Ahom kingdom immediately",
      "They banned all weapons"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Ahoms developed advanced indigenous pyrotechnic ballistics, manufacturing high-grade gunpowder and cannons from the 1530s."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Under which Mughal general was an army sent in 1662 to invade the Ahom kingdom, capturing the capital Garhgaon after fierce Ahom resistance?",
    options: ["Mir Jumla (Governor of Bengal under Aurangzeb)", "Raja Man Singh", "Bairam Khan", "Shaista Khan"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mir Jumla captured Garhgaon in 1662, but protracted guerrilla warfare and monsoon pestilence forced a Mughal treaty."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Under which great Ahom King (reigned 1696–1714) did Hinduism become the predominant religion, while Ahom kings retained their traditional Tai cultural customs?",
    options: ["Rudra Singha (Sukhrungphaa)", "Sukapha", "Pratap Singha", "Gadadhar Singha"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "King Rudra Singha patronized Brahmanical Vaishnavism and built the grand amphitheater Rang Ghar while preserving Tai ancestral rituals."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What was the 'Tanda' of the Banjaras described in Emperor Jahangir's memoirs (Tuzuk-i Jahangiri)?",
    options: [
      "A massive mobile nomadic convoy/caravan of Banjara trader families moving with thousands of pack-bullocks loaded with grain to sell in town markets and provision Mughal armies",
      "A musical instrument",
      "A stone fort in the forest",
      "A type of food"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Jahangir recorded that Banjaras transported grain on bullocks from villages into towns: 'A tanda consists of many families... moving up to 100,000 oxen'."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "How did economic exchange operate between Pastoral Nomads and settled agricultural villagers?",
    options: [
      "Pastoral nomads exchanged animal products (ghee, wool, hides, milk) with settled farmers in return for agricultural grain, cloth, metal utensils, and salt",
      "They had no contact with farmers",
      "Nomads gave gold and bought land",
      "Farmers became nomads every winter"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Symbiotic rural-pastoral barter: pastoralists bartered pastoral commodities (ghee, wool, pack-animals) for agrarian food grains and textiles."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Which powerful tribal chieftaincy in Bihar and Jharkhand was attacked and defeated by Akbar's general Raja Man Singh in 1591, yielding vast booty?",
    options: ["The Cheros", "The Santhals", "The Ahoms", "The Gakkhars"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Raja Man Singh defeated the Chero chief in 1591, seizing wealth and elephants, though complete subjugation occurred under Aurangzeb."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "How did the proliferation of specialized crafts and professional occupational groups lead to the emergence of 'JATIS' (sub-castes) within the Varna system?",
    options: [
      "As the economy grew more complex, specialized occupational groups (smiths, carpenters, masons, sculptors) were recognized by Brahmans as distinct Jatis within the social framework",
      "The Varna system was abolished completely",
      "All craftspersons were made kings",
      "Jatis were introduced by foreign traders"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Economic diversification spawned Jatis: specialized artisanal, mercantile, and tribal communities were accommodated as discrete jatis."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What agricultural innovation in Wet-Rice Cultivation was introduced by the Ahoms in the Brahmaputra valley?",
    options: [
      "Advanced wet rice transplantation techniques, construction of extensive flood-control dykes and irrigation canals",
      "Growing rice without water in deserts",
      "Importing rice from Europe",
      "Using tractors and chemical fertilizers"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ahoms engineered wet-rice hydraulic ecology: building bunds, earthen dykes, and canal networks across floodplains."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What happened when the Mughals under Asaf Khan conquered Garha Katanga in 1565?",
    options: [
      "The Mughals captured immense booty in precious gold coins and thousands of wild elephants, annexing a part and granting the rest to Bir Narain's uncle Chhatar Shah",
      "They destroyed all houses and left",
      "They made Rani Durgavati the Mughal Empress",
      "They planted a forest over the kingdom"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Mughals appropriated Garha Katanga's legendary treasury of gold and elephants, establishing indirect suzerainty."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Which martial tribes inhabited the rugged Balochistan desert frontiers in the northwest of the subcontinent?",
    options: ["The Balochis (divided into many powerful clans under chieftains)", "The Ahoms", "The Gonds", "The Santhals"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Balochis formed a major confederacy of clan-based pastoral and warrior tribes across the northwestern arid frontiers."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Which tribal kingdoms inhabited the forested plateaus of Chota Nagpur and Odisha during the medieval era?",
    options: ["The Mundas and Santhals", "The Ahoms", "The Kolis", "The Gakkhars"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Mundas, Santhals, and Oraons inhabited the mineral-rich Chota Nagpur plateau and forested Odisha tracts."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What were the 'Itinerant Groups' in medieval society?",
    options: [
      "Mobile craftspersons, entertainers, pedlars, and puppeteers who traveled from village to village practicing their occupation and trade",
      "Kings who lived in tents",
      "Priests who never walked",
      "Soldiers guarding fort gates"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Itinerant groups included nomadic blacksmiths, rope-makers, acrobats, and bards servicing rural communities on seasonal circuits."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What was the 'Khel' census mechanism used by Ahom kings to manage labor and military manpower?",
    options: [
      "A regular population census was taken; villages with large populations were forced to transfer Paik laborers to sparsely populated areas to balance labor resources",
      "Every person was given gold coins",
      "People were counted by measuring their height",
      "Only horses were counted"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Ahom administration took regular Paik censuses, re-allocating corvée labor between densely and sparsely populated khels."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Why did Brahman scholars gain immense influence in Gond and Ahom royal courts in the 16th and 17th centuries?",
    options: [
      "Tribal kings granted generous tax-free land endowments (Brahmadeya) to Brahmans to obtain Sanskrit genealogical legitimacy, Kshatriya status, and rituals for statecraft",
      "Brahmans were the only soldiers in the kingdom",
      "Brahmans built all cannons",
      "Brahmans controlled the elephant trade"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tribal rulers patronized Brahmans with land grants to legitimize their emergent monarchies within the pan-Indian royal pantheon."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Read the statements:\nAssertion (A): Tribal societies and settled caste-based societies in medieval India engaged in continuous, dynamic reciprocal interaction rather than total mutual isolation.\nReason (R): Settled agrarian states depended on nomadic Banjaras for logistical transport and tribal kingdoms for elephants and forest timber, while tribal chiefs adopted Brahmanical statecraft and Rajput lineage identities to consolidate their emerging state power.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The frontier between tribal and varna societies was permeable, characterized by symbiotic economic exchange and political Rajputization."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Spot the IMPOSTER in the following group of Tribal Communities and their historical regional homelands:\nGroup:\n1. Gonds - Gondwana (Madhya Pradesh / Chhattisgarh)\n2. Ahoms - Brahmaputra Valley (Assam)\n3. Gaddis - Western Himalayas (Himachal Pradesh)\n4. Khokhars - Deep Ocean coral reefs of the Pacific",
    options: ["Tribe 1", "Tribe 2", "Tribe 3", "Tribe 4 (The Khokhars were a powerful martial tribe of the PUNJAB region, not ocean reefs)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Khokhars inhabited the Punjab plains between the Indus and Chenab rivers."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Analyze the state formation process in the Ahom kingdom:\nHow did the Ahoms construct a centralized state out of a tribal lineage system?",
    options: [
      "They suppressed the older feudal lords (Bhuiyans), annexed neighboring kingdoms (Chhutiyas, Koch-Hajo), built extensive hydraulic dykes, and instituted the Paik rotational labor system backed by gunpowder ballistics",
      "They moved the entire population to Tibet",
      "They abolished agriculture and became pure hunter-gatherers",
      "They signed a treaty with Roman emperors"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ahom state formation: breaking Bhuiyan feudalism, territorial integration, Paik corvée organization, and early adoption of firearms."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Match Column I (Tribal & Administrative Terminology) with Column II (Exact Historical Meanings):\n(a) Chaurasi  -> (i) Unit of 84 villages in the Gond Garh administrative hierarchy\n(b) Barhot    -> (ii) Sub-unit of 12 villages under a Chaurasi\n(c) Buranji   -> (iii) Official historical chronicles written in Ahom and Assamese\n(d) Paik      -> (iv) Obligatory rotational corvée laborer in the Ahom state system",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chaurasi = 84 villages; Barhot = 12 villages; Buranji = chronicle; Paik = corvée laborer."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Read the statements regarding the transition from Varna to Jati:\nStatement 1: Jatis (sub-castes) became the primary basis for organizing social hierarchy rather than the broad four Varnas.\nStatement 2: Many tribal lineages (such as Rathores, Chandels, and Gonds) were assimilated into the ruling Kshatriya varna as Rajputs.\nStatement 3: Tribal communities were forbidden by royal law from practicing agriculture.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (many tribal groups transitioned to settled wet-rice and dryland agriculture). Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Why was the heroic defense and martyrdom of Rani Durgavati of Garha Katanga (1565) celebrated in central Indian folklore?",
    options: [
      "She chose death in battle over surrender to Mughal subjugation, fighting with immense military valor alongside her wounded son to defend the sovereignty of her Gond kingdom",
      "Because she built the Taj Mahal",
      "Because she gave up her kingdom to live in a forest",
      "Because she defeated the British in 1565"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Rani Durgavati's resistance against Mughal imperial expansion embodies the indomitable martial pride of indigenous central Indian rulers."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "How did the Paik labor system in Ahom Assam differ from traditional feudal slavery?",
    options: [
      "Paiks were free village peasants who contributed rotational state service (military, dyke construction) in exchange for community-allocated agricultural land that could not be taken away by the King without clan approval",
      "Paiks were bought and sold in markets as slaves",
      "Paiks were foreign prisoners of war",
      "Paiks were only employed as palace cooks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Paik system was a reciprocal corvée obligation anchored in inalienable clan land tenure rather than chattel slavery."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What socio-religious transformation occurred as tribal states became large, centralized monarchies?",
    options: [
      "Indigenous animistic and ancestral tribal deities were synthesized with Puranic Hindu pantheons, leading to composite temple patronage under royal sponsorship",
      "All tribal languages were completely banned",
      "Tribal people were forced to move out of India",
      "Monarchy was abolished"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "State centralization fostered syncretic integration: tribal deities (e.g. Kamakhya, Jagannath) were incorporated into Brahmanical temple worship."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Consider four regional tribal communities of medieval India:\n1. Ahoms (Assam)\n2. Gonds (Central India)\n3. Bhils (Western Ghats & Rajasthan)\n4. Cheros (Jharkhand/Bihar)\nWhat common historical trajectory did they share during the 15th–17th centuries?",
    options: [
      "They developed powerful centralized kingdoms or formidable martial resistance networks that negotiated with or contested Mughal imperial expansion",
      "They had no chiefs or leaders",
      "They all converted to European religions in 1500",
      "They lived only on oceanic islands"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "These tribal groups transitioned into structured polities capable of projecting regional power and contesting imperial hegemony."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "Why did the Ahom kingdom successfully resist Mughal conquest for over a century, despite repeated Mughal campaigns?",
    options: [
      "The Ahoms mastered guerrilla warfare in dense riverine terrain, constructed formidable mud and brick fortifications, utilized rapid war-boat naval fleets on the Brahmaputra, and deployed effective firearms",
      "Because the Mughals never entered Assam",
      "Because Assam had no rivers",
      "Because the British defended Assam"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ahom military resilience: naval riverine mastery (Battle of Saraighat 1671 under Lachit Borphukan), guerrilla tactics, and dense terrain."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What was the significance of 'Buranjis' for modern historiography of Northeast India?",
    options: [
      "They provide a continuous, meticulously detailed chronological record of diplomacy, wars, treaties, administrative censuses, and royal successions over 600 years",
      "They are fictional mythological poems only",
      "They were written in modern English",
      "They contain no historical dates"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Buranjis constitute an unprecedented tradition of secular, chronological historiography in medieval Northeast India."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 7: Tribes, Nomads and Settled Communities",
    question: "What master historical synthesis is illuminated in Chapter 7 of NCERT Class 7 History?",
    options: [
      "Indian medieval history was shaped as much by dynamic tribal kingdoms, nomadic pastoralists, and frontier societies as by settled empires, revealing a vibrant pluralistic subcontinent defined by continuous cultural synthesis and political adaptation",
      "That only kings living in Delhi mattered in Indian history",
      "That tribal societies had no culture or history",
      "That India was completely uniform without any regional diversity"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 7 restores historical balance by highlighting the agency, statecraft, and cultural contributions of indigenous tribal and pastoral societies."
  }
];

console.log('Generated Class 7 Social Science Ch7:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/social_ch7.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
