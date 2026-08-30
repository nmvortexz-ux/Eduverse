import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 6: Who I Am (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is Radha's favorite activity described in 'Who I Am'?",
    options: ["Climbing the mango tree outside her house", "Playing video games", "Painting pictures", "Collecting stamps"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Radha loves climbing the branching mango tree outside her house, feeling like she can rule the whole world from high up."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What does Nasir want to become when he grows up?",
    options: ["A Seed Collector", "An astronaut", "A doctor", "A pilot"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Nasir from Andhra Pradesh wants to learn how to preserve and collect cotton seeds so his family doesn't spend money on new seeds every year."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What does Rohit dream of doing if he had a huge amount of money?",
    options: ["Traveling around the world to see mountains, rivers, and coral reefs", "Buying a thousand toy cars", "Building a gold palace", "Opening a big mall"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rohit loves seeing nature and dreams of traveling to New Zealand mountains, Amazon rafting, and Lakshadweep diving."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What does Serbjit do when he gets angry because people don't believe him when he tells the truth?",
    options: [
      "He looks down at his shoes and counts to ten so that he doesn't show his anger",
      "He shouts loudly at everyone",
      "He throws his books",
      "He runs away from home"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Serbjit controls his temper by looking at his shoes and counting to ten when teachers or parents distrust his honest word."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is Dolma's grand ambition for her future career?",
    options: ["To become the Prime Minister of India", "To become a movie actress", "To become a sports captain", "To become a fashion designer"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Dolma has strong leadership qualities; when people say it's impossible, she insists she will make things better for everyone as Prime Minister."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is Peter's favorite day of the week, when his entire family goes to the cinema hall to watch a film?",
    options: ["The second Sunday of every month", "Every Saturday morning", "Every Friday evening", "Monday afternoon"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Peter loves the second Sunday because the whole family enjoys movie tickets, interval peanuts, and ice cream together."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "In the supplementary tale 'The Monkey and the Crocodile', where did the friendly monkey live?",
    options: ["In a lush fruit tree (berry/jamun tree) on the bank of a river", "In a cave in the hills", "In a village temple", "In a zoo cage"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The solitary monkey lived happily in a fruit-laden tree on the riverbank, feasting on sweet berries."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What sweet fruit did the generous monkey pluck and throw down to his new friend, the crocodile?",
    options: ["Sweet berries / rose-apples", "Coconuts", "Bananas", "Mangoes"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The monkey shared delicious fresh berries with the visiting crocodile daily."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "Why was the crocodile's wife furious when the crocodile returned home very late one day?",
    options: [
      "She was tired of waiting and managing the newly hatched baby crocodiles alone",
      "She had lost her house",
      "She was angry at the river",
      "She wanted to swim to the sea"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Waiting impatiently with her newly hatched babies, the crocodile's wife resented her husband's long daily chats with the monkey."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What wicked demand did the crocodile's wife make after tasting the sweet berries brought home by her husband?",
    options: [
      "She demanded to eat the monkey's heart, arguing that an animal eating such sweet fruit daily must have the sweetest heart",
      "She wanted the monkey's fur coat",
      "She wanted the tree to be cut down",
      "She wanted to live in the tree"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Her cruel greed demanded the monkey's heart as an exotic delicacy."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "How did the crocodile transport the monkey across the river to visit his home?",
    options: ["On the crocodile's broad back", "In a wooden boat", "On a floating log", "On a leaf"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Unable to swim, the trusting monkey rode happily perched on the crocodile's back."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "In the poem 'The Wonderful Words' by Mary O'Neill, what are words described as?",
    options: ["The food and dress of thought", "Sharp weapons of war", "Meaningless sounds", "Cold stones"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Poet Mary O'Neill writes that words give physical form, elegance, and dynamic expression to human thoughts."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What clever trick did the quick-witted monkey play in mid-stream when the crocodile confessed he was taking him to be killed?",
    options: [
      "He declared that he had left his heart safely behind on the tree branch, and persuaded the foolish crocodile to swim back to fetch it",
      "He jumped into the water and drowned the crocodile",
      "He hit the crocodile with a stone",
      "He called other monkeys for help"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The brilliant monkey feigned willingness to sacrifice himself, tricking the gullible reptile into returning to the tree to 'fetch his heart'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What did the monkey do the moment the crocodile reached back to the riverbank tree?",
    options: [
      "He leaped up to the safety of the tree branch in a flash, threw down fruit, and permanently terminated their friendship",
      "He gave his heart to the crocodile",
      "He jumped into the crocodile's mouth",
      "He invited the crocodile's wife to the tree"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Reaching safety, the monkey rebuked the treacherous crocodile for his betrayal and ended the friendship forever."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What moral lesson does the Panchatantra classic 'The Monkey and the Crocodile' teach?",
    options: [
      "Presence of mind, quick wit, and intelligence can overcome the deadliest danger; a treacherous friend is worse than an open enemy",
      "Crocodiles are the fastest swimmers",
      "Monkeys should never eat fruit",
      "Trees should not grow near rivers"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mental agility and composure in crises defeat brute betrayal and treachery."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "In 'Who I Am', what central message is celebrated through the six unique children (Radha, Nasir, Rohit, Serbjit, Dolma, Peter)?",
    options: [
      "Every individual child is uniquely talented, has distinct aspirations, intelligences, and ways of viewing the world that deserve celebration",
      "All children must have the exact same career dream",
      "Only children who climb trees are smart",
      "Children should never share their thoughts"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The chapter showcases Howard Gardner's multiple intelligences: bodily-kinesthetic, naturalist, interpersonal, visual-spatial, and linguistic."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "In the poem 'The Wonderful Words', why does the poet advise: 'Never let a thought shrivel and die for want of a way to say it'?",
    options: [
      "Because English is a wonderful game of words that allows anyone to express their finest, brightest ideas clearly and beautifully",
      "Because thoughts can bite you",
      "Because silence is dangerous",
      "Because dictionaries are free"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Language empowers humans to liberate imprisoned thoughts into radiant verbal articulation."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is Visual-Spatial intelligence, as demonstrated by someone who thinks in pictures, loves maps, diagrams, and visual arts?",
    options: ["Visual intelligence", "Bodily-Kinesthetic intelligence", "Musical intelligence", "Mathematical intelligence"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Visual-spatial learners navigate 3D environments, orient maps, and conceptualize architectural imagery effortlessly."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is Bodily-Kinesthetic intelligence, as demonstrated by Radha who loves climbing and physical coordination?",
    options: [
      "The ability to control body movements, physical agility, balance, and handle objects skillfully",
      "The ability to solve calculus problems",
      "The ability to compose symphony music",
      "The ability to speak 10 languages"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Bodily-kinesthetic intelligence involves gross and fine motor coordination, physical balance, and tactile mastery."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is Interpersonal intelligence, as demonstrated by Dolma who loves resolving classmates' disputes and leading groups?",
    options: [
      "The ability to understand, empathize with, motivate, and collaborate effectively with other people",
      "The ability to talk to oneself only",
      "The ability to paint portraits",
      "The ability to run fast"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Interpersonal intelligence enables leadership, social empathy, mediation, and group teamwork."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "Why was the crocodile torn between two conflicting loyalties in the middle of the river?",
    options: [
      "He genuinely loved his loyal friend the monkey, but could not resist or disobey his aggressive, demanding wife",
      "He wanted to become a vegetarian",
      "He forgot how to swim",
      "He was afraid of water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "His moral dilemma: honoring sacred friendship versus succumbing to marital pressure."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What does the word 'Preserve' mean when Nasir talks about cotton seeds?",
    options: ["To save, maintain, and protect something safely for future use", "To destroy by burning", "To throw into the river", "To eat immediately"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Preservation involves storing and protecting biological germplasm seeds across planting seasons."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What does the phrase 'to shrivel and die' mean in 'The Wonderful Words'?",
    options: ["To shrink, dry up, wither away, and disappear without being expressed", "To grow very large", "To sing a song", "To fly like a kite"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Shrivel' metaphorically depicts unuttered ideas withering away from lack of communicative expression."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "Why does Dolma say: 'I know that when I grow up, I will be a great Prime Minister'?",
    options: [
      "Because everyone in school comes to her with problems, teachers trust her to manage things, and she genuinely wants to build better hospitals and roads",
      "Because she wants to be rich and famous",
      "Because her parents ordered her to",
      "Because she wants to fly in an aeroplane"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dolma exhibits natural civic responsibility, public problem-solving, and infrastructural vision for society."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "In the poem 'The Wonderful Words', what is described as being 'imprisoned behind your eyes'?",
    options: ["Fresh, marvellous new thoughts waiting to be freed by words", "Tears of sadness", "Sleep and dreams", "Old memories"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The poet portrays unvoiced thoughts as captives in the mind awaiting liberation through eloquent vocabulary."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What was the crocodile's emotional state as he swam back to his riverbank lair after being outsmarted by the monkey?",
    options: [
      "Sadder and wiser — filled with shame, sorrow, and regret for having lost a loyal, lifelong true friend through foolish treachery",
      "Laughing with great joy",
      "Eager to eat more berries",
      "Singing a battle song"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Panchatantra concludes with the crocodile weeping tears of profound regret over the tragic forfeiture of true friendship."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is Naturalist intelligence, as exemplified by Nasir who understands seeds, soil, and agricultural growth?",
    options: [
      "The ability to understand, categorize, and appreciate features of the natural environment, plants, and animals",
      "The ability to build tall skyscrapers",
      "The ability to drive trains",
      "The ability to dance on stage"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Naturalist intelligence involves attunement to biological ecosystems, flora, fauna, and environmental cycles."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is Musical intelligence in Howard Gardner's theory?",
    options: [
      "The capacity to discern pitch, rhythm, timbre, tone, and compose or appreciate musical structures",
      "The ability to swim fast",
      "The ability to draw cartoons",
      "The ability to lift heavy weights"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Musical intelligence governs auditory harmonic sensitivity, rhythm, pitch discernment, and compositional skill."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "Read the statements:\nAssertion (A): The monkey saved his life in mid-stream purely through emotional composure and rapid psychological manipulation of the crocodile.\nReason (R): Instead of panicking with paralyzing fear, the monkey exploited the crocodile's gullibility by fabricating the excuse of leaving his heart behind on the tree.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Equanimity and tactical deception allowed the unarmed, physically vulnerable monkey to outwit the predatory reptile."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "Spot the IMPOSTER in the following group of multiple intelligences paired with their core expressions from Chapter 6:\nGroup: [Bodily-Kinesthetic (Athletic movement), Interpersonal (Social leadership), Naturalist (Seed cultivation), Mathematical (Painting portraits)]",
    options: ["Bodily-Kinesthetic (Athletic movement)", "Interpersonal (Social leadership)", "Naturalist (Seed cultivation)", "Mathematical (Painting portraits)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Painting portraits' is an expression of VISUAL-SPATIAL intelligence, NOT mathematical intelligence."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "In 'The Wonderful Words', what profound linguistic philosophy does Mary O'Neill advocate?",
    options: [
      "Language is a living creative instrument: we must actively nurture vocabulary so that brilliant human thoughts are not silenced by linguistic poverty",
      "Languages should never be learned by children",
      "Grammar rules should be abolished",
      "Pictures are better than all words"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The poem celebrates verbal literacy as the indispensable vehicle for manifesting internal human consciousness."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "Match Column I (Characters from 'Who I Am') with Column II (Core Personality & Dream):\n(a) Radha   -> (i) Wants to conserve agricultural seeds and stop waste\n(b) Nasir   -> (ii) Loves climbing mango tree and feeling powerful\n(c) Rohit   -> (iii) Dreams of being Prime Minister and improving society\n(d) Dolma   -> (iv) Yearns to explore global natural wonders and oceans",
    options: [
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Radha = tree climbing; Nasir = seed preservation; Rohit = world travel; Dolma = Prime Minister."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "Read the statements:\nStatement 1: Howard Gardner's theory posits that intelligence is multi-dimensional rather than a single monolithic IQ score.\nStatement 2: In 'Who I Am', Serbjit is believed by everyone whenever he speaks the truth.\nStatement 3: Peter's family eats peanuts during the cinema interval on the second Sunday of every month.\nWhich statements are TRUE?",
    options: ["Statements 1 and 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because Serbjit struggles with adults distrusting his truthful word. Statements 1 and 3 are textually accurate."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "Identify the figure of speech in Mary O'Neill's line: 'Words are the food and dress of thought.'",
    options: ["Metaphor (direct non-literal comparison between words and nourishing clothing)", "Simile", "Hyperbole", "Oxymoron"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "A direct figurative equation comparing verbal words to food (nourishment) and dress (outer form) without using 'like' or 'as' is a Metaphor."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is the meaning of the adjective 'Treacherous' as applied to the crocodile's deceitful act?",
    options: [
      "Guilty of betraying sacred trust and loyalty; dangerously deceptive and unfaithful",
      "Extremely kind and friendly",
      "Very fast and strong",
      "Old and tired"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Treacherous' characterizes perfidious violation of mutual faith, alliance, or sworn friendship."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "How does Serbjit constructively channel and regulate his intense emotional frustration when misunderstood?",
    options: [
      "Through cognitive mindfulness: looking down at his shoes and counting to ten to prevent impulsive verbal rage",
      "By breaking furniture",
      "By skipping school for weeks",
      "By blaming his friends"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Counting to ten and grounding visual focus is an effective cognitive-behavioral technique for anger management."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is the grammatical function of the underlined clause in: 'Nasir wants to know *how seeds can be collected for future farming*.'",
    options: ["Noun Clause (functioning as the direct object of the verb 'know')", "Adjective Clause", "Adverb Clause of Time", "Prepositional Phrase"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The embedded interrogative clause functions as the direct object of the transitive verb 'know', making it a Noun Clause."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "In 'The Monkey and the Crocodile', what tragic philosophical reality did the crocodile realize upon reaching the bank?",
    options: [
      "That an unprincipled compromise made to please an evil demand cost him the rarest treasure of life: a loyal, noble, and compassionate friend",
      "That berries are poisonous",
      "That swimming across rivers is impossible",
      "That his wife was right all along"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Betraying moral integrity for unholy appeasement results in irreversible spiritual and relational bankruptcy."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What is Intrapersonal intelligence according to psychology?",
    options: [
      "The capacity for deep self-awareness, metacognition, understanding one's own emotions, strengths, weaknesses, and values",
      "The ability to talk to 100 people at once",
      "The skill of navigating ships",
      "The talent for playing drums"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Intrapersonal intelligence is self-reflective awareness of one's internal cognitive processes, emotional triggers, and identity."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 6: Who I Am",
    question: "What unifying theme links 'Who I Am', 'The Monkey and the Crocodile', and 'The Wonderful Words' in Class 6 English?",
    options: [
      "The profound triumph of self-identity, articulate communication, moral integrity, and mental wisdom over blind conformity and brute malice",
      "The superiority of animals over humans",
      "The need to never leave home",
      "The danger of writing poems"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "All three selections celebrate authentic individuality, expressive eloquence, and intellectual wisdom in navigating life's challenges."
  }
];

console.log('Generated English Ch6:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/english_ch6.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
