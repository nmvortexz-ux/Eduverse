import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 6: The Triangle and its Properties (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "A line segment connecting a vertex of a triangle to the MIDPOINT of the opposite side is called a:",
    options: ["Median", "Altitude", "Angle Bisector", "Perpendicular Bisector"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A median connects a triangle's vertex to the midpoint of the opposing side. Every triangle has 3 medians meeting at the centroid."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "The perpendicular line segment drawn from a vertex of a triangle to the opposite side (or its extension) is called an:",
    options: ["Altitude (or Height)", "Median", "Hypotenuse", "Diagonal"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An altitude is the perpendicular line dropped from a vertex to the opposite base line."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "What is the sum of the measures of all three interior angles of ANY triangle on a flat plane (Angle Sum Property)?",
    options: ["180° (Two Right Angles)", "360°", "90°", "270°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Euclidean angle sum property: ∠A + ∠B + ∠C = 180° for all triangles."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "According to the Exterior Angle Property of a triangle, an exterior angle is ALWAYS equal to:",
    options: ["The sum of its two interior opposite angles", "180° minus the adjacent angle only", "90°", "The sum of all three angles"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Exterior Angle Property: ∠Ext = ∠Int_opp1 + ∠Int_opp2."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In an Equilateral Triangle, what is the measure of EACH of the three interior angles?",
    options: ["60° (All three angles are strictly equal: 180° / 3 = 60°)", "45°", "90°", "30°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "All three sides and all three angles are equal in an equilateral triangle: 180° / 3 = 60°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In an Isosceles Triangle, if two sides are equal in length, what is true about the angles OPPOSITE to those equal sides?",
    options: ["The angles opposite to equal sides are ALWAYS equal in measure", "They sum to 90°", "They are unequal", "One is always 90°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Base angles theorem: in an isosceles triangle, angles opposite to equal sides are congruent."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "According to the Triangle Inequality Property, the sum of the lengths of any two sides of a triangle must ALWAYS be:",
    options: ["Strictly GREATER than the length of the third side (a + b > c)", "Equal to the third side", "Less than the third side", "Zero"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Triangle inequality axiom: for any valid triangle with side lengths a, b, c: a + b > c, b + c > a, and c + a > b."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In a Right-Angled Triangle, the side opposite to the 90° right angle is the longest side, called the:",
    options: ["Hypotenuse", "Base", "Altitude", "Median"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The hypotenuse is the side opposing the 90° right angle and is the longest side of a right-angled triangle."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "What is the famous Pythagoras Theorem formula for a right-angled triangle with legs a, b and hypotenuse c?",
    options: ["a² + b² = c² (Hypotenuse² = Base² + Perpendicular²)", "a + b = c", "a² - b² = c²", "a × b = c²"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Pythagorean Theorem: in any right-angled triangle, Hypotenuse² = Perpendicular² + Base² (c² = a² + b²)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Two angles of a triangle are 50° and 70°. Find the measure of the third angle:",
    options: ["60° (180° - (50° + 70°) = 180° - 120° = 60°)", "50°", "70°", "80°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Third angle = 180° - (50° + 70°) = 180° - 120° = 60°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "An exterior angle of a triangle is 110°, and one of the interior opposite angles is 40°. Find the other interior opposite angle:",
    options: ["70° (110° - 40° = 70°)", "80°", "60°", "50°"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ext angle = Int1 + Int2 → 110° = 40° + x → x = 70°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Can a triangle have two RIGHT angles (90° + 90°)?",
    options: [
      "No, because two right angles sum to 180°, leaving 0° for the third angle, making a triangle impossible",
      "Yes, in right isosceles triangles",
      "Yes, in large triangles",
      "Always yes"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Two 90° angles sum to 180°, which violates the angle sum property since the third angle must be strictly positive."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "The three interior angles of a triangle are in the ratio 1 : 2 : 3. Find the measure of each angle:",
    options: ["30°, 60°, and 90° (x + 2x + 3x = 180° ⇒ 6x = 180° ⇒ x = 30° ⇒ 30°, 60°, 90°)", "20°, 40°, 120°", "45°, 45°, 90°", "30°, 75°, 75°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "6x = 180° → x = 30°. Angles are 1(30) = 30°, 2(30) = 60°, and 3(30) = 90°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In an Isosceles Triangle, the vertex angle is 40°. What is the measure of each equal base angle?",
    options: ["70° each ((180° - 40°) / 2 = 140° / 2 = 70°)", "60° each", "80° each", "50° each"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "2x + 40° = 180° → 2x = 140° → x = 70°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Which of the following sets of side lengths CAN form a valid triangle?",
    options: [
      "6 cm, 8 cm, 10 cm (Since 6 + 8 > 10, 6 + 10 > 8, and 8 + 10 > 6)",
      "2 cm, 3 cm, 6 cm (2 + 3 = 5 < 6, impossible)",
      "3 cm, 4 cm, 7 cm (3 + 4 = 7, not strictly greater, impossible)",
      "1 cm, 2 cm, 5 cm (1 + 2 = 3 < 5, impossible)"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Only 6, 8, 10 satisfies the strict triangle inequality theorem (6 + 8 = 14 > 10)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In a right-angled triangle, the lengths of the two legs are 3 cm and 4 cm. What is the length of the hypotenuse?",
    options: ["5 cm (Hypotenuse = √(3² + 4²) = √(9 + 16) = √25 = 5 cm)", "7 cm", "6 cm", "8 cm"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "c = √(3² + 4²) = √(9 + 16) = √25 = 5 cm (classic 3-4-5 Pythagorean triplet)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "A 15 m long ladder reaches a window 12 m high from the ground on placing it against a wall. Find the distance of the foot of the ladder from the wall:",
    options: [
      "9 m (Distance = √(15² - 12²) = √(225 - 144) = √81 = 9 m)",
      "6 m",
      "8 m",
      "10 m"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Base = √(15² - 12²) = √(225 - 144) = √81 = 9 m."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "The lengths of two sides of a triangle are 12 cm and 15 cm. Between what two whole numbers must the length of the third side lie?",
    options: [
      "Between 3 cm and 27 cm (Difference: 15 - 12 = 3 cm < third side < Sum: 15 + 12 = 27 cm)",
      "Between 12 cm and 15 cm",
      "Between 0 cm and 12 cm",
      "Between 5 cm and 30 cm"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Third side range: (15 - 12) < side < (15 + 12) → 3 cm < x < 27 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "A tree broke at a height of 5 m from the ground and its top touched the ground at a distance of 12 m from the base of the tree. Find the ORIGINAL full height of the tree:",
    options: [
      "18 m (Broken broken part = √(5² + 12²) = √(25 + 144) = √169 = 13 m ; Total height = 5 + 13 = 18 m)",
      "17 m",
      "13 m",
      "20 m"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Hypotenuse = √(5² + 12²) = 13 m. Total original tree height = standing trunk (5 m) + fallen crown (13 m) = 18 m."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In ΔABC, if ∠B = 35° and ∠C = 55°, which of the following is true?",
    options: [
      "AB² + BC² = AC² is FALSE, but AB² + AC² = BC² is TRUE (Since ∠A = 180° - (35°+55°) = 90°, so BC is the hypotenuse: AB² + AC² = BC²)",
      "AB² + BC² = AC²",
      "BC² + AC² = AB²",
      "AB + BC = AC"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "∠A = 180° - 90° = 90°. The right angle is at A, so opposite side BC is the hypotenuse: AB² + AC² = BC²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Find the perimeter of the rectangle whose length is 40 cm and diagonal is 41 cm:",
    options: [
      "98 cm (Breadth = √(41² - 40²) = √(1681 - 1600) = √81 = 9 cm ; Perimeter = 2(40 + 9) = 2(49) = 98 cm)",
      "82 cm",
      "100 cm",
      "90 cm"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Width = √(41² - 40²) = √81 = 9 cm. Perimeter = 2(l + w) = 2(40 + 9) = 98 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "The diagonals of a rhombus measure 16 cm and 12 cm. Find its perimeter:",
    options: [
      "40 cm (Diagonals bisect at 90°: half-lengths are 8 cm and 6 cm ; Side = √(8² + 6²) = √(64 + 36) = √100 = 10 cm ; Perimeter = 4 × 10 = 40 cm)",
      "28 cm",
      "48 cm",
      "56 cm"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rhombus side = √(8² + 6²) = 10 cm. Perimeter = 4 × 10 = 40 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Can an OBTUSE-ANGLED triangle have an altitude that lies OUTSIDE the triangle?",
    options: [
      "Yes, two of the altitudes in an obtuse-angled triangle fall outside the triangle onto the extended opposite sides",
      "No, altitudes are always strictly inside",
      "Only in right triangles",
      "Never"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "In an obtuse triangle, altitudes drawn from acute vertices fall on extended bases outside the triangular boundary."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In ΔPQR, D is the midpoint of side QR. What is line segment PM (where PM ⊥ QR) and line segment PD?",
    options: [
      "PM is an ALTITUDE ; PD is a MEDIAN",
      "PM is a median ; PD is an altitude",
      "Both are medians",
      "Both are altitudes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "PM is perpendicular (altitude); PD joins vertex P to midpoint D of base QR (median)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "An exterior angle of a triangle is 120°, and the two interior opposite angles are EQUAL to each other. Find the measure of each interior opposite angle:",
    options: ["60° each (2x = 120° ⇒ x = 60°)", "50° each", "40° each", "70° each"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "x + x = 120° → 2x = 120° → x = 60°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "One of the acute angles of a right-angled triangle is 35°. What is the measure of the other acute angle?",
    options: ["55° (90° - 35° = 55°)", "45°", "65°", "35°"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The two acute angles in a right-angled triangle are complementary: 90° - 35° = 55°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In an equilateral triangle ΔABC, an altitude AD is drawn from A to BC. What special property does AD have?",
    options: [
      "In an equilateral triangle, Altitude AD is ALSO the Median (it bisects the opposite side BC) and also the Angle Bisector of ∠A",
      "AD only measures 1 cm",
      "AD is parallel to BC",
      "AD lies outside the triangle"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Symmetry of equilateral triangles: altitude, median, angle bisector, and perpendicular bisector coincide along the same axis."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Which of the following is a classic PYTHAGOREAN TRIPLET?",
    options: ["(5, 12, 13) since 5² + 12² = 25 + 144 = 169 = 13²", "(4, 5, 6)", "(2, 3, 4)", "(6, 7, 8)"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "5² + 12² = 25 + 144 = 169 = 13², confirming (5, 12, 13) is a primitive Pythagorean triplet."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Read the statements:\nAssertion (A): In any triangle ΔABC, the point of intersection of all three Medians (Centroid G) ALWAYS lies strictly INSIDE the interior of the triangle.\nReason (R): Each median connects a vertex to the interior midpoint of the opposite side, so their common concurrence centroid G is guaranteed by convexity to be inside the triangular perimeter.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The centroid is the center of gravity of the triangle and always lies strictly within the convex interior hull."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Spot the IMPOSTER in the following geometric triangle theorems:\nGroup:\n1. Angle sum of a triangle is always 180°.\n2. Exterior angle equals the sum of two interior opposite angles.\n3. The sum of any two side lengths is strictly greater than the third side.\n4. In any triangle, the longest side is opposite to the smallest angle.",
    options: ["Theorem 1", "Theorem 2", "Theorem 3", "Theorem 4 (In any triangle, the LONGEST side is opposite to the LARGEST angle, not the smallest)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Theorem 4 is false: side-angle inequality dictates that the longest side lies opposite the largest angle."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In ΔABC, AM is a median on side BC. Prove that:\nAB + BC + CA > 2 AM\nWhy is this inequality strictly true?",
    options: [
      "In ΔABM: AB + BM > AM ; In ΔACM: AC + MC > AM ; Adding both: AB + (BM + MC) + AC > 2AM ⇒ AB + BC + CA > 2AM",
      "Because all sides of ΔABC are equal to AM",
      "Because AM is perpendicular to BC",
      "Because triangles have no perimeter"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Applying triangle inequality to ΔABM and ΔACM: (AB + BM) + (AC + MC) > AM + AM → AB + BC + AC > 2AM."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Match Column I (Triangle Concurrence Centers) with Column II (Defining Line Intersections):\n(a) Centroid      -> (i) Concurrence point of all 3 Medians (divides each median in 2:1 ratio)\n(b) Orthocentre   -> (ii) Concurrence point of all 3 Altitudes\n(c) Incentre      -> (iii) Concurrence point of all 3 Internal Angle Bisectors\n(d) Circumcentre  -> (iv) Concurrence point of all 3 Perpendicular Bisectors of sides",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Centroid = medians; Orthocentre = altitudes; Incentre = angle bisectors; Circumcentre = perpendicular bisectors."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Read the statements regarding right triangles and Pythagoras property:\nStatement 1: For any positive integer m > 1, the triplet (2m, m² - 1, m² + 1) ALWAYS forms a Pythagorean triplet.\nStatement 2: If m = 4, the triplet generated is (8, 15, 17) where 8² + 15² = 64 + 225 = 289 = 17².\nStatement 3: In an obtuse-angled triangle, a² + b² = c² where c is the longest side.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (in obtuse triangles, a² + b² < c²). Statements 1 and 2 represent algebraic Pythagorean generator formulas."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In a quadrilateral ABCD, prove that:\nAB + BC + CD + DA > AC + BD\nWhat is the geometric justification?",
    options: [
      "In ΔABC: AB + BC > AC ; In ΔADC: CD + DA > AC ; In ΔABD: AB + DA > BD ; In ΔBCD: BC + CD > BD ; Adding all four inequalities and dividing by 2 gives AB + BC + CD + DA > AC + BD",
      "Because diagonals are always zero",
      "Because all quadrilaterals are squares",
      "Because perimeter equals area"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Sum of 4 triangle inequalities: 2(AB + BC + CD + DA) > 2(AC + BD) → AB + BC + CD + DA > AC + BD."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Let O be any interior point in ΔABC. Which of the following inequalities is strictly true?",
    options: [
      "OA + OB + OC > 1/2 (AB + BC + CA) (In ΔOAB: OA + OB > AB ; ΔOBC: OB + OC > BC ; ΔOCA: OC + OA > CA ; Adding gives 2(OA+OB+OC) > AB+BC+CA)",
      "OA + OB + OC < 1/2 (AB + BC + CA)",
      "OA + OB + OC = AB + BC + CA",
      "OA = OB = OC = 0"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Triangle inequality on the three sub-triangles meeting at O gives 2(OA + OB + OC) > AB + BC + CA → OA + OB + OC > ½(AB + BC + CA)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In an isosceles right-angled triangle, if each of the two equal perpendicular legs is of length 'x', what is the length of the hypotenuse?",
    options: ["x√2 (Hypotenuse = √(x² + x²) = √(2x²) = x√2)", "2x", "x / 2", "x²"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "c = √(x² + x²) = √(2x²) = x√2 (the 45°-45°-90° special right triangle)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Two poles of height 6 m and 11 m stand vertically on a plane ground. If the horizontal distance between their feet is 12 m, find the direct distance between their tops:",
    options: [
      "13 m (Vertical difference = 11 - 6 = 5 m ; Top distance = √(5² + 12²) = √(25 + 144) = √169 = 13 m)",
      "12 m",
      "14 m",
      "15 m"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Right triangle formed with base 12 m and vertical height (11 - 6) = 5 m. Distance = √(5² + 12²) = 13 m."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "In ΔPQR, the bisectors of interior ∠Q and interior ∠R meet at point O. What is the measure of ∠QOR in terms of ∠P?",
    options: [
      "∠QOR = 90° + (1/2) ∠P",
      "∠QOR = 90° - (1/2) ∠P",
      "∠QOR = 180° - ∠P",
      "∠QOR = 2 ∠P"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "In ΔQOR: ∠QOR = 180° - (∠Q/2 + ∠R/2) = 180° - ((180° - ∠P)/2) = 180° - 90° + ∠P/2 = 90° + ∠P/2."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "If a line segment drawn from a vertex of a triangle is BOTH an altitude and a median to the opposite side, what type of triangle is it?",
    options: [
      "It is at least an ISOSCELES TRIANGLE (and if true for all 3 vertices, an Equilateral Triangle)",
      "It is a Scalene triangle only",
      "It is a circle",
      "It is an impossible line"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "By SAS congruence of the two divided sub-triangles (common altitude, equal divided base, 90° angle), the adjacent sides are equal, proving it is isosceles."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 6: The Triangle and its Properties",
    question: "Why is the Triangle considered the most rigid and fundamental structural element in civil engineering, bridge truss design, and geodesic domes?",
    options: [
      "A triangle is geometrically RIGID: once the three side lengths are fixed, its angles are locked and cannot deform without bending or breaking the sides (unlike quadrilaterals)",
      "Because triangles are made of gold",
      "Because triangles have zero weight",
      "Because triangles eliminate gravity"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Triangulation provides structural rigidity (SSS uniqueness theorem): pin-jointed triangular frames cannot flex under shear loads."
  }
];

console.log('Generated Class 7 Math Ch6:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/math_ch6.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
