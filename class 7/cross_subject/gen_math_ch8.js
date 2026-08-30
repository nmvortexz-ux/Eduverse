import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 8: Rational Numbers (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "A number that can be written in the form p/q, where p and q are integers and q ≠ 0, is called a:",
    options: ["Rational Number", "Natural Number only", "Whole Number only", "Irrational Number"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A rational number is defined as the quotient p/q of two integers where denominator q ≠ 0."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "In the rational number -4/7, what are the Numerator and the Denominator?",
    options: ["Numerator = -4 ; Denominator = 7", "Numerator = 7 ; Denominator = -4", "Numerator = 4 ; Denominator = 7", "Numerator = -7 ; Denominator = 4"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In p/q, the integer p is the numerator (-4) and q is the non-zero denominator (7)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Which of the following is a POSITIVE Rational Number?",
    options: ["-3 / -5 (Both numerator and denominator are negative, so -3 / -5 = 3 / 5 > 0)", "-3 / 5", "3 / -5", "-7 / 9"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A rational number is positive if numerator and denominator share the same sign: (-3)/(-5) = 3/5 > 0."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Which of the following is a NEGATIVE Rational Number?",
    options: ["-5 / 8", "3 / 7", "-4 / -9", "0 / 1"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A rational number is negative if numerator and denominator have opposite signs (-5/8 < 0)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Is the number '0' (Zero) a Rational Number?",
    options: [
      "Yes, because 0 can be written as 0/1, 0/5, or 0/(-3) where denominator is non-zero",
      "No, 0 is not a number",
      "Only in algebra",
      "No, because denominator must be 0"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "0 = 0/q (where q is any non-zero integer), so zero is a valid rational number (neither positive nor negative)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the Standard Form (simplest reduced form) of the rational number -36 / 24:",
    options: ["-3 / 2 (Dividing numerator and denominator by HCF = 12)", "-18 / 12", "-9 / 6", "-4 / 3"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Standard form: divide by GCD(36, 24) = 12 → (-36/12) / (24/12) = -3/2."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "What is the Additive Inverse of the rational number 7/9?",
    options: ["-7/9 (Since 7/9 + (-7/9) = 0)", "9/7", "-9/7", "1"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The additive inverse of a/b is -a/b such that their sum equals the additive identity 0."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "What is the Multiplicative Inverse (Reciprocal) of the rational number -5/8?",
    options: ["-8/5 (Since (-5/8) × (-8/5) = 1)", "5/8", "8/5", "-1"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The multiplicative inverse of p/q is q/p such that their product equals the multiplicative identity 1."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Which rational number has NO Multiplicative Inverse (no reciprocal)?",
    options: ["0 (Zero, because 1/0 is undefined / division by zero is not permitted)", "1", "-1", "1/2"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "0 has no reciprocal because division by zero (1/0) is mathematically undefined."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Which two rational numbers are their OWN reciprocals (multiplicative inverses of themselves)?",
    options: ["1 and -1 (Reciprocal of 1 is 1 ; Reciprocal of -1 is -1)", "0 and 1", "2 and -2", "1/2 and 2"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "1/1 = 1 and 1/(-1) = -1, making 1 and -1 unique self-reciprocals."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the Sum: 7/3 + (-5/3):",
    options: ["2/3 ((7 - 5) / 3 = 2/3)", "12/3", "-2/3", "4/3"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "(7/3) + (-5/3) = (7 - 5)/3 = 2/3."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the Product: (-9/2) × (-7/4):",
    options: ["63/8 ((-9 × -7) / (2 × 4) = 63 / 8)", "-63/8", "63/6", "-16/6"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Product = ((-9) × (-7)) / (2 × 4) = 63/8."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "How many rational numbers exist between ANY two distinct rational numbers on the number line?",
    options: [
      "INFINITELY MANY rational numbers (Dense Property of Rational Numbers)",
      "Exactly one",
      "Only 10",
      "None"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The set of rational numbers is dense: between any two rational numbers a and b, there exist infinitely many rational numbers."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the Sum: 5/4 + (-11/4):",
    options: ["-3/2 ((5 - 11) / 4 = -6/4 = -3/2)", "-6/4", "-16/4", "3/2"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(5 - 11)/4 = -6/4 = -3/2."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the Sum: (-9/10) + 22/15:",
    options: [
      "17/30 (LCM of 10, 15 is 30 ; (-27 + 44) / 30 = 17 / 30)",
      "13/30",
      "31/30",
      "15/30"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "LCM(10, 15) = 30. (-27 + 44)/30 = 17/30."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the Difference: 5/63 - (-6/21):",
    options: [
      "23/63 (LCM of 63, 21 is 63 ; 5/63 + 18/63 = 23 / 63)",
      "13/63",
      "11/63",
      "-1/63"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "5/63 - (-6/21) = 5/63 + 18/63 = 23/63."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the Value of: (-1/8) ÷ 3/4:",
    options: [
      "-1/6 ((-1/8) × (4/3) = -4 / 24 = -1 / 6)",
      "-3/32",
      "-1/2",
      "-2/3"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(-1/8) ÷ (3/4) = (-1/8) × (4/3) = -4/24 = -1/6."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Which of the following rational numbers is GREATER: -4/5 or -5/6?",
    options: [
      "-4/5 is greater (Convert to common denominator 30: -4/5 = -24/30 and -5/6 = -25/30 ; Since -24 > -25, -4/5 > -5/6)",
      "-5/6 is greater",
      "Both are equal",
      "Cannot be compared"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "-24/30 > -25/30, hence -4/5 > -5/6."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Express -3/5 as a rational number with Denominator = 20:",
    options: ["-12/20 (Multiply numerator and denominator by 4: (-3 × 4)/(5 × 4) = -12/20)", "-15/20", "-9/20", "12/20"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(-3 × 4)/(5 × 4) = -12/20."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Which pair of rational numbers represents the SAME EQUIVALENT rational number?",
    options: [
      "-16/20 and 20/-25 (Both simplify to -4/5 in standard form)",
      "-7/21 and 3/9",
      "-2/-3 and 2/-3",
      "1/3 and -1/9"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "-16/20 = -4/5 and 20/(-25) = -4/5, making them strictly equivalent."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the Value of: (-4/5) × (-5/4):",
    options: ["1 (Product of a non-zero rational number and its reciprocal is always 1)", "-1", "0", "16/25"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(-4/5) × (-5/4) = 20/20 = 1."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the Value of: (-7/12) ÷ (-2/13):",
    options: [
      "91/24 ((-7/12) × (-13/2) = 91 / 24)",
      "-91/24",
      "14/156",
      "-14/156"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(-7/12) ÷ (-2/13) = (-7/12) × (-13/2) = 91/24."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "What number should be added to -5/8 so as to get -3/2?",
    options: [
      "-7/8 (x = -3/2 - (-5/8) = -3/2 + 5/8 = (-12 + 5)/8 = -7/8)",
      "7/8",
      "-11/8",
      "-17/8"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "x = -3/2 - (-5/8) = -12/8 + 5/8 = -7/8."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "What number should be subtracted from -2/3 to get -1/6?",
    options: [
      "-1/2 (x = -2/3 - (-1/6) = -2/3 + 1/6 = (-4 + 1)/6 = -3/6 = -1/2)",
      "1/2",
      "-5/6",
      "5/6"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "-2/3 - x = -1/6 → x = -2/3 + 1/6 = -3/6 = -1/2."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "The product of two rational numbers is -9/16. If one of the numbers is -4/3, find the other number:",
    options: [
      "27/64 (Other number = (-9/16) ÷ (-4/3) = (-9/16) × (-3/4) = 27 / 64)",
      "-27/64",
      "12/48",
      "3/4"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "x = (-9/16) ÷ (-4/3) = (-9/16) × (-3/4) = 27/64."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Write three rational numbers between -2 and -1:",
    options: [
      "-7/4, -6/4 (-3/2), and -5/4 (Converting to denominator 4: -8/4 and -4/4)",
      "-1/2, 0, 1/2",
      "-3, -4, -5",
      "1, 2, 3"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "-2 = -8/4 and -1 = -4/4. Intervening rational numbers: -7/4, -6/4, -5/4."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Arrange the rational numbers -3/5, -2/5, -1/5 in ASCENDING order (smallest to largest):",
    options: ["-3/5 < -2/5 < -1/5", "-1/5 < -2/5 < -3/5", "-2/5 < -3/5 < -1/5", "-3/5 < -1/5 < -2/5"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "With identical positive denominators, compare numerators: -3 < -2 < -1, so -3/5 < -2/5 < -1/5."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the mean (average) of the rational numbers 1/3 and 1/2:",
    options: [
      "5/12 (Mean = (1/3 + 1/2) / 2 = (5/6) / 2 = 5/12)",
      "2/5",
      "1/5",
      "7/12"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mean = ½(1/3 + 1/2) = ½(5/6) = 5/12 (lies strictly between 1/3 and 1/2)."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Read the statements:\nAssertion (A): The set of Rational Numbers (ℚ) is closed under Addition, Subtraction, and Multiplication, but NOT closed under Division.\nReason (R): Division of any rational number by the rational number '0' (Zero) is undefined in mathematics.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "ℚ is closed under +, -, ×, but division by 0 is undefined, so ℚ is not closed under division unless 0 is excluded."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Spot the IMPOSTER in the following mathematical properties of Rational Numbers:\nGroup:\n1. Addition of rational numbers is Commutative (a + b = b + a)\n2. Multiplication of rational numbers is Associative (a × (b × c) = (a × b) × c)\n3. Multiplication is Distributive over Addition (a × (b + c) = a×b + a×c)\n4. Subtraction of rational numbers is Commutative (a - b = b - a)",
    options: ["Property 1", "Property 2", "Property 3", "Property 4 (Subtraction is NOT commutative ; for example: 2/3 - 1/3 = 1/3 ≠ 1/3 - 2/3 = -1/3)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Subtraction and division are non-commutative operations on rational numbers (a - b ≠ b - a)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Evaluate the arithmetic expression using distributive property:\n(-3/5) × (3/7) + (2/5) × (3/7):",
    options: [
      "-3/35 ((3/7) × (-3/5 + 2/5) = (3/7) × (-1/5) = -3 / 35)",
      "3/35",
      "-1/7",
      "1/5"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Distributive property: 3/7 × (-3/5 + 2/5) = 3/7 × (-1/5) = -3/35."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Match Column I (Rational Operations) with Column II (Evaluated Values in Simplest Form):\n(a) (-3/7) + (5/14)        -> (i) -1/14\n(b) (-2/3) - (-5/6)        -> (ii) 1/6\n(c) (-8/9) × (-27/16)      -> (iii) 3/2\n(d) (-3/5) ÷ (9/10)        -> (iv) -2/3",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "(-6+5)/14 = -1/14; (-4+5)/6 = 1/6; (8×27)/(9×16) = 3/2; (-3/5)×(10/9) = -2/3."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Read the statements regarding number classifications:\nStatement 1: Every Integer is a rational number (since integer n can be written as n/1).\nStatement 2: Every Fraction is a positive rational number.\nStatement 3: All rational numbers can be represented as whole numbers.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (e.g. 2/3 is a rational number but not a whole number). Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "If x = -2/3 and y = 4/5, verify that |x + y| ≤ |x| + |y| (Triangle Inequality for Rational Numbers):",
    options: [
      "|x + y| = |-2/3 + 4/5| = |2/15| = 2/15 ; |x| + |y| = 2/3 + 4/5 = 22/15 ; Since 2/15 < 22/15, the inequality strictly holds true",
      "|x + y| = 22/15",
      "|x| + |y| = 2/15",
      "The inequality is false"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Absolute value triangle inequality: |(-2/3) + (4/5)| = 2/15 ≤ |-2/3| + |4/5| = 22/15."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Find the rational number exactly HALFWAY (the midpoint) between -3/4 and 5/6:",
    options: [
      "1/24 (Midpoint = 1/2 × (-3/4 + 5/6) = 1/2 × ((-9 + 10) / 12) = 1/2 × (1/12) = 1/24)",
      "1/12",
      "-1/24",
      "1/6"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Midpoint = ½((-9/12) + (10/12)) = ½(1/12) = 1/24."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "A car is traveling at an average speed of 40 2/5 km/h. How much distance will it cover in 7 1/2 hours?",
    options: [
      "303 km (Speed = 202/5 km/h ; Time = 15/2 h ; Distance = (202/5) × (15/2) = (202 × 3) / 2 = 101 × 3 = 303 km)",
      "300 km",
      "295 km",
      "310 km"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Distance = (202/5) × (15/2) = 101 × 3 = 303 km."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "From a rope of length 11 metres, two pieces of lengths 2 3/5 m and 3 3/10 m are cut off. What is the length of the REMAINING rope?",
    options: [
      "5 1/10 m (Total cut = 13/5 + 33/10 = 26/10 + 33/10 = 59/10 m ; Remaining = 11 - 59/10 = (110 - 59)/10 = 51/10 = 5 1/10 m)",
      "4 9/10 m",
      "5 3/10 m",
      "6 1/10 m"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Total cut = 5.9 m. Remaining = 11 - 5.9 = 5.1 m = 51/10 = 5 1/10 m."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Divide the sum of 65/12 and 8/3 by their difference:",
    options: [
      "97/33 (Sum = 65/12 + 32/12 = 97/12 ; Difference = 65/12 - 32/12 = 33/12 ; Division = (97/12) ÷ (33/12) = 97 / 33)",
      "33/97",
      "97/12",
      "33/12"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Sum = 97/12. Difference = 33/12. Quotient = (97/12) / (33/12) = 97/33."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "If a = 1/2, b = -1/3, and c = 2/5, verify the Associative Law of Addition: (a + b) + c = a + (b + c):",
    options: [
      "(1/2 + (-1/3)) + 2/5 = (1/6) + 2/5 = (5 + 12)/30 = 17/30 ; 1/2 + (-1/3 + 2/5) = 1/2 + (1/15) = (15 + 2)/30 = 17/30 (Verified)",
      "17/30 and 19/30 (False)",
      "15/30",
      "0"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Both sides evaluate identically to 17/30, demonstrating associativity of rational addition."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 8: Rational Numbers",
    question: "Why is the algebraic Field of Rational Numbers (ℚ) indispensable in scientific measurement, engineering calibrations, and computational arithmetic?",
    options: [
      "Rational numbers provide the exact fractional precision required for discrete physics ratios, scale conversions, financial balance accounting, and floating-point numeric approximations",
      "Because rational numbers are the only numbers that exist",
      "Because rational numbers eliminate the need for division",
      "Because rational numbers are always whole integers"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The rational field ℚ provides the rigorous mathematical infrastructure for fractional ratios, dimensional analysis, and digital arithmetic."
  }
];

console.log('Generated Class 7 Math Ch8:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/math_ch8.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
