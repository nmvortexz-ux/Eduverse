import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 6: Expert Detectives & Mystery of the Talking Fan (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "In Sharada Dwivedi's story 'Expert Detectives' (from 'The Broken Flute'), what is the nickname and real age of the boy Nishad?",
    options: ["Seven (a 7-year-old boy named because his name refers to the 7th musical note 'Ni')", "Ten (a 10-year-old boy)", "Five (a 5-year-old boy)", "Miko"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Nishad is a 7-year-old boy nicknamed 'Seven' because Nishad is the seventh musical note in the Indian classical octave (Sa-Re-Ga-Ma-Pa-Dha-Ni)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Who is Nishad's 10-year-old elder sister who acts as the self-appointed lead detective?",
    options: ["Maya", "Rani", "Meena", "Shreya"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Maya is Nishad's 10-year-old sister who investigates their mysterious neighbor Mr. Nath."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Who is the quiet, gaunt, scar-faced tenant in Room No. 10 at Shankar House whom Maya suspects of being a dangerous criminal?",
    options: ["Mr. Nath", "Mr. Sharma", "Mr. Mehta", "Ramesh"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mr. Nath is the recluse tenant living in Room 10 of Shankar House, treated by their mother at her clinic."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What profession does Maya and Nishad's mother practice?",
    options: ["A Doctor (practicing at her medical clinic)", "A School Teacher", "A Police Detective", "A Lawyer"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Their mother is a physician/doctor who knows Mr. Nath as a quiet, polite patient at her clinic."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Who delivers two daily meals and two cups of tea to Mr. Nath's room from the restaurant downstairs?",
    options: ["Ramesh", "Suresh", "Gopal", "Mohan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ramesh, a worker from the restaurant downstairs, delivers Mr. Nath's fixed meals (two chapatis, dal, and a vegetable) and tea."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What unusual visitor comes to see Mr. Nath every SUNDAY afternoon at Shankar House?",
    options: [
      "A tall, fair, stout man wearing spectacles who talks a great deal",
      "A police inspector in uniform",
      "A magician with a trunk",
      "A young schoolboy"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ramesh informs Nishad that every Sunday, a tall, fair, stout, bespectacled visitor visits Mr. Nath and chats incessantly."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What sweet treat did Nishad thrust into Mr. Nath's hand during his unexpected visit to Room 10?",
    options: ["A bar of chocolate", "An ice cream cone", "A box of laddus", "An apple"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Moved by Mr. Nath's gaunt, starving appearance, Nishad generously thrust a bar of chocolate into his palm."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What does Maya write at the top of her investigative fact sheet in large block letters?",
    options: [
      "\"CATCHING A CROOK — Expert Detectives: Nishad and Maya Pandit (By Appointment to the Whole World)\"",
      "\"HOW TO BECOME A POLICE OFFICER\"",
      "\"RECIPE FOR CHOCOLATE CAKE\"",
      "\"MY SCHOOL HOMEWORK\""
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Maya wrote the dramatic heading: 'CATCHING A CROOK — Expert Detectives: Nishad and Maya Pandit (By Appointment to the Whole World)'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "In Maude Rubin's poem 'Mystery of the Talking Fan', what was the 'talking' or 'chattering' sound made by the ceiling fan?",
    options: [
      "An electrical squeak and mechanical whirring sound caused by lack of lubricating oil in its motor",
      "Real human words spoken by a ghost",
      "Music from a radio",
      "The sound of wind blowing through an open window"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The fan's 'talk' was the dry, un-oiled rhythmic mechanical squeak of its electric motor."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "How did the 'mystery' of the talking fan suddenly come to an end?",
    options: [
      "Somebody oiled its little whirling electric motor, and thereafter it ran as still and smooth as water",
      "The fan fell down from the ceiling",
      "The electricity was cut off permanently",
      "The fan was thrown into the river"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The poem ends: 'He ran as still as water' once somebody oiled its whirling motor, solving the mystery."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What prefix can be added to the word 'Patient' to mean 'Unable to wait calmly'?",
    options: ["im- (Impatient)", "un-", "dis-", "in-"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The negative prefix 'im-' attaches to roots starting with labial consonants (m/p): im + patient = impatient."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What does the idiom 'To keep an eye on' mean in detective contexts?",
    options: ["To watch, monitor, or observe someone very carefully and vigilantly", "To look at someone with one eye closed", "To wear spectacles", "To paint an eye"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'To keep an eye on' means maintaining close surveillance or careful supervision over someone."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Why do Maya and Nishad have opposing viewpoints about Mr. Nath?",
    options: [
      "Maya believes Mr. Nath is a dangerous fugitive criminal hiding millions in stolen loot ; Nishad empathizes with him as a lonely, impoverished, sick man who needs a friend",
      "Maya thinks he is a doctor and Nishad thinks he is a teacher",
      "Both think he is a king",
      "Neither cares about him"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Maya views Mr. Nath through sensational detective melodrama; Nishad views him through compassionate human empathy."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "How does Maya explain the burn scars on Mr. Nath's face, and what does their mother say about them?",
    options: [
      "Maya theorizes the police shot or burned him during a shootout ; Mama explains that they are severe burn scars from an accidental fire",
      "Maya says he was born with them",
      "Mama says he got them from an animal bite",
      "Maya says he painted them"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Maya melodramatically assumes police shootout wounds; their doctor mother confirms they are medical burn scars."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What reason does Maya offer for why Mr. Nath has no friends and never talks to anyone at Shankar House?",
    options: [
      "She claims he is terrified that someone might recognize him and inform the police about his criminal identity",
      "Because he does not know any language",
      "Because he is deaf",
      "Because he owns the whole building"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Maya rationalizes his reclusive isolation as a criminal strategy to evade identification."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What conclusion does Nishad reach after visiting Mr. Nath, refusing to support Maya's criminal accusations?",
    options: [
      "He declares: \"I like him, and I'm going to try and be his friend! How can a lonely, poor man be a bad crook?\"",
      "He agrees to call the police immediately",
      "He runs away from home",
      "He decides to steal Mr. Nath's food"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Nishad rebels against Maya's prejudice, asserting his determination to offer genuine friendship to the isolated man."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What poetic device is prominent in the opening lines of 'Mystery of the Talking Fan':\n'Once there was a talking fan — / Electrical his chatter'?",
    options: [
      "Personification (giving the mechanical ceiling fan the human ability to 'talk' and 'chatter')",
      "Alliteration only",
      "Hyperbole only",
      "Oxymoron"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Personification animates the mechanical appliance as a sentient creature vocalizing mysterious electrical complaints."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Identify the figure of speech in: 'He ran as still as water.'",
    options: ["Simile (comparing the quiet, smooth motion of the oiled fan to calm water using 'as')", "Metaphor", "Personification", "Irony"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'As still as water' is a classic simile comparing mechanical fluidity to undisturbed liquid."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What is the meaning of the word 'Peculiar' in: 'Mr. Nath is a peculiar person'?",
    options: ["Strange, unusual, odd, or unconventional", "Extremely wealthy", "Very loud and noisy", "Handsome and young"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Peculiar' means strange, atypical, or distinctive from the ordinary."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What is the meaning of the phrasal verb 'To tip off' in: 'Someone might tip off the police'?",
    options: ["To give secret, confidential information or advance warning to authorities", "To give a monetary coin to a waiter", "To knock a cup over", "To fall asleep"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To tip off' means providing confidential intelligence or advance alert."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Choose the correct antonym of the underlined word:\n'Mr. Nath was a **solitary** man living in room ten.'",
    options: ["Sociable / Gregarious / Accompanied", "Lonely", "Isolated", "Reclusive"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The antonym of 'solitary' (living alone) is 'sociable' or 'gregarious'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Fill in the blank with the appropriate Prefix to form the opposite:\n'Maya's wild theory about Mr. Nath seemed totally _______logical.'",
    options: ["il- (Illogical)", "un-", "in-", "dis-"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The prefix 'il-' attaches to roots beginning with 'l': il + logical = illogical."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Convert into INDIRECT SPEECH:\nNishad said, \"I want to find out why he is so thin.\"",
    options: [
      "Nishad said that he wanted to find out why he was so thin.",
      "Nishad said that he wants to find out why he is thin.",
      "Nishad asked why is he so thin.",
      "Nishad told that I wanted to find out."
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Reported speech in past tense: present verbs ('want', 'is') backshift to past ('wanted', 'was')."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Choose the correct spelling:",
    options: ["Accomplice", "Acomplice", "Accomplise", "Accomplese"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Correct orthography: A-C-C-O-M-P-L-I-C-E (a partner in wrongdoing)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What is an 'Accomplice' as Maya uses the word regarding Mr. Nath's Sunday visitor?",
    options: [
      "A partner or associate who helps a criminal commit or conceal a crime",
      "A medical doctor",
      "A close childhood brother",
      "A postman"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "An accomplice is an associate who aids in the commission or concealment of unlawful acts."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Identify the part of speech of the underlined word in: 'The fan turned **smoothly** after oiling.'",
    options: ["Adverb of Manner", "Adjective", "Noun", "Conjunction"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Smoothly' is an adverb of manner modifying the verb 'turned'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What gives Nishad the golden opportunity to enter Mr. Nath's room at Shankar House?",
    options: [
      "His marble rolled into Mr. Nath's room during a game, so he went inside to retrieve it and met Mr. Nath face-to-face",
      "He broke the window with a ball",
      "Mama sent him with medicine",
      "The police asked him to search the room"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Nishad's stray marble rolled under Mr. Nath's door, granting him direct personal entry."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Why did Ramesh describe Mr. Nath as a generous customer despite his simple meals?",
    options: [
      "Mr. Nath paid cash promptly and always gave Ramesh a handsome, generous TIP every single time",
      "Mr. Nath cooked food for Ramesh",
      "Mr. Nath gave Ramesh golden coins",
      "Mr. Nath bought the whole restaurant"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ramesh praised Mr. Nath's quiet nobility: 'He pays cash and tips well'."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Read the statements:\nAssertion (A): Maya and Nishad represent the classic psychological contrast between 'Prejudice driven by imagination' and 'Innocent empathy driven by compassion'.\nReason (R): Maya filters every mundane fact about Mr. Nath through sensationalist crime fiction cliches to confirm her bias, whereas Nishad evaluates Mr. Nath through authentic human observation of suffering and loneliness.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The story explores the cognitive dichotomy between biased confirmation-seeking paranoia (Maya) and open empathetic inquiry (Nishad)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Spot the IMPOSTER among the following 'Facts' cataloged by Maya in her detective notebook:\nGroup:\n1. Fact 1: Mr. Nath's first name is not known to them, but other tenants call him mad and unfriendly.\n2. Fact 2: He does not talk to anyone and has no manners, though Mama says he is polite because he is a patient.\n3. Fact 3: He gets no letters, and has lived in Room 10 for more than a year.\n4. Fact 4: He was caught by Maya flying an attack helicopter over Delhi.",
    options: ["Fact 1", "Fact 2", "Fact 3", "Fact 4 (Fact 4 is an absurd impossibility ; Maya never saw any helicopter)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Fact 4 is an absurd fabrication; Maya's list contained realistic domestic observations about meals, letters, and Sunday visitors."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Analyze the profound narrative subtext in 'Expert Detectives':\nWhat does the story warn young readers about making hasty moral judgments about individuals who lead quiet, unconventional lives?",
    options: [
      "Judging others based on physical scars, reclusive habits, or gossip without verified evidence leads to cruel prejudice, whereas genuine kindness and empathy uncover human truth",
      "Children should always report their neighbors to the police",
      "Detectives should never listen to doctors",
      "People with scars are always dangerous"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Dwivedi deconstructs stigmatization: physical disfigurement and social withdrawal should evoke compassionate understanding rather than suspicious vilification."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Match Column I (Characters in Expert Detectives) with Column II (Dominant Behavioral Traits):\n(a) Maya       -> (i) Imaginative, assertive, obsessed with sensational detective tropes\n(b) Nishad     -> (ii) Intuitive, sensitive, compassionate, prioritizing human connection\n(c) Mr. Nath   -> (iii) Reclusive, convalescing patient bearing physical and emotional scars\n(d) Ramesh     -> (iv) Observant, pragmatic restaurant worker who values prompt payment and tips",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Accurate characterization: Maya (sensationalist); Nishad (empathetic); Mr. Nath (reclusive patient); Ramesh (pragmatic worker)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Read the statements regarding 'Mystery of the Talking Fan':\nStatement 1: The poet Maude Rubin uses playful anthropomorphism to transform a routine household nuisance into a whimsical mechanical mystery.\nStatement 2: The resolution of the poem reveals that the 'complaint' of the fan was simply dry friction solved by basic motor maintenance (oil).\nStatement 3: The fan transformed into an electric bird and flew out of the window.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an absurd invention. Statements 1 and 2 accurately interpret Rubin's poetic themes."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Change the voice of the sentence:\n'Maya drafted an elaborate list of facts to trap the mysterious tenant.'",
    options: [
      "'An elaborate list of facts was drafted by Maya to trap the mysterious tenant.'",
      "'The mysterious tenant drafted an elaborate list of facts by Maya.'",
      "'An elaborate list had been drafting by Maya.'",
      "'Facts were being drafted by the tenant.'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Passive voice: Object ('An elaborate list of facts') + was drafted + by agent ('by Maya') + infinitive phrase."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Identify the grammatical role of the underlined dependent clause in:\n'Nishad wondered **why Mr. Nath lived such a solitary life**.'",
    options: [
      "Noun Clause acting as the direct object of the transitive verb 'wondered'",
      "Adverb Clause of Time",
      "Relative Clause modifying Nishad",
      "Conditional Clause"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Why Mr. Nath lived such a solitary life' functions as a nominal clause serving as the direct object of 'wondered'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Why does Nishad storm out of the room at the end of the chapter with his arms folded stubbornly?",
    options: [
      "Because he refuses to participate in Maya's unkind, unverified witch-hunt against Mr. Nath and intends to follow his conscience to befriend him",
      "Because he lost his chocolate bar",
      "Because Maya tore his notebook",
      "Because it started raining heavily"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Nishad takes an ethical stand against Maya's groundless accusations, choosing personal integrity over sibling complicity."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What is the metaphorical significance of the ceiling fan in Maude Rubin's poem?",
    options: [
      "It represents how everyday mundane objects can spark childlike wonder and imagination, until simple scientific logic demystifies the phenomenon",
      "It symbolizes a spaceship",
      "It represents an evil monster",
      "It shows that electricity is dangerous"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Rubin illustrates the poetic transformation of mundane mechanical friction into an imaginative narrative, effortlessly resolved by rational care."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What does the narrator mean by 'Electrical his chatter' in the poem?",
    options: [
      "The noise of the fan was produced by electrical currents driving the friction in the unlubricated motor",
      "The fan was connected to a telephone",
      "The fan was speaking about batteries",
      "The fan gave people electric shocks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Electrical his chatter' poeticizes the humming acoustic vibration created by the alternating electric current in the dry motor."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "Which of the following lines from 'Mystery of the Talking Fan' contains an acoustic auditory image?",
    options: [
      "\"Electrical his chatter / I couldn't quite hear what he said\"",
      "\"He ran as still as water\"",
      "\"Somebody oiled his little whirling motor\"",
      "\"All the mystery was spoiled\""
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Electrical his chatter' and 'couldn't quite hear' appeal directly to auditory sensory imagery."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 6: Expert Detectives & Mystery of the Talking Fan",
    question: "What overarching moral theme unites Chapter 6 of NCERT Class 7 English?",
    options: [
      "The necessity of looking beyond surface appearances—whether investigating human character with empathy and truth rather than sensational bias, or demystifying mechanical curiosities through rational understanding",
      "That children should never play with marbles",
      "That fans should be removed from houses",
      "That doctors should never treat patients"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 6 celebrates critical thinking, the rejection of hasty prejudice, and the supremacy of empathetic human understanding."
  }
];

console.log('Generated Class 7 English Ch6:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/english_ch6.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
