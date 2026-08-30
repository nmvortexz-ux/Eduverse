import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 10: Electric Current and its Effects (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "In standard circuit diagrams, how is an ELECTRIC CELL represented symbolically?",
    options: [
      "A long thin vertical line (representing the POSITIVE terminal) parallel to a shorter thick vertical line (representing the NEGATIVE terminal)",
      "A complete closed circle with a cross",
      "Two identical thick squares",
      "A wavy spiral line"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Symbolic convention: the longer, thinner parallel line represents the positive terminal (+), and the shorter, thicker line represents the negative terminal (-)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "A combination of two or more electric cells connected together in series is called a:",
    options: ["Battery", "Switch", "Fuse", "Electromagnet"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A battery is a connected group of electrochemical cells where the positive terminal of one cell connects to the negative terminal of the next."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What is the phenomenon where a conducting wire gets intensely HOT when an electric current passes through it called?",
    options: ["Heating Effect of Electric Current (Joule Heating)", "Magnetic Effect", "Chemical Effect", "Cooling Effect"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Joule's heating effect: electrical resistance dissipates electric potential energy into thermal kinetic heat (H = I²Rt)."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What is the high-resistance metallic wire coil inside electric room heaters, electric irons, toasters, and geysers that glows red-hot to produce heat called?",
    options: ["An Heating Element (made of Nichrome alloy)", "A Filament", "A Fuse wire", "A Switch"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An electric heating element is made of high-resistivity Nichrome alloy (nickel-chromium) that resists oxidation at high temperatures."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Which high-melting-point metal is used to make the thin glowing FILAMENT inside an incandescent electric bulb?",
    options: ["Tungsten (melting point ~3,422°C)", "Copper", "Aluminum", "Lead"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tungsten has an exceptionally high melting point (~3,422°C), glowing white-hot to emit light without melting."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What is an Electric Fuse and what is its primary safety function in household electrical circuits?",
    options: [
      "A safety device containing a low-melting-point wire that melts and breaks the circuit if excessive dangerous electric current flows through it",
      "A device to generate more electricity",
      "A switch that makes bulbs brighter",
      "A meter to measure voltage"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An electric fuse prevents electrical fires and appliance damage by melting when current exceeds the rated safety threshold."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What modern automatic safety switches are increasingly replacing traditional melting wire fuses in household electrical wiring?",
    options: ["Miniature Circuit Breakers (MCBs)", "Transformers", "Capacitors", "Batteries"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "MCBs automatically trip and switch OFF when current exceeds safe limits, and can easily be reset manually without replacing wires."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Which Danish physicist discovered in 1820 that an electric current flowing through a wire creates a MAGNETIC FIELD that deflects a nearby magnetic compass needle?",
    options: ["Hans Christian Oersted", "Michael Faraday", "Thomas Edison", "James Watt"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Hans Christian Oersted discovered electromagnetism in 1820 when he noticed an electric current deflects a magnetic compass needle."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "A coil of insulated wire wound around an iron core that acts as a magnet only when electric current flows through it is called an:",
    options: ["Electromagnet", "Permanent Bar Magnet", "Electric Cell", "Electric Fuse"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An electromagnet is a temporary magnet whose magnetic field is generated and controlled by an electric current in its coil."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What happens to the magnetic field of an Electromagnet when the electric current is switched OFF?",
    options: ["It loses its magnetism almost immediately", "It becomes twice as strong", "It explodes", "It becomes a permanent magnet forever"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Electromagnets are temporary magnets made of soft iron cores that lose magnetic properties the moment current stops flowing."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Which everyday electromechanical acoustic device operates using an Electromagnet, a soft iron armature, a striker hammer, and a brass gong?",
    options: ["An Electric Bell", "A Flashlight", "An Electric Heater", "An Electric Iron"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An electric bell uses an electromagnet that attracts an iron armature, striking the gong and breaking the contact in a rapid make-and-break cycle."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Which standard certification mark issued by the Bureau of Indian Standards (BIS) should consumers look for on electrical appliances to ensure quality and safety?",
    options: ["ISI Mark", "Agmark", "FSSAI Mark", "Hallmark"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The ISI certification mark guarantees that electrical appliances conform to national safety, efficiency, and quality standards."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Why are energy-efficient LED (Light Emitting Diode) bulbs and CFLs preferred over traditional incandescent filament bulbs?",
    options: [
      "Incandescent bulbs waste a large proportion of electrical energy as unwanted Heat, whereas LEDs convert almost all electrical energy directly into Light without heat wastage",
      "Incandescent bulbs are too bright for human eyes",
      "LED bulbs do not require any electricity",
      "LED bulbs last only for one day"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "LEDs use solid-state electroluminescence, consuming 80–90% less energy than resistive incandescent filament bulbs."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "How should cells be arranged in a battery holder so that electric current flows properly?",
    options: [
      "The POSITIVE (+) terminal of one cell must be connected to the NEGATIVE (-) terminal of the next cell in a continuous series",
      "Positive terminal must connect to positive terminal",
      "Negative terminal must connect to negative terminal",
      "Cells can be placed in any random direction"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Series electrochemical connection requires alternating polarities (+ to -) to add individual cell voltages together."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What two dangerous electrical fault conditions cause an excessive, surging current to flow through domestic wiring, triggering fires or blowing fuses?",
    options: [
      "1. Short Circuit (direct contact between live and neutral wires due to damaged insulation) ; and 2. Overloading (connecting too many high-power appliances to a single socket)",
      "High room temperature and heavy rain",
      "Turning on light bulbs during the day",
      "Using long wires"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Short circuits bypass load resistance (R ≈ 0, surging I) and overloading draws additive current exceeding cable ampacity."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "How can the magnetic strength of a simple solenoid Electromagnet be significantly INCREASED?",
    options: [
      "By increasing the number of turns of the insulated wire coil, and by increasing the magnitude of electric current flowing through it",
      "By using a plastic core instead of iron",
      "By reducing the number of turns to one",
      "By cooling the wire in ice"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Magnetic flux density B is directly proportional to turn density and current (B = μ·n·I) around a ferromagnetic soft iron core."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Why should an ordinary copper wire NEVER be used as a replacement fuse wire in a fuse carrier?",
    options: [
      "Copper has a very high melting point and low resistance; it will NOT melt during heavy current overloads, causing house wires to catch fire and burn appliances",
      "Copper does not conduct electricity",
      "Copper attracts lightning",
      "Copper turns into water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Copper has a high melting point (~1,085°C), defeating the safety purpose of a calibrated low-melting-point lead-tin eutectic fuse wire."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "How does the 'Make-and-Break' contact screw mechanism work in an Electric Bell?",
    options: [
      "When the electromagnet attracts the iron armature to strike the gong, it pulls the contact strip away from the screw, breaking the circuit; the electromagnet loses magnetism, the spring pulls the armature back, re-establishing contact to repeat the cycle rapidly",
      "The bell is struck by hand",
      "A motor rotates the bell",
      "The bell rings by sound waves"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The electromechanical contact interrupter self-oscillates: magnetic attraction breaks the circuit, spring restores contact, creating continuous ringing."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Why are powerful industrial Electromagnets attached to giant cranes in junkyards and steel factories?",
    options: [
      "To effortlessly lift, move, and sort heavy scrap iron, steel plates, and magnetic debris by simply turning the electric current ON to pick up and OFF to drop",
      "To weld cars together",
      "To generate electricity from trash",
      "To paint steel beams"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Heavy-duty lifting electromagnets switch magnetic hold instantaneously, revolutionizing scrap metal handling without mechanical hooks."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What is the medical application of tiny specialized Electromagnets in hospitals?",
    options: [
      "Ophthalmic surgeons use miniature electromagnets to safely extract tiny accidental iron splinters from a patient's eye",
      "To heal broken bones",
      "To test blood sugar",
      "To measure body temperature"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Eye surgeons use micro-electromagnets to non-invasively extract ferromagnetic foreign particles embedded in ocular tissues."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What physical factors determine the amount of heat produced in a current-carrying wire according to Joule's Heating Law?",
    options: [
      "The Material of the wire (resistivity), its Length, its Thickness (cross-sectional area), and the Duration of time current flows through it (H ∝ I²Rt)",
      "The color of the wire only",
      "The atmospheric air pressure only",
      "The shape of the switch"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Joule's heat H = I²Rt depends on current squared (I²), resistance R (governed by material ρ, length L, and cross-section A), and time t."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What happens when a magnetic compass is placed near an electric wire and the switch is turned ON?",
    options: [
      "The magnetic needle immediately deflects from its North-South alignment due to the magnetic field generated by the electric current",
      "The compass needle spins forever like a fan",
      "The compass catches fire",
      "Nothing happens to the compass"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Oersted effect: the concentric magnetic field lines induced by the current exert a torque on the compass magnetic dipole."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Why does the connecting copper wire in an electric circuit remain cool while the Nichrome element in an electric toaster glows bright red?",
    options: [
      "Copper has extremely low electrical resistance (producing negligible heat), whereas Nichrome has very high resistance and dissipates immense heat (H ∝ R)",
      "Copper is kept in water",
      "Nichrome is painted red",
      "Copper has no current"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "In a series circuit with constant current I, heat generation is directly proportional to resistance (H ∝ R); R_nichrome >> R_copper."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What happens when the filament of an electric bulb breaks (burns out / gets 'fused')?",
    options: [
      "The electrical circuit becomes OPEN (broken), current stops flowing, and the bulb cannot emit light",
      "The bulb shines twice as bright",
      "The battery charges automatically",
      "The bulb changes color to green"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A severed filament creates an open circuit (infinite resistance), arresting current flow through the bulb."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Which of the following household appliances utilizes the HEATING effect of electric current?",
    options: ["Electric Geyser, Electric Toaster, Electric Iron, Room Heater", "Electric Fan, Mixer Grinder, Washing Machine", "Radio, Television, Mobile phone", "Refrigerator, Air Conditioner"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Geysers, toasters, irons, and room heaters convert electrical energy into thermal energy via resistive Joule heating elements."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Which of the following household appliances utilizes the MAGNETIC effect of electric current (Electric Motors)?",
    options: ["Electric Fan, Washing Machine, Mixer Grinder, Water Pump", "Electric Kettle, Immersion Rod, Electric Heater", "Flashlight bulb, Candle, Lamp", "Electric Iron"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Electric motors in fans, washing machines, and pumps convert electrical energy into mechanical rotation via electromagnetic Lorentz forces."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What is the function of a Switch (Key) in an electric circuit?",
    options: [
      "It is a simple deliberate device used to either close (COMPLETE) or open (BREAK) the electric circuit at will",
      "It generates electric voltage",
      "It changes AC into DC",
      "It cools the wires"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A switch mechanically bridges or opens circuit continuity to control current flow to electrical loads."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What is the core material traditionally used inside an electromagnet coil to achieve maximum temporary magnetic strength?",
    options: ["Soft Iron (due to high magnetic permeability and low retentivity)", "Hard Steel", "Wood", "Glass"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Soft iron possesses high magnetic permeability and low retentivity (coercivity), magnetizing strongly and demagnetizing instantly."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Read the statements:\nAssertion (A): Electric fuses and MCBs are critical sacrificial safety devices that must be connected in series with the LIVE WIRE of a circuit.\nReason (R): Placing the fuse in the live wire ensures that whenever an overcurrent or short circuit occurs, the circuit is disconnected immediately at the high-voltage source, preventing electric shock hazards and wire fires.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Live wire placement isolates downstream appliances from high potential (220V), preventing shock hazards upon fuse interruption."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Spot the IMPOSTER in the following group of Electrical Components and their standard circuit symbols:\nGroup:\n1. Electric Cell - One long thin line and one short thick parallel line\n2. Open Switch - Two small circles with disconnected lever bar\n3. Battery - Alternating series of long and short parallel lines\n4. Electric Bulb - A live fire burning in a glass bowl",
    options: ["Symbol 1", "Symbol 2", "Symbol 3", "Symbol 4 (The standard symbol for an electric bulb is a circle with a LOOPED FILAMENT inside, NOT a live burning fire)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Standard IEC circuit symbol for a lamp/bulb is a circle enclosing a coiled filament cross/loop."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "If an electric iron draws a current of 5 A from a 220 V supply line and has an internal resistance of 44 Ω, calculate the amount of HEAT energy generated in 10 minutes (600 seconds):",
    options: [
      "660,000 Joules or 660 kJ (Heat H = I² × R × t = 5² × 44 × 600 = 25 × 44 × 600 = 1,100 × 600 = 660,000 J)",
      "330,000 J",
      "550,000 J",
      "440,000 J"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "H = I²Rt = (25)(44)(600) = 660,000 J = 660 kJ."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Match Column I (Electrical Devices) with Column II (Core Physical Operating Principles):\n(a) Electric Geyser   -> (i) High-resistance Joule heating effect in Nichrome\n(b) Electric Bell     -> (ii) Rapid electromechanical make-and-break electromagnetic attraction\n(c) Electric Fuse     -> (iii) Sacrificial thermal melting at rated ampacity threshold\n(d) Magnetic Compass  -> (iv) Deflection by induced magnetic dipole torque around current",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Geyser = Joule heating; Bell = make-break electromagnetism; Fuse = thermal melting; Compass = Oersted deflection."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Read the statements regarding electromagnetism:\nStatement 1: Reversing the direction of electric current in a wire reverses the direction of magnetic deflection in a compass needle.\nStatement 2: An electromagnet made with a steel core retains permanent magnetism even after current is turned off.\nStatement 3: An electric current creates a gravitational field that repels water.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an absurd falsehood. Statements 1 (Right-hand rule vector reversal) and 2 (Steel hysteresis retentivity) are true."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Why is an inert gas mixture (like Argon with Nitrogen) filled inside traditional incandescent glass light bulbs instead of ordinary air?",
    options: [
      "Ordinary air contains Oxygen, which would instantly oxidize and burn up the white-hot Tungsten filament into smoke; inert Argon prevents oxidation and suppresses tungsten evaporation",
      "To make the bulb lighter so it can float",
      "Because argon is cheaper than air",
      "To produce colored sparks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Inert argon/nitrogen atmosphere prevents high-temperature oxidation of tungsten and retards filament vaporization."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "How do Maglev (Magnetic Levitation) high-speed bullet trains use superconducting Electromagnets to travel at speeds exceeding 500 km/h?",
    options: [
      "Powerful electromagnets create magnetic repulsion that levitates the train frictionless above the guideway track, propelling it forward with alternating linear electromagnetic fields",
      "They burn coal in giant boilers",
      "They have giant rubber wheels moved by wind",
      "They slide on ice tracks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Electromagnetic suspension (EMS) and linear synchronous propulsion eliminate mechanical wheel-rail friction in Maglev transit."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Consider four circuit configurations:\n1. Three 1.5 V cells connected in series (+ to -)\n2. A Nichrome wire connected to a 12 V battery\n3. An open switch in a closed circuit loop\n4. A compass placed near a DC current carrying coil\nWhich of these configurations will produce an ENERGIZED MAGNETIC FIELD OR GLOWING HEAT?",
    options: ["Configurations 1, 2, and 4 only", "Configuration 3 only", "Configurations 2 and 3 only", "All 1, 2, 3, and 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Configuration 3 has an open switch (zero current, no heat/magnetism). Configurations 1, 2, 4 are closed active systems."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What physical property distinguishes a Bimetallic Strip used in thermal thermostat switches and thermal MCBs?",
    options: [
      "Two different metals (e.g. brass and iron) with different thermal expansion coefficients bonded together; differential expansion causes the strip to bend upon heating, breaking the circuit at a set temperature",
      "It produces electricity from light",
      "It turns into liquid metal",
      "It magnetizes wood"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Differential linear thermal expansion (α_brass > α_iron) forces mechanical curvature that trips electrical contacts in thermal overloads."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "Why does an electric heater element made of Nichrome (resistance ~50 Ω) glow red-hot, while the copper connecting cord (resistance ~0.05 Ω) supplying the exact same current remains completely cool to the touch?",
    options: [
      "Because power dissipation P = I²R is 1,000 times greater in the Nichrome element than in the copper leads carrying identical series current",
      "Because copper is insulated with cold water",
      "Because current only enters the Nichrome",
      "Because Nichrome absorbs cold from the room"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Series current is uniform; thermal dissipation scales strictly with resistance (P = I²R), producing 1000× more heat in Nichrome."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What is the function of the permanent magnet inside an acoustic Loudspeaker when combined with an electromagnetic Voice Coil?",
    options: [
      "Audio electrical signals passing through the voice coil generate fluctuating magnetic fields that interact with the permanent magnet, rapidly vibrating the speaker cone to produce audible sound waves",
      "To keep the speaker cool",
      "To store digital songs",
      "To filter radio stations"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Electrodynamic speakers translate variable AC audio currents into mechanical diaphragmatic acoustic vibrations via Lorentz forces."
  },
  {
    classLevel: 7,
    subject: "Science",
    chapter: "Chapter 10: Electric Current and its Effects",
    question: "What grand technological unification is established in Chapter 10 of NCERT Class 7 Science?",
    options: [
      "The profound transformation of electrical energy into thermal heat, radiant light, and controllable magnetic forces—underpinning the entire infrastructure of modern domestic appliances, electrical safety engineering, and electromechanical automation",
      "That electricity is dangerous and should never be used",
      "That magnets have no connection to electricity",
      "That all circuits must be powered by steam engines"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 10 unifies electro-thermal conversion, circuit schematic symbology, safety interruption, and foundational electromagnetism."
  }
];

console.log('Generated Class 7 Science Ch10:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/science_ch10.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
