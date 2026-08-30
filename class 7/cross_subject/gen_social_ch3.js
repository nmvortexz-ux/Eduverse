import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 3: Delhi: 12th to 15th Century (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Under the rule of which Rajput dynasty did the city of Delhi first become the capital of a kingdom in the 12th century?",
    options: ["Tomara Rajputs (later defeated by Chauhans / Chahamanas of Ajmer)", "Cholas", "Guptas", "Mauryas"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Delhi first became a capital under the Tomara Rajputs, who were subsequently defeated by the Chauhans of Ajmer."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What were the commercial coins minted in Delhi that had a wide circulation across medieval trade routes called?",
    options: ["Dehliwal", "Dinar", "Tanka", "Rupee"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Coins minted in medieval Delhi were widely recognized as 'Dehliwal'."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What is the historical term for Persian histories/chronicles written by literate secretaries, administrators, and poets in the Delhi Sultanate?",
    options: ["Tarikh (singular) / Tawarikh (plural)", "Prashasti", "Vedas", "Upanishad"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tarikh/Tawarikh were court histories written in Persian, the official administrative language of the Delhi Sultanate."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Who was the FIRST and ONLY female Muslim monarch to sit on the throne of the Delhi Sultanate (daughter of Sultan Iltutmish) in 1236 CE?",
    options: ["Raziyya Sultan (Sultana Raziyya)", "Nur Jahan", "Chand Bibi", "Mumtaz Mahal"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Raziyya Sultan ruled from 1236 to 1240 CE as recognized by chronicler Minhaj-i Siraj."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was a fortified settlement with soldiers stationed permanently for military defense in the Delhi Sultanate called?",
    options: ["Garrison Town", "Hinterland", "Iqta", "Bandagan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A garrison town was a heavily fortified urban military base garrisoned with soldiers."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was the land adjacent to a city or port that supplied it with essential goods, agricultural produce, and services called?",
    options: ["Hinterland", "Garrison Town", "Iqta", "Kharaj"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The hinterland is the surrounding rural territory supplying resources, grain, and labor to an urban center."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What were the special military slaves purchased for military service and trained with great care by early Delhi Sultans (especially Iltutmish) called in Persian?",
    options: ["Bandagan", "Muqti", "Iqtadar", "Ulama"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Bandagan' (plural of banda) were elite military slaves trusted by Sultans over hereditary aristocrats."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was a territorial revenue assignment (land territory) granted to military commanders by the Sultans called?",
    options: ["Iqta", "Kharaj", "Jizya", "Zakat"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An 'Iqta' was a provincial revenue tract assigned to commanders (Iqtadars/Muqtis)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What were the military governors or holders of an Iqta land assignment called?",
    options: ["Iqtadar or Muqti", "Bandagan", "Samanta", "Kotwal"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Iqtadars (or Muqtis) governed Iqtas, maintaining soldiers and collecting territorial revenues."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was the agricultural land tax levied on peasant produce, accounting for about 50% of the peasant's crop yield under Alauddin Khalji?",
    options: ["Kharaj", "Jizya", "Zakat", "Chauth"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kharaj was the standard 50% agricultural crop tax levied directly on cultivators."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Who was the notorious Central Asian Mongol conqueror whose forces invaded Transoxiana in 1219 and repeatedly attacked the Delhi Sultanate?",
    options: ["Genghis Khan (Chingiz Khan)", "Timur", "Babur", "Hulagu Khan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Genghis Khan unified the Mongols, invading Khwarizm and pressing against the northwest frontiers of India."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Which Moroccan traveler arrived in India during the 14th-century reign of Sultan Muhammad Tughluq and left an invaluable travelogue (Rihla)?",
    options: ["Ibn Battuta", "Marco Polo", "Al-Biruni", "Duarte Barbosa"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ibn Battuta from Tangier, Morocco, served as Qazi of Delhi under Muhammad Tughluq and documented Sultanate governance."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was the 'Circle of Justice' (Fakhr-i Mudabbir, 13th century) that explained the interdependent relationship between the King, soldiers, peasants, and state revenue?",
    options: [
      "A king cannot survive without soldiers -> Soldiers cannot live without salaries -> Salaries come from revenue collected from peasants -> Peasants can pay revenue only when they are prosperous and happy -> This happens when the king promotes justice and honest governance",
      "A circle drawn on the ground for duels",
      "A round table where judges sit",
      "A magic circle protecting Delhi forts"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Circle of Justice (Daira-i Adalat) linked monarchical survival directly to peasant prosperity and judicial equity."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Why did the 13th-century chronicler Minhaj-i Siraj acknowledge that Raziyya was more able and qualified than all her brothers, yet felt uncomfortable with her rule?",
    options: [
      "He believed that female sovereignty violated the patriarchal ideal social order ordained by God, where women were supposed to be subordinate to men",
      "Because Raziyya lost all wars",
      "Because Raziyya could not read Persian",
      "Because Raziyya gave all kingdom wealth to foreign traders"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Minhaj articulated medieval patriarchal ideology: viewing female monarchs as disrupting divine gender hierarchies."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Why did early Delhi Sultans (like Iltutmish) prefer to appoint their purchased military slaves (Bandagan) to high governorships rather than traditional noble aristocrats?",
    options: [
      "Slaves had no family lineage or hereditary local loyalties; they were entirely dependent on the Sultan for their livelihood and were exceptionally loyal and obedient",
      "Because slaves cost no money",
      "Because noble aristocrats could not fight wars",
      "Because slaves knew magic"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Royal patronage of Bandagan secured a dedicated praetorian corps personally beholden to the Sultan alone."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "How did Alauddin Khalji maintain strict control over his Muqtis (Iqtadars) to prevent corruption and rebellion?",
    options: [
      "Their offices were made non-hereditary, Iqtas were assigned for short periods before frequent transfers, and state accountants were appointed to audit revenues and verify troop numbers",
      "He let Muqtis keep all taxes without auditing",
      "He abolished all soldiers",
      "He gave Muqtis absolute permanent ownership of lands"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Alauddin enforced non-hereditary tenure, frequent transfers, and rigorous auditing of Muqti revenue and troop contingents."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What market and price control measures did Alauddin Khalji implement in Delhi to maintain a large standing army at sustainable costs against Mongol invasions?",
    options: [
      "He strictly fixed the maximum selling prices of all commodities (grains, cloth, sugar, horses), appointed market inspectors (Shahna-i Mandi), and harshly punished any merchant who cheated or overcharged",
      "He doubled the price of all foods",
      "He banned all private markets completely",
      "He printed unlimited paper money"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Alauddin's economic reforms: price caps, state grain silos, and market superintendents (Shahna-i Mandi) to sustain military mobilization."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was Sultan Muhammad bin Tughluq's infamous 'Token Currency' experiment and why did it fail disastrously?",
    options: [
      "He issued cheap copper and brass coins having the same face value as silver Tankas; people easily forged the simple copper coins at home, paid taxes in fake tokens, and hoarded genuine gold and silver coins",
      "Because copper turned into water",
      "Because people threw coins into the river",
      "Because the coins had no numbers written on them"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Unminted token brass/copper tokens were easily counterfeited by artisans, bankrupting the imperial exchequer (Gresham's Law)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was Muhammad bin Tughluq's controversial decision to shift the imperial capital from Delhi to DAULATABAD (Devagiri in Deccan)?",
    options: [
      "He wanted to govern southern peninsular India and defend against northern Mongol attacks more effectively, but forced the entire population of Delhi to march 1,500 km south, causing immense suffering",
      "Because Delhi ran out of drinking water",
      "Because Daulatabad had gold houses",
      "Because he wanted to move to Europe"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The forced relocation to Daulatabad (1327 CE) caused widespread fatalities during the transit and was subsequently abandoned."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "In mosque architecture, what is the orientation towards Mecca that Indian Muslims face during prayer (towards the West) called?",
    options: ["Qibla", "Mihrab", "Minaret", "Khutba"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Qibla is the sacred directional orientation toward the Kaaba in Mecca (due West from the Indian subcontinent)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was the Friday congregational sermon delivered by the Imam during Namaz called?",
    options: ["Khutba", "Qibla", "Mihrab", "Iqta"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Khutba is the formal liturgical address and sermon delivered during Friday Juma congregational prayers."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What were the five distinct ruling dynasties of the Delhi Sultanate in chronological order (1206 to 1526 CE)?",
    options: [
      "Early Turkish / Mamluk Slave Dynasty -> Khalji Dynasty -> Tughluq Dynasty -> Sayyid Dynasty -> Lodi Dynasty",
      "Mughals -> Marathas -> British -> Cholas -> Guptas",
      "Khalji -> Slave -> Lodi -> Sayyid -> Tughluq",
      "Rajputs -> Cholas -> Mauryas -> Palas -> Lodis"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Chronological sequence: Mamluks (1206–1290) → Khaljis (1290–1320) → Tughluqs (1320–1414) → Sayyids (1414–1451) → Lodis (1451–1526)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Which ambitious Afghan ruler defeated Mughal Emperor Humayun in 1540 and established the Sur Empire, creating an administrative model later adopted by Emperor Akbar?",
    options: ["Sher Shah Sur (Sher Shah Suri)", "Ibrahim Lodi", "Bahlul Lodi", "Babur"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sher Shah Suri (r. 1540–1545 CE) standardized silver Rupiya currency, built the Grand Trunk Road, and designed administrative revenue systems."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was the massive congregational mosque built by the Delhi Sultans in their first city (Dehli-i Kuhna) called?",
    options: ["Quwwat al-Islam Mosque and Qutb Minar complex", "Jama Masjid of Shah Jahan", "Moti Masjid", "Taj Mahal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Quwwat al-Islam mosque and Qutb Minar were initiated by Qutbuddin Aibak and expanded by Iltutmish and Alauddin Khalji."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Who was the military general under Alauddin Khalji who led sensational military campaigns deep into South India (Warangal, Dwarasamudra, Madurai)?",
    options: ["Malik Kafur (Hazar Dinari)", "Ulugh Khan", "Zafar Khan", "Minhaj-i Siraj"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Malik Kafur commanded Alauddin's southern military expeditions between 1309 and 1311 CE, extracting vast tribute in elephants and gold."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What new military garrison city was constructed by Alauddin Khalji for his soldiers in Delhi?",
    options: ["Siri Fort", "Daulatabad", "Jahanpanah", "Tughluqabad"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Siri was established by Alauddin Khalji c. 1303 as a heavily fortified military garrison town in Delhi."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was the primary language of administration and official court record-keeping throughout the Delhi Sultanate?",
    options: ["Persian (Farsi)", "Arabic", "Sanskrit", "Urdu"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Persian was the elite court language and bureaucratic administrative medium of the Delhi Sultanate."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Why did author Ziauddin Barani criticize Sultan Muhammad Tughluq for appointing wine distillers, barbers, cooks, and gardeners to high administrative posts?",
    options: [
      "Barani reflected aristocratic elite bias and lamented the loss of aristocratic monopoly over state power to low-born individuals",
      "Because the appointees could not cook well",
      "Because the appointees were foreigners from England",
      "Because they refused to accept salaries"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Barani's conservative aristocratic perspective decried merit-based or non-noble appointments as a decline of imperial judgment."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Read the statements:\nAssertion (A): Control of garrison towns in distant Bengal and Sindh from Delhi was exceptionally fragile and prone to frequent rebellion during the 13th century.\nReason (R): Communication routes were frequently severed by inclement monsoon weather, immense overland distances, and persistent rebellion by local governors and Mongol raids across the northwest frontier.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Pre-modern logistics and regional distances severely compromised the central authority of Delhi over outlying frontier garrisons."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Spot the IMPOSTER in the comparative administrative strategies between Alauddin Khalji and Muhammad bin Tughluq:\nGroup:\n1. Alauddin Khalji built a new garrison town named Siri for his soldiers.\n2. Muhammad bin Tughluq emptied the oldest city of Delhi (Dehli-i Kuhna) and moved residents to Daulatabad.\n3. Alauddin Khalji paid soldiers in cash and strictly controlled market prices.\n4. Muhammad bin Tughluq used pure diamond coins as common currency.",
    options: ["Statement 1", "Statement 2", "Statement 3", "Statement 4 (Muhammad Tughluq used cheap TOKEN COPPER/BRASS coins, NOT diamond coins)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 4 is an absurdity: Muhammad Tughluq experimented with base metal (bronze/copper) token currency, not diamond coins."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Analyze the fiscal mechanics of the 'Iqta System':\nHow did the Sultanate ensure that Muqtis did not oppress peasants or hoard surplus state funds?",
    options: [
      "Muqtis were allowed to collect ONLY the taxes assessed by the state and maintain strictly prescribed contingents of soldiers; imperial accountants (Amils) audited tax records annually",
      "Muqtis could take 100% of all village property",
      "Peasants were forbidden from farming",
      "No records were maintained"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The state separated fiscal assessment from tax collection, deploying imperial accountants to check Muqti ledgers and muster rolls (Dagh and Chehra)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Match Column I (Sultanate Dynasties) with Column II (Prominent Rulers / Timeline):\n(a) Mamluk / Early Turkish (1206-1290) -> (i) Qutbuddin Aibak, Iltutmish, Raziyya, Balban\n(b) Khalji Dynasty (1290-1320)         -> (ii) Jalaluddin and Alauddin Khalji\n(c) Tughluq Dynasty (1320-1414)        -> (iii) Ghiyasuddin, Muhammad bin Tughluq, Firuz Shah\n(d) Lodi Dynasty (1451-1526)           -> (iv) Bahlul, Sikandar, and Ibrahim Lodi",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Exact chronological matching of the ruling dynasties and foundational sultans of Delhi."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Read the statements regarding military expansion of the Delhi Sultanate:\nStatement 1: 'Internal Frontier' campaigns aimed at consolidating the hinterlands of the garrison towns by clearing forests in the Ganga-Yamuna Doab and settling peasant agriculture.\nStatement 2: 'External Frontier' campaigns targeted military raids into Southern India to capture war booty, elephants, horses, and slaves.\nStatement 3: The Delhi Sultans conquered and annexed the entire continent of Europe.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is historically false. Statements 1 and 2 represent the classic dual-axis military expansion model of the Sultanate."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Why was the Battle of Panipat (1526 CE) a watershed turning point in Indian history?",
    options: [
      "Babur (Mughal ruler of Kabul) defeated Ibrahim Lodi (last Sultan of Delhi), ending the 320-year Delhi Sultanate and founding the Mughal Empire",
      "It established British rule in India",
      "It ended all wars in Asia forever",
      "It resulted in the partition of India"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "First Battle of Panipat (21 April 1526): Babur's matchlocks and field artillery annihilated Ibrahim Lodi's forces, inaugurating the Mughal era."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "How did Queen Rudramadevi (1262–1289 CE) of the Kakatiya dynasty of Warangal navigate patriarchal prejudices compared to Raziyya Sultan?",
    options: [
      "She changed her name on her royal inscriptions to pretend she was a man, adopting male persona to avoid social resistance to female kingship",
      "She fled to another country",
      "She surrendered her throne to the Delhi Sultan",
      "She banned all men from her kingdom"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Rudramadevi adopted the masculine title 'Rudradeva Maharaja' on epigraphs to bypass patriarchal prejudices."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was the significance of 'Begumpuri Mosque' built in the reign of Muhammad Tughluq?",
    options: [
      "It was the main congregational mosque of Jahanpanah, the 'Sanctuary of the World', Sultan Muhammad Tughluq's new capital in Delhi",
      "It was built entirely of wood",
      "It was a Buddhist monastery",
      "It was built by the British"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Begumpuri Mosque was the monumental central congregational Jami mosque of Jahanpanah, Tughluq's fourth medieval city of Delhi."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Consider four key administrative elements introduced under Alauddin Khalji:\n1. Direct state assessment of land revenue\n2. 'Dagh' (branding of horses) and 'Chehra' (descriptive roll of soldiers)\n3. Shahna-i Mandi (market superintendents)\n4. Kharaj fixed at 50% of produce\nWhat was the common primary strategic objective behind all four measures?",
    options: [
      "To maximize imperial revenue extraction and maintain a massive, highly efficient, standing military machine capable of crushing Mongol invasions",
      "To encourage foreign merchants to take over the empire",
      "To eliminate all agriculture",
      "To prepare for a pilgrimage to Mecca"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "All four reforms formed an integrated fiscal-military apparatus designed to sustain standing armies against continuous Mongol invasions."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What was the social background of the authors of Tawarikh (Persian histories)?",
    options: [
      "Learned urban men (secretaries, administrators, poets, courtiers) who lived in cities (mainly Delhi) and hardly ever in rural villages, writing histories to earn rich rewards from Sultans",
      "Poor peasant farmers in remote villages",
      "Tribal forest nomads",
      "Foreign sailors on the ocean"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Tawarikh chroniclers were urban court literati dependent on royal patronage, articulating aristocratic perspectives."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "Why did Ibn Battuta describe the fortress-like bamboo groves in India as impenetrable fortifications for local chieftains?",
    options: [
      "Giant interlocking bamboo clumps were dense, tough, and fire-resistant; chieftains lived securely inside them with their cattle and crops, cut off from cavalry attacks",
      "Because bamboos shoot poisonous arrows",
      "Because bamboos were made of iron",
      "Because wild tigers guarded the bamboos"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ibn Battuta documented how dense indigenous bamboo thickets formed natural defensive bastions impenetrable to imperial cavalry."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 3: Delhi: 12th to 15th Century",
    question: "What master historical transformation is traced in Chapter 3 of NCERT Class 7 History regarding Delhi?",
    options: [
      "The transformation of Delhi from a minor regional Rajput trade post into the monumental imperial capital of a pan-subcontinental sultanate, creating new models of administrative centralization, fiscal taxation, and Indo-Islamic architectural grandeur",
      "The complete abandonment of Delhi as a ruined ghost town",
      "The conquest of Delhi by Roman emperors",
      "The conversion of Delhi into a farming village"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 3 chronicles the political, architectural, and fiscal institutional evolution of Delhi into an imperial metropolis."
  }
];

console.log('Generated Class 7 Social Science Ch3:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/social_ch3.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
