import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 9: A Bicycle in Good Repair & Garden Snake (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "In Jerome K. Jerome's comedic story 'A Bicycle in Good Repair', what excursion was planned for the following day?",
    options: [
      "A long bicycle ride together out into the countryside",
      "A train journey to London",
      "A boat trip down the river",
      "A mountain climbing hike"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The narrator and an acquaintance arranged to go for a long bicycle ride together early the next morning."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What did the acquaintance do to the bicycle as soon as he saw it, before they had even set off?",
    options: [
      "He shook it violently by the front wheel and handlebars, claiming the front wheel wobbled dangerously",
      "He rode it happily down the road",
      "He washed it with soap",
      "He painted it blue"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The acquaintance aggressively shook the bicycle: 'He took hold of it by the front wheel and the fork, and shook it violently.'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What small, rolling metal items spilled out everywhere across the gravel path when the acquaintance unscrewed the front wheel bearing?",
    options: ["Little steel ball-bearings (little balls)", "Small wooden screws", "Gold coins", "Glass marbles"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Unscrewing the axle housing released a dozen little ball-bearings that rolled all over the gravel."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Where did the narrator and his friend put the rescued ball-bearings for safekeeping?",
    options: ["Inside the narrator's Hat (which later blew away in the wind)", "In a metal box", "In a leather wallet", "In a glass jar"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "They stored the collected ball bearings in the narrator's hat, which was subsequently blown off by the wind."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What part of the bicycle did the acquaintance next take to pieces, despite an experienced friend having advised the narrator NEVER to touch it?",
    options: ["The Gear-case", "The Saddle", "The Bell", "The Brake levers"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "He dismantled the gear-case, cutting it in two pieces, ignoring the advice to buy a new bicycle rather than tamper with it."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What happened to the bicycle chain during the acquaintance's destructive repair attempts?",
    options: [
      "He tightened it until it would not move at all, and then loosened it until it was twice as loose as before",
      "He threw it into the pond",
      "He tied it to a tree",
      "It turned into gold"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Comedic incompetence: he first tightened the chain until it jammed, then loosened it until it hung double."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What physical condition were both the acquaintance and the bicycle in by late afternoon?",
    options: [
      "The acquaintance was covered in black oil, grease, and dirt, bleeding from scratches, and the bicycle was lying in a mangled heap across the path",
      "Both were clean and ready for a race",
      "The bicycle had flown away",
      "They had ridden 50 miles"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The scene ended in utter slapstick wreckage: a grease-stained man struggling against a wrecked bicycle on the lawn."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "In Muriel L. Sonne's poem 'Garden Snake', what does the child do upon first spotting a snake in the garden?",
    options: [
      "The child runs away in fright, believing that 'some snakes are dangerous'",
      "The child tries to catch the snake with a stick",
      "The child steps on the snake",
      "The child takes a picture"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The poem begins: 'I saw a snake and ran away... / Some snakes are dangerous, they say;'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What comforting and reassuring advice does Mother give to the frightened child in 'Garden Snake'?",
    options: [
      "She explains that the garden snake is completely harmless ('that kind is good') and eats only ordinary garden insects for its food",
      "She tells the child to kill the snake",
      "She tells the child to stay inside the house forever",
      "She tells the child to call the police"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mother says: '\"that kind is good, / And eats up insects for his food.\" / So when he wiggles in the grass / I'll stand aside and watch him pass'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "How does the child's perspective on the garden snake change by the end of the poem?",
    options: [
      "The child stands aside calmly to admire the harmless little green snake wriggling through the grass with affection and respect",
      "The child continues to scream in terror",
      "The child buys a pet dog",
      "The child moves to another city"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ending lines: 'I'll stand aside and watch him pass, / And tell myself, \"There's no mistake, / It's just a harmless garden snake!\"'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the meaning of the word 'Wobble' as applied to the bicycle wheel?",
    options: ["To move unsteadily from side to side in an unsteady manner", "To roll very fast", "To stop suddenly", "To shine brightly"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Wobble' means an unsteady, irregular side-to-side oscillation."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the meaning of 'Wiggles' in the description of the garden snake?",
    options: ["Moves with quick, small, wave-like side-to-side undulating motions", "Jumps up in the air", "Stands completely still", "Flies with wings"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Wiggle' describes the undulating serpentine lateral movement of a snake."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Why was the narrator unable to prevent his destructive acquaintance from completely dismantling his perfectly functioning bicycle?",
    options: [
      "The narrator suffered from excessive politeness, timid hesitation, and a mistaken deference that made him afraid of hurting his friend's enthusiastic self-confidence",
      "Because the acquaintance had a gun",
      "Because the bicycle belonged to the acquaintance",
      "Because the narrator was fast asleep"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Narrator's comedic flaw: excessive English social politeness and self-doubt prevents him from stopping blatant mechanical vandalism."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "How did the acquaintance personify the bicycle during their furious physical struggle in the garden?",
    options: [
      "He treated the bicycle like a willful, vicious adversary that fought back, hit him over the head with the handlebars, and leaped onto him in the dirt",
      "He treated it like a loyal horse",
      "He treated it like an electric train",
      "He treated it like a clock"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hyperbolic comic personification: the bicycle becomes a combatant: 'Now he was on top of the bicycle, and now the bicycle was on top of him.'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the central ecological theme of Muriel L. Sonne's poem 'Garden Snake'?",
    options: [
      "Overcoming irrational fear of nature through knowledge: understanding that garden snakes are harmless, beneficial predators that control garden insect pests",
      "Teaching people how to build cages",
      "Warning that all animals in gardens are poisonous",
      "Explaining how to cut lawn grass"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The poem deconstructs the irrational ophidiophobia (fear of snakes), celebrating the ecological value of harmless garden reptiles."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the meaning of the idiom 'To take to pieces' in: 'He took the gear-case to pieces'?",
    options: ["To dismantle or disassemble into separate component parts", "To throw away into a river", "To break with a hammer", "To paint each piece a different color"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To take to pieces' is an idiom meaning completely disassembling a mechanical device."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the meaning of the adjective 'Grotesque' in: 'The bicycle looked a grotesque skeleton'?",
    options: ["Comically or repulsively distorted, bizarre, and unnatural in appearance", "Extremely beautiful and modern", "Painted in bright red", "Small and delicate"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Grotesque' characterizes an incongruously distorted, bizarre, or deformed physical state."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Fill in the blank with the appropriate preposition:\n'The little ball-bearings rolled all _______ the gravel path.'",
    options: ["over", "under", "into", "between"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Rolled all over' indicates scattered dispersion across the entire surface."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the SYNONYM of 'Tenacity' or 'Doggedness' as shown by the friend in attempting to fix the bicycle?",
    options: ["Persistence / Stubborn perseverance", "Cowardice", "Laziness", "Politeness"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Doggedness' or 'tenacity' denotes stubborn, unrelenting determination despite repeated failures."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the ANTONYM of 'Harmless' in: 'A harmless garden snake'?",
    options: ["Venomous / Dangerous / Harmful", "Gentle", "Friendly", "Useful"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The antonym of 'harmless' is 'harmful', 'dangerous', or 'venomous'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Choose the correct spelling:",
    options: ["Ball-bearing", "Ball-bareing", "Bal-bearing", "Ball-beering"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Correct orthography: B-A-L-L - B-E-A-R-I-N-G."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Identify the part of speech of the underlined word in: 'The wheel wobbled **violently** in his hands.'",
    options: ["Adverb of Manner", "Adjective", "Noun", "Conjunction"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Violently' is an adverb of manner modifying the intransitive verb 'wobbled'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Convert the sentence into INDIRECT SPEECH:\nMother said to me, \"That kind is good and eats insects for food.\"",
    options: [
      "Mother told me that that kind was good and ate insects for food.",
      "Mother said that that kind is good.",
      "Mother asked if the snake eats insects.",
      "Mother told me don't touch the snake."
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Indirect speech: reporting verb 'said to' -> 'told me', present tense shifts to past ('was good and ate')."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the rhyming scheme of Muriel L. Sonne's poem 'Garden Snake'?",
    options: ["AABB (Rhyming couplets: away/say, good/food, grass/pass, mistake/snake)", "ABAB", "ABCB", "AABBCC"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The poem employs simple, musical AABB rhyming couplets throughout."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the comedic irony in the title 'A Bicycle in Good Repair'?",
    options: [
      "The bicycle was initially in perfect working condition, but by the time the acquaintance finished 'repairing' it, it was completely ruined and unusable",
      "The bicycle had gold wheels",
      "The bicycle won a race",
      "The bicycle turned into a car"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Situational irony: a flawless bicycle is dismantled into junk under the guise of an expert 'repair'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What did the acquaintance say about the front wheel after putting it back together missing half its ball bearings?",
    options: [
      "\"It'll do for the present,\" though it wobbled like a child's toy top",
      "\"It is as good as new!\"",
      "\"We should buy a new wheel.\"",
      "\"It can fly now!\""
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "He shrugs off the missing bearings: '\"It'll do for the present,\"' despite egregious wobbling."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What happened when the friend tried to put the chain back on the bicycle?",
    options: [
      "He completely lost the screws, struggled for an hour, and made it alternately too tight and too loose",
      "He fixed it in two seconds",
      "He replaced it with a gold chain",
      "He gave up and walked away"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The chain episode is a masterclass in clumsy tinkering, swinging between unyielding tension and dangling slack."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "How did the narrator finally get rid of the exhausting friend at the end of the day?",
    options: [
      "He took him to the railway station, sent him off home on a train, and breathed a sigh of immense relief",
      "He gave him the bicycle as a gift",
      "He called the police",
      "He invited him to stay for a month"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The ordeal concludes with the narrator escorting the exhausted, blackened tinkerer to the railway station."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Read the statements:\nAssertion (A): Jerome K. Jerome's 'A Bicycle in Good Repair' is a classic satire of amateur male pseudo-expertise and the perils of unassertive social politeness.\nReason (R): The comic tension arises from the contrast between the destructive tinkerer's supreme unearned self-confidence and the narrator's paralyzed inability to intervene due to fear of appearing rude.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Jerome satirizes both overconfident mechanical incompetence and the social paralysis of excessive British politeness."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Spot the IMPOSTER in the following sequence of mechanical catastrophes inflicted on the bicycle by the friend:\nGroup:\n1. Shaking the front wheel and unscrewing the ball-bearings into the gravel\n2. Cutting the gear-case in two halves and losing the screws\n3. Over-tightening and then over-slackening the chain\n4. Installing a supersonic jet rocket engine on the handlebars",
    options: ["Event 1", "Event 2", "Event 3", "Event 4 (Supersonic rocket engines do NOT belong to Jerome's Victorian Victorian bicycling comedy)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Event 4 is a science-fiction impossibility; the narrative consists of realistic Victorian mechanical blunders."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Analyze the psychological shift in 'Garden Snake':\nHow does empirical knowledge replace inherited social prejudice?",
    options: [
      "The child moves from unthinking cultural fear ('Some snakes are dangerous, they say') to informed scientific understanding ('that kind is good / eats insects'), replacing blind panic with serene appreciation",
      "The child learns how to capture snakes in jars",
      "The child decides never to enter a garden again",
      "The child buys poison to spray on grass"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The poem illustrates cognitive reframing: replacing superstitious myth with ecological reality transforms fear into respectful coexistence."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Match Column I (Narrative Episodes / Literary Devices) with Column II (Comic & Thematic Functions):\n(a) Ball-Bearings in Hat      -> (i) Slapstick disaster when the hat blows off and rolls away\n(b) Bicycle Wrestling Match    -> (ii) Personification of the bicycle fighting back against its torturer\n(c) Mother's Reassurance      -> (iii) Voice of ecological wisdom dispelling irrational fears\n(d) Over-polite Narrator       -> (iv) Comedic straight-man character enabling escalating chaos",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hat = slapstick loss; Wrestling = personification; Mother = ecological wisdom; Narrator = enabling straight-man."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Read the statements regarding Jerome K. Jerome's comedic style:\nStatement 1: Jerome uses deadpan understatement and escalating slapstick physical comedy.\nStatement 2: The story captures the popular Victorian bicycling craze of the 1890s.\nStatement 3: The bicycle exploded and destroyed the entire town.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false. Statements 1 and 2 characterize Jerome's signature Victorian humor (author of 'Three Men in a Boat')."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Identify the figure of speech in: 'The bicycle seemed to have also developed a malicious temper, leaping up and hitting him violently with its pedal.'",
    options: [
      "Personification (attributing malicious intent and agency to an inanimate machine)",
      "Hyperbole only",
      "Simile",
      "Alliteration only"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Personification endows the mechanical bicycle with deliberate malicious temper and physical aggression."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What is the grammatical construction in: 'Had the narrator spoken firmly at the beginning, the bicycle would not have been ruined.'?",
    options: [
      "Third Conditional (Inverted condition with past perfect 'Had he spoken' and conditional perfect 'would not have been ruined')",
      "First Conditional",
      "Second Conditional",
      "Imperative sentence"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Third conditional with inverted protasis ('Had he spoken' = 'If he had spoken') expressing counterfactual past regret."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Why does Jerome K. Jerome emphasize the advice given by the experienced friend regarding the 'gear-case'?",
    options: [
      "To underscore the timeless golden rule of mechanics: 'If it ain't broke, don't fix it' — and to highlight the folly of tampering with complex mechanisms without expertise",
      "To encourage people to destroy their bicycles",
      "To advertise gear-case manufacturers",
      "Because gear-cases are dangerous weapons"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The gear-case warning reinforces the core comedic theme: unnecessary meddling with functional machines invites catastrophe."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "In 'Garden Snake', what does the phrase 'There's no mistake' emphasize in the final line?",
    options: [
      "The child's newfound absolute confidence in scientific understanding, banishing all lingering doubts and fears",
      "That the child made a mistake in an exam",
      "That the snake was a toy",
      "That the mother was wrong"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'There's no mistake' affirms total intellectual certainty: rational comprehension replaces superstitious dread."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What tone permeates the narrator's observation: 'He was a person of boundless energy and incurable optimism, which made him all the more dangerous.'?",
    options: [
      "Dry, ironic, deadpan British humor highlighting the menace of enthusiastic incompetence",
      "Furious hatred and violent anger",
      "Tearful grief and despair",
      "Boring scientific recitation"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Deadpan irony: cheerful optimism paired with total incompetence is humorously diagnosed as a perilous combination."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "Which of the following proverbs best captures the central moral lesson of 'A Bicycle in Good Repair'?",
    options: [
      "\"A little learning is a dangerous thing\" / \"Leave well enough alone\"",
      "\"All that glitters is not gold\"",
      "\"A rolling stone gathers no moss\"",
      "\"Look before you leap into water\""
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The story epitomizes Pope's adage 'A little learning is a dangerous thing' applied to meddlesome tinkering."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 9: A Bicycle in Good Repair & Garden Snake",
    question: "What overarching humanist message unites Chapter 9 of NCERT Class 7 English?",
    options: [
      "The balance between polite social boundaries, humble self-awareness of one's own limitations, and the courage to replace irrational superstitions with gentle ecological understanding",
      "That bicycles should never be ridden by anyone",
      "That snakes should be kept inside houses",
      "That all repairs should be done with hammers"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 9 weaves together social psychology, self-assertiveness, comedic humility, and rational coexistence with nature."
  }
];

console.log('Generated Class 7 English Ch9:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/english_ch9.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
