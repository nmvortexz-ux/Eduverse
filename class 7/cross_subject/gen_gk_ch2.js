import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 2: Wildlife & Conservation (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "In which year was India's landmark wildlife conservation initiative 'Project Tiger' launched at Jim Corbett National Park to save the Royal Bengal Tiger?",
    options: ["1973 (1st April 1973)", "1985", "1992", "2005"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Project Tiger was launched on 1 April 1973 under Prime Minister Indira Gandhi at Corbett National Park."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which is the OLDEST national park in India, established in 1936 in Uttarakhand (originally named Hailey National Park)?",
    options: ["Jim Corbett National Park", "Kaziranga National Park", "Ranthambore National Park", "Kanha National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Jim Corbett National Park in Uttarakhand was established in 1936 as Hailey National Park, India's first national park."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the international conservation authority that publishes the famous 'Red Data Book' (Red List) classifying endangered and threatened plant and animal species?",
    options: ["IUCN (International Union for Conservation of Nature)", "WWF", "UNESCO", "UNEP"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The IUCN (headquartered in Gland, Switzerland) compiles the global Red List of Threatened Species."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which is the LARGEST land mammal currently living on Earth?",
    options: ["African Bush Elephant (Loxodonta africana)", "Asian Elephant", "Hippopotamus", "White Rhinoceros"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The African Bush Elephant is the planet's largest extant terrestrial mammal, weighing up to 6,000 kg."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which is the LARGEST animal ever known to have lived on planet Earth (larger than any dinosaur)?",
    options: ["The Blue Whale (Balaenoptera musculus - up to 30 metres long, ~180 tonnes)", "Megalodon", "Tyrannosaurus Rex", "Sperm Whale"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Antarctic Blue Whale is the largest animal in Earth's history, reaching ~30 m in length and 180 metric tonnes."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which is the FASTEST land animal on Earth, capable of sprinting up to 110–120 km/h in short bursts?",
    options: ["Cheetah (Acinonyx jubatus)", "Lion", "Leopard", "Springbok"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Cheetah reaches 0 to 100 km/h in 3 seconds, making it the fastest cursorial terrestrial predator."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "In which Indian national park in Madhya Pradesh (Kuno National Park) were African cheetahs reintroduced in 2022 under 'Project Cheetah' after being extinct in India since 1952?",
    options: ["Kuno National Park", "Bandhavgarh National Park", "Pench National Park", "Panna National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In September 2022, 8 cheetahs from Namibia were released into Kuno National Park, MP, inaugurating Project Cheetah."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the only species of APE found in India, living in the dense tropical forests of Assam and the Northeast?",
    options: ["Hoolock Gibbon (Western & Eastern Hoolock Gibbon)", "Chimpanzee", "Gorilla", "Orangutan"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The tailless, arboreal Hoolock Gibbon is the sole native ape species inhabiting Indian rainforests."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which tropical rainforest in South America is often called the 'Lungs of the Planet' because it produces a massive share of global terrestrial oxygen and harbors 10% of all known species?",
    options: ["The Amazon Rainforest", "Congo Basin Rainforest", "Daintree Rainforest", "Borneo Rainforest"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Amazon River Basin contains the world's largest tropical rainforest, driving global hydrological and carbon cycles."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the world's LARGEST living coral reef ecosystem, stretching over 2,300 km off the coast of Queensland, Australia?",
    options: ["The Great Barrier Reef", "Belize Barrier Reef", "Red Sea Coral Reef", "Andaman Reef"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Great Barrier Reef is the largest biogenic structure on Earth, visible from space and home to 1,500 fish species."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which is the tallest living land animal in the world, with a neck reaching up to 5.5 metres high?",
    options: ["Giraffe (Giraffa camelopardalis)", "African Elephant", "Ostrich", "Camel"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Giraffe is the tallest extant mammal, possessing 7 elongated cervical vertebrae and high-pressure cardiovascular adaptations."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which is the LARGEST living bird in the world, capable of running up to 70 km/h and laying the largest eggs?",
    options: ["Ostrich (Struthio camelus)", "Emu", "Cassowary", "Penguin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The flightless African Ostrich is the largest living bird species, standing up to 2.8 m tall."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "In which year was 'Project Elephant' launched by the Government of India to protect wild Asian elephant populations and secure elephant migration corridors?",
    options: ["1992", "1972", "1980", "2000"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Project Elephant was initiated in February 1992 by the Ministry of Environment and Forests to secure viable elephant habitats."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which national park in Jammu & Kashmir is the ONLY habitat of the critically endangered 'Hangul' (Kashmir Stag)?",
    options: ["Dachigam National Park", "Hemis National Park", "Kishtwar National Park", "Salim Ali National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dachigam National Park near Srinagar protects the last surviving wild population of the endangered Kashmir Stag (Cervus hanglu hanglu)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the LARGEST national park in India by geographical area, famous for protecting the elusive Snow Leopard in high Ladakh altitudes?",
    options: ["Hemis National Park (4,400 sq km)", "Desert National Park", "Gangotri National Park", "Namdapha National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hemis National Park in Ladakh is India's largest national park and a globally renowned snow leopard stronghold."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which famous bird sanctuary in Rajasthan (formerly known as Bharatpur Bird Sanctuary) is a UNESCO World Heritage site hosting thousands of winter migratory waterfowl including the Siberian Crane?",
    options: ["Keoladeo Ghana National Park", "Sultanpur Bird Sanctuary", "Ranganathittu Bird Sanctuary", "Vedanthangal Bird Sanctuary"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Keoladeo Ghana in Bharatpur is a world-renowned avifaunal wetland sanctuary hosting over 370 migratory bird species."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the unique floating national park on Loktak Lake in Manipur, the ONLY floating national park in the world, home to the endangered Brow-antlered Deer ('Sangai' / Dancing Deer)?",
    options: ["Keibul Lamjao National Park", "Nokrek National Park", "Balphakram National Park", "Mouling National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Keibul Lamjao is a floating wetland sanctuary comprised of decomposing biomass mats ('phumdis') harboring the endemic Sangai deer."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the unique evolutionary feature of Monotremes (such as the Duck-billed Platypus and Echidna of Australia)?",
    options: [
      "They are the ONLY surviving mammals that lay EGGS instead of giving birth to live young, yet suckle their hatched young with mother's milk",
      "They have scales like fish",
      "They can breathe underwater without lungs",
      "They have no blood"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Monotremes are oviparous (egg-laying) mammals possessing mammary gland milk secretion and cloacal anatomy."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the unique biological feature of Marsupial mammals (such as Kangaroos, Koalas, and Wombats)?",
    options: [
      "Females give birth to tiny, underdeveloped embryonic young that crawl into an external maternal abdominal pouch (Marsupium) to nurse and complete development",
      "They can fly like eagles",
      "They are cold-blooded like snakes",
      "They have blue fur"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Marsupials possess a short gestation period followed by post-natal lactation development inside a ventral pouch (marsupium)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is 'Echolocation' used by Bats and Toothed Whales (Dolphins) to hunt prey and navigate in total darkness?",
    options: [
      "Emitting high-frequency ultrasound sound pulses and listening to returning reflected echoes to calculate the exact distance, shape, and speed of objects",
      "Using thermal heat vision",
      "Smelling underwater",
      "Using magnetic compasses in eyes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Biological sonar/echolocation computes spatial acoustic topographies from reflected ultrasonic wave reflections."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which marine reptile undertakes epic multi-thousand-kilometer trans-oceanic migrations to nest in millions simultaneously ('Arribada') on the beaches of Gahirmatha and Rushikulya in Odisha?",
    options: ["Olive Ridley Sea Turtle (Lepidochelys olivacea)", "Leatherback Sea Turtle", "Green Sea Turtle", "Hawksbill Turtle"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gahirmatha Marine Sanctuary in Odisha is the world's largest mass-nesting rookery (Arribada) for Olive Ridley sea turtles."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the specialized physiological adaptation that allows Camels to survive weeks in scorching desert heat without drinking water?",
    options: [
      "Storing energy-rich fat in their humps (which metabolizes into metabolic water and calories), having oval red blood cells that withstand dehydration, and minimizing sweat/urine loss",
      "Storing 100 litres of liquid water in their stomach",
      "Drinking seawater directly",
      "Sweating 50 litres of water an hour"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Fat oxidation in humps, non-nucleated oval erythrocytes, high renal water reabsorption, and variable body temperature allow camel xerophilic survival."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the venomous snake in the world that builds dedicated leaf-litter nests to incubate its eggs, growing up to 5.5 metres long?",
    options: ["King Cobra (Ophiophagus hannah)", "Black Mamba", "Russell's Viper", "Common Krait"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The King Cobra is the world's longest venomous snake and the only snake that constructs dedicated botanical nests for maternal incubation."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the specialized adaptation of the Arctic Polar Bear (Ursus maritimus) that keeps it warm in freezing sub-zero temperatures?",
    options: [
      "A thick 10 cm layer of insulating subcutaneous fat (blubber), two dense fur coats, and black skin underneath translucent hollow hair fibers that absorb solar heat",
      "Feathers on its paws",
      "Drinking boiling water",
      "Sleeping for 10 years without waking"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Subcutaneous blubber, dense underfur, hollow photon-scattering guard hairs, and melanin-rich black heat-absorbing epidermis insulate polar bears."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Which Indian state has the LARGEST number of wild Bengal Tigers according to the National Tiger Census (over 780 tigers)?",
    options: ["Madhya Pradesh ('The Tiger State of India')", "Karnataka", "Uttarakhand", "Maharashtra"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Madhya Pradesh leads national tiger counts with 785 tigers, earning its designation as the Tiger State of India."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is 'Coral Bleaching' in ocean ecosystems?",
    options: [
      "Rising sea water temperatures cause stressed coral polyps to expel their symbiotic photosynthetic algae (Zooxanthellae), turning corals ghostly white and risking mass mortality",
      "Corals being painted with white bleach",
      "Corals freezing into ice",
      "Fish eating all coral rocks"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Thermal ocean stress disrupts the mutualism between scleractinian corals and endosymbiotic zooxanthellae, resulting in bleaching."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the ONLY species of deer in the world where both males and females grow branched antlers?",
    options: ["Reindeer (Caribou)", "Spotted Deer (Chital)", "Sambar Deer", "Barking Deer"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Reindeer (Rangifer tarandus) are unique among cervids in that both stags and hinds grow annual branched bone antlers."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the famous national park in Karnataka, part of the Nilgiri Biosphere Reserve, renowned for having the largest wild Asian elephant concentration in Asia?",
    options: ["Nagarhole National Park (Rajiv Gandhi National Park) and Bandipur", "Periyar National Park", "Mudumalai National Park", "Silent Valley"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The contiguous Nagarhole-Bandipur-Mudumalai complex holds the highest global density of wild Asian elephants."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Read the statements:\nAssertion (A): Apex predators like the Royal Bengal Tiger are considered crucial 'Keystone Species' and 'Umbrella Species' in ecological conservation.\nReason (R): Protecting top carnivores regulates lower herbivore populations, preserves forest vegetative canopies, stabilizes river watersheds, and automatically shields thousands of co-existing species across the ecosystem.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Trophic cascades: conserving apex predators maintains structural ecosystem integrity, preventing trophic collapse across food webs."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Spot the IMPOSTER in the following group of endangered Indian wildlife matched with their primary native habitats:\nGroup:\n1. Sangai (Dancing Deer) - Loktak Lake, Manipur\n2. Asiatic Lion - Gir Forest, Gujarat\n3. Great Indian Bustard - Thar Desert, Rajasthan\n4. Nilgiri Tahr - Himalayan glaciers of Ladakh",
    options: ["Match 1", "Match 2", "Match 3", "Match 4 (Nilgiri Tahr is endemic to the Southern Western Ghats of Kerala/Tamil Nadu, NOT Ladakh)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Nilgiri Tahr (Nilgiritragus hylocrius) is an endangered mountain ungulate endemic to the montane shola-grasslands of Western Ghats (Eravikulam), NOT Ladakh."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the international conservation convention CITES (Convention on International Trade in Endangered Species of Wild Fauna and Flora)?",
    options: [
      "A legally binding global treaty regulating and banning commercial international trade in endangered wildlife specimens (ivory, tiger skins, rhino horns, exotic timber) to ensure species survival",
      "A treaty that encourages hunting in all national parks",
      "A convention that sells wild animals in markets",
      "A club of zoo owners"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "CITES (1975) accords international trade protections across 38,000+ species via tiered Appendices (I, II, III)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Match Column I (Unique Animals) with Column II (Evolutionary Superpowers):\n(a) Axolotl (Mexican Salamander) -> (i) Full regeneration of lost limbs, spinal cord & heart\n(b) Tardigrade (Water Bear)       -> (ii) Survives vacuum of space, radiation & -200°C via cryptobiosis\n(c) Immortal Jellyfish           -> (iii) Reverts adult medusa cells back to polyp stage endlessly\n(d) Peregrine Falcon             -> (iv) Fastest dive speed on Earth (over 380 km/h)",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Axolotl = limb regeneration; Tardigrade = extreme cryptobiosis; Turritopsis dohrnii = biological immortality; Peregrine = 380 km/h dive."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Read the statements regarding biodiversity hotspots in India:\nStatement 1: India contains 4 global Biodiversity Hotspots (The Himalayas, Western Ghats, Indo-Burma, and Sundaland/Nicobar).\nStatement 2: The Nilgiri Biosphere Reserve was the FIRST biosphere reserve established in India in 1986.\nStatement 3: Rhinoceros horns are made of solid elephant ivory bones.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because rhino horns are composed of compacted KERATIN protein (like human hair/nails), NOT bone or ivory. Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the unique deep-sea biological phenomenon where 90% of abyssal marine organisms generate their own cold biological light through the enzyme luciferase?",
    options: ["Bioluminescence", "Photosynthesis", "Chemosynthesis", "Bioaccumulation"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bioluminescence oxidizes luciferin substrate catalyzed by luciferase, producing cold photon emission for communication and predation in dark depths."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "Why was the 'Bishnoi Community' of Rajasthan historically celebrated for world-pioneering environmental martyrdom in 1730 at Khejarli?",
    options: [
      "Amrita Devi Bishnoi and 363 Bishnois sacrificed their lives hugging sacred Khejri trees to prevent them from being felled by royal soldiers",
      "They discovered diamond mines in the desert",
      "They built the first zoo in India",
      "They invented solar powered cars"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "In 1730, Amrita Devi and 363 Bishnoi martyrs gave their lives protecting Prosopis cineraria (Khejri) trees, inspiring the modern Chipko movement."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the specialized migratory adaptation of the Arctic Tern (Sterna paradisaea) that makes it the champion world traveler?",
    options: [
      "It undertakes an annual round-trip migration of over 70,000 to 90,000 km between the Arctic and Antarctic, experiencing two summers a year",
      "It flies to the moon and back",
      "It swims across the bottom of the ocean",
      "It stays asleep while flying for 20 years"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Arctic Tern completes the longest circumpolar pole-to-pole migration on Earth (~90,000 km annually)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is 'Biomagnification' (Biological Magnification) in wildlife food chains?",
    options: [
      "The progressive increase in concentration of persistent toxic non-biodegradable chemicals (like DDT, heavy metals, microplastics) at each successively higher trophic level",
      "Animals growing bigger in size every year",
      "Looking at animals through a giant magnifying glass",
      "Plants producing double the flowers in spring"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Lipophilic xenobiotics resist metabolic breakdown, bio-accumulating exponentially toward apex trophic consumers (e.g. raptor eggshell thinning)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the critically endangered avian raptor of India whose population plummeted by 99% due to toxic veterinary residues of the anti-inflammatory drug 'Diclofenac' in cattle carcasses?",
    options: [
      "Indian Vulture (Gyps indicus) and White-rumped Vulture",
      "Great Indian Hornbill",
      "Peregrine Falcon",
      "Golden Eagle"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Diclofenac ingested from livestock carcasses caused catastrophic visceral gout and renal failure in Gyps vultures across South Asia."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What is the unique ecosystem function performed by the 'Mangrove Sundari Trees' in the Sundarbans against cyclones and tidal storm surges?",
    options: [
      "Their dense interlaced stilt and prop root systems dissipate up to 66% of cyclonic wave energy, acting as resilient bio-shields preventing coastal soil erosion",
      "They produce poisonous gas against storms",
      "They absorb all salt from the sea",
      "They make rain fall backwards"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Rhizophora and Heritiera prop root lattices attenuate hydrodynamic kinetic energy from severe tropical cyclonic surges."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 2: Animal Kingdom, Flora, Fauna & Global Wildlife Conservation",
    question: "What ultimate moral and scientific mandate concludes our understanding of the Global Animal Kingdom and Wildlife Conservation?",
    options: [
      "Biodiversity is the living life-support infrastructure of planet Earth; preserving intact habitats, ecological corridors, and endangered species is essential for the survival of human civilization itself",
      "Wild animals should be completely replaced by domesticated pets",
      "Deforestation is necessary to eliminate all wild predators",
      "Only animals useful to human commerce deserve protection"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ecosystem stability and human biospheric survival depend directly on preserving biodiversity, genetic resilience, and ecological networks."
  }
];

console.log('Generated Class 7 GK Ch2:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/gk_ch2.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
