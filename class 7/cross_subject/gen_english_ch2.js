import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 2: A Gift of Chappals & The Rebel (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "In Vasantha Surya's lively story 'A Gift of Chappals', who went to her aunt Rukku Manni's house with her grandmother Tapi in Madras (Chennai)?",
    options: ["Mridu", "Lalli", "Meena", "Rukku Manni"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Young Mridu visits her aunt Rukku Manni's house accompanied by her grandmother (Tapi)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What did Ravi and Meena secretly show Mridu hidden inside a torn football lined with sacking in the backyard behind a bitter-berry bush?",
    options: [
      "A tiny kitten lapping milk from a coconut half-shell",
      "A puppy",
      "A baby parrot",
      "A treasure chest"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ravi and Meena harbored a secret stray kitten drinking milk from a coconut shell in the backyard."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What grand, aristocratic name did Ravi give to the secret little kitten?",
    options: [
      "Mahendravarma Pallava Poonai (M.P. Poonai / Mahendran for short)",
      "Sher Khan",
      "Tiger King",
      "Raja Pallava"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ravi fancifully claimed the kitten was descended from the Pallava royal emblem: Mahendravarma Pallava Poonai (M.P. Poonai)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What musical instrument was Lalli struggling and screeching to play while taking music lessons from the music master?",
    options: ["Violin", "Veena", "Flute", "Harmonium"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Lalli was awkwardly learning to play the violin, making screeching 'kreech' noises resembling a derailed train."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "How did the author humorously describe the physical appearance of the bald-headed Music Master?",
    options: [
      "A bony figure with a mostly bald head fringed with oiled black hair tied in an old-fashioned tuft, wearing a shining gold chain and diamond ring",
      "A giant man with a long white beard",
      "A young boy with sunglasses",
      "A soldier in royal armor"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The music master is caricatured with a bony frame, oiled tuft, glistening diamond ring, and gold chain."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Why was the poor Beggar groaning and leaning against the neem tree in the garden?",
    options: [
      "The scorching afternoon tar road was boiling hot and had caused painful, peeling pink blisters on the soles of his bare feet",
      "Because he wanted to steal mangoes",
      "Because he was singing a song",
      "Because he lost his glasses"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Walking barefoot on sun-baked asphalt caused severe blisters on the impoverished beggar's soles."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What did the compassionate children (Ravi, Meena, and Mridu) decide to give to the blistered barefoot beggar?",
    options: [
      "The large, grey, dusty pair of chappals lying near the verandah (which belonged to the Music Master)",
      "A bag of gold coins",
      "A pair of roller skates",
      "A bicycle"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Pitying his blistered feet, the children gifted the music master's sturdy chappals to the beggar."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "To pacify the furious, search-weary Music Master whose chappals had vanished, whose brand new chappals did Rukku Manni give to him?",
    options: ["Gopu Mama's hardly-worn chappals", "Ravi's shoes", "Paati's sandals", "Tapi's slippers"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rukku Manni surrendered Gopu Mama's pristine chappals to appease the aggrieved music teacher."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "In D.J. Enright's poem 'The Rebel', what does the Rebel do when everybody else has short hair?",
    options: ["The rebel lets his hair grow long", "He cuts his hair off completely", "He paints his hair blue", "He wears a hat"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Enright contrasts non-conformist behavior: when others cut hair short, the rebel grows long hair."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "In 'The Rebel', what does the Rebel express when everybody else is praising the bright warm Sun?",
    options: [
      "The rebel remarks on the need for Rain",
      "The rebel wears sunglasses",
      "The rebel praises the moon",
      "The rebel stays asleep"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The rebel systematically seeks contrast: desiring rain during sunshine and sunshine during rain."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What kind of sentence expresses a direct command, request, or advice (e.g. 'Don't make that noise!', 'Please give him chappals.')?",
    options: ["Imperative Sentence", "Interrogative Sentence", "Exclamatory Sentence", "Declarative Sentence"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Imperative sentences issue orders, prohibitions, entreaties, or instructional advice."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What is the past continuous tense form of the verb 'dig' for a plural subject (They)?",
    options: ["They were digging", "They was digging", "They are digging", "They have digged"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Past Continuous plural: were + verb-ing → 'were digging'."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "How did Ravi cleverly smuggle milk from the kitchen for the secret kitten without Paati suspecting him?",
    options: [
      "He took milk in a glass, pretending he was very hungry; when Paati saw him, he drank most of it right in front of her to prove he was drinking it, ran out, poured the remaining milk into the coconut shell, and quickly washed the glass",
      "He bought milk from a store",
      "He told Paati the truth directly",
      "He hid a cow in the garden"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ravi staged drinking the milk under Paati's watchful eye before dashing to feed the kitten."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What humorous comparison did the author draw between the Music Master's violin playing and Lalli's violin playing?",
    options: [
      "The music master's notes glided smoothly on melody tracks like a train on smooth rails, while Lalli went off the rails completely, screeching and derailing constantly",
      "Lalli played better than the teacher",
      "Both sounded like sweet singing birds",
      "Both played with their eyes closed"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Vasantha Surya contrasts the master's melodic precision with Lalli's discordant screeching derailments."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Why did Ravi argue with Rukku Manni about 'Karna' from the Mahabharata when she scolded him for giving away the music master's chappals?",
    options: [
      "Ravi argued that adults always preach about being generous and giving to the needy like the great giver Karna, yet get angry when children actually practice true generosity",
      "Because Ravi wanted to become a king like Karna",
      "Because Karna was a music master",
      "Because Karna had chappals made of gold"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ravi pointed out adult moral contradiction: preaching the legendary charity of Karna while penalizing genuine compassionate giving."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "How did Rukku Manni react after the Music Master left with Gopu Mama's chappals when she thought of Gopu Mama coming home from office?",
    options: [
      "Her anger dissolved into laughter wondering what excuse she would give Gopu Mama, who always kicks off his shoes and wants his chappals the moment he enters the house",
      "She started crying loudly",
      "She punished Ravi with no food",
      "She chased the music master down the street"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rukku Manni's exasperation melts into rueful humor anticipating Gopu Mama's predictable evening reaction."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "In 'The Rebel', what social value or perspective does the poet conclude with regarding rebels in society?",
    options: [
      "It is good that we have rebels because they bring diversity and challenge rigid conformity, but it is not very good to BE one yourself because society often isolates and misunderstands them",
      "Rebels should all be put in prison",
      "Everyone must become a rebel",
      "Rebels are always evil"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Enright balances social utility with personal cost: non-conformity enriches cultural vitality but invites social friction."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Identify the correct meaning of the underlined idiom in: 'The music master's eyes **lit up** when he saw Gopu Mama's brand new chappals.'",
    options: [
      "Showed sudden, unmistakable delight, greed, and satisfaction",
      "Caught fire literally",
      "Turned bright yellow",
      "Became blind"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Eyes lit up' idiomatically conveys spontaneous delight and concealed covetousness."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Choose the correct question framed using an 'IF' conditional clause for: 'You want to know if it will rain tomorrow before planning a picnic.'",
    options: [
      "'What will we do if it rains tomorrow?'",
      "'Why is it raining tomorrow?'",
      "'When will it rain if?'",
      "'How does rain happen if?'"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Standard first conditional interrogative: 'What will we do if it rains tomorrow?'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What is the SYNONYM of the word 'Snooze' as used in 'The beggar was having a snooze under the neem tree'?",
    options: ["A short, light sleep / nap", "A heavy meal", "A long walk", "A loud quarrel"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Snooze' denotes a brief, light period of slumber or daytime nap."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What is the meaning of the word 'Lurking' in: 'The kitten was lurking behind the bitter-berry bush'?",
    options: ["Remaining hidden or waiting stealthily out of sight", "Running at full speed", "Singing loudly", "Sleeping peacefully"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Lurking' means remaining concealed in ambient cover, often stealthily."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Fill in the blank with the correct Phrasal Verb:\n'Rukku Manni asked the beggar to _______ from the gate immediately.'",
    options: ["go away (leave / depart)", "go through", "go on", "go into"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Go away' signifies departing from a premises."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Choose the sentence that correctly uses the PAST CONTINUOUS tense:",
    options: [
      "'While the music master was teaching Lalli, the beggar was calling from the gate.'",
      "'While the music master is teaching Lalli, the beggar calls.'",
      "'The music master taught while the beggar called.'",
      "'The music master had taught Lalli.'"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Two concurrent past continuing actions: 'was teaching' and 'was calling'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What is the ANTONYM of the word 'Generous'?",
    options: ["Stingy / Miserly / Selfish", "Brave", "Kind", "Helpful"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The opposite of 'generous' (bountiful/unselfish) is 'stingy' or 'miserly'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What literary device is used in the contrasting rhyming pairs of 'The Rebel' ('When everybody has short hair, The rebel lets his hair grow long')?",
    options: [
      "Antithesis / Contrast (juxtaposition of sharply opposing ideas)",
      "Personification",
      "Simile",
      "Metaphor"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Antithesis pairs diametrically opposing behavioral traits in structured syntactic balance."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Identify the part of speech of the underlined word in: 'The tar on the road had melted into **boiling** black lava.'",
    options: [
      "Participle Adjective (describing the temperature and state of 'black lava')",
      "Verb in past tense",
      "Noun",
      "Adverb"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Boiling' functions as a present participial adjective qualifying the noun 'lava'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Choose the correctly punctuated direct speech sentence:",
    options: [
      "\"Don't you have any chappals?\" asked Mridu in pity.",
      "\"Don't you have any chappals\" asked Mridu in pity?",
      "Don't you have any chappals? asked Mridu in pity.",
      "\"Don't you have any chappals,\" asked Mridu in pity?"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Direct question punctuation: quotation marks enclose the question mark, followed by lower-case reporting clause."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What is the meaning of 'Giggle' in: 'Meena and Mridu giggled at Ravi's exaggerated stories'?",
    options: ["Laughed in a silly, amused, or suppressed high-pitched way", "Cried bitterly", "Shouted in anger", "Slept quietly"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Giggle' signifies suppressed, lighthearted juvenile laughter."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Read the statements:\nAssertion (A): 'A Gift of Chappals' brilliantly exposes the poignant dissonance between adult theoretical morality and authentic childish empathy.\nReason (R): While elders preach lofty moral ideals about historical charity (Karna) and kindness to animals, they reflexively reprimand children when they act on genuine spontaneous compassion to help a suffering, blistered human being.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Vasantha Surya's narrative irony critiques bourgeois moral hypocrisy through the uncorrupted altruism of children."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Spot the IMPOSTER in the following group of character descriptions from 'A Gift of Chappals':\nGroup:\n1. Mridu - Empathetic visiting cousin\n2. Ravi - Imaginative, quick-witted cousin who feeds the kitten\n3. Music Master - Generous monk who voluntarily gave his chappals to the beggar\n4. Rukku Manni - Stern yet affectionate aunt who resolves the chappals dilemma",
    options: ["Description 1", "Description 2", "Description 3 (The music master did NOT give his chappals voluntarily ; the children gave them away)", "Description 4"],
    correctAnswer: 2,
    difficulty: "HARD",
    damage: 350,
    explanation: "Description 3 is false: the music master was furious at the loss of his chappals and did not give them away voluntarily."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Analyze D.J. Enright's philosophical treatment of the 'Rebel':\nWhat psychological archetype does the rebel embody in social dynamics?",
    options: [
      "The innate dialectical counter-force of individualistic non-conformity that resists herd mentality and questions uniform social orthodoxy",
      "A violent criminal wanting to destroy society",
      "A foolish person who knows nothing",
      "A political king wanting to rule nations"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Enright constructs the rebel as an essential social dialectic against unthinking conformity and groupthink."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Match Column I (Characters / Elements) with Column II (Contextual Actions in Chapter 2):\n(a) Mahendran (M.P. Poonai) -> (i) Sharpened claws on coconut shell & climbed bitter-berry bush\n(b) The Beggar              -> (ii) Exhibited bleeding blisters on sun-baked tar\n(c) The Music Master        -> (iii) Pretended his old chappals were extremely precious & valuable\n(d) Gopu Mama               -> (iv) Unwittingly had his new chappals gifted to the music master",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Kitten = claws/bush; Beggar = blisters; Music Master = prized old chappals; Gopu Mama = new chappals lost."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Read the statements regarding stylistic nuances in Chapter 2:\nStatement 1: The story uses rich sensory auditory imagery ('kreech', 'screeching violin', 'lapping milk') to create vivid realism.\nStatement 2: The poem 'The Rebel' uses a structured repetitive syntax to highlight behavioral antithesis.\nStatement 3: Mridu steals gold jewelry from Rukku Manni's cupboard to give to the beggar.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is completely false (the children only gave old chappals). Statements 1 and 2 are literary truths."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Identify the grammatical structure and mood of the sentence: 'Give the poor man some chappals, or his feet will burn to blisters!'",
    options: [
      "Compound Imperative Sentence with a coordinating conjunction 'or' expressing an urgent moral injunction and consequence",
      "Simple Interrogative Sentence",
      "Complex Subjunctive Sentence",
      "Passive Voice Declarative"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Compound imperative joined by disjunctive coordinator 'or' outlining urgent action and consequence."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What is the situational irony in the Music Master's description of his old stolen chappals:\n'They were brand new! They cost me a whole month's fees!'",
    options: [
      "The chappals were actually decrepit, faded grey with dust and toe-marks, but he exaggerated their value out of greedy vanity to demand a new replacement",
      "The chappals were made of pure platinum",
      "He had borrowed the chappals from the King",
      "The chappals were magical"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The master's hypocritical hyperbole claims dilapidated sandals were pristine to extract maximum compensation."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Which of the following demonstrates the correct use of INVERSION after a negative adverb in formal literary English?",
    options: [
      "'Hardly had the beggar sat down when Rukku Manni ordered him to leave.'",
      "'Hardly the beggar had sat down when Rukku Manni ordered him.'",
      "'Hardly the beggar sat down then Rukku Manni ordered.'",
      "'Hardly was the beggar sitting when then Rukku Manni ordered.'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Negative adverbial inversion: 'Hardly had [subject] [past participle] when...'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What humorous family dynamic is captured when Ravi says about Gopu Mama: 'He's always in such a hurry to throw off his shoes and socks and get into his chappals as soon as he comes home'?",
    options: [
      "The universal domestic habit of working adults shedding formal office attire for casual comfort, setting up the impending humorous confrontation",
      "That Gopu Mama never goes to office",
      "That Gopu Mama walks barefoot outside",
      "That Gopu Mama has no shoes"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The detail grounds the climax in recognizable domestic realism, creating anticipatory comedic tension."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "In 'The Rebel', when everybody goes to the meeting, what does the Rebel do?",
    options: [
      "The rebel stays at home and reads a book",
      "The rebel gives a long speech",
      "The rebel dances outside",
      "The rebel falls asleep at the meeting"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Textual line: 'When everybody goes to the meeting, / The rebel stays at home and reads a book'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "Transform the direct speech into INDIRECT SPEECH:\nRavi said, \"Karna did not give away other people's things, he gave away what was his own.\"",
    options: [
      "Ravi argued that Karna had not given away other people's things, but had given away what was his own.",
      "Ravi says that Karna gives away other people's things.",
      "Ravi asked why Karna gave away his own things.",
      "Ravi told that Karna did not give his own things."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Past Simple ('did not give... was') shifts to Past Perfect ('had not given... had been/was') in reported argument."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 2: A Gift of Chappals & The Rebel",
    question: "What common ethical thread unites the narrative of 'A Gift of Chappals' with the poetic philosophy of 'The Rebel'?",
    options: [
      "Both celebrate the courage of independent conscience—whether in children defying social norms to alleviate real suffering or in individuals resisting unthinking conformity",
      "Both advocate punishing all children",
      "Both state that music is unnecessary",
      "Both teach that one should never buy new shoes"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Both texts champion autonomous moral agency and empathetic non-conformity against rigid conventional orthodoxies."
  }
];

console.log('Generated Class 7 English Ch2:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/english_ch2.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
