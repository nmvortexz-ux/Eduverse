import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 11: New Empires and Kingdoms (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What is a 'Prashasti' in ancient Indian history?",
    options: [
      "A special royal inscription composed by court poets in praise of a king's lineage, conquests, and virtues (from Sanskrit 'prashasti' meaning 'in praise of')",
      "A tax collection receipt",
      "A religious temple bell",
      "A map of a battlefield"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Prashastis were eulogistic royal epigraphs composed in Sanskrit celebrating royal ancestry and military victories."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Which famous Gupta ruler is celebrated in the famous 'Allahabad Pillar Inscription' (Prayag Prashasti), composed by his court poet Harisena?",
    options: ["Samudragupta", "Chandragupta I", "Ashoka", "Harshavardhana"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Harisena composed the Sanskrit Prayag Prashasti on an Ashokan pillar in Allahabad, detailing Samudragupta's campaigns."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "How is the great Gupta emperor Samudragupta depicted playing a musical instrument on his famous gold coins?",
    options: ["Playing the Veena (string instrument)", "Playing the flute", "Playing the drum (mridangam)", "Playing the trumpet"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gold coins depicting Samudragupta seated on a couch playing the veena highlight his accomplishments as a poet-musician ('Kaviraja')."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Which title meaning 'Great King of Kings' was adopted by Chandragupta I and his son Samudragupta?",
    options: ["Maharajadhiraja", "Raja", "Maharaja", "Samanta"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The imperial title 'Maharajadhiraja' signified supreme sovereign authority over lesser subordinate rulers."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Which famous Gupta ruler defeated the Shakas in western India and adopted the renowned title 'Vikramaditya'?",
    options: ["Chandragupta II (Vikramaditya)", "Samudragupta", "Kumaragupta", "Skandagupta"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Chandragupta II extinguished Shaka rule in Gujarat and Malwa, establishing his court adorned by the 'Navaratnas'."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Who was the legendary Sanskrit poet and dramatist (author of 'Abhijnanashakuntalam' and 'Meghaduta') who adorned the court of Chandragupta II?",
    options: ["Kalidasa", "Banabhatta", "Harisena", "Ravikirti"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kalidasa, celebrated as the Shakespeare of India, was the foremost jewel among Chandragupta II's Navaratnas."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Who ruled northern India from Kannauj around 1400 years ago (606–647 CE), whose biography 'Harshacharita' was written in Sanskrit by his court poet Banabhatta?",
    options: ["Harshavardhana", "Samudragupta", "Pulakeshin II", "Mahendravarman I"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Harshavardhana of the Pushyabhuti dynasty ruled northern India from Kannauj; Banabhatta authored his biography 'Harshacharita'."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Which powerful Chalukya king of the Deccan defeated King Harshavardhana on the banks of the Narmada River when Harsha attempted to march into south India?",
    options: ["Pulakeshin II", "Kirtivarman I", "Vikramaditya I", "Dantidurga"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Pulakeshin II halted Harsha's southward expansion at the Narmada (c. 618 CE), celebrated in the Aihole inscription."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Who was the court poet of Pulakeshin II who composed the famous 'Aihole Prashasti' in Sanskrit verse on the Meguti Jain temple wall?",
    options: ["Ravikirti", "Banabhatta", "Harisena", "Dandin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ravikirti composed the Aihole inscription in 634 CE, describing Pulakeshin II's military triumphs across Peninsular India."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What was the capital city of the powerful Pallava dynasty, renowned as a magnificent center of temple architecture and Sanskrit learning?",
    options: ["Kanchipuram (Kanchi)", "Madurai", "Badami (Vatapi)", "Thanjavur"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kanchipuram was the religious and administrative capital of the Pallavas, dotted with grand structural stone temples."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What was the capital city of the Chalukyas, famous for its magnificent rock-cut and structural temples (like the Durga Temple)?",
    options: ["Vatapi (modern Badami in Karnataka) and Aihole", "Kanchipuram", "Ujjain", "Pataliputra"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Vatapi (Badami) in the Malaprabha valley was the Chalukyan capital, with Aihole as an experimental temple architecture center."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "In the Pallava and southern kingdoms, what were local village assemblies called?",
    options: ["Sabha (Brahmana landholders), Ur (non-Brahmana village assembly), and Nagaram (merchant guild)", "Panchayat and Grama", "Samiti and Parishad", "Shreni and Sangha"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Southern rural administration operated through assemblies: Sabha (Brahmadeya landholders), Ur (peasant landowners), Nagaram (merchants)."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "How did Harisena in the Allahabad Prashasti describe Samudragupta's differentiated policy towards the TWELVE rulers of 'Dakshinapatha' (South India)?",
    options: [
      "They surrendered after being defeated, were magnanimously liberated by Samudragupta, and allowed to rule their kingdoms again on condition of paying regular tribute and obeisance (Dharma Vijaya)",
      "They were all executed and their land was destroyed",
      "They were taken to Pataliputra as prisoners forever",
      "They were made to join the Roman army"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Grahana-Mokshanugraha policy: Samudragupta defeated southern rulers, accepted their submission/tribute, and reinstated them."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "How did Samudragupta treat the rulers of 'Aryavarta' (Northern Gangetic India)?",
    options: [
      "Nine rulers of Aryavarta were uprooted completely and their territories were annexed directly into the Gupta Empire",
      "He made peace treaties with them without war",
      "He gave them half his gold",
      "He allowed them to rule independently"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Prasabhoddharana policy: the 9 Gangetic Aryavarta rulers were overthrown and their lands annexed into direct Gupta governance."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Who were the 'Samantas' in early medieval Indian administration?",
    options: [
      "Military chieftains and feudal lords who provided armed troops to the king during war, collected local revenue, and paid tribute to the monarch",
      "Foreign ambassadors from China",
      "Buddhist monks living in caves",
      "Peasant farmers who ploughed land"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Samantas were feudal military vassals who maintained private retinues, remitted tribute, and revolted when central kings weakened."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What administrative change occurred in key government posts (such as 'Maha-danda-nayaka' / Chief Judicial Officer) during the Gupta era?",
    options: [
      "Administrative posts became increasingly HEREDITARY (e.g. Harisena was a Maha-danda-nayaka just like his father Harisena before him)",
      "Officers were selected through written computer exams",
      "Kings replaced all officers every year",
      "Officers had to be Roman citizens"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gupta bureaucracy became hereditary: sons inherited ministerial and judicial offices, concentrating local bureaucratic power."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What was a single official holding MULTIPLE administrative portfolios called during the Gupta period (e.g. Harisena being a Kumaramatya, Maha-danda-nayaka, and Sandhi-vigrahika)?",
    options: [
      "Cumulation of offices (holding multiple concurrent ministerial, judicial, and diplomatic roles)",
      "Military dictatorship",
      "Feudal democracy",
      "Monastic governance"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Harisena held three concurrent ranks: Kumaramatya (minister), Maha-danda-nayaka (chief justice), and Sandhi-vigrahika (minister of war and peace)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What does the title 'Sandhi-vigrahika' mean in Gupta administrative terminology?",
    options: ["Minister of War and Peace (Foreign Affairs Minister)", "Chief Police Officer", "Treasury Collector", "Royal Cook"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Sandhi' (treaty/alliance) + 'Vigraha' (warfare): Sandhi-vigrahika handled foreign diplomacy and military treaties."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What magnificent monolithic rock-cut shrines (known as the 'Five Rathas') and the Shore Temple were built by Pallava kings at:",
    options: ["Mahabalipuram (Mamallapuram)", "Kanchipuram", "Aihole", "Pattadakal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Narasimhavarman I (Mamalla) sculpted the monolithic Pancha Pandava Rathas and structural Shore Temple at coastal Mahabalipuram."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "How did the poet Banabhatta describe King Harshavardhana's army marching through the countryside in 'Harshacharita'?",
    options: [
      "A massive traveling city with elephants carrying musicians and luggage, horses, bullock carts laden with food, while villagers rushed to offer curds, molasses, and flowers",
      "A tiny group of 5 soldiers walking silently in dark",
      "Soldiers flying in balloons",
      "A fleet of ocean submarines"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Banabhatta's vivid prose depicts royal armies as colossal marching cities escorted by war elephants, music, and peasant offerings."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What language did the elite king and Brahmanas speak in Kalidasa's plays (like Abhijnanashakuntalam), while ordinary women and commoners spoke Prakrit?",
    options: ["Sanskrit", "Tamil", "Greek", "Latin"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Classical Sanskrit drama used sociolinguistic diglossia: high-status males spoke refined Sanskrit while women and commoners spoke Prakrit."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "How did the Chinese pilgrim Fa Xian describe the miserable condition of the 'Untouchables' (Chandalas) in 5th-century Indian cities?",
    options: [
      "They lived outside the city walls, and when entering a town or marketplace, had to strike a piece of wood to announce their presence so people could avoid touching them",
      "They were made governors of cities",
      "They lived in royal palaces",
      "They were celebrated as national heroes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Fa Xian's travelogue documented rigid caste untouchability and spatial segregation enforced on Chandalas."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Who was the great astronomer and mathematician of the Gupta era who wrote the 'Aryabhatiya', calculated the value of π (pi), and stated that the Earth rotates on its own axis?",
    options: ["Aryabhata", "Varahamihira", "Brahmagupta", "Bhaskaracharya"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Aryabhata (born 476 CE in Pataliputra) authored the Aryabhatiya, formulating earth's axial rotation, solar/lunar eclipse math, and π = 3.1416."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What happened to the Chalukyas and Pallavas around the 8th century CE?",
    options: [
      "They were gradually replaced by new rising dynasties: the Rashtrakutas (who eclipsed the Chalukyas in the Deccan) and the Cholas (who conquered the Pallavas in Tamil country)",
      "They migrated to Rome",
      "They ruled India until the 20th century",
      "Their cities sank into the ocean"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dantidurga founded the Rashtrakuta empire overthrowing Chalukyas, while Imperial Cholas (Vijayalaya) annexed Pallava Kanchi."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What was the 'Sabha' in the Pallava administrative system?",
    options: [
      "An assembly of Brahmana landowners which functioned through sub-committees looking after irrigation, agricultural operations, roads, and local temples",
      "An assembly of foreign merchants",
      "A court of musicians",
      "An army unit of war elephants"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Sabha governed Brahmadeya villages via specialized sub-committees (Variyams) overseeing canals, tanks, and temple charities."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What was the 'Nagaram' in southern kingdoms?",
    options: [
      "An organization and guild council of merchants that managed urban commerce and civic administration in trading towns",
      "A village of farmers",
      "A school for archery",
      "A palace treasury"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Nagaram represented mercantile corporations managing marketplaces, commercial taxes, and civic affairs in commercial hubs."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Why was the invention of the mathematical 'Zero' (Shunya) and the Decimal System in India during this period a monumental gift to world civilization?",
    options: [
      "It simplified mathematical calculations, enabled positional place-value arithmetic, and was adopted by Arab mathematicians who transmitted it to Europe as 'Hindu-Arabic numerals'",
      "Because zero was used as a weapon in war",
      "Because it stopped money from being spent",
      "Because it was carved on all swords"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Indian invention of zero and place-value decimal notation revolutionized global computational mathematics and algorithmic science."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What medical treatise on surgery and surgical instruments was authored in ancient India by the father of plastic surgery?",
    options: ["Sushruta Samhita (by Sushruta)", "Charaka Samhita", "Aryabhatiya", "Brihat Samhita"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sushruta pioneered rhinoplasty, cataract surgery, and over 120 surgical instruments in the 'Sushruta Samhita'."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Read the statements:\nAssertion (A): The political landscape of 4th–7th century CE India shifted from highly centralized bureaucratic rule towards decentralized feudalized networks.\nReason (R): Rulers increasingly relied on hereditary Samantas (feudal lords) for military mobilization and granted tax-free lands (Brahmadeya) with fiscal immunity to temples and Brahmanas.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Land grants and military vassalage (Samanta system) decentralized administrative power away from the imperial core."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Spot the IMPOSTER in the following group of ancient rulers matched with their royal court biographers/poets:\nGroup: [Samudragupta - Harisena, Harshavardhana - Banabhatta, Pulakeshin II - Ravikirti, Chandragupta I - Megasthenes]",
    options: ["Samudragupta - Harisena", "Harshavardhana - Banabhatta", "Pulakeshin II - Ravikirti", "Chandragupta I - Megasthenes"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Megasthenes lived in the court of CHANDRAGUPTA MAURYA (c. 320 BCE), NOT Chandragupta I of the Gupta dynasty (~320 CE)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Analyze the four distinct geographic zones of conquest detailed by Harisena in Samudragupta's Prayag Prashasti:\nMatch each zone with Samudragupta's specific administrative policy:\n(a) Aryavarta (North)        -> (i) Uprooted violently and annexed directly into the empire\n(b) Dakshinapatha (South)    -> (ii) Defeated, captured, and liberated to rule as tributary vassals\n(c) Forest Tribes (Atavika)  -> (iii) Reduced to permanent servitude and obedience\n(d) Frontier States (Samatata, Kamarupa, Nepal) -> (iv) Paid annual tribute, attended royal court, and performed obeisance",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Harisena's 4-tier geopolitical doctrine: Aryavarta (annexation), Dakshinapatha (tributary restoration), Atavika (subjugation), Frontiers (tribute/homage)."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Match Column I (Ancient Dynasties) with Column II (Prominent Capitals / Royal Centers):\n(a) Guptas     -> (i) Pataliputra and Ujjain\n(b) Pushyabhuti-> (ii) Kannauj and Thanesar\n(c) Chalukyas  -> (iii) Vatapi (Badami) and Aihole\n(d) Pallavas   -> (iv) Kanchipuram and Mahabalipuram",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Guptas = Pataliputra/Ujjain; Harsha = Kannauj; Chalukyas = Badami; Pallavas = Kanchipuram."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Read the statements regarding classical Indian science:\nStatement 1: The rustless Iron Pillar of Mehrauli (Delhi), standing for over 1600 years without corroding, is an extraordinary testament to Gupta metallurgical mastery.\nStatement 2: Aryabhata proposed that day and night are caused by the daily rotation of the Earth on its axis.\nStatement 3: Harisena wrote the biography of King Harsha in Tamil.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because Harisena wrote Samudragupta's Prashasti in Sanskrit, while Banabhatta wrote Harsha's biography in Sanskrit. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What dramatic story of social justice is depicted in Kalidasa's play 'Abhijnanashakuntalam' involving a poor Fisherman and the King's signet ring?",
    options: [
      "A poor fisherman found the king's lost signet ring inside a fish belly; police officers falsely accused him of theft and beat him until the king recognized the ring and rewarded the fisherman, exposing systemic judicial corruption and prejudice against the poor",
      "The fisherman became king",
      "The king threw the ring into fire",
      "The fish turned into gold"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Kalidasa's fisherman scene critiques lower-level police bribery and class prejudice in ancient royal administration."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What metallurgical feature of the 4th-century CE Iron Pillar of Delhi at Mehrauli prevents it from rusting even after 1,600 years of exposure to sun and monsoon rains?",
    options: [
      "High phosphorus content in forge-welded wrought iron which formed a protective passive amorphous iron hydrogen phosphate film ('misawite') on the metal surface",
      "It is painted with modern plastic paint",
      "It is made of pure gold inside",
      "It is kept inside an air-conditioned room"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Solid-state forge welding with high-phosphorus slag formed a catalytic protective misawite barrier shielding against corrosion."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Consider four prominent rulers of classical India:\n1. Samudragupta (c. 335–375 CE)\n2. Chandragupta II Vikramaditya (c. 375–415 CE)\n3. Harshavardhana (c. 606–647 CE)\n4. Pulakeshin II (c. 610–642 CE)\nWhich two monarchs fought a historic clash on the Narmada River?",
    options: ["Rulers 3 and 4 (Harshavardhana and Pulakeshin II)", "Rulers 1 and 2", "Rulers 1 and 3", "Rulers 2 and 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Pulakeshin II of the Chalukyas decisively defeated Harshavardhana on the banks of the Narmada River around 618 CE."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What socio-economic power did the Assemblies (Sabhas and Urs) hold in early medieval South India?",
    options: [
      "They levied local agricultural taxes, maintained communal irrigation tanks, managed village dispute courts, and acted as autonomous corporate governing bodies",
      "They had no power and followed only royal orders",
      "They were only allowed to sing prayers",
      "They were made of royal soldiers only"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Southern assemblies exercised extensive fiscal, judicial, and civic self-governance over land tenure and infrastructure."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "How did the genealogical lineages (Vamshavalis) recorded in Prashastis help historians reconstruct ancient Indian history?",
    options: [
      "They provide sequential lists of royal ancestors (father, grandfather, great-grandfather) and maternal alliances (e.g. Samudragupta's mother Kumara Devi was a Licchavi princess), establishing chronology",
      "They provide recipes for ancient food",
      "They describe stars in astronomy",
      "They list animal species"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Epigraphic genealogies reconstruct dynastic chronologies, matrimonial alliances (Gupta-Licchavi), and political succession."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "Why did Chinese pilgrim Xuan Zang spend extensive time studying at King Harsha's grand assemblies at Kannauj and Prayag in 643 CE?",
    options: [
      "To participate in inter-religious philosophical disputations between Buddhist scholars, Vedic Brahmanas, and Jain thinkers under Harsha's royal patronization",
      "To purchase silk for China",
      "To recruit soldiers for the Chinese army",
      "To build a stone castle"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Harsha convened 18-day theological assemblies at Kannauj and the grand quinquennial Mahamoksha festival at Prayag."
  },
  {
    classLevel: 6,
    subject: "Social Science",
    chapter: "Chapter 11: New Empires and Kingdoms",
    question: "What holistic view of Indian classical civilization is established in Chapter 11 of NCERT History?",
    options: [
      "A golden era of artistic, literary, scientific, and architectural brilliance flourishing alongside complex feudal political networks and vibrant local democratic village institutions",
      "A period of complete societal collapse",
      "A primitive era without science or art",
      "A civilization isolated from the rest of Asia"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The chapter portrays classical India's golden synthesis of scientific breakthroughs, soaring literature, temple architecture, and grassroots assemblies."
  }
];

console.log('Generated Social Science Ch11:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/social_ch11.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
