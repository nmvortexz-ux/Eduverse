import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 5: Understanding Elementary Shapes (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "An angle measuring exactly 90° (equal to one-fourth of a full revolution) is called a:",
    options: ["Right Angle (90°)", "Straight Angle", "Acute Angle", "Obtuse Angle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A right angle measures exactly 90° (¼ of a 360° full revolution)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "An angle measuring exactly 180° (equal to half of a full revolution, forming a straight line) is called a:",
    options: ["Straight Angle (180°)", "Right Angle", "Complete Angle", "Reflex Angle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A straight angle measures exactly 180° (½ of a 360° complete revolution)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "An angle whose measure is strictly LESS than 90° (between 0° and 90°) is called an:",
    options: ["Acute Angle", "Obtuse Angle", "Right Angle", "Reflex Angle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An acute angle lies in the open interval (0°, 90°)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "An angle whose measure is strictly GREATER than 90° but LESS than 180° is called an:",
    options: ["Obtuse Angle", "Acute Angle", "Straight Angle", "Reflex Angle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An obtuse angle lies strictly between 90° and 180°."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "An angle whose measure is GREATER than 180° but LESS than 360° is called a:",
    options: ["Reflex Angle", "Obtuse Angle", "Complete Angle", "Straight Angle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A reflex angle measures between 180° and 360°."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "An angle formed by one full complete 360° turn of a ray back to its initial starting line is a:",
    options: ["Complete Angle (360°)", "Straight Angle", "Right Angle", "Zero Angle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A complete revolution corresponds to an angular measure of 360°."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "When two lines intersect such that the angle between them is exactly 90°, the lines are called:",
    options: ["Perpendicular Lines (denoted as AB ⊥ CD)", "Parallel Lines", "Collinear Lines", "Skew Lines"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Lines meeting at orthogonal right angles (90°) are perpendicular."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "A triangle in which ALL THREE sides have different (unequal) lengths is called a:",
    options: ["Scalene Triangle", "Isosceles Triangle", "Equilateral Triangle", "Right-angled Triangle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A scalene triangle has three mutually unequal side lengths and three unequal angles."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "A triangle in which exactly TWO sides are equal in length is called an:",
    options: ["Isosceles Triangle", "Scalene Triangle", "Equilateral Triangle", "Obtuse Triangle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An isosceles triangle has two equal sides and equal base angles."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "A triangle in which ALL THREE sides are equal in length (and each internal angle is 60°) is an:",
    options: ["Equilateral Triangle", "Isosceles Triangle", "Scalene Triangle", "Right Triangle"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An equilateral (equiangular) triangle has 3 equal sides and 3 angles of 60° each."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "A quadrilateral having all 4 sides equal and all 4 internal angles equal to 90° is a:",
    options: ["Square", "Rectangle", "Rhombus", "Trapezium"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A square is a regular quadrilateral with 4 equal sides, 4 right angles, and perpendicular diagonals."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "How many faces (flat surfaces) does a 3D solid Cube or Cuboid have?",
    options: ["6 faces", "8 faces", "12 faces", "4 faces"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A standard hexahedral cube/cuboid has 6 quadrilateral faces, 12 straight edges, and 8 corner vertices."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What fraction of a clockwise revolution does the hour hand of a clock turn through when it goes from 3 to 9?",
    options: ["1/2 revolution (180° / 2 right angles)", "1/4 revolution", "3/4 revolution", "1 full revolution"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "From 3 to 9 is 6 hour divisions: 6/12 = 1/2 revolution = 180°."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What fraction of a clockwise revolution does the hour hand of a clock turn through when it goes from 12 to 3?",
    options: ["1/4 revolution (90° / 1 right angle)", "1/2 revolution", "3/4 revolution", "1/3 revolution"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "From 12 to 3 is 3 hour divisions: 3/12 = 1/4 revolution = 90°."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "Where will the hand of a clock stop if it starts at 12 and makes 1/2 of a revolution clockwise?",
    options: ["At 6", "At 3", "At 9", "At 12"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "12 + (1/2 × 12) = 12 + 6 = 6 o'clock."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "Where will the hand of a clock stop if it starts at 2 and makes 3/4 of a revolution clockwise?",
    options: ["At 11", "At 8", "At 5", "At 10"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "3/4 of 12 hours = 9 hours. 2 + 9 = 11 o'clock."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "If you face North and turn clockwise to face East, what fraction of a revolution have you turned through?",
    options: ["1/4 revolution (90° right angle)", "1/2 revolution", "3/4 revolution", "1 revolution"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "From North (0°) clockwise to East (90°) is 90°/360° = 1/4 revolution."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "If you face West and turn clockwise to face South, how many right angles have you turned through?",
    options: ["3 right angles (270° / 3/4 revolution)", "1 right angle", "2 right angles", "4 right angles"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "From West clockwise: West -> North (1) -> East (2) -> South (3) = 3 right angles (270°)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What is a line called that is perpendicular to a given line segment and divides it into two exact equal halves?",
    options: ["Perpendicular Bisector", "Diagonal", "Altitude", "Tangent"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A perpendicular bisector intersects a segment at its midpoint at a right angle (90°)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "A quadrilateral in which opposite sides are parallel and equal, but opposite angles are NOT necessarily 90°, is a:",
    options: ["Parallelogram", "Trapezium", "Triangle", "Kite"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A parallelogram has opposite parallel congruent sides and bisecting diagonals."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "A quadrilateral having all 4 sides equal, opposite sides parallel, but whose angles are not 90° is a:",
    options: ["Rhombus", "Rectangle", "Trapezium", "Square"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A rhombus is an equilateral parallelogram whose diagonals bisect each other perpendicularly at 90°."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "A quadrilateral with exactly ONE pair of parallel opposite sides is called a:",
    options: ["Trapezium (or Trapezoid)", "Parallelogram", "Rhombus", "Rectangle"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A trapezium is a 4-sided polygon having strictly one pair of parallel opposing bases."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What is a 5-sided polygon and an 8-sided polygon called respectively in geometry?",
    options: ["Pentagon (5 sides) and Octagon (8 sides)", "Hexagon and Heptagon", "Decagon and Nonagon", "Triangle and Quadrilateral"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "5 sides = Pentagon; 6 sides = Hexagon; 7 sides = Heptagon; 8 sides = Octagon."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What are the numbers of Faces (F), Vertices (V), and Edges (E) in a triangular pyramid (Tetrahedron)?",
    options: ["4 Faces, 4 Vertices, 6 Edges", "5 Faces, 6 Vertices, 9 Edges", "6 Faces, 8 Vertices, 12 Edges", "4 Faces, 6 Vertices, 4 Edges"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A tetrahedron has 4 triangular faces, 4 corner vertices, and 6 connecting edges (Euler's formula F+V-E = 4+4-6 = 2)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What are the numbers of Faces, Vertices, and Edges in a Triangular Prism?",
    options: ["5 Faces (2 triangular, 3 rectangular), 6 Vertices, 9 Edges", "4 Faces, 4 Vertices, 6 Edges", "6 Faces, 8 Vertices, 12 Edges", "5 Faces, 5 Vertices, 8 Edges"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A triangular prism has 5 faces (2 bases + 3 rectangular sides), 6 vertices, and 9 edges (5+6-9 = 2)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What are the numbers of Faces, Vertices, and Edges in a Square Pyramid (like the Egyptian Pyramids)?",
    options: ["5 Faces (1 square base, 4 triangular sides), 5 Vertices, 8 Edges", "6 Faces, 8 Vertices, 12 Edges", "4 Faces, 4 Vertices, 6 Edges", "5 Faces, 6 Vertices, 9 Edges"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A square pyramid has 5 faces, 5 vertices (1 apex + 4 base), and 8 edges (5+5-8 = 2)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "Which of the following 3D solid shapes has NO flat face, NO straight edge, and NO vertex?",
    options: ["Sphere (e.g. a football)", "Cylinder", "Cone", "Cube"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A sphere is a perfectly smooth continuous curved surface with zero vertices, zero edges, and zero planar faces."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "How many circular flat faces and curved surfaces does a solid Cylinder have?",
    options: ["2 flat circular faces and 1 curved surface", "1 flat face and 2 curved surfaces", "3 flat faces", "0 flat faces"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A cylinder possesses two congruent circular planar end-bases connected by a single lateral curved surface."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "Read the statements regarding Euler's Polyhedral Formula:\nAssertion (A): For every convex 3D polyhedron with F faces, V vertices, and E edges, the equation F + V - E = 2 always holds true.\nReason (R): In a cube, F = 6, V = 8, E = 12; hence 6 + 8 - 12 = 14 - 12 = 2.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Euler's characteristic χ = F + V - E = 2 is a fundamental topological invariant for all simply connected convex polyhedra."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "Spot the IMPOSTER in the following group of triangles classified by their angles:\nGroup: [Acute-angled Triangle, Right-angled Triangle, Obtuse-angled Triangle, Equilateral Triangle]",
    options: ["Acute-angled Triangle", "Right-angled Triangle", "Obtuse-angled Triangle", "Equilateral Triangle"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Equilateral Triangle' is classified based on SIDES (all 3 sides equal), whereas Acute, Right, and Obtuse are classified based on ANGLES."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What is the angle between the hands of a clock at 9:00 PM?",
    options: ["90° (Right angle) or Reflex 270°", "180°", "120°", "60°"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Hour hand at 9, minute hand at 12: separation = 3 hour marks = 3 × 30° = 90°."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "Match Column I (Quadrilaterals) with Column II (Properties of Diagonals):\n(a) Square        -> (i) Diagonals are equal and bisect each other perpendicularly at 90°\n(b) Rectangle     -> (ii) Diagonals are equal and bisect each other (not at 90°)\n(c) Rhombus       -> (iii) Diagonals are unequal and bisect each other perpendicularly at 90°\n(d) Parallelogram -> (iv) Diagonals bisect each other but are neither equal nor perpendicular",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Square = equal & perp; Rectangle = equal; Rhombus = unequal & perp; Parallelogram = bisect only."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "Read the statements:\nStatement 1: A triangle can have two right angles.\nStatement 2: A triangle can have two obtuse angles.\nStatement 3: An obtuse-angled triangle must have two acute angles.\nWhich statements are TRUE?",
    options: ["Statement 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The angle sum of any triangle is strictly 180°. If one angle > 90°, the sum of the remaining two must be < 90° (both acute). Statements 1 and 2 are impossible."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What is the angle traced by the hour hand of a clock between 1:00 PM and 5:00 PM?",
    options: ["120° (4 hours × 30°/hour = 4/12 × 360°)", "90°", "150°", "180°"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Each clock hour span = 360°/12 = 30°. Elapsed time = 4 hours -> 4 × 30° = 120° (Obtuse angle)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "A polygon is 'Regular' if it satisfies which two conditions simultaneously?",
    options: [
      "It is Equilateral (all sides equal) AND Equiangular (all internal angles equal)",
      "It has only 4 sides",
      "It has curved sides",
      "Its diagonals are parallel"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "A regular polygon (like an equilateral triangle or square) has equal edge lengths and congruent interior vertex angles."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "How many total faces, edges, and vertices does an Octahedron (8-faced regular polyhedron formed by joining two square pyramids base-to-base) possess?",
    options: ["8 Faces, 6 Vertices, 12 Edges", "8 Faces, 8 Vertices, 16 Edges", "6 Faces, 8 Vertices, 12 Edges", "8 Faces, 12 Vertices, 6 Edges"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "An octahedron has 8 triangular faces, 6 vertices, and 12 edges (8 + 6 - 12 = 2)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "Which 3D solid shape is formed when a right-angled triangle is rotated 360° continuously about one of its perpendicular legs?",
    options: ["Right Circular Cone", "Cylinder", "Sphere", "Prism"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Revolving a right triangle about an altitude leg sweeps out the circular base and conical apex of a cone."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "Consider a clock at 6:30. What is the angle between the hour hand and the minute hand?",
    options: ["15° (at 6:30, hour hand is halfway between 6 and 7: 30° / 2 = 15°)", "0°", "30°", "45°"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "At 6:30, minute hand is at 6 (180°), and hour hand is at 6.5 (195°). Angle = 195° - 180° = 15°."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "In which of the following quadrilaterals are the diagonals NOT necessarily equal in length?",
    options: ["Rhombus and Parallelogram", "Square", "Rectangle", "Isosceles Trapezium"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "In a rhombus and general parallelogram, one diagonal is longer (spanning obtuse angles) than the other."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 5: Understanding Elementary Shapes",
    question: "What is the sum of all internal angles in a 6-sided Hexagon?",
    options: ["720° ((n - 2) × 180° = (6 - 2) × 180° = 4 × 180°)", "540°", "360°", "900°"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Formula S = (n - 2) × 180°; for n = 6: S = 4 × 180° = 720°."
  }
];

console.log('Generated Math Ch5:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/math_ch5.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
