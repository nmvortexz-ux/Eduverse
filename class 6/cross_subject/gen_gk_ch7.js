import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 7: Indian Polity & Constitution (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the supreme legal and constitutional document of India, establishing the framework of government, fundamental rights, and duties?",
    options: ["The Constitution of India", "The Indian Penal Code", "The Magna Carta", "The Parliament Act"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Constitution of India is the supreme law of the land, drafted by the Constituent Assembly."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Who is revered as the 'Chief Architect and Father of the Indian Constitution' and served as the Chairman of the Drafting Committee?",
    options: ["Dr. B.R. Ambedkar (Bhimrao Ramji Ambedkar)", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Dr. B.R. Ambedkar chaired the Drafting Committee, synthesizing social justice into constitutional jurisprudence."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "On which historic date did the Constitution of India come into full effect, celebrated annually as Republic Day across the country?",
    options: ["26th January 1950", "15th August 1947", "26th November 1949", "2nd October 1950"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Constitution came into force on 26 January 1950, commemorated every year as India's Republic Day."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "On which date was the Constitution of India officially ADOPTED by the Constituent Assembly, celebrated annually as 'Constitution Day' (Samvidhan Divas)?",
    options: ["26th November 1949", "26th January 1950", "15th August 1947", "30th January 1948"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Constituent Assembly adopted the Constitution on 26 November 1949, designated as Constitution Day."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Who was the FIRST President of the Republic of India and also the President of the Constituent Assembly?",
    options: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Dr. Zakir Husain", "C. Rajagopalachari"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Dr. Rajendra Prasad presided over the Constituent Assembly and served as India's first President from 1950 to 1962."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Who is the FIRST citizen of India and the Supreme Commander of the Indian Armed Forces?",
    options: ["The President of India", "The Prime Minister", "The Chief Justice of India", "The Defence Minister"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The President is the constitutional Head of State, First Citizen, and Supreme Commander of the Army, Navy, and Air Force."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Who is the real executive Head of Government and leader of the Council of Ministers in India?",
    options: ["The Prime Minister of India", "The President", "The Chief Justice", "The Speaker of Lok Sabha"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Under our parliamentary system, the Prime Minister is the de facto head of government leading the executive cabinet."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What are the two Houses of the Parliament of India (Bicameral Legislature)?",
    options: [
      "Lok Sabha (House of the People) and Rajya Sabha (Council of States)",
      "Vidhan Sabha and Vidhan Parishad",
      "Senate and House of Representatives",
      "Supreme Court and High Court"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Indian Parliament comprises the President and two Houses: Lok Sabha (Lower House) and Rajya Sabha (Upper House)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the minimum voting age for Indian citizens in general democratic elections under Universal Adult Suffrage?",
    options: ["18 years (lowered from 21 by 61st Constitutional Amendment in 1988)", "21 years", "25 years", "16 years"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Every Indian citizen aged 18 years or above possesses the constitutional fundamental right to vote without discrimination."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the highest judicial court of appeal in India, situated in New Delhi?",
    options: ["Supreme Court of India (headed by the Chief Justice of India)", "High Court", "District Court", "Panchayat Court"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Supreme Court of India is the apex judicial guardian and final interpreter of the Constitution."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What opening introductory statement sets out the guiding ideals, philosophy, and principles of the Constitution of India?",
    options: ["The Preamble ('WE, THE PEOPLE OF INDIA...')", "The Index", "The Appendix", "The First Schedule"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Preamble is the identity card and philosophical soul of the Indian Constitution, declaring India a Sovereign, Socialist, Secular, Democratic Republic."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the national motto of India inscribed below the State Emblem, taken from the ancient Mundaka Upanishad?",
    options: ["'Satyameva Jayate' (Truth Alone Triumphs)", "'Vande Mataram'", "'Jai Hind'", "'Jan Gan Man'"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "'Satyameva Jayate' ('Truth alone triumphs') is the national motto inscribed in Devanagari script at the base of the national emblem."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "How many Fundamental Rights are currently guaranteed to all Indian citizens under Part III of the Constitution?",
    options: [
      "6 Fundamental Rights (Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural & Educational Rights, Right to Constitutional Remedies)",
      "7 Fundamental Rights",
      "10 Fundamental Rights",
      "5 Fundamental Rights"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "There are 6 Fundamental Rights (the 7th, Right to Property, was converted to a legal right by the 44th Amendment in 1978)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Which Fundamental Right under Article 32 was famously called the 'Heart and Soul of the Constitution' by Dr. B.R. Ambedkar?",
    options: [
      "Right to Constitutional Remedies (allowing citizens to approach Supreme Court via writs like Habeas Corpus, Mandamus)",
      "Right to Equality",
      "Right to Freedom of Speech",
      "Right to Property"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Article 32 empowers the Supreme Court to issue prerogative writs to enforce fundamental rights, making rights truly enforceable."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "How many Fundamental Duties are prescribed for Indian citizens under Article 51A (Part IVA) of the Constitution?",
    options: ["11 Fundamental Duties (added by 42nd & 86th Amendments)", "10 Fundamental Duties", "8 Fundamental Duties", "12 Fundamental Duties"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Originally 10 duties recommended by Swaran Singh Committee were added in 1976; the 11th duty on education was added in 2002."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the normal term of office for elected Members of the Lok Sabha (Lower House)?",
    options: ["5 years", "6 years", "4 years", "Permanent (no term limit)"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Lok Sabha members are elected directly by the people for a standard 5-year term unless dissolved earlier."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the permanent nature and term of members in the Rajya Sabha (Upper House)?",
    options: [
      "It is a permanent House never subject to total dissolution; members serve 6-year terms with one-third retiring every 2 years",
      "It dissolves every 5 years",
      "Members serve for life",
      "It dissolves every year"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Rajya Sabha is a continuous permanent federal chamber where 1/3rd of members retire biennially after 6-year terms."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Who is the ex-officio Chairman of the Rajya Sabha in India?",
    options: ["The Vice-President of India", "The Prime Minister", "The Speaker of Lok Sabha", "The Chief Justice"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Under Article 64, the Vice-President of India serves as the constitutional ex-officio Chairman of the Rajya Sabha."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the Three-Tier system of rural local self-government in India called?",
    options: [
      "Panchayati Raj (Gram Panchayat at village level, Panchayat Samiti at block level, Zilla Parishad at district level)",
      "Municipal Corporation",
      "District Magistrate Council",
      "Gram Sabha only"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Constitutionalized by the 73rd Amendment (1992), Panchayati Raj establishes a 3-tier democratic decentralization system."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Which Indian state was the first to establish the Panchayati Raj system on 2nd October 1959 at Nagaur?",
    options: ["Rajasthan", "Andhra Pradesh", "Uttar Pradesh", "Maharashtra"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Prime Minister Jawaharlal Nehru inaugurated democratic Panchayati Raj in Nagaur district, Rajasthan on Gandhi Jayanti in 1959."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What constitutional body conducts free, fair, and impartial democratic elections for Parliament, State Assemblies, President, and Vice-President in India?",
    options: ["Election Commission of India (ECI - Article 324)", "NITI Aayog", "UPSC", "Supreme Court"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Election Commission of India (Article 324) is an autonomous constitutional watchdog conducting national and state elections."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Who was the FIRST Chief Election Commissioner of Independent India who supervised India's first historic General Elections in 1951–52?",
    options: ["Sukumar Sen", "T.N. Seshan", "K.V.K. Sundaram", "Sunil Arora"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Sukumar Sen organized India's gigantic first democratic general election of 173 million voters across remote geographies."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the maximum strength of Lok Sabha and Rajya Sabha sanctioned by the Constitution of India?",
    options: [
      "Lok Sabha: 550 members ; Rajya Sabha: 250 members (238 elected + 12 nominated by President)",
      "Lok Sabha: 500 ; Rajya Sabha: 200",
      "Lok Sabha: 600 ; Rajya Sabha: 300",
      "Both have 500 members"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Maximum sanctioned strength: Lok Sabha = 550; Rajya Sabha = 250 (including 12 nominated eminent persons in arts, literature, science, social service)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What does the term 'Secular State' in the Indian Preamble signify?",
    options: [
      "The State has no official state religion and treats all religions equally with complete freedom of faith, worship, and conscience",
      "The State bans all religions",
      "The State only supports one religion",
      "The State is ruled by priests"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Indian secularism (Sarva Dharma Sambhava) mandates absolute neutrality, non-discrimination, and equal protection for all faiths."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Who presides over the joint sittings of both Houses of Parliament in India?",
    options: ["The Speaker of the Lok Sabha", "The Chairman of Rajya Sabha", "The President", "The Prime Minister"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Under Article 118(4), the Speaker of the Lok Sabha presides over joint sittings summoned by the President to resolve legislative deadlocks."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the retirement age of a Judge of the Supreme Court of India and a Judge of a High Court respectively?",
    options: ["Supreme Court Judge: 65 years ; High Court Judge: 62 years", "Both 60 years", "Both 65 years", "Supreme Court: 70 years ; High Court: 65 years"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Constitutionally, Supreme Court judges hold office until 65 years of age, whereas High Court judges retire at 62 years."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the policy think-tank of the Government of India that replaced the Planning Commission in 2015, chaired by the Prime Minister?",
    options: ["NITI Aayog (National Institution for Transforming India)", "Finance Commission", "National Development Council", "RBI"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Established on 1 January 2015, NITI Aayog fosters cooperative federalism and strategic policy advisory."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "How long did the Constituent Assembly take to draft and complete the Constitution of India?",
    options: ["2 years, 11 months, and 18 days", "1 year and 6 months", "5 full years", "3 years exactly"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Constituent Assembly held 11 plenary sessions spanning 165 days over a total period of 2 years, 11 months, and 18 days."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Read the statements:\nAssertion (A): The Indian Constitution is characterized as 'Quasi-Federal' or 'Federal with a strong unitary bias' (a Union of States).\nReason (R): While legislative powers are divided between the Union and States across three lists (Union, State, Concurrent), the Centre retains emergency powers, single citizenship, an integrated judiciary, and residuary legislative powers.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Constitutional scholar K.C. Wheare described the Indian Constitution as quasi-federal due to structural centralization in national emergencies."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Spot the IMPOSTER in the following group of Fundamental Rights paired with their constitutional articles:\nGroup: [Right to Equality - Articles 14-18, Right to Freedom - Articles 19-22, Right against Exploitation - Articles 23-24, Right to Education - Article 51A]",
    options: ["Right to Equality - Articles 14-18", "Right to Freedom - Articles 19-22", "Right against Exploitation - Articles 23-24", "Right to Education - Article 51A"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Fundamental Right to Education is under ARTICLE 21A (Part III). Article 51A contains Fundamental Duties (Part IVA)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What historic landmark judgment by a 13-judge constitutional bench of the Supreme Court in 1973 established that Parliament cannot alter the 'Basic Structure' of the Indian Constitution?",
    options: ["Kesavananda Bharati v. State of Kerala (1973)", "Golaknath Case (1967)", "Minerva Mills Case (1980)", "Maneka Gandhi Case (1978)"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Kesavananda Bharati verdict ruled that while Article 368 empowers Parliament to amend the Constitution, it cannot destroy its essential basic structure."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Match Column I (Constitutional Bodies & Articles) with Column II (Functions):\n(a) Article 324  -> (i) Autonomous Election Commission of India\n(b) Article 280  -> (ii) Finance Commission for tax devolution\n(c) Article 148  -> (iii) Comptroller and Auditor General (CAG) of India\n(d) Article 76   -> (iv) Attorney General for India (highest law officer)",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "324 = ECI; 280 = Finance Commission; 148 = CAG; 76 = Attorney General."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Read the statements regarding the Preamble of the Indian Constitution:\nStatement 1: The words 'SOCIALIST', 'SECULAR', and 'INTEGRITY' were added to the Preamble by the 42nd Constitutional Amendment Act of 1976.\nStatement 2: The Preamble is a legal enactment that can be enforced in a court of law on its own.\nStatement 3: The Preamble establishes that sovereign political authority derives directly from 'WE, THE PEOPLE OF INDIA'.\nWhich statements are TRUE?",
    options: ["Statements 1 and 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because the Preamble is non-justiciable (not directly enforceable independently in court). Statements 1 and 3 are true."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Which Constitutional Amendment Act lowered the voting age for Lok Sabha and Legislative Assembly elections from 21 years to 18 years?",
    options: ["61st Constitutional Amendment Act (1988)", "42nd Constitutional Amendment Act (1976)", "44th Constitutional Amendment Act (1978)", "73rd Constitutional Amendment Act (1992)"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The 61st Amendment amended Article 326, empowering 18-year-old Indian youth with democratic voting rights."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What are the Three Types of Emergencies that the President of India can proclaim under Part XVIII of the Constitution?",
    options: [
      "National Emergency (Article 352), State Emergency / President's Rule (Article 356), and Financial Emergency (Article 360)",
      "War Emergency, Climate Emergency, Health Emergency",
      "Police Emergency, Judicial Emergency, Army Emergency",
      "Only one type of emergency exists"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Articles 352 (National/War), 356 (Constitutional machinery failure in states), and 360 (Financial threat) constitute emergency provisions."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Which of the following constitutional features of the Indian Constitution was borrowed from the Constitution of the United Kingdom (British Parliamentary Model)?",
    options: [
      "Parliamentary form of government, Rule of Law, Single Citizenship, and Cabinet System",
      "Fundamental Rights (USA)",
      "Directive Principles of State Policy (Ireland)",
      "Concurrent List (Australia)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Westminster parliamentary model, bicameralism, single citizenship, and legislative procedure were derived from the UK."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the constitutional mechanism known as 'Gram Sabha' under the 73rd Amendment Act?",
    options: [
      "A village assembly consisting of ALL registered adult voters of a village, serving as the foundational grassroots direct democracy organ",
      "A council of village priests only",
      "A group of rich landowners",
      "The state legislative assembly"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Gram Sabha comprises every registered voter in the village panchayat area, deliberating village plans and budget expenditures."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "Who was the famous master artist of Shantiniketan who, along with his students (including Beohar Rammanohar Sinha), painstakingly illuminated and hand-decorated the original calligraphy pages of the Constitution of India?",
    options: ["Nandalal Bose", "Raja Ravi Varma", "Abanindranath Tagore", "M.F. Husain"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Nandalal Bose decorated the original manuscript with classical Indian motifs, while Prem Behari Narain Raizada wrote the elegant calligraphy."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "What is the primary function of the 'Directive Principles of State Policy' (DPSP) contained in Part IV (Articles 36–51) of the Indian Constitution?",
    options: [
      "They are non-justiciable socio-economic policy guidelines and goals for the State to establish a Welfare State (Kalyankari Rajya) based on social justice",
      "They are criminal punishment laws",
      "They are rules for the Indian Army",
      "They are tax collection rules"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Inspired by Ireland, DPSPs guide governmental legislation towards achieving social and economic democracy."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 7: Indian Polity, Constitution & Governance",
    question: "How is the President of India elected according to the Constitution?",
    options: [
      "Indirectly by an Electoral College consisting of elected members of both Houses of Parliament AND elected members of State Legislative Assemblies (using Single Transferable Vote)",
      "Directly by all voting citizens of India",
      "Nominated solely by the Prime Minister",
      "Chosen by the Supreme Court judges"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Article 54 prescribes an Electoral College comprising elected MPs and MLAs through proportional representation by single transferable vote."
  }
];

console.log('Generated GK Ch7:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/gk_ch7.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
