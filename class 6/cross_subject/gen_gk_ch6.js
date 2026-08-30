import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 6: Famous Monuments & Heritage of India (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which iconic white marble mausoleum in Agra, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal, is one of the New Seven Wonders of the World?",
    options: ["Taj Mahal", "Qutub Minar", "Red Fort", "Humayun's Tomb"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Completed in 1653 on the banks of Yamuna in Agra, the Taj Mahal is a UNESCO World Heritage jewel of Mughal Indo-Islamic architecture."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What is the tallest individual brick minaret in the world (72.5 meters high), located in Mehrauli, Delhi, initiated by Qutb-ud-din Aibak?",
    options: ["Qutub Minar", "Charminar", "Chand Minar", "Jhulta Minar"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Initiated in 1199 by Aibak and completed by Iltutmish, the five-storey fluted red sandstone Qutub Minar stands at 72.5 m in Delhi."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "From which historic red sandstone fort in Delhi does the Prime Minister of India unfurl the National Tricolour on Independence Day (15th August)?",
    options: ["Red Fort (Lal Qila)", "Agra Fort", "Gwalior Fort", "Golconda Fort"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Constructed by Shah Jahan in 1648 as the seat of the Mughal empire, the Red Fort hosts the annual national Independence Day address."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What is the tallest statue in the world (182 meters high), dedicated to Sardar Vallabhbhai Patel, located in Kevadia, Gujarat?",
    options: ["Statue of Unity", "Statue of Equality", "Spring Temple Buddha", "Statue of Liberty"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Inaugurated on 31 October 2018 on the Narmada River facing Sardar Sarovar Dam, the Statue of Unity stands at a world-record 182 meters."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which ancient Buddhist rock-cut cave monument in Aurangabad (Chhatrapati Sambhajinagar), Maharashtra is world-famous for its classical fresco paintings and murals depicting the Jataka tales?",
    options: ["Ajanta Caves", "Ellora Caves", "Elephanta Caves", "Bhimbetka Caves"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ajanta's 30 horseshoe-gorge rock-cut Buddhist caves date from 2nd century BCE to 5th century CE, famed for tempera frescoes."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which monument in Hyderabad, Telangana features four grand minarets and arches, built in 1591 by Muhammad Quli Qutb Shah to commemorate the end of a plague epidemic?",
    options: ["Charminar", "Golconda Fort", "Qutb Shahi Tombs", "Mecca Masjid"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Charminar is a square limestone structure with four 56-meter ornate minarets at its corners, symbolizing the historic center of Hyderabad."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What magnificent 13th-century stone temple in Odisha is designed as a colossal 24-wheeled chariot of the Sun God pulled by seven galloping horses?",
    options: ["Konark Sun Temple (Black Pagoda)", "Jagannath Temple, Puri", "Lingaraj Temple", "Sun Temple, Modhera"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Built by King Narasimhadeva I of the Eastern Ganga Dynasty in 1250 CE, Konark is a colossal stone representation of Surya's celestial chariot."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which iconic 5-storey red and pink sandstone palace in Jaipur, Rajasthan features 953 intricately carved windows (Jharokhas) to allow royal ladies to observe street festivals?",
    options: ["Hawa Mahal ('Palace of Winds')", "City Palace", "Amber Fort", "Jal Mahal"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal's honeycomb facade utilizes the Venturi effect to circulate cool breeze."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What is the oldest stone Buddhist structural monument in India, commissioned by Emperor Ashoka the Great in the 3rd century BCE in Madhya Pradesh?",
    options: ["Great Stupa at Sanchi", "Dhamek Stupa, Sarnath", "Mahabodhi Temple", "Kesariya Stupa"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Great Stupa at Sanchi is a hemispherical stone dome crowned with a chhatra, preserving relics of Gautama Buddha and exquisite Torana gateways."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What ancient ruined city on the banks of the Tungabhadra River in Karnataka was the opulent capital of the Vijayanagara Empire, famed for its stone chariot and musical pillars?",
    options: ["Hampi", "Badami", "Pattadakal", "Aihole"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Hampi is a UNESCO World Heritage group of monuments showcasing Dravidian temple complexes, the Vittala stone chariot, and royal pavilions."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which 11th-century Chola architectural masterpiece in Thanjavur, Tamil Nadu, built by Emperor Rajaraja I, is known as the 'Big Temple' (Peruvudaiyar Kovil)?",
    options: ["Brihadisvara Temple", "Meenakshi Temple", "Airavatesvara Temple", "Shore Temple"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Brihadisvara Temple features a massive 66-meter high granite vimana tower crowned by an 80-tonne single granite capstone (Kumbam)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which magnificent arch monument overlooking the Arabian Sea in Mumbai was built to commemorate the landing of King George V and Queen Mary in 1911?",
    options: ["Gateway of India", "India Gate", "Victoria Memorial", "Buland Darwaza"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Designed by George Wittet in Indo-Saracenic style, the Gateway of India stands at Apollo Bunder harbor in Mumbai."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which monument in New Delhi is the national war memorial arch commemorating over 84,000 soldiers of the British Indian Army who died in World War I and Afghan Wars, featuring the Amar Jawan Jyoti?",
    options: ["India Gate", "Gateway of India", "Red Fort", "Rashtrapati Bhavan"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Designed by Sir Edwin Lutyens and completed in 1931, India Gate is a 42-meter triumphal arch standing on the Kartavya Path."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What is the largest monolithic rock-cut temple structure in the world, carved out of a single volcanic basalt cliff from top to bottom (Cave 16 at Ellora, Maharashtra)?",
    options: ["Kailash Temple (Kailasanatha, Ellora)", "Brihadisvara Temple", "Shore Temple", "Sun Temple"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Commissioned by Rashtrakuta King Krishna I in the 8th century, the Kailash Temple involved excavating over 200,000 tonnes of solid basalt rock vertically from the top."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which colossal victory gateway in Fatehpur Sikri, Uttar Pradesh was built by Emperor Akbar in 1601 to celebrate his conquest of Gujarat, standing as the highest gateway in the world (54 meters)?",
    options: ["Buland Darwaza ('Gate of Magnificence')", "Delhi Gate", "Lahori Gate", "Rumi Darwaza"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Buland Darwaza rises 54 meters from the ground, approached by a grand flight of 42 steps at the Jama Masjid of Fatehpur Sikri."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which UNESCO World Heritage temple complex in Madhya Pradesh is world-renowned for its Nagara-style sandstone temples with intricate sculptures, built by the Chandela Dynasty?",
    options: ["Khajuraho Group of Monuments", "Sanchi", "Bhimbetka", "Orchha"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Built between 950 and 1050 CE, Khajuraho temples (like Kandariya Mahadeva) are celebrated for exquisite medieval Indian sculptures celebrating all aspects of life."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which astronomical observatory in Jaipur, Rajasthan, built by Maharaja Sawai Jai Singh II, features the world's largest stone sundial (Vrihat Samrat Yantra)?",
    options: ["Jantar Mantar", "Hawa Mahal", "City Palace", "Umaid Bhawan"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Jantar Mantar Jaipur has 19 large architectural astronomical stone instruments computing celestial coordinates and solar time to 2-second accuracy."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which famous medieval fort in Hyderabad is renowned for its acoustic engineering (where a handclap at the entrance dome can be clearly heard 1 km away at the hilltop Bala Hissar pavilion)?",
    options: ["Golconda Fort", "Chittorgarh Fort", "Mehrangarh Fort", "Kumbhalgarh Fort"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Golconda Fort's acoustic architecture served as an instantaneous military defense warning system against siege invasions."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which Rajasthan fort boasts the second-longest continuous fortification wall in the world (36 km long, after the Great Wall of China)?",
    options: ["Kumbhalgarh Fort (Rajsamand, Rajasthan)", "Chittorgarh Fort", "Mehrangarh Fort", "Jaisalmer Fort"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Built by Maharana Kumbha in the 15th century, Kumbhalgarh Fort is protected by a massive 36 km stone wall running along the Aravalli hills."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which 11th-century subterranean stepwell in Patan, Gujarat, built by Queen Udayamati in memory of King Bhima I, is a UNESCO World Heritage marvel adorned with over 500 principal sculptures of Vishnu's Dashavatara?",
    options: ["Rani ki Vav ('Queen's Stepwell')", "Chand Baori", "Agrasen ki Baoli", "Adalaj Stepwell"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rani ki Vav is a 7-level subterranean inverted temple designed to store and sanctify life-giving water in the arid plains of northern Gujarat."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which magnificent golden-stone hill fort in Rajasthan, built in 1156 CE by Rawal Jaisal, is one of the very few 'Living Forts' in the world where one-fourth of the city's population still resides inside the ramparts?",
    options: ["Jaisalmer Fort (Sonar Qila / Golden Fort)", "Mehrangarh Fort", "Amer Fort", "Taragarh Fort"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sonar Qila rises from the Thar desert dunes made of yellow sandstone, glowing lion-gold under the setting desert sun."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which grand white marble memorial in Kolkata, West Bengal, designed by William Emerson and dedicated to Queen Victoria, blends British neoclassical architecture with Mughal elements?",
    options: ["Victoria Memorial", "Howrah Bridge", "Marble Palace", "St. Paul's Cathedral"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Constructed with white Makrana marble from Rajasthan between 1906 and 1921, Victoria Memorial stands as a premier architectural museum in Kolkata."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which cave site in Madhya Pradesh contains the oldest prehistoric rock art paintings in India (some dating back over 10,000 years to the Upper Paleolithic and Mesolithic eras)?",
    options: ["Rock Shelters of Bhimbetka", "Ajanta Caves", "Ellora Caves", "Udayagiri Caves"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Discovered by V.S. Wakankar in 1957, Bhimbetka's 750 rock shelters depict early human hunting scenes, animal life, and community dances in natural mineral pigments."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which historic monument in Madurai, Tamil Nadu is famous for its 14 towering colourful Gopurams (temple gateway towers) and the iconic Hall of Thousand Pillars?",
    options: ["Meenakshi Amman Temple", "Brihadisvara Temple", "Ranganathaswamy Temple", "Shore Temple"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Meenakshi Sundareswarar Temple in Madurai on the Vaigai River is an epicenter of classical Dravidian sculpture and Pandyan architecture."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which ancient iron pillar located in the Qutub Minar complex in Delhi has stood exposed to open weather for over 1,600 years without rusting, demonstrating ancient Indian metallurgical mastery?",
    options: ["Iron Pillar of Delhi (Chandragupta II Vikramaditya)", "Heliodorus Pillar", "Ashoka Pillar at Sarnath", "Pillar of Victory"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 6-tonne wrought iron pillar developed a passive protective amorphous iron hydrogen phosphate hydrate (misawite) film preventing corrosion."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What is the 8th-century shore-facing monolithic and structural temple complex in Mamallapuram (Mahabalipuram), Tamil Nadu, built by the Pallava Dynasty King Narasimhavarman II?",
    options: ["Shore Temple", "Meenakshi Temple", "Brihadisvara Temple", "Kanchi Kailasanathar Temple"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Shore Temple overlooks the Bay of Bengal, marking the structural pinnacle of Pallava granite temple engineering."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which 12th-century tomb in Delhi, built for Emperor Humayun by his wife Bega Begum, served as the primary architectural inspiration and precursor for the design of the Taj Mahal?",
    options: ["Humayun's Tomb (Charbagh Garden Tomb)", "Safdarjung Tomb", "Lodhi Tomb", "Sher Shah Suri Tomb"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Designed by Persian architect Mirak Mirza Ghiyas, Humayun's Tomb was India's first grand quadrilateral Charbagh garden tomb with a double dome."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which sacred Sikh golden shrine in Amritsar, Punjab, founded by Guru Ram Das and constructed by Guru Arjan Dev with its foundation stone laid by Sufi saint Mian Mir, has four open doors symbolizing welcome to people of all faiths and castes?",
    options: ["Sri Harmandir Sahib (The Golden Temple)", "Gurdwara Bangla Sahib", "Takht Sri Patna Sahib", "Hazur Sahib"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Harmandir Sahib sits in the center of the Amrit Sarovar holy tank, gold-plated by Maharaja Ranjit Singh in 1830, running the world's largest free community kitchen (Langar)."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Read the statements:\nAssertion (A): The Lion Capital of Ashoka at Sarnath was chosen as the official National Emblem of the Republic of India on 26 January 1950.\nReason (R): It features four Asiatic lions standing back to back on an abacus carved with Dharma Chakras, an elephant, a galloping horse, a bull, and a lion, symbolizing sovereignty, power, and universal dharma.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Adopted upon adopting the Constitution, the Sarnath capital includes the motto 'Satyameva Jayate' inscribed in Devanagari from Mundaka Upanishad."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Spot the IMPOSTER in the following group of UNESCO World Heritage Monuments paired with their Indian States:\nGroup: [Konark Sun Temple - Odisha, Khajuraho - Madhya Pradesh, Brihadisvara - Tamil Nadu, Hampi - Andhra Pradesh]",
    options: ["Konark Sun Temple - Odisha", "Khajuraho - Madhya Pradesh", "Brihadisvara - Tamil Nadu", "Hampi - Andhra Pradesh"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hampi is located in KARNATAKA (Vijayanagara/Bellary district), NOT in Andhra Pradesh."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What is the architectural name of the ancient open-air bas-relief rock sculpture in Mahabalipuram depicting the descent of the sacred river Ganga onto Earth, measuring 27m by 9m?",
    options: ["Descent of the Ganges (Arjuna's Penance)", "Panch Ratha", "Varaha Cave", "Trimurti Relief"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Carved onto two massive pink granite boulders with a natural cleft representing the descending celestial river, it depicts gods, gandharvas, and elephants."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Match Column I (Iconic Monuments) with Column II (Dynasties / Rulers who built them):\n(a) Kailash Rock Temple (Ellora) -> (i) Chola Dynasty (Rajaraja I)\n(b) Brihadisvara Temple (Thanjavur) -> (ii) Rashtrakuta Dynasty (Krishna I)\n(c) Konark Sun Temple (Odisha)    -> (iii) Mughal Emperor Shah Jahan\n(d) Red Fort (Delhi)             -> (iv) Eastern Ganga Dynasty (Narasimhadeva I)",
    options: [
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Kailash = Rashtrakuta; Brihadisvara = Chola; Konark = Eastern Ganga; Red Fort = Mughal (Shah Jahan)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Read the statements:\nStatement 1: The Taj Mahal changes visible colors from soft pinkish in dawn to dazzling white at noon and golden under moonlight due to the optical reflectance of translucent Makrana marble.\nStatement 2: The Statue of Unity is twice the height of the Statue of Liberty.\nStatement 3: Qutub Minar was built entirely in one single year by a single ruler.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because Qutub Minar was built in successive phases across centuries by Qutb-ud-din Aibak, Iltutmish, and Firoz Shah Tughlaq. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What is the famous acoustic phenomenon of the whispering gallery inside the massive dome of the Gol Gumbaz (mausoleum of Mohammed Adil Shah in Bijapur, Karnataka)?",
    options: [
      "The faintest whisper at one side of the 44-meter circular gallery can be heard crystal clear on the diametrically opposite side, and a single handclap echoes 7 to 10 times",
      "Sound disappears completely",
      "It turns human voices into bird songs",
      "Only whispers in Persian can be heard"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The acoustic geometry of Gol Gumbaz's 44-meter unsupported acoustic dome channels sound waves around smooth circular gallery perimeters with minimal decay."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which 15th-century nine-storey marble and red sandstone victory tower in Chittorgarh Fort, Rajasthan, was built by Maharana Kumbha to commemorate his triumph over the combined Sultanate armies of Malwa and Gujarat?",
    options: ["Vijay Stambha (Tower of Victory)", "Kirti Stambha", "Chand Minar", "Fateh Burj"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Vijay Stambha is a 37.2-meter high nine-storeyed architectural encyclopedia of Hindu iconography and Vaishnava sculpture completed in 1448."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which cave island in Mumbai harbor features the colossal 6-meter high three-headed rock-cut relief sculpture of 'Trimurti' (Sadashiva representing creation, preservation, and destruction)?",
    options: ["Elephanta Caves (Gharapuri Island)", "Kanheri Caves", "Karla Caves", "Bedse Caves"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Elephanta's rock-cut monolithic cavern features the celebrated 20-foot high masterpiece sculpture of three-headed Shiva (Aghora, Tatpurusha, and Vamadeva)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which ancient university in Bihar, founded by Gupta Emperor Kumaragupta I in the 5th century CE, was a renowned global center of learning that housed 10,000 students and 2,000 scholars from across Asia?",
    options: ["Nalanda Mahavihara (Nalanda University)", "Takshashila University", "Vikramashila University", "Valabhi University"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Nalanda was a premier residential monastic university with a vast nine-storey library (Dharmaganja) visited by Chinese pilgrim Xuanzang."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "What is the unique structural engineering feature of the famous 18th-century stepwell 'Chand Baori' in Abhaneri, Rajasthan?",
    options: [
      "It consists of 3,500 narrow, perfectly symmetrical stone steps arranged across 13 storeys plunging 20 meters deep into the earth",
      "It was built entirely upside down without water",
      "It is carved from gold",
      "It has no stairs"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chand Baori's 3,500 geometric zigzagging steps create a mesmerizing optical geometry designed to harvest rainwater in drought-prone eastern Rajasthan."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which temple complex in Delhi and Gujarat, built by BAPS Swaminarayan Sanstha, holds the Guinness World Record as the world's largest comprehensive Hindu temple campus, carved entirely from Rajasthani pink sandstone and Italian Carrara marble without using any structural steel?",
    options: ["Akshardham Temple", "Lotus Temple", "Birla Mandir", "ISKCON Temple"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Akshardham New Delhi was constructed strictly following ancient Shilpa Shastra interlocking stone-joinery without any ferrous structural metal."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 6: Famous Monuments, Heritage & Architecture of India",
    question: "Which Victorian Gothic railway terminus in Mumbai, designed by Frederick William Stevens and completed in 1887, is a UNESCO World Heritage site blending Victorian Italianate High Gothic architecture with traditional Indian stone palace craftsmanship?",
    options: [
      "Chhatrapati Shivaji Maharaj Terminus (CSMT / formerly Victoria Terminus)",
      "Howrah Railway Station",
      "Chennai Central Terminus",
      "Old Delhi Railway Station"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "CSMT is characterized by its grand stone dome, turrets, pointed arches, stained glass, and decorative wood and brass carvings."
  }
];

console.log('Generated GK Ch6:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/gk_ch6.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
