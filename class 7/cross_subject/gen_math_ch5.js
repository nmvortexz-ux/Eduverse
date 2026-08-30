import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 5: Lines and Angles (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "When the sum of the measures of two angles is exactly 90°, the angles are called:",
    options: ["Complementary Angles", "Supplementary Angles", "Adjacent Angles", "Vertically Opposite Angles"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Two angles are complementary if their sum is 90° (∠A + ∠B = 90°)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "When the sum of the measures of two angles is exactly 180°, the angles are called:",
    options: ["Supplementary Angles", "Complementary Angles", "Linear Pair", "Reflex Angles"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Two angles are supplementary if their sum equals 180° (∠A + ∠B = 180°)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Find the Complement of the angle 30°:",
    options: ["60° (90° - 30° = 60°)", "150°", "70°", "90°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Complement = 90° - 30° = 60°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Find the Supplement of the angle 105°:",
    options: ["75° (180° - 105° = 75°)", "85°", "95°", "65°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Supplement = 180° - 105° = 75°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "An angle which is equal to its own Complement is:",
    options: ["45° (45° + 45° = 90°)", "90°", "30°", "60°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "x + x = 90° → 2x = 90° → x = 45°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "An angle which is equal to its own Supplement is:",
    options: ["90° (90° + 90° = 180° - Right Angle)", "45°", "180°", "60°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "x + x = 180° → 2x = 180° → x = 90°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "When two lines intersect at a point, the vertically opposite angles formed are ALWAYS:",
    options: ["Equal in measure", "Supplementary", "Complementary", "Unequal"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Vertically opposite angles formed by intersecting lines are congruent (equal in measure)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "A line that intersects two or more lines at distinct points is called a:",
    options: ["Transversal", "Parallel line", "Perpendicular line", "Ray"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A transversal is a line intersecting two or more coplanar lines at distinct points."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "A pair of adjacent angles whose non-common arms form a straight line (sum = 180°) is called a:",
    options: ["Linear Pair", "Complementary Pair", "Vertically Opposite Pair", "Alternate Pair"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A linear pair consists of two adjacent angles whose sum is 180° on a straight line."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "If two parallel lines are cut by a transversal, each pair of Alternate Interior Angles is:",
    options: ["Equal in measure", "Supplementary", "Complementary", "Sum to 90°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Alternate interior angles formed by parallel lines cut by a transversal are equal (Z-property)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "If two parallel lines are cut by a transversal, each pair of Corresponding Angles is:",
    options: ["Equal in measure", "Supplementary", "90°", "Unequal"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Corresponding angles situated in identical relative positions at each intersection are equal (F-property)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "If two parallel lines are cut by a transversal, the interior angles on the SAME SIDE of the transversal are:",
    options: ["Supplementary (sum to 180°)", "Equal", "Complementary (sum to 90°)", "Zero"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Consecutive interior angles on the same side of a transversal intersecting parallel lines sum to 180° (C-property)."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Two complementary angles are in the ratio 2 : 3. Find the measure of both angles:",
    options: ["36° and 54° (2x + 3x = 90° ⇒ 5x = 90° ⇒ x = 18° ⇒ 2(18) = 36°, 3(18) = 54°)", "30° and 60°", "40° and 50°", "20° and 70°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "5x = 90° → x = 18°. Angles are 2(18) = 36° and 3(18) = 54°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Two supplementary angles are in the ratio 4 : 5. Find the measure of the larger angle:",
    options: ["100° (4x + 5x = 180° ⇒ 9x = 180° ⇒ x = 20° ⇒ Larger = 5(20) = 100°)", "80°", "120°", "90°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "9x = 180° → x = 20°. Larger angle = 5 × 20° = 100°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "An angle is 24° more than its Complement. Find the measure of the angle:",
    options: ["57° (x = (90° - x) + 24° ⇒ 2x = 114° ⇒ x = 57°)", "33°", "66°", "48°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "x - (90 - x) = 24 → 2x = 114 → x = 57° (Complement = 33°)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "An angle is 44° less than its Supplement. Find the measure of the angle:",
    options: ["68° (x = (180° - x) - 44° ⇒ 2x = 136° ⇒ x = 68°)", "112°", "72°", "56°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "x = 180 - x - 44 → 2x = 136 → x = 68° (Supplement = 112°)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Two lines AB and CD intersect at point O. If ∠AOC = 50°, find the measure of ∠BOD and ∠AOD:",
    options: [
      "∠BOD = 50° (vertically opposite) ; ∠AOD = 130° (linear pair: 180° - 50° = 130°)",
      "∠BOD = 130° ; ∠AOD = 50°",
      "∠BOD = 50° ; ∠AOD = 50°",
      "∠BOD = 40° ; ∠AOD = 140°"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Vertically opposite ∠BOD = ∠AOC = 50°. Linear pair ∠AOD = 180° - 50° = 130°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "In the given linear pair, two angles are (2x - 10)° and (3x + 20)°. Find the value of x:",
    options: [
      "x = 34 ((2x - 10) + (3x + 20) = 180° ⇒ 5x + 10 = 180° ⇒ 5x = 170° ⇒ x = 34)",
      "x = 30",
      "x = 35",
      "x = 38"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "5x + 10 = 180 → 5x = 170 → x = 34. (Angles: 58° and 122°)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Can two ACUTE angles be supplementary to each other?",
    options: [
      "No, because acute angles are strictly < 90°, so their sum is ALWAYS strictly < 180°",
      "Yes, if both angles are 45°",
      "Yes, in right-angled triangles",
      "Always yes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "If ∠A < 90° and ∠B < 90°, ∠A + ∠B < 180°, so two acute angles can never be supplementary."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Can two OBTUSE angles be supplementary to each other?",
    options: [
      "No, because obtuse angles are strictly > 90°, so their sum is ALWAYS strictly > 180°",
      "Yes, if both are 100°",
      "Yes, in pentagons",
      "Always yes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "If ∠A > 90° and ∠B > 90°, ∠A + ∠B > 180°, so two obtuse angles can never be supplementary."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Can two RIGHT angles be supplementary to each other?",
    options: [
      "Yes, because 90° + 90° = exactly 180°",
      "No, right angles can only be complementary",
      "Only in squares",
      "Never"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Two right angles (90° + 90° = 180°) are always supplementary."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "If line l is parallel to line m (l ∥ m) and a transversal t cuts them, one of the interior angles is 65°. What is the measure of the alternate interior angle?",
    options: ["65° (Alternate interior angles are equal)", "115°", "25°", "90°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Alternate interior angles formed by parallel lines cut by a transversal are equal: 65°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "If line l is parallel to line m (l ∥ m) and a transversal cuts them, one interior angle is 70°. What is the interior angle on the SAME SIDE of the transversal?",
    options: ["110° (Consecutive interior angles are supplementary: 180° - 70° = 110°)", "70°", "20°", "180°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Interior angles on the same side sum to 180°: 180° - 70° = 110°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Three angles at a point on a straight line are x°, (x + 20)°, and (x + 40)°. Find the value of x:",
    options: [
      "x = 40 (x + (x + 20) + (x + 40) = 180° ⇒ 3x + 60 = 180° ⇒ 3x = 120° ⇒ x = 40)",
      "x = 30",
      "x = 50",
      "x = 45"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "3x + 60° = 180° → 3x = 120° → x = 40°. (Angles: 40°, 60°, 80°)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "In the figure, four rays meet at a common point O. What is the sum of all angles around a point?",
    options: ["360° (Complete Angle)", "180°", "270°", "90°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The sum of all angles around a single point in a plane is 360° (complete angle)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Two parallel lines are cut by a transversal. If a pair of corresponding angles is represented by (3x - 15)° and (2x + 10)°, find the value of x:",
    options: ["x = 25 (3x - 15 = 2x + 10 ⇒ x = 25)", "x = 20", "x = 30", "x = 15"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Corresponding angles are equal: 3x - 15 = 2x + 10 → x = 25. (Angle = 60°)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "If an angle is five times its own Complement, what is the measure of the angle?",
    options: ["75° (x = 5(90° - x) ⇒ x = 450° - 5x ⇒ 6x = 450° ⇒ x = 75°)", "15°", "60°", "80°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "x = 5(90 - x) → 6x = 450 → x = 75° (Complement = 15°)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "What geometric condition PROVES that two lines are parallel when intersected by a transversal?",
    options: [
      "Any one of the three: (1) Alternate interior angles are equal, OR (2) Corresponding angles are equal, OR (3) Consecutive interior angles are supplementary",
      "The lines meet at a point",
      "The lines are perpendicular",
      "The lines are drawn in blue color"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Euclidean parallel postulates: equality of corresponding/alternate angles or supplementarity of interior angles proves parallelism."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Read the statements:\nAssertion (A): If two parallel lines l and m are intersected by a transversal t, the bisectors of any pair of Alternate Interior Angles are ALWAYS strictly parallel to each other.\nReason (R): The angle bisectors divide the equal alternate interior angles into two equal halves, creating a new pair of equal alternate interior angles for the bisector lines.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Since alternate angles θ₁ = θ₂, their half-angles θ₁/2 = θ₂/2 form equal alternate interior angles, proving bisectors are parallel."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Spot the IMPOSTER among the following geometric statements:\nGroup:\n1. If two lines intersect, vertically opposite angles are always equal.\n2. Adjacent angles of a linear pair are always supplementary.\n3. Two adjacent complementary angles form a right angle (90°).\n4. Two obtuse angles can form a linear pair on a straight line.",
    options: ["Statement 1", "Statement 2", "Statement 3", "Statement 4 (Two obtuse angles sum to > 180°, so they can NEVER form a linear pair)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 4 is an impossible geometric fallacy: two obtuse angles (>90° each) sum to >180° and cannot lie on a straight line."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "In the figure, AB ∥ CD and CD ∥ EF. If y : z = 3 : 7, find the angle x (where x and y are consecutive interior angles between AB and CD, and x and z are alternate interior angles between AB and EF):",
    options: [
      "x = 126° (Since AB ∥ EF, x = z ; Consecutive interior: x + y = 180° ⇒ z + y = 180° ; y:z = 3:7 ⇒ 10k = 180° ⇒ k = 18° ⇒ z = 7(18) = 126° ⇒ x = 126°)",
      "x = 54°",
      "x = 135°",
      "x = 120°"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "x = z (alternate angles across AB ∥ EF). y + z = 180° → 10k = 180° → k = 18° → z = 126° → x = 126°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Match Column I (Angle Relationships for Parallel Lines) with Column II (Geometric Letter Mnemonics / Properties):\n(a) Corresponding Angles         -> (i) 'F' Shape / Congruent (Equal)\n(b) Alternate Interior Angles    -> (ii) 'Z' Shape / Congruent (Equal)\n(c) Consecutive Interior Angles  -> (iii) 'C' or 'U' Shape / Supplementary (Sum = 180°)\n(d) Vertically Opposite Angles   -> (iv) 'X' Shape / Congruent (Equal)",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "F = Corresponding; Z = Alternate; C = Consecutive interior; X = Vertically opposite."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Read the statements regarding lines and rays:\nStatement 1: A line segment has TWO fixed endpoints and a definite length.\nStatement 2: A ray has exactly ONE initial endpoint and extends infinitely in one direction.\nStatement 3: Two distinct lines in a plane can intersect at more than one point.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because two straight lines intersect at at most ONE single point. Statements 1 and 2 are Euclidean definitions."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "An angle's supplement is 10° more than THREE TIMES its complement. Find the measure of the angle:",
    options: [
      "50° (180° - x = 3(90° - x) + 10° ⇒ 180° - x = 270° - 3x + 10° ⇒ 2x = 100° ⇒ x = 50°)",
      "40°",
      "60°",
      "45°"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "180 - x = 3(90 - x) + 10 → 180 - x = 280 - 3x → 2x = 100 → x = 50°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "In the figure, arms of two angles are parallel (AB ∥ DE and BC ∥ EF). If ∠ABC = 70°, what is the measure of ∠DEF?",
    options: [
      "70° (Angles with mutually parallel arms are either equal or supplementary ; here both are acute, so ∠DEF = 70°)",
      "110°",
      "20°",
      "90°"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Parallel arms theorem: if both angle pairs point in the same directional orientation, ∠DEF = ∠ABC = 70°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "If the bisectors of two adjacent supplementary angles are drawn, what is the exact angle formed BETWEEN THE TWO BISECTORS?",
    options: [
      "90° (Always a RIGHT ANGLE: if ∠1 + ∠2 = 180°, then ∠1/2 + ∠2/2 = 180°/2 = 90°)",
      "45°",
      "180°",
      "60°"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Half of supplementary linear pair: θ/2 + (180 - θ)/2 = 90° (perpendicular angle bisectors)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Two parallel lines l and m are cut by transversal t. The interior angles on the same side are (2x + 30)° and (3x - 20)°. Find the value of x and both angles:",
    options: [
      "x = 34 ; Angles are 98° and 82° ((2x + 30) + (3x - 20) = 180° ⇒ 5x + 10 = 180° ⇒ 5x = 170° ⇒ x = 34 ⇒ Angles: 98°, 82°)",
      "x = 30 ; Angles are 90°, 90°",
      "x = 32 ; Angles are 94°, 86°",
      "x = 35 ; Angles are 100°, 80°"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "5x + 10 = 180 → 5x = 170 → x = 34. Angle 1 = 2(34)+30 = 98°; Angle 2 = 3(34)-20 = 82°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Line l ∥ line m. A transversal intersects them. If the exterior angle is (5x - 25)° and its alternate exterior angle is (3x + 15)°, find the measure of this angle:",
    options: ["75° (5x - 25 = 3x + 15 ⇒ 2x = 40 ⇒ x = 20 ⇒ Angle = 5(20) - 25 = 75°)", "65°", "85°", "90°"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Alternate exterior angles are equal: 5x - 25 = 3x + 15 → 2x = 40 → x = 20. Angle = 5(20) - 25 = 75°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "If two parallel lines are intersected by a transversal, what quadrilateral is formed by the bisectors of ALL four interior angles?",
    options: [
      "A RECTANGLE (All four interior angles of the formed quadrilateral are 90°, and opposite sides are parallel)",
      "A Square only",
      "A Rhombus",
      "A Trapezium"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Interior angle bisectors intersect at 90° and form parallel opposite segments, proving the enclosed quadrilateral is a rectangle."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 5: Lines and Angles",
    question: "Why is the rigorous understanding of Lines, Transversals, and Angles foundational in structural engineering, architecture, optical ray tracing, and computer graphics?",
    options: [
      "It provides the exact trigonometric and geometric axioms governing coordinate transformations, structural load balance in trusses, ray reflection/refraction, and 3D rendering projections",
      "Because angles are only used to draw circles",
      "Because parallel lines do not exist in reality",
      "Because transversal lines eliminate the need for calculations"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Euclidean parallel line theory and angle relationships form the mathematical bedrock of structural mechanics, optics, spatial modeling, and vector graphics."
  }
];

console.log('Generated Class 7 Math Ch5:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/math_ch5.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
