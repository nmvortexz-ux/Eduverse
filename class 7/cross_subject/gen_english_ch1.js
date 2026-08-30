import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 1: Three Questions & The Squirrel (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "In Leo Tolstoy's famous story 'Three Questions', what were the three fundamental questions the King wanted answers to?",
    options: [
      "1. What is the right time to begin something? 2. Which people should he listen to? 3. What is the most important thing for him to do?",
      "1. How to defeat enemies? 2. How much gold to collect? 3. Where to build castles?",
      "1. When to sleep? 2. What to eat? 3. How to ride horses?",
      "1. Who is the richest king? 2. Where is the magic cave? 3. How to live forever?"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tolstoy's king sought wisdom on: right time to act, right people to heed, and most crucial enterprise to undertake."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Whom did the King decide to visit in the deep forest to seek true wisdom after being dissatisfied with the wise men's conflicting answers?",
    options: [
      "A simple, wise Hermit who lived alone in a hut in the woods and received only common folk",
      "A powerful sorcerer with a crystal ball",
      "An astrologer in the royal palace",
      "A foreign emperor"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The king disguised himself in simple peasant clothing and left his horse behind to consult the forest hermit."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What was the frail, old Hermit doing when the King arrived at his forest hut?",
    options: [
      "Digging ground beds in front of his hut with a spade",
      "Sleeping under a tree",
      "Reading a large book",
      "Cooking soup"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The hermit was laboriously digging flower/seed beds in front of his hut, breathing heavily from physical exertion."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "How did the King help the exhausted Hermit upon arrival?",
    options: [
      "The King took the heavy spade from the hermit's hands and dug the ground beds for him until sunset",
      "He gave the hermit a bag of gold",
      "He ordered his soldiers to carry the hermit",
      "He sat down and watched the hermit struggle"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Seeing the hermit's frailty, the king took the spade and dug the ground tirelessly until evening."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Who came running out of the dark woods towards the King and the Hermit with hands pressed against his bleeding stomach?",
    options: [
      "A bearded man who was severely wounded by the King's royal bodyguards",
      "A wild forest tiger",
      "A messenger from the palace",
      "A robber looking for gold"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A bearded wounded man ran out of the forest, fainting and bleeding profusely from a severe abdominal wound."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "How did the King save the life of the bleeding bearded man?",
    options: [
      "The King washed the wound repeatedly, bandaged it with his clean handkerchief and the hermit's towel until the bleeding stopped, and gave him fresh water to drink",
      "He called a helicopter",
      "He put the man in prison",
      "He ran away into the forest"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The king washed and repeatedly redressed the severe wound with his handkerchief, nursing the man back to life."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Why had the bearded man originally hidden in the woods to ambush and kill the King?",
    options: [
      "Because the King had earlier executed the man's brother and confiscated all his family property",
      "Because he wanted to steal the King's crown",
      "Because the King owed him money",
      "Because he was a spy for another kingdom"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The bearded man sought blood revenge because the king had put his brother to death and seized his estate."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "According to the wise Hermit, what is the SINGLE MOST IMPORTANT TIME in life?",
    options: [
      "'NOW' (The Present Moment) — because it is the only time over which we possess any real power to act",
      "Yesterday",
      "Tomorrow",
      "Next year"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The hermit revealed: 'The most important time is NOW, because it is the only time we have any power'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "According to the Hermit, who is the MOST IMPORTANT PERSON to a human being?",
    options: [
      "The person you are with at any given present moment (as no one knows if you will ever have dealings with anyone else)",
      "The King or Queen",
      "The richest merchant",
      "A distant celebrity"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The most necessary person is the one with whom you are in the immediate present moment."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "According to the Hermit, what is the MOST IMPORTANT BUSINESS/AFFAIR in human life?",
    options: [
      "To do good to the person you are with (for that divine purpose alone were humans sent into this world)",
      "To amass gold and treasure",
      "To conquer new lands",
      "To become famous and feared"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The ultimate human mission is to do good to others: 'for that purpose alone was man sent into this life'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "In Mildred Bowers Armstrong's delightful poem 'The Squirrel', what did the playful squirrel wear for a tail?",
    options: ["A Question Mark (?) for a tail", "An exclamation mark", "A straight sword", "A bushy broom"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Armstrong's opening line paints an iconic visual metaphor: 'He wore a question mark for tail'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "In the poem 'The Squirrel', what color 'overcoat' did the squirrel wear, and what food did he sit straight up to eat?",
    options: [
      "An overcoat of Gray ; sitting up straight to eat a Nut",
      "An overcoat of Green ; eating an Apple",
      "An overcoat of Black ; eating a Fish",
      "An overcoat of Red ; eating Berries"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Armstrong describes the squirrel's natural fur: 'An overcoat of gray / He sat up straight to eat a nut'."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What dramatic moral transformation occurs between the King and his bitter enemy in 'Three Questions'?",
    options: [
      "The wounded enemy asked for forgiveness, pledged eternal loyal service, and the King warmly forgave him, promised to restore his confiscated property, and sent his royal doctor to care for him (Enemy turned into devoted friend through compassion)",
      "The King executed the enemy in the forest",
      "The enemy escaped and attacked the palace",
      "The hermit asked for money from both"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Compassion and mercy transformed a bloodthirsty avenger into a lifelong loyal friend and ally."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "How did the Hermit prove to the King that his three questions had ALREADY been answered through living experience?",
    options: [
      "If the King had not pitied the Hermit and dug the beds, he would have been killed by the ambush; and if he had not bandaged the wounded man, the man would have died without making peace",
      "The Hermit gave him a written parchment",
      "The Hermit cast a magic spell",
      "The Hermit sent him to another kingdom"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tolstoy demonstrates that wisdom is experiential: lived compassionate action in the present moment provides its own truth."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "In the poem 'The Squirrel', what playful game does the squirrel play when children run around his tree?",
    options: [
      "\"He liked to tease and play, / And if we ran around his tree, / He went the other way.\"",
      "He throws nuts at the children",
      "He jumps into their hands",
      "He flies into the sky"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Armstrong captures the skittish, playful evasive antics of squirrels: darting to the opposite side of tree trunks."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What is the SYNONYM for the word 'Council' as used in 'Three Questions' ('a council of wise men')?",
    options: [
      "A body of advisors / committee of experts",
      "To give advice to someone",
      "A battlefield",
      "A royal palace"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Council' (noun) denotes an advisory assembly; distinct from 'counsel' (verb/noun for advice)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What is the meaning of the word 'Fainted' in: 'The bearded man reached the king and fainted.'?",
    options: ["Lost consciousness temporarily due to weakness or loss of blood", "Started shouting loudly", "Turned into a ghost", "Fell asleep happily"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Fainted' (syncope) signifies transient loss of consciousness caused by hypovolemia or trauma."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Identify the part of speech of the underlined word in: 'He lived in a wood which he **never** quitted.'",
    options: ["Adverb of Frequency (modifying the verb 'quitted')", "Adjective", "Preposition", "Conjunction"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Never' is an Adverb of Frequency specifying the temporal negation of the verb 'quitted'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Combine the two sentences using a RELATIVE PRONOUN:\n'I saw a hermit. He was digging the ground.'",
    options: [
      "'I saw a hermit who was digging the ground.'",
      "'I saw a hermit which was digging the ground.'",
      "'I saw a hermit whose was digging the ground.'",
      "'I saw a hermit where was digging the ground.'"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Relative pronoun 'who' refers to human personal antecedents ('hermit') in the subjective case."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What is the ANTONYM of 'Forgive'?",
    options: ["Punish / Blame / Condemn", "Pardon", "Absolve", "Excuse"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The opposite of 'forgive' (granting pardon) is 'punish' or 'condemn'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Choose the correct abstract noun formed from the adjective 'Wise':",
    options: ["Wisdom", "Wiseness", "Wisely", "Wisiful"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The abstract noun derived from the root adjective 'wise' is 'wisdom'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Choose the correct abstract noun formed from the adjective 'Forgiving':",
    options: ["Forgiveness", "Forgivement", "Forgively", "Forgivation"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The abstract noun form is 'forgiveness'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Fill in the blank with the correct Determiner:\n'The king promised to give _______ large sum of money to anyone who would answer his three questions.'",
    options: ["a", "an", "the", "many"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'A' is the indefinite singular article preceding consonant phoneme /l/ in 'large'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What figure of speech is used in the poetic line: 'He wore a question mark for tail'?",
    options: [
      "Metaphor (imaginatively describing the curved shape of the squirrel's tail as a punctuation question mark)",
      "Simile",
      "Personification",
      "Hyperbole"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Equating the tail directly to a question mark without 'like' or 'as' is an imaginative Metaphor."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What does the phrasal verb 'To take pity on' mean in the sentence: 'The king took pity on the old hermit.'?",
    options: ["To feel deep compassion and sympathy for someone's suffering", "To laugh at someone", "To give someone an exam", "To ignore someone"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To take pity on' denotes feeling genuine compassionate concern prompting benevolent action."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Convert into Indirect Speech:\nThe hermit said to the king, \"You have already been answered.\"",
    options: [
      "The hermit told the king that he had already been answered.",
      "The hermit said to the king that you are already answered.",
      "The hermit asked the king if he was answered.",
      "The hermit said the king that you had been answered."
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Present Perfect ('have been answered') backshifts to Past Perfect ('had already been answered') with pronoun shift."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What is the meaning of the word 'Beds' in the agricultural context of 'Three Questions' ('The king had dug two beds')?",
    options: [
      "Small rectangular patches of dug soil prepared for planting seeds and flowers",
      "Furniture with mattresses for sleeping",
      "River floors",
      "Wooden boxes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "In gardening/horticulture, 'beds' are demarcated tilled soil plots cultivated for sowing."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Choose the correct sentence with proper Subject-Verb Agreement:",
    options: [
      "'Neither the king nor his ministers were able to find universal agreement.'",
      "'Neither the king nor his ministers was able to find universal agreement.'",
      "'The king with his ministers were digging.'",
      "'Everyone of the wise men have different answers.'"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "In 'Neither... nor' constructions, the finite verb agrees with the proximate plural subject ('ministers were')."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Read the statements:\nAssertion (A): Leo Tolstoy's 'Three Questions' presents a profound philosophy of existential mindfulness and altruistic duty.\nReason (R): It establishes that past regrets and future anxieties are powerless illusions; our true spiritual purpose is realized only through selfless compassionate service to whoever stands before us in the living present.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Tolstoy's parables distill Christian existentialism: the eternal 'Now' consecrated by active altruistic love."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Spot the IMPOSTER in the following group of philosophical conclusions derived from 'Three Questions':\nGroup:\n1. The most important time is NOW.\n2. The most necessary person is the one you are with.\n3. The most important affair is to do good to others.\n4. The best strategy for a king is to execute all enemies before they attack.",
    options: ["Conclusion 1", "Conclusion 2", "Conclusion 3", "Conclusion 4"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Conclusion 4 is the exact antithesis of Tolstoy's moral theme, which advocates reconciling and transforming enemies through mercy."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Analyze the subtle irony in the arrival of the bearded wounded man in 'Three Questions':\nWhat is the situational irony?",
    options: [
      "The man who came with the intent to murder the King had his own life saved by that very King, converting mortal hatred into eternal loyalty",
      "The King ran away from the wounded man",
      "The Hermit turned out to be the man's brother",
      "The King discovered the man was a ghost"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Situational irony: the assassin's murderous ambush is foiled, and his life is saved by the intended victim."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Match Column I (Literary Character / Element) with Column II (Symbolic Representation in 'Three Questions'):\n(a) The King     -> (i) The restless searcher for intellectual certainty\n(b) The Hermit   -> (ii) Grounded spiritual wisdom living in harmony with nature\n(c) The Spade    -> (iii) Humble, selfless labor in service of others\n(d) The Bandage  -> (iv) Healing compassion that dissolves historical enmity",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "King = searcher; Hermit = wisdom; Spade = humble labor; Bandage = healing compassion."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Read the statements regarding Mildred Bowers Armstrong's poem 'The Squirrel':\nStatement 1: The poem employs playful visual imagery ('question mark for tail', 'overcoat of gray') to capture the energetic charm of small wildlife.\nStatement 2: The squirrel's quick evasion ('He went the other way') reflects nature's delicate boundary between friendly playfulness and instinctual wildness.\nStatement 3: The poet captures the squirrel in a cage.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because the squirrel remains free in nature in the poem. Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Identify the grammatical role of the underlined words in: 'The king was **greatly pleased** to have made peace with his enemy so easily.'",
    options: [
      "'Greatly' is an Adverb of Degree modifying the participial adjective 'pleased'",
      "'Greatly' is a Noun",
      "'Pleased' is a Preposition",
      "'Greatly' is a Conjunction"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Greatly' intensifies the participial adjective predicate 'pleased', functioning as an Adverb of Degree."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Which of the following sentences correctly utilizes a CONDITIONAL CLAUSE (Type 3 / Unfulfilled Past Condition) matching the Hermit's dialogue?",
    options: [
      "'If you had not pitied my weakness yesterday and had not dug these beds, you would have been attacked by that man.'",
      "'If you do not dig beds, you will be attacked.'",
      "'If you dig beds, you are attacked.'",
      "'If you would dig beds, you had been attacked.'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Third conditional structure: If + past perfect (had not pitied/dug) ... would have + past participle (would have been attacked)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What is the tone and poetic meter of Mildred Bowers Armstrong's 'The Squirrel'?",
    options: [
      "Playful, affectionate, and lighthearted with rhythmic rhyming couplets capturing lively kinetic movement",
      "Somber, tragic, and mournful",
      "Fierce, aggressive, and war-like",
      "Scientific and analytical without emotion"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Armstrong's tone is whimsical, playful, and delighted by nature's miniature vivacity."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Select the sentence that contains a TRANSITIVE verb with both a DIRECT and an INDIRECT object:",
    options: [
      "'The King gave the exhausted wounded man a cup of fresh water.' ('the wounded man' = indirect object ; 'a cup of fresh water' = direct object)",
      "'The squirrel ran up the tall tree.'",
      "'The hermit was digging in the garden.'",
      "'The sun sank behind the trees.'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ditransitive syntax: Verb (gave) + Indirect Object (the wounded man) + Direct Object (a cup of fresh water)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What is the meaning of the archaic/literary term 'Quitted' in 'He lived in a wood which he never quitted'?",
    options: ["Departed from / left / abandoned", "Destroyed with fire", "Purchased with money", "Painted with colors"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Literary verb 'quit' (past: quitted/quit) signifies to depart from or leave a location."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "Transform the complex sentence into a SIMPLE sentence without changing its meaning:\n'When the King saw the hermit, he greeted him respectfully.'",
    options: [
      "'On seeing the hermit, the King greeted him respectfully.'",
      "'The King saw the hermit and he greeted him.'",
      "'The King saw the hermit because he greeted him.'",
      "'Although the King saw the hermit, he greeted him.'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Participial/prepositional phrase reduction: 'On seeing the hermit' transforms the adverbial time clause into a simple sentence."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 1: Three Questions & The Squirrel",
    question: "What enduring message does the opening chapter of NCERT Class 7 English impart to young learners?",
    options: [
      "True wisdom is not found in abstract academic speculation, but in practical mindfulness, living fully in the present moment, practicing unconditional kindness, and finding joy in the gentle creatures of nature",
      "That questions in life can never be answered",
      "That rulers should never listen to common people",
      "That wild animals should be captured for research"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 1 harmonizes philosophical mindfulness (Tolstoy) with affectionate ecological wonder (Armstrong)."
  }
];

console.log('Generated Class 7 English Ch1:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/english_ch1.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
