import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 11: Comprehensive Review & Applied Grammar (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "In English grammar, a sentence in which the SUBJECT performs the action is in:",
    options: ["Active Voice", "Passive Voice", "Direct Speech", "Indirect Speech"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In Active Voice, the grammatical subject is the active agent/doer of the transitive verb."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "A sentence in which the SUBJECT receives the action performed by an agent (e.g. 'The mouse was chased by the cat') is in:",
    options: ["Passive Voice", "Active Voice", "Interrogative Voice", "Imperative Voice"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In Passive Voice, the recipient of the action occupies the subject position followed by 'be + past participle'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is the exact words of a speaker quoted within inverted quotation marks (\" \") called in grammar?",
    options: ["Direct Speech", "Indirect Speech (Reported Speech)", "Passive Voice", "Active Voice"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Direct Speech quotes the speaker's verbatim words enclosed in quotation marks."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is reporting the substance of what someone said without quoting their exact words (without quotation marks) called?",
    options: ["Indirect Speech (Reported Speech)", "Direct Speech", "Passive Voice", "Dialogue"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Indirect Speech reports spoken propositions with appropriate tense, pronoun, and adverbial shifts."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is a SYNONYM for the word 'Courageous'?",
    options: ["Brave", "Timid", "Cowardly", "Fearful"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Brave' and 'courageous' are synonymous adjectives denoting valor in confronting adversity."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is the ANTONYM (opposite word) of 'Ancient'?",
    options: ["Modern", "Old", "Historic", "Antique"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The antonym of 'ancient' (pertaining to remote antiquity) is 'modern' (contemporary)."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is the meaning of the common English idiom 'A piece of cake'?",
    options: ["Something that is very easy to accomplish", "A sweet bakery pastry", "A difficult examination", "A heavy box"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'A piece of cake' idiomatically signifies an effortlessly simple task."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is the meaning of the idiom 'Once in a blue moon'?",
    options: ["Very rarely / almost never", "Every night", "When the moon is blue", "Always on Mondays"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Once in a blue moon' denotes an event of extreme rarity."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Choose the correct past participle form of the irregular verb 'Write':",
    options: ["Written (Write - Wrote - Written)", "Writed", "Wrote", "Writing"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Principal parts: Write (base), Wrote (past), Written (past participle)."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Choose the correct past participle form of the irregular verb 'Fly':",
    options: ["Flown (Fly - Flew - Flown)", "Flied", "Flew", "Flying"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Principal parts: Fly (base), Flew (past), Flown (past participle)."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is a group of words consisting of a verb and a preposition/adverb that takes on a unique figurative meaning (e.g. 'give up', 'look after', 'break down') called?",
    options: ["Phrasal Verb", "Conjunction", "Noun Clause", "Interjection"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A phrasal verb combines a base verb with a preposition/adverb particle to express an idiomatic semantic unit."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What does the phrasal verb 'To look after' mean?",
    options: ["To take care of someone or something", "To look behind", "To run after a thief", "To search in a dictionary"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'To look after' means to attend to the health, well-being, or maintenance of someone/something."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Convert the Active Voice sentence into Passive Voice:\n'Taro chopped the wood in the forest.'",
    options: [
      "'The wood was chopped by Taro in the forest.'",
      "'The wood is chopped by Taro.'",
      "'The wood had chopped Taro.'",
      "'Taro was chopped by the wood.'"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Simple Past Active (chopped) converts to Past Passive: was/were + past participle (was chopped)."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Convert the Active Voice sentence into Passive Voice:\n'The mongoose killed the black cobra.'",
    options: [
      "'The black cobra was killed by the mongoose.'",
      "'The black cobra is killed by the mongoose.'",
      "'The mongoose was killed by the cobra.'",
      "'The cobra had killed the mongoose.'"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Subject-object inversion with past auxiliary: 'was killed by the mongoose'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Convert the Direct Speech into Indirect Speech:\nPatrick said, \"I hate doing my homework.\"",
    options: [
      "Patrick said that he hated doing his homework.",
      "Patrick says that he hates homework.",
      "Patrick said that I hate doing my homework.",
      "Patrick told that he is hating homework."
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Reported speech shifts Present Simple ('hate') to Past Simple ('hated'), and pronoun 'I' to 'he'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Convert the Direct Speech into Indirect Speech:\nUncle said to Rasheed, \"Do not buy anything in my absence.\"",
    options: [
      "Uncle forbade Rasheed from buying anything in his absence (or advised him not to buy anything).",
      "Uncle said to Rasheed that you do not buy anything.",
      "Uncle asked Rasheed why he bought anything.",
      "Uncle told Rasheed to buy everything."
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Imperative negative direct commands convert to infinitive reporting: 'forbade... from buying' or 'advised... not to buy'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Identify the correct pair of SYNONYMS among the choices:",
    options: ["Affectionate : Loving", "Abundant : Scarce", "Generous : Greedy", "Ancient : Modern"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Affectionate' and 'Loving' are synonyms; the remaining options are antonym pairs."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What does the phrasal verb 'To give up' mean in the sentence: 'Kalpana Chawla never gave up on her dreams of space exploration.'?",
    options: [
      "To stop trying / to abandon hope or surrender",
      "To give gifts to others",
      "To climb up a mountain",
      "To wake up early"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To give up' idiomatically means to cease striving or admit defeat."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is the meaning of the idiom 'To see eye to eye' in the context of Jumman and Algu in 'Fair Play'?",
    options: [
      "To agree fully with each other on an issue",
      "To stare angrily into someone's eyes",
      "To visit an eye doctor",
      "To wear spectacles"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To see eye to eye' means to share mutual consensus and harmonious agreement."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Fill in the blank with the correct Phrasal Verb:\n'The brave firemen managed to _______ the raging forest fire after three hours.'",
    options: ["put out (extinguish)", "put off (postpone)", "put on (wear)", "put up (erect)"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Put out' means to douse or extinguish a flame."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Fill in the blank with the correct Phrasal Verb:\n'The meeting has been _______ until next Monday due to heavy rains.'",
    options: ["put off (postponed / rescheduled)", "put on", "put out", "put away"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Put off' means to defer or postpone to a future date."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Choose the sentence that correctly uses the ONE-WORD SUBSTITUTE for 'A person who travels to a sacred holy shrine':",
    options: [
      "Pilgrim (e.g. 'The pilgrim walked hundreds of miles to visit the ancient shrine.')",
      "Tourist",
      "Immigrant",
      "Nomad"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A 'pilgrim' is an individual undertaking a spiritual pilgrimage to a religious sanctuary."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Choose the correct ONE-WORD SUBSTITUTE for 'A life story of a person written by HIMSELF/HERSELF':",
    options: ["Autobiography", "Biography", "Bibliography", "Anthology"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Autobiography (Auto = self, bio = life, graphy = writing) is an author's self-written life account."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Convert into Indirect Speech:\nThe teacher said to the students, \"The Earth revolves around the Sun.\"",
    options: [
      "The teacher told the students that the Earth revolves around the Sun. (Tense does NOT change for universal scientific truths)",
      "The teacher said that the Earth revolved around the Sun.",
      "The teacher asked if the Earth is revolving.",
      "The teacher said that the Earth will revolve."
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Universal scientific truths and geographical facts retain present tense in reported speech."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What does the idiom 'To burn the midnight oil' mean?",
    options: ["To work or study very hard late into the night", "To light an oil lamp", "To waste kerosene oil", "To set fire to something"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To burn the midnight oil' refers to late-night intellectual labor or intense academic study."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Identify the correct question tag:\n'She sings melodiously, _______?'",
    options: ["doesn't she?", "is she?", "didn't she?", "don't she?"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Positive Present Simple ('sings') takes negative present auxiliary tag: 'doesn't she?'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Identify the sentence that contains a SUBJECT-VERB AGREEMENT error:",
    options: [
      "'Each of the boys have completed their project.' (Incorrect: 'Each' is singular and requires 'has completed')",
      "'The dog barks at strangers.'",
      "'Both girls are intelligent.'",
      "'Neither the teacher nor the students were present.'"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Distributive pronoun 'Each' takes singular verb agreement ('has completed', not 'have')."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What does the phrasal verb 'To break down' mean when applied to a motor vehicle?",
    options: ["To stop functioning / to fail mechanically", "To break into two pieces with a hammer", "To cry loudly", "To speed up"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mechanical breakdown refers to sudden operational failure of engines or equipment."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Read the statements:\nAssertion (A): When transforming Direct Speech with universal scientific truths into Indirect Speech, the verb tense in the reported clause remains unchanged in the Present Tense.\nReason (R): Universal physical laws and scientific constants remain objectively true regardless of the historical time frame of the reporting verb.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Invariance of universal empirical facts overrides grammatical backshifting rules in reported speech."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Spot the IMPOSTER in the following Active-Passive transformations:\nGroup: [Active: 'He wrote a letter' -> Passive: 'A letter was written by him', Active: 'She ate an apple' -> Passive: 'An apple was eaten by her', Active: 'They built a bridge' -> Passive: 'A bridge was built by them', Active: 'He slept peacefully' -> Passive: 'Peacefully was slept by him']",
    options: [
      "Active: 'He wrote a letter' -> Passive: 'A letter was written by him'",
      "Active: 'She ate an apple' -> Passive: 'An apple was eaten by her'",
      "Active: 'They built a bridge' -> Passive: 'A bridge was built by them'",
      "Active: 'He slept peacefully' -> Passive: 'Peacefully was slept by him'"
    ],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Slept' is an INTRANSITIVE verb lacking a direct object; intransitive verbs CANNOT be converted into passive voice."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Analyze the contextual tone in Kalpana Chawla's historic message from Columbia space shuttle to Indian students:\n'The path from dreams to success does exist. May you have the vision to find it, the courage to get onto it, and the perseverance to follow it.'\nWhat three cardinal virtues are celebrated here?",
    options: [
      "Vision (clarity of purpose), Courage (bravery to begin), and Perseverance (tenacious resilience to endure)",
      "Wealth, Fame, and Pride",
      "Speed, Anger, and Power",
      "Luck, Magic, and Fortune"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chawla's rhetoric structures an inspirational triadic schema: Vision, Courage, and Perseverance."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Match Column I (Phrasal Verbs) with Column II (Exact Definitions):\n(a) Call off     -> (i) Extinguish a fire\n(b) Put out      -> (ii) Cancel an event completely\n(c) Look into    -> (iii) Tolerate / endure an unpleasant situation\n(d) Put up with  -> (iv) Investigate or examine closely",
    options: [
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Call off = cancel; Put out = extinguish; Look into = investigate; Put up with = tolerate."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Read the statements regarding English grammar:\nStatement 1: 'Neither of the answers is correct' is grammatically correct because 'Neither' is singular.\nStatement 2: Direct speech questions with 'Wh-' words (who, where, why) do NOT use 'if' or 'whether' in indirect speech.\nStatement 3: Transitive verbs do not require an object.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because transitive verbs inherently mandate direct objects. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Transform the compound sentence into a COMPLEX sentence using an Adverb Clause of Concession:\n'He was very poor, yet he remained scrupulously honest.'",
    options: [
      "'Although he was very poor, he remained scrupulously honest.'",
      "'He was poor and honest.'",
      "'Being poor, he was honest.'",
      "'Because he was poor, he was honest.'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Although/Even though' introduces a subordinate Adverb Clause of Concession."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is the grammatical error in the sentence: 'The flock of sheep were grazing on the hillside.'?",
    options: [
      "The collective noun 'flock' is singular and requires the singular verb 'was grazing'",
      "'Flock' should be spelled 'flook'",
      "'Sheep' should be written as 'sheeps'",
      "'Hillside' is spelled incorrectly"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Collective noun 'flock' takes singular grammatical agreement: 'The flock of sheep was grazing'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Identify the figure of speech in: 'The lightning danced across the dark sky.'",
    options: [
      "Personification (attributing the human voluntary action of 'dancing' to inanimate lightning)",
      "Simile",
      "Hyperbole",
      "Oxymoron"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Endowing natural phenomena with human kinetic agency constitutes Personification."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Convert into Indirect Speech:\nShe said, \"Alas! I have lost my grandmother's golden ring.\"",
    options: [
      "She exclaimed with sorrow that she had lost her grandmother's golden ring.",
      "She said alas that she lost her ring.",
      "She asked why she lost her golden ring.",
      "She shouted that I lost my ring."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Exclamatory grief marker 'Alas!' converts to 'exclaimed with sorrow/grief that + past perfect'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What is the meaning of the Latin phrase 'Vice Versa' used in English?",
    options: ["With the order or relation reversed (the other way around)", "In bad faith", "With great speed", "Without any doubt"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Vice versa' indicates that the reverse of the stated proposition is equally valid."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "Which of the following sentences exhibits correct MODAL AUXILIARY usage to express moral obligation and duty?",
    options: [
      "'We ought to respect our parents and teachers.'",
      "'We might respect our parents.'",
      "'We can to respect our parents.'",
      "'We would to respect our parents.'"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Ought to' expresses ethical and moral duty/obligation."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 11: Comprehensive Literature Review & Applied Grammar",
    question: "What core communicative and linguistic competency does mastery of applied grammar cultivate in young scholars?",
    options: [
      "Precision of thought, analytical reading comprehension, eloquent rhetorical expression, and ethical literary appreciation",
      "Rote memorization of words without meaning",
      "Speaking without grammar rules",
      "Writing books in code"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Applied linguistics bridges structural grammatical precision with nuanced cognitive and empathetic literary expression."
  }
];

console.log('Generated English Ch11:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/english_ch11.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
