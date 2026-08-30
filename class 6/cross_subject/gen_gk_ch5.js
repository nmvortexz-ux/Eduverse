import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 5: Science & Space Exploration of India (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is the premier national space agency of India responsible for space research and planetary exploration?",
    options: ["ISRO (Indian Space Research Organisation)", "NASA", "DRDO", "BARC"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "ISRO was founded on 15 August 1969 under the vision of Dr. Vikram Sarabhai, headquartered in Bengaluru."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Who is universally revered as the 'Father of the Indian Space Programme'?",
    options: ["Dr. Vikram Sarabhai", "Dr. Homi J. Bhabha", "Dr. A.P.J. Abdul Kalam", "Satish Dhawan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Dr. Vikram Sarabhai established the Physical Research Laboratory and INCOSPAR, pioneering India's space program."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Who was the FIRST Indian citizen to travel into outer space (in April 1984 aboard Soyuz T-11)?",
    options: ["Wing Commander Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Ravish Malhotra"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rakesh Sharma spent 7 days aboard the Soviet Salyut 7 space station in 1984, famously declaring 'Saare Jahan Se Achha' when asked how India looked from space."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What was the name of India's FIRST satellite launched into space in 1975?",
    options: ["Aryabhata (named after ancient astronomer Aryabhata)", "Bhaskara-I", "Rohini", "INSAT-1A"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "India's pioneer satellite Aryabhata was launched on 19 April 1975 using a Soviet Kosmos-3M launch vehicle."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Who was the first Indian scientist to win the Nobel Prize in Physics (in 1930) for discovering the 'Raman Effect' of light scattering?",
    options: ["Sir C.V. Raman (Chandrasekhara Venkata Raman)", "Jagadish Chandra Bose", "Homi Bhabha", "Satyendra Nath Bose"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Sir C.V. Raman discovered the Raman Effect (inelastic scattering of photons) on 28 February 1928, celebrated as National Science Day in India."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Why is 'National Science Day' celebrated every year in India on 28th February?",
    options: [
      "To commemorate Sir C.V. Raman's historic discovery of the Raman Effect in 1928",
      "To celebrate Dr. Kalam's birthday",
      "To mark the launch of Aryabhata",
      "To celebrate ISRO's founding"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Government of India designated 28 February as National Science Day in 1986 in honor of Raman's landmark discovery."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Who is affectionately remembered as the 'Missile Man of India' and served as the 11th President of India?",
    options: ["Dr. A.P.J. Abdul Kalam (Avul Pakir Jainulabdeen Abdul Kalam)", "Dr. Vikram Sarabhai", "Dr. Homi Bhabha", "Dr. K. Sivan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Dr. Kalam led India's Integrated Guided Missile Development Programme (IGMDP) producing Agni and Prithvi missiles."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Who is celebrated as the 'Father of the Indian Nuclear Programme'?",
    options: ["Dr. Homi Jehangir Bhabha", "Dr. Vikram Sarabhai", "Sir C.V. Raman", "Dr. Raja Ramanna"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Dr. Homi Bhabha founded the Tata Institute of Fundamental Research (TIFR) and the Atomic Energy Commission of India."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which Indian lunar mission in 2008 made the groundbreaking discovery of water molecules (H₂O/OH) on the Moon's surface?",
    options: ["Chandrayaan-1", "Chandrayaan-2", "Chandrayaan-3", "Mangalyaan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Chandrayaan-1's Moon Mineralogy Mapper (M3) detected hydroxyl and water molecule signatures across lunar polar regolith in 2009."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "On which historic date did ISRO's Chandrayaan-3 land successfully on the South Pole of the Moon, making India the 1st nation to land near the lunar south pole?",
    options: ["23rd August 2023 (celebrated as National Space Day)", "15th August 2023", "26th January 2023", "2nd October 2023"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Chandrayaan-3's Vikram lander touched down at Shiv Shakti Point on 23 August 2023, now celebrated as India's National Space Day."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What were the names of the Lander and Rover on India's Chandrayaan-3 mission?",
    options: ["Lander: Vikram ; Rover: Pragyan", "Lander: Pushpak ; Rover: Aryabhata", "Lander: Kalam ; Rover: Sarabhai", "Lander: Shakti ; Rover: Shanti"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The lander was named Vikram (honoring Vikram Sarabhai) and the 6-wheeled robotic rover was named Pragyan ('Wisdom')."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What was India's historic maiden interplanetary mission to Mars, launched in November 2013, called?",
    options: ["Mangalyaan (Mars Orbiter Mission - MOM)", "Chandrayaan", "Aditya-L1", "Gaganyaan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mangalyaan entered Mars orbit on 24 September 2014 on its maiden attempt, making India the first Asian nation to reach Mars."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Where is ISRO's primary rocket launching spaceport (Satish Dhawan Space Centre - SDSC) located?",
    options: ["Sriharikota (Tirupati district, Andhra Pradesh)", "Thiruvananthapuram, Kerala", "Bengaluru, Karnataka", "Chandipur, Odisha"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sriharikota's equatorial barrier island location on the Bay of Bengal provides optimal eastward rotational velocity for satellite launches."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which Indian polymath and scientist invented the 'Crescograph' to measure plant growth and proved that plants respond to stimuli and music?",
    options: ["Sir Jagadish Chandra Bose (J.C. Bose)", "Satyendra Nath Bose", "Prafulla Chandra Ray", "Meghnad Saha"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sir J.C. Bose pioneered millimeter-wave microwave optics and bio-physics, inventing the crescograph to record plant cellular responses."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which Indian mathematical genius independently discovered thousands of groundbreaking theorems in number theory and infinite series without formal modern training?",
    options: ["Srinivasa Ramanujan (1887–1920)", "Aryabhata", "Bhaskara II", "Prasanta Chandra Mahalanobis"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ramanujan's notebooks contributed fundamental breakthroughs in partition formulas, mock theta functions, and modular equations (celebrated on National Mathematics Day, 22 Dec)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which Indian theoretical physicist collaborated with Albert Einstein to formulate quantum statistics, giving his name to the subatomic particle 'Boson'?",
    options: ["Satyendra Nath Bose (Bose-Einstein Statistics)", "J.C. Bose", "Homi Bhabha", "C.V. Raman"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "S.N. Bose's 1924 derivation of Planck's law led to Bose-Einstein statistics and the Bose-Einstein condensate; integer-spin particles are called 'bosons'."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is India's dedicated solar observatory spacecraft, launched in September 2023 to study the Sun from the Sun-Earth Lagrangian Point 1 (L1)?",
    options: ["Aditya-L1", "Surya-1", "Helios-India", "Bhaskara-Solar"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Aditya-L1 was inserted into a halo orbit around Lagrange Point 1 (~1.5 million km from Earth) to observe the solar corona and solar flares continuously."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is the name of India's ambitious upcoming Human Spaceflight Programme aiming to send Indian astronauts into Low Earth Orbit?",
    options: ["Gaganyaan", "Vimana-1", "Antariksh-1", "Bharat-Yaan"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "ISRO's Gaganyaan mission will deploy a 3-member crew into a 400 km low Earth orbit for 3 days and return them safely to Indian sea waters."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is the heavy-lift workhorse launch vehicle of ISRO, nicknamed 'Bahubali' (or LVM3), that launched Chandrayaan-2, Chandrayaan-3, and OneWeb satellites?",
    options: ["LVM3 (Launch Vehicle Mark-3 / GSLV Mk III)", "PSLV", "SSLV", "SLV-3"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "LVM3 features twin S200 solid rocket boosters, an L110 core liquid stage, and a cryogenic CE-20 upper stage with 4-tonne GTO payload capacity."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which Indian-American astrophysicist won the Nobel Prize in Physics in 1983 for determining the maximum mass limit of a stable white dwarf star (1.44 Solar Masses)?",
    options: ["Subrahmanyan Chandrasekhar (Chandrasekhar Limit)", "Har Gobind Khorana", "Venkatraman Ramakrishnan", "Amartya Sen"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dr. S. Chandrasekhar proved that electron degeneracy pressure cannot support a stellar remnant exceeding 1.44 M☉, beyond which it collapses into a neutron star or black hole."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which Indian-origin biochemist won the Nobel Prize in Physiology or Medicine in 1968 for deciphering the genetic code and synthesizing the first artificial gene?",
    options: ["Har Gobind Khorana", "C.V. Raman", "Venkatraman Ramakrishnan", "Hargovind Singh"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dr. Har Gobind Khorana demonstrated how triplets of nucleotides in RNA control the synthesis of specific amino acids in proteins."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What ancient Indian mathematical and astronomical treatise authored in 499 CE introduced the concept of the place-value decimal system, trigonometry (sine tables), and spherical Earth rotation?",
    options: ["Aryabhatiya (by Aryabhata)", "Siddhanta Shiromani", "Surya Siddhanta", "Brahmasphutasiddhanta"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Aryabhata's Aryabhatiya computed π ≈ 3.1416 and established that planetary bodies shine by reflected solar illumination."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which ancient Indian physician is renowned as the 'Father of Surgery' for performing rhinoplasty (plastic surgery) and cataract operations in ancient Varanasi?",
    options: ["Sushruta (author of Sushruta Samhita)", "Charaka", "Vagbhata", "Dhanvantari"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sushruta described over 120 surgical instruments, 300 operative procedures, and pioneer skin-flap pedicle plastic reconstructions."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is India's indigenous regional satellite navigation system (equivalent to American GPS) developed by ISRO called?",
    options: ["NavIC (Navigation with Indian Constellation / IRNSS)", "Glonass-India", "Bhuvan", "Gaganyaan-Nav"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "NavIC operates a constellation of geostationary and geosynchronous satellites providing high-accuracy positioning over India and 1,500 km around its borders."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is the famous mathematical number 1729 known as in mathematics?",
    options: [
      "The Hardy-Ramanujan Number (the smallest number expressible as the sum of two cubes in two different ways: 1³ + 12³ and 9³ + 10³)",
      "The Golden Ratio",
      "The largest prime number",
      "The speed of light"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "When G.H. Hardy noted his taxi cab number 1729 seemed dull, Ramanujan instantly replied that it was the smallest integer equal to two distinct sums of cubes."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which Indian structural biologist won the Nobel Prize in Chemistry in 2009 for mapping the 3D atomic structure and function of the Ribosome?",
    options: ["Venkatraman Ramakrishnan", "Subrahmanyan Chandrasekhar", "Amartya Sen", "Abhijit Banerjee"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dr. Venki Ramakrishnan used X-ray crystallography to determine the atomic mechanism of ribosomal translation of genetic information into proteins."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is India's indigenous 3-stage nuclear power program fuel cycle designed to utilize India's vast domestic reserves of which element found in Kerala's monazite sands?",
    options: ["Thorium (Thorium-based nuclear fuel cycle)", "Uranium", "Plutonium", "Lithium"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dr. Homi Bhabha formulated the 3-stage program to utilize India's massive coastal placer deposits of Thorium-232."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which Indian scientific research institute in Pune operates the 'Giant Metrewave Radio Telescope' (GMRT), one of the world's largest low-frequency radio telescope arrays?",
    options: ["NCRA (National Centre for Radio Astrophysics / TIFR)", "IUCAA", "ISRO", "DRDO"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "GMRT consists of 30 steerable parabolic radio dish antennas (each 45m diameter) across 25 km in Khodad near Pune, studying pulsars and early universe hydrogen."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Read the statements:\nAssertion (A): On 15 February 2017, ISRO's PSLV-C37 created a historic world record by launching 104 satellites into orbit simultaneously in a single mission.\nReason (R): PSLV (Polar Satellite Launch Vehicle) is celebrated globally for its supreme reliability, cost-efficiency, and multi-satellite dispenser technology.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "PSLV-C37 deployed Cartosat-2D along with 103 co-passenger nanosatellites from six foreign nations into precise sun-synchronous orbits."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Spot the IMPOSTER in the following group of Indian scientists paired with their Nobel Prize disciplines:\nGroup: [C.V. Raman - Physics, Har Gobind Khorana - Medicine, S. Chandrasekhar - Physics, Jagadish Chandra Bose - Chemistry]",
    options: ["C.V. Raman - Physics", "Har Gobind Khorana - Medicine", "S. Chandrasekhar - Physics", "Jagadish Chandra Bose - Chemistry"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Sir J.C. Bose was a pioneering physicist and plant physiologist who was NEVER awarded a Nobel Prize (though he deserved one for radio microwave pioneer work)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is the name of the humanoid female robot developed by ISRO to fly aboard the uncrewed orbital test flight of the Gaganyaan mission?",
    options: ["Vyommitra ('Friend in Space')", "Manavika", "Shakti", "Pragati"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Vyommitra is an AI-equipped half-humanoid designed to monitor life-support systems, perform switch operations, and simulate human crew parameters."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Match Column I (Indian Spacecraft & Projects) with Column II (Target Destinations / Payloads):\n(a) Chandrayaan-3 -> (i) Sun's Lagrange Point 1 (L1)\n(b) Aditya-L1      -> (ii) Lunar South Pole soft landing\n(c) Mangalyaan     -> (iii) Mars orbit insertion\n(d) Astrosat       -> (iv) Multi-wavelength space astronomical observatory",
    options: [
      "a-(ii), b-(i), c-(iii), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chandrayaan-3 = Lunar South Pole; Aditya-L1 = Sun L1; Mangalyaan = Mars; Astrosat = Multi-wavelength space telescope."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Read the statements regarding ancient Indian science:\nStatement 1: Brahmagupta (598–668 CE) in his Brahmasphutasiddhanta was the first mathematician to establish mathematical rules for computing with Zero (0) and negative numbers.\nStatement 2: Charaka Samhita is considered the foundational encyclopedic treatise of Ayurvedic internal medicine.\nStatement 3: Aryabhata claimed that the Earth was flat and immovable.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is completely false because Aryabhata explicitly stated that the Earth is spherical and rotates daily on its axis. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is the cryogenic upper stage engine developed indigenously by ISRO's Liquid Propulsion Systems Centre (LPSC) to power the LVM3 rocket?",
    options: ["CE-20 Cryogenic Engine (Liquid Hydrogen & Liquid Oxygen)", "Vikas Engine", "Semi-Cryogenic SCE-200", "S200 Solid Booster"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The CE-20 is a gas-generator cycle cryogenic engine utilizing liquid oxygen (LOX) at -183°C and liquid hydrogen (LH2) at -253°C."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which Indian scientific research station was established in Antarctica in 2012 as India's 3rd state-of-the-art permanent polar research base (alongside Maitri and historic Dakshin Gangotri)?",
    options: ["Bharati", "Himadri", "Indira", "Sagar Nidhi"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bharati is located in the Larsemann Hills, Antarctica, constructed with 134 prefabricated shipping containers for extreme polar climate research."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What is the name of India's Arctic research station established in 2008 at Ny-Ålesund in Svalbard, Norway?",
    options: ["Himadri", "Bharati", "Maitri", "Dakshin Gangotri"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Himadri is India's dedicated Arctic research station located 1,200 km from the North Pole in Spitsbergen, Svalbard."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What was the landmark significance of India's 'Smiling Buddha' (Pokhran-I) test conducted on 18 May 1974 in Rajasthan?",
    options: [
      "India's first successful underground nuclear detonation, demonstrating peaceful nuclear explosion (PNE) capability under Dr. Homi Sethna and Dr. Raja Ramanna",
      "First launch of a satellite",
      "First missile test in the ocean",
      "First nuclear power plant commissioned"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Pokhran-I was India's first nuclear device detonation, conducted underground in the Thar Desert with a yield of ~12 kilotons."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Which breakthrough algorithm developed by IIT Kanpur scientists (Manindra Agrawal, Neeraj Kayal, and Nitin Saxena in 2002) solved the centuries-old problem of deterministically testing whether any given integer is prime in polynomial time?",
    options: ["AKS Primality Test", "RSA Algorithm", "Euclidean Algorithm", "Shor's Algorithm"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The AKS algorithm proved in 'PRIMES is in P' that primality testing is unconditionally and deterministically solvable in polynomial time."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "What deep-sea crewed submersible vehicle is being developed by India under the 'Samudrayaan Mission' to explore ocean depths up to 6,000 meters?",
    options: ["Matsya 6000", "Varuna 6000", "Jalayaan-1", "Sagarika"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Matsya 6000 is a deep-ocean human submersible developed by NIOT under the Deep Ocean Mission to extract polymetallic nodules."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 5: Science, Inventions & Space Exploration of India",
    question: "Who was the brilliant mathematician and statistician who founded the Indian Statistical Institute (ISI) in Kolkata in 1931 and designed India's Second Five-Year Plan model?",
    options: ["Prasanta Chandra Mahalanobis (P.C. Mahalanobis)", "C.R. Rao", "S.N. Bose", "Homi Bhabha"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "P.C. Mahalanobis formulated the Mahalanobis distance metric in statistics and pioneered large-scale sample survey methodologies (National Statistics Day on 29 June)."
  }
];

console.log('Generated GK Ch5:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/gk_ch5.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
