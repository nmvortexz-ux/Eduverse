import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 5: Social Science - Chapter 8: Devotional Paths to the Divine (40 Questions)
// -------------------------------------------------------------
const socialQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "In medieval South India (7th to 9th centuries), who were the poet-saints who led the vibrant Bhakti movement devoted to LORD SHIVA?",
    options: ["The Nayanars (63 Nayanars including Appar, Sambandar, Sundarar)", "The Alvars", "The Sufis", "The Nathpanthis"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Nayanars were 63 Shaivite Bhakti saints belonging to diverse caste backgrounds (potters, untouchables, peasants, kings)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Who were the South Indian Bhakti poet-saints who immersed themselves in passionate devotion to LORD VISHNU?",
    options: ["The Alvars (12 Alvars including Periyalvar, Andal, Nammalvar)", "The Nayanars", "The Virashaivas", "The Yogis"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The 12 Alvars were Vaishnavite mystic saints whose devotional Tamil songs were compiled in the sacred Divya Prabandham."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Who was the only celebrated WOMAN Alvar saint among the twelve Alvars, known for her deeply emotional devotional poetry to Lord Krishna (Ranganatha)?",
    options: ["Andal (Kodhai)", "Akkamahadevi", "Mirabai", "Muktabai"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Andal (daughter of Periyalvar) is the revered female Alvar saint who composed the Thiruppavai in ecstatic devotion to Lord Vishnu."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Which 12th-century socio-religious movement in Karnataka was initiated by Basavanna, Allama Prabhu, and Akkamahadevi, advocating equality of all humans and rejecting caste discrimination and idol worship?",
    options: ["The Virashaiva (Lingayat) Movement", "The Chisti Movement", "The Nathpanthi Movement", "The Alvar Movement"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Basavanna and his companions founded the Virashaiva movement, rejecting ritual orthodoxy, caste hierarchies, and the mistreatment of women."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Which local temple deity at Pandharpur in Maharashtra became the supreme focus of the Varkari Bhakti tradition led by Jnaneshwar, Namdev, Eknath, and Tukaram?",
    options: ["Lord Vitthala (a manifestation of Lord Vishnu / Krishna)", "Lord Shiva", "Lord Murugan", "Lord Ganesha"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Varkari sect centered on the worship of Lord Vitthala (Vithoba) in the grand temple at Pandharpur on the Bhima river."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Who was the 15th-century mystic weaver-poet of Varanasi who expressed his passionate devotion to formless God (Nirguna Bhakti) through rhyming couplets called Sakhis and Pads?",
    options: ["Kabir Das (Sant Kabir)", "Tulsidas", "Surdas", "Ramananda"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Sant Kabir preached formless monotheism, fiercely mocking external religious rituals, hypocrisy, and caste prejudices in Hinduism and Islam."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Who was the founder of SIKHISM, born at Talwandi (Nankana Sahib in Pakistan) in 1469, who emphasized devotion to One Formless Creator (Ik Onkar) and set up the Langar community kitchen?",
    options: ["Guru Nanak Dev Ji", "Guru Gobind Singh Ji", "Guru Arjan Dev Ji", "Guru Tegh Bahadur Ji"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Guru Nanak Dev Ji founded Sikhism, established the sacred congregation (Dharamsal/Sangat), and instituted the egalitarian community kitchen (Langar)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Who was the 5th Sikh Guru who compiled the holy hymns of Guru Nanak and other Bhakti and Sufi saints (Kabir, Baba Farid, Namdev) into the Adi Granth in 1604?",
    options: ["Guru Arjan Dev Ji", "Guru Nanak Dev Ji", "Guru Angad Dev Ji", "Guru Gobind Singh Ji"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Guru Arjan Dev Ji compiled the Adi Granth in 1604 at Amritsar, which was later consecrated as the eternal Guru Granth Sahib by Guru Gobind Singh in 1708."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Who was the Rajput princess of Mewar who rejected royal luxury and became an ardent, fearless disciple of the saint Ravidas, composing passionate devotional Bhajans to Lord Krishna (Giridhar Gopal)?",
    options: ["Mirabai", "Rani Padmini", "Rani Durgavati", "Sakkubai"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mirabai defied royal patriarchal conventions, dedicating her life to pure Saguna Krishna devotion and egalitarian saintly fellowship."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Who composed the monumental epic 'Ramcharitmanas' in the Awadhi dialect of Hindi, portraying Lord Rama as the supreme embodiment of compassion and devotion?",
    options: ["Sant Tulsidas", "Surdas", "Kabir", "Valmiki"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Sant Tulsidas authored the beloved Ramcharitmanas in vernacular Awadhi, making Rama's life accessible to millions across North India."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Which revered Sufi saint of the Chishti order made AJMER in Rajasthan his spiritual hospice, drawing millions of pilgrims to his sacred Dargah?",
    options: ["Khwaja Muinuddin Chishti (Gharib Nawaz)", "Qutbuddin Bakhtiyar Kaki", "Baba Farid", "Hazrat Nizamuddin Auliya"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Khwaja Muinuddin Chishti (1142–1236) established the Chishti silsila in Ajmer, preaching universal love, tolerance, and service to the destitute."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Which 15th-century saint-reformer introduced the 'Ekasarana Dharma' (devotion to One Supreme Lord Krishna) in Assam, pioneering devotional music (Borgeet) and community prayer halls (Namghars)?",
    options: ["Srimanta Sankaradeva", "Chaitanya Mahaprabhu", "Ramananda", "Tukaram"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Srimanta Sankaradeva founded the Neo-Vaishnavite movement in Assam, establishing Satras and village Namghars (prayer houses)."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What was Shankara's philosophical doctrine of 'ADVAITA' (Non-dualism) propounded in the 8th century in Kerala?",
    options: [
      "The fundamental oneness and identity of the individual soul (Atman) with the ultimate Supreme Reality (Brahman) ; the world is Maya (illusion) and true liberation comes through knowledge (Jnana)",
      "That there are thousands of separate supreme gods",
      "That the world is made of pure gold",
      "That humans can never attain salvation"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Adi Shankaracharya preached Advaita: absolute non-dual monism where Brahman alone is real, the empirical world is Maya, and Atman is Brahman."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What was Ramanuja's 11th-century philosophical doctrine of 'VISHISHTADVAITA' (Qualified Non-dualism) preached in Tamil Nadu?",
    options: [
      "The individual soul remains distinct and qualified even when united with the Supreme Brahman through passionate, loving devotion (Bhakti) to Vishnu",
      "That God has no love for humans",
      "That all rituals must be conducted in silence",
      "That souls are completely destroyed after death"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ramanuja harmonized Vedanta with Bhakti: the individual soul is an organic part (amsha) of Vishnu, finding salvation through loving surrender (Prapatti)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What are the famous canonical song anthologies of the Nayanars and the Alvars called in Tamil literature?",
    options: [
      "Nayanars: 'Tevaram' and 'Tiruvacakam' ; Alvars: 'Divya Prabandham'",
      "Vedas and Upanishads",
      "Ramayana and Mahabharata",
      "Puranas and Gita"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Nayanar hymns are compiled in the 12 Tirumurais (including Tevaram & Tiruvacakam); Alvar hymns comprise the 4,000 verses of the Divya Prabandham."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What radical social reform did the Virashaiva Vachana literature champion in 12th-century medieval society?",
    options: [
      "Fierce denunciation of caste hierarchies, untouchability, sacrificial animal slaughter, and ritual pollution, while asserting the spiritual equality and independence of women",
      "Building large stone prisons",
      "Banning all books and music",
      "Forcing people to fast every day"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Virashaiva Vachanas (by Basavanna, Allama, Akkamahadevi) attacked caste oppression, empty ritualism, and patriarchal subordination of women."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Why did the medieval Bhakti saints of Maharashtra (Jnaneshwar, Eknath, Tukaram) REJECT the traditional concept of ascetic renunciation (Sannyasa)?",
    options: [
      "They believed true spirituality lay in living as ordinary householders, earning an honest livelihood, and serving fellow human beings in distress with compassion (active social service)",
      "Because they wanted to become wealthy kings",
      "Because they disliked nature",
      "Because forests were too cold"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Marathi saints humanized Bhakti: Tukaram proclaimed that he who recognizes the suffering of the distressed as his own is a true saint."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What were the 'Khanqahs' of the Sufi masters in medieval India?",
    options: [
      "Hospices and community centers where Sufi Pir masters taught disciples, hosted spiritual assemblies (Sama), and fed travelers, nobles, and commoners from all walks of life",
      "Military forts for weapons",
      "Royal tax collection offices",
      "Prisons for criminals"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Khanqahs served as inclusive spiritual hospices where people of all faiths gathered for discourse, music, blessings, and community meals."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What is 'Zikr' and 'Sama' in the devotional spiritual practice of Sufi mysticism?",
    options: [
      "Zikr is the rhythmic chanting/repetition of the divine Name of God ; Sama is spiritual music and audition evoking divine ecstatic love",
      "Zikr is sword fighting and Sama is swimming",
      "Zikr is eating food and Sama is sleeping",
      "Both are names of desert horses"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sufi praxis: Zikr (contemplative remembrance of God) and Sama (ecstatic mystical music/qawwali) dissolve ego in divine love."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What were the core principles of Guru Nanak's spiritual teachings summarized in three cardinal pillars?",
    options: [
      "1. Nam Japna (Chanting the Name of God) ; 2. Kirt Karna (Honest, ethical labor) ; 3. Vand Chhakna (Sharing one's earnings with others in charity)",
      "Fasting, Penance, and Forest Exile",
      "Sacrifice, Rituals, and Pilgrimages",
      "Wars, Conquests, and Taxes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Guru Nanak's core triadic ethics: Nam Japna (devotional remembrance), Kirt Karna (honest labor), and Vand Chhakna (charitable sharing)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What was the historical significance of the 'Langar' (community kitchen) instituted by Guru Nanak and expanded by Guru Angad and Guru Amar Das?",
    options: [
      "People of ALL castes, religions, and social backgrounds sat together on the floor (Pangat) to eat the exact same meal together, completely destroying caste taboos and untouchability",
      "It was a restaurant for wealthy merchants",
      "It was a feast held only once a year",
      "Only kings were allowed to eat there"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Langar institutionalized radical social equality: emperor and peasant sat side by side in pangat, sharing identical food prepared communally."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Why did the Mughal Emperor Jahangir view the growing influence and autonomous political-military stature of Guru Arjan Dev Ji as a potential threat, leading to the Guru's martyrdom in 1606?",
    options: [
      "The Sikh community had transformed into a dynamic, prosperous, self-governing socio-religious brotherhood centered at Amritsar, attracting large numbers of both Hindu and Muslim followers",
      "Because Guru Arjan refused to pay road tax",
      "Because the Sikhs built a navy",
      "Because of a boundary dispute over a farm"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Jahangir recorded in Tuzuk that the expanding spiritual authority of Guru Arjan Dev threatened imperial control, prompting state persecution."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Who founded the 'Khalsa Panth' (the community of the pure saint-soldiers) at Anandpur Sahib on Baisakhi Day in 1699, forging the Sikhs into a formidable martial and spiritual brotherhood?",
    options: ["Guru Gobind Singh Ji (the 10th Sikh Guru)", "Guru Nanak Dev Ji", "Guru Tegh Bahadur Ji", "Banda Singh Bahadur"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Guru Gobind Singh Ji established the Khalsa in 1699 with the Five Ks (Kesh, Kangha, Kara, Kachhera, Kirpan) to defend justice against tyranny."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Which blind poet of Braj composed the monumental devotional anthology 'Sursagar', celebrating the childhood lilas of Lord Krishna in Brajbhasha?",
    options: ["Sant Surdas", "Tulsidas", "Kabir", "Raskhan"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Surdas (a disciple of Vallabhacharya) composed the Sursagar, Sur Saravali, and Sahitya Lahari celebrating Krishna's Vatsalya and Madhurya rasas."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What was the 'Ekasarana Dharma' propagated by Sankaradeva in Assam?",
    options: [
      "Devotional surrender to the Supreme Lord Krishna alone, discarding idol worship and complex rituals, and seeking spiritual solace in chanting the Name of God (Nam-Kirtan)",
      "Worship of 100 deities simultaneously",
      "Renunciation of all food",
      "Building giant stone statues"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sankaradeva's Ekasarana Dharma focused on monotheistic Krishna bhakti centered on congregational chanting in village Namghars."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What were the 'Nathpanthis, Siddhas, and Yogis' who challenged conventional ritual orthodoxy in northern India?",
    options: [
      "Renouncers from lower artisanal groups who advocated intense meditation on formless reality, breathing exercises (Pranayama), yogasanas, and mind-body purification to attain liberation",
      "Royal priests in Delhi palaces",
      "Foreign merchants who sold silk",
      "Soldiers who fought on horses"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Nathpanthis and Yogis (associated with Gorakhnath) taught Hatha Yoga, breath control, and inner esoteric realization beyond ritual dogma."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Who was the revered 14th-century Sufi saint of Delhi known as 'Mehboob-e-Ilahi' (Beloved of God), who lived in Ghyaspur (Delhi) and inspired Amir Khusrau?",
    options: ["Hazrat Nizamuddin Auliya", "Khwaja Muinuddin Chishti", "Baba Farid", "Qutbuddin Bakhtiyar Kaki"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hazrat Nizamuddin Auliya preached boundless charity and tolerance; his court disciple Amir Khusrau pioneered Hindavi and Qawwali music."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "In what language did Kabir compose his powerful verses (Sakhis, Dohas, and Rekhtas)?",
    options: [
      "In the rough, rustic colloquial vernacular Hindi of the common people (Saddukkadi / Khari Boli / Bhojpuri), making them directly accessible to ordinary peasants and weavers",
      "In difficult classical Sanskrit only",
      "In ancient Latin",
      "In Portuguese"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Kabir wrote in direct, forceful vernacular Hindi (Saddukkadi), utilizing sharp colloquial idioms that pierced through scholastic pretension."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Read the statements:\nAssertion (A): The medieval Bhakti and Sufi movements constituted a profound socio-cultural revolution that democratized spiritual access in India.\nReason (R): Bhakti and Sufi saints composed their hymns in regional vernacular languages (Tamil, Marathi, Awadhi, Brajbhasha, Assamese, Punjabi), discarded the monopoly of Sanskrit and Arabic, rejected caste hierarchies, and opened spiritual salvation to women and lower-caste communities.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bhakti-Sufi synthesis was an egalitarian linguistic and social democratization: vernacular poetry shattered elite scriptural monopolies."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Spot the IMPOSTER in the following group of Bhakti Saints and their signature devotional masterworks:\nGroup:\n1. Tulsidas - Ramcharitmanas\n2. Surdas - Sursagar\n3. Guru Arjan Dev - Compilation of Adi Granth\n4. Sant Kabir - The Encyclopedia of 18th-century French Chemistry",
    options: ["Masterwork 1", "Masterwork 2", "Masterwork 3", "Masterwork 4 (Sant Kabir composed the BIJAK, Sakhis, and Dohas, NOT French chemistry books)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Masterwork 4 is an absurd impossibility: Kabir's timeless legacy resides in the Bijak, Kabir Granthavali, and Adi Granth selections."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Analyze the philosophical distinction between 'NIRGUNA BHAKTI' and 'SAGUNA BHAKTI':\nHow did these two streams conceptualize the divine?",
    options: [
      "Nirguna Bhakti (Kabir, Guru Nanak) envisioned God as the abstract, formless, attribute-less ultimate spiritual Truth ; Saguna Bhakti (Tulsidas, Surdas, Mirabai, Chaitanya) worshipped God in tangible human incarnational forms (Avatars like Rama and Krishna) through personal devotion",
      "Nirguna Bhakti is worship of trees and Saguna Bhakti is worship of fire",
      "Nirguna Bhakti was practiced only by kings",
      "Both are identical without any difference"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Nirguna (formless transcendent monotheism) vs Saguna (immanent anthropomorphic avatar devotion) form the twin philosophical pillars of Bhakti."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Match Column I (Bhakti / Sufi Masters) with Column II (Primary Regional Sphere of Devotion):\n(a) Basavanna              -> (i) Karnataka (Virashaiva Movement / Vachanas)\n(b) Jnaneshwar & Tukaram   -> (ii) Maharashtra (Varkari Vitthala Bhakti)\n(c) Srimanta Sankaradeva   -> (iii) Assam (Brahmaputra Valley / Satras & Namghars)\n(d) Khwaja Muinuddin       -> (iv) Rajasthan (Ajmer / Chishti Sufi Silsila)",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Basavanna = Karnataka; Jnaneshwar/Tukaram = Maharashtra; Sankaradeva = Assam; Muinuddin = Ajmer."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Read the statements regarding the Varkari pilgrimage tradition in Maharashtra:\nStatement 1: The annual Varkari Palkhi pilgrimage to Pandharpur on Ashadhi Ekadashi unites hundreds of thousands of pilgrims singing Abhangas of Dnyaneshwar and Tukaram.\nStatement 2: The Marathi Bhakti movement emphasized that the temple of God resides within the compassionate human heart rather than in external ascetic withdrawal.\nStatement 3: Sant Tukaram declared that only wealthy Brahmans could enter heaven.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (Tukaram fiercely opposed caste elitism and hypocrisy). Statements 1 and 2 represent true Varkari ethos."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Why did Mirabai's fearless rejection of caste and royal Mewar palace luxury make her an enduring symbol of feminist and social defiance in Indian history?",
    options: [
      "She openly defied royal patriarchy, drank poison sent by the Rana without fear, accepted the low-caste leather worker Sant Ravidas as her Guru, and sang in public streets dedicated only to Krishna",
      "She built an army to conquer Delhi",
      "She became the queen of Portugal",
      "She abolished music in Rajasthan"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mirabai dismantled Rajput patriarchal and caste norms: taking Sant Ravidas (a Chamar) as guru and proclaiming autonomous spiritual sovereignty."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "How did the compilation of the 'Guru Granth Sahib' embody an unprecedented inter-faith ecumenical syncretism?",
    options: [
      "It sanctified and bound together the holy compositions of Sikh Gurus alongside the verses of Hindu Bhakti saints (Jaidev, Namdev, Ravidas, Ramananda) and Muslim Sufi mystics (Baba Farid, Kabir, Bhagat Bhikhan) under one supreme eternal Scripture",
      "It excluded all non-Sikh writers",
      "It was written only in Persian",
      "It contained only military strategies"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Guru Granth Sahib is an ecumenical masterpiece of interfaith harmony, enshrining Bhagat Bani from 15 diverse Hindu and Muslim saints."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What was the revolutionary social function of 'Namghars' established by Sankaradeva across Assamese villages?",
    options: [
      "Village community prayer halls that served simultaneously as sacred sanctuaries for chanting, local courts for resolving disputes, community theaters for Ankiya Nat dramas, and village libraries",
      "Commercial banks for money lending",
      "Forts with cannons",
      "Prisons for villagers"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Namghars functioned as decentralized socio-cultural epicenters integrating congregational prayer, Assamese Vaishnava drama (Bhaona), and village democracy."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Consider four foundational tenets of the Chishti Sufi order in India:\n1. Rejection of worldly wealth and refusal of royal court appointments\n2. Open hospitality and langar feeding the hungry without religious distinction\n3. Adoption of local Indian vernacular languages (Hindavi) and musical forms\n4. Preaching 'Sulh-i Kul' (Universal Peace with all creation)\nWhat made the Chishti saints universally beloved across all communities in India?",
    options: [
      "Their genuine ascetic purity, deep compassion for the impoverished, and cultural synthesis with local Indian traditions",
      "Their massive private armies",
      "Their royal tax collections",
      "Their strict enforcement of foreign languages"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chishti masters cultivated profound cross-cultural empathy: living in austere poverty, embracing Hindavi poetry, and championing universal brotherhood."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "Why did Sant Kabir relentlessly lampoon both orthodox Hindu Pandits and Muslim Qazis in his verses?",
    options: [
      "He believed that external ritual dogmas (sacred threads, temple pilgrimages, circumcisions, ritual fasts) were meaningless hypocrisies that divided humanity and blinded people to the divine residing within every human heart",
      "Because Kabir wanted to become a king",
      "Because Kabir had no religion",
      "Because he wanted to sell books"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Kabir's razor-sharp verses deconstructed scholastic dogmatism: 'Moko kahan dhundhe re bande, main to tere paas mein' (Where do you search for Me? I am beside you)."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What is the enduring cultural impact of the Bhakti movement on the modern regional languages and literature of India?",
    options: [
      "It gave birth to the golden age of regional Indian vernacular literatures (Tamil, Kannada, Marathi, Hindi, Assamese, Bengali, Punjabi, Gujarati), elevating popular speech into exquisite classical literary idioms",
      "It caused all regional languages to disappear",
      "It forced everyone to speak English",
      "It stopped people from writing poetry"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bhakti literature was the catalyst for the flowering of modern Indian languages, infusing vernacular poetry with emotional resonance and philosophical depth."
  },
  {
    classLevel: 7,
    subject: "Social Science",
    chapter: "Chapter 8: Devotional Paths to the Divine",
    question: "What overarching humanist spiritual vision is celebrated in Chapter 8 of NCERT Class 7 History?",
    options: [
      "The transcendent universal message that the divine is accessed not through rigid caste barriers, empty ritualism, or institutional dogma, but through pure, unconditional love, inner moral righteousness, and compassionate service to all living beings",
      "That only kings can achieve salvation",
      "That rituals are the only way to reach God",
      "That humanity was divided forever without hope"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 8 illuminates the transformative spiritual ethos of medieval India: love as the supreme path to God and universal compassion as the highest worship."
  }
];

console.log('Generated Class 7 Social Science Ch8:', socialQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/social_ch8.json', JSON.stringify(socialQuestions, null, 2), 'utf8');
