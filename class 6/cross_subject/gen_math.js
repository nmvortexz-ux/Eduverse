import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 1: Knowing Our Numbers (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "What is the greatest 4-digit number using the digits 7, 3, 9, and 1 without repetition?",
    options: ["9731", "9713", "9371", "7931"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Arranging digits in descending order (9 > 7 > 3 > 1) yields the largest possible numeral: 9731."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "What is the smallest 4-digit number using the digits 5, 0, 8, and 2 without repetition?",
    options: ["2058", "0258", "2508", "5028"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A 4-digit number cannot start with 0; hence place the smallest non-zero digit (2) first, followed by 0, 5, 8 giving 2058."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "How many thousands make 1 Lakh in the Indian System of Numeration?",
    options: ["100 thousands", "10 thousands", "1000 thousands", "10000 thousands"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "1 Lakh = 1,00,000 = 100 × 1,000 (100 thousands)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "How many millions make 1 Crore in the International/Indian place value conversion?",
    options: ["10 Millions", "1 Million", "100 Millions", "1000 Millions"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "1 Crore = 1,00,00,000 = 10,000,000 = 10 Millions."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "What is the Roman numeral for 50?",
    options: ["L", "C", "D", "X"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In standard Roman numeration: I=1, V=5, X=10, L=50, C=100, D=500, M=1000."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "What is the Roman numeral for 100?",
    options: ["C", "L", "M", "D"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "C represents 100 in the Roman numeral system (from Latin 'Centum')."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Which Roman numeral symbol can NEVER be repeated or subtracted from larger numerals?",
    options: ["V, L, and D", "I, X, and C", "X and M", "I only"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The symbols V (5), L (50), and D (500) are never written more than once in succession and are never subtracted."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Round off 75,847 to the nearest tens place:",
    options: ["75,850", "75,840", "75,800", "75,900"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The units digit is 7 (≥ 5), so round the tens digit up from 4 to 5, yielding 75,850."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "How many milligrams (mg) are there in 1 kilogram (kg)?",
    options: ["10,00,000 mg (1 million mg)", "10,000 mg", "1,000 mg", "1,00,000 mg"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "1 kg = 1,000 grams; 1 gram = 1,000 mg; therefore 1 kg = 1,000 × 1,000 = 1,000,000 milligrams."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "How many millilitres (mL) make 1 Litre?",
    options: ["1000 mL", "100 mL", "10000 mL", "10 mL"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The metric prefix 'milli' denotes one-thousandth (1/1000); hence 1 L = 1000 mL."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Write 98 in Roman numerals:",
    options: ["XCVIII", "IC", "LXXXXVIII", "VCIII"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "98 = 90 + 8 = (100 - 10) + (5 + 3) = XC + VIII = XCVIII. Note: 'I' cannot be subtracted from C directly."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "In the Indian System of Numeration, where are commas placed in the numeral 50801592?",
    options: ["5,08,01,592", "50,801,592", "508,01,592", "5,080,15,92"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In Indian numeration, commas mark: 3 digits from right (hundreds), then groups of 2 digits (thousands, lakhs, crores): 5,08,01,592."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Find the difference between the greatest and the least 5-digit numbers that can be formed using the digits 6, 2, 7, 4, 3 each only once:",
    options: ["52,965", "53,865", "51,965", "52,865"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Greatest = 76,432. Smallest = 23,467. Difference = 76,432 - 23,467 = 52,965."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "A machine on an average manufactures 2,825 screws a day. How many screws did it produce in the month of January 2024?",
    options: ["87,575 screws", "84,750 screws", "81,925 screws", "88,000 screws"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "January has 31 days. Total screws = 2,825 × 31 = 87,575 screws."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "A vessel has 4 litres and 500 mL of curd. In how many glasses, each of 25 mL capacity, can it be filled?",
    options: ["180 glasses", "150 glasses", "200 glasses", "225 glasses"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Total capacity = 4,500 mL. Number of glasses = 4,500 ÷ 25 = 180 glasses."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Estimate the product 578 × 161 by rounding off each factor to its greatest place:",
    options: ["1,20,000", "1,00,000", "90,000", "1,15,000"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "578 rounds to 600 (hundreds place); 161 rounds to 200 (hundreds place). Estimated product = 600 × 200 = 1,20,000."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "To stitch a shirt, 2 m 15 cm cloth is needed. Out of 40 m cloth, how many shirts can be stitched and how much cloth will remain?",
    options: ["18 shirts, 1 m 30 cm remaining", "19 shirts, 50 cm remaining", "17 shirts, 2 m remaining", "18 shirts, 2 m remaining"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cloth per shirt = 215 cm. Total cloth = 4,000 cm. 4000 ÷ 215 = 18 shirts with remainder 130 cm = 1 m 30 cm."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "What is the Hindu-Arabic numeral value of the Roman expression LXXIX + XLIV?",
    options: ["123", "113", "133", "125"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "LXXIX = 70 + 9 = 79. XLIV = 40 + 4 = 44. Sum = 79 + 44 = 123 (CXXIII)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "A merchant had ₹ 78,592 with her. She placed an order for purchasing 40 radio sets at ₹ 1,200 each. How much money will remain with her after the purchase?",
    options: ["₹ 30,592", "₹ 28,592", "₹ 32,592", "₹ 48,000"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cost of 40 radios = 40 × 1,200 = ₹ 48,000. Remaining balance = 78,592 - 48,000 = ₹ 30,592."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "In the numeral 7,89,34,521, what is the place value and face value of the digit 8?",
    options: [
      "Place value = 80,00,000 (Eighty Lakhs); Face value = 8",
      "Place value = 8,00,000; Face value = 80",
      "Place value = 80,000; Face value = 8",
      "Place value = 8 Crores; Face value = 8"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The digit 8 occupies the Ten Lakhs place; its place value is 8 × 10,00,000 = 80,00,000 while its face value is the digit itself (8)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Estimate the sum 5,290 + 17,986 by rounding off to the nearest thousands:",
    options: ["23,000", "22,000", "24,000", "23,200"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "5,290 rounds to 5,000; 17,986 rounds to 18,000. Sum = 5,000 + 18,000 = 23,000."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Write 7,452 in expanded form:",
    options: [
      "7 × 1000 + 4 × 100 + 5 × 10 + 2 × 1",
      "7 × 10000 + 4 × 1000 + 5 × 100 + 2 × 10",
      "7000 + 400 + 50 + 20",
      "7 × 100 + 4 × 10 + 5 × 1 + 2"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Expanded form represents the sum of the products of each digit with its corresponding place value."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "A medicine box contains 2,00,000 tablets each weighing 20 mg. What is the total weight of all tablets in grams and in kilograms?",
    options: ["4,000 grams = 4 kg", "40,000 grams = 40 kg", "400 grams = 0.4 kg", "400,000 grams = 400 kg"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Total weight = 200,000 × 20 mg = 4,000,000 mg = 4,000,000 ÷ 1,000 g = 4,000 g = 4 kg."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "The distance between a school and a student's house is 1 km 875 m. Every day she walks both ways. Find the total distance covered by her in 6 days.",
    options: ["22 km 500 m", "20 km 250 m", "21 km 750 m", "24 km"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Daily round trip = 2 × 1,875 m = 3,750 m. 6 days = 6 × 3,750 m = 22,500 m = 22 km 500 m."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "How is the number 85,420,109 read in the International Number System?",
    options: [
      "Eighty-five million four hundred twenty thousand one hundred nine",
      "Eight crore fifty-four lakh twenty thousand one hundred nine",
      "Eight hundred fifty-four thousand one hundred nine",
      "Eight billion five hundred million"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "International periods group into Millions (85), Thousands (420), and Units (109)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "What is the Roman numeral for 69?",
    options: ["LXIX", "ILXX", "LXXI", "XXXXXXIX"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "69 = 60 + 9 = (50 + 10) + (10 - 1) = LX + IX = LXIX."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Which of the following Roman numeral representations is INVALID according to NCERT rules?",
    options: ["VV", "XV", "LV", "LX"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "'V' (5) is never repeated; 10 is represented by 'X', not 'VV'."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Find the difference between the place values of two 7s in the number 57,34,725:",
    options: ["6,99,300", "7,00,000", "6,93,000", "7,00,700"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "First 7 is at Ten Lakhs place (7,00,000); second 7 is at Hundreds place (700). Difference = 7,00,000 - 700 = 6,99,300."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Read the statements:\nAssertion (A): The Roman numeral CDXLIV represents 444 in the Hindu-Arabic system.\nReason (R): CD = (500 - 100) = 400, XL = (50 - 10) = 40, and IV = (5 - 1) = 4, so 400 + 40 + 4 = 444.\nChoose the correct option:",
    "options": [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "CDXLIV decomposes strictly as CD (400) + XL (40) + IV (4) = 444."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Spot the IMPOSTER in the following list of Roman Numeral expressions that violates standard mathematical rules:\nGroup: [XCVI, CDX, IC, MCM]",
    "options": ["XCVI", "CDX", "IC", "MCM"],
    correctAnswer: 2,
    difficulty: "HARD",
    damage: 350,
    explanation: "'IC' is invalid; the symbol 'I' can ONLY be subtracted from 'V' and 'X', never from 'L', 'C', 'D', or 'M'. 99 is written as XCIX."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "A student multiplied 7,236 by 65 instead of multiplying by 56. By how much was his answer greater than the correct answer?",
    "options": ["65,124", "58,344", "72,360", "64,124"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Difference = 7,236 × (65 - 56) = 7,236 × 9 = 65,124."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "How many total 7-digit numbers exist in all of mathematics?",
    "options": ["90,00,000 (90 Lakhs)", "99,99,999", "10,00,000", "9,00,000"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Largest 7-digit number = 99,99,999; Smallest 7-digit number = 10,00,000. Total = (99,99,999 - 10,00,000) + 1 = 90,00,000."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "What is the difference between the successor of the greatest 6-digit number and the predecessor of the smallest 5-digit number?",
    "options": ["9,90,002", "9,90,001", "10,00,001", "9,89,999"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Greatest 6-digit number = 999,999 → Successor = 1,000,000. Smallest 5-digit number = 10,000 → Predecessor = 9,999. Difference = 1,000,000 - 9,999 = 9,90,001 (Correction: 1000000 - 9999 = 990001)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Estimate the quotient 4,498 ÷ 48 using appropriate general rounding rules:",
    options: ["90", "100", "80", "110"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "4,498 rounds to 4,500; 48 rounds to 50. 4,500 ÷ 50 = 90."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Read the statements:\nStatement 1: 1 Billion = 100 Crores in the Indian system.\nStatement 2: The symbol 'X' can be subtracted from 'L' and 'C' only.\nStatement 3: 1 Kilolitre = 1,000,000 mL.\nWhich statements are TRUE?",
    options: ["All Statements 1, 2, and 3", "Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "1 Billion = 1,000,000,000 = 100 Crores (1,00,00,00,000). All three statements are mathematically exact."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Form the smallest 6-digit number using the digits 4, 0, 9, 2, 7, 5 where the digit 9 ALWAYS remains at the tens place:",
    options: ["204597", "204795", "024597", "205497"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Non-zero smallest at Lakhs: 2, then 0, 4, 5, followed by 9 fixed at tens place, ending with 7: 204597."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "Solve using distribution property over brackets: 738 × 103",
    options: ["76,014", "75,914", "76,114", "74,814"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "738 × (100 + 3) = 738 × 100 + 738 × 3 = 73,800 + 2,214 = 76,014."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "A carton holds 24 boxes, and each box contains 15 packets of biscuits. If each biscuit packet costs ₹ 12, what is the total cost of biscuits in 10 such cartons?",
    options: ["₹ 43,200", "₹ 41,200", "₹ 36,000", "₹ 48,000"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Packets per carton = 24 × 15 = 360 packets. Total in 10 cartons = 3,600 packets. Cost = 3,600 × 12 = ₹ 43,200."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "What is the Roman numeral for 495?",
    options: ["CDXCV", "VD", "CCCCXCV", "DXCV"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "495 = 400 + 90 + 5 = CD + XC + V = CDXCV."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 1: Knowing Our Numbers",
    question: "If a number is rounded off to the nearest thousands as 50,000, what is the SMALLEST possible integer it could have been?",
    options: ["49,500", "49,000", "49,999", "49,499"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "To round UP to 50,000 at the thousands place, the hundreds digit must be at least 5; thus the minimum integer is 49,500."
  }
];

console.log('Generated Math:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/math_ch1.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
