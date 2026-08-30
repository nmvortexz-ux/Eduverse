import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 12: UN & Global Organizations (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "On which date is 'United Nations Day' celebrated globally every year to mark the official founding of the UN in 1945?",
    options: ["24th October", "15th August", "5th June", "10th December"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The UN Charter took effect on 24 October 1945 following ratification by founding members, celebrated globally as UN Day."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Where is the global Headquarters of the United Nations (UN) located?",
    options: ["New York City, USA", "Geneva, Switzerland", "Paris, France", "London, UK"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The UN headquarters complex is situated in New York City on international territory along the East River."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "How many sovereign member states currently belong to the United Nations?",
    options: ["193 Member States", "150 Member States", "100 Member States", "250 Member States"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The UN comprises 193 member states (with South Sudan joining in 2011) plus two Permanent Observer states (Holy See & Palestine)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Which principal organ of the United Nations is responsible for maintaining international peace and security, consisting of 5 Permanent Members (P5 with Veto Power) and 10 non-permanent members?",
    options: ["UN Security Council (UNSC)", "General Assembly", "Economic and Social Council", "Trusteeship Council"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The UNSC has primary responsibility for global peace; its 5 permanent members (US, UK, France, Russia, China) hold veto power."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Which specialized UN agency headquartered in Geneva, Switzerland coordinates international public health and disease eradication?",
    options: ["World Health Organization (WHO)", "UNICEF", "UNESCO", "UNHCR"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Founded on 7 April 1948 (World Health Day), the WHO coordinates global epidemiology, pandemics, and health policy."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Which specialized UN agency headquartered in Paris, France promotes international collaboration in Education, Science, Culture, and World Heritage preservation?",
    options: ["UNESCO", "UNICEF", "IMF", "World Bank"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "UNESCO (UN Educational, Scientific and Cultural Organization) designates and protects World Heritage sites worldwide."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Which specialized UN agency headquartered in New York provides humanitarian and developmental aid to children and mothers worldwide?",
    options: ["UNICEF (United Nations Children's Fund)", "UNHCR", "UNDP", "UNEP"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "UNICEF advocates for children's rights, child immunization, nutrition, and emergency child protection."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Where is the International Court of Justice (ICJ / World Court), the principal judicial organ of the UN, located?",
    options: ["The Hague, Netherlands (Peace Palace)", "Geneva, Switzerland", "Vienna, Austria", "Rome, Italy"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The ICJ sits at the Peace Palace in The Hague, Netherlands, adjudicating legal disputes between sovereign states."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Which humanitarian organization founded by Henry Dunant in 1863 provides neutral emergency medical aid to war victims and disaster survivors, awarded three Nobel Peace Prizes?",
    options: ["International Committee of the Red Cross (ICRC)", "Amnesty International", "Doctors Without Borders", "Greenpeace"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Red Cross was founded following the 1859 Battle of Solferino, pioneering neutral humanitarian wartime protection."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "On which date is 'Human Rights Day' celebrated globally every year to commemorate the Universal Declaration of Human Rights (UDHR) adopted in 1948?",
    options: ["10th December", "24th October", "2nd October", "1st May"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The UN General Assembly adopted the landmark Universal Declaration of Human Rights (UDHR) on 10 December 1948."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Why is 'International Day of Non-Violence' observed globally on 2nd October every year by the United Nations?",
    options: [
      "To commemorate the birth anniversary of Mahatma Gandhi and spread the universal philosophy of Ahimsa (Non-violence) and peace",
      "To mark the end of World War II",
      "To celebrate the first airplane flight",
      "To celebrate Earth Day"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "In 2007, the UN General Assembly unanimously established 2 October (Gandhi Jayanti) as the International Day of Non-Violence."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "How many Sustainable Development Goals (SDGs) were adopted unanimously by all 193 UN Member States in 2015 to achieve peace, prosperity, and ecological balance by 2030?",
    options: ["17 Goals (The 2030 Agenda for Sustainable Development)", "10 Goals", "8 Goals", "25 Goals"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The UN 2030 Agenda establishes 17 integrated SDGs addressing poverty, clean water, climate action, and inequality."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Who are the FIVE Permanent Members (P5) of the UN Security Council holding permanent Veto Power?",
    options: [
      "United States, United Kingdom, France, Russia, and China",
      "India, Japan, Germany, Brazil, and South Africa",
      "USA, Canada, Australia, UK, and New Zealand",
      "Russia, Germany, Italy, Japan, and Spain"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The P5 victorious Allied powers of WWII (US, UK, France, Russia, China) hold permanent veto rights under Article 27."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the chief administrative officer of the United Nations called, who heads the UN Secretariat?",
    options: ["UN Secretary-General", "UN President", "UN Prime Minister", "Chief Justice of UN"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Secretary-General is the principal diplomat and chief administrative officer of the UN, appointed for 5-year terms."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Who was the FIRST Indian woman to serve as President of the United Nations General Assembly (in 1953)?",
    options: ["Vijaya Lakshmi Pandit", "Sarojini Naidu", "Indira Gandhi", "Sucheta Kripalani"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Vijaya Lakshmi Pandit was elected as the first female President of the 8th Session of the UN General Assembly in 1953."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Which specialized UN agency headquartered in Rome, Italy works to defeat global hunger, improve nutrition, and secure food security for all?",
    options: ["Food and Agriculture Organization (FAO)", "UNEP", "WHO", "UNICEF"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "FAO leads international efforts to achieve global food security and sustainable agricultural modernization."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Which international treaty adopted at COP21 in 2015 commits nearly all nations to limit global average temperature rise to well below 2°C above pre-industrial levels?",
    options: ["The Paris Climate Agreement", "Kyoto Protocol", "Montreal Protocol", "Stockholm Declaration"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 2015 Paris Accord legally binds parties to Nationally Determined Contributions (NDCs) aiming for a 1.5°C warming ceiling."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the specialized UN environmental agency headquartered in Nairobi, Kenya that coordinates global environmental responses and World Environment Day?",
    options: ["United Nations Environment Programme (UNEP)", "UNDP", "UNHCR", "UNFCCC"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "UNEP (founded 1972 in Nairobi) leads global environmental governance, IPCC reporting, and biodiversity treaties."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What are the 'Blue Helmets' of the United Nations officially known as?",
    options: [
      "UN Peacekeeping Forces (soldiers and police contributed by member states like India to maintain ceasefire and protect civilians in conflict zones)",
      "UN underwater divers",
      "UN mountain climbers",
      "UN pilots"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "UN Peacekeepers wear distinctive blue helmets, deployed under Chapter VII mandates to de-escalate armed conflicts (India is a top contributor)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Which non-governmental international environmental organization, founded in 1971, is world-famous for non-violent direct action to protect oceans, ancient forests, and stop nuclear testing?",
    options: ["Greenpeace", "WWF", "Amnesty International", "Red Cross"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Greenpeace campaigns against ocean dumping, commercial whaling, deforestation, and climate degradation."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What iconic animal is featured as the global conservation logo of the World Wide Fund for Nature (WWF)?",
    options: ["Giant Panda", "Bengal Tiger", "African Elephant", "Polar Bear"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Giant Panda (inspired by Chi-Chi at London Zoo in 1961) has served as WWF's iconic global conservation emblem."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Who was the Indian child rights activist awarded the Nobel Peace Prize in 2014 for his 'Bachpan Bachao Andolan' which rescued over 100,000 children from forced child labour and trafficking?",
    options: ["Kailash Satyarthi (shared with Malala Yousafzai)", "Amartya Sen", "Muhammad Yunus", "Nelson Mandela"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Kailash Satyarthi founded Bachpan Bachao Andolan and Global March Against Child Labour, winning the 2014 Nobel Peace Prize."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Where are the prestigious Nobel Prizes presented annually every year on 10th December (the Nobel Peace Prize in Oslo, Norway and other science/literature prizes in Stockholm, Sweden)?",
    options: ["Stockholm (Sweden) and Oslo (Norway)", "New York and Washington", "Paris and London", "Geneva and Zurich"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "As stipulated by Alfred Nobel's 1895 will, the Peace Prize is awarded in Oslo, while Physics, Chemistry, Medicine, and Literature are awarded in Stockholm."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What international day was unanimously declared by the UN General Assembly in 2014 following a proposal by India, celebrated globally every year on 21st June?",
    options: ["International Day of Yoga", "World Health Day", "International Day of Peace", "World Science Day"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "21 June (summer solstice) was adopted as International Yoga Day by 177 co-sponsoring nations at the UN."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the primary objective of the 'International Atomic Energy Agency' (IAEA), headquartered in Vienna, Austria?",
    options: [
      "Promoting safe, secure, and peaceful uses of nuclear energy while preventing the proliferation of nuclear weapons",
      "Building nuclear bombs for all countries",
      "Stopping all physics research",
      "Mining uranium in oceans"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "IAEA ('Atoms for Peace') inspects nuclear facilities and verifies compliance with the Non-Proliferation Treaty (NPT)."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is 'Earth Hour' organized annually by the World Wide Fund for Nature (WWF) on the last Saturday of March?",
    options: [
      "Millions of people and landmarks across 190 countries turn off non-essential electric lights for ONE HOUR (8:30 to 9:30 PM) to show commitment to planet Earth",
      "Stopping all cars for a day",
      "An hour with no sun",
      "Planting 1 billion trees in one hour"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Earth Hour is a grassroots climate mobilization where cities black out iconic monuments for 60 minutes."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the international human rights organization founded in 1961 that was awarded the 1977 Nobel Peace Prize for campaigning against torture and political imprisonment worldwide?",
    options: ["Amnesty International", "Transparency International", "Interpol", "Oxfam"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Amnesty International investigates human rights abuses and advocates for prisoners of conscience globally."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the ancient Sanskrit universal philosophy adopted by India for its G20 Presidency in 2023: 'Vasudhaiva Kutumbakam'?",
    options: ["\"One Earth · One Family · One Future\" (The World is One Family)", "\"Might is Right\"", "\"War brings Glory\"", "\"Trade conquers Nations\""],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "From the Maha Upanishad, 'Vasudhaiva Kutumbakam' affirms that all humanity and planetary life belong to a single interconnected cosmic family."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Read the statements:\nAssertion (A): The United Nations Charter (1945) replaced the earlier League of Nations (1919) to establish a more enforceable framework for global collective security.\nReason (R): The League of Nations lacked an enforcement military mechanism and failed to prevent the catastrophic aggression of World War II.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The post-WWII UN Charter instituted binding Chapter VII enforcement mechanisms and peacekeeper deployment absent in the League."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Spot the IMPOSTER in the following group of United Nations specialized agencies matched with their headquarters:\nGroup: [UNESCO - Paris (France), WHO - Geneva (Switzerland), FAO - Rome (Italy), International Court of Justice - Tokyo (Japan)]",
    options: ["UNESCO - Paris (France)", "WHO - Geneva (Switzerland)", "FAO - Rome (Italy)", "International Court of Justice - Tokyo (Japan)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "The International Court of Justice (ICJ) is headquartered in THE HAGUE, NETHERLANDS, NOT Tokyo."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the diplomatic coalition known as the 'G4 Nations' (India, Japan, Germany, and Brazil) advocating for in global governance?",
    options: [
      "Permanent Membership seats for themselves in an expanded and democratized UN Security Council (UNSC reform)",
      "Creating a new space station",
      "Banning all international trade",
      "Building a global military"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The G4 bloc supports mutual bids for permanent UNSC reform to reflect contemporary 21st-century geopolitical realities."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Match Column I (International Organizations) with Column II (Primary Domains):\n(a) UNICEF -> (i) Child survival, immunization, education & protection\n(b) UNHCR  -> (ii) Protection and resettlement of displaced global refugees\n(c) ILO    -> (iii) International labor standards & workers' rights\n(d) WMO    -> (iv) Global meteorology, weather & climate monitoring",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "UNICEF = children; UNHCR = refugees; ILO = labor standards; WMO = weather/climate."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Read the statements regarding international conventions:\nStatement 1: The 'Geneva Conventions' establish legal humanitarian protections for wounded soldiers, prisoners of war, and non-combatant civilians during armed conflicts.\nStatement 2: The Universal Declaration of Human Rights contains 30 foundational articles affirming inherent human dignity and inalienable rights.\nStatement 3: Only countries in Europe are allowed to join the United Nations.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is completely false because the UN is a universal global body with 193 member states from all continents. Statements 1 and 2 are true."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the 'Intergovernmental Panel on Climate Change' (IPCC), co-established by UNEP and WMO in 1988, awarded the 2007 Nobel Peace Prize?",
    options: [
      "The UN scientific body that assesses comprehensive peer-reviewed scientific literature on human-induced climate change, impacts, and mitigation options",
      "A company that sells solar panels",
      "A bank that funds space exploration",
      "A military alliance of polar countries"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The IPCC produces definitive Assessment Reports synthesizing global climatology to inform UNFCCC negotiations."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the unique environmental conservation project in Africa known as the 'Great Green Wall'?",
    options: [
      "An 8,000 km living barrier of trees, vegetation, and restored land stretching across the entire width of the Sahel from Senegal to Djibouti to combat Sahara desertification",
      "A concrete wall painted green",
      "A glass greenhouse in the desert",
      "A solar panel highway"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Great Green Wall restores 100 million hectares of degraded Sahelian landscape through community agro-forestry."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Who was the legendary Swedish diplomat and 2nd UN Secretary-General who died in a 1961 plane crash on a Congo peace mission, awarded a posthumous Nobel Peace Prize?",
    options: ["Dag Hammarskjöld", "Trygve Lie", "U Thant", "Kofi Annan"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Dag Hammarskjöld established active UN preventive diplomacy and peacekeeper deployment doctrine."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the international environmental treaty known as the 'Basel Convention' (1989)?",
    options: [
      "Controlling and preventing the transboundary movement and dumping of hazardous toxic chemical and electronic waste from developed to developing nations",
      "Protecting migratory birds",
      "Banning plastic water bottles",
      "Cleaning space debris"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Basel Convention regulates global trade and disposal of hazardous toxic waste and e-scrap."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What is the global initiative known as 'Mission LiFE' (Lifestyle for Environment) launched by India at COP26 and UN in 2022?",
    options: [
      "A mass movement encouraging individual and community behavioral changes to practice mindful, sustainable consumption and circular conservation lifestyles",
      "A mission to send humans to live on Mars",
      "A plan to build electric airplanes",
      "A treaty banning all paper books"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mission LiFE mobilizes Pro-Planet People (P3) to shift individual consumer behavior towards sustainable ecological practices."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "Which Indian woman was the first recipient of the prestigious Ramon Magsaysay Award for Community Leadership (1958) and founded the Bhoodan (Land Gift) Movement?",
    options: ["Acharya Vinoba Bhave", "Mother Teresa", "Aruna Roy", "Medha Patkar"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Gandhian disciple Acharya Vinoba Bhave won the inaugural 1958 Magsaysay Award for his voluntary Bhoodan land distribution."
  },
  {
    classLevel: 6,
    subject: "GK",
    chapter: "Chapter 12: Global Organizations, Peace, United Nations & Environmental Sustainability",
    question: "What ultimate planetary vision unites the United Nations Sustainable Development Goals and human civilization?",
    options: [
      "Creating an equitable, peaceful, and regenerative world where human dignity, poverty eradication, economic prosperity, and ecological biosphere balance thrive in harmony",
      "Colonizing outer space after destroying Earth",
      "Creating a single world government with no cultural diversity",
      "Stopping all human technological progress"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The UN SDGs envision a shared global blueprint balancing socio-economic equity with planetary ecological boundaries."
  }
];

console.log('Generated GK Ch12:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/gk_ch12.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
