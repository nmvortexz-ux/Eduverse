import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 2: Whole Numbers (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "What is the smallest natural number?",
    options: ["1", "0", "2", "-1"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Natural numbers (counting numbers) start from 1, 2, 3, 4... Hence, 1 is the smallest natural number."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "What is the smallest whole number?",
    options: ["0", "1", "2", "There is no smallest whole number"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Whole numbers include 0 along with all natural numbers (0, 1, 2, 3...). 0 is the smallest whole number."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "What is the predecessor of the whole number 1?",
    options: ["0", "2", "-1", "No predecessor exists"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Predecessor of 1 in the whole number system is 1 - 1 = 0."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Which whole number does NOT have a predecessor in the whole number system?",
    options: ["0", "1", "10", "100"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "0 has no predecessor in whole numbers because whole numbers begin at 0."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "What is the successor of 1,00,199?",
    options: ["1,00,200", "1,00,198", "1,00,201", "1,01,000"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Successor of a number is obtained by adding 1: 1,00,199 + 1 = 1,00,200."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "What is the predecessor of 2,08,090?",
    options: ["2,08,089", "2,08,091", "2,08,000", "2,08,100"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Predecessor of a number is obtained by subtracting 1: 2,08,090 - 1 = 2,08,089."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "How many whole numbers exist between 32 and 53?",
    options: ["20", "21", "19", "22"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Whole numbers between 32 and 53 = (53 - 32) - 1 = 21 - 1 = 20."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Which whole number is called the 'Additive Identity' for whole numbers?",
    options: ["0", "1", "10", "There is none"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Adding 0 to any whole number leaves the number unchanged (a + 0 = a); hence 0 is the additive identity."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Which whole number is called the 'Multiplicative Identity' for whole numbers?",
    options: ["1", "0", "10", "2"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Multiplying any whole number by 1 yields the same number (a × 1 = a); hence 1 is the multiplicative identity."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "What is the mathematical result of dividing any whole number by zero (e.g., 7 ÷ 0)?",
    options: ["Division by zero is NOT defined", "0", "7", "1"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Division is repeated subtraction; since subtracting 0 never reduces a quantity, division by zero is undefined."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "On a standard horizontal number line, where does a larger whole number always lie relative to a smaller number?",
    options: ["To the right side of the smaller number", "To the left side", "Directly below it", "At the origin"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Numbers increase as you move rightwards on a number line (e.g., 9 lies to the right of 4)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "What property is represented by the equation: a + b = b + a?",
    options: ["Commutative property of addition", "Associative property", "Distributive property", "Closure property"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The order of operands in addition does not affect the sum (Commutative Property)."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Find the sum by suitable rearrangement: 837 + 208 + 363",
    options: ["1,408", "1,398", "1,418", "1,508"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Group numbers ending with complementary digits: (837 + 363) + 208 = 1,200 + 208 = 1,408."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Find the product by suitable rearrangement: 2 × 1768 × 50",
    options: ["1,76,800", "1,76,000", "1,86,800", "1,74,800"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rearrange to multiply 2 × 50 first: (2 × 50) × 1768 = 100 × 1768 = 1,76,800."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Find the value using the Distributive Property: 297 × 17 + 297 × 3",
    options: ["5,940", "5,840", "6,040", "5,900"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "297 × (17 + 3) = 297 × 20 = 5,940."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Find the value using the Distributive Property: 54,279 × 92 + 8 × 54,279",
    options: ["54,27,900", "54,20,000", "54,27,000", "5,42,790"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "54,279 × (92 + 8) = 54,279 × 100 = 54,27,900."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Find the product using suitable property: 738 × 103",
    options: ["76,014", "75,914", "76,114", "74,814"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "738 × (100 + 3) = 738 × 100 + 738 × 3 = 73,800 + 2,214 = 76,014."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "A taxi driver filled his car petrol tank with 40 litres of petrol on Monday. The next day, he filled the tank with 50 litres of petrol. If petrol costs ₹ 44 per litre, how much did he spend in all on petrol?",
    options: ["₹ 3,960", "₹ 3,860", "₹ 4,060", "₹ 3,600"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Total spent = 44 × (40 + 50) = 44 × 90 = ₹ 3,960."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "A vendor supplies 32 litres of milk to a hotel in the morning and 68 litres of milk in the evening. If the milk costs ₹ 45 per litre, how much money is due to the vendor per day?",
    options: ["₹ 4,500", "₹ 4,200", "₹ 4,800", "₹ 4,000"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Total cost = 45 × (32 + 68) = 45 × 100 = ₹ 4,500."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Which of the following operations is NOT closed for whole numbers?",
    options: ["Subtraction and Division", "Addition and Multiplication", "Addition only", "Multiplication only"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Subtracting 5 - 8 = -3 (not a whole number) and dividing 5 ÷ 2 = 2.5 (not a whole number); hence not closed."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Which property is demonstrated by: (a × b) × c = a × (b × c)?",
    options: ["Associative property of multiplication", "Commutative property", "Distributive property", "Closure property"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Regrouping factors does not change the final product (Associative Property)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Study the pattern: 1 × 8 + 1 = 9; 12 × 8 + 2 = 98; 123 × 8 + 3 = 987. What is the value of 12345 × 8 + 5?",
    options: ["98765", "98756", "98764", "99876"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Following the arithmetic pattern, the resulting digits descend from 9 down to 5: 98765."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Which of the following whole numbers can be arranged as a square pattern using dots?",
    options: ["4, 9, 16, 25", "2, 3, 5, 7", "6, 8, 10, 12", "3, 6, 10, 15"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Square numbers n² (2²=4, 3²=9, 4²=16, 5²=25) form symmetrical square dot lattices."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Which of the following whole numbers can be arranged as a triangular pattern using dots?",
    options: ["3, 6, 10, 15", "4, 9, 16, 25", "2, 4, 8, 16", "5, 7, 11, 13"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Triangular numbers T_n = n(n+1)/2 (T₂=3, T₃=6, T₄=10, T₅=15) form equilateral triangular dot grids."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Find the product: 4 × 166 × 25",
    options: ["16,600", "16,000", "17,600", "15,600"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(4 × 25) × 166 = 100 × 166 = 16,600."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Solve using suitable properties: 854 × 102",
    options: ["87,108", "86,108", "87,008", "85,400"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "854 × (100 + 2) = 85,400 + 1,708 = 87,108."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "If the product of two whole numbers is zero, what can we definitively conclude?",
    options: [
      "At least one of the numbers (or both) must be zero",
      "Both numbers must be equal to 1",
      "Both numbers must be greater than 10",
      "Neither number can be zero"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "By the Zero Product Property: if a × b = 0, then a = 0, or b = 0, or a = b = 0."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "If the product of two whole numbers is 1, what can we conclude?",
    options: [
      "Both numbers must be equal to 1",
      "One number is 0 and the other is 1",
      "Both numbers can be any prime number",
      "Their sum is 1"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "In whole numbers, the only factors of 1 are 1 × 1 = 1; hence both numbers must be 1."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Read the statements:\nAssertion (A): The expression (8 ÷ 4) ÷ 2 is NOT equal to 8 ÷ (4 ÷ 2).\nReason (R): Division of whole numbers is NOT associative.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "(8 ÷ 4) ÷ 2 = 2 ÷ 2 = 1. But 8 ÷ (4 ÷ 2) = 8 ÷ 2 = 4. Since 1 ≠ 4, division is not associative."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Spot the IMPOSTER in the following mathematical properties of whole numbers:\nGroup: [Closure under Addition, Commutativity of Multiplication, Associativity of Addition, Commutativity of Subtraction]",
    "options": ["Closure under Addition", "Commutativity of Multiplication", "Associativity of Addition", "Commutativity of Subtraction"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Subtraction is NOT commutative for whole numbers (e.g., 5 - 3 = 2, but 3 - 5 = -2, which is not even a whole number)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Find the value of: 125 × 40 × 8 × 25 using optimal grouping:",
    "options": ["10,00,000 (1 Million)", "1,00,000", "5,00,000", "10,000"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Group (125 × 8) × (40 × 25) = 1,000 × 1,000 = 1,000,000."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "If a = 5, b = 3, c = 2, verify the Distributive Property of multiplication over subtraction: a × (b - c) = ?",
    "options": ["a × b - a × c = 5 × 3 - 5 × 2 = 15 - 10 = 5", "a × b + a × c = 25", "a × (b + c) = 25", "10"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Distributive property holds over subtraction: a(b - c) = ab - ac."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Match the following operations with their properties:\n(a) 425 × 136 = 425 × (6 + 30 + 100) -> (i) Commutativity under multiplication\n(b) 2 × 49 × 50 = 2 × 50 × 49          -> (ii) Commutativity under addition\n(c) 80 + 2005 + 20 = 80 + 20 + 2005      -> (iii) Distributivity of multiplication over addition",
    "options": [
      "a-(iii), b-(i), c-(ii)",
      "a-(i), b-(ii), c-(iii)",
      "a-(ii), b-(iii), c-(i)",
      "a-(iii), b-(ii), c-(i)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "a is Distributive property; b is Commutativity of multiplication; c is Commutativity of addition."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Read the statements:\nStatement 1: Every natural number is a whole number.\nStatement 2: Every whole number is a natural number.\nStatement 3: 0 is the only whole number that is not a natural number.\nWhich statements are TRUE?",
    "options": ["Statements 1 and 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    "correctAnswer": 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because 0 is a whole number but NOT a natural number. Statements 1 and 3 are true."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Solve using pattern: 111 × 111 = 12,321. What is the value of 11,111 × 11,111?",
    "options": ["123,454,321", "123,456,789", "12,345,432", "111,111,111"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Product of n ones with n ones ascends from 1 to n then descends back to 1: for n=5 -> 123454321."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "What is the sum of the first 10 odd natural numbers (1 + 3 + 5 + ... + 19)?",
    "options": ["100 (= 10²)", "90", "110", "81"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The sum of the first n odd natural numbers is always equal to n²; for n = 10, sum = 10² = 100."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "A school canteen charges ₹ 25 for lunch and ₹ 6 for milk each day. How much money does a student spend in 5 days on these items?",
    "options": ["₹ 155", "₹ 150", "₹ 160", "₹ 145"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Total spent = 5 × (25 + 6) = 5 × 31 = ₹ 155."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Which of the following numbers can be represented as BOTH a line, a rectangle, a square, AND a triangle in dot geometry?",
    "options": ["36", "16", "25", "10"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "36 is a square number (6²=36) and a triangular number T₈ = 8×9/2 = 36, and can form rectangles (4×9, 3×12, etc.) and a line (1×36)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "Find the value of (3845 × 5 × 782) + (769 × 25 × 218):",
    "options": ["1,92,25,000", "1,92,00,000", "1,85,25,000", "2,00,00,000"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Notice 769 × 25 = 769 × 5 × 5 = 3845 × 5 = 19,225. Expression = 19,225 × (782 + 218) = 19,225 × 1,000 = 1,92,25,000."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 2: Whole Numbers",
    question: "If x is any whole number, which of the following expressions is ALWAYS equal to x?",
    "options": ["x × 1", "x ÷ 0", "x - 1", "x + 1"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "1 is the multiplicative identity: x × 1 = x for every whole number x."
  }
];

console.log('Generated Math Ch2:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/math_ch2.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
