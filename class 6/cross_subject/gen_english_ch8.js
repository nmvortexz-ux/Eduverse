import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 8: A Game of Chance (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "On which festive occasion was the grand village fair held every year in Rasheed's village?",
    options: ["Eid festival (which lasted many days)", "Diwali", "Holi", "Christmas"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "There was a big fair in Rasheed's village every year on the occasion of Eid, drawing tradesmen from all over."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Who accompanied Rasheed to the Eid fair along with the domestic helper Bhaiya?",
    options: ["His Uncle", "His father", "His grandfather", "His elder brother"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Uncle took Rasheed to the fair, along with their domestic helper Bhaiya."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What strict warning did Uncle give Rasheed before leaving him to meet some friends at the fair?",
    options: [
      "Not to buy anything and not to go too far away in his absence",
      "Not to eat sweets",
      "Not to ride the merry-go-round",
      "Not to talk to anyone"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Uncle strictly cautioned Rasheed neither to buy anything nor to wander away while he was away."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What was the name of the shop that caught Rasheed's attention with numbered discs?",
    options: ["Lucky Shop", "Magic Shop", "Toy Bazaar", "Gift Corner"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The stall was called 'Lucky Shop', run by a middle-aged shopkeeper who seemed neither too smart nor too lazy."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "How much did it cost to try one's luck by picking six numbered discs at the Lucky Shop?",
    options: ["50 paise", "₹1", "₹5", "25 paise"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The rule required paying 50 paise to choose six numbered discs, summing the numbers to claim the matching article."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What valuable prize did an old man apparently win at the Lucky Shop and sell back to the shopkeeper for ₹15?",
    options: ["A beautiful wall clock", "A gold chain", "A fountain pen", "A radio set"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An elderly player picked discs summing to 15, won a handsome wall clock, and happily sold it back for ₹15."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What did Rasheed win on his first couple of attempts at the Lucky Shop?",
    options: [
      "Cheap, trifling items like two inexpensive pencils and a bottle of ink",
      "A gold wristwatch",
      "A grand radio",
      "A bicycle"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rasheed won cheap items (two pencils, an ink bottle) which the shopkeeper bought back for a few paise."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What happened to all of Rasheed's pocket money as he kept playing in the hope of winning a big prize?",
    options: [
      "He lost every single paisa he had, ending up completely empty-handed",
      "He won ₹500",
      "He bought a big toy car",
      "He gave it to his uncle"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gambling repeatedly in vain hope, Rasheed lost all his money to the cunning shopkeeper."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "In the supplementary story 'A Pact with the Sun', what was Saeeda's ailing mother suffering from for a long time?",
    options: [
      "Fever, body ache, joint pain, and chronic unhealed cough/illness",
      "Broken leg",
      "Loss of vision",
      "Malaria only"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Saeeda's mother had been suffering from chronic fever, body ache, and cough, confined to a dark dingy room."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What foolish advice had orthodox quacks given to Saeeda's mother before the wise specialist doctor arrived?",
    options: [
      "To stay locked in a dark, dingy small room with closed doors/windows, deprived of fresh air and sunlight",
      "To go on a world tour",
      "To swim in cold water",
      "To eat only sweets"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Quacks strictly forbade fresh air, sunshine, and normal food, worsening her physical deterioration."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What crucial life-saving prescription did the learned specialist physician give to Saeeda's mother?",
    options: [
      "To move into a larger room with open windows and sit in the bright morning sunshine for an hour every day while breathing fresh air",
      "To take 50 pills a day in a dark room",
      "To stay in bed without food",
      "To move to the cold mountains"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The doctor prescribed normal diet plus one hour of daily morning sunshine and fresh air as essential medicine."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "To whom did little Saeeda make a heartfelt secret pact/prayer in the courtyard in the evening?",
    options: [
      "To the departing rays of the setting Sun, asking them to come next morning with warmth and brightness to cure her sick mother",
      "To the birds in the tree",
      "To the rain clouds",
      "To the moon"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Saeeda made a solemn pact with the evening sunrays to arrive the following morning with warmth for her mother."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "How did Uncle react when he saw Rasheed looking utterly sad and dejected with an empty pocket?",
    options: [
      "Uncle smiled kindly, bought him a beautiful umbrella, biscuits, sweets, and other gifts, and gently explained the reality of the game",
      "Uncle scolded and beat him harshly",
      "Uncle punished Bhaiya",
      "Uncle complained to the police"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Uncle consoled Rasheed with gifts and explained how the shopkeeper tricked naive customers."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What secret truth did Uncle reveal to Rasheed about the old man and the boy who won expensive prizes at the Lucky Shop?",
    options: [
      "They were all accomplices and friends of the shopkeeper, playing rigged tricks to tempt greedy onlookers into gambling away their money",
      "They were the luckiest people in the world",
      "They were professional magicians",
      "They owned the shop"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Uncle revealed that the 'winners' were shills working in league with the shopkeeper to deceive gullible spectators."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What important life lesson did Uncle teach Rasheed about 'Bad Luck' versus 'Foolishness'?",
    options: [
      "It was NOT bad luck at all, but pure gullibility and foolishness; one should never fall prey to get-rich-quick gambles or rigged games of chance",
      "Rasheed was born under an unlucky star",
      "Fairs should be banned completely",
      "Children should never carry umbrellas"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Uncle advised him to forget the incident and realize that tricksters exploit greed rather than genuine luck."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Why were the sunrays determined to break through the thick, dark army of clouds the next morning despite the Sun King's hesitation?",
    options: [
      "Because they had given their word of honour to little Saeeda, and breaking their promise would make them liars in the eyes of humans",
      "Because they hated clouds",
      "Because they wanted to burn the earth",
      "Because they were cold"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Bound by their sacred promise to Saeeda, the loyal sunrays pierced the overcast clouds to fulfill their word."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What happened when the bright, warm morning sunrays bathed Saeeda's mother as she lay in the courtyard?",
    options: [
      "Her pale face glowed with fresh vitality, her eyes sparkled, tears of joy welled up, and she recovered her health rapidly",
      "She felt too hot and went inside",
      "She got angry at Saeeda",
      "Her fever increased"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sunlight and fresh air rejuvenated her immune system, bringing swift, joyful physical recovery."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What central scientific and health message is conveyed in 'A Pact with the Sun' by Zakir Husain?",
    options: [
      "Sunlight and fresh open air are nature's supreme indispensable medicines for human vitality, mental health, and physical healing",
      "Medicine tablets are the only cure for everything",
      "Windows should always be kept shut",
      "Sunlight is harmful for sick people"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The story highlights the therapeutic power of sunshine (Vitamin D) and fresh air over confining darkness."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Who is the eminent author of the original Urdu classic story 'A Pact with the Sun'?",
    options: ["Dr. Zakir Husain (former President of India and renowned educationist)", "Munshi Premchand", "Rabindranath Tagore", "Ismat Chughtai"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dr. Zakir Husain, eminent educationist and 3rd President of India, penned this allegorical children's classic."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "In the poem 'Vocation' by Rabindranath Tagore, what three workers does the schoolboy observe and envy throughout his day?",
    options: [
      "The Hawker selling bangles (10 AM), the Gardener digging soil (4 PM), and the Watchman swinging his lantern at night (dark evening)",
      "A carpenter, a doctor, and a pilot",
      "A farmer, a soldier, and a sailor",
      "A teacher, a painter, and a singer"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tagore's young narrator envies the unconstrained freedom of the bangle-hawker, the gardener, and the night watchman."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Why does the young schoolboy in Tagore's poem 'Vocation' envy the Gardener?",
    options: [
      "Because the gardener bakes in the sun and gets soaked in rain, soils his clothes with mud, and nobody scolds him or stops him from digging",
      "Because the gardener gets to eat flowers",
      "Because the gardener has a big house",
      "Because the gardener never works"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The boy yearns for the unrestricted physical freedom to get dirty and dig in nature without parental reprimand."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Why does the schoolboy in 'Vocation' wish to become a Night Watchman?",
    options: [
      "To walk the lonely dark streets all night chasing shadows with his glowing lantern without ever being ordered to go to bed",
      "To catch thieves with a sword",
      "To sleep all night on a bench",
      "To blow a whistle loudly"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The child desires nocturnal freedom, roaming open streetscapes beneath starlit skies instead of early bedtime rules."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What does the word 'Trifles' mean in 'A Game of Chance'?",
    options: ["Things of very little value, importance, or cost", "Very expensive gold jewelry", "Delicious sweets", "Large pieces of furniture"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Trifles' refers to cheap, trivial items (such as small pencils, cheap ink) worth negligible money."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What does the phrase 'to play a trick on someone' mean in Uncle's explanation?",
    options: [
      "To deceive, cheat, or mislead someone cunningly for one's own selfish gain",
      "To perform a magic show for fun",
      "To play football together",
      "To buy someone a gift"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To play a trick' means using deceptive stratagems to dupe an unsuspecting mark."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Why was the shopkeeper described as 'neither too young nor too old, neither smart nor lazy'?",
    options: [
      "To maintain an innocent, ordinary, harmless appearance so that unsuspecting customers would not suspect his deceitful scheme",
      "Because he was sick",
      "Because he was very sleepy",
      "Because he was a king in disguise"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "His nondescript facade disarmed suspicion, making the rigged game appear benign and authentic."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What psychological weakness in Rasheed did the shopkeeper exploit to make him lose all his money?",
    options: [
      "His temptation, greed, and false pride that he could win a costly prize like the other shill players",
      "His fear of darkness",
      "His hunger for food",
      "His anger at his uncle"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The gambler's fallacy and lure of easy riches seduced Rasheed into reckless stakes."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "How did little Saeeda communicate with the sunrays in the courtyard?",
    options: [
      "In her own special innocent language of childhood love, which nature and the elements understood perfectly",
      "Using a telephone",
      "By writing a letter on paper",
      "Through a loudspeaker"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The story personifies nature responding to the pure, heartfelt language of a child's filial devotion."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What poetic yearning lies at the heart of Rabindranath Tagore's poem 'Vocation'?",
    options: [
      "A child's romantic longing for complete autonomy, freedom from rigid adult schedules, and intimate immersion in the open outdoor world",
      "A desire to become a king",
      "A wish to avoid learning books",
      "A plan to build a ship"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tagore captures childhood's innocence, viewing adult manual labor as heroic liberation from disciplinary domestic constraints."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Read the statements:\nAssertion (A): Rasheed's loss at the Lucky Shop was the result of a calculated con game rather than pure bad luck.\nReason (R): The shopkeeper used confederates (shills) who staged fake victories with high-value prizes to trigger the gambler's fallacy in naive spectators.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Uncle's deconstruction proves the stall operated as a classic confidence trick manipulating behavioral psychology."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Spot the IMPOSTER in the following group of characters/occupations paired with their texts from Chapter 8:\nGroup: [Rasheed - Eid Fair visitor, Saeeda - Sick mother's devoted daughter, Bangle-seller - 'Vocation' hawker, Samjhu Sahu - Lucky Shop keeper]",
    options: ["Rasheed - Eid Fair visitor", "Saeeda - Sick mother's devoted daughter", "Bangle-seller - 'Vocation' hawker", "Samjhu Sahu - Lucky Shop keeper"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Samjhu Sahu is from CHAPTER 7 ('Fair Play'), NOT the Lucky Shopkeeper from Chapter 8 ('A Game of Chance')."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Analyze the allegorical conflict between the Sunrays and the dark clouds in 'A Pact with the Sun':",
    options: [
      "The sunrays represent life-giving truth, healing, and fidelity to moral vows overcoming the suffocating, obscurantist darkness of dogmatic quackery and despair",
      "A literal battle with cannons in the sky",
      "A meteor striking the earth",
      "An eclipse destroying the world"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The breakthrough of rays allegorizes enlightened rational medicine and steadfast fidelity triumphing over superstitious confinement."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Match Column I (Literary Works) with Column II (Central Themes / Moral Vision):\n(a) A Game of Chance     -> (i) Rational therapy of sunlight vs superstitious confinement\n(b) A Pact with the Sun  -> (ii) Unmasking deceptive con tricks and resisting gambler's greed\n(c) Vocation (Poem)      -> (iii) Child's romantic yearning for unconstrained outdoor freedom\n(d) Dr. Zakir Husain     -> (iv) Eminent educationist author of 'A Pact with the Sun'",
    options: [
      "a-(ii), b-(i), c-(iii), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "A Game of Chance = con tricks; Pact with Sun = sunlight healing; Vocation = child's freedom; Zakir Husain = author."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Read the statements:\nStatement 1: In 'Vocation', the poet Rabindranath Tagore won the Nobel Prize in Literature in 1913 for 'Gitanjali'.\nStatement 2: Uncle punished Rasheed by refusing to buy him any gifts at the fair.\nStatement 3: The sunrays pierced the thick cloud battalions using sharp spears of light.\nWhich statements are TRUE?",
    options: ["Statements 1 and 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because Uncle was extremely generous and bought Rasheed an umbrella, biscuits, and sweets. Statements 1 and 3 are true."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What is the grammatical classification of the underlined phrase in: 'Rasheed played *again and again* hoping for a big prize.'?",
    options: [
      "Adverbial Phrase of Frequency / Repetition",
      "Noun Phrase",
      "Adjective Phrase",
      "Prepositional Object"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Again and again' functions adverbially to modify the verb 'played', indicating repetitive frequency."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Identify the figure of speech in Tagore's line from 'Vocation':\n'The street lamp stands like a giant with one red eye in its head.'",
    options: [
      "Simile (explicit comparison using 'like' comparing street lamp to a one-eyed giant / Cyclops)",
      "Metaphor",
      "Alliteration",
      "Irony"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The explicit comparison introduced by 'like' between the glowing lamp and a mythical one-eyed giant constitutes a Simile."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What deep psychological insight did Uncle share when he told Rasheed: 'Do not tell anybody at home about your bad luck or your foolishness'?",
    options: [
      "To protect the boy's self-esteem and dignity from unnecessary family mockery while ensuring he internalized the core moral lesson privately",
      "To hide crimes from the police",
      "Because Uncle was afraid of parents",
      "Because the money was stolen"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Uncle balances empathetic emotional protection with constructive moral mentorship, preserving the child's dignity."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "In 'A Pact with the Sun', how is the personification of the Sun's court depicted?",
    options: [
      "The Sun is portrayed as a majestic sovereign king, and the rays are his dutiful courtiers and celestial emissaries bound by sacred honour",
      "As a burning furnace of coal",
      "As an electric power station",
      "As a golden clock in the sky"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Anthropomorphic personification endows celestial entities with royal court hierarchy, ethical agency, and compassionate vows."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What is the meaning of the idiom 'to try one's luck' in English?",
    options: [
      "To attempt an uncertain venture or game in the hope of achieving success or winning a reward",
      "To buy a lucky charm",
      "To sleep all day",
      "To consult an astrologer"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'To try one's luck' signifies taking a calculated risk in a probabilistic endeavor."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "Why does the schoolboy in 'Vocation' find the routine of school and bedtime oppressive compared to street workers?",
    options: [
      "To a young child's imagination, structured adult discipline (timetables, homework, bedtime) feels restrictive, while manual outdoor trades appear full of thrilling adventures",
      "Because school was broken",
      "Because he wanted to sleep in mud",
      "Because the teacher was a giant"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Tagore captures childhood romanticism where external discipline contrasts with the perceived romantic freedom of street life."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 8: A Game of Chance",
    question: "What overarching humanist philosophy unites the three literary texts in Class 6 Chapter 8?",
    options: [
      "The celebration of innocent childhood vulnerability, the necessity of protective wisdom, and the healing benevolence of nature and truth",
      "The absolute superiority of city life over village life",
      "The danger of reading poetry",
      "The rejection of all games and fairs"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The stories harmonize childhood innocence, ethical mentorship, and harmonious coexistence with nature's radiant forces."
  }
];

console.log('Generated English Ch8:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/english_ch8.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
