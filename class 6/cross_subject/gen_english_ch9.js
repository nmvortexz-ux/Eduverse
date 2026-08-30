import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 3: English - Chapter 9: Desert Animals (40 Questions)
// -------------------------------------------------------------
const englishQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What are Deserts defined as in 'Desert Animals'?",
    options: [
      "The driest places on Earth that sometimes go for months or even years without any rainfall",
      "Areas covered with snow",
      "Places full of rivers",
      "Dense tropical forests"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Deserts are hyper-arid biomes enduring prolonged droughts, yet harboring uniquely adapted wildlife."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "How do tiny desert rodents called 'Gerbils' spend the hottest scorching hours of the desert day?",
    options: ["In cool, deep underground burrows", "Swimming in desert lakes", "Climbing cactus trees", "Sleeping in clouds"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gerbils avoid lethal surface heat by retreating into cool subterranean burrows."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "How do strange desert insects called 'Darkling Beetles' harvest drinking water in the arid desert?",
    options: [
      "They catch morning fog droplets on their legs and tilt their bodies upward so the water drops trickle down directly into their mouths",
      "They dig 50-foot wells",
      "They drink water from cactus roots",
      "They don't need water at all"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Stenocara beetles employ fog-basking: condensing coastal fog on hydrophilic shell bumps and tilting to drink."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Why do Rattlesnakes vibrate their dry rattle tails when threatened by an intruder?",
    options: [
      "To produce a loud rattling warning sound that can be heard up to 30 metres away, warning the intruder to back off",
      "To attract prey animals",
      "To keep their tail warm",
      "To make music in the desert"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Interlocking keratinous rattle segments buzz audibly at 30 meters as an aposematic defensive warning."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "How do snakes 'hear' approaching footsteps despite being completely deaf to airborne sounds?",
    options: [
      "They feel ground vibrations directly through their sensitive belly scales and lower jawbones",
      "Through big hidden ears",
      "Through their long tongues",
      "Through their eyes"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Lacking tympanic ears, snakes detect substrate acoustic seismic vibrations through somatic mechanoreceptors."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What animal is famous for its astonishing speed and lightning-fast reflexes that enable it to kill deadly venomous snakes without getting bitten?",
    options: ["Mongoose", "Desert Rat", "Camel", "Gerbil"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Mongooses combine agile predatory reflexes with specialized neurotoxin resistance to conquer venomous snakes."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What are the two distinct types of Camels found in the world?",
    options: [
      "Dromedary Camel (with ONE hump) and Bactrian Camel (with TWO humps)",
      "African Camel and Arctic Camel",
      "Water Camel and Land Camel",
      "Mountain Camel and Forest Camel"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Camelus dromedarius has a single hump, while Central Asian Camelus bactrianus possesses two humps."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What is stored inside a Camel's hump?",
    options: ["Fat (which acts as a nourishment reserve and metabolic food supply)", "Drinking water", "Air", "Bones"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A camel's hump stores adipose fat tissue, metabolizing into metabolic water and nourishment during famine."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "In the supplementary story 'What Happened to the Reptiles', what was the peaceful forest village called?",
    options: ["Pambupatti (a village where people of all communities lived in peace)", "Rampur", "Shampur", "Sitapur"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Pambupatti was an idyllic peaceful village where Prem took shelter after escaping communal violence in his hometown."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Who was Makara in the ancient fable of Pambupatti?",
    options: [
      "The biggest, strongest, and most arrogant crocodile who was the president of the reptile council",
      "A wise old tortoise",
      "A poisonous snake",
      "A harmless lizard"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Makara was a domineering tyrant crocodile who bullied other reptiles into unquestioning subservience."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Which gentle, slow-moving creature was the FIRST to be expelled from the forest by Makara's tyrannical decree?",
    options: ["The Tortoises (led by wise old Prem)", "The Snakes", "The Lizards", "The Frogs"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Makara expelled peaceful tortoises first, arrogantly mocking their slow pace and protective shells."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What happened to the forest ecosystem of Pambupatti after Makara drove out tortoises, snakes, and lizards?",
    options: [
      "A disastrous ecological crisis occurred: rats multiplied out of control eating eggs, rotting smell filled the air, and millions of insects infested the forest",
      "The forest became a paradise",
      "Crocodiles became twice as large",
      "All rivers turned into gold"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Expelling natural predator and scavenger reptiles triggered an explosive plague of rats and insect pests."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "How does a Mongoose successfully defeat a venomous cobra in combat?",
    options: [
      "By constantly dodging, darting, and exhausting the snake through repeated evasive maneuvers until the tired snake strikes slowly, then biting its neck",
      "By using poison gas",
      "By hypnotizing the snake with music",
      "By hiding in trees"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tactical agility: the mongoose dances out of strike range, exhausting the serpent's energy reserves before delivering a lethal cervical bite."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Why do Mongooses hunt in friendly groups and constantly stay in touch using twittering and whistling sounds?",
    options: [
      "To keep track of each other while hunting in dense brush and alert the whole clan immediately if a predator (like a hawk or eagle) appears",
      "Because they like to sing songs",
      "To scare away all insects",
      "To practice speaking human words"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cooperative social foraging: contact calls coordinate foraging while sentinel alarm chirps warn of aerial raptors."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "How much water can a thirsty camel drink in a single 10-minute session?",
    options: ["As much as 30 gallons (about 500 glasses of water / ~115 to 135 litres)", "Only 1 glass", "5 litres", "500 gallons"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rehydrating camels can drink over 100 litres of water in 10 minutes without osmotic hemolysis."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "How does a Camel's mouth adapt to eating thorny desert cactus plants without getting hurt?",
    options: [
      "Its mouth is lined with tough, thick leathery mucous membranes that sharp thorns cannot pierce",
      "It melts thorns with boiling saliva",
      "It has steel teeth",
      "It only eats powdered cactus"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dense, heavily keratinized conical oral papillae protect the camel's palate and gums against sharp desert thorns."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Why was Makara forced to send urgent letters recalling all the expelled snakes, tortoises, and lizards back to Pambupatti?",
    options: [
      "Because millions of bold rats were chewing baby crocodile tails, frogs were invading every pool, and the forest had become unlivable without ecological balance",
      "Because Makara wanted to have a dance party",
      "Because the crocodiles felt lonely",
      "Because the government ordered them"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ecological pestilence humbled Makara's tyranny, forcing him to restore the reptile community."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What profound moral and environmental lesson does Zai Whitaker's story 'What Happened to the Reptiles' teach?",
    options: [
      "Every single creature in an ecosystem has an indispensable role; no species or human community is superior, and harmony requires celebrating diversity and mutual coexistence",
      "Crocodiles are the wisest animals",
      "Villages should have no reptiles",
      "Rats make the best pets"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "An ecological and socio-political allegory demonstrating that biodiversity and human pluralism are essential for survival."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Why did the old man in Pambupatti tell the story to Prem, who had fled from communal riots in his distant city?",
    options: [
      "To make Prem realize that hatred, exclusion, and intolerance destroy society, and that he must return home to spread the message of peaceful communal coexistence",
      "To scare Prem with crocodile tales",
      "To teach him how to hunt snakes",
      "To pass time before dinner"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The elder uses the ecological parable to heal Prem's trauma and inspire him as an ambassador of communal harmony."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What does the word 'Predator' mean in biological ecology?",
    options: ["An animal that hunts, kills, and feeds on other animals (prey)", "An animal that only eats grass", "An animal that lives underwater", "A pet animal"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A predator is a carnivorous organism that preys upon other organisms for metabolic sustenance."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "How do Rattle snakes perceive warm-blooded prey in total darkness?",
    options: [
      "Through thermal heat-sensing pit organs located between their eyes and nostrils that detect infrared thermal radiation",
      "Using night-vision glasses",
      "Through loud shouts",
      "By smelling with their ears"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Pit vipers possess infrared pit organs mapping thermal infrared signatures of endothermic rodent prey."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What is 'Communal Harmony' as reflected in the village of Pambupatti?",
    options: [
      "People belonging to different religions, backgrounds, and communities living together in mutual peace, respect, equality, and brotherhood",
      "People fighting over property",
      "Only one group ruling everyone else",
      "Living without any laws"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Communal harmony embodies interfaith tolerance, pluralistic fraternity, and peaceful social cohesion."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Why does a camel sweat so little compared to humans?",
    options: [
      "Camels can withstand body temperature fluctuations up to 42°C without sweating, conserving vital body water in desert heat",
      "Camels have no sweat glands",
      "Camels are made of stone",
      "Camels only sweat in winter"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Adaptive heterothermy: camels tolerate diurnal body temperatures from 34°C to 41°C, minimizing evaporative sweat loss."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What role do lizards and chameleons play in maintaining the forest ecology of Pambupatti?",
    options: [
      "They consume millions of insects and pests daily, preventing insect swarms from destroying plants and trees",
      "They build wooden bridges",
      "They dig deep rivers",
      "They hunt crocodiles"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Insectivorous lizards provide critical top-down biological pest control in forest biomes."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What does the phrase 'to turn a deaf ear' mean when Makara ignored the pleas of smaller animals?",
    options: ["To deliberately refuse to listen or pay attention to someone", "To become physically deaf from loud noise", "To clean one's ear", "To whisper a secret"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'To turn a deaf ear' is an idiom meaning to deliberately disregard advice or compassionate appeals."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Why do female mongooses in a clan give birth to litters at the same time in communal dens?",
    options: [
      "So that nursing mothers can share parental duties and adult group members take turns babysitting while others forage for food",
      "Because they have no houses",
      "To fight other animals",
      "By pure accidental coincidence"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Synchronous breeding enables communal alloparental care, elevating pup survival against predators."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "In 'What Happened to the Reptiles', what happened to the forest's atmosphere after the expelled animals returned?",
    options: [
      "The rats were eaten, insects were controlled, rotting foul smell vanished, and the pristine green forest returned to healthy peace and normal balance",
      "The forest caught fire",
      "The animals fought a war",
      "The river dried up"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Trophic balance was immediately restored as returning predators and scavengers re-established ecological equilibrium."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Who is the prominent naturalist and wildlife author who wrote 'What Happened to the Reptiles'?",
    options: ["Zai Whitaker", "Ruskin Bond", "Jim Corbett", "Salim Ali"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Zai Whitaker, co-founder of the Madras Crocodile Bank Trust, authored this environmental allegory."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Read the statements:\nAssertion (A): The socio-ecological collapse of Pambupatti occurred because Makara disrupted the fundamental trophic web of the forest.\nReason (R): Removing snakes caused a hyper-exponential population explosion of egg-eating rodents, while expelling tortoises allowed rotting algae and carcasses to foul the river water.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The story models trophic cascade: removing keystone predators and detritivores induces severe ecological collapse."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Spot the IMPOSTER in the following group of desert animal adaptations from Chapter 9:\nGroup: [Darkling Beetle (Fog harvesting), Gerbil (Cool underground burrows), Camel (Fat-filled hump), Mongoose (Swimming underwater with gills)]",
    options: ["Darkling Beetle (Fog harvesting)", "Gerbil (Cool underground burrows)", "Camel (Fat-filled hump)", "Mongoose (Swimming underwater with gills)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mongooses are terrestrial desert/grassland mammals with fur that breathe air through lungs, NOT with gills."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Analyze the deeper political symbolism in Makara's rhetoric when he banished the lizards because 'they change color and cannot be trusted':",
    options: [
      "It represents fascist and majoritarian prejudice that invents irrational, fabricated excuses to demonize and purge minority communities from society",
      "It shows that lizards are bad painters",
      "It proves that reptiles don't like green color",
      "It is a guide on how to catch lizards"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Makara's irrational scapegoating mirrors authoritarian propaganda used to persecute pluralistic minorities."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Match Column I (Desert Creatures) with Column II (Physiological & Behavioral Adaptations):\n(a) Darkling Beetle -> (i) Fast reflex dodges exhausting cobras\n(b) Dromedary Camel -> (ii) Condenses coastal fog droplets on body\n(c) Mongoose        -> (iii) Single dorsal fat hump for famine metabolism\n(d) Rattlesnake     -> (iv) Warning tail buzz & infrared heat pit organs",
    options: [
      "a-(ii), b-(iii), c-(i), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Beetle = fog condensation; Camel = fat hump; Mongoose = agility/dodges; Rattlesnake = rattle buzz/pits."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Read the statements:\nStatement 1: Camels can survive in freezing cold winter deserts as well as scorching hot sandy deserts.\nStatement 2: A rattlesnake strikes only when it feels cornered, threatened, or stepped upon.\nStatement 3: Mongooses eat only sweet fruits and never meat.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because mongooses are voracious carnivores eating snakes, rodents, and insects. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What is the grammatical function of the underlined relative clause in: 'Prem met an old man *who told him the story of Pambupatti*.'?",
    options: [
      "Adjective Clause (modifying the antecedent noun 'old man')",
      "Noun Clause",
      "Adverb Clause of Reason",
      "Prepositional Phrase"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The relative clause 'who told him...' acts as an Adjective Clause characterizing the noun 'old man'."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What biochemical mechanism protects the mongoose when it receives a minor bite from a venomous snake?",
    options: [
      "Mutated nicotinic acetylcholine receptors in mongoose muscle cells prevent snake alpha-neurotoxins from binding, conferring intrinsic venom resistance",
      "Mongooses have cold blood that freezes venom",
      "Mongooses drink special snake antidotes from rivers",
      "Their fur has iron shields"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Glycosylation on the alpha-subunit of muscle nAChRs physically blocks snake neurotoxin binding in mongooses."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What is the meaning of the adjective 'Unanimous' when Makara declared his orders without voting?",
    options: [
      "Held in complete total agreement by everyone (though in Makara's case, enforced through sheer terror and intimidation)",
      "Divided equally into two parts",
      "Completely secret",
      "Written in pencil"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Unanimous' denotes complete collective consensus without dissent."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "How does the structure of camel red blood cells (erythrocytes) differ from that of humans to support extreme dehydration and rehydration?",
    options: [
      "Camels have oval-shaped (elliptical) erythrocytes that can expand up to 240% of their volume during rapid rehydration without bursting, and flow smoothly even in thick viscous dehydrated blood",
      "Camels have square blood cells",
      "Camels have no red blood cells",
      "Camel blood is made of pure water"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Elliptical erythrocytes resist osmotic lysis and navigate hyper-viscous microcirculation during severe dehydration."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "Why did Prem initially refuse to return to his village, stating: 'I never want to go back there'?",
    options: [
      "He was deeply traumatized by sectarian communal violence where neighbors burned houses and attacked each other in religious madness",
      "He had lost his school bag",
      "He wanted to become a fisherman",
      "He was afraid of rain"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Socio-political violence had shattered Prem's faith in human decency until Pambupatti restored his hope."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What literary device is utilized in 'What Happened to the Reptiles' to address human social conflicts through animal characters?",
    options: ["Allegory / Fable (using animal personification to deliver deep moral, social, and political truths)", "Satirical farce", "Science fiction", "Sonnet"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "An Allegory uses a narrative surface level (reptiles in a forest) to symbolize deeper political realities (communal tolerance)."
  },
  {
    classLevel: 6,
    subject: "English",
    chapter: "Chapter 9: Desert Animals",
    question: "What ultimate philosophical conviction inspires Prem to return to his wounded city at the conclusion of the story?",
    options: [
      "That even if cynical people laugh or resist at first, repeating the story of Pambupatti will eventually open human minds to the sacred truth of mutual harmony and interdependence",
      "To become the mayor of the city",
      "To build a wall around his house",
      "To buy expensive camels"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Prem embraces the duty of storytelling to heal fractured societies through the gospel of pluralistic harmony."
  }
];

console.log('Generated English Ch9:', englishQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/english_ch9.json', JSON.stringify(englishQuestions, null, 2), 'utf8');
