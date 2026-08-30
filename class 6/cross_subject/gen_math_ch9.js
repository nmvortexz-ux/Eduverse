import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 2: Mathematics - Chapter 9: Data Handling (40 Questions)
// -------------------------------------------------------------
const mathQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "A collection of numbers or facts gathered together to give meaningful information is called:",
    options: ["Data", "Fraction", "Integer", "Equation"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Data is a systematic collection of numerical facts, observations, and measurements gathered for analysis."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In data handling, vertical and diagonal strokes used to count and group data items in bunches of FIVE (5) are called:",
    options: ["Tally Marks (卌 = 5)", "Roman Numerals", "Fractions", "Decimals"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Tally marks group counts into bundles of 5 (four vertical lines crossed diagonally by a fifth) for rapid counting."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "What number is represented by the standard tally marks: 卌 卌 ||| ?",
    options: ["13 (5 + 5 + 3 = 13)", "15", "10", "12"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Two full 5-bundles (5 + 5 = 10) plus 3 individual strokes equals 13."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "The representation of statistical data through PICTURES or symbols of objects is called a:",
    options: ["Pictograph", "Bar Graph", "Pie Chart", "Histogram"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A pictograph represents data counts using icons or pictorial symbols with an assigned scaling key."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In a pictograph, if one symbol 🚗 represents 10 cars, how many cars are represented by 4 complete car symbols: 🚗🚗🚗🚗 ?",
    options: ["40 cars (4 × 10 = 40)", "4 cars", "10 cars", "14 cars"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "4 symbols × 10 cars per symbol = 40 cars."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In a pictograph, if one symbol 📖 represents 50 books, how many book symbols are needed to represent 250 books in a school library?",
    options: ["5 symbols (250 ÷ 50 = 5)", "10 symbols", "25 symbols", "4 symbols"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "250 books ÷ 50 books/symbol = 5 symbols."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "A visual representation of data using rectangular bars of UNIFORM WIDTH with equal spacing between them is called a:",
    options: ["Bar Graph (or Bar Diagram)", "Pictograph", "Line Graph", "Venn Diagram"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A bar graph uses uniform rectangular bars whose lengths/heights are proportional to the values they represent."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In a standard bar graph, what does the HEIGHT (or length) of each rectangular bar represent?",
    options: ["The numerical value or frequency of that category", "The color of the category", "The width of the page", "The time of day"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The height/length of a bar is directly proportional to the magnitude/frequency of the data it represents."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "The number of times a particular observation or data item occurs in a given dataset is called its:",
    options: ["Frequency", "Class", "Range", "Scale"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Frequency measures the repetition count of a specific data value in a dataset."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "How is the number 18 represented using standard Tally Marks?",
    options: ["卌 卌 卌 ||| (5 + 5 + 5 + 3 = 18)", "卌 卌 ||||", "卌 卌 卌 卌", "||||||||||||||||||"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "18 = 3 groups of 5 plus 3 individual strokes = 卌 卌 卌 |||."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "If a bar graph uses a scale of '1 unit length = 5 students', what is the number of students represented by a bar of height 6 units?",
    options: ["30 students (6 × 5 = 30)", "11 students", "25 students", "35 students"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "6 units × 5 students/unit = 30 students."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "What is data collected originally by an investigator firsthand for a specific purpose called?",
    options: ["Primary Data (Raw Data)", "Secondary Data", "Pictograph", "Bar Graph"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Primary raw data is collected firsthand directly from original sources by the investigator."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "The following are marks scored by 20 students out of 10 in a class test: 5, 8, 4, 7, 5, 8, 6, 7, 5, 9, 8, 5, 6, 4, 7, 5, 6, 8, 9, 5. What is the frequency of mark 5?",
    options: ["6 times (Mark 5 appears 6 times)", "5 times", "4 times", "7 times"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Counting instances of mark 5 in the list: 5, 5, 5, 5, 5, 5 -> exactly 6 times."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In a school library survey, the number of books read across subjects is: English: 40, Maths: 60, Science: 80, Social Science: 50. If 1 book icon represents 10 books in a pictograph, how many icons represent Science and Social Science respectively?",
    options: ["Science: 8 icons ; Social Science: 5 icons", "Science: 6 icons ; Social: 4 icons", "Science: 80 icons ; Social: 50 icons", "Science: 4 icons ; Social: 5 icons"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Science = 80/10 = 8 icons; Social Science = 50/10 = 5 icons."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "A bar graph shows the number of bicycles manufactured by a factory from Monday to Friday: Mon: 300, Tue: 250, Wed: 400, Thu: 350, Fri: 500. On which day was the MAXIMUM number of bicycles manufactured, and on which day was the MINIMUM?",
    options: ["Maximum: Friday (500) ; Minimum: Tuesday (250)", "Maximum: Wednesday ; Minimum: Monday", "Maximum: Friday ; Minimum: Monday", "Maximum: Thursday ; Minimum: Tuesday"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Highest bar = Friday (500 bicycles); Shortest bar = Tuesday (250 bicycles)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "What is the total number of bicycles manufactured from Monday to Friday in the above factory?",
    options: ["1,800 bicycles (300 + 250 + 400 + 350 + 500 = 1,800)", "1,700 bicycles", "2,000 bicycles", "1,650 bicycles"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "300 + 250 + 400 + 350 + 500 = 1,800 bicycles."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In a bar graph showing the favorite fruits of students: Mango: 45, Apple: 30, Banana: 25, Orange: 20. How many MORE students prefer Mango than Orange?",
    options: ["25 students (45 - 20 = 25)", "15 students", "20 students", "35 students"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Difference = 45 - 20 = 25 students."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "If a bar graph is drawn with a vertical scale of '1 cm = 20 vehicles', what will be the height of the bar representing 140 vehicles?",
    options: ["7 cm (140 ÷ 20 = 7 cm)", "6 cm", "8 cm", "14 cm"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "140 vehicles ÷ 20 vehicles/cm = 7 cm."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "A die was thrown 25 times and the following outcomes were recorded: 1, 2, 5, 4, 3, 6, 1, 3, 2, 5, 6, 4, 5, 2, 1, 3, 6, 5, 4, 2, 5, 3, 1, 5, 6. Which outcome appeared the MAXIMUM number of times?",
    options: ["Number 5 (frequency = 6 times)", "Number 6 (frequency = 4 times)", "Number 1 (frequency = 4 times)", "Number 2 (frequency = 4 times)"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Counting frequencies: 1:4, 2:4, 3:4, 4:3, 5:6, 6:4. Number 5 has the highest frequency (6)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "What is the primary advantage of a Bar Graph over a raw list of data numbers?",
    options: [
      "It allows instant visual comparison of different categories at a single glance without tedious manual counting",
      "It makes the page look colorful",
      "It reduces the actual numbers",
      "It changes mathematics into art"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Bar graphs provide immediate visual comparison of magnitudes across categorical variables."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In a pictograph where 1 🌲 represents 100 trees, Village A has 6 🌲, Village B has 4 🌲, and Village C has 7 🌲. What is the total tree count in all three villages together?",
    options: ["1,700 trees ((6 + 4 + 7) × 100 = 17 × 100 = 1,700)", "1,500 trees", "1,800 trees", "1,600 trees"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "(6 + 4 + 7) = 17 symbols × 100 trees/symbol = 1,700 trees."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "Why must all rectangular bars in a bar graph be of EQUAL WIDTH?",
    options: [
      "Because the width does not represent any data value; keeping widths uniform prevents visual distortion and misleading impressions",
      "Because paper only has one width",
      "Because rulers cannot draw different widths",
      "It is not necessary, widths can be random"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Bar width is non-data carrying; uniform width ensures that visual area remains strictly proportional to bar height."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In a class of 30 students, blood groups were recorded as: A: 8, B: 12, O: 7, AB: 3. What fraction of the total class has blood group B?",
    options: ["2/5 (12/30 = 2/5)", "1/3", "1/4", "3/10"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "12 / 30 = 2/5."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "What is the first step in constructing a frequency distribution table from disorganized raw data?",
    options: [
      "Identify the distinct categories, count occurrences systematically using tally marks, and total the frequencies",
      "Draw bars immediately without counting",
      "Color the page with pencils",
      "Guess the highest number"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Systematic tally grouping transforms raw unstructured data into an organized frequency distribution."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "If 1 symbol 👶 represents 20 babies born in a hospital, how many symbols represent 70 babies (including a partial symbol)?",
    options: ["3 ½ symbols (3 complete symbols = 60 + half symbol = 10)", "4 symbols", "3 symbols", "7 symbols"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "70 ÷ 20 = 3.5 symbols (3 full icons + 1 half icon)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In a bar graph showing weekly rainfall: Mon: 2 cm, Tue: 5 cm, Wed: 0 cm, Thu: 3 cm, Fri: 6 cm, Sat: 4 cm, Sun: 1 cm. What is the difference in rainfall between the wettest and driest days?",
    options: ["6 cm (Wettest = Fri: 6 cm ; Driest = Wed: 0 cm ; Difference = 6 - 0 = 6 cm)", "5 cm", "4 cm", "7 cm"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Maximum (6 cm) - Minimum (0 cm) = 6 cm."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "How can a bar graph be drawn horizontally instead of vertically?",
    options: [
      "By placing categories on the vertical Y-axis and numerical values/scale on the horizontal X-axis (Horizontal Bar Graph)",
      "By turning the paper upside down",
      "By drawing curved lines",
      "Bar graphs cannot be drawn horizontally"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Horizontal bar graphs plot categories along the ordinate (Y) and lengths along the abscissa (X)."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "What is the total sum of frequencies in a complete frequency table equal to?",
    options: [
      "The total number of observations in the original dataset",
      "Zero",
      "Always 100",
      "The highest mark"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The sum of all category frequencies (Σf) must exactly equal total sample size N."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "Read the statements:\nAssertion (A): Choosing an appropriate scale (e.g. 1 unit = 100 units or 1 unit = 500 units) is the most critical decision when constructing a bar graph.\nReason (R): If the scale is too small, the bars will not fit on the paper; if the scale is too large, the bars become too tiny and differences between categories become indistinguishable.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Optimal scaling maps data range to physical page dimensions while maximizing visual resolution."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "Spot the IMPOSTER in the following tally representations of numbers:\nGroup: [8 = 卌 |||, 10 = 卌 卌, 14 = 卌 卌 ||||, 16 = 卌 卌 卌 ||]",
    options: ["8 = 卌 |||", "10 = 卌 卌", "14 = 卌 卌 ||||", "16 = 卌 卌 卌 ||"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "'16 = 卌 卌 卌 ||' is FALSE; 5 + 5 + 5 + 2 = 17 (NOT 16). 16 is 卌 卌 卌 |."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "A bar graph shows the population of a town over four decades:\n1990: 20,000 ; 2000: 35,000 ; 2010: 55,000 ; 2020: 80,000.\nIn which decade was the ABSOLUTE INCREASE in population the greatest?",
    options: ["2010 to 2020 (Increase = 80,000 - 55,000 = 25,000)", "1990 to 2000 (15,000)", "2000 to 2010 (20,000)", "All decades had equal increase"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "1990-2000: +15k; 2000-2010: +20k; 2010-2020: +25k. Greatest absolute increase was in 2010–2020."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "Match Column I (Data Concepts) with Column II (Definitions / Symbols):\n(a) Tally Mark bundle 卌 -> (i) Proportional rectangular visual display\n(b) Pictograph          -> (ii) Groups 5 counts together\n(c) Frequency            -> (iii) Uses pictures with scaling keys\n(d) Bar Graph            -> (iv) Number of occurrences of a data item",
    options: [
      "a-(ii), b-(iii), c-(iv), d-(i)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "卌 = 5 bundle; Pictograph = picture icons; Frequency = count; Bar graph = proportional bars."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "Read the statements regarding graphs:\nStatement 1: In a pictograph, representing very large numbers (like 1,387) precisely is difficult because drawing fractional symbols is imprecise.\nStatement 2: In a bar graph, spacing between any two consecutive bars must be equal and uniform.\nStatement 3: Bar graphs can only represent whole numbers and never fractions.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false because bar heights can represent continuous rational values and decimals. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "A factory produces 4 types of vehicles in a month: Cars: 120, Vans: 60, Trucks: 40, Motorcycles: 180. If drawn on a bar graph with scale 1 cm = 20 vehicles, what will be the combined total height of all 4 bars?",
    options: ["20 cm ((120 + 60 + 40 + 180)/20 = 400/20 = 20 cm)", "18 cm", "25 cm", "40 cm"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Heights: Cars=6 cm, Vans=3 cm, Trucks=2 cm, Bikes=9 cm. Total = 6+3+2+9 = 20 cm."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "Consider a dataset of 50 student test scores ranging from minimum score 12 to maximum score 98. What is the most appropriate scale for the vertical axis of a bar graph on standard graph paper (height ~20 cm)?",
    options: ["1 unit length = 10 marks (so 100 marks fits comfortably in 10 cm)", "1 unit length = 1 mark (needs 100 cm paper)", "1 unit length = 50 marks", "1 unit length = 100 marks"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "1 unit = 10 marks maps the 0–100 range across a 10 cm vertical span."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "In a pictograph where 1 🌸 represents 50 flowers, a florist sells 225 roses and 175 lilies. How many total flower symbols (including fractions) represent roses and lilies together?",
    options: ["8 symbols (225/50 = 4.5 symbols ; 175/50 = 3.5 symbols ; Total = 4.5 + 3.5 = 8 symbols)", "7 symbols", "9 symbols", "10 symbols"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Total flowers = 225 + 175 = 400 flowers ÷ 50 flowers/symbol = 8 symbols."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "A survey asked 120 people their favorite mode of transport: Bus: 48, Train: 36, Car: 24, Bicycle: 12. What percentage of total people prefer Bus?",
    options: ["40% ((48/120) × 100% = 40%)", "48%", "30%", "36%"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "(48 ÷ 120) × 100% = 0.40 × 100% = 40%."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "What is a 'Double Bar Graph' used for in advanced data handling?",
    options: [
      "To display two sets of data simultaneously side by side for direct comparison between two groups or two time periods",
      "To draw bars twice as wide",
      "To color bars with two paints",
      "To erase mistakes"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Double bar graphs pair bivariate data series side by side across common categories."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "If the mean (average) score of 5 matches played by a batsman is 42 runs, what is the total number of runs scored by him in all 5 matches?",
    options: ["210 runs (Total = Mean × Number of matches = 42 × 5 = 210)", "200 runs", "225 runs", "180 runs"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Sum = Mean × N = 42 × 5 = 210 runs."
  },
  {
    classLevel: 6,
    subject: "Mathematics",
    chapter: "Chapter 9: Data Handling",
    question: "Why is statistical data collection and visual representation critical in modern scientific and government decision making?",
    options: [
      "It transforms vast, complex numerical data into clear, objective visual trends, enabling evidence-based policy, planning, and scientific forecasting",
      "Because computers cannot read numbers without graphs",
      "To make government books heavier",
      "Because graphs eliminate the need for mathematics"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Visual analytics reveal underlying trends, outliers, and distributions to guide evidence-based policy formulation."
  }
];

console.log('Generated Math Ch9:', mathQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/math_ch9.json', JSON.stringify(mathQuestions, null, 2), 'utf8');
