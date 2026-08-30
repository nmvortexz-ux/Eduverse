import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 3: Gopal and the Hilsa-fish & The Shed (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "In the comic story 'Gopal and the Hilsa-fish', what seasonal topic was EVERYONE in the kingdom—from fishermen to courtiers and the King—obsessively talking about?",
    options: ["Hilsa-fish", "A cricket tournament", "A royal wedding", "A foreign war"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "It was the season for Hilsa-fish, and people could talk of nothing else."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What challenge did the King throw to his witty, clever courtier Gopal?",
    options: [
      "To buy a huge Hilsa-fish and bring it all the way to the royal palace without a single person asking him even ONE question about the fish on the way",
      "To catch 1,000 fish in one hour",
      "To cook the most delicious fish curry",
      "To swim across the ocean"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The King challenged Gopal to bring a giant Hilsa to the palace without anyone mentioning the fish."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "How did Gopal bizarrely disguise himself before going to the marketplace to buy the Hilsa-fish?",
    options: [
      "He half-shaved his face, smeared dark ash all over his body, and wore filthy, torn rags",
      "He dressed up as a wealthy foreign prince",
      "He wore golden royal armor",
      "He disguised himself as an old woman"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gopal half-shaved, smeared ash over his face, and donned tattered rags to look like a madman."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What did Gopal's wife think when she saw him half-shaven and smearing ash on himself?",
    options: [
      "She was shocked and thought he had gone completely MAD",
      "She thought he was going to a wedding",
      "She asked him for money",
      "She did not notice anything"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gopal's wife was bewildered and exclaimed that he had lost his sanity."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What did people on the streets and in the market say when Gopal walked past holding the giant Hilsa-fish?",
    options: [
      "\"Look at that man! Isn't he comical? He must be a madman or a mystic!\" (No one noticed the fish at all!)",
      "\"Look at that huge Hilsa-fish!\"",
      "\"How much did the fish cost?\"",
      "\"Where did you catch that fish?\""
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "People were so transfixed by Gopal's bizarre comical appearance that no one paid attention to the fish."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What happened when Gopal reached the palace gates?",
    options: [
      "The guards stopped him from entering; Gopal began to dance and sing loudly until the King ordered the noisy madman brought before him",
      "The guards welcomed him with flowers",
      "The guards stole his fish",
      "Gopal climbed over the palace wall"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Barred by guards, Gopal sang and danced wildly until the curious King ordered him inside."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "How did the King react when he realized Gopal had successfully accomplished the impossible challenge?",
    options: [
      "He burst into hearty laughter and congratulated Gopal for achieving the impossible once again",
      "He was very angry and sent Gopal to prison",
      "He refused to give Gopal any reward",
      "He ordered the fish thrown away"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The King laughed heartily and lauded Gopal's extraordinary wit in fulfilling the challenge."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "In Frank Flynn's evocative poem 'The Shed', where is the mysterious old shed located?",
    options: ["At the bottom of the garden", "On top of a hill", "Inside the forest", "Behind the school"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The poem begins: 'There's a shed at the bottom of our garden...'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "In 'The Shed', what is hanging across the shed door, and what sound do the rusty hinges make in the wind?",
    options: [
      "A Spider's web hangs across the door ; the rusty hinges Creak in the wind",
      "A golden lock ; they ring like bells",
      "A green curtain ; they make no sound",
      "A heavy iron chain ; they whistle"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Flynn describes the spider's web across the door and the creaking of rusty hinges when the poet lies in bed."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What scary warning does the speaker's brother give him about the old shed?",
    options: [
      "There is a Ghost hiding under the rotten floorboards who will jump out and chop off his head if he dares to step inside",
      "There are poisonous snakes inside",
      "There is a wild bear inside",
      "The roof will fall on him"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The brother frightens him with tales of a head-chopping ghost hiding beneath rotten floorboards."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What is a 'Reported Question' in English grammar?",
    options: [
      "Converting a direct interrogative question into an indirect declarative reported statement using 'if/whether' or 'Wh-' words without question marks",
      "Shouting a question loudly",
      "Writing a question in bold",
      "Asking a question on television"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Reported questions transform direct inquiries into indirect assertive clauses without inversion or question marks."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What is the past tense of the irregular verb 'Smear' as used in 'Gopal smeared ash on himself'?",
    options: ["Smeared", "Smearing", "Smear", "Smearned"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The past tense of the regular verb 'smear' is 'smeared'."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What clever psychological principle did Gopal exploit to win the King's challenge?",
    options: [
      "The power of visual distraction: by creating an outrageous, shocking visual spectacle of himself, he diverted human curiosity completely away from the fish",
      "He hid the fish inside a wooden box",
      "He cast a sleeping spell on everyone",
      "He walked through secret underground tunnels"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gopal manipulated human cognitive salience: overpowering the seasonal obsession with a dramatic personal spectacle."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "In 'The Shed', why does the speaker realize that his brother is lying about the ghost?",
    options: [
      "His brother tells lies to keep the shed as his own private secret den, and the speaker sees no real ghost or spider webs anymore",
      "Because ghosts only live in castles",
      "Because the shed was built yesterday",
      "Because his mother told him there are no ghosts"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The speaker rationally deduces his brother's territorial motive: inventing ghost tales to monopolize the shed."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What is the subtle psychological nuance in the poet's final declaration at the end of 'The Shed':\n\"I'll go into that shed one day soon, / But not just yet...\"?",
    options: [
      "A realistic portrayal of growing childhood courage mixed with lingering, natural hesitation and caution before conquering the unknown",
      "The poet decided never to enter the shed",
      "The poet was terrified and ran away forever",
      "The poet lost the key to the shed"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Flynn captures the threshold of adolescent maturity: rational courage affirmed, accompanied by honest residual hesitation."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Convert the Direct Speech question into INDIRECT SPEECH:\nThe King asked Gopal, \"Why are you dressed up in this ridiculous fashion?\"",
    options: [
      "The King asked Gopal why he was dressed up in that ridiculous fashion.",
      "The King asked Gopal that why are you dressed up.",
      "The King asked Gopal why was he dressed up in this fashion.",
      "The King ordered Gopal why he is dressing."
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Direct 'why are you... this' shifts to indirect assertive syntax: 'why he was... that'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Convert the Direct Speech into INDIRECT SPEECH:\nThe woman asked her husband, \"What is the matter with you?\"",
    options: [
      "The woman asked her husband what the matter was with him.",
      "The woman asked her husband what was the matter with you.",
      "The woman told her husband that what is the matter.",
      "The woman asked her husband if what was the matter."
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Indirect question word order: Wh-word + subject (the matter) + verb (was) + with him."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What is the meaning of the word 'Comical' in: 'Look at that man! Isn't he comical?'?",
    options: ["Funny, amusing, and causing laughter due to absurd appearance", "Very dangerous and angry", "Extremely sad", "Very handsome"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Comical' denotes evoking laughter through absurd, eccentric, or amusing incongruity."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What is the meaning of the word 'Mystic' in: 'Hush, I think he is a mystic!'?",
    options: [
      "A spiritual person who seeks direct communion with divine/unseen truths, often behaving outside ordinary social norms",
      "A thief stealing fish",
      "A doctor in the palace",
      "A foreign merchant"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Mystic' describes an ascetic seeker of spiritual mysteries whose eccentric exterior defies mundane social conventions."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "In 'The Shed', how does the poet describe the dusty old window on the side?",
    options: [
      "A dusty old window with three cracked panes of glass where he feels someone staring at him whenever he passes",
      "A clean glass window with pink curtains",
      "A window with gold bars",
      "A window that is painted completely blue"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Flynn describes the three cracked windowpanes evoking juvenile sensory apprehensions of watchful unseen presences."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What is the comic format in which 'Gopal and the Hilsa-fish' is presented in the NCERT Honeysuckle textbook?",
    options: [
      "A Graphic Comic Story / Sequential Art with speech bubbles and expressive visual dialogue panels",
      "A formal legal essay",
      "A long poem with no pictures",
      "A play script with stage directions only"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The story is rendered in sequential graphic comic panels with speech balloons and humorous visual illustrations."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Choose the correct antonym of the word 'Accept' as used in 'Gopal accepted the challenge':",
    options: ["Refuse / Reject / Decline", "Receive", "Welcome", "Acquire"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The antonym of 'accept' (embracing a challenge) is 'refuse' or 'reject'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Fill in the blank with the correct Preposition:\n'Gopal smeared ash _______ his face and body.'",
    options: ["over / on", "into", "under", "between"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Smeared ash on/over his face' correctly designates surface application."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Identify the figure of speech in: 'The rusty hinges of the old shed door groaned in the midnight wind.'",
    options: [
      "Personification (attributing the human auditory act of 'groaning' to inanimate rusty hinges)",
      "Metaphor",
      "Simile",
      "Hyperbole"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Personification endows the creaking mechanical hinges with the somatic human expression of groaning."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Choose the sentence that correctly transforms: 'Bring the man to me at once!' (Active Voice) into PASSIVE VOICE:",
    options: [
      "'Let the man be brought to me at once!'",
      "'The man brought me at once.'",
      "'You must bring the man.'",
      "'The man is bringing me.'"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Imperative passive structure: 'Let + object + be + past participle' → 'Let the man be brought to me at once!'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What is the meaning of the phrasal verb 'To bring about' in: 'Gopal brought about a complete change in the King's mood.'?",
    options: ["To cause something to happen", "To carry something around", "To buy something cheap", "To take someone on a tour"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To bring about' means to cause or effectuate a transformation."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Choose the correct spelling among the options:",
    options: ["Ridiculous", "Rediculous", "Ridiculus", "Redeculous"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Correct orthography: R-I-D-I-C-U-L-O-U-S."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What is the tone of the poem 'The Shed'?",
    options: [
      "Mysterious, eerie, and atmospheric, transitioning into rational courage and reflective curiosity",
      "Furious and violent",
      "Silly and mocking",
      "Boring and scientific"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The poem establishes an eerie, gothic childhood atmosphere evolving toward rational resolution."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Read the statements:\nAssertion (A): 'Gopal and the Hilsa-fish' is a brilliant satire on collective herd mentality and the fickle nature of public attention.\nReason (R): While the entire kingdom was obsessively consumed by trivial seasonal fish gossip, Gopal demonstrated that an eccentric visual disruption can instantly shatter societal fixation and redirect public curiosity.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The folklore satire demonstrates how superficial social obsessions are instantly supplanted by novel sensational spectacles."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Spot the IMPOSTER in the following group of literary themes and elements from Chapter 3:\nGroup:\n1. Gopal and the Hilsa-fish - Folk wit, courtly humor, and subverting social obsession\n2. The Shed - Conquering imaginary childhood fears and confronting the unknown\n3. The Ghost in the Shed - A real demonic monster who devoured the speaker's brother\n4. The King's Challenge - Demonstrating that impossible tasks yield to ingenuity",
    options: ["Element 1", "Element 2", "Element 3 (The ghost was merely an imaginary invention by the brother to keep the shed private)", "Element 4"],
    correctAnswer: 2,
    difficulty: "HARD",
    damage: 350,
    explanation: "Element 3 is an imposter: the poem explicitly clarifies that the ghost was a fabrication invented by the brother."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Analyze the structural contrast between Gopal's external physical appearance and his internal intellect:\nWhat is the underlying irony?",
    options: [
      "Outwardly he appeared as a deranged, half-shaven, ash-smeared madman in rags, but inwardly he was operating with supreme tactical intellect and calculated rationality",
      "He was genuinely mad and forgot what he was doing",
      "He wanted to become a real beggar",
      "He was trying to hide from the police"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Sharp dramatic irony: donning outward lunacy as a calculated intellectual stratagem to achieve royal triumph."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Match Column I (Characters / Poetic Imagery) with Column II (Symbolic Meanings):\n(a) The Hilsa-fish       -> (i) The all-consuming, trivial seasonal obsession of society\n(b) The Ash and Rags     -> (ii) Deliberate sensory distraction to bypass collective prejudice\n(c) The Rotten Floorboard-> (iii) The dark, unseen realm of childhood fear and superstition\n(d) 'Not just yet...'   -> (iv) The realistic boundary of growing courage before action",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hilsa = obsession; Ash/rags = calculated distraction; Floorboard = childhood fear; Not yet = threshold of maturity."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Read the statements regarding English grammar transformation:\nStatement 1: When converting a Direct 'Wh-' question into Indirect speech, the reporting conjunction 'that' is NEVER used.\nStatement 2: Direct question 'Where do you live?' becomes 'He asked me where I lived.' in Indirect Speech.\nStatement 3: In Indirect questions, the question mark is always retained at the end of the sentence.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because indirect reported questions become declarative statements ending in a full stop (.), not a question mark. Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Identify the grammatical role of the underlined clause in: 'I know **that there isn't really a ghost**.'",
    options: [
      "Noun Clause acting as the direct object of the transitive verb 'know'",
      "Adverb Clause of Reason",
      "Adjective Clause qualifying 'I'",
      "Prepositional Phrase"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'That there isn't really a ghost' functions as a Noun Clause object answering 'what is known'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Which of the following sentences exhibits correct SUBJUNCTIVE MOOD expressing an imaginary hypothetical situation?",
    options: [
      "'If I were to peer through that window, I would find only dusty old cobwebs.'",
      "'If I was to peer through that window, I will find.'",
      "'If I am peering through that window, I would found.'",
      "'If I peer through that window, I had found.'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hypothetical conditional subjunctive: 'If I were to peer... I would find'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What is the psychological function of 'The Shed' as an architectural motif in children's literature?",
    options: [
      "It serves as a liminal space representing the mysterious unknown, the repository of childhood superstitions, and the eventual triumph of empirical rationality over irrational fear",
      "It represents a prison for bad students",
      "It shows the importance of building garden toolboxes",
      "It is a storehouse for selling old fish"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The garden shed functions as a liminal psychological space where adolescent rationality conquers gothic fears."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "Transform the sentence from Active Voice into PASSIVE VOICE:\n'No one mentioned a word about the Hilsa-fish.'",
    options: [
      "'Not a word was mentioned about the Hilsa-fish by anyone.'",
      "'A word mentioned not the Hilsa-fish.'",
      "'The Hilsa-fish was not mentioning a word.'",
      "'No one was mentioning the Hilsa-fish.'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Negative passive transformation: 'Not a word was mentioned about the Hilsa-fish by anyone.'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "In 'The Shed', why does the speaker note that: 'The spider has been gone from his web since I don't know when'?",
    options: [
      "It is the speaker's empirical observation proving that the shed is abandoned and dormant, exposing his brother's ghost tales as groundless fabrications",
      "Because the spider flew to another country",
      "Because the ghost ate the spider",
      "Because the speaker sprayed pesticide"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Observing the absent spider provides empirical validation dispelling mythic ghostly terror."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What comedic technique is used when Gopal's wife shouts from the door: 'Why are you smearing yourself with ash? What is the matter with you?' while Gopal calmly repeats: 'I'm telling you, I'm dressing up to buy a Hilsa-fish!'?",
    options: [
      "Comic Incongruity and deadpan repetition (mismatch between bizarre visual madness and completely calm, matter-of-fact dialogue)",
      "Tragic sorrow",
      "Violent anger",
      "Scientific debate"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Deadpan comic incongruity: pairing extreme physical absurdity with serene, literal mundane justification."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 3: Gopal and the Hilsa-fish & The Shed",
    question: "What master life philosophy links both the prose and poetic selections in Chapter 3 of NCERT Class 7 English?",
    options: [
      "True intellect and courage conquer all challenges—whether using sharp lateral wit to outmaneuver societal obsessions or applying rational courage to overcome fear of the dark and unknown",
      "That fish is the only food worth eating",
      "That garden sheds should always be locked",
      "That courtiers should never obey kings"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 3 integrates intellectual ingenuity (Gopal) with psychological courage confronting the unknown (The Shed)."
  }
];

console.log('Generated Class 7 English Ch3:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/english_ch3.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
