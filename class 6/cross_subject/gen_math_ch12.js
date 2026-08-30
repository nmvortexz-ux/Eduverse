import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 12: Ratio and Proportion (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Comparing two quantities of the SAME kind and in the SAME units by division is called a:",
    options: ["Ratio (denoted by the colon symbol ':')", "Fraction", "Percentage", "Equation"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A ratio is a mathematical comparison of two quantities of identical physical dimension by division (a : b = a/b)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "What is the Ratio of 20 boys to 40 girls in a classroom in its simplest form?",
    options: ["1 : 2 (20/40 = 1/2)", "2 : 1", "1 : 4", "20 : 40"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ratio = 20/40 = 1/2 = 1 : 2."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Find the ratio of 15 cm to 2 metres (remember to convert both into the SAME unit first):",
    options: ["3 : 40 (2 m = 200 cm ; Ratio = 15/200 = 3/40)", "15 : 2", "3 : 20", "15 : 200"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "2 m = 200 cm. Ratio = 15 / 200 = (15÷5) / (200÷5) = 3/40 = 3 : 40."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Find the ratio of 50 paise to ₹5 in simplest form:",
    options: ["1 : 10 (₹5 = 500 paise ; Ratio = 50/500 = 1/10)", "1 : 5", "10 : 1", "50 : 5"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "₹5 = 500 paise. Ratio = 50 / 500 = 1/10 = 1 : 10."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "An equality of two ratios (e.g. a : b = c : d or a : b :: c : d) is called a:",
    options: ["Proportion", "Fraction", "Percentage", "Linear Equation"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A proportion states that two ratios are equal: a/b = c/d."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "In a proportion a : b :: c : d, what are the first and fourth terms (a and d) called, and what are the middle terms (b and c) called?",
    options: [
      "'a' and 'd' are Extreme Terms (Extremes) ; 'b' and 'c' are Middle Terms (Means)",
      "All four are Means",
      "All four are Extremes",
      "'a' and 'b' are Extremes"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In a : b = c : d, outer terms (a, d) are Extremes and inner terms (b, c) are Means."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "What is the fundamental property of four numbers in Proportion (a : b :: c : d)?",
    options: [
      "Product of Extremes = Product of Means (a × d = b × c)",
      "Sum of Extremes = Sum of Means",
      "Difference of Extremes = Difference of Means",
      "Extremes divided by Means = 0"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Cross-multiplication rule: a/b = c/d ⇔ a × d = b × c."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "The method in which we first find the value of ONE unit and then find the value of the REQUIRED number of units is called the:",
    options: ["Unitary Method", "Trial and Error Method", "Substitution Method", "Elimination Method"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Unitary Method calculates the per-unit cost/value first (by division) and scales up (by multiplication)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "If the cost of 6 cans of juice is ₹210, what is the cost of 4 cans of juice?",
    options: ["₹140 (1 can = 210/6 = ₹35 ; 4 cans = 35 × 4 = ₹140)", "₹120", "₹160", "₹180"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Cost of 1 can = 210 ÷ 6 = ₹35. Cost of 4 cans = 35 × 4 = ₹140."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Are the numbers 25, 30, 40, and 48 in Proportion?",
    options: [
      "Yes (25/30 = 5/6 and 40/48 = 5/6 ; Product of extremes = 25 × 48 = 1200, Product of means = 30 × 40 = 1200)",
      "No",
      "Only if multiplied by 2",
      "Cannot be determined"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "25/30 = 5/6; 40/48 = 5/6. Since ratios are equal (1200 = 1200), they are in proportion."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Find the ratio of 30 minutes to 1.5 hours in simplest form:",
    options: ["1 : 3 (1.5 hours = 90 minutes ; Ratio = 30/90 = 1/3)", "1 : 2", "30 : 1.5", "1 : 5"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "1.5 hours = 1.5 × 60 = 90 minutes. Ratio = 30 / 90 = 1/3 = 1 : 3."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Does a pure mathematical Ratio have any physical unit (like cm, kg, or rupees)?",
    options: [
      "No, a ratio is a pure dimensionless number with NO units (units cancel out during division)",
      "Yes, ratio has units of cm",
      "Yes, ratio has units of kg",
      "Only if it compares time"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Ratios compare like quantities; identical dimensional units in numerator and denominator cancel out."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "In a year, Seema earns ₹1,50,000 and saves ₹50,000. Find the ratio of money that Seema saves to the money she SPENDS:",
    options: [
      "1 : 2 (Spends = 1,50,000 - 50,000 = ₹1,00,000 ; Ratio = 50,000 / 1,00,000 = 1/2)",
      "1 : 3",
      "2 : 1",
      "1 : 4"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Expenditure = 1,50,000 - 50,000 = ₹1,00,000. Savings : Expenditure = 50,000 : 1,00,000 = 1 : 2."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Divide ₹1,200 between Sheela and Sangeeta in the ratio of 3 : 2. How much money will Sheela and Sangeeta get respectively?",
    options: [
      "Sheela: ₹720 ; Sangeeta: ₹480 (Total parts = 3 + 2 = 5 ; Sheela = 3/5 × 1200 = ₹720 ; Sangeeta = 2/5 × 1200 = ₹480)",
      "Sheela: ₹600 ; Sangeeta: ₹600",
      "Sheela: ₹800 ; Sangeeta: ₹400",
      "Sheela: ₹900 ; Sangeeta: ₹300"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sum of ratio parts = 3 + 2 = 5. Sheela = (3/5) × 1200 = ₹720; Sangeeta = (2/5) × 1200 = ₹480."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Find the missing value 'x' in the proportion: 8 : 12 :: x : 18",
    options: ["x = 12 (8 × 18 = 12 × x ⇒ 144 = 12x ⇒ x = 144/12 = 12)", "x = 10", "x = 14", "x = 16"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Product of extremes = Product of means: 8 × 18 = 12 × x ⇒ 144 = 12x ⇒ x = 12."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "A motorbike travels 330 km in 5 litres of petrol. How much distance can it travel in 1.5 litres of petrol?",
    options: ["99 km (1 litre = 330/5 = 66 km ; 1.5 litres = 66 × 1.5 = 99 km)", "88 km", "110 km", "95 km"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mileage = 330 ÷ 5 = 66 km/litre. Distance for 1.5 L = 66 × 1.5 = 99 km."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "If the cost of 7 metres of cloth is ₹1,470, find the cost of 5 metres of cloth:",
    options: ["₹1,050 (1 metre = 1470/7 = ₹210 ; 5 metres = 210 × 5 = ₹1,050)", "₹1,000", "₹1,100", "₹950"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cost of 1 m = 1470 ÷ 7 = ₹210. Cost of 5 m = 210 × 5 = ₹1,050."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Cost of a dozen (12) pens is ₹180 and cost of 8 ball pens is ₹56. Find the ratio of the cost of a pen to the cost of a ball pen:",
    options: [
      "15 : 7 (1 pen = 180/12 = ₹15 ; 1 ball pen = 56/8 = ₹7 ; Ratio = 15/7 = 15 : 7)",
      "18 : 7",
      "15 : 8",
      "7 : 15"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "1 pen = 180/12 = ₹15; 1 ball pen = 56/8 = ₹7. Ratio = 15 : 7."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "The length and breadth of a school rectangular ground are 75 m and 25 m respectively. Find the ratio of the BREADTH to the LENGTH of the ground:",
    options: ["1 : 3 (Breadth/Length = 25/75 = 1/3)", "3 : 1", "1 : 2", "2 : 3"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Order matters: Breadth : Length = 25 : 75 = 1 : 3."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Anish made 42 runs in 6 overs and Anup made 63 runs in 7 overs. Who made MORE runs per over and by how much?",
    options: [
      "Anup made more runs per over (Anish = 42/6 = 7 runs/over ; Anup = 63/7 = 9 runs/over ; Anup is higher by 2 runs/over)",
      "Anish made more runs per over",
      "Both made exactly the same runs per over",
      "Anup is higher by 5 runs/over"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Anish rate = 42/6 = 7; Anup rate = 63/7 = 9. Anup scored 9 runs/over (+2 higher)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Which of the two ratios is GREATER: 3 : 4 or 5 : 6?",
    options: [
      "5 : 6 is greater (3/4 = 9/12 = 0.75 ; 5/6 = 10/12 = 0.833 ⇒ 5/6 > 3/4)",
      "3 : 4 is greater",
      "Both ratios are equal",
      "Cannot be compared"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Comparing fractions with common denominator 12: 9/12 < 10/12 ⇒ 5 : 6 > 3 : 4."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "A car covers 180 km in 4 hours. How much time will it take to cover 450 km at the same uniform speed?",
    options: ["10 hours (Speed = 180/4 = 45 km/h ; Time = 450/45 = 10 hours)", "8 hours", "12 hours", "9 hours"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Speed = 180 ÷ 4 = 45 km/h. Time = Distance ÷ Speed = 450 ÷ 45 = 10 hours."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Find two Equivalent Ratios for 4 : 6:",
    options: ["2 : 3 and 8 : 12", "1 : 2 and 3 : 4", "6 : 4 and 12 : 8", "4 : 12 and 6 : 18"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Dividing by 2 gives 2 : 3; multiplying by 2 gives 8 : 12."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "If 4, x, 9 are in CONTINUED Proportion (4 : x :: x : 9), find the positive value of x:",
    options: ["x = 6 (x² = 4 × 9 = 36 ⇒ x = √36 = 6)", "x = 5", "x = 7", "x = 8"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "In continued proportion, Mean Proportional x² = a × c ⇒ x² = 4 × 9 = 36 ⇒ x = 6."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Ekta earns ₹1,500 in 10 days. How much will she earn in 30 days?",
    options: ["₹4,500 (1 day = 1500/10 = ₹150 ; 30 days = 150 × 30 = ₹4,500)", "₹3,000", "₹5,000", "₹4,000"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Earnings/day = 1500/10 = ₹150. For 30 days = 150 × 30 = ₹4,500."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "The weight of 72 books is 9 kg. What is the weight of 40 such books?",
    options: ["5 kg (1 book = 9/72 = 1/8 kg ; 40 books = 40 × 1/8 = 5 kg)", "4 kg", "6 kg", "8 kg"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Weight of 1 book = 9/72 = 1/8 kg. Weight of 40 books = 40 × (1/8) = 5 kg."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "If it has rained 276 mm in the last 3 days, how many cm of rain will fall in one full week (7 days) assuming constant rainfall rate?",
    options: ["64.4 cm (1 day = 276/3 = 92 mm ; 7 days = 92 × 7 = 644 mm = 64.4 cm)", "644 cm", "6.44 cm", "27.6 cm"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Daily rate = 276/3 = 92 mm/day. 7 days = 92 × 7 = 644 mm = 64.4 cm."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Fill in the blank to make the proportion true: 15 / 18 = ___ / 6",
    options: ["5 (15/18 = (15÷3)/(18÷3) = 5/6)", "6", "3", "4"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "18 ÷ 3 = 6; therefore 15 ÷ 3 = 5."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Read the statements:\nAssertion (A): Two quantities can be compared in a ratio ONLY when they are expressed in the exact same physical units.\nReason (R): Ratios represent pure dimensionless scaling multipliers; if units differ (e.g. 50 paise to ₹5), the ratio 50 : 5 would produce a disastrously false 10 : 1 comparison instead of the true 1 : 10.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Dimensional consistency is mandatory for valid mathematical ratio comparison."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Spot the IMPOSTER in the following pairs of ratios tested for PROPORTION:\nGroup: [1 : 5 and 3 : 15 (Proportion), 2 : 9 and 18 : 81 (Proportion), 15 : 45 and 5 : 25 (Proportion), 4 : 12 and 9 : 27 (Proportion)]",
    options: [
      "1 : 5 and 3 : 15 (Proportion)",
      "2 : 9 and 18 : 81 (Proportion)",
      "15 : 45 and 5 : 25 (Proportion)",
      "4 : 12 and 9 : 27 (Proportion)"
    ],
    correctAnswer: 2,
    difficulty: "HARD",
    damage: 350,
    explanation: "15/45 = 1/3, whereas 5/25 = 1/5. Since 1/3 ≠ 1/5, they are NOT in proportion."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "In a triangle, the angles are in the ratio 2 : 3 : 4. If the sum of interior angles of a triangle is always 180°, find the measure of the three angles:",
    options: [
      "40°, 60°, 80° (Total parts = 2 + 3 + 4 = 9 ; 1 part = 180/9 = 20° ; Angles = 2(20°)=40°, 3(20°)=60°, 4(20°)=80°)",
      "30°, 60°, 90°",
      "45°, 45°, 90°",
      "50°, 60°, 70°"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "9 parts = 180° ⇒ 1 part = 20°. Angles are 2×20 = 40°, 3×20 = 60°, 4×20 = 80°."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Match Column I (Quantities Compared) with Column II (Simplest Ratios):\n(a) 500 mL to 2 Litres    -> (i) 1 : 4\n(b) 3 days to 30 hours    -> (ii) 12 : 5\n(c) 40 cm to 1.5 m        -> (iii) 4 : 15\n(d) 55 paise to ₹1        -> (iv) 11 : 20",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "500/2000 = 1:4; 72/30 = 12:5; 40/150 = 4:15; 55/100 = 11:20."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Read the statements regarding proportional reasoning:\nStatement 1: If 15 workers build a wall in 48 hours, 30 workers will take LESS time (24 hours) - this is an Inverse Proportion.\nStatement 2: If the cost of 5 books is ₹200, the cost of 10 books is MORE (₹400) - this is a Direct Proportion.\nStatement 3: Product of extremes must always equal sum of means in proportion.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because Product of extremes must equal PRODUCT (not sum) of means. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Present ages of a father and son are 42 years and 14 years respectively. Find the ratio of the age of father to the age of son when the son was 12 years old (2 years ago):",
    options: [
      "10 : 3 (2 years ago: Father = 40 years, Son = 12 years ; Ratio = 40/12 = 10/3 = 10 : 3)",
      "3 : 1",
      "4 : 1",
      "7 : 2"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "2 years ago: Father = 40, Son = 12. Ratio = 40/12 = 10/3 = 10 : 3."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "What is the ratio of father's age to son's age after 10 years (Father = 52, Son = 24)?",
    options: ["13 : 6 (52 / 24 = (52÷4) / (24÷4) = 13/6 = 13 : 6)", "14 : 7", "12 : 5", "2 : 1"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "In 10 years: Father = 42 + 10 = 52; Son = 14 + 10 = 24. Ratio = 52/24 = 13/6 = 13 : 6."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Two numbers are in the ratio 5 : 8. If their sum is 91, find the difference between the two numbers:",
    options: [
      "21 (Total parts = 13 ; 1 part = 91/13 = 7 ; Numbers are 35 and 56 ; Difference = 56 - 35 = 21)",
      "14",
      "28",
      "18"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "13x = 91 ⇒ x = 7. Numbers = 35 and 56. Difference = 56 - 35 = 21."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "A map is drawn to a scale of 1 : 25,000,000 (1 cm on map = 250 km on ground). If two cities are 4.8 cm apart on the map, what is the actual distance between them on ground?",
    options: ["1,200 km (4.8 × 250 = 1,200 km)", "1,000 km", "1,500 km", "960 km"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Actual distance = 4.8 cm × 250 km/cm = 1,200 km."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "If A : B = 2 : 3 and B : C = 4 : 5, find the compound ratio A : B : C:",
    options: [
      "8 : 12 : 15 (Multiply A:B by 4 -> 8:12 ; Multiply B:C by 3 -> 12:15 ⇒ A:B:C = 8:12:15)",
      "2 : 4 : 5",
      "8 : 10 : 15",
      "6 : 8 : 15"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Equalizing B: A:B = 8:12 and B:C = 12:15 ⇒ A : B : C = 8 : 12 : 15."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "In an alloy of brass, copper and zinc are mixed in the ratio 7 : 3. How much zinc is present in 35 kg of this brass alloy?",
    options: ["10.5 kg (Total parts = 10 ; Zinc = (3/10) × 35 = 10.5 kg)", "15 kg", "12 kg", "9.5 kg"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Zinc weight = (3/10) × 35 = 10.5 kg."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 12: Ratio and Proportion",
    question: "Why does Ratio and Proportional reasoning form the cornerstone of all quantitative sciences (physics, chemistry stoichiometry, economic scaling, and engineering design)?",
    options: [
      "It allows scale-invariant proportional comparisons, rate scaling, recipe formulations, and predictive quantitative modeling across macroscopic and microscopic dimensions",
      "Because proportions replace all algebra",
      "Because division is the only math operation",
      "Because numbers without ratios have no value"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Proportional scaling underpins dimensional analysis, chemical molar stoichiometry, and scale-model engineering."
  }
];

console.log('Generated Math Ch12:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/math_ch12.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
