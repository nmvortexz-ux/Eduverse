import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 1: India - Our Country & Heritage (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the official National Animal of the Republic of India?",
    options: ["Royal Bengal Tiger (Panthera tigris)", "Asiatic Lion", "Indian Elephant", "Indian Leopard"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Royal Bengal Tiger was adopted as India's National Animal in May 1972 for its grace, strength, and agility."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which sacred flower is recognized as the National Flower of India?",
    options: ["Lotus (Nelumbo nucifera)", "Rose", "Jasmine", "Marigold"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The sacred Lotus represents spiritual purity, wisdom, and resilience in Indian art and mythology."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the National Aquatic Animal of India?",
    options: ["Ganges River Dolphin (Platanista gangetica)", "Olive Ridley Sea Turtle", "Gharial", "Blue Whale"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The endangered Ganges River Dolphin was declared the National Aquatic Animal of India in 2009."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Who composed India's National Anthem, 'Jana Gana Mana'?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Swami Vivekananda"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Nobel laureate Rabindranath Tagore penned 'Jana Gana Mana', adopted as the National Anthem on 24 January 1950."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Who wrote India's National Song, 'Vande Mataram'?",
    options: ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Subhas Chandra Bose", "Kazi Nazrul Islam"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Bankim Chandra Chattopadhyay composed 'Vande Mataram' in his 1882 political novel 'Anandamath'."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the official National Heritage Animal of India?",
    options: ["Indian Elephant (Elephas maximus)", "One-horned Rhinoceros", "Snow Leopard", "Wild Water Buffalo"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Indian Elephant was declared the National Heritage Animal in 2010 to boost its conservation."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the National Tree of India?",
    options: ["Indian Banyan Tree (Ficus benghalensis)", "Neem Tree", "Peepal Tree", "Mango Tree"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Banyan Tree symbolizes longevity, shelter, and immortality with its expansive aerial root system."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the National Fruit of India?",
    options: ["Mango (Mangifera indica)", "Banana", "Apple", "Guava"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mango, designated the 'King of Fruits', is native to India and celebrated as the National Fruit."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the official National Bird of India?",
    options: ["Indian Peafowl / Peacock (Pavo cristatus)", "Great Indian Bustard", "Kingfisher", "Hornbill"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Indian Peacock was declared the National Bird in 1963 for its beauty, grace, and cultural heritage."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "How many spokes are present in the Ashoka Chakra situated at the centre of the Indian National Flag?",
    options: ["24 spokes", "12 spokes", "36 spokes", "48 spokes"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The navy blue Ashoka Chakra on the white central band contains 24 equal spokes representing continuous progress."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the ratio of the width to the length of the Indian National Tricolour flag?",
    options: ["2 : 3", "3 : 4", "1 : 2", "2 : 4"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "By the Flag Code of India, the standard proportional ratio of the flag's width (height) to its length is 2:3."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What national motto is inscribed in Devanagari script beneath the State Emblem of India?",
    options: ["Satyameva Jayate (Truth Alone Triumphs)", "Vande Mataram", "Jai Hind", "Inquilab Zindabad"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Satyameva Jayate' (Truth alone triumphs) is taken from the ancient Mundaka Upanishad."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "From which ancient archaeological structure was the State Emblem of India adopted?",
    options: [
      "The Lion Capital of Ashoka at Sarnath (Varanasi)",
      "The Sanchi Stupa in Madhya Pradesh",
      "The Qutub Minar in Delhi",
      "The Ajanta Caves in Maharashtra"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The State Emblem is an adaptation of the 3rd century BCE Mauryan Lion Capital erected by Emperor Ashoka at Sarnath."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which four animals are depicted on the abacus base of the Lion Capital of Sarnath beneath the four lions?",
    options: [
      "An Elephant, a Galloping Horse, a Bull, and a Lion",
      "A Tiger, a Cow, a Deer, and an Eagle",
      "A Rhinoceros, a Camel, a Wolf, and a Bear",
      "A Peacock, a Monkey, an Elephant, and a Snake"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The circular abacus displays an elephant of the east, horse of the south, bull of the west, and lion of the north."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Who designed the modern National Flag of India (Tiranga) presented to the Constituent Assembly in 1947?",
    options: ["Pingali Venkayya", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Annie Besant"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Freedom fighter and agriculturist Pingali Venkayya designed the base design of the Indian National Tricolour."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What do the three distinct colors of the Indian National Flag symbolize?",
    options: [
      "Saffron for courage and sacrifice; White for truth and peace; Green for faith and prosperity",
      "Saffron for agriculture; White for milk; Green for trees",
      "Saffron for fire; White for clouds; Green for grass",
      "Saffron for kings; White for temples; Green for money"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "India's flag colors represent valour & renunciation (Kesari), peace & purity (White), and fertility & life (Green)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the official playing time of the full standard version of the Indian National Anthem?",
    options: ["Approximately 52 seconds", "65 seconds", "45 seconds", "90 seconds"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The standardized rendition of the full stanza of 'Jana Gana Mana' lasts precisely 52 seconds."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which UNESCO World Heritage monument is universally famous as a white marble mausoleum built on the banks of River Yamuna in Agra?",
    options: ["Taj Mahal", "Red Fort", "Humayun's Tomb", "Fatehpur Sikri"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Taj Mahal was commissioned in 1632 by Mughal Emperor Shah Jahan in memory of his favourite wife Mumtaz Mahal."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which ancient rock-cut cave monument in Aurangabad, Maharashtra is renowned for ancient Buddhist mural paintings?",
    options: ["Ajanta Caves", "Elephanta Caves", "Bhimbetka Rock Shelters", "Badami Caves"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 30 rock-cut Buddhist cave monuments of Ajanta (2nd century BCE to 480 CE) contain masterly fresco murals of Jataka tales."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which ancient university in Bihar was historically one of the world's greatest centers of higher learning from the 5th to 12th century CE?",
    options: ["Nalanda University", "Takshashila", "Vikramashila", "Valabhi"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Nalanda Mahavihara was an ancient residential monastery attracting thousands of international scholars, including Xuanzang."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the official National Currency of the Republic of India and its international currency symbol designed by D. Udaya Kumar?",
    options: ["Indian Rupee (₹ / INR)", "Indian Dollar ($)", "Dinar", "Pound"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Indian Rupee symbol '₹' blends Devanagari 'र' and Latin capital 'R' with twin horizontal lines."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which ancient calendar system forms the official Indian National Calendar adopted in March 1957 alongside the Gregorian calendar?",
    options: ["Saka Era (starting with Chaitra month)", "Vikram Samvat", "Hijri Calendar", "Julian Calendar"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Saka Calendar (established in 78 CE) begins on Chaitra 1 (March 21/22) as the civil calendar of India."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which magnificent temple in Konark, Odisha is sculptured in the shape of a colossal chariot of the Sun God with 24 carved stone wheels?",
    options: ["Konark Sun Temple", "Jagannath Temple", "Brihadeeswara Temple", "Lingaraja Temple"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Built in 1250 CE by Eastern Ganga King Narasimhadeva I, the Konark Sun Temple is a 24-wheeled chariot architectural wonder."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which is the longest perennial river flowing entirely through the cultural heartland of India?",
    options: ["River Ganga (2,525 km)", "River Godavari", "River Yamuna", "River Narmada"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The sacred River Ganga flows 2,525 km from Gangotri glacier in Uttarakhand to the Bay of Bengal."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the official National Reptile of India?",
    options: ["King Cobra (Ophiophagus hannah)", "Indian Python", "Chameleon", "Monitor Lizard"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The King Cobra, the world's longest venomous snake, is honored as India's National Reptile."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which South Indian temple in Thanjavur, Tamil Nadu is famous as the 'Big Temple' built of granite by Raja Raja Chola I?",
    options: ["Brihadisvara Temple", "Meenakshi Amman Temple", "Ramanathaswamy Temple", "Shore Temple"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Brihadisvara Temple (completed 1010 CE) is an all-granite Dravidian architectural masterwork of the Chola empire."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which of the following classical dance forms originated in the state of Kerala?",
    options: ["Kathakali and Mohiniyattam", "Bharatanatyam", "Kathak", "Kuchipudi"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Kathakali (dramatic dance-theatre with elaborate face makeup) and Mohiniyattam originated in Kerala."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "What is the southernmost tip of the Indian Union territory located in the Nicobar Islands?",
    options: ["Indira Point (Pythegoras Point)", "Kanyakumari", "Rameshwaram", "Point Calimere"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Indira Point at 6°45' N latitude on Great Nicobar Island is the southernmost geographical extremity of Indian territory."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Read the statements:\nAssertion (A): Only three lions are visible in the 2D graphic rendering of the State Emblem of India.\nReason (R): The original Sarnath sculpture has four lions mounted back-to-back facing the four cardinal directions, but the fourth rear lion is hidden from front 2D visual perspective.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Mauryan Lion Capital features 4 back-to-back Asiatic lions; 2D graphical projections naturally occlude the fourth rear lion."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Spot the IMPOSTER in the following group of classical dance forms recognized by Sangeet Natak Akademi and their originating states:\nGroup: [Bharatanatyam (Tamil Nadu), Kathak (Uttar Pradesh), Odissi (Odisha), Bhangra (Punjab)]",
    "options": ["Bharatanatyam", "Kathak", "Odissi", "Bhangra"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bhangra is a traditional folk dance of Punjab, whereas Bharatanatyam, Kathak, and Odissi are formally codified CLASSICAL dances."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Match the following National Symbols of India with their scientific biological binomial names:\n(a) National Animal   -> (i) Nelumbo nucifera\n(b) National Bird     -> (ii) Panthera tigris\n(c) National Flower   -> (iii) Mangifera indica\n(d) National Fruit    -> (iv) Pavo cristatus",
    "options": [
      "a-(ii), b-(iv), c-(i), d-(iii)",
      "a-(iv), b-(ii), c-(iii), d-(i)",
      "a-(i), b-(iii), c-(ii), d-(iv)",
      "a-(iii), b-(i), c-(iv), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Panthera tigris = Tiger, Pavo cristatus = Peacock, Nelumbo nucifera = Lotus, Mangifera indica = Mango."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which ancient prehistoric rock shelter in Raisen District, Madhya Pradesh contains the oldest cave paintings (dating to 30,000+ years) in India?",
    "options": ["Bhimbetka Rock Shelters", "Ellora Caves", "Elephanta Caves", "Udayagiri Caves"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "UNESCO-listed Bhimbetka exhibits Paleolithic/Mesolithic parietal art depicting hunting, dancing, and ritual animal motifs."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Read the statements regarding the Indian National Flag:\nStatement 1: Hand-spun and hand-woven Khadi bunting (cotton or silk) was traditionally the sole authorized manufacturing material.\nStatement 2: The top saffron band represents strength and courage.\nStatement 3: The green band occupies the top portion of the flag.\nWhich statements are TRUE?",
    "options": ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because Saffron is at the top, White in the middle, and Green at the bottom."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which Chola bronze sculpture depicts Lord Shiva as the cosmic ecstatic dancer enveloped in a halo of flames (Prabha Mandala)?",
    "options": ["Nataraja", "Ardhanarishvara", "Somaskanda", "Dakshinamurthy"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Chola Nataraja portrays Shiva executing the Ananda Tandava cosmic dance of creation, preservation, and dissolution."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which world-famous astronomical observatory complex consisting of nineteen architectural astronomical instruments was built in Jaipur by Maharaja Sawai Jai Singh II?",
    "options": ["Jantar Mantar", "Hawa Mahal", "Amber Fort", "City Palace"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Completed in 1734 CE, Jaipur's Jantar Mantar features the world's largest stone sundial (Vrihat Samrat Yantra)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Why was 26th January chosen as the Republic Day of India?",
    "options": [
      "To commemorate the declaration of Purna Swaraj (Complete Independence) by the Indian National Congress on 26 January 1930",
      "It was the birthday of Mahatma Gandhi",
      "The Constitution was written in one day on 26 January",
      "It was the day World War II ended"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The 1929 Lahore Congress resolved 26 January 1930 as Purna Swaraj Day; the Constitution was brought into effect on this historical date in 1950."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which iron pillar in the Qutub complex, Delhi has remained miraculously free from rust and atmospheric corrosion for over 1,600 years?",
    "options": ["Iron Pillar of Chandragupta II (Gupta Empire)", "Ashokan Pillar", "Heliodorus Pillar", "Allahabad Pillar"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The 4th century CE metallurgical marvel contains high phosphorus content forming a protective crystalline misawite scale layer."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which UNESCO World Heritage site in Karnataka was the magnificent capital of the Vijayanagara Empire during the 14th to 16th century CE?",
    "options": ["Hampi (on River Tungabhadra)", "Pattadakal", "Badami", "Aihole"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hampi features the iconic stone chariot, Virupaksha temple, and Vitthala temple complex with musical granite pillars."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Consider four national symbols of India:\n1. National Song: Vande Mataram\n2. National Anthem: Jana Gana Mana\n3. National River: Ganga\n4. National Microorganism: Lactobacillus delbrueckii (curd bacteria)\nWhich of these were officially declared by the Government of India?",
    "options": ["All 1, 2, 3, and 4", "1 and 2 only", "2 and 3 only", "1, 2, and 3 only"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "In 2012, MoEFCC officially designated Lactobacillus bulgaricus/delbrueckii as India's National Microbe. All 4 are official."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 1: India - Our Country & Heritage",
    question: "Which ancient treatise on performing arts, dramaturgy, dance, and music was composed by sage Bharata Muni?",
    "options": ["Natya Shastra", "Arthashastra", "Kama Sutra", "Charaka Samhita"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Natya Shastra (c. 200 BCE - 200 CE) lays the foundational theory of classical Indian aesthetic Rasas and Bhava."
  }
];

console.log('Generated GK:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/gk_ch1.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
