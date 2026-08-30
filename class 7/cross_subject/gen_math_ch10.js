import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 10: Algebraic Expressions (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "In an algebraic expression, a quantity that can take various numerical values is called a:",
    options: ["Variable (e.g. x, y, z, a, b)", "Constant", "Coefficient only", "Exponent"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A variable is a letter or symbol that represents an unknown quantity capable of assuming different numerical values."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "A quantity in an algebraic expression that has a FIXED numerical value is called a:",
    options: ["Constant (e.g. 4, -7, 100)", "Variable", "Literal coefficient", "Degree"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A constant is a term with a fixed, unchangeable numeric value."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "What are the TERMS of the algebraic expression 4x² - 3xy + 7?",
    options: ["4x², -3xy, and 7", "4x, 3xy, and 7", "4, -3, and 7", "x² and xy"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Terms are parts of an expression separated by addition or subtraction: 4x², -3xy, and 7."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "In the algebraic term -7xy², what is the NUMERICAL COEFFICIENT?",
    options: ["-7", "7", "xy²", "-7x"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The numerical factor in a term is its numerical coefficient (-7)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "An algebraic expression containing exactly ONE single term (e.g. 7xy, -5x², 3) is called a:",
    options: ["Monomial", "Binomial", "Trinomial", "Polynomial with 4 terms"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A monomial is an algebraic expression consisting of a single term."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "An algebraic expression containing exactly TWO unlike terms (e.g. a + b, 4l + 5m) is called a:",
    options: ["Binomial", "Monomial", "Trinomial", "Constant"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A binomial consists of exactly two non-zero unlike terms."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "An algebraic expression containing exactly THREE unlike terms (e.g. x + y + z, 2a - 3b + 5) is called a:",
    options: ["Trinomial", "Monomial", "Binomial", "Degree"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A trinomial contains exactly three non-zero unlike terms."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Terms that have the EXACT SAME algebraic variable factors and powers (e.g. 7x and -12x, or 3xy² and 8y²x) are called:",
    options: ["Like Terms", "Unlike Terms", "Constants", "Binomials"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Like terms have identical variable components with matching exponents, differing only in numerical coefficients."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Simplify by combining like terms: 12m² - 9m + 5m - 4m² - 7m + 10:",
    options: [
      "8m² - 11m + 10 ((12 - 4)m² + (-9 + 5 - 7)m + 10 = 8m² - 11m + 10)",
      "16m² - 11m + 10",
      "8m² + 11m - 10",
      "8m² - 21m + 10"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "(12-4)m² + (-9+5-7)m + 10 = 8m² - 11m + 10."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If m = 2, find the value of the algebraic expression 3m - 5:",
    options: ["1 (3 × 2 - 5 = 6 - 5 = 1)", "-1", "5", "6"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "3(2) - 5 = 6 - 5 = 1."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If x = -1, find the value of 2x² - x - 2:",
    options: ["1 (2 × (-1)² - (-1) - 2 = 2 × 1 + 1 - 2 = 3 - 2 = 1)", "-1", "3", "0"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "2(-1)² - (-1) - 2 = 2(1) + 1 - 2 = 1."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Subtract -5y² from y²:",
    options: ["6y² (y² - (-5y²) = y² + 5y² = 6y²)", "-4y²", "4y²", "-6y²"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "y² - (-5y²) = y² + 5y² = 6y²."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Add the algebraic expressions: 7mn + 5, 12mn + 2, 9mn - 8, and -2mn - 3:",
    options: [
      "26mn - 4 ((7 + 12 + 9 - 2)mn + (5 + 2 - 8 - 3) = 26mn - 4)",
      "28mn - 4",
      "26mn + 4",
      "24mn - 6"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sum of coefficients = (7+12+9-2)mn + (5+2-8-3) = 26mn - 4."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Subtract 24ab - 10b - 18a from 30ab + 12b + 14a:",
    options: [
      "6ab + 22b + 32a ((30 - 24)ab + (12 - (-10))b + (14 - (-18))a = 6ab + 22b + 32a)",
      "6ab + 2b - 4a",
      "54ab + 22b + 32a",
      "6ab + 22b - 4a"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(30-24)ab + (12+10)b + (14+18)a = 6ab + 22b + 32a."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "What should be added to x² + xy + y² to obtain 2x² + 3xy?",
    options: [
      "x² + 2xy - y² ((2x² + 3xy) - (x² + xy + y²) = (2-1)x² + (3-1)xy - y² = x² + 2xy - y²)",
      "x² + 4xy + y²",
      "3x² + 4xy + y²",
      "-x² - 2xy + y²"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(2x² + 3xy) - (x² + xy + y²) = x² + 2xy - y²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "What should be subtracted from 2a + 8b + 10 to get -3a + 7b + 16?",
    options: [
      "5a + b - 6 ((2a + 8b + 10) - (-3a + 7b + 16) = (2+3)a + (8-7)b + (10-16) = 5a + b - 6)",
      "-a + 15b + 26",
      "5a - b + 6",
      "-5a - b + 6"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(2a + 8b + 10) - (-3a + 7b + 16) = 5a + b - 6."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "From the sum of 3x - y + 11 and -y - 11, subtract 3x - y - 11:",
    options: [
      "-y + 11 (Sum = 3x - 2y ; Subtracting: (3x - 2y) - (3x - y - 11) = -2y + y + 11 = -y + 11)",
      "y + 11",
      "-y - 11",
      "6x - 3y"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sum = 3x - 2y. Result = (3x - 2y) - (3x - y - 11) = -y + 11."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If a = 2 and b = -2, find the value of a² + ab + b²:",
    options: [
      "4 (2² + (2 × -2) + (-2)² = 4 - 4 + 4 = 4)",
      "0",
      "8",
      "12"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "2² + 2(-2) + (-2)² = 4 - 4 + 4 = 4."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If x = 0 and y = -1, find the value of 2x²y + 2xy² + xy:",
    options: ["0 (Since x = 0, every product term containing x becomes 0: 0 + 0 + 0 = 0)", "-1", "2", "-2"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "2(0)²(-1) + 2(0)(-1)² + (0)(-1) = 0."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Simplify the expression and find its value when x = 3:\n2(x² + xy) + 3 - xy where y = 2:",
    options: [
      "39 (Expression = 2x² + 2xy - xy + 3 = 2x² + xy + 3 ; For x=3, y=2: 2(9) + (3×2) + 3 = 18 + 6 + 3 = 27 ... Wait: 2(3² + 3×2) + 3 - (3×2) = 2(9+6) + 3 - 6 = 30 + 3 - 6 = 27)",
      "27 (2(9+6) + 3 - 6 = 30 + 3 - 6 = 27)",
      "33",
      "24"
    ],
    correctAnswer: 1,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "2(3² + 3×2) + 3 - (3×2) = 2(15) + 3 - 6 = 30 - 3 = 27."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If the general nth term of a number sequence pattern is given by (3n + 1), find the 10th term and the 25th term of the sequence:",
    options: [
      "10th term = 31 ; 25th term = 76 (For n = 10: 3(10) + 1 = 31 ; For n = 25: 3(25) + 1 = 76)",
      "10th term = 30 ; 25th term = 75",
      "10th term = 34 ; 25th term = 79",
      "10th term = 29 ; 25th term = 74"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "T₁₀ = 3(10) + 1 = 31. T₂₅ = 3(25) + 1 = 76."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Find the algebraic expression for the PERIMETER of an equilateral triangle of side 's':",
    options: ["3s (Perimeter = s + s + s = 3s)", "s³", "3 + s", "s² / 3"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Perimeter of an equilateral triangle = 3 × side = 3s."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "What is the tree diagram factor representation of the term -ab + 2b² - 3a²?",
    options: [
      "Terms: (-ab) with factors -1, a, b ; (2b²) with factors 2, b, b ; (-3a²) with factors -3, a, a",
      "Terms: a, b, and 3",
      "Terms: a²b²",
      "Factors are only positive numbers"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Tree factor breakdown: -ab → (-1, a, b); 2b² → (2, b, b); -3a² → (-3, a, a)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Identify which pair consists of LIKE TERMS:",
    options: ["-29x and -29y are unlike ; 14xy and 42yx are LIKE TERMS (xy = yx by commutative law)", "1 and 100 are unlike", "4m²p and 4mp² are like", "12xz and 12x²z² are like"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "14xy and 42yx are like terms because variable factors xy and yx are algebraically identical."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Find the value of (2a - 2b - 4) - (a - b) when a = 3 and b = 2:",
    options: ["-3 ((2a - a) - (2b - b) - 4 = a - b - 4 = 3 - 2 - 4 = -3)", "-1", "3", "-5"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(2a - a) - (2b - b) - 4 = a - b - 4 = 3 - 2 - 4 = -3."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If z = 10, find the value of z³ - 3(z - 10):",
    options: ["1,000 (z³ - 3(z - 10) = 10³ - 3(10 - 10) = 1000 - 3(0) = 1,000)", "970", "1,030", "0"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "10³ - 3(10 - 10) = 1000 - 0 = 1,000."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "What is the degree of the term 5x²y³?",
    options: ["5 (Sum of exponents of variables = 2 + 3 = 5)", "6", "2", "3"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Degree of a monomial term is the sum of exponents of its variable factors: 2 + 3 = 5."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Write the algebraic expression for: 'Sum of numbers a and b subtracted from their product':",
    options: ["ab - (a + b)", "(a + b) - ab", "ab + (a + b)", "ab / (a + b)"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Product = ab; Sum = (a + b). Subtraction of sum from product = ab - (a + b)."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Read the statements:\nAssertion (A): Only LIKE TERMS can be added or subtracted into a single combined term in an algebraic expression.\nReason (R): Like terms possess identical variable factors and powers, allowing their numerical coefficients to be added or subtracted using the Distributive Property: ax + bx = (a + b)x.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Distributive property ax + bx = (a + b)x underpins algebraic simplification of like terms."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Spot the IMPOSTER in the following classification of Algebraic Expressions:\nGroup:\n1. 7x²y - Monomial\n2. 4a - 5b - Binomial\n3. x² + 2xy + y² - Trinomial\n4. 3x + 5x - Binomial",
    options: ["Expression 1", "Expression 2", "Expression 3", "Expression 4 (3x + 5x combines to 8x, which is a MONOMIAL, not a binomial)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Like terms must be simplified first: 3x + 5x = 8x (a single term, hence a monomial)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If 2x² + x - a = 5 for x = 0, what is the value of 'a'?",
    options: [
      "-5 (Substitute x = 0: 2(0)² + (0) - a = 5 ⇒ -a = 5 ⇒ a = -5)",
      "5",
      "0",
      "2"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "0 + 0 - a = 5 → -a = 5 → a = -5."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Match Column I (Algebraic Word Statements) with Column II (Exact Algebraic Expressions):\n(a) One-fourth of the product of p and q -> (i) 1/4 pq (or pq/4)\n(b) Number 5 added to 3 times product of m & n -> (ii) 3mn + 5\n(c) Product of y and z subtracted from 10 -> (iii) 10 - yz\n(d) Number x multiplied by itself and added to y² -> (iv) x² + y²",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "1/4 pq; 3mn + 5; 10 - yz; x² + y²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Read the statements regarding algebraic rules:\nStatement 1: The number of diagonals that can be drawn from one vertex of a polygon of n sides is given by the algebraic rule (n - 3).\nStatement 2: The sum of interior angles of an n-sided polygon is (n - 2) × 180°.\nStatement 3: In an algebraic term, the variable can never be negative.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (variables can take negative real values). Statements 1 and 2 are established geometric algebraic formulas."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Simplify the complex algebraic expression:\n{3x² - [2x - (x² - 4)] + 5}:",
    options: [
      "4x² - 2x + 1 (3x² - [2x - x² + 4] + 5 = 3x² - 2x + x² - 4 + 5 = 4x² - 2x + 1)",
      "2x² - 2x + 9",
      "4x² + 2x - 1",
      "3x² - 2x + 1"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "3x² - 2x + x² - 4 + 5 = 4x² - 2x + 1."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If A = 3x² - 4x + 1, B = 5x² + 3x - 8, and C = 4x² - 7x + 3, find the expression (A + B - C):",
    options: [
      "4x² + 6x - 10 ((3 + 5 - 4)x² + (-4 + 3 - (-7))x + (1 - 8 - 3) = 4x² + 6x - 10)",
      "4x² - 8x + 6",
      "12x² - 8x - 4",
      "4x² + 6x + 10"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "(3+5-4)x² + (-4+3+7)x + (1-8-3) = 4x² + 6x - 10."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "A digital digit display uses matchsticks to form numbers. The number of matchsticks required to form 'n' repeated digits of the numeral '8' follows the formula (5n + 1). How many matchsticks are needed to form 12 digits of '8'?",
    options: [
      "61 matchsticks (For n = 12: 5(12) + 1 = 60 + 1 = 61 matchsticks)",
      "60 matchsticks",
      "65 matchsticks",
      "72 matchsticks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Number of matchsticks = 5(12) + 1 = 61."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If x = -2, y = -1, and z = 3, evaluate the algebraic expression: x³ + y³ + z³ - 3xyz:",
    options: [
      "0 (x³ = -8 ; y³ = -1 ; z³ = 27 ; Sum = 18 ; 3xyz = 3(-2)(-1)(3) = 18 ; Value = 18 - 18 = 0)",
      "36",
      "-18",
      "18"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Since x + y + z = -2 + (-1) + 3 = 0, the algebraic identity x³ + y³ + z³ - 3xyz = (x+y+z)(x²+y²+z²-xy-yz-zx) = 0."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "What is the coefficient of x²y in the algebraic expansion of 3(x²y - 2xy²) - 4(2x²y + 5xy²)?",
    options: [
      "-5 (3x²y - 6xy² - 8x²y - 20xy² = (3 - 8)x²y - (6 + 20)xy² = -5x²y - 26xy² ; Coefficient of x²y is -5)",
      "5",
      "-26",
      "-11"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "3x²y - 8x²y = -5x²y. The numerical coefficient is -5."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "If p = -10, find the value of p² - 2p - 100:",
    options: [
      "20 ((-10)² - 2(-10) - 100 = 100 + 20 - 100 = 20)",
      "-20",
      "0",
      "40"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "100 + 20 - 100 = 20."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 10: Algebraic Expressions",
    question: "Why are Algebraic Expressions considered the fundamental generalized language of modern science, algorithms, and computational modeling?",
    options: [
      "They allow generalized mathematical laws, geometric formulas, physical principles, and algorithmic patterns to be stated concisely and manipulated systematically for any arbitrary inputs",
      "Because letters take up less paper than numbers",
      "Because algebra eliminates the need for arithmetic",
      "Because computers only understand English letters"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Algebra abstracts arithmetic into symbolic generalizations, enabling formulation of physical laws, algorithmic proofs, and variable parametric modeling."
  }
];

console.log('Generated Class 7 Math Ch10:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/math_ch10.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
