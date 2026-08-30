import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 6: Towns, Traders and Craftspersons (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What historic capital city of the Cholas was a premier administrative center, temple town, and thriving hub of craftspersons on the Kaveri river delta?",
    options: ["Thanjavur (Tanjore)", "Hampi", "Surat", "Masulipatnam"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Thanjavur was the majestic Chola capital, home to the Brihadisvara Temple, royal palaces, silk weavers, and bronze sculptors."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What ancient sculptural casting technique was used by bronze sculptors (Sthapatis) of Thanjavur to create world-famous Chola bronze idols (like Nataraja)?",
    options: ["Lost-Wax Technique (Cire Perdue)", "Sand Casting only", "Hammering method", "Stone Carving"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Lost-Wax (Cire Perdue) technique used beeswax models coated with clay, melted out, and replaced by molten bronze to cast exquisite idols."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What was a weekly market in medieval small towns where villagers brought their agricultural produce to sell and bought articles from traders called?",
    options: ["Haat (or Hatta / Mandapika)", "Zabt", "Jagir", "Suba"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Medieval towns had a mandapika (mandi) for grain trade and a hatta (haat) lined with shops for weekly rural and urban commerce."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What were powerful merchant associations/corporations formed by medieval Indian traders (like Manigramam and Nanadesi) to protect their trade interests called?",
    options: ["Merchant Guilds", "Trade Unions", "Samantas", "Panchayats"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Merchant Guilds (like Manigramam and Nanadesi) organized caravans, negotiated trade privileges, and traded across South India and Southeast Asia."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Which famous medieval nomadic trader-caravaneers transported massive quantities of grain, salt, and supplies across the country using bullock caravans (Tandas)?",
    options: ["Banjaras", "Chettiars", "Bohras", "Oswals"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Banjaras were specialized nomadic trader-transporters whose caravans (Tandas) moved food grains for armies and urban markets."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What famous craft of inlaying fine Silver and Brass designs on Zinc and Copper metal objects originated in Karnataka?",
    options: ["Bidri Craft (from Bidar)", "Kalamkari", "Zardozi", "Chanderi"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Bidriware, famed for its striking silver inlay on blackened zinc-copper alloy, was developed by artisans of Bidar."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Which magnificent ruined medieval capital city, located on the banks of the Tungabhadra River in Karnataka, was the capital of the Vijayanagara Empire?",
    options: ["Hampi (Vijayanagara)", "Thanjavur", "Surat", "Golconda"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Hampi was the fortified capital of the Vijayanagara Empire (founded 1336), celebrated for its grand architecture and vibrant bazaars."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What major western port city in Gujarat was celebrated as the 'Gateway to the West' (and the embarkation port for Mecca pilgrims) during the Mughal period?",
    options: ["Surat", "Masulipatnam", "Calicut", "Cochin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Surat was the bustling emporium of western trade and the pilgrim port (Bab al-Makkah) for ships sailing to the Red Sea and Persian Gulf."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What financial credit instrument (a medieval bill of exchange) issued by Surat merchant bankers was honored in distant international markets like Cairo, Basra, and Antwerp?",
    options: ["Hundi", "Zabt", "Rupee", "Jagir"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A Hundi was a financial credit note recording a deposit that could be presented for payment at distant international trading banking houses."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Which port city on the Andhra Coromandel coast was famous for its printed 'Kalamkari' textile trade and was fiercely contested by Golconda, the Dutch, and the English?",
    options: ["Masulipatnam (Machilipatnam)", "Surat", "Hampi", "Kanchipuram"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Masulipatnam was the principal port of the Golconda kingdom, renowned for its distinctive pen-painted Kalamkari cottons."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Which city in Rajasthan grew as a premier pilgrimage center around the Dargah of the revered 12th-century Sufi saint Khwaja Muinuddin Chishti and the sacred Pushkar lake?",
    options: ["Ajmer", "Jaipur", "Jodhpur", "Udaipur"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ajmer was a Chauhan capital and celebrated religious pilgrimage center housing the Chishti Dargah and ancient Pushkar lake."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What prominent weaver communities of South India, such as the Saliyar and Kaikkolar, grew wealthy by donating large sums to monumental temple complexes?",
    options: ["Saliyar and Kaikkolar Weavers", "Banjaras", "Lohar blacksmiths", "Badhai carpenters"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Saliyar and Kaikkolar textile weavers accumulated substantial wealth supplying temple flags, festival cloth, and royal garments."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Why was Thanjavur considered a classic multifunctional town in medieval South India?",
    options: [
      "It simultaneously performed three vital urban roles: an Administrative capital with royal courts, a sacred Temple Town with bustling pilgrim festivals, and a commercial Craft Center for bronze casting and silk weaving",
      "Because it had no temples",
      "Because only farmers lived there",
      "Because it was an underground town"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Thanjavur exemplified urban multifunctionality: combining administrative governance, temple-centered urbanization, and vibrant craft guilds."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "How did Temple Towns (like Kanchipuram, Madurai, Tirupati, and Somnath) drive intense economic urbanization in medieval India?",
    options: [
      "Temples were endowed with massive royal land grants and gold; temple authorities invested their wealth in banking and trade, attracting large populations of priests, artisans, dancers, merchants, and pilgrims to settle permanently",
      "Temples forced all citizens to become soldiers",
      "Temples banned all buying and selling",
      "Temples were closed to the public"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Temple urbanization: temple endowments generated agrarian surpluses, financed credit networks, and fostered dense markets around sacred precincts."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "How were the colossal stone fortifications of Hampi built without using any mortar or cementing material?",
    options: [
      "The massive granite stone blocks were shaped with interlocking wedges and grooves, fitting tightly together like jigsaw puzzle pieces using pure dry masonry",
      "They were glued with clay",
      "They were melted together with fire",
      "They were tied with ropes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Domingo Paes and archaeological records show Hampi's walls used precision interlocking dry-stone masonry without mortar."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What magnificent multi-pillared musical pavilion and chariot shrine in Hampi is dedicated to Lord Vishnu?",
    options: [
      "The Vittala Temple (with its famous Stone Chariot and musical pillars)",
      "The Virupaksha Temple",
      "The Lotus Mahal",
      "The Queen's Bath"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Vittala temple in Hampi features the iconic monolithic Stone Chariot and pillared halls designed to resonate like musical instruments."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What was the 'Mahanavami' festival celebrated with immense royal pomp and military reviews on the grand Mahanavami Dibba platform at Hampi?",
    options: [
      "A 9-day grand festival (modern Navaratri / Durga Puja in the south) where the King received tribute from subordinate nayakas, inspected armies, and held wrestling and dance spectacles",
      "A harvest festival for rice",
      "A celebration for the new year only",
      "A feast for foreign ambassadors only"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Vijayanagara kings used the Mahanavami platform to project imperial sovereignty, review armed contingents, and collect feudal tribute."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "In what decisive battle in 1565 CE was the Vijayanagara Empire defeated, leading to the sacking and ruin of the city of Hampi?",
    options: [
      "The Battle of Talikota (Rakshasi-Tangadi), fought against the combined armies of the Deccan Sultanates (Bijapur, Golconda, Ahmadnagar, Bidar)",
      "The Battle of Panipat",
      "The Battle of Plassey",
      "The Battle of Khanwa"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "In 1565 at Talikota, the unified confederacy of Deccan Sultanates crushed Rama Raya's army, pillaging Hampi."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Why was Surat called a cosmopolitan city in the 17th century?",
    options: [
      "People of all castes, creeds, and nationalities (Indians, Persians, Arabs, Portuguese, Dutch, English, and French) lived, traded, and established commercial factories there",
      "Because everyone spoke only one language",
      "Because it had only one shop",
      "Because only kings were allowed to enter"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Surat was a global cosmopolitan entrepôt hosting multi-ethnic merchant houses, textile markets, and European chartered company factories."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What specialty luxury cotton textile produced in Surat was famous across Asian and European markets for its woven gold-thread borders (Zari)?",
    options: ["Zari-bordered Cotton and Silk Textiles (Zardozi)", "Kalamkari prints", "Chintz prints", "Muslin only"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Surat's zari textiles (brocades with real gold and silver threads) were exported widely across West Asia, Africa, and Europe."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What caused the commercial decline of Surat towards the late 17th and early 18th century?",
    options: [
      "Loss of markets due to the decline of the Mughal Empire, control of sea trade routes by the Portuguese, and the rise of Bombay (Mumbai) as the English East India Company's headquarters in 1668",
      "Surat was swallowed by an earthquake",
      "All merchants stopped wearing clothes",
      "The river dried up in one day"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Surat's decline followed Mughal imperial decentralization, Maratha raids (1664/1670), and the shift of English headquarters to Bombay."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Why did the Golconda rulers enforce a strict royal monopoly on the sale of textiles, spices, and diamonds in Masulipatnam?",
    options: [
      "To prevent the trade from passing entirely into the hands of competing European East India companies (Dutch and English)",
      "Because they wanted to stop all trade",
      "Because they had no money to buy food",
      "To destroy the city of Masulipatnam"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Qutb Shahi kings imposed state monopolies to prevent monopolistic takeover of maritime commerce by the Dutch and English companies."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What is 'Kalamkari' textile art, which flourished in Masulipatnam and Kalahasti?",
    options: [
      "The traditional craft of hand-painting or block-printing intricate floral and mythological motifs on cotton fabric using a natural bamboo reed pen ('Kalam') and vegetable dyes",
      "Knitting wool with metal needles",
      "Stitching shoes with leather",
      "Painting on glass plates"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Kalamkari (Kalam = pen, Kari = craftsmanship) employs natural mordants and vegetable dyes applied with bamboo pens on cotton cloth."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What was the 'Panchalas' or 'Vishwakarma' community of craftspersons, comprising goldsmiths, bronzesmiths, blacksmiths, masons, and carpenters?",
    options: [
      "Essential skilled builders and artisans who built monumental temples, royal palaces, massive tanks, and manufactured metal implements and idols",
      "A group of wandering musicians only",
      "Soldiers who guarded fort gates",
      "Farmers who grew only wheat"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Vishwakarma (Panchala) collective united five master artisan castes essential to temple architecture, metallurgy, and royal infrastructure."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What were the 'Black Towns' established by the British East India Company in newly rising port cities like Madras (Chennai), Bombay, and Calcutta?",
    options: [
      "Segregated native quarters where Indian weavers, artisans, and merchant middlemen were forced to live and work, separate from the 'White' residential forts (Fort St. George / Fort William)",
      "Towns where coal was mined",
      "Towns painted with black paint",
      "Towns with no street lamps"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Colonial racial spatial segregation: European administrators occupied fortified 'White Towns', confining indigenous artisans to 'Black Towns'."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Which Indian merchant banking family in Murshidabad (Bengal) became fabulously wealthy and wielded enormous political influence in 18th-century Bengal?",
    options: ["The House of Jagat Seth", "The Oswal Bankers", "The Chettiar Trust", "The Peshwas"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The House of Jagat Seth ('Banker of the World') controlled Bengal's mint, revenue remittances, and treasury operations."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What was the system of 'Advances' (Dadni system) introduced by European trading companies that stripped Indian weavers of their economic independence?",
    options: [
      "Weavers took cash loans in advance from European agents and were legally locked into producing cloth exclusively for that company at low fixed prices, unable to sell in the open market",
      "Weavers were given free houses",
      "Weavers were trained to be ship captains",
      "Weavers were paid double wages"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Dadni advance system bonded weavers to company procurement contracts, extinguishing their freedom to negotiate market prices."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Why was bronze considered an ideal metal alloy for casting sacred temple idols in medieval India?",
    options: [
      "Bronze is an alloy of Copper and Tin (Bell Metal contains greater tin), which does not rust, produces a melodious bell-like chime when struck, and allows intricate high-definition casting",
      "Because bronze is soft like butter",
      "Because bronze melts in cold water",
      "Because bronze is made of pure wood"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "High-tin bell metal bronze provided superior fluidity for intricate cire-perdue molds, corrosion resistance, and sonorous resonance."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Read the statements:\nAssertion (A): Medieval Indian trade networks were sustained by sophisticated indigenous credit mechanisms, specialized overland transporter communities, and transnational merchant guilds.\nReason (R): The Hundi credit instrument bypassed physical cash transit risks across continents, while Banjaras provided bulk logistical freight and guilds negotiated collective trade privileges.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Indian commercial capitalism combined sophisticated financial credit (Hundis), specialized transport logistics (Banjaras), and corporate merchant guilds."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Spot the IMPOSTER in the following medieval Indian craft centers and their signature artisanal products:\nGroup:\n1. Bidar - Bidriware (Silver inlay on blackened zinc-copper alloy)\n2. Masulipatnam - Kalamkari hand-painted dyed cottons\n3. Surat - Zari-embroidered textiles and global Hundi banking\n4. Thanjavur - Industrial steam-powered railway engine manufacturing",
    options: ["Center 1", "Center 2", "Center 3", "Center 4 (Thanjavur was celebrated for CHOLA BRONZE IDOL CASTING and silk weaving, not 19th-century railway engines)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Center 4 is an absurd anachronism: medieval Thanjavur was famed for cire-perdue bronze sculpture, temple silk, and veena instruments."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Analyze the shifting spatial dynamics of urbanization in 17th–18th century India:\nHow did the rise of colonial port cities (Madras, Calcutta, Bombay) cause the decline of traditional emporia like Surat and Masulipatnam?",
    options: [
      "European chartered companies secured naval hegemony, monopolized maritime shipping routes, redirected raw materials to their fortified presidency ports, and forced weavers into subordinated wage-labor networks",
      "Because all artisans voluntarily left India",
      "Because the Indian Ocean dried up",
      "Because European ships were made of glass"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Colonial mercantilism restructured Indian urban geography: armed naval dominance drained trade from indigenous emporia to fortified colonial presidency ports."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Match Column I (Medieval Trade / Craft Centers) with Column II (Prominent Distinctive Characteristics):\n(a) Hampi        -> (i) Fortified capital with interlocking mortar-less granite masonry & lively bazaars\n(b) Surat        -> (ii) Emporium of Western trade, pilgrim port to Mecca, famous for Zari & Hundis\n(c) Masulipatnam -> (iii) Coromandel port city, center of Kalamkari cottons & Qutb Shahi monopolies\n(d) Murshidabad  -> (iv) Bengal silk capital on Bhagirathi river, home to the wealthy Jagat Seths",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Accurate historical profiling: Hampi (Vijayanagara); Surat (Mughal emporium); Masulipatnam (Coromandel port); Murshidabad (Bengal silk & banking)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Read the statements regarding the Lost-Wax (Cire Perdue) bronze casting technique:\nStatement 1: A beeswax image was first sculpted, coated with clay, and allowed to dry in the sun.\nStatement 2: The clay mold was heated to drain out molten wax through a tiny pinhole, and molten bronze was poured into the hollow cavity.\nStatement 3: Once cooled, the clay casing was carefully broken away to reveal a smooth, solid bronze statue that was then cleaned and polished.\nWhich statements are TRUE?",
    options: ["All Statements 1, 2, and 3 are TRUE", "Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "All three statements accurately detail the sequential stages of the ancient Indian lost-wax (cire perdue) metallurgical process."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What was the socio-economic role of 'Samantas' (feudal lords / chiefs) in the emergence of small medieval towns (Mandapikas and Hattas)?",
    options: [
      "Samantas built fortified palaces near markets, levied commercial transit tolls on traders, and donated the right to collect market taxes to temples in exchange for religious legitimacy",
      "Samantas lived as forest hermits",
      "Samantas abolished all private trade",
      "Samantas built ships to invade Europe"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Feudal lords extracted tolls on commodities (sugar, butter, cloth, salt) and patronized temple endowments with inscribed taxation rights."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Why did European travel chroniclers like Domingo Paes (Portuguese) and Duarte Barbosa express immense awe at the wealth of Hampi's bazaars?",
    options: [
      "The markets were overflowing with ruby, diamond, and pearl jewelry sold openly on streets, alongside Persian war horses, fine textiles, and precious spices",
      "Because Hampi had no people",
      "Because everything was made of iron",
      "Because all goods were imported from America"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Paes and Barbosa documented open street diamond markets, global equine trade, and bustling multi-ethnic commerce in 16th-century Vijayanagara."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "How did the 'Kalamkari' textiles of Golconda and Coromandel conquer international trade networks in Southeast Asia and Europe?",
    options: [
      "Their brilliant natural vegetable dyes were exceptionally color-fast (resisting fading upon washing), while their exotic hand-painted Chintz designs appealed to European nobility and Indonesian spice traders",
      "Because they were made of plastic",
      "Because they were given away for free",
      "Because European factories could not make any cloth"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Indian mordant-dyeing chemistry created vibrant, wash-fast calicos and chintzes, making Indian textiles the preeminent global trade currency."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "Consider four merchant trading communities of medieval India:\n1. Chettiars (Tamil Nadu)\n2. Marwari Oswals (Rajasthan & North India)\n3. Gujarati Baniyas and Muslim Bohras\n4. Banjaras (Nomadic caravan transporters)\nWhat structural role did they collectively perform in the national economy?",
    options: [
      "They integrated diverse geographic regions into a unified trans-continental commercial and financial web, facilitating commodity exchange and capital flows",
      "They only traded within their own single villages",
      "They destroyed all money and used barter only",
      "They served exclusively as palace cooks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "These mercantile networks formed a Pan-Indian commercial infrastructure linking rural agrarian hinterlands with global oceanic trade."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What does the English traveler Peter Mundy's 17th-century eyewitness account reveal about the logistical scale of a Banjara 'Tanda'?",
    options: [
      "A single Tanda caravan comprised up to 14,000 to 20,000 bullocks laden with grain, moving with families, children, and livestock over hundreds of miles to feed cities and military camps",
      "Banjaras traveled in flying carts",
      "Banjaras carried goods on their heads only",
      "A Tanda had only one donkey"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Peter Mundy recorded giant Banjara tandas with over 14,000 oxen transporting grain, functioning as autonomous nomadic freight corporations."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "How did the invention and usage of the 'Hundi' demonstrate the sophisticated level of financial capitalism in medieval India?",
    options: [
      "It proved the existence of an intricate inter-regional banking network based on trust, merchant creditworthiness, and standardized financial instruments operating across thousands of kilometers",
      "It showed that paper did not exist",
      "It proved that kings had no gold",
      "It was used to buy ships from pirates"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hundis reflected mature indigenous mercantile capitalism, combining credit discounting, foreign exchange, and risk-hedged capital remittance."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 6: Towns, Traders and Craftspersons",
    question: "What master socio-economic narrative is highlighted in Chapter 6 of NCERT Class 7 History?",
    options: [
      "The vibrancy of medieval Indian urban life, where specialized artisans, flourishing merchant guilds, dynamic pilgrimage temple towns, and world-class manufacturing ports formed a globally dominant trade ecosystem before colonial restructuring",
      "A period of total poverty and complete trade collapse",
      "An era without any towns or crafts",
      "The destruction of all Indian textiles"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 6 celebrates the economic sophistication, architectural vibrancy, artisanal mastery, and global trade preeminence of medieval India."
  }
];

console.log('Generated Class 7 Social Science Ch6:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/social_ch6.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
