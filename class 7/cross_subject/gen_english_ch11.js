import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 11: An Alien Hand (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Who is the author of the celebrated science-fiction story 'An Alien Hand'?",
    options: ["Jayant Narlikar", "Ruskin Bond", "Satyajit Ray", "R.K. Narayan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Eminent Indian astrophysicist and science-fiction writer Dr. Jayant Narlikar authored 'An Alien Hand'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Where do Tilloo and his family live in the story 'An Alien Hand'?",
    options: [
      "In a technologically advanced underground colony beneath the surface of the planet Mars",
      "On planet Earth in a cave",
      "On the Moon inside a glass dome",
      "On a space station orbiting Jupiter"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tilloo and his parents reside in an underground subterranean habitat on Mars equipped with artificial life-support systems."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Why were the inhabitants of Mars forced to abandon the surface and live underground?",
    options: [
      "The Sun grew hostile and cooled down, upsetting the delicate planetary climate and extinguishing surface life, water, and breathable atmosphere",
      "A foreign army attacked them",
      "A flood drowned the planet",
      "They loved living in tunnels"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Solar atmospheric cooling degraded the Martian surface environment, compelling the survivors to build subterranean biospheres."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "How did Tilloo's father travel to work each day through the forbidden underground passage?",
    options: [
      "By swiping a specialized electronic security access card into the automatic door slot",
      "By speaking a magic password",
      "By using a heavy iron key",
      "By climbing a rope ladder"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tilloo's father used an electronic security card (keycard) to unlock the sealed metal security doors leading to the surface passage."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What happened when curious Tilloo secretly took his father's security card and entered the forbidden surface passage?",
    options: [
      "Hidden surveillance sensors and mechanical security devices detected him, photographed him, and security guards escorted him back home",
      "He reached Earth in a rocket",
      "He was lost forever in the dark",
      "He found buried treasure"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Automated biometric sensors detected Tilloo's unauthorized entry, alerting security guards who safely returned him to his mother."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What special equipment is necessary for Martian scientists to survive while working on the hostile surface of Mars?",
    options: [
      "A pressurized protective spacesuit with boots and an oxygen reservoir pack to withstand freezing cold and thin air",
      "A warm woolen coat only",
      "An umbrella and sunglasses",
      "Ordinary leather clothes"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mars surface survival mandates an airtight spacesuit for thermal protection, pressure balance, and supplemental oxygen supply."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What unexpected celestial event created widespread commotion in the Martian Central Control Room?",
    options: [
      "Two alien unmanned spacecraft approaching Mars from an unknown origin (Earth)",
      "An asteroid colliding with the Sun",
      "A volcanic eruption underground",
      "A complete electrical power blackout"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Central Control Room radar detected two unmanned interplanetary probes (NASA's Viking orbiters/landers) heading toward Mars."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What mechanical part emerged from the landed alien spacecraft onto the Martian soil?",
    options: [
      "A metallic mechanical robotic arm (the 'alien hand') reaching down to collect Martian soil samples",
      "A laser gun",
      "A giant video camera",
      "A flag pole only"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Viking lander extended a telescopic mechanical sampler arm (an 'alien hand') to scoop regolith soil for biological analysis."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What irresistible object on the Control Room panel caught young Tilloo's eye when he visited with his father?",
    options: ["A prominent, glowing RED BUTTON on the control console", "A bright green light", "A video game screen", "A telephone handset"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A bright, prominent red button on the control console fascinated Tilloo, tempting his childish curiosity."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What happened when Tilloo pressed the tempting red button on the console?",
    options: [
      "A loud warning siren shrilled, and the mechanical robotic arm of the alien lander on the surface suddenly stopped functioning",
      "The Control Room exploded",
      "The spacecraft flew back to Earth",
      "Lights turned off completely"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Pressing the red button activated an interference signal that rendered the mechanical robotic arm on the Martian surface inactive."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Who was the 'Alien' in the title 'An Alien Hand' from the perspective of the Martian inhabitants?",
    options: [
      "Human beings on Earth (and NASA's Viking robotic lander)",
      "Monsters from another galaxy",
      "A ghost in the underground tunnels",
      "Tilloo's father"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In a brilliant role-reversal twist, the 'aliens' are human scientists on Earth whose robotic arm is probing Mars."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What real-life NASA space exploration mission inspired Dr. Jayant Narlikar's story 'An Alien Hand'?",
    options: ["The VIKING Mission to Mars (Viking 1 and Viking 2, 1976)", "The Apollo 11 Moon landing", "The Voyager 1 mission", "The Hubble Space Telescope"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "NASA's 1976 Viking 1 and 2 Mars lander missions with robotic soil-sampling arms inspired Narlikar's imaginative perspective."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What wise advice did Number One (the in-charge of defense) give to the President's advisory council regarding the alien spacecraft?",
    options: [
      "He advised passive observation and non-interference, warning that destroying the spacecraft would reveal their existence and location to unknown alien civilizations",
      "He advised shooting missiles at the spacecraft immediately",
      "He advised inviting the aliens to dinner",
      "He advised abandoning Mars"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Number One argued for strategic discretion: destroying the probes would reveal Martian presence and invite retaliatory exploration."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What did Number Two (the chief scientist) conclude about the approaching alien spacecraft?",
    options: [
      "He confirmed that the spacecraft were completely unmanned and contained only automated electronic recording instruments, so passive non-interference posed zero danger",
      "He said the craft were filled with dangerous soldiers",
      "He thought they were birds",
      "He claimed they were asteroids"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Number Two's sensor telemetry confirmed the alien probes carried only robotic instruments without living biological crew."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "How did NASA scientists on Earth explain the sudden mechanical failure of the Viking lander's robotic arm to news reporters?",
    options: [
      "They announced that the mechanical arm had developed a minor unexpected technical glitch, but their Earth-based engineers were transmitting corrective radio signals to reactivate it",
      "They announced they were attacked by Martians",
      "They said the mission was abandoned",
      "They claimed the camera broke"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "NASA scientists treated the arm stoppage as an enigmatic electronic malfunction and restored functionality remotely via radio telecommands."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What was the final conclusion reached by Earth scientists after analyzing the Martian soil samples collected by the Viking lander?",
    options: [
      "The soil samples showed NO SIGNS OF LIFE, leaving Earth scientists disappointed, while the Martians remained safely hidden underground",
      "They discovered intelligent aliens living in cities",
      "They found vast gold mines",
      "They proved Mars was made of cheese"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The ironic climax: NASA concluded Mars is lifeless, while the underground Martian civilization continues to flourish in secret."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What literary technique is central to the narrative perspective of 'An Alien Hand'?",
    options: [
      "Dramatic Irony and Role Reversal (narrating human space exploration from the viewpoint of the Martian natives)",
      "Tragic Flashback",
      "Allegorical Satire on Animals",
      "Poetic Verse"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Perspective inversion: presenting humanity as mysterious 'aliens' through the empathetic eyes of a Martian boy and his family."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What is the SYNONYM of 'Hostile' as used to describe the Martian surface climate?",
    options: ["Unfriendly / Harsh / Inhospitable", "Pleasant", "Welcoming", "Breezy"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'Hostile' environment denotes an inhospitable, severe, life-threatening physical climate."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What is the ANTONYM of 'Unmanned' in aerospace terminology?",
    options: ["Manned / Crewed / Piloted", "Autonomous", "Automated", "Robotic"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The antonym of 'unmanned' (robotic/autonomous) is 'manned' or 'crewed' (operated by human astronauts)."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Choose the correctly spelled word:",
    options: ["Surveillance", "Surveilance", "Survalience", "Survelience"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Correct orthography: S-U-R-V-E-I-L-L-A-N-C-E."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Fill in the blank with the appropriate preposition:\n'Tilloo's father worked _______ an underground control center.'",
    options: ["in", "on", "over", "between"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Location within an enclosed facility requires 'in'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Identify the type of sentence:\n'How marvelous it would be to see the Sun with my own eyes!'",
    options: ["Exclamatory Sentence", "Declarative Sentence", "Imperative Sentence", "Interrogative Sentence"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Expresses strong emotion/longing with an exclamation mark, characterizing an exclamatory sentence."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Convert to INDIRECT SPEECH:\nTilloo asked his father, \"Can I go to the surface today?\"",
    options: [
      "Tilloo asked his father if he could go to the surface that day.",
      "Tilloo asked his father that can I go to surface today.",
      "Tilloo told his father to go to surface.",
      "Tilloo asked his father if can he go to surface yesterday."
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Yes/No question indirect rule: reporting verb 'asked' + 'if/whether' + subject 'he' + modal shift 'could' + time shift 'that day'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What character trait is prominently displayed by Tilloo throughout the story?",
    options: [
      "Irrepressible curiosity, youthful adventure, and eagerness to explore the unknown",
      "Cowardice and fear of shadows",
      "Greed for money",
      "Anger towards his parents"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tilloo embodies universal childhood curiosity: daring to swipe the card, longing to see the sun, and pressing the mysterious red button."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What is the meaning of the phrase 'A blessing in disguise'?",
    options: [
      "An apparent misfortune or mistake that ultimately produces a beneficial outcome",
      "A religious ritual",
      "A gift wrapped in paper",
      "A curse that brings harm"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Idiom meaning: something that seems unfortunate at first (Tilloo getting caught / pressing button) but results in positive outcomes/safety."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Identify the figure of speech in: 'The mechanical hand was like a giant metallic spider reaching for the soil.'",
    options: ["Simile (using 'like' to compare the mechanical arm to a spider)", "Metaphor", "Personification", "Hyperbole"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Explicit comparison utilizing the comparative connector 'like' constitutes a Simile."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What do the Martian leaders value above all in their response to the alien arrival?",
    options: [
      "Prudence, collective consensus, non-violence, and self-preservation of their hidden civilization",
      "Aggressive military conquest of other planets",
      "Destroying every object in space",
      "Surrendering without thinking"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Martian council demonstrates scientific wisdom, restraint, and calculated pacifism to protect their subterranean community."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What scientific truth about Mars does the story reflect accurately?",
    options: [
      "Mars has extremely thin unbreathable atmosphere, freezing sub-zero temperatures, and barren dry soil regolith",
      "Mars has vast tropical oceans with fish",
      "Mars is covered with green forests",
      "Mars is hotter than Venus"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dr. Narlikar incorporates rigorous astrophysics: Mars' rarefied CO₂ atmosphere, extreme cold, and barren regolith."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Read the statements:\nAssertion (A): 'An Alien Hand' is a masterwork of cognitive estrangement and empathetic role-reversal in science fiction.\nReason (R): By framing human astronauts and NASA robots as the enigmatic 'aliens' from the viewpoint of Martian subterranean inhabitants, the story forces readers to reconsider anthropocentric assumptions about cosmic life.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Narlikar uses classic SF cognitive estrangement: de-centering human exceptionalism through the perceptive gaze of Martian natives."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Spot the IMPOSTER in the following character roles and decisions in 'An Alien Hand':\nGroup:\n1. Tilloo - Curious Martian child who presses the red button\n2. Number One - Defense in-charge advocating strategic non-interference\n3. Number Two - Chief scientist confirming spacecraft are unmanned probes\n4. Tilloo's Father - Space pirate who invades Earth with laser cannons",
    options: ["Character 1", "Character 2", "Character 3", "Character 4 (Tilloo's father is a gentle, dedicated subterranean maintenance technician, NOT a space pirate)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Character 4 is an absurd distortion: Tilloo's father is a conscientious subterranean scientist who maintains bio-support systems."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Analyze the profound ecological cautionary tale embedded in the backstory of Martian subterranean life:\nWhat warning does it convey to humanity on Earth?",
    options: [
      "Disrupting planetary climate and solar-ecological equilibrium can destroy surface habitability, rendering a thriving planet barren and forcing survivors into precarious subterranean technological shelters",
      "That building rockets is useless",
      "That living underground is always better than living in nature",
      "That aliens will soon destroy Earth's atmosphere"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mars' planetary atmospheric collapse serves as an environmental parable on the fragility of planetary biospheres."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Match Column I (Literary Elements of 'An Alien Hand') with Column II (Story Manifestations):\n(a) Inciting Incident   -> (i) Tilloo steals father's security card and explores surface tunnel\n(b) Rising Action       -> (ii) Two alien Viking spacecraft approach and land on Mars\n(c) Climax              -> (iii) Tilloo presses the red button, halting the mechanical arm\n(d) Resolution          -> (iv) NASA repairs the arm remotely and declares Mars lifeless",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Inciting incident = card theft; Rising action = Viking landing; Climax = red button press; Resolution = NASA declaration."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Read the statements regarding the story's climax:\nStatement 1: Tilloo's impulse to press the red button stemmed from instinctive child curiosity, not malice.\nStatement 2: His father reprimanded Tilloo and restored the button to neutral.\nStatement 3: Tilloo was expelled from Mars forever.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (Tilloo was safely guided by his loving parents). Statements 1 and 2 depict the authentic narrative sequence."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Identify the syntactic structure of: '**Had Tilloo not pressed the red button**, the alien mechanical hand would have gathered soil samples without interruption.'",
    options: [
      "Inverted Third Conditional expressing hypothetical past counterfactual condition",
      "First conditional in future tense",
      "Simple compound sentence",
      "Relative coordinate clause"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Inverted conditional without 'if' ('Had Tilloo not pressed...') forms a formal Third Conditional expressing unreal past conditions."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Why did the Martian leadership choose NOT to communicate with or broadcast radio signals to the Viking spacecraft?",
    options: [
      "They did not know the technological level or intentions of the alien civilization, fearing that contact might invite colonizing invasions or exploitation of their limited resources",
      "Because they did not understand radio waves",
      "Because their radios were broken",
      "Because they thought the craft was a bird"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Dark Forest / precautionary principle: avoiding unilateral contact with potentially dangerous unknown cosmic civilizations."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What makes the ending of 'An Alien Hand' delightfully humorous yet intellectually stimulating?",
    options: [
      "The contrast between NASA's triumphant scientific press conference claiming 'No Life on Mars' and the reality that a highly intelligent civilization is observing them in secret from underneath the soil",
      "Tilloo eating Martian ice cream",
      "The rocket exploding into fireworks",
      "The scientists crying on television"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Exquisite situational irony: human certainty of Mars' sterility juxtaposed against the living subterranean Martian world."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What is the grammatical function of the underlined gerund phrase in: '**Living underground** required sophisticated technological coordination and perpetual vigilance.'?",
    options: [
      "Subject of the sentence",
      "Direct object of the verb",
      "Subject complement",
      "Adverbial adjunct"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Living underground' is a Gerund Phrase functioning as the grammatical subject of the main predicate verb 'required'."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "Which literary trope is subverted when the story reveals that the 'Alien' is actually a robotic probe from Planet Earth?",
    options: [
      "The 'Alien Invasion / Space Monster' trope (human beings are revealed to be the enigmatic extraterrestrial visitors)",
      "The Fairy Tale princess trope",
      "The Detective murder mystery trope",
      "The Ghost story haunting trope"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Subversion of xenophobic pulp sci-fi: redefining the 'alien' through the eyes of indigenous non-human protagonists."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "How does Dr. Jayant Narlikar balance scientific realism with accessible youth storytelling in 'An Alien Hand'?",
    options: [
      "By integrating authentic astrophysical telemetry, bio-suits, and NASA robotic missions into a warm, relatable coming-of-age story of parental care and childhood curiosity",
      "By using magic wands and wizards",
      "By using complex mathematical equations on every page",
      "By eliminating all dialogue"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Narlikar seamlessly weaves hard astrophysical principles with universal domestic family dynamics and youth adventure."
  },
  {
    classLevel: 7,
    subject: "English",
    chapter: "Chapter 11: An Alien Hand",
    question: "What master theme does 'An Alien Hand' impart to young learners?",
    options: [
      "The universe is vast and full of wonder; true scientific inquiry requires humility, empathy for other perspectives, respect for fragile planetary ecologies, and the courage to explore beyond our immediate horizons",
      "That space exploration should be banned",
      "That children should never ask questions",
      "That technology is evil"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 11 champions cosmic humility, scientific imagination, perspective-taking, and planetary environmental consciousness."
  }
];

console.log('Generated Class 7 English Ch11:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/english_ch11.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
