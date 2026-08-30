import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 9: Electricity and Circuits (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is a portable source of electricity that produces electric current from chemicals stored inside it?",
    options: ["Electric Cell (Dry Cell / Battery)", "Electric Switch", "Electric Bulb", "Conductor"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An electric cell converts internal chemical energy into electrical energy through electrochemical reactions."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "How many terminals does an electric cell have?",
    options: [
      "Two terminals (a Positive terminal marked '+' and a Negative terminal marked '-')",
      "One terminal",
      "Three terminals",
      "Four terminals"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The metal cap on top is the Positive (+) terminal, while the flat metal disc at the base is the Negative (-) terminal."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is the tiny, thin coiled metallic wire inside an incandescent bulb that glows white-hot and emits light when electricity passes through it?",
    options: ["Filament (made of Tungsten)", "Terminal", "Switch", "Insulator"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The high-resistance tungsten filament heats up due to Joule heating, glowing incandescently to emit visible light."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "A simple electrical device used to either break (open) an electric circuit or complete (close) it is called a:",
    options: ["Switch", "Filament", "Cell", "Fuse"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An electrical switch acts as a mechanical gate opening or closing the conductive loop."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Materials that allow electric current to pass through them easily (such as copper wire, aluminium, iron, silver) are called:",
    options: ["Conductors of Electricity", "Insulators", "Semiconductors", "Dielectrics"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Conductors possess abundant free delocalized valence electrons that facilitate electric charge flow."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Materials that do NOT allow electric current to pass through them (such as rubber, plastic, dry wood, glass) are called:",
    options: ["Insulators of Electricity", "Conductors", "Metals", "Electrolytes"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Insulators have tightly bound localized valence electrons with high dielectric resistivity, blocking electrical conduction."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is the conventional direction of electric current flow in an electric circuit?",
    options: [
      "From the Positive (+) terminal to the Negative (-) terminal of the electric cell",
      "From the Negative (-) terminal to the Positive (+) terminal",
      "From both terminals at the same time",
      "Current does not have any direction"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "By historical convention, current is defined as positive charge flow moving from the positive (+) to negative (-) terminal."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why does an electric bulb NOT glow when its internal filament is broken (fused bulb)?",
    options: [
      "Because a broken filament creates a gap in the path, resulting in an Incomplete (Open) Circuit through which current cannot flow",
      "Because the glass melts",
      "Because the cell explodes",
      "Because light leaks out of the hole"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A severed filament breaks electrical continuity, preventing loop closure and extinguishing electron drift."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why are electrical wires and screwdriver handles coated with Rubber or Plastic?",
    options: [
      "Rubber and plastic are electrical Insulators that protect electricians and users from dangerous electric shocks",
      "To make wires look colorful and shiny",
      "To make wires heavier",
      "Because metals melt in air"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Insulating polymer sleeves shield against direct galvanic human contact with live energized conductors."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Is the human body a Conductor or an Insulator of electricity?",
    options: [
      "A Conductor of electricity (since our body fluid contains dissolved mineral salts and water)",
      "An Insulator",
      "Neither",
      "Only our hair conducts electricity"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Saline electrolytes in blood and tissues render the human body conductive, which is why electric shocks occur."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What happens if the two terminals of an electric cell are connected directly with a wire WITHOUT connecting a bulb or switch?",
    options: [
      "The chemicals in the cell get exhausted very rapidly, generating dangerous heat that can damage the cell (Short Circuit)",
      "The wire turns into gold",
      "The cell charges to 1000 volts",
      "Nothing happens"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A direct zero-resistance short-circuit produces high discharge current, rapidly draining chemical potential and overheating the cell."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Which metal is the MOST COMMONLY used for making domestic electrical connecting wires due to its high conductivity and affordability?",
    options: ["Copper (and Aluminium)", "Iron", "Lead", "Mercury"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Copper has exceptionally low electrical resistivity, high ductility, and corrosion resistance, making it the industry standard."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is an 'Electric Circuit' in physics?",
    options: [
      "A complete, unbroken closed conducting loop through which electric current can flow continuously from one terminal of the source to the other",
      "A machine that makes electricity from coal",
      "A broken wire hanging in air",
      "A battery inside a toy"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "An electric circuit provides a closed continuous conducting path for circulating electric charges."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is the difference between a 'Closed Circuit' and an 'Open Circuit'?",
    options: [
      "In a Closed Circuit, the conducting path is completely unbroken and current flows to glow the bulb; in an Open Circuit, there is a break or open switch, stopping current flow",
      "In a Closed Circuit, the switch is OFF",
      "In an Open Circuit, electricity flows faster",
      "There is no difference"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Closed = complete conducting loop (current flows); Open = disconnected path (infinite resistance, zero current)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "How can a student build a simple DIY electric switch using common household items?",
    options: [
      "Using two metal drawing pins pushed into a wooden board, connected by a movable metal safety pin that bridges the gap when rotated",
      "Using a piece of plastic thread",
      "Using a rubber eraser",
      "Using a dry stick"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The metal safety pin rotates into contact with the second brass drawing pin, completing or opening the conductive circuit."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What happens when you insert an iron key versus a rubber eraser into the gap of a conduction tester circuit?",
    options: [
      "With the iron key (conductor), the bulb glows brightly; with the rubber eraser (insulator), the bulb does NOT glow",
      "Both make the bulb glow",
      "Neither makes the bulb glow",
      "The rubber eraser makes the bulb explode"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Iron conducts electrons, completing the circuit; rubber blocks electron flow, leaving the circuit open."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why is pure Distilled Water an insulator, whereas ordinary Tap Water / Salty Water is a conductor of electricity?",
    options: [
      "Distilled water has no free ions; tap water and saline water contain dissolved mineral salts and electrolytes that dissociate into free charge carriers",
      "Because tap water is colder",
      "Because distilled water is made of oil",
      "Because salt destroys electricity"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dissociated cations (Na⁺, Ca²⁺) and anions (Cl⁻, SO₄²⁻) in tap water provide electrolytic charge transport."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why is graphite (the lead inside a pencil) an exception among non-metals in terms of electrical conductivity?",
    options: [
      "Graphite is a good conductor of electricity because its layered hexagonal carbon lattice has delocalized pi electrons that move freely",
      "Because pencil lead is made of iron",
      "Because it is painted black",
      "Pencils do not conduct electricity"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sp² hybridized carbon sheets in graphite possess free pi electrons, making pencil lead electrically conductive."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What are the two thick supporting wires inside an electric bulb attached to?",
    options: [
      "One thick wire is attached to the metal tip at the base, and the other is attached to the metal casing around the base (the two terminals of the bulb)",
      "Both are connected to the glass shell",
      "Both are connected to the ceiling",
      "They are not connected to anything"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The two lead-in support wires connect the filament ends to two isolated terminal contacts at the bulb base."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why should you NEVER touch an electric wall socket or an operating electrical appliance with WET hands?",
    options: [
      "Water drastically reduces the electrical resistance of human skin, facilitating massive electric shock that can be fatal",
      "Because water makes the socket dirty",
      "Because the appliance will switch off",
      "Because water turns into ice"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Wet skin impedance drops from 100,000 Ω to <1,000 Ω, allowing dangerous milliamps of 230V current to pass through the body."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why do electricians wear thick Rubber Gloves and rubber-soled shoes while repairing electrical installations?",
    options: [
      "Rubber is an electrical insulator that breaks any potential ground path for electric current through their body to the earth",
      "To keep their hands warm in winter",
      "To improve their grip on tools",
      "To follow fashion rules"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dielectric rubber PPE isolates the worker from electrical grounding, preventing electrocution."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is an 'Electric Torch' and how does it function when switched ON?",
    options: [
      "The slide switch pushes a metal contact strip against the bulb base, completing the closed circuit between cells, reflector, and bulb",
      "It uses burning oil",
      "It catches sunlight in a glass",
      "It generates electricity from air"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sliding the switch closes the internal spring-contact circuit, illuminating the bulb backed by a parabolic reflector."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why is Tungsten metal specifically chosen to make the filament of an electric incandescent bulb?",
    options: [
      "It has an exceptionally high melting point (~3422°C) and high electrical resistance, glowing white-hot without melting",
      "Because it is very cheap",
      "Because it is a liquid at room temperature",
      "Because it is transparent"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tungsten sustains operating temperatures over 2,500°C due to its record metallic melting point of 3,422°C."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why should we NEVER use the electric current from domestic 230V AC mains wall sockets for classroom experiments?",
    options: [
      "230V AC mains current carries lethal power that can cause fatal electric shocks and fires; school experiments must strictly use small 1.5V DC electric cells",
      "Because the school bill will be too high",
      "Because wall sockets do not work during the day",
      "Because mains electricity has no voltage"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Domestic 230V mains is lethal; educational circuits must strictly use low-voltage 1.5V DC dry cells for complete safety."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Which of the following common household objects is an electrical CONDUCTOR?",
    options: ["Brass key and aluminium foil", "Plastic ruler and wooden pencil body", "Glass bangle and rubber band", "Cotton cloth and paper sheet"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Brass (copper-zinc alloy) and aluminium foil are metallic conductors."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Which of the following common household objects is an electrical INSULATOR?",
    options: ["Plastic pen body, glass marble, dry rubber eraser, wooden stick", "Iron nail and steel spoon", "Copper wire and gold ring", "Aluminium key"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Polymers, ceramics, elastomers, and celluloid wood are non-conductive electrical insulators."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why is air generally classified as a non-conductor (insulator) of electricity?",
    options: [
      "Dry atmospheric air consists of neutral gas molecules without free charge carriers, preventing electric current from jumping across open gaps under normal voltages",
      "Because air is too light",
      "Because air has no oxygen",
      "Because air only conducts heat"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Air has a high dielectric breakdown threshold (~3 kV/mm); neutral N₂ and O₂ molecules block low-voltage conduction."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What warning sign featuring a skull and crossed bones is prominently displayed on electrical substations and transformers?",
    options: ["DANGER - High Voltage Electric Shock Hazard", "Hospital zone", "No parking", "Speed breaker ahead"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The skull and crossbones caution sign warns of lethal high-voltage electrocution hazards."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Read the statements:\nAssertion (A): Both conductors and insulators are equally indispensable in electrical wiring and domestic power systems.\nReason (R): Conductors (like copper wires) carry electric current to operate appliances, while insulators (like PVC sleeves and Bakelite switches) prevent current leakage and protect users from lethal shocks.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Electrical engineering requires a dual design: low-impedance pathways (conductors) enclosed by high-dielectric boundaries (insulators)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Spot the IMPOSTER in the following group of materials classified by their electrical conductivity:\nGroup: [Silver (Conductor), Copper (Conductor), Graphite (Conductor), Pure Rubber (Conductor)]",
    options: ["Silver (Conductor)", "Copper (Conductor)", "Graphite (Conductor)", "Pure Rubber (Conductor)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Pure Rubber' is a powerful electrical INSULATOR, NOT a conductor."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "A student connects two electric cells in series to power a bulb. Which terminal connection configuration is CORRECT to light up the bulb?",
    options: [
      "The Positive (+) terminal of the first cell is connected to the Negative (-) terminal of the second cell in series",
      "Positive connected to Positive",
      "Negative connected to Negative",
      "Connecting only one cell and leaving the other disconnected"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Series battery connection requires connecting opposite polarity terminals (+ to -) to add cell voltages (1.5V + 1.5V = 3.0V)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Match Column I (Electrical Components) with Column II (Functions):\n(a) Electric Cell -> (i) Produces electricity from chemical energy\n(b) Switch        -> (ii) Breaks or completes an electric circuit\n(c) Filament      -> (iii) Glows incandescently to emit light\n(d) Rubber sleeve -> (iv) Insulates and prevents electric shock",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Cell = chemical energy; Switch = circuit breaker; Filament = light emission; Rubber = insulation."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Read the statements regarding electric circuits:\nStatement 1: A bulb glows only when electric current flows through its closed complete circuit.\nStatement 2: In an electric cell, current stops flowing when all stored chemical energy is fully consumed.\nStatement 3: Plastic is used to make the core conducting wires inside power cables.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because copper/aluminium metals form core conducting wires, while plastic is used solely as an outer insulation jacket. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why is an incandescent bulb filled with an inert gas like Argon or Nitrogen rather than ordinary air?",
    options: [
      "Atmospheric oxygen in air would instantly burn and oxidize the white-hot tungsten filament into vapor within seconds; inert gas prevents oxidation",
      "To make the bulb lighter so it can float",
      "Because argon makes the bulb green",
      "To cool the glass completely"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Inert argon/nitrogen eliminates oxidative combustion of the tungsten filament while suppressing filament thermal evaporation."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Consider four test materials placed in the gap of a conduction tester circuit:\n1. A steel safety pin\n2. A wooden matchstick\n3. An aluminium foil strip\n4. A glass slide\nWhich combination of materials will allow the test bulb to GLOW?",
    options: ["Materials 1 and 3 only (Steel and Aluminium)", "Materials 2 and 4 only", "Materials 1, 2, and 3", "All 4 materials"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Steel and aluminium are metallic conductors that complete the circuit loop; wood and glass are insulators."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is the physical reason why a bird perching with BOTH feet on a single bare 11,000V live high-tension electrical wire does NOT get electrocuted?",
    options: [
      "Both feet are on the same conductor wire at the exact same electrical potential (voltage), so there is zero potential difference (ΔV = 0) and no current flows through the bird's body",
      "Because birds have rubber feet",
      "Because high voltage cannot hurt animals",
      "Because birds fly faster than current"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Current requires a potential difference (I = ΔV/R); being at equipotential with no ground circuit prevents current flow through the bird."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is a 'Light Emitting Diode' (LED) and why is it rapidly replacing traditional tungsten incandescent bulbs in modern lighting?",
    options: [
      "A semiconductor diode that converts electrical energy directly into light with minimal heat generation, consuming up to 85% less electricity and lasting 25 times longer",
      "A bulb that works on kerosene",
      "A chemical candle in a tube",
      "A battery that shines on its own"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Solid-state electroluminescence in LEDs achieves high luminous efficacy (>100 lm/W) without incandescent thermal waste."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "Why must the metal terminals of an electric cell and connecting wires be scraped clean with sandpaper before making circuit connections?",
    options: [
      "To remove non-conductive oxide layers, dirt, or lacquer coatings on the metal surface that create high contact resistance and block electric flow",
      "To make the wire shiny",
      "To change the wire's color",
      "To make the wire thinner"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Abrasive cleaning strips insulating metal oxide tarnish films, establishing pristine low-impedance galvanic contact."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is the primary function of a safety 'Electric Fuse' in household circuits?",
    options: [
      "A sacrificial safety wire with a low melting point that melts and breaks the circuit automatically if excessive dangerously high current flows",
      "To store extra electricity for night",
      "To make the current flow faster",
      "To turn off the water pump"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "A fuse provides over-current protection: excessive fault current melts the fusible alloy link, interrupting the circuit before wires overheat."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 9: Electricity and Circuits",
    question: "What is the foundational law of electricity established in physics regarding the conservation of electric charge in any closed circuit?",
    options: [
      "Electric charge is neither created nor destroyed in a circuit; the total rate of charge entering any point must exactly equal the rate of charge leaving it",
      "Electricity disappears into thin air",
      "Batteries create new electrons from nothing",
      "Charges turn into gravity"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Kirchhoff's Current Law reflects fundamental charge conservation: net nodal divergence of continuous current is zero."
  }
];

console.log('Generated Science Ch9:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/science_ch9.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
