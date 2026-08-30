import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 7: Motion and Measurement of Distances (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What is the internationally accepted standard unit of LENGTH in the International System of Units (SI Units)?",
    options: ["Metre (m)", "Centimetre (cm)", "Kilometre (km)", "Foot (ft)"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Metre (m) is the fundamental base SI unit for measuring linear distance and length worldwide."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "How many Centimetres (cm) are there in exactly 1 Metre (m)?",
    options: ["100 cm", "10 cm", "1,000 cm", "1,000 mm"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "1 metre = 100 centimetres (1 m = 100 cm = 1,000 mm)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "How many Metres (m) make up exactly 1 Kilometre (km)?",
    options: ["1,000 metres (1 km = 1,000 m)", "100 metres", "10,000 metres", "500 metres"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The metric prefix 'kilo' represents 1,000; therefore 1 km = 1,000 m."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Why were ancient non-standard units of length like 'Handspan', 'Footstep', and 'Cubits' discarded for scientific measurements?",
    options: [
      "Because human body dimensions vary from person to person, leading to inconsistent, inaccurate, and unreliable measurements",
      "Because rulers are cheaper",
      "Because hands cannot measure wood",
      "Because kings banned hands"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Biological anatomical variations caused commercial discrepancies, necessitating invariant scientific standard units."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "The motion of an object along a straight line path is called:",
    options: ["Rectilinear Motion (e.g. a car moving on a straight road, march-past of soldiers)", "Circular Motion", "Periodic Motion", "Rotational Motion"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Linear unidirectional motion along a single straight axis is rectilinear motion."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "The motion of an object along a circular path such that its distance from a fixed central point remains constant is called:",
    options: ["Circular Motion (e.g. motion of blades of an electric fan, hands of a clock)", "Rectilinear Motion", "Periodic Motion", "Random Motion"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Trajectory tracking along the circumference of a circle at constant radial distance is circular motion."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Motion that repeats itself at regular equal intervals of time is called:",
    options: ["Periodic Motion (e.g. pendulum of a clock, branch of a tree swinging, string of a guitar)", "Rectilinear Motion", "Random Motion", "Non-periodic Motion"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Harmonic oscillatory motions repeating over a constant time period (T) are periodic."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What instrument is used by tailors to measure the curved circumference of a person's chest or waist?",
    options: ["A flexible Measuring Tape", "A rigid wooden meter rod", "A metal divider", "A compass"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Flexible measuring tape conforms along curved anatomical contours where rigid straight rulers cannot bend."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What revolutionary invention in the history of human transport made land travel and haulage of heavy loads dramatically faster?",
    options: ["The invention of the Wheel", "The invention of stone knives", "The invention of paper", "The invention of glass"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The wheel substituted rolling friction for sliding friction, revolutionizing wheeled vehicle transport."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Which prime mover invented in the 18th century paved the way for the development of modern high-speed steam locomotives and railways?",
    options: ["Steam Engine (by James Watt)", "Electric Motor", "Jet Engine", "Diesel Engine"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Watt steam engine transformed thermodynamic enthalpy into mechanical work for railway transport."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Which of the following is an example of an object exhibiting MULTIPLE types of motion simultaneously?",
    options: [
      "A rolling ball on the ground (both Rotational motion on its axis and Rectilinear motion along the floor)",
      "A bird sleeping in a nest",
      "A fixed stone on a hill",
      "A book lying on a table"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A rolling sphere or bicycle wheel rotates about its axle while translating rectilinearly forward."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "A change in the position of an object with time relative to a stationary reference point (frame of reference) is called:",
    options: ["Motion", "Rest", "Force", "Friction"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kinematic motion is defined as a temporal displacement in positional coordinates relative to a chosen reference frame."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "How can the length of a curved line (such as a winding river curve on a map) be measured accurately?",
    options: [
      "By laying a flexible thread carefully along the curved path from start to end, marking the endpoints on the thread, and then measuring the straightened thread on a standard meter scale",
      "By bending a wooden ruler until it snaps",
      "By guessing with eyes",
      "By weighing the paper on a balance"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A non-stretchable string traces continuous curvature and is subsequently calibrated against a linear metric scale."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What is 'Parallax Error' in taking length measurements with a scale, and how is it avoided?",
    options: [
      "An apparent optical shift error caused by viewing the scale markings from an angle; it is avoided by positioning the eye directly vertically above the point of measurement",
      "An error caused by wind blowing",
      "An error caused by warm weather",
      "An error caused by dirty paper"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Viewing the scale at an oblique angle introduces parallax displacement; the sight line must be perpendicular (90°) to the mark."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "If the zero mark (0 cm) of a ruler is broken or damaged, how should one take an accurate measurement?",
    options: [
      "Start measuring from any other full mark (e.g. 1.0 cm or 2.0 cm) and subtract that initial reading from the final end reading",
      "Throw the ruler away immediately",
      "Guess the missing zero mark",
      "Add 10 cm to the final reading"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "True length = (Final scale reading) - (Initial non-zero offset reading). E.g. 14.3 cm - 1.0 cm = 13.3 cm."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Why is a passenger sitting inside a moving bus in motion relative to a roadside tree, but AT REST relative to a fellow passenger sitting next to them?",
    options: [
      "Motion is relative: position changes relative to the stationary roadside tree, but position remains unchanged relative to the bus interior and fellow passenger",
      "Because the bus has windows",
      "Because the tree is running backwards",
      "Because eyes get confused in a bus"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Kinematics is reference-frame dependent: position vector changes in the Earth frame, but dr/dt = 0 in the bus co-moving frame."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What types of motion are executed by the needle of a sewing machine and its rotating balance wheel?",
    options: [
      "The sewing needle moves up and down in Periodic / Oscillatory motion, while the balance wheel executes Circular / Rotational motion",
      "Both move in straight rectilinear motion",
      "The needle moves in circles",
      "Both are completely at rest"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The balance wheel rotates about a fixed axis (circular/rotational), while the crank drives the needle in periodic reciprocating motion."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What is the key difference between 'Rotational Motion' and 'Circular Motion'?",
    options: [
      "In Rotational motion, the entire body spins about an internal fixed axis passing through itself (e.g. spinning top, Earth's spin); in Circular motion, an object moves around an external central point (e.g. Earth revolving around the Sun)",
      "Rotational motion has no speed",
      "Circular motion is always straight",
      "There is no difference"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rotation involves spin about an intrinsic internal axis; circular revolution tracks a trajectory around an extrinsic external focus."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Convert a distance of 4.5 kilometres into metres (m) and centimetres (cm):",
    options: ["4,500 m and 450,000 cm", "450 m and 45,000 cm", "45,000 m and 4,500 cm", "4.5 m and 450 cm"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "4.5 km × 1,000 m/km = 4,500 m. 4,500 m × 100 cm/m = 450,000 cm."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Convert the length of a pencil measuring 18.5 cm into millimetres (mm):",
    options: ["185 mm (18.5 × 10 mm = 185 mm)", "1.85 mm", "1,850 mm", "0.185 mm"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "1 cm = 10 mm. 18.5 cm × 10 mm/cm = 185 mm."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Which of the following motions is NON-PERIODIC (does not repeat itself at regular intervals)?",
    options: ["A footballer running unpredictably across the sports ground", "The swing of a simple pendulum", "The revolution of the Earth around the Sun", "The heartbeat of a healthy resting human"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Random athletic maneuvering has no fixed periodic time interval, making it non-periodic/random."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What type of motion is executed by the plucked strings of a Sitar or Guitar when playing musical notes?",
    options: ["Periodic / Vibratory (Oscillatory) Motion", "Rectilinear Motion", "Rotational Motion", "Circular Motion"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tensioned strings execute transverse periodic standing wave vibrations generating acoustic harmonics."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Why does an elastic rubber measuring tape give incorrect and inconsistent measurements of length?",
    options: [
      "Because rubber stretches variably depending on how hard a person pulls it, giving different lengths for the exact same object",
      "Because rubber has no numbers printed on it",
      "Because rubber dissolves in air",
      "Because rubber is too heavy"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Elastic deformation alters the calibrated spacing between interval markers under variable tensile stress."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What is the historical chronological progression of transportation technology across human civilizations?",
    options: [
      "Walking on foot -> Pack animals -> Wooden wheeled bullock carts / Sailboats -> Steam engine railways -> Motorcars & Aeroplanes -> Supersonic jets & Spacecraft",
      "Aeroplanes -> Walking -> Steam engines",
      "Steam engines -> Spacecraft -> Walking",
      "Bicycles -> Spacecraft -> Bullock carts"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Transport evolved from biological walking to animal draught, mechanical combustion steam engines, internal combustion cars, and aerospace rocketry."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "A student measures the thickness of a single page of a 500-page book using a 15 cm plastic scale. How can they achieve high accuracy?",
    options: [
      "Measure the total thickness of all 500 pages together with the scale and divide that total thickness by 500",
      "Try to read a single page with a magnifying lens",
      "Guess the thickness as 1 mm",
      "Burn the book and weigh the ash"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Bulk averaging method: dividing composite thickness by total sheet count minimizes least-count reading error."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Which of the following SI unit abbreviations is written CORRECTLY according to standard international IUPAP conventions?",
    options: ["50 m (lower-case m without plural 's' or full stop)", "50 ms.", "50 Metres.", "50 Mts"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "SI unit symbols are written in lower case (m for metre), never pluralized with 's', and never followed by periods unless at sentence ends."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What motion is performed by the Earth around its own polar axis and around the Sun respectively?",
    options: [
      "Rotational motion on its own axis (every 24 hours) AND Circular/Elliptical Periodic revolution around the Sun (every 365¼ days)",
      "Rectilinear motion only",
      "Random non-periodic motion",
      "It remains completely at rest"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Earth combines intrinsic diurnal axial rotation (24h) with periodic orbital revolution (365.25d)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "In which year was the International System of Units (SI) accepted internationally by the General Conference on Weights and Measures?",
    options: ["1960", "1947", "1900", "2000"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 11th CGPM officially established the International System of Units (SI) based on the metric system in 1960."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Read the statements:\nAssertion (A): The motion of the tip of the second's hand of a wristwatch is both Circular Motion and Periodic Motion.\nReason (R): It sweeps out a circular path around the central dial pivot and repeats its exact identical movement precisely once every 60 seconds.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The constant radius r defines uniform circular motion, while constant period T = 60 s defines periodic motion."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Spot the IMPOSTER in the following group of motions classified as Periodic Motion:\nGroup: [Motion of a child on a swing, Oscillation of a clock pendulum, Plucked string of a sitar, A dry leaf falling in turbulent wind]",
    options: ["Motion of a child on a swing", "Oscillation of a clock pendulum", "Plucked string of a sitar", "A dry leaf falling in turbulent wind"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "A falling dry leaf in turbulent air exhibits RANDOM / NON-PERIODIC chaotic motion, whereas swing, pendulum, and guitar strings are periodic."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "A student measures the length of a wooden block using a broken scale starting at 2.4 cm mark. The reading at the other end is 18.7 cm. What is the true physical length of the block?",
    options: ["16.3 cm (18.7 cm - 2.4 cm = 16.3 cm)", "18.7 cm", "21.1 cm", "14.3 cm"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "True length = Final reading - Initial offset = 18.7 cm - 2.4 cm = 16.3 cm."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Match Column I (Moving Objects) with Column II (Primary Types of Motion):\n(a) A stone tied to a string and whirled overhead -> (i) Rectilinear Motion\n(b) An apple falling vertically from a tree       -> (ii) Periodic / Oscillatory Motion\n(c) The membrane of a tabla being played        -> (iii) Circular Motion\n(d) A potter's wheel spinning on its pivot      -> (iv) Rotational Motion",
    options: [
      "a-(iii), b-(i), c-(ii), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(ii), b-(iv), c-(i), d-(iii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Whirled stone = Circular; Falling apple = Rectilinear; Tabla membrane = Periodic; Potter's wheel = Rotational."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Read the statements regarding measurement conventions:\nStatement 1: The height of a person is 1.65 m, which equals 165 cm and 1,650 mm.\nStatement 2: The distance between Delhi and Mumbai is best expressed in millimetres.\nStatement 3: 1 centimetre is divided into 10 equal subdivisions called millimetres.\nWhich statements are TRUE?",
    options: ["Statements 1 and 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because inter-city geographic distances are appropriately expressed in kilometres (km), not millimetres. Statements 1 and 3 are exact metric facts."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Why was the standard prototype metre bar historically crafted from an alloy of 90% Platinum and 10% Iridium and preserved at 0°C near Paris?",
    options: [
      "Platinum-Iridium alloy exhibits extreme resistance to corrosion and an exceptionally low coefficient of thermal expansion, preserving invariant physical length",
      "To make the ruler shiny and expensive",
      "Because platinum melts easily in cold water",
      "Because France wanted to hoard gold"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Pt-Ir provides supreme chemical inertness, high mechanical hardness, and minimal thermal contraction/expansion across seasonal shifts."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "A cyclist pedals along a straight level road at 15 km/h. Analyze the motion of the bicycle's WHEEL versus the motion of the cyclist's PEDALS:",
    options: [
      "The wheels execute both Rotational motion and Rectilinear translation forward, while the pedals execute Circular motion around the crank axle",
      "Both move in straight lines only",
      "Both move in random motion",
      "The bicycle is at rest"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Wheels translate along the ground while spinning on their hub; foot pedals trace circular revolutions around the central bottom bracket spindle."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Consider four measurement scenarios:\n1. Width of a biology textbook\n2. Distance between Sun and Earth\n3. Thickness of a 5-rupee coin\n4. Distance between two cities\nMatch the most appropriate SI metric units for each scenario in order (1, 2, 3, 4):",
    options: ["1: cm ; 2: km (or AU) ; 3: mm ; 4: km", "1: mm ; 2: m ; 3: km ; 4: cm", "1: m ; 2: cm ; 3: km ; 4: mm", "1: km ; 2: mm ; 3: cm ; 4: m"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Book width = cm; Coin thickness = mm; Intercity distance = km; Astronomical distances = km / AU."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Why must a measurement always be expressed as BOTH a number (magnitude) AND a unit (e.g. '15 metres' and NOT just '15')?",
    options: [
      "A pure number conveys no physical dimension or scale; the unit gives definite physical meaning and comparability to standard references",
      "Because numbers are illegal without letters",
      "To make sentences longer",
      "Because scientists like words"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "A physical quantity Q = n · [U], where n is the dimensionless numerical multiplier and U is the standardized invariant unit."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "What type of motion is executed by a marching soldier during a Republic Day parade along the straight Kartavya Path?",
    options: [
      "The soldier's entire body moves in Rectilinear motion along the road, while their arms and legs swing in Periodic / Oscillatory motion",
      "Pure circular motion",
      "Random chaotic motion",
      "Rotational spin"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Linear forward center-of-mass translation (rectilinear) combines with periodic antagonistic pendular limb oscillations."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "Which of the following accurately describes the modern SI definition of 1 Metre adopted in 1983 by the CGPM?",
    options: [
      "The distance travelled by light in absolute vacuum during a time interval of 1 / 299,792,458 of a second",
      "The length of a king's arm",
      "The circumference of Earth divided by 100",
      "The length of a gold bar in London"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The metre is defined by fixing the speed of light in vacuum c = 299,792,458 m/s, tying length directly to cesium atomic clocks."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 7: Motion and Measurement of Distances",
    question: "A toy train moves along a circular railway track of radius 7 metres. When it completes one full circle, what are its Distance travelled and Net Displacement respectively?",
    options: [
      "Distance = 44 metres (2πr = 2 × 22/7 × 7) ; Displacement = 0 metres (since start and end points coincide)",
      "Distance = 0 m ; Displacement = 44 m",
      "Distance = 14 m ; Displacement = 14 m",
      "Distance = 44 m ; Displacement = 44 m"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Scalar path distance = circumference = 2πr = 44 m; vector displacement = Δr = r_final - r_initial = 0 m."
  }
];

console.log('Generated Science Ch7:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/science_ch7.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
