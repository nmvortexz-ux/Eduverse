import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 1: Integers (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the result of evaluating: (-8) + (-7)?",
    options: ["-15", "+15", "-1", "+1"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Adding two negative integers yields a negative sum: (-8) + (-7) = -(8 + 7) = -15."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the result of subtracting (-5) from 12: 12 - (-5)?",
    options: ["17 (12 + 5 = 17)", "7", "-17", "-7"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Subtracting a negative number is equivalent to adding its positive counterpart: 12 - (-5) = 12 + 5 = 17."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the product of multiplying a positive integer and a negative integer: (+6) × (-4)?",
    options: ["-24", "+24", "+10", "-2"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "(+) × (-) = (-) ; 6 × (-4) = -24."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the product of multiplying two negative integers: (-9) × (-5)?",
    options: ["+45 (A negative times a negative equals a positive)", "-45", "+14", "-14"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "(-) × (-) = (+) ; (-9) × (-5) = +45."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the Additive Identity element for all integers (such that a + 0 = a)?",
    options: ["0 (Zero)", "1", "-1", "Any integer"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Zero is the additive identity for integers because adding zero to any integer leaves its value unchanged."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the Multiplicative Identity element for all integers (such that a × 1 = a)?",
    options: ["1 (One)", "0", "-1", "10"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "1 is the multiplicative identity for integers because multiplying any integer by 1 yields the same integer."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the Additive Inverse of the integer -18?",
    options: ["+18 (such that (-18) + (+18) = 0)", "-18", "0", "1"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The additive inverse of an integer 'a' is '-a', which sums to zero: -(-18) = +18."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the result of dividing: (-36) ÷ (-4)?",
    options: ["+9 (Division of two negative integers results in a positive quotient)", "-9", "+144", "-144"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "(-) ÷ (-) = (+) ; (-36) ÷ (-4) = +9."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the result of dividing: (-50) ÷ 5?",
    options: ["-10", "+10", "-250", "+250"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "(-) ÷ (+) = (-) ; (-50) ÷ 5 = -10."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What happens when ANY integer 'a' is divided by ZERO (a ÷ 0)?",
    options: ["Division by zero is UNDEFINED (Meaningless in mathematics)", "The answer is 0", "The answer is 1", "The answer is 'a'"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Division by zero has no mathematical definition and is undefined for all integers."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is 0 divided by any non-zero integer 'a' (0 ÷ a)?",
    options: ["0 (Zero)", "Undefined", "1", "a"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "0 divided by any non-zero integer is always 0."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "What is the product of multiplying ANY integer 'a' with ZERO: a × 0?",
    options: ["0 (Zero)", "a", "1", "-a"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Any integer multiplied by zero equals zero (multiplicative property of zero)."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Evaluate using the Distributive Property of multiplication over addition:\n(-25) × [ 37 + (-17) ]",
    options: [
      "-500 ((-25) × [20] = -500)",
      "+500",
      "-1350",
      "+1350"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(-25) × (37 - 17) = (-25) × 20 = -500."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Evaluate using suitable property:\n(-48) × 105",
    options: [
      "-5040 ((-48) × (100 + 5) = (-4800) + (-240) = -5040)",
      "+5040",
      "-4805",
      "-4752"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(-48) × (100 + 5) = (-48 × 100) + (-48 × 5) = -4800 - 240 = -5040."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Find the product: (-1) × (-2) × (-3) × (-4) × (-5):",
    options: [
      "-120 (Multiplying an ODD number (5) of negative signs yields a NEGATIVE result)",
      "+120",
      "-24",
      "+24"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "There are 5 negative factors (odd count) → product is negative: -(1 × 2 × 3 × 4 × 5) = -120."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Find the product: (-2) × (-5) × (-4) × (-10):",
    options: [
      "+400 (Multiplying an EVEN number (4) of negative signs yields a POSITIVE result)",
      "-400",
      "+200",
      "-200"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "4 negative factors (even count) → product is positive: +(2 × 5 × 4 × 10) = +400."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "In a class test containing 15 questions, 4 marks are given for every correct answer and (-2) marks are given for every incorrect answer. Gurpreet attempts all questions but only 9 of her answers are correct. What is her total score?",
    options: [
      "24 marks (Correct = 9 × 4 = 36 ; Incorrect = 6 × (-2) = -12 ; Total = 36 + (-12) = 24)",
      "36 marks",
      "12 marks",
      "30 marks"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Correct marks = 9 × 4 = 36. Incorrect marks = (15 - 9) × (-2) = -12. Total = 36 - 12 = 24."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "In the same test (4 marks for correct, -2 for incorrect), one of Gurpreet's friends gets only 5 answers correct out of 15 attempted questions. What is her friend's total score?",
    options: [
      "0 marks (Correct = 5 × 4 = 20 ; Incorrect = 10 × (-2) = -20 ; Total = 20 + (-20) = 0)",
      "20 marks",
      "-10 marks",
      "10 marks"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Score = (5 × 4) + (10 × (-2)) = 20 - 20 = 0."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "An elevator descends into a mine shaft at the rate of 6 metres per minute. If the descent starts from 10 m ABOVE the ground level, how long will it take to reach -350 m (350 m below ground)?",
    options: [
      "60 minutes (1 hour) (Total distance = 10 - (-350) = 360 m ; Time = 360 / 6 = 60 minutes)",
      "50 minutes",
      "45 minutes",
      "70 minutes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Total vertical drop = 10 - (-350) = 360 m. Time = 360 ÷ 6 = 60 minutes = 1 hour."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "At Srinagar, the temperature was -5°C on Monday and then it dropped by 2°C on Tuesday. What was the temperature of Srinagar on Tuesday? On Wednesday, it rose by 4°C. What was the temperature on Wednesday?",
    options: [
      "Tuesday: -7°C ; Wednesday: -3°C",
      "Tuesday: -3°C ; Wednesday: +1°C",
      "Tuesday: -7°C ; Wednesday: +4°C",
      "Tuesday: -10°C ; Wednesday: -6°C"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tuesday = -5 - 2 = -7°C. Wednesday = -7 + 4 = -3°C."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "A cement company earns a profit of ₹8 per bag of white cement sold and a loss of ₹5 per bag of grey cement sold. If the company sells 3,000 bags of white cement and 5,000 bags of grey cement in a month, what is its net profit or loss?",
    options: [
      "Loss of ₹1,000 (Profit = 3000 × 8 = ₹24,000 ; Loss = 5000 × (-5) = -₹25,000 ; Net = 24,000 - 25,000 = -₹1,000)",
      "Profit of ₹1,000",
      "Profit of ₹24,000",
      "Loss of ₹5,000"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Profit on white = 3000 × 8 = ₹24,000. Loss on grey = 5000 × 5 = ₹25,000. Net = 24,000 - 25,000 = -₹1,000 (Loss)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "In the same cement problem (₹8 profit/white bag, ₹5 loss/grey bag), how many white cement bags must the company sell to have neither profit nor loss if the number of grey bags sold is 6,400 bags?",
    options: [
      "4,000 bags (Loss on grey = 6400 × 5 = ₹32,000 ; White bags needed = 32,000 / 8 = 4,000 bags)",
      "3,200 bags",
      "5,000 bags",
      "4,800 bags"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Total loss = 6400 × 5 = ₹32,000. Required white bags = 32000 ÷ 8 = 4,000 bags."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Fill in the blank with suitable integer: (-3) × [ _____ ] = +27",
    options: ["-9 (Since (-3) × (-9) = +27)", "+9", "-30", "+30"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Missing integer = 27 ÷ (-3) = -9."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Fill in the blank with suitable integer: [ _____ ] ÷ (-12) = -8",
    options: ["+96 (Since 96 ÷ (-12) = -8)", "-96", "+20", "-4"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Missing integer = (-8) × (-12) = +96."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Which of the following mathematical properties holds strictly TRUE for Division of Integers?",
    options: [
      "Division is NOT Commutative and NOT Associative for integers (e.g. 8 ÷ (-4) ≠ (-4) ÷ 8)",
      "Division is Commutative for integers",
      "Division is Associative for integers",
      "Division by zero equals zero"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Division of integers violates both commutative property (a ÷ b ≠ b ÷ a) and associative property."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Evaluate: [ (-30) ÷ 10 ] ÷ 3",
    options: ["-1 (Inside bracket: -30 ÷ 10 = -3 ; -3 ÷ 3 = -1)", "+1", "-9", "+9"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(-30 ÷ 10) ÷ 3 = (-3) ÷ 3 = -1."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Evaluate: [ (-6) + 5 ] ÷ [ (-2) + 1 ]",
    options: ["+1 (Numerator: -1 ; Denominator: -1 ; -1 ÷ -1 = +1)", "-1", "+2", "-2"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(-6 + 5) ÷ (-2 + 1) = (-1) ÷ (-1) = +1."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "The temperature at 12 noon was 10°C above zero (+10°C). If it decreases at the rate of 2°C per hour until midnight, at what time will the temperature be 8°C below zero (-8°C)?",
    options: [
      "9:00 PM (Total decrease = 10 - (-8) = 18°C ; Hours required = 18 / 2 = 9 hours ; 12 noon + 9 hours = 9 PM)",
      "8:00 PM",
      "10:00 PM",
      "11:00 PM"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Total temperature drop = 10 - (-8) = 18°C. Time = 18 ÷ 2 = 9 hours. 12 noon + 9h = 9:00 PM."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Read the statements:\nAssertion (A): The set of all Integers (ℤ) is closed under Addition, Subtraction, and Multiplication, but NOT closed under Division.\nReason (R): When two integers are divided (e.g. 5 ÷ 2 = 2.5 or (-3) ÷ 7 = -3/7), the quotient is a rational fraction and not necessarily an integer.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Closure under division fails in ℤ because quotient of two integers often produces non-integer rational numbers."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Spot the IMPOSTER among the following statements regarding Integer Properties:\nGroup:\n1. a + b = b + a (Addition is Commutative)\n2. a × b = b × a (Multiplication is Commutative)\n3. a - b = b - a (Subtraction is Commutative)\n4. a × (b + c) = a × b + a × c (Distributive Property)",
    options: ["Statement 1", "Statement 2", "Statement 3 (Subtraction is NOT commutative for integers)", "Statement 4"],
    correctAnswer: 2,
    difficulty: "HARD",
    damage: 350,
    explanation: "Subtraction is NOT commutative for integers: 5 - 3 = 2, but 3 - 5 = -2 (2 ≠ -2)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Evaluate the nested integer expression:\n(-1) × (-1) × (-1) × ... (multiplied 99 times) + (-1) × (-1) × (-1) × ... (multiplied 100 times):",
    options: [
      "0 ((-1)^99 = -1 and (-1)^100 = +1 ; Sum = -1 + 1 = 0)",
      "-2",
      "+2",
      "-1"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "(-1) raised to an odd power (99) is -1. (-1) raised to an even power (100) is +1. (-1) + (+1) = 0."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Match Column I (Algebraic Integer Identity) with Column II (Name of Property):\n(a) a + b = b + a              -> (i) Associative Property of Addition\n(b) a × (b × c) = (a × b) × c  -> (ii) Distributive Property of Multiplication over Addition\n(c) (a + b) + c = a + (b + c)  -> (iii) Commutative Property of Addition\n(d) a × (b + c) = ab + ac      -> (iv) Associative Property of Multiplication",
    options: [
      "a-(iii), b-(iv), c-(i), d-(ii)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(ii), b-(i), c-(iv), d-(iii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "a+b = b+a (Commutative +); a(bc) = (ab)c (Associative ×); (a+b)+c = a+(b+c) (Associative +); a(b+c) = ab+ac (Distributive)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Read the statements regarding integer verification:\nStatement 1: For any three integers a, b, c: a × (b - c) = (a × b) - (a × c).\nStatement 2: For any integers a and b: a ÷ (-b) = (-a) ÷ b = -(a ÷ b) where b ≠ 0.\nStatement 3: (a ÷ b) ÷ c = a ÷ (b ÷ c) for all non-zero integers.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because integer division is NOT associative (e.g. (16 ÷ 4) ÷ 2 = 2, but 16 ÷ (4 ÷ 2) = 8). Statements 1 and 2 are true."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "If a = -8, b = -7, and c = 6, verify the value of (a + b) + c and a + (b + c):",
    options: [
      "Both equal -9 (((-8 + -7) + 6 = -15 + 6 = -9) and (-8 + (-7 + 6) = -8 + -1 = -9))",
      "Both equal +9",
      "First is -9, second is +5",
      "Both equal -21"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "(-8 + -7) + 6 = -15 + 6 = -9. -8 + (-7 + 6) = -8 + (-1) = -9. Confirms Associative Property of Addition."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Solve for x: (-15) × [ x + (-3) ] = (-15) × 8 + (-15) × (-3)",
    options: ["x = 8 (By the Distributive Property: a × (x + b) = a × x + a × b ⇒ x = 8)", "x = -8", "x = 3", "x = -3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Comparing with Distributive law a × (b + c) = ab + ac: here a = -15, b = x = 8, c = -3."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "A submarine is cruising at a depth of -650 m below sea level. It ascends 230 m, then dives down 180 m, and finally ascends 320 m. What is the final operating depth of the submarine relative to sea level?",
    options: [
      "-280 m below sea level (-650 + 230 - 180 + 320 = -280 m)",
      "-320 m below sea level",
      "-410 m below sea level",
      "-180 m below sea level"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "-650 + 230 - 180 + 320 = -420 - 180 + 320 = -600 + 320 = -280 m."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Evaluate: (-325) × (-45) + (-325) × (-55)",
    options: [
      "+32,500 ((-325) × [(-45) + (-55)] = (-325) × (-100) = +32,500)",
      "-32,500",
      "+3,250",
      "-3,250"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Factoring out -325: (-325) × [(-45) + (-55)] = (-325) × (-100) = +32,500."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "In a 20-question math competition, +5 marks are awarded for each correct answer, -3 marks for each incorrect answer, and 0 for unattempted questions. Rohan attempted 18 questions and got 14 correct. Priya attempted all 20 questions and got 15 correct. Who scored higher and by how many marks?",
    options: [
      "Rohan scored higher by 2 marks (Rohan: 14(5) + 4(-3) = 70 - 12 = 58 ; Priya: 15(5) + 5(-3) = 75 - 15 = 60 ... Wait: Priya = 60, Rohan = 58 ⇒ Priya is higher by 2 marks)",
      "Priya scored higher by 2 marks (Priya: 15(5) + 5(-3) = 60 ; Rohan: 14(5) + 4(-3) = 58 ; Priya is higher by 2 marks)",
      "Both scored exactly the same",
      "Rohan is higher by 5 marks"
    ],
    correctAnswer: 1,
    difficulty: "HARD",
    damage: 350,
    explanation: "Rohan = 14×5 + 4×(-3) = 70 - 12 = 58. Priya = 15×5 + 5×(-3) = 75 - 15 = 60. Priya scored 60 vs 58 (+2 marks higher)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "If the product of two integers is -180 and one of the integers is +12, find the sum of the two integers:",
    options: [
      "-3 (Second integer = -180 / 12 = -15 ; Sum = 12 + (-15) = -3)",
      "+3",
      "-27",
      "+27"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Other integer = -180 ÷ 12 = -15. Sum = 12 + (-15) = -3."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 1: Integers",
    question: "Why is the complete mastery of Integers and their sign algebraic laws fundamental to all future mathematics (algebra, coordinate geometry, calculus, and computing)?",
    options: [
      "It establishes bidirectional numerical continuity across positive and negative domains, vector magnitudes, directed quantities, and rigorous symbolic operations",
      "Because negative numbers only exist in bank debts",
      "Because integers eliminate the need for multiplication",
      "Because only positive numbers are used in science"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Integers provide the foundational algebraic ring (ℤ, +, ×) modeling directed quantities, vectors, and sign arithmetic in higher mathematics."
  }
];

console.log('Generated Class 7 Math Ch1:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/math_ch1.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
