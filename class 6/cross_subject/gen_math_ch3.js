import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 3: Playing with Numbers (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "A number which has only two distinct factors, 1 and the number itself, is called a:",
    options: ["Prime Number", "Composite Number", "Even Number", "Odd Number"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Prime numbers (2, 3, 5, 7, 11...) have exactly two positive factors: 1 and the number itself."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Numbers having more than two factors are called:",
    options: ["Composite Numbers", "Prime Numbers", "Odd Numbers", "Twin Primes"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Composite numbers (4, 6, 8, 9, 10...) can be divided evenly by numbers other than 1 and themselves."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Which unique number is NEITHER a prime number NOR a composite number?",
    options: ["1", "0", "2", "3"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The number 1 has only one single factor (1); hence it is neither prime (2 factors) nor composite (> 2 factors)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "What is the smallest and ONLY EVEN prime number?",
    options: ["2", "4", "0", "1"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "2 is the smallest prime number and the only even prime, as all other even numbers are divisible by 2."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Two prime numbers whose difference is exactly 2 (such as 3 and 5, or 5 and 7) are called:",
    options: ["Twin Primes", "Co-primes", "Perfect Numbers", "Composite Numbers"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Twin primes are pairs of prime numbers differing by 2: (3, 5), (5, 7), (11, 13), (17, 19)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Two numbers having only 1 as their common factor (such as 4 and 15) are called:",
    options: ["Co-prime Numbers (Relatively Prime)", "Twin Primes", "Composite Numbers", "Even Numbers"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Two integers a and b are co-prime if their Highest Common Factor HCF(a, b) = 1."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "What is a number for which the sum of all its factors is equal to twice the number called?",
    options: ["A Perfect Number (e.g., 6 and 28)", "A Prime Number", "A Composite Number", "A Twin Prime"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "For 6: factors are 1, 2, 3, 6; sum = 1+2+3+6 = 12 = 2 × 6; hence 6 is a perfect number."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "A number is divisible by 2 if its units digit is:",
    options: ["0, 2, 4, 6, or 8 (Even digit)", "1, 3, 5, 7, 9", "0 or 5 only", "Divisible by 3"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Divisibility by 2 requires the last digit to be an even number (0, 2, 4, 6, 8)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "A number is divisible by 3 if:",
    options: [
      "The sum of all its digits is a multiple of 3 (divisible by 3)",
      "Its last digit is 3",
      "Its last two digits are divisible by 3",
      "It is an odd number"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In base-10, since 10 ≡ 1 (mod 3), a number is divisible by 3 if and only if the sum of its digits is divisible by 3."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "A number is divisible by 5 if its units digit is:",
    options: ["0 or 5", "0, 2, 4, 6, 8", "5 only", "Any odd digit"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Multiples of 5 always terminate in either 0 or 5 in the standard decimal numeral system."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "What is the Highest Common Factor (HCF) of two consecutive numbers (like 8 and 9)?",
    options: ["1", "2", "Their product", "0"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Any two consecutive integers are always co-prime; therefore their HCF is strictly 1."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "What is the Lowest Common Multiple (LCM) of two co-prime numbers a and b?",
    options: ["a × b (Their product)", "1", "a + b", "a - b"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Since HCF(a, b) = 1 and HCF × LCM = a × b, the LCM of co-prime numbers is their product a × b."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "A number is divisible by 6 if it satisfies which condition?",
    options: [
      "It is divisible by BOTH 2 and 3 simultaneously",
      "It is divisible by 2 only",
      "It is divisible by 3 only",
      "Its last digit is 6"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Since 6 = 2 × 3 and 2, 3 are co-prime, divisibility by 6 requires the number to be even and have a digit sum divisible by 3."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "A number with 3 or more digits is divisible by 4 if:",
    options: [
      "The number formed by its last two digits (tens and units) is divisible by 4",
      "Its units digit is 4",
      "The sum of its digits is divisible by 4",
      "It ends in an odd number"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Since 100 is divisible by 4, only the last two digits determine divisibility by 4."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "A number with 4 or more digits is divisible by 8 if:",
    options: [
      "The number formed by its last three digits (hundreds, tens, and units) is divisible by 8",
      "Its last digit is 8",
      "The sum of its digits is 8",
      "It is divisible by 4 only"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Since 1000 is divisible by 8, divisibility depends entirely on the last 3 digits."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "A number is divisible by 9 if:",
    options: [
      "The sum of all its digits is divisible by 9",
      "Its last digit is 9",
      "Its last two digits are 99",
      "It is an odd number"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Since 10 ≡ 1 (mod 9), a number n is divisible by 9 if the sum of its decimal digits is a multiple of 9."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "What is the divisibility test for 11?",
    options: [
      "The difference between the sum of the digits at odd places (from right) and the sum of digits at even places is either 0 or divisible by 11",
      "The sum of all digits is 11",
      "The last two digits are identical",
      "The units digit is 1"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Alternating sum of digits modulo 11 determines divisibility because 10 ≡ -1 (mod 11)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Find the Prime Factorisation of the number 980:",
    options: ["2 × 2 × 5 × 7 × 7 (2² × 5 × 7²)", "2 × 5 × 7 × 14", "4 × 5 × 49", "2 × 2 × 2 × 5 × 7"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "980 ÷ 2 = 490; 490 ÷ 2 = 245; 245 ÷ 5 = 49; 49 ÷ 7 = 7; 7 ÷ 7 = 1 -> 2² × 5 × 7²."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Find the HCF of 18, 54, and 81:",
    options: ["9", "18", "3", "27"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "18 = 2 × 3²; 54 = 2 × 3³; 81 = 3⁴. Common prime factors with lowest powers = 3² = 9."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Find the LCM of 12, 16, and 24:",
    options: ["48", "96", "24", "72"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "12 = 2² × 3; 16 = 2⁴; 24 = 2³ × 3. LCM = highest powers of primes = 2⁴ × 3 = 16 × 3 = 48."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "What is the HCF of two consecutive EVEN numbers (like 6 and 8, or 10 and 12)?",
    options: ["2", "1", "4", "Their product"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Consecutive even numbers are 2k and 2k + 2 = 2(k + 1). Since k and k + 1 are co-prime, HCF = 2."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "What is the HCF of two consecutive ODD numbers (like 7 and 9, or 15 and 17)?",
    options: ["1", "2", "3", "Their sum"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Consecutive odd numbers share no common factor greater than 1; their HCF is always 1."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Which of the following numbers is divisible by 11: 61809 or 1331?",
    options: ["Both 61809 and 1331", "1331 only", "61809 only", "Neither of them"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "For 1331: (1+3)-(3+1)=0 (div by 11). For 61809: (9+8+6)-(0+1)=23-1=22 (div by 11). Both are divisible."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Two tankers contain 850 litres and 680 litres of kerosene oil respectively. Find the maximum capacity of a container which can measure the kerosene of both tankers when used an exact number of times:",
    options: ["170 litres (HCF of 850 and 680)", "85 litres", "340 litres", "100 litres"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "850 = 170 × 5; 680 = 170 × 4. HCF(850, 680) = 170 litres."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Three boys step off together from the same spot. Their steps measure 63 cm, 70 cm, and 77 cm respectively. What is the minimum distance each should cover so that all can cover the distance in complete steps?",
    options: ["6,930 cm (= 69 m 30 cm)", "6,300 cm", "7,700 cm", "5,400 cm"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Minimum distance = LCM(63, 70, 77) = 7 × 9 × 10 × 11 = 6,930 cm."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "What is the smallest 3-digit number which is exactly divisible by 6, 8, and 12?",
    options: ["120", "144", "108", "100"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "LCM(6, 8, 12) = 24. Smallest 3-digit multiple of 24 = 24 × 5 = 120."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Find the least number which when divided by 6, 15, and 18 leaves a remainder of 5 in each case:",
    options: ["95", "90", "85", "105"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "LCM(6, 15, 18) = 90. Required number = LCM + remainder = 90 + 5 = 95."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Which of the following pairs of numbers are Co-prime?",
    options: ["18 and 35", "15 and 37", "81 and 16", "All of the above"],
    correctAnswer: 3,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "HCF(18, 35) = 1; HCF(15, 37) = 1; HCF(81, 16) = 1. All three pairs share no common factor other than 1."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Read the statements:\nAssertion (A): The number 28 is a Perfect Number.\nReason (R): The factors of 28 are 1, 2, 4, 7, 14, and 28; their sum is 1 + 2 + 4 + 7 + 14 + 28 = 56, which equals 2 × 28.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "A perfect number equals half the sum of all its positive divisors, exactly demonstrated for 28."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Spot the IMPOSTER in the following group of numbers that is NOT a Prime number:\nGroup: [31, 61, 71, 91]",
    options: ["31", "61", "71", "91"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "91 is composite: 91 = 7 × 13. The numbers 31, 61, and 71 are prime."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "The traffic lights at three different road crossings change after every 48 seconds, 72 seconds, and 108 seconds respectively. If they change simultaneously at 7:00 AM, at what time will they change simultaneously again?",
    options: ["7:07:12 AM (7 hours 7 minutes 12 seconds AM)", "7:12:00 AM", "7:14:24 AM", "7:05:00 AM"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "LCM(48, 72, 108) = 432 seconds = 7 minutes 12 seconds. Time = 7:07:12 AM."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Determine the greatest 3-digit number which is exactly divisible by 8, 10, and 12:",
    options: ["960", "980", "990", "940"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "LCM(8, 10, 12) = 120. Largest 3-digit number 999 ÷ 120 = 8 with remainder 39. Greatest multiple = 999 - 39 = 960."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Match the numbers in Column I with their properties in Column II:\n(a) 35 -> (i) Multiple of 8\n(b) 15 -> (ii) Factor of 30\n(c) 16 -> (iii) Multiple of 7\n(d) 20 -> (iv) Factor of 20",
    options: [
      "a-(iii), b-(ii), c-(i), d-(iv)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(ii), b-(iv), c-(i), d-(iii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "35 = multiple of 7 (7×5); 15 = factor of 30 (30÷15=2); 16 = multiple of 8 (8×2); 20 = factor of 20."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "In the 6-digit number 92_389, replace the blank (_) with the smallest digit so that the number becomes divisible by 11:",
    options: ["8", "0", "9", "3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Odd place sum = 9 + 3 + 2 = 14. Even place sum = 8 + _ + 9 = 17 + _. (17 + _) - 14 = 3 + _ must equal 11 -> _ = 8."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Read the statements:\nStatement 1: If a number is divisible by 9, it must be divisible by 3.\nStatement 2: If a number is divisible by 3, it must be divisible by 9.\nStatement 3: If a number divides the sum of two numbers, it must divide the two numbers separately.\nWhich statements are TRUE?",
    options: ["Statement 1 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false (e.g. 6 is div by 3 but not 9). Statement 3 is false (e.g. 5 divides (2+3)=5 but not 2 or 3). Only Statement 1 is true."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "What is the Prime Factorisation of the smallest 5-digit number (10,000)?",
    options: ["2⁴ × 5⁴ (2 × 2 × 2 × 2 × 5 × 5 × 5 × 5)", "2⁵ × 5⁵", "2³ × 5⁴", "10⁴"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "10,000 = 10⁴ = (2 × 5)⁴ = 2⁴ × 5⁴ = 16 × 625 = 10,000."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "The HCF and LCM of two numbers are 12 and 240 respectively. If one of the numbers is 48, what is the other number?",
    options: ["60", "72", "80", "96"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Product of two numbers = HCF × LCM -> 48 × y = 12 × 240 = 2,880 -> y = 2,880 ÷ 48 = 60."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Express the number 44 as the sum of two odd primes:",
    options: ["3 + 41 (or 7 + 37, 13 + 31)", "2 + 42", "4 + 40", "1 + 43"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Goldbach's partition: 3 and 41 are both odd prime numbers and 3 + 41 = 44."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "Find the greatest number which will divide 136, 170, and 255 leaving zero remainder in each case:",
    options: ["17", "34", "51", "15"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "136 = 17 × 8; 170 = 17 × 10; 255 = 17 × 15. HCF(136, 170, 255) = 17."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 3: Playing with Numbers",
    question: "How many total prime numbers exist between 1 and 100 in the Sieve of Eratosthenes?",
    options: ["25 prime numbers", "21 prime numbers", "28 prime numbers", "30 prime numbers"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "There are exactly 25 prime numbers less than 100: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97."
  }
];

console.log('Generated Math Ch3:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/math_ch3.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
