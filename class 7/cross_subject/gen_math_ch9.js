import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 9: Perimeter and Area (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "What is the formula for finding the PERIMETER of a Rectangle of length l and breadth b?",
    options: ["Perimeter = 2 × (l + b)", "Perimeter = l × b", "Perimeter = 4 × l", "Perimeter = l + b"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rectangle perimeter P = 2(length + breadth)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "What is the formula for the AREA of a Square of side 'a'?",
    options: ["Area = a² (Side × Side)", "Area = 4 × a", "Area = 2 × a", "Area = a / 4"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Area of a square = side × side = a²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "What is the formula for the AREA of a PARALLELOGRAM with base 'b' and corresponding height 'h'?",
    options: ["Area = Base × Height (b × h)", "Area = 1/2 × b × h", "Area = 2 × (b + h)", "Area = b² × h"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Area of a parallelogram = base × corresponding height (b × h)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "What is the formula for the AREA of a TRIANGLE with base 'b' and height 'h'?",
    options: ["Area = 1/2 × Base × Height (1/2 × b × h)", "Area = b × h", "Area = 2 × b × h", "Area = (b + h) / 2"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A triangle is half of a parallelogram, so Area = 1/2 × base × height."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "What is the formula for the CIRCUMFERENCE (perimeter) of a circle of radius 'r' (or diameter 'd')?",
    options: ["Circumference = 2πr (or πd)", "Circumference = πr²", "Circumference = 4πr", "Circumference = 2πr²"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Circumference of a circle C = 2πr = πd."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "What is the formula for the AREA of a Circle of radius 'r'?",
    options: ["Area = πr²", "Area = 2πr", "Area = πd", "Area = 4πr²"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Area enclosed by a circle A = πr²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "How many square metres (m²) are there in 1 HECTARE?",
    options: ["10,000 m² (1 Hectare = 100 m × 100 m = 10,000 m²)", "1,000 m²", "100 m²", "100,000 m²"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "1 hectare = 10,000 m² (a square of 100 m × 100 m)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Find the Circumference of a circle of radius 14 cm (Take π = 22/7):",
    options: ["88 cm (C = 2 × (22/7) × 14 = 2 × 22 × 2 = 88 cm)", "44 cm", "176 cm", "616 cm"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "C = 2 × (22/7) × 14 = 88 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Find the Area of a circle of radius 7 cm (Take π = 22/7):",
    options: ["154 cm² (Area = (22/7) × 7 × 7 = 154 cm²)", "44 cm²", "308 cm²", "77 cm²"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Area = (22/7) × 7² = 154 cm²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Find the Area of a square park whose perimeter is 320 m:",
    options: [
      "6,400 m² (Side = 320 / 4 = 80 m ; Area = 80 × 80 = 6,400 m²)",
      "3,200 m²",
      "1,600 m²",
      "8,000 m²"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Side = 320 / 4 = 80 m. Area = 80² = 6,400 m²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Find the Area of a triangle with base = 15 cm and corresponding height = 6 cm:",
    options: ["45 cm² (Area = 1/2 × 15 × 6 = 15 × 3 = 45 cm²)", "90 cm²", "30 cm²", "60 cm²"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Area = 1/2 × 15 × 6 = 45 cm²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Find the Area of a parallelogram with base = 8 cm and height = 4.5 cm:",
    options: ["36 cm² (Area = 8 × 4.5 = 36 cm²)", "18 cm²", "72 cm²", "25 cm²"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Area = 8 × 4.5 = 36 cm²."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A door of length 2 m and breadth 1 m is fitted in a wall. The length of the wall is 4.5 m and the breadth is 3.6 m. Find the cost of white washing the wall at the rate of Rs 20 per m²:",
    options: [
      "Rs 284 (Wall Area = 4.5 × 3.6 = 16.2 m² ; Door Area = 2 × 1 = 2 m² ; Area to whitewash = 16.2 - 2 = 14.2 m² ; Cost = 14.2 × 20 = Rs 284)",
      "Rs 324",
      "Rs 260",
      "Rs 300"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Area to whitewash = 16.2 - 2.0 = 14.2 m². Cost = 14.2 × 20 = Rs 284."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "The area of a square and a rectangle are equal. If the side of the square is 40 cm and the breadth of the rectangle is 25 cm, find the length of the rectangle and its perimeter:",
    options: [
      "Length = 64 cm ; Perimeter = 178 cm (Area = 40² = 1600 cm² ; Length = 1600 / 25 = 64 cm ; Perimeter = 2(64 + 25) = 2 × 89 = 178 cm)",
      "Length = 50 cm ; Perimeter = 150 cm",
      "Length = 60 cm ; Perimeter = 170 cm",
      "Length = 64 cm ; Perimeter = 160 cm"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Area = 1600. Length = 1600 / 25 = 64 cm. Perimeter = 2(64 + 25) = 178 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A wire is in the shape of a rectangle of length 40 cm and breadth 22 cm. If the SAME wire is rebent in the shape of a square, what will be the measure of each side of the square and which shape encloses more area?",
    options: [
      "Side of square = 31 cm ; The SQUARE encloses more area (Perimeter = 2(40+22) = 124 cm ; Side = 124/4 = 31 cm ; Square Area = 31² = 961 cm² > Rect Area = 40×22 = 880 cm²)",
      "Side = 30 cm ; Rectangle encloses more",
      "Side = 31 cm ; Both have equal area",
      "Side = 32 cm ; Square encloses more"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Wire length = 124 cm. Square side = 31 cm. Area of square (961 cm²) > Area of rectangle (880 cm²)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A garden is 90 m long and 75 m broad. A path 5 m wide is to be built outside and around it. Find the AREA OF THE PATH in m² and in hectares:",
    options: [
      "1,750 m² (0.175 hectares) (Outer dim = 100 m × 85 m ; Outer Area = 8,500 m² ; Inner Area = 90 × 75 = 6,750 m² ; Path Area = 8,500 - 6,750 = 1,750 m² = 0.175 ha)",
      "1,500 m² (0.15 ha)",
      "2,000 m² (0.2 ha)",
      "1,650 m² (0.165 ha)"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Outer rectangle = 100 × 85 = 8500 m². Inner = 90 × 75 = 6750 m². Path = 8500 - 6750 = 1750 m² = 0.175 hectare."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A picture is painted on a cardboard 8 cm long and 5 cm wide such that there is a margin of 1.5 cm along each of its sides. Find the total AREA OF THE MARGIN:",
    options: [
      "30 cm² (Outer Area = 8 × 5 = 40 cm² ; Inner dim = (8 - 3) × (5 - 3) = 5 cm × 2 cm ; Inner Area = 10 cm² ; Margin Area = 40 - 10 = 30 cm²)",
      "25 cm²",
      "35 cm²",
      "20 cm²"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Outer = 40 cm². Inner = 5 × 2 = 10 cm². Margin = 40 - 10 = 30 cm²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Two cross roads, each of width 10 m, cut at right angles through the centre of a rectangular park of length 700 m and breadth 300 m and parallel to its sides. Find the total AREA OF THE ROADS:",
    options: [
      "9,900 m² (0.99 hectares) (Road 1 = 700 × 10 = 7,000 ; Road 2 = 300 × 10 = 3,000 ; Common intersection = 10 × 10 = 100 ; Total = 7,000 + 3,000 - 100 = 9,900 m²)",
      "10,000 m²",
      "9,800 m²",
      "9,500 m²"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Area of cross roads = 700(10) + 300(10) - 10² = 7000 + 3000 - 100 = 9,900 m²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "From a circular sheet of radius 4 cm, a concentric circle of radius 3 cm is removed. Find the AREA OF THE REMAINING SHEET (Take π = 3.14):",
    options: [
      "21.98 cm² (Area = π × (R² - r²) = 3.14 × (16 - 9) = 3.14 × 7 = 21.98 cm²)",
      "22.5 cm²",
      "20.84 cm²",
      "25.12 cm²"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Remaining area = π(4² - 3²) = 3.14 × 7 = 21.98 cm²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A gardener wants to fence a circular garden of diameter 21 m. Find the length of rope he needs to purchase if he makes 2 rounds of fence, and the cost of rope at Rs 4 per metre (Take π = 22/7):",
    options: [
      "Length of rope = 132 m ; Cost = Rs 528 (Circumference = (22/7) × 21 = 66 m ; 2 rounds = 66 × 2 = 132 m ; Cost = 132 × 4 = Rs 528)",
      "Length = 66 m ; Cost = Rs 264",
      "Length = 132 m ; Cost = Rs 600",
      "Length = 150 m ; Cost = Rs 528"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "C = πd = (22/7) × 21 = 66 m. Two rounds = 132 m. Cost = 132 × 4 = Rs 528."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "The circumference of a circle is 31.4 cm. Find the radius and the area of the circle (Take π = 3.14):",
    options: [
      "Radius = 5 cm ; Area = 78.5 cm² (2 × 3.14 × r = 31.4 ⇒ r = 5 cm ; Area = 3.14 × 5² = 3.14 × 25 = 78.5 cm²)",
      "Radius = 10 cm ; Area = 314 cm²",
      "Radius = 5 cm ; Area = 154 cm²",
      "Radius = 7 cm ; Area = 154 cm²"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "r = 31.4 / (2 × 3.14) = 5 cm. Area = 3.14 × 25 = 78.5 cm²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A circular flower bed is surrounded by a path 4 m wide. The diameter of the flower bed is 66 m. What is the AREA OF THIS PATH? (Take π = 3.14)",
    options: [
      "879.2 m² (Inner radius r = 33 m ; Outer radius R = 33 + 4 = 37 m ; Path Area = π(R² - r²) = 3.14 × (37² - 33²) = 3.14 × (1369 - 1089) = 3.14 × 280 = 879.2 m²)",
      "850.5 m²",
      "900.2 m²",
      "864.0 m²"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Ring area = π(37² - 33²) = 3.14 × (70 × 4) = 3.14 × 280 = 879.2 m²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A circular flower garden has an area of 314 m². A sprinkler at the centre of the garden can cover an area that has a radius of 12 m. Will the sprinkler water the ENTIRE garden? (Take π = 3.14)",
    options: [
      "Yes, because the sprinkler covers an area of 452.16 m² (π × 12² = 3.14 × 144 = 452.16 m²), which is greater than the garden's area of 314 m²",
      "No, the sprinkler only waters 200 m²",
      "No, because the radius is too small",
      "Cannot be determined"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Garden radius = √(314/3.14) = 10 m. Sprinkler radius = 12 m > 10 m, so it covers the entire garden."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "How many times a wheel of radius 28 cm must rotate to go a distance of 352 m? (Take π = 22/7)",
    options: [
      "200 rotations (Circumference = 2 × (22/7) × 28 = 176 cm = 1.76 m ; Rotations = 352 / 1.76 = 200)",
      "100 rotations",
      "300 rotations",
      "250 rotations"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "C = 2 × (22/7) × 28 = 176 cm = 1.76 m. Rotations = 352 / 1.76 = 200."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "The minute hand of a circular clock is 15 cm long. How far does the TIP of the minute hand move in 1 hour? (Take π = 3.14)",
    options: [
      "94.2 cm (In 1 hour, the minute hand completes 1 full rotation = Circumference = 2 × 3.14 × 15 = 94.2 cm)",
      "47.1 cm",
      "150 cm",
      "31.4 cm"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Distance = 2πr = 2 × 3.14 × 15 = 94.2 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "The area of a triangle is 50 cm². If one of its sides is 20 cm, find the corresponding altitude (height) to that side:",
    options: ["5 cm (Area = 1/2 × b × h ⇒ 50 = 1/2 × 20 × h ⇒ 50 = 10h ⇒ h = 5 cm)", "10 cm", "2.5 cm", "4 cm"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "50 = ½(20)h → 10h = 50 → h = 5 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Find the perimeter of a semicircle of radius 7 cm including its diameter base (Take π = 22/7):",
    options: [
      "36 cm (Perimeter = πr + 2r = (22/7) × 7 + 14 = 22 + 14 = 36 cm)",
      "44 cm",
      "22 cm",
      "29 cm"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Perimeter of closed semicircle = πr + 2r = 22 + 14 = 36 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Convert 5.4 m² into cm²:",
    options: ["54,000 cm² (1 m² = 10,000 cm² ; 5.4 × 10,000 = 54,000 cm²)", "540 cm²", "5,400 cm²", "540,000 cm²"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "5.4 × 10,000 = 54,000 cm²."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Read the statements:\nAssertion (A): Among all 2D plane geometric figures with a FIXED, GIVEN PERIMETER, the CIRCLE encloses the MAXIMUM possible AREA (Isoperimetric Inequality).\nReason (R): For a given perimeter P = 44 cm, a square encloses Area = (11)² = 121 cm², whereas a circle of circumference 44 cm encloses Area = (22/7) × (7)² = 154 cm² (154 > 121).\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Isoperimetric theorem: circle maximizes area for given perimeter (A_circle = 154 cm² > A_square = 121 cm²)."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Spot the IMPOSTER in the following area and metric unit conversion formulas:\nGroup:\n1. Area of Parallelogram = Base × Height\n2. 1 Hectare = 10,000 m²\n3. Area of Triangle = 1/2 × Base × Height\n4. Circumference of Circle = πr²",
    options: ["Formula 1", "Formula 2", "Formula 3", "Formula 4 (Circumference is 2πr or πd ; πr² is the formula for the AREA of a circle)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Circumference = 2πr; πr² is the area of a circle."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "In ΔABC, right-angled at A, AD is perpendicular to BC. If AB = 5 cm, BC = 13 cm, and AC = 12 cm, find the Area of ΔABC and the length of AD:",
    options: [
      "Area = 30 cm² ; AD = 4.61 cm (60/13 cm) (Area = 1/2 × 5 × 12 = 30 cm² ; Also Area = 1/2 × BC × AD ⇒ 30 = 1/2 × 13 × AD ⇒ AD = 60/13 ≈ 4.61 cm)",
      "Area = 60 cm² ; AD = 5 cm",
      "Area = 30 cm² ; AD = 6 cm",
      "Area = 65 cm² ; AD = 4.61 cm"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Area = ½(5)(12) = 30 cm². Also 30 = ½(13)(AD) → AD = 60/13 ≈ 4.615 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Match Column I (Geometric Figures with Dimensions) with Column II (Calculated Areas):\n(a) Square of perimeter 60 cm              -> (i) 225 cm² (Side = 15 cm ; Area = 15² = 225)\n(b) Circle of radius 7 cm                  -> (ii) 154 cm²\n(c) Parallelogram (base 12 cm, height 8 cm)-> (iii) 96 cm²\n(d) Triangle (base 14 cm, height 10 cm)    -> (iv) 70 cm²",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Square: 15² = 225; Circle: 22/7(49) = 154; Parallelogram: 12×8 = 96; Triangle: ½(14)(10) = 70."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Read the statements regarding metric area relationships:\nStatement 1: If the radius of a circle is DOUBLED, its area increases by FOUR TIMES (4×).\nStatement 2: If the side of a square is increased by 10%, its area increases by 21%.\nStatement 3: 1 square kilometre is equal to 1,000 square metres.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (1 km² = 1,000,000 m² = 100 hectares). Statement 1 (A ∝ r²) and Statement 2 ((1.1)² = 1.21) are true."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "If the ratio of the areas of two circles is 49 : 64, find the RATIO OF THEIR CIRCUMFERENCES:",
    options: [
      "7 : 8 (Area ratio = (r1/r2)² = 49/64 ⇒ r1/r2 = 7/8 ; Circumference ratio = 2πr1 / 2πr2 = r1/r2 = 7 : 8)",
      "49 : 64",
      "14 : 16",
      "343 : 512"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Circumference ratio equals radius ratio = √(49/64) = 7/8."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A racetrack is in the form of a circular ring whose inner circumference is 352 m and outer circumference is 396 m. Find the WIDTH of the track (Take π = 22/7):",
    options: [
      "7 m (Outer radius R = 396 / (2 × 22/7) = 63 m ; Inner radius r = 352 / (2 × 22/7) = 56 m ; Width = R - r = 63 - 56 = 7 m)",
      "14 m",
      "3.5 m",
      "10 m"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "R = 396 / 44 × 7 = 63 m. r = 352 / 44 × 7 = 56 m. Width = 63 - 56 = 7 m."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A wire loop of radius 21 cm is straightened and then bent into an equilateral triangle. Find the length of each side of the triangle (Take π = 22/7):",
    options: [
      "44 cm (Wire length = Circumference = 2 × (22/7) × 21 = 132 cm ; Side of equilateral triangle = 132 / 3 = 44 cm)",
      "33 cm",
      "22 cm",
      "66 cm"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Wire perimeter = 2 × (22/7) × 21 = 132 cm. Side of triangle = 132 / 3 = 44 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "The base of a parallelogram is TWICE its height. If the area of the parallelogram is 512 cm², find its base and height:",
    options: [
      "Base = 32 cm ; Height = 16 cm (Area = b × h ⇒ (2h) × h = 512 ⇒ 2h² = 512 ⇒ h² = 256 ⇒ h = 16 cm ; b = 2 × 16 = 32 cm)",
      "Base = 16 cm ; Height = 8 cm",
      "Base = 64 cm ; Height = 32 cm",
      "Base = 24 cm ; Height = 12 cm"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "2h² = 512 → h = √256 = 16 cm. Base = 32 cm."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Four equal circles, each of radius 7 cm, are placed touching each other so that their centres form a square of side 14 cm. Find the AREA of the shaded space enclosed between the four circles (Take π = 22/7):",
    options: [
      "42 cm² (Square Area = 14 × 14 = 196 cm² ; 4 quadrants = 1 full circle area = (22/7) × 7² = 154 cm² ; Enclosed Area = 196 - 154 = 42 cm²)",
      "56 cm²",
      "28 cm²",
      "36 cm²"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Area between 4 circles = a² - πr² = 14² - (22/7)(7²) = 196 - 154 = 42 cm²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "A copper wire when bent in the form of a square encloses an area of 484 cm². If the same wire is bent into a circle, find the area enclosed by the circle (Take π = 22/7):",
    options: [
      "616 cm² (Side of square = √484 = 22 cm ; Perimeter = 4 × 22 = 88 cm ; Circle radius = 88 / (2 × 22/7) = 14 cm ; Circle Area = (22/7) × 14² = 616 cm²)",
      "550 cm²",
      "484 cm²",
      "625 cm²"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Square side = 22 cm → P = 88 cm. Radius = 14 cm. Circle area = (22/7)(196) = 616 cm²."
  },
  {
    classLevel: 7,
    subject: "Mathematics",
    chapter: "Chapter 9: Perimeter and Area",
    question: "Why is the geometric calculation of Perimeter and 2D Area vital across civil architecture, land revenue cartography, urban planning, and material engineering?",
    options: [
      "It determines exact material quantities required for boundaries, fencing, tiling, paving, surface coatings, structural loads, and agricultural land taxation",
      "Because area is used only to draw circles",
      "Because perimeter is measured only with sticks",
      "Because modern construction ignores geometry"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Perimeter and area calculations are the universal geometric foundations for material procurement, boundary demarcation, and structural design."
  }
];

console.log('Generated Class 7 Math Ch9:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/math_ch9.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
