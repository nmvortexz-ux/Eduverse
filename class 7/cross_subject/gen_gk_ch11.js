import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 11: Global Economy, Trade & Markets (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What does the fundamental macroeconomic term 'GDP' stand for?",
    options: ["Gross Domestic Product", "Global Development Plan", "General Demand Price", "Government Deposit Programme"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gross Domestic Product (GDP) is the total monetary or market value of all finished goods and services produced within a country in a specific time period."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Which international financial institution headquartered in Washington, D.C., works to foster global monetary cooperation, secure financial stability, and provide balance-of-payments loans to member nations?",
    options: ["The International Monetary Fund (IMF)", "The World Trade Organization (WTO)", "The United Nations Environment Programme", "Interpol"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The IMF (190 member countries) promotes international financial stability, exchange rate cooperation, and emergency balance-of-payments assistance."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Which global development institution headquartered in Washington, D.C., provides low-interest loans, zero-interest credits, and grants to developing nations for infrastructure, education, and health?",
    options: ["The World Bank (IBRD & IDA)", "The World Health Organization", "The International Court of Justice", "UNESCO"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The World Bank focuses on long-term poverty alleviation, financing roads, power grids, schools, and sustainable development across developing countries."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Which international organization headquartered in Geneva, Switzerland, oversees and regulates the rules of international trade and resolves trade disputes between nations?",
    options: ["The World Trade Organization (WTO)", "The World Economic Forum", "The International Red Cross", "The International Maritime Organization"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The WTO (established in 1995, succeeding GATT) administers global trade agreements and adjudicates international trade disputes."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is the CENTRAL BANK of India that regulates the nation's banking system, issues currency notes, and controls monetary policy?",
    options: ["The Reserve Bank of India (RBI)", "The State Bank of India (SBI)", "The Bank of Baroda", "The Finance Ministry Bank"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Reserve Bank of India (RBI, established in 1935 with headquarters in Mumbai) is India's apex monetary authority and central banking institution."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Which central banking system of the United States wields immense global financial influence over interest rates and dollar liquidity?",
    options: ["The Federal Reserve System (The Fed)", "The Bank of America", "The US Treasury Bank", "The New York Central Bank"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Federal Reserve (headed by the Federal Reserve Board of Governors) sets US monetary policy and federal funds interest rates."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is the oldest stock exchange in ASIA, established in 1875 at Dalal Street, Mumbai?",
    options: ["The Bombay Stock Exchange (BSE)", "The Tokyo Stock Exchange", "The Shanghai Stock Exchange", "The Hong Kong Stock Exchange"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Bombay Stock Exchange (BSE, founded by Premchand Roychand in 1875) is Asia's first and oldest stock exchange."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is the benchmark benchmark 30-stock index of the Bombay Stock Exchange (BSE)?",
    options: ["SENSEX (Sensitivity Index)", "NIFTY 50", "Dow Jones", "NASDAQ"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "SENSEX tracks the weighted performance of 30 well-established and financially sound blue-chip companies on the BSE."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What economic term describes a sustained, general increase in the prices of goods and services over time, reducing the purchasing power of money?",
    options: ["Inflation", "Deflation", "Depreciation", "Recession"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Inflation measures the rate at which the general level of prices for goods and services rises, eroding the currency's purchasing power."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "In financial stock markets, what does a 'BULL MARKET' represent?",
    options: [
      "A rising financial market where stock prices are increasing and investor optimism/confidence is high",
      "A market where prices are collapsing",
      "A market trading only livestock animals",
      "A market closed on weekends"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A Bull Market (derived from a bull thrusting its horns upward) signifies surging stock indices and robust investor optimism."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "In financial stock markets, what does a 'BEAR MARKET' represent?",
    options: [
      "A declining market characterized by falling stock prices (typically 20%+ drop from recent highs) and widespread investor pessimism",
      "A booming market with rising profits",
      "A market that trades only gold",
      "A market located in cold forests"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A Bear Market (derived from a bear swiping its paws downward) describes a prolonged downturn with widespread asset declines."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Which country's currency is the 'YEN' (¥)?",
    options: ["Japan", "China", "South Korea", "Thailand"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Japanese Yen is the official currency of Japan and one of the world's major foreign exchange reserve currencies."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is 'Foreign Direct Investment' (FDI)?",
    options: [
      "An investment made by a company or individual in one country into business interests (factories, offices, joint ventures) located in another country",
      "Buying foreign currency banknotes for holiday travel",
      "Sending letters abroad",
      "Paying taxes to a foreign government"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "FDI entails substantial long-term cross-border capital ownership, technology transfer, and direct operational management in foreign enterprises."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is the key difference between NOMINAL GDP and GDP measured at PURCHASING POWER PARITY (PPP)?",
    options: [
      "Nominal GDP converts national output into US Dollars using current market exchange rates ; GDP (PPP) adjusts for local price level differences and cost of living in each country",
      "Nominal GDP counts only food items",
      "GDP (PPP) includes only paper money",
      "There is no difference between them"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "PPP adjustment compares real purchasing power across borders: India is the 5th largest economy by Nominal GDP, but 3rd largest by GDP (PPP)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is the 'REPO RATE' (Repurchase Option Rate) set by the Reserve Bank of India (RBI)?",
    options: [
      "The benchmark interest rate at which the RBI lends short-term money to commercial banks against government securities to manage liquidity and control inflation",
      "The tax charged on income",
      "The price of gold coins",
      "The salary paid to bank managers"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Repo rate is the RBI's primary policy tool: raising repo rates tightens credit to quell inflation; lowering rates stimulates investment and growth."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Which geopolitical and economic bloc originally comprised Brazil, Russia, India, China, and South Africa (expanded in 2024 to include Egypt, Ethiopia, Iran, UAE)?",
    options: ["BRICS", "G7", "ASEAN", "NATO"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "BRICS represents leading emerging market economies collaborating on multipolar trade, development financing (New Development Bank), and south-south cooperation."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is the 'G7' (Group of Seven)?",
    options: [
      "An informal forum of seven of the world's advanced industrialized democratic economies: USA, UK, Germany, France, Japan, Italy, and Canada (plus the EU)",
      "The seven largest countries by area",
      "The seven continents of the world",
      "The seven tallest buildings on Earth"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The G7 meets annually to coordinate international economic governance, security policies, and global financial stability."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is 'SEBI' (Securities and Exchange Board of India)?",
    options: [
      "The apex statutory regulatory body that protects the interests of investors in securities and regulates Indian stock and capital markets",
      "A commercial bank where citizens deposit money",
      "A government department that collects income tax",
      "An insurance company"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "SEBI (established in 1992) regulates stock exchanges, mutual funds, listed corporations, and brokers to ensure market integrity."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is the European single common currency adopted by 20 member states of the European Union (the Eurozone)?",
    options: ["The Euro (€)", "The Pound Sterling", "The Franc", "The Deutsche Mark"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Euro (managed by the European Central Bank in Frankfurt) is the official currency of 20 EU nations and the world's 2nd major reserve currency."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What does 'Fiscal Deficit' mean in government budgetary economics?",
    options: [
      "The excess of a government's total expenditure over its total revenue receipts (excluding borrowings) in a financial year",
      "The profit earned by government companies",
      "The total gold stored in the central bank",
      "The money given as foreign aid"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Fiscal deficit indicates the net amount of money the government must borrow to meet its spending requirements."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is an 'Initial Public Offering' (IPO) in corporate finance?",
    options: [
      "The first sale of shares by a private company to the general public to raise capital and list its stock on a public exchange",
      "A loan given by the IMF",
      "A government tax on exports",
      "A merger between two banks"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "An IPO transitions a private unlisted company into a publicly traded corporation on stock exchanges (like BSE/NSE or NYSE)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Which Asian multilateral development bank headquartered in Manila, Philippines, was established in 1966 to foster economic growth and cooperation in the Asia-Pacific region?",
    options: ["The Asian Development Bank (ADB)", "The Asian Infrastructure Investment Bank (AIIB)", "The New Development Bank", "The Bank of Japan"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Asian Development Bank (ADB) provides loans, technical assistance, and equity investments to eradicate extreme poverty across Asia."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is the 'NASDAQ' stock exchange in the United States famous for?",
    options: [
      "Being the world's premier electronic, screen-based stock market specializing in global technology giants (such as Apple, Microsoft, Google, NVIDIA, Amazon)",
      "Trading only agricultural crops",
      "Being the oldest paper exchange",
      "Trading only government bonds"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "NASDAQ (National Association of Securities Dealers Automated Quotations) is the flagship global exchange for high-growth technological innovators."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is 'Global Supply Chain' in international trade?",
    options: [
      "The integrated worldwide network of sourcing raw materials, manufacturing intermediate components across multiple nations, and distributing finished goods globally",
      "A long iron chain used on container ships",
      "A chain of grocery stores",
      "A treaty between two ports"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Global supply chains decompose manufacturing: e.g. a smartphone designed in California, chips made in Taiwan, assembled in India/China, and sold globally."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is 'Microfinance' pioneered by Nobel Peace laureate Muhammad Yunus (Grameen Bank)?",
    options: [
      "Providing small, collateral-free financial loans and banking services to low-income individuals, micro-entrepreneurs, and women self-help groups (SHGs)",
      "Funding large space rockets",
      "Trading foreign stock options",
      "Printing miniature bank notes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Microfinance empowers grassroots rural entrepreneurs through micro-credit, fostering financial inclusion and poverty eradication."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is 'Cryptocurrency' (like Bitcoin or Ethereum)?",
    options: [
      "A digital or virtual currency secured by cryptography and decentralized blockchain networks rather than issued by a central sovereign bank",
      "Gold coins buried in vaults",
      "Paper vouchers issued by shopping malls",
      "Tokens used in video arcades"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Cryptocurrencies are cryptographically secured decentralized digital assets operating on distributed ledger technology."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is a 'Free Trade Agreement' (FTA) between countries?",
    options: [
      "A treaty between two or more nations to substantially eliminate tariffs, import duties, and trade quotas, fostering seamless cross-border commerce",
      "An agreement to give goods away for free",
      "A ban on all imports",
      "A plan to use a single language in business"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "FTAs dismantle tariff and non-tariff barriers, boosting mutual trade volumes and economic integration between partner nations."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is 'Sovereign Wealth Fund' (SWF)?",
    options: [
      "A state-owned state investment fund comprising financial assets (stocks, bonds, real estate) financed by foreign exchange reserves or commodity revenues (like Norway's Oil Fund or Abu Dhabi ADIA)",
      "A royal family's personal bank account",
      "A fund for printing stamps",
      "A charity for homeless people"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "SWFs invest national surplus revenues internationally to generate intergenerational wealth, fiscal stability, and strategic asset diversification."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Read the statements:\nAssertion (A): The US Dollar functions as the world's dominant global 'Reserve Currency' and primary medium for international trade invoicing.\nReason (R): The US possesses the world's largest, most liquid capital markets, backed by the deep institutional credibility of the Federal Reserve and the petrodollar recycling system established in the 1970s.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The dollar's 'exorbitant privilege' as premier global reserve currency derives from US market liquidity, institutional trust, and global trade settlement dominance."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Spot the IMPOSTER in the following major Global Economic Institutions and their respective headquarters:\nGroup:\n1. International Monetary Fund (IMF) - Washington, D.C., USA\n2. World Trade Organization (WTO) - Geneva, Switzerland\n3. European Central Bank (ECB) - Frankfurt, Germany\n4. Reserve Bank of India (RBI) - North Pole, Arctic Ocean",
    options: ["Institution 1", "Institution 2", "Institution 3", "Institution 4 (The Reserve Bank of India is headquartered in MUMBAI, Maharashtra, India, NOT the North Pole)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Institution 4 is an absurd geographical impossibility: RBI's headquarters is on Shahid Bhagat Singh Road, Fort, Mumbai."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Analyze the monetary transmission mechanism of 'Quantitative Easing' (QE) employed by major central banks during severe economic crises:\nHow does QE stimulate financial liquidity?",
    options: [
      "The central bank purchases large quantities of government bonds and financial assets from commercial markets, expanding the central bank's balance sheet and injecting massive liquidity to lower long-term interest rates",
      "The government prints paper money and drops it from helicopters on streets",
      "The central bank closes all private banks",
      "The government increases taxes by 100%"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Quantitative Easing (unconventional monetary policy) injects electronic base money via large-scale asset purchases to compress bond yields and boost lending."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Match Column I (Global Economic Indices / Concepts) with Column II (Economic Definitions):\n(a) Consumer Price Index (CPI) -> (i) Measures average change in retail prices paid by households for a basket of goods\n(b) Gini Coefficient          -> (ii) Statistical measure of income or wealth inequality within a nation (0 to 1)\n(c) Purchasing Power Parity    -> (iii) Exchange rate theory equalizing the price of an identical basket of goods across currencies\n(d) Special Drawing Rights (SDR) -> (iv) International reserve asset created by the IMF based on a basket of 5 currencies",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "CPI = retail inflation; Gini = inequality index; PPP = price parity; SDR = IMF supplementary reserve currency basket."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Read the statements regarding India's Foreign Trade and Forex Reserves:\nStatement 1: India is the world's leading exporter of Information Technology (IT/ITeS) software services and generic pharmaceuticals.\nStatement 2: India's Foreign Exchange Reserves (managed by the RBI) consistently rank among the top five largest in the world (~$650+ billion).\nStatement 3: India does not import any petroleum crude oil.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is false (India imports ~85% of its crude oil needs). Statements 1 (IT & pharma superpower) and 2 (robust forex reserves) are true."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What was the 'Bretton Woods Conference' of July 1944 in New Hampshire, USA?",
    options: [
      "A landmark gathering of 44 Allied nations that designed the post-WWII international monetary order, creating the IMF, the World Bank, and fixing gold-pegged exchange rates",
      "A meeting to end World War I",
      "A conference that founded the European Union",
      "A summit to establish oil pipelines"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bretton Woods established the post-war multilateral architecture: institutionalizing the IMF, IBRD, and fixed-rate convertible dollar-gold standards."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is 'De-Dollarization' in contemporary global geopolitics?",
    options: [
      "The strategic initiative by emerging economies (like BRICS) to reduce reliance on the US Dollar in bilateral trade settlement, using local national currencies (Rupee, Ruble, Yuan) and central bank digital currencies",
      "Banning all paper money completely",
      "A law forcing everyone to use gold coins only",
      "The closure of all American banks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "De-dollarization seeks to mitigate sanctions risks, currency volatility, and extraterritorial jurisdiction by promoting alternative bilateral currency settlement mechanisms."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Consider four financial instruments:\n1. Sovereign Government Bonds (G-Secs)\n2. Blue-Chip Equity Shares\n3. Treasury Bills (T-Bills)\n4. Exchange-Traded Funds (ETFs)\nWhich of these are MONEY MARKET short-term debt instruments maturing in less than one year?",
    options: ["Instrument 3 only (Treasury Bills)", "Instruments 1 and 2 only", "Instruments 2 and 4 only", "All 1, 2, 3, and 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Money market instruments are short-term (< 1 year), highly liquid debt securities: Treasury Bills (91-day, 182-day, 364-day) are classic money market tools."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is the 'Triffin Dilemma' in international economics?",
    options: [
      "The fundamental conflict of interest between domestic monetary objectives and international obligations for a country whose national currency serves as the world's global reserve currency",
      "The problem of counting paper money in banks",
      "The conflict between farmers and factory owners",
      "The difficulty of setting shipping container prices"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Robert Triffin noted that the reserve currency issuer must run continuous balance of payments deficits to supply global liquidity, eventually undermining trust in its currency."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "Why is 'Venture Capital' (VC) critical to the modern startup and innovation ecosystem?",
    options: [
      "It provides high-risk equity funding, mentorship, and strategic growth capital to early-stage technology startups with high growth potential before they achieve profitability",
      "It lends money only to government departments",
      "It insures houses against floods",
      "It manages pension funds for retired persons only"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Venture capital finances disruptive, high-risk innovation, creating global tech unicorns (fintech, AI, clean tech, biotech) that transform markets."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What is 'Financial Inclusion' and why is it a cornerstone of modern national development strategy?",
    options: [
      "Ensuring that all individuals and businesses—especially marginalized, rural, and low-income populations—have universal access to useful, affordable formal financial products (banking accounts, savings, credit, insurance, digital payments)",
      "Making everyone pay the same income tax",
      "Giving free stock shares to all citizens",
      "Banning all private banks"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Financial inclusion (driven by Pradhan Mantri Jan Dhan Yojana and UPI) empowers vulnerable populations, reduces poverty, and formalizes the economy."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 11: Global Economy, Trade, Financial Institutions & Global Markets",
    question: "What overarching economic wisdom is synthesized in Chapter 11 of General Knowledge?",
    options: [
      "A healthy, equitable global economy requires prudent monetary policy, open rules-based international trade, ethical financial regulation, and inclusive financial systems that convert capital into sustainable human development, scientific innovation, and shared prosperity",
      "That only stock brokers understand economics",
      "That trade between nations always causes conflict",
      "That economic growth has no relation to human well-being"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 11 synthesizes the dynamics of global finance: central banking, international development, multilateral trade, market mechanisms, and socio-economic equity."
  }
];

console.log('Generated Class 7 GK Ch11:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/gk_ch11.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
