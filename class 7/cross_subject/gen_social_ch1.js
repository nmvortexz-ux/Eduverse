import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 1: Tracing Changes Through a Thousand Years (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "A person who draws and creates geographical maps is professionally called a:",
    options: ["Cartographer", "Calligrapher", "Scribe", "Archaeologist"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A cartographer is a specialist in the science and art of mapmaking and chart projection."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "How did the 12th-century Arab geographer Al-Idrisi (1154 CE) orient his famous map of the Indian subcontinent compared to modern maps?",
    options: [
      "South India was shown at the TOP where North India is today, and Sri Lanka was shown as an island at the top",
      "He showed India upside down with Himalayas at the bottom",
      "He showed only oceans without land",
      "His map was identical to Google Maps"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Al-Idrisi's 1154 CE Arabic map oriented South at the top, showing Sri Lanka at the upper summit."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "In the 13th century, what geographical area did the Persian chronicler Minhaj-i Siraj mean when he used the term 'Hindustan'?",
    options: [
      "The lands of Punjab, Haryana, and the fertile plains between the Ganga and Yamuna rivers ruled by the Delhi Sultan",
      "The entire modern republic of India including south India",
      "The continent of Asia",
      "Only the island of Sri Lanka"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Minhaj-i Siraj used 'Hindustan' in a political sense to denote the Gangetic and Doab domains of the Delhi Sultanate."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "In the early 16th century, how did the Mughal Emperor Babur use the term 'Hindustan' in his autobiography (Baburnama)?",
    options: [
      "To describe the geography, the natural fauna, and the distinct cultural customs of the inhabitants of the subcontinent",
      "As a political nation-state with a constitution",
      "To describe only Afghanistan",
      "To refer to the Roman Empire"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Babur employed 'Hindustan' in a biogeographical and cultural sense to describe the subcontinent's fauna, flora, and customs."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "In the medieval period, what did the term 'Foreigner' (Pardesi in Hindi / Ajnabi in Persian) mean?",
    options: [
      "Any stranger who appeared in a given village or town and was not a part of that local society or culture",
      "Only a person from another foreign country",
      "An English trader only",
      "A king from Rome"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In medieval times, a 'foreigner' (ajnabi/pardesi) was any outsider/stranger from another village, not necessarily from a foreign nation."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Before the invention of printing presses in India, who copied historical manuscripts by hand?",
    options: ["Scribes (professional handwritten copyists)", "Cartographers", "Samantas", "Carpenters"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Scribes laboriously transcribed handwritten manuscript codices before the introduction of mechanical printing."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "A place or building where official historical documents, records, and original manuscripts are preserved and stored is called an:",
    options: ["Archive", "Museum", "Observatory", "Armory"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An archive is a specialized repository where state administrative records, charters, and historical manuscripts are curated."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What new group of warrior Kshatriya clans rose to great political and military prominence between the 8th and 14th centuries, derived from the Sanskrit term 'Rajaputra' (son of a king)?",
    options: ["Rajputs", "Cholas", "Guptas", "Vaisyas"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The term 'Rajput' (from Rajaputra) designated martial warrior clans claiming Kshatriya lineage across northern and western India."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Which of the following new agricultural crops and beverages were introduced to the Indian subcontinent from the Americas and foreign trade during this thousand-year period?",
    options: [
      "Potatoes, Corn (Maize), Chillies, Tea, and Coffee",
      "Wheat, Rice, and Barley",
      "Mustard and Cotton",
      "Jowar and Bajra"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Columbian exchange and trade brought potatoes, maize, chillies, tomatoes, tobacco, tea, and coffee to India."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What was a sub-caste or social ranking formed within the caste hierarchy based on occupation, family background, and social status called?",
    options: ["Jati", "Varna", "Samanta", "Ulama"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Jatis were occupational sub-castes ranked fluidly according to their local wealth, power, and ritual status."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Who framed the rules and regulations to manage the conduct of members within each Jati?",
    options: [
      "The Jati Panchayat (an assembly of village elders belonging to that specific jati)",
      "The Mughal Emperor",
      "Foreign merchants",
      "Roman senators"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Jati Panchayats were self-regulating assemblies of caste elders enforcing community occupational and marital norms."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What is the holy scripture of Islam that contains the divine revelations received by Prophet Muhammad?",
    options: ["The Quran (Holy Quran)", "The Zend Avesta", "The Tripitaka", "The Torah"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Holy Quran is the central sacred liturgical text of Islam revealed to Prophet Muhammad in Arabic."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Why do historians face enormous challenges and discrepancies when reading ancient handwritten manuscripts copied by scribes?",
    options: [
      "As scribes copied by hand, they frequently made unintentional copying errors, added small modifications, or substituted words, which compounded over centuries until different manuscript copies differed significantly from the author's original text",
      "Because all scribes wrote in secret codes to trick historians",
      "Because paper was made of metal and faded",
      "Because manuscripts were burned by kings"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Manual transcription errors accumulated exponentially over generations of copyists, resulting in divergent recensions."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Who was the 14th-century chronicler Ziauddin Barani, and why did modern historians discover his first chronicle version only in the 1960s?",
    options: [
      "Barani wrote his first chronicle in 1356 and a revised second version in 1358; the first version remained lost in vast library archives undiscovered until 1960",
      "Because Barani hid his book inside a cave",
      "Because his book was written in hieroglyphics",
      "Because Barani was a fictional character"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ziauddin Barani's 1356 CE recension of Tarikh-i Firuz Shahi was rediscovered in manuscript collections in the 1960s."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What major technological innovations appeared in the Indian subcontinent between 700 and 1750 CE?",
    options: [
      "The Persian Wheel in irrigation, the Spinning Wheel (Charkha) in weaving, and Firearms (cannons & gunpowder) in combat warfare",
      "Steam locomotives and telegraphs",
      "Computers and electricity",
      "Airplanes and submarines"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The medieval era witnessed crucial mechanical adoptions: saqia/Persian wheel, spinning wheel, and pyrotechnic firearms."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Why were many forest dwellers forced to migrate or become peasant farmers during the medieval thousand years?",
    options: [
      "Extensive clearing of natural forests to expand agricultural arable land fundamentally changed forest habitats, pushing forest dwellers into agrarian village society",
      "Because wild animals drove them out",
      "Because forests turned into deserts overnight",
      "Because kings banned living near trees"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Agricultural expansion and deforestation transformed tribal forest habitats, integrating tribals into peasant jati hierarchies."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What is a 'Pan-Regional Empire' in medieval Indian history?",
    options: [
      "An expansive empire spanning diverse geographic, linguistic, and cultural regions (such as the Cholas, Khaljis, Tughluqs, and Mughals)",
      "A small city-state ruling one town",
      "A maritime empire in Europe",
      "An empire ruled by a single village council"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Pan-regional polities integrated multiple diverse geographical sub-regions under an overarching imperial state apparatus."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Who were the 'Ulama' in medieval Islamic society?",
    options: [
      "Learned Muslim scholars, jurists, and theologians expert in Islamic sacred law (Sharia) and religious jurisprudence",
      "Foreign horse merchants",
      "Architects who built forts",
      "Musicians in royal courts"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Ulama were authoritative theologians and jurists responsible for interpreting Islamic theology and Sharia law."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What was the fundamental theological difference between the SHIA and SUNNI traditions within Islam?",
    options: [
      "Shia Muslims believed that Prophet Muhammad's son-in-law Ali was the legitimate leader (Imam) of the Muslim community ; Sunni Muslims accepted the authority of the early Caliphs (Khalifas)",
      "Shias worshipped fire while Sunnis worshipped water",
      "Sunnis did not believe in the Quran",
      "Shias did not pray at all"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Schism: Sunnis recognized the historical succession of the Rashidun Caliphate; Shias recognized the hereditary leadership of Ali and Imams."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What were the two prominent schools of Islamic legal jurisprudence (Fiqh) influential in medieval India?",
    options: ["Hanafi and Shafi'i schools", "Maliki and Hanbali only", "Greek and Roman schools", "Vedic and Buddhist schools"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Hanafi and Shafi'i madhhabs (schools of Islamic jurisprudence) were the primary legal traditions in the subcontinent."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Why was the 19th-century British historian James Mill's tripartite division of Indian history into 'Hindu', 'Muslim', and 'British' periods fundamentally flawed?",
    options: [
      "It characterized entire historical epochs solely by the personal religion of rulers, ignoring immense socio-economic diversity, scientific advances, and the diverse beliefs of ordinary people",
      "Because Mill was an Indian prince",
      "Because there were no religions in India",
      "Because British rule lasted 2,000 years"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mill's communal periodization reduced complex multifaceted socio-economic and cultural histories to simplistic sectarian labels."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "How do modern historians divide Indian history to reflect broader socio-economic, cultural, and technological transitions?",
    options: [
      "Ancient Period, Medieval Period, and Modern Period",
      "Stone Age and Digital Age only",
      "Kings Age and Queens Age",
      "War Age and Peace Age"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Historiographical periodization utilizes Ancient, Medieval (c. 700–1750 CE), and Modern frameworks reflecting structural socio-economic shifts."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What major transformation occurred in Hinduism during the medieval thousand years?",
    options: [
      "The worship of new deities, the construction of massive royal stone temples, the growing social prestige and land grants (Brahmadeya) to Brahmanas, and the emergence of the Bhakti Movement",
      "The complete disappearance of all temples",
      "The ban on reading Sanskrit texts",
      "The replacement of all gods by Roman deities"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Medieval Hinduism saw temple-centered devotion, royal Brahmanical patronage, and popular personal Bhakti traditions without rigid rituals."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What was the central liberating appeal of the 'Bhakti Movement' to ordinary common people during the medieval era?",
    options: [
      "The idea of an intimate, personal, loving God whom devotees could reach directly with pure love without the mandatory mediation of wealthy priests or elaborate, costly sacrifices",
      "Devotees had to give all their gold to kings",
      "Devotees were forced to learn Greek",
      "Bhakti banned music and poetry"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Bhakti democratized spirituality: direct, unmediated personal love (prema/bhakti) open to all genders and castes."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What was the French cartographer Guillaume de L'Isle's atlas map of India (1720s) famous for?",
    options: [
      "Remarkable scientific accuracy, modern orientation, and highly detailed coastal navigation geography used extensively by European maritime merchants",
      "It showed South India at the top",
      "It omitted all Indian rivers",
      "It had no place names"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 18th-century French atlas reflected advanced maritime surveying, exhibiting coastlines familiar to modern cartography."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Who were the 'Kayasthas' that gained prominent social and administrative status during this period?",
    options: [
      "A specialized caste of scribes, record-keepers, secretaries, and administrative accountants",
      "Warrior cavalry officers",
      "Temple stone carvers",
      "Sea sailors"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Kayasthas emerged as an influential literate occupational community managing state archives, revenue ledgers, and scribal administration."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Why did the price of Paper fall and its availability increase dramatically during the 13th and 14th centuries in India?",
    options: [
      "Introduction of pulping watermills and spread of papermaking technology from China and the Islamic world led to widespread copying of religious, legal, and judicial texts",
      "Because trees were made of paper",
      "Because kings banned writing on palm leaves",
      "Because books were imported from America"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Papermaking technology diffusion dramatically expanded codex production, record-keeping, and legal archiving."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What were the two major styles of Persian and Arabic handwriting used by scribes in medieval India?",
    options: [
      "Nastaliq (flowing, cursive, easy to read) and Shikaste (dense, cramped, rapid, and difficult to decipher)",
      "Devanagari and Brahmi",
      "Gothic and Latin",
      "Cuneiform and Hieroglyphic"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Nastaliq was fluid and legible for literary codices; Shikaste was dense and rapid for state administrative correspondence."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Read the statements:\nAssertion (A): Historical terms, political labels, and language vocabularies do not remain static but undergo profound semantic mutations across historical centuries.\nReason (R): The term 'Hindustan' transformed from denoting the 13th-century Sultanate territory between Ganga-Yamuna to Babur's 16th-century biogeographical description, and finally into the 20th-century sovereign nation-state of India.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Historical semantics demonstrate that geopolitical terminologies shift dynamically alongside changing state formations and cultural frameworks."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Spot the IMPOSTER in the following group of historical sources matched with their methodological limitations:\nGroup:\n1. Coins - Provide chronology and titles of monarchs\n2. Inscriptions - Offer land grant records and genealogical Prashastis\n3. Handwritten Manuscripts - Perfectly preserved exact author duplicates with zero textual errors\n4. Travelogues - Provide socio-cultural impressions from foreign travelers",
    options: ["Statement 1", "Statement 2", "Statement 3 (Handwritten manuscripts contain cumulative scribal errors)", "Statement 4"],
    correctAnswer: 2,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an imposter: handwritten manuscripts were prone to cumulative transcriptional distortions and variants across scribal generations."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Analyze the multi-layered social hierarchy of Jatis in medieval villages:\nHow was power, status, and judicial order negotiated between Jatis, Jati Panchayats, and the Village Grama?",
    options: [
      "Each Jati had its own elders' council (Jati Panchayat) to enforce internal customs, but every village was simultaneously governed by a Chieftain/Gramani, subject to overarching state revenue laws",
      "Jatis were completely independent and fought wars every day",
      "Only the King could make laws for individual jatis",
      "There were no laws or village councils in medieval times"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Medieval village governance balanced endogenous Jati autonomy with overarching territorial village council and royal state authority."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Match Column I (Historical Cartographers / Authors) with Column II (Work / Perspective):\n(a) Al-Idrisi (1154 CE)           -> (i) Arabic map with South India at the top\n(b) French Cartographer (1720s)   -> (ii) Scientifically detailed coastal maritime atlas\n(c) Minhaj-i Siraj (13th Century) -> (iii) Sultanate political definition of Hindustan\n(d) Ziauddin Barani (1356/1358)   -> (iv) Two distinct manuscript versions of Tarikh-i Firuz Shahi",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Al-Idrisi = inverted map; French atlas = maritime surveying; Minhaj = political Hindustan; Barani = dual recensions."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Read the statements regarding religious developments in medieval India:\nStatement 1: Islam was introduced to the Indian subcontinent by Arab merchants and traders arriving along the coastal ports long before military conquests.\nStatement 2: The Bhakti and Sufi movements shared a common core emphasizing compassionate personal devotion over rigid ritualism and social orthodoxy.\nStatement 3: Scribes used mechanical laser printing presses in 1200 CE in Delhi.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an anachronistic absurdity (printing presses were not present in 1200 CE). Statements 1 and 2 are historical realities."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Why do modern historians consider the period between 700 and 1750 CE as a time of 'Great Mobility and Dynamic Flux'?",
    options: [
      "Groups of people traveled vast distances in search of economic opportunity, pastoralists settled as peasants, forest dwellers integrated into jatis, and new warrior confederacies reshaped frontiers",
      "Because people lived in airplanes",
      "Because all cities were completely destroyed",
      "Because money was abolished"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The era witnessed high geographic/social mobility: agrarian colonization, pastoral sedentarization, and dynamic political reconfiguration."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "How did Brahmanas achieve unrivaled social prestige and dominant ideological authority in early medieval society?",
    options: [
      "Their mastery of sacred Sanskrit texts earned them profound veneration, while royal rulers granted them vast tax-free estates (Brahmadeya/Agraharas) and state patronage",
      "They possessed the largest armies of cavalry",
      "They were the only merchants in the kingdom",
      "They lived outside the subcontinent"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Epistemic monopoly over Sanskrit liturgy combined with royal land grants (Brahmadeya) consolidated Brahmanical socio-ritual dominance."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Consider four medieval occupational groups:\n1. Rajputs (Martial chivalry and Kshatriya governance)\n2. Jats (Agrarian peasant power)\n3. Marathas (Deccan military and statecraft)\n4. Kayasthas (Scribal documentation and revenue administration)\nWhat common historical trajectory did these four communities share between 700 and 1750 CE?",
    options: [
      "They utilized emerging socio-political opportunities to claim elevated social status, political autonomy, and state-building power",
      "They all gave up their occupations to become monks",
      "They were all foreign invaders from Europe",
      "They completely disappeared from Indian history"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "These communities leveraged military prowess, agrarian expansion, and bureaucratic literacy to attain upward mobility and sovereignty."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What is the critical distinction between 'Continuity' and 'Change' in historical analysis as emphasized in Chapter 1?",
    options: [
      "History is not a series of abrupt isolated events, but a continuous dialectical process where cultural traditions persist alongside profound technological, economic, and political shifts",
      "History only records sudden catastrophic changes",
      "Nothing ever changes in human civilization",
      "Only kings determine the path of history"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Historical methodology balances identifying enduring structural continuities against dynamic socio-cultural transformations."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "Why is the term 'Medieval' problematic when applied uniformly across global civilizations without regional nuance?",
    options: [
      "In Europe, 'Medieval' was long stereotyped as a dark age lacking intellectual progress before the Renaissance; in India, the same period was an era of extraordinary technological, artistic, and economic vitality",
      "Because medieval means modern",
      "Because India had no history during this time",
      "Because Europe was ahead in every science"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Eurocentric 'Dark Age' medieval tropes contrast starkly with India's vibrant urbanization, agrarian growth, and cultural synthesis (700–1750 CE)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What primary archival material provides the most reliable primary chronological records of medieval Persianate court administration?",
    options: [
      "Tarikh / Tawarikh (Persian historical chronicles written by literate court officials, secretaries, and poets)",
      "Oral folk gossip",
      "Roman coin hoards only",
      "Cave rock paintings"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Tawarikh chronicles (e.g. Tarikh-i Firuz Shahi) authored by court literati provide primary narrative accounts of governance and military campaigns."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 1: Tracing Changes Through a Thousand Years",
    question: "What foundational intellectual mindset does Chapter 1 of NCERT Class 7 History instill in young scholars?",
    options: [
      "Critical historical inquiry: examining primary sources with contextual skepticism, tracing semantic shifts in language, and appreciating the deep multicultural roots of modern Indian society",
      "Unquestioning memorization of dates and king names",
      "Viewing the past through narrow sectarian biases",
      "Believing that ancient maps were always wrong"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The chapter equips students with historiographical toolkits: contextual source criticism, semantic evolution, and composite cultural synthesis."
  }
];

console.log('Generated Class 7 Social Science Ch1:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/social_ch1.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
