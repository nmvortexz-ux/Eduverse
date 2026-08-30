import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 7: Fair Play (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Who were the two inseparable childhood friends whose deep bond of friendship was celebrated across the village in 'Fair Play'?",
    options: ["Jumman Shaikh and Algu Chowdhry", "Samjhu Sahu and Jumman", "Premchand and Algu", "Rahim and Karim"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Jumman Shaikh and Algu Chowdhry shared an iconic village friendship; whenever either went away, the other looked after his household."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Why did Jumman's elderly maternal aunt transfer her property and land to Jumman?",
    options: [
      "On the condition that she would stay with him and he would look after and care for her until her death",
      "Because she wanted to sell the land",
      "Because she had no house",
      "Because the village panchayat ordered her"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The aunt transferred her property in exchange for lifelong care and maintenance from Jumman and his family."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "How did Jumman and his wife Kariman treat the old aunt after the property transfer was officially completed?",
    options: [
      "They became indifferent and harsh, grudging even the small amount of daily food she ate and insulting her",
      "They treated her like a queen",
      "They built her a palace",
      "They gave her all their money"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Once the land was secured, Jumman grew cold and his wife Kariman grudged every bite of food given to the old lady."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What reasonable demand did the mistreated aunt make when she could no longer bear the daily insults?",
    options: [
      "She asked for a small monthly allowance to set up a separate kitchen for herself",
      "She asked for all of Jumman's property",
      "She asked to leave the country",
      "She asked for a car"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The aunt requested a modest monthly allowance so she could cook independently with dignity."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Whom did the aunt nominate as the Head Panch (Sarpanch) in the village panchayat?",
    options: ["Algu Chowdhry (Jumman's best friend)", "Samjhu Sahu", "The Village Headman", "Her nephew"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Trusting in pure justice, the aunt nominated Algu Chowdhry, knowing a true Panch has no friends or enemies."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What famous principle did the aunt state to Algu: 'The voice of the Panch is the voice of...'?",
    options: ["God", "The King", "The Village", "Justice"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The aunt declared: 'God lives in the heart of the Panch, and his voice is the voice of God.'"
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What verdict did Head Panch Algu Chowdhry deliver in the panchayat case regarding the aunt?",
    options: [
      "Jumman must pay his aunt a monthly allowance, or the transferred property will be returned to her immediately",
      "The aunt must leave the village",
      "Jumman is innocent",
      "The property must be sold"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Upholding absolute justice over personal friendship, Algu ruled that Jumman must pay the allowance or surrender the land."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "How did Algu's fair judgment affect his friendship with Jumman?",
    options: [
      "The bond of friendship was broken; Jumman felt betrayed and saw Algu as his bitter enemy, seeking revenge",
      "They became even closer friends",
      "They started a business together",
      "They moved to the city"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Jumman harbored deep resentment against Algu, awaiting an opportunity to take revenge."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "To whom did Algu sell his fine surviving bullock on the promise of payment within a month?",
    options: ["Samjhu Sahu (a village cart driver)", "Jumman Shaikh", "The village priest", "A merchant in town"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Algu sold his bullock to Samjhu Sahu, who used it to transport goods between the village and town."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Why did the bullock die within a month of being purchased by Samjhu Sahu?",
    options: [
      "Sahu overworked the poor animal with multiple daily trips, gave it little water and only dry straw/fodder to eat",
      "It fell into a deep river",
      "It was bitten by a snake",
      "It was poisoned"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Cruel overworking and severe malnutrition caused the exhausted beast to collapse and die on the road."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Whom did Samjhu Sahu nominate as Head Panch when Algu took the unpaid bullock case to the panchayat?",
    options: ["Jumman Shaikh (Algu's estranged enemy)", "The village headman", "The old aunt", "A merchant"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Sahu cunningly chose Jumman, expecting him to deliver a revenge verdict against Algu."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "In the supplementary chapter 'The Wonder Called Sleep', what happens to our body temperature and blood pressure during deep sleep?",
    options: [
      "Body temperature falls and blood pressure drops as muscles relax completely",
      "Body temperature rises to boiling point",
      "Blood pressure doubles",
      "The heart stops beating"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "During deep somatic sleep, metabolic basal rate drops, reducing muscular tone, body temperature, and arterial pressure."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What profound realization came over Jumman Shaikh the moment he sat on the seat of the Head Panch?",
    options: [
      "He felt the supreme gravity and sanctity of justice; as a Panch, he represented divine truth above all personal enmity or friendship",
      "He decided to take sweet revenge on Algu",
      "He wanted to punish everyone",
      "He wanted to run away"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The solemn office of Sarpanch awakened Jumman's conscience, transcending personal grudge to embrace immaculate justice."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What verdict did Head Panch Jumman deliver in the dispute between Algu and Samjhu Sahu?",
    options: [
      "Samjhu Sahu must pay Algu the full price of the bullock, because the bullock suffered from no disability when sold and died solely due to Sahu's ill-treatment and neglect",
      "Algu must pay a fine to Sahu",
      "Both must go to jail",
      "The money should be given to the panchayat"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Jumman ruled impartially: since the bullock was healthy at purchase, Sahu was legally and morally obligated to pay the full price."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What did Algu and Jumman do after the verdict was pronounced?",
    options: [
      "Algu wept with joy shouting 'Victory to the Panchayat!', and both friends embraced each other, washing away all misunderstandings with tears",
      "They had a fist fight",
      "They left the village forever",
      "They refused to speak"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The righteous judgment reconciled the two friends, restoring their mutual respect and sacred bond."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What is the core moral and philosophical message of Premchand's 'Fair Play'?",
    options: [
      "Justice transcends all personal relationships, friendships, and enmities; when seated in judgment, one is the voice of God and must remain strictly impartial",
      "Friends should never lend money",
      "Bullocks should not be sold",
      "Panchayats should be avoided"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The story immortalizes the principle that judicial duty demands immaculate neutrality and allegiance to truth alone."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "In 'The Wonder Called Sleep', why is sleep called an 'unconscious state of rest' and a miraculous wonder?",
    options: [
      "It recharges and heals our fatigued body and mind, restoring full vigor, mental clarity, and somatic energy for the next day's activities",
      "It makes humans fly in reality",
      "It stops aging permanently",
      "It erases all human memories"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sleep is biological restorative maintenance, facilitating neurocellular recovery and memory consolidation."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What is a 'Dream' according to the scientific explanation in 'The Wonder Called Sleep'?",
    options: [
      "An active state of mind during sleep where the brain processes subconscious thoughts, emotions, and daily memories, sometimes revealing solutions to problems",
      "A message from aliens",
      "A magical vision of the past",
      "A disease of the brain"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dreams are neuro-cognitive simulations during REM sleep aiding psychological equilibrium and creative problem solving."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Why can dreams NEVER predict the future?",
    options: [
      "Dreams are merely internal neural processing of our own past experiences, subconscious desires, and fears, having no magical psychic power to foretell future events",
      "Because dreams only last 1 second",
      "Because future is written in stone",
      "Because sleep blocks the future"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "NCERT clarifies that while dreams process subjective memory traces, they possess no supernatural predictive validity."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What poetic phrase did Edward Thomas use to describe sleep in his famous poem 'Lights Out'?",
    options: [
      "The unfathomable deep forest where all human paths must lose their way",
      "A shining golden castle",
      "A stormy ocean",
      "A dark prison cell"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Thomas portrays sleep as an enigmatic boundless forest into which all travelers, ambition, and passions inevitably descend."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What does the idiom 'to swallow insults' mean in the context of the aunt enduring mistreatment?",
    options: [
      "To tolerate humiliation, abuse, or offensive remarks quietly without protesting or retaliating",
      "To eat poisonous food",
      "To speak very loudly",
      "To laugh at someone"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To swallow insults' denotes stoically absorbing verbal humiliation without outward resistance."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Why did Algu's heart sink when Samjhu Sahu nominated Jumman as the Head Panch?",
    options: [
      "Algu feared that Jumman would use this judicial opportunity to exact vengeance and rule against him maliciously",
      "Algu didn't like Jumman's clothes",
      "Algu wanted to go home early",
      "Algu had forgotten the facts of the case"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Knowing their severed friendship, Algu dreaded that personal enmity would bias Jumman's judgment."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What is the meaning of the word 'Panchayat' in rural Indian governance?",
    options: [
      "A traditional council of village elders gathered to resolve disputes and administer local justice and welfare",
      "A big market fair",
      "A wrestling match",
      "A religious festival"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Panchayat is a traditional democratic council of five elders deliberating community disputes."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What physiological change occurs in the brain when a sleeping person transitions into the Rapid Eye Movement (REM) dream stage?",
    options: [
      "Brain activity increases, eyes move rapidly behind closed eyelids, while large skeletal muscles remain temporarily paralyzed (atonic)",
      "The brain stops working completely",
      "The body starts walking automatically",
      "The person speaks fluent Greek"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "REM sleep exhibits paradoxical cortical activation and rapid ocular oscillations alongside somatic motor inhibition."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What does the expression 'a tight spot' mean when Algu found himself in trouble after the death of his bullock?",
    options: ["A difficult, perplexing, or precarious situation", "A narrow physical hallway", "A small shoe", "A warm blanket"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'In a tight spot' is an idiomatic metaphor signifying financial or personal dilemma."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Who is the legendary author of the original Hindi classic story 'Panch Parmeshwar', translated into English as 'Fair Play'?",
    options: ["Munshi Premchand (Dhanpat Rai Shrivastava)", "Rabindranath Tagore", "R.K. Narayan", "Mulk Raj Anand"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Munshi Premchand penned the iconic masterpiece 'पंच परमेश्वर' (Panch Parmeshwar) portraying rural judicial ethics."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Why did the villagers cheer 'Victory to the Panchayat! This is justice!' at the end of both trials?",
    options: [
      "Because in both cases, the Panch proved that truth and justice prevail above personal biases, friendships, and vendettas",
      "Because the trial was very short",
      "Because they received free sweets",
      "Because it started raining"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The community celebrated the incorruptibility and divine moral authority of the village judicial institution."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "In 'The Wonder Called Sleep', why is sleep compared to an enchanting 'haven' or 'sweet land'?",
    options: [
      "Because it provides a tranquil sanctuary where all sorrows, fatigue, worries, and pain are forgotten in peaceful rest",
      "Because you can buy candy there",
      "Because nobody can wake you up",
      "Because it has golden rivers"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sleep serves as a biological and emotional oasis restoring physical equilibrium away from conscious distress."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Read the statements:\nAssertion (A): Both Algu Chowdhry and Jumman Shaikh delivered verdicts that directly went against their personal self-interest and immediate emotional desires.\nReason (R): The solemn seat of the Head Panch instills an inescapable sense of divine justice and ethical responsibility that supersedes personal friendship or enmity.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The core thesis of 'Panch Parmeshwar' is that judicial responsibility commands immaculate adherence to truth over personal bias."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Spot the IMPOSTER in the following group of character descriptions from 'Fair Play':\nGroup: [Jumman Shaikh - Nephew of the old aunt, Algu Chowdhry - Head Panch in the aunt's case, Samjhu Sahu - Village cart driver who bought the bullock, Kariman - The kind daughter who gave money to the aunt]",
    options: [
      "Jumman Shaikh - Nephew of the old aunt",
      "Algu Chowdhry - Head Panch in the aunt's case",
      "Samjhu Sahu - Village cart driver who bought the bullock",
      "Kariman - The kind daughter who gave money to the aunt"
    ],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Kariman was JUMMAN'S WIFE who treated the elderly aunt with harshness and grudged her daily bread, NOT a kind daughter."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Analyze the dramatic irony in Samjhu Sahu's decision to nominate Jumman Shaikh as the Head Panch in his dispute with Algu:",
    options: [
      "Sahu expected Jumman's enmity with Algu to guarantee a biased ruling in his favor, but the sacred seat transformed Jumman into an impartial judge who ruled against Sahu",
      "Sahu wanted Jumman to lose money",
      "Sahu knew Jumman was Algu's brother",
      "Sahu wanted to pay double money"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Dramatic irony arises when Sahu's calculated attempt to exploit a personal feud collapses before the sanctity of judicial truth."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Match Column I (Characters / Concepts) with Column II (Key Roles / Quotes):\n(a) The Old Aunt     -> (i) 'God lives in the heart of the Panch'\n(b) Jumman Shaikh    -> (ii) 'Algu, since you gave verdict against me, I became your enemy'\n(c) Samjhu Sahu      -> (iii) Cruelly overworked the bullock to death\n(d) Edward Thomas    -> (iv) Poet of 'Lights Out' describing the deep forest of sleep",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Aunt = 'God lives in the Panch'; Jumman = 'I became your enemy'; Sahu = overworked bullock; Edward Thomas = 'Lights Out'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Read the statements regarding 'The Wonder Called Sleep':\nStatement 1: Sleep is an active state of physical exercise.\nStatement 2: A dream can sometimes reveal a novel solution to an intellectual problem that puzzled us during waking hours.\nStatement 3: Several biological hormones (including growth hormone) are secreted in elevated quantities during deep sleep.\nWhich statements are TRUE?",
    options: ["Statements 2 and 3 only", "Statements 1 and 2 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 1 is false because sleep is an unconscious state of physiological REST. Statements 2 and 3 are scientifically valid."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What is the grammatical voice and structure of the sentence: 'A monthly allowance must be paid to the aunt by Jumman.'?",
    options: [
      "Passive Voice (with modal auxiliary 'must be' + past participle 'paid')",
      "Active Voice",
      "Indirect Speech",
      "Imperative Sentence"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The modal passive construction 'must be + V3' places the patient (monthly allowance) in subject position."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Identify the figure of speech in Edward Thomas's lines from 'Lights Out':\n'The tall forest; even into the dark / That all must enter and forget.'",
    options: [
      "Extended Metaphor (comparing sleep to an all-encompassing dark impenetrable forest)",
      "Simile",
      "Onomatopoeia",
      "Hyperbole"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The poet sustains an extended metaphor equating the oblivion of sleep with entering a deep, mysterious forest."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "Why does the narrator state: 'The Panch has neither friend nor enemy'?",
    options: [
      "Because judicial office demands complete transcendence of personal ego, prejudice, and private affection to serve absolute cosmic justice",
      "Because Panchs are not allowed to talk to villagers",
      "Because Panchs live outside the village",
      "Because Panchs have no family"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Judicial impartiality requires that judges strip away personal ties when sitting on the seat of truth."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What is the meaning of the archaic/formal phrasal verb 'to make up one's mind' as used by the aunt before approaching the village elders?",
    options: ["To reach a firm and decisive decision", "To forget everything", "To change thoughts randomly", "To clean one's face"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'To make up one's mind' is an English idiom meaning to resolve or decide firmly upon a course of action."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "How does Premchand use the bullock's tragic death to critique commercial greed and animal cruelty in rural society?",
    options: [
      "Through Sahu's ruthless exploitation of the defenseless animal for quick profit without food or rest, illustrating how avarice degrades humanity",
      "By showing that bullocks should not pull carts",
      "By arguing that all carts should be banned",
      "By showing that traders are always poor"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Premchand exposes unbridled commercial exploitation that sacrifices sentient lives for mercenary profit."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "In 'The Wonder Called Sleep', what happens to our conscious sensory awareness when external stimuli (such as an alarm clock ringing or sunlight hitting eyelids) occur?",
    options: [
      "Our brain integrates the sensory stimulus into our ongoing dream narrative until neural arousal crosses the waking threshold",
      "The brain explodes",
      "The person forgets who they are",
      "Sleep becomes permanent"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Subconscious sensory incorporation (e.g. dreaming of a church bell when the alarm rings) occurs before full cortical awakening."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 7: Fair Play",
    question: "What timeless ethical synthesis emerges when comparing the judicial triumphs of 'Fair Play' with modern democratic jurisprudence?",
    options: [
      "The Rule of Law and ethical integrity must always stand sovereign above individual power, friendship, caste, or wealth",
      "Friends should always protect each other even when guilty",
      "Judges should take bribes",
      "Panchayats should only favor rich traders"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Both traditional panchayats and modern constitutional courts derive legitimacy from unwavering impartiality and adherence to natural justice."
  }
];

console.log('Generated English Ch7:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/english_ch7.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
