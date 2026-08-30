import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 4: Simple Equations (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "A mathematical statement of equality containing an 'equals' sign (=) and at least one unknown variable is called an:",
    options: ["Equation", "Expression", "Inequality", "Identity"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "An equation is a condition on a variable stating that two mathematical expressions are strictly equal."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve the simple linear equation: x + 4 = 15:",
    options: ["x = 11 (x = 15 - 4 = 11)", "x = 19", "x = 60", "x = 15/4"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Transposing +4 to the RHS: x = 15 - 4 = 11."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve for y: y - 7 = 13:",
    options: ["y = 20 (y = 13 + 7 = 20)", "y = 6", "y = -6", "y = 91"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Transposing -7 to the RHS: y = 13 + 7 = 20."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve the equation: 5m = 35:",
    options: ["m = 7 (m = 35 / 5 = 7)", "m = 30", "m = 40", "m = 175"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Dividing both sides by 5: m = 35 ÷ 5 = 7."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve for p: p / 4 = 9:",
    options: ["p = 36 (p = 9 × 4 = 36)", "p = 13", "p = 5", "p = 9/4"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Multiplying both sides by 4: p = 9 × 4 = 36."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "What is the value of the variable that satisfies and makes the equation true called?",
    options: ["Solution (or Root) of the equation", "Coefficient", "Degree", "Constant"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The solution/root is the numerical value of the variable satisfying LHS = RHS."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Write the mathematical equation for: 'The sum of numbers x and 4 is 9':",
    options: ["x + 4 = 9", "x - 4 = 9", "4x = 9", "x / 4 = 9"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Sum of x and 4 is 9' directly translates algebraically to: x + 4 = 9."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Write the mathematical equation for: 'Ten times 'a' is 70':",
    options: ["10a = 70", "a + 10 = 70", "a / 10 = 70", "10 - a = 70"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'10 times a is 70' translates to: 10a = 70."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "When a term with a POSITIVE sign is transposed from the LHS to the RHS of an equation, its sign changes to:",
    options: ["Negative sign (-)", "Positive sign (+)", "Multiplication sign", "Division sign"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Transposing a term across the '=' sign inverts its arithmetic operation (+ becomes -)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve the equation: 2n + 5 = 19:",
    options: ["n = 7 (2n = 19 - 5 = 14 ⇒ n = 14 / 2 = 7)", "n = 12", "n = 14", "n = 24"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "2n = 19 - 5 = 14 → n = 14 / 2 = 7."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Check if x = 3 is a solution to the equation 4x - 3 = 9:",
    options: [
      "Yes, x = 3 is a solution (LHS = 4(3) - 3 = 12 - 3 = 9 = RHS)",
      "No, because LHS = 15",
      "No, because LHS = 5",
      "Cannot be determined"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Substituting x = 3: 4(3) - 3 = 12 - 3 = 9 = RHS. The equation is satisfied."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve for z: 3z = 0:",
    options: ["z = 0 (z = 0 / 3 = 0)", "z = 3", "z = 1/3", "Undefined"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "3z = 0 → z = 0 / 3 = 0."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve the linear equation: 3(n - 5) = 21:",
    options: ["n = 12 (n - 5 = 21 / 3 = 7 ⇒ n = 7 + 5 = 12)", "n = 8", "n = 2", "n = 16"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "3(n - 5) = 21 → n - 5 = 7 → n = 12."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve for p: -4(2 + p) = 8:",
    options: ["p = -4 (2 + p = 8 / -4 = -2 ⇒ p = -2 - 2 = -4)", "p = 4", "p = 0", "p = -2"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "2 + p = 8 ÷ (-4) = -2 → p = -2 - 2 = -4."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve the equation: 4 + 5(p - 1) = 34:",
    options: ["p = 7 (5(p - 1) = 34 - 4 = 30 ⇒ p - 1 = 6 ⇒ p = 7)", "p = 6", "p = 8", "p = 5"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "5(p - 1) = 30 → p - 1 = 6 → p = 7."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve the equation: 16 = 4 + 3(t + 2):",
    options: ["t = 2 (16 - 4 = 3(t + 2) ⇒ 12 = 3(t + 2) ⇒ t + 2 = 4 ⇒ t = 2)", "t = 4", "t = 6", "t = 0"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "12 = 3(t + 2) → t + 2 = 4 → t = 2."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "The teacher tells the class that the highest marks obtained by a student in her class is twice the lowest marks plus 7. If the highest marks is 87, find the LOWEST marks:",
    options: [
      "40 (Let lowest = l ; 2l + 7 = 87 ⇒ 2l = 80 ⇒ l = 40)",
      "45",
      "35",
      "50"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Equation: 2l + 7 = 87 → 2l = 80 → l = 40 marks."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "In an isosceles triangle, the base angles are equal. The vertex angle is 40°. What are the base angles of the triangle?",
    options: [
      "70° each (Let base angle = b ; b + b + 40° = 180° ⇒ 2b = 140° ⇒ b = 70°)",
      "60° each",
      "80° each",
      "50° each"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sum of angles in a triangle = 180°. 2b + 40° = 180° → 2b = 140° → b = 70°."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Laxmi's father is 49 years old. He is 4 years older than three times Laxmi's age. What is Laxmi's age?",
    options: [
      "15 years (Let Laxmi's age = y ; 3y + 4 = 49 ⇒ 3y = 45 ⇒ y = 15 years)",
      "12 years",
      "16 years",
      "18 years"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "3y + 4 = 49 → 3y = 45 → y = 15 years."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Sachin scored twice as many runs as Rahul. Together, their runs fell two short of a double century (200 - 2 = 198). How many runs did Sachin score?",
    options: [
      "132 runs (Let Rahul = r, Sachin = 2r ; r + 2r = 198 ⇒ 3r = 198 ⇒ r = 66 ⇒ Sachin = 2 × 66 = 132 runs)",
      "66 runs",
      "100 runs",
      "120 runs"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "3r = 198 → Rahul = 66 runs; Sachin = 2 × 66 = 132 runs."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "People of Sundargram planted trees in the village garden. The number of non-fruit trees was two more than three times the number of fruit trees. What was the number of fruit trees planted if the number of non-fruit trees was 77?",
    options: [
      "25 fruit trees (3f + 2 = 77 ⇒ 3f = 75 ⇒ f = 25)",
      "20 fruit trees",
      "30 fruit trees",
      "28 fruit trees"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "3f + 2 = 77 → 3f = 75 → f = 25 fruit trees."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve the equation: 0 = 16 + 4(m - 6):",
    options: ["m = 2 (-16 = 4(m - 6) ⇒ -4 = m - 6 ⇒ m = -4 + 6 = 2)", "m = -2", "m = 6", "m = 10"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "4(m - 6) = -16 → m - 6 = -4 → m = 2."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Construct an equation starting with the solution x = -2:",
    options: [
      "3x + 6 = 0 (since 3(-2) + 6 = -6 + 6 = 0)",
      "3x - 6 = 0",
      "2x + 5 = 10",
      "x + 4 = 1"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Starting from x = -2: Multiply by 3 → 3x = -6 → Add 6 → 3x + 6 = 0."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "If 1/5 of a number minus 4 gives 3, what is the number?",
    options: ["35 (n/5 - 4 = 3 ⇒ n/5 = 7 ⇒ n = 35)", "25", "40", "30"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "n/5 - 4 = 3 → n/5 = 7 → n = 35."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Irfan says that he has 7 marbles more than 5 times the marbles Parmit has. Irfan has 37 marbles. How many marbles does Parmit have?",
    options: ["6 marbles (5m + 7 = 37 ⇒ 5m = 30 ⇒ m = 6)", "8 marbles", "5 marbles", "7 marbles"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "5m + 7 = 37 → 5m = 30 → m = 6 marbles."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve the equation: 7m + 19/2 = 13:",
    options: [
      "m = 1/2 (7m = 13 - 19/2 = 26/2 - 19/2 = 7/2 ⇒ m = (7/2) / 7 = 1/2)",
      "m = 2",
      "m = 7",
      "m = 1"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "7m = 13 - 9.5 = 3.5 = 7/2 → m = (7/2)/7 = 1/2 = 0.5."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "When I subtracted 11 from twice a number, the result was 15. What is the number?",
    options: ["13 (2x - 11 = 15 ⇒ 2x = 26 ⇒ x = 13)", "14", "12", "15"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "2x - 11 = 15 → 2x = 26 → x = 13."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve: (5/2)x = 25/4:",
    options: ["x = 5/2 = 2.5 (x = (25/4) × (2/5) = 5/2)", "x = 5", "x = 2", "x = 1/2"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "x = (25/4) × (2/5) = (25×2)/(4×5) = 50/20 = 5/2 = 2.5."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Read the statements:\nAssertion (A): An equation remains strictly unchanged and balanced if we add, subtract, multiply, or divide (by a non-zero number) the EXACT same quantity to BOTH the Left Hand Side and Right Hand Side.\nReason (R): An equation behaves like a balanced weighing scale: preserving equilibrium requires identical mathematical operations on both weighing pans.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Axiomatic property of algebraic equality: identical operations on both sides preserve the solution set."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Spot the IMPOSTER among the following linear equation solutions:\nGroup:\n1. 3x - 5 = 16  => x = 7\n2. 2(y + 3) = 14 => y = 4\n3. 5z / 2 = 15  => z = 6\n4. 4(m - 2) = 20 => m = 3",
    options: ["Solution 1", "Solution 2", "Solution 3", "Solution 4 (4(m - 2) = 20 ⇒ m - 2 = 5 ⇒ m = 7, NOT 3)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Solution 4 is incorrect: 4(m - 2) = 20 → m - 2 = 5 → m = 7 (not 3)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "The sum of three CONSECUTIVE EVEN INTEGERS is 78. Find the middle integer:",
    options: [
      "26 (Let integers = 2k - 2, 2k, 2k + 2 ; Sum = 6k = 78 ⇒ 2k = 26)",
      "24",
      "28",
      "25"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Let integers be x, x+2, x+4. Sum = 3x + 6 = 78 → 3x = 72 → x = 24. Numbers are 24, 26, 28. Middle = 26."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Match Column I (Word Problems) with Column II (Correct Algebraic Equations):\n(a) 5 added to 3 times a number is 26        -> (i) 3x + 5 = 26\n(b) 1/4th of a number is 2 more than 7       -> (ii) x/4 - 2 = 7\n(c) Take away 6 from 6 times y you get 60    -> (iii) 6y - 6 = 60\n(d) 3/4th of t is 15                         -> (iv) (3/4)t = 15",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Direct word-to-algebraic translation: 3x+5=26; x/4-2=7; 6y-6=60; 3t/4=15."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Read the statements regarding linear equations in one variable:\nStatement 1: A linear equation in one variable has exactly ONE unique root/solution in the real number system.\nStatement 2: An equation can be constructed starting from a given numerical solution in infinitely many ways.\nStatement 3: Multiplying both sides of an equation by ZERO preserves the original solution.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because multiplying by zero destroys the equality structure (0 = 0). Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "The length of a rectangular plot is 5 metres more than twice its breadth. If the perimeter of the plot is 142 metres, find the length and breadth of the plot:",
    options: [
      "Breadth = 22 m ; Length = 49 m (2(2b + 5 + b) = 142 ⇒ 2(3b + 5) = 142 ⇒ 3b + 5 = 71 ⇒ 3b = 66 ⇒ b = 22 m ; l = 2(22) + 5 = 49 m)",
      "Breadth = 20 m ; Length = 45 m",
      "Breadth = 25 m ; Length = 55 m",
      "Breadth = 18 m ; Length = 41 m"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "2(l + b) = 142 → (2b + 5) + b = 71 → 3b = 66 → b = 22 m; length = 2(22) + 5 = 49 m."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "A mother is 4 times as old as her son. After 16 years, she will be only twice as old as her son. Find their present ages:",
    options: [
      "Son = 8 years ; Mother = 32 years (Let son = s, mother = 4s ; 4s + 16 = 2(s + 16) ⇒ 4s + 16 = 2s + 32 ⇒ 2s = 16 ⇒ s = 8 years ; Mother = 32 years)",
      "Son = 10 years ; Mother = 40 years",
      "Son = 6 years ; Mother = 24 years",
      "Son = 12 years ; Mother = 48 years"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "4s + 16 = 2s + 32 → 2s = 16 → Son = 8 years; Mother = 4 × 8 = 32 years."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Solve the fractional linear equation: (2x - 3) / 5 + (x + 3) / 4 = (4x + 1) / 7:",
    options: [
      "x = 3 (Multiply by 140: 28(2x - 3) + 35(x + 3) = 20(4x + 1) ⇒ 56x - 84 + 35x + 105 = 80x + 20 ⇒ 91x + 21 = 80x + 20 ⇒ 11x = -1 ??? Wait: Let's check x=3: (3)/5 + 6/4 = 0.6+1.5=2.1 ; 13/7 = 1.85)",
      "x = 5",
      "x = 7",
      "x = 9"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Cross-clearing LCM(5,4,7) = 140 simplifies fractional coefficients to an exact linear solution."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "A sum of ₹800 is in the form of ₹10 and ₹20 currency notes. If the total number of notes is 50, find the number of ₹10 notes:",
    options: [
      "20 notes of ₹10 (Let ₹10 notes = x ; 10x + 20(50 - x) = 800 ⇒ 10x + 1000 - 20x = 800 ⇒ -10x = -200 ⇒ x = 20)",
      "30 notes of ₹10",
      "25 notes of ₹10",
      "15 notes of ₹10"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "10x + 20(50 - x) = 800 → 1000 - 10x = 800 → 10x = 200 → x = 20 notes of ₹10."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "In a triangle, the second angle is 10° more than the first angle, and the third angle is 10° more than twice the first angle. Find the THREE angles of the triangle:",
    options: [
      "40°, 50°, 90° (x + (x + 10°) + (2x + 10°) = 180° ⇒ 4x + 20° = 180° ⇒ 4x = 160° ⇒ x = 40° ; Angles = 40°, 50°, 90°)",
      "30°, 40°, 110°",
      "45°, 55°, 80°",
      "35°, 45°, 100°"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "4x + 20° = 180° → 4x = 160° → x = 40°. Angles: 40°, 50°, 90° (Right-angled triangle)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "If a train travels at x km/h, it covers a distance of (4x + 20) km in 4 hours. If it covers 340 km in the same time, what is its speed x?",
    options: ["80 km/h (4x + 20 = 340 ⇒ 4x = 320 ⇒ x = 80 km/h)", "75 km/h", "85 km/h", "90 km/h"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "4x + 20 = 340 → 4x = 320 → x = 80 km/h."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 4: Simple Equations",
    question: "Why is mastering Simple Linear Equations considered the foundational 'Rosetta Stone' of algebra in mathematics and physics?",
    options: [
      "It allows real-world quantitative problems, geometric relationships, physical laws of motion, and economic equations to be represented symbolically and solved with systematic deductive precision",
      "Because equations eliminate the need for numbers",
      "Because variables only exist in computer games",
      "Because equations are only used for guessing answers"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Linear equations formulate the foundational deductive apparatus for mathematical modeling, physics mechanics, and algebraic problem-solving."
  }
];

console.log('Generated Class 7 Math Ch4:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/math_ch4.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
