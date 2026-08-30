import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 9: Modern World History & Revolutions (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "In which year did the American Revolution reach its climax with the adoption of the historic 'Declaration of Independence' on July 4?",
    options: ["1776", "1789", "1804", "1757"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Second Continental Congress adopted the Declaration of Independence penned by Thomas Jefferson on 4 July 1776."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What historic event on July 14, 1789, in Paris marked the explosive outbreak of the FRENCH REVOLUTION?",
    options: ["The Storming of the Bastille prison-fortress", "The Battle of Waterloo", "The Boston Tea Party", "The Russian October Revolution"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The storming of the royal fortress-prison Bastille on 14 July 1789 became the symbol of the French Revolution (celebrated as Bastille Day)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the famous inspiring tripartite slogan of the French Revolution that reshaped modern global political philosophy?",
    options: ["\"Liberty, Equality, Fraternity\" (Liberté, Égalité, Fraternité)", "\"Peace, Bread, Land\"", "\"No Taxation Without Representation\"", "\"Workers of the World, Unite\""],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Liberté, Égalité, Fraternité was the rallying cry of the French Revolution and is enshrined in the preamble of modern democratic constitutions."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Who was the brilliant Scottish engineer who patented the modern condensing STEAM ENGINE in 1769, powering the Industrial Revolution?",
    options: ["James Watt", "George Stephenson", "Thomas Newcomen", "Alexander Graham Bell"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "James Watt's separate condenser steam engine dramatically increased thermodynamic efficiency, powering industrial factories and locomotives."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What event in Sarajevo on June 28, 1914, triggered the outbreak of WORLD WAR I?",
    options: [
      "The assassination of Archduke Franz Ferdinand of Austria-Hungary by Gavrilo Princip",
      "The sinking of the Lusitania",
      "The invasion of Poland",
      "The Russian Revolution"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The assassination of Archduke Franz Ferdinand in Sarajevo sparked the chain reaction of military mobilizations that erupted into World War I (1914–1918)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What peace treaty signed in 1919 formally ended World War I and established the League of Nations?",
    options: ["The Treaty of Versailles", "The Treaty of Paris", "The Treaty of Utrecht", "The Treaty of Vienna"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Treaty of Versailles (1919) imposed heavy war reparations on Germany and established the League of Nations."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Who led the Bolsheviks in the 1917 October Russian Revolution to overthrow the Provisional Government and establish the world's first socialist state (USSR)?",
    options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Mikhail Gorbachev"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Vladimir Lenin led the Bolshevik party to victory in 1917 under the slogan 'Peace, Land, and Bread', founding the Soviet Union."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Which aggressive military action by Nazi Germany on September 1, 1939, triggered the immediate outbreak of WORLD WAR II?",
    options: ["The German invasion of Poland (Blitzkrieg)", "The attack on Pearl Harbor", "The bombing of London", "The invasion of France"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Hitler's blitzkrieg invasion of Poland on 1 Sept 1939 forced Britain and France to declare war on Nazi Germany, igniting WWII."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What surprise military strike by Imperial Japan on December 7, 1941, brought the United States directly into World War II?",
    options: ["The Attack on Pearl Harbor (Hawaii)", "The Battle of Midway", "The Battle of Iwo Jima", "The Invasion of Manchuria"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Japan's carrier air raid on Pearl Harbor crippled the US Pacific Fleet and prompted US President Franklin D. Roosevelt's declaration of war."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Which two Japanese cities were destroyed by American atomic bombs ('Little Boy' and 'Fat Man') in August 1945, bringing World War II to an end?",
    options: ["Hiroshima (August 6) and Nagasaki (August 9)", "Tokyo and Kyoto", "Osaka and Yokohama", "Nagoya and Kobe"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The atomic bombings of Hiroshima and Nagasaki in August 1945 caused unprecedented devastation, leading to Japan's unconditional surrender."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What concrete barrier built in 1961 divided East and West Berlin during the Cold War, whose dramatic fall in November 1989 symbolized the collapse of communism in Eastern Europe?",
    options: ["The Berlin Wall", "The Iron Curtain Wall", "The Maginot Line", "The Great Wall of Europe"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Berlin Wall fell on 9 November 1989, paving the way for German reunification and the dissolution of the Soviet bloc."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Who was the First Prime Minister of India who co-founded the NON-ALIGNED MOVEMENT (NAM) in 1961 along with President Tito of Yugoslavia and President Nasser of Egypt?",
    options: ["Pandit Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Dr. B.R. Ambedkar"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Jawaharlal Nehru, Josip Broz Tito, Gamal Abdel Nasser, Sukarno, and Kwame Nkrumah founded NAM in Belgrade (1961) to resist Cold War superpower blocs."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Boston Tea Party' of December 16, 1773, that escalated tensions leading to the American Revolutionary War?",
    options: [
      "American colonists disguised as Mohawk Indians dumped 342 chests of British East India Company tea into Boston Harbor to protest unfair taxation without representation",
      "A tea drinking festival in Boston",
      "A British tea factory opening",
      "A peaceful trade agreement between Britain and America"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Sons of Liberty dumped British tea to protest the Tea Act (1773), rallying the famous slogan 'No taxation without representation'."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Reign of Terror' (1793–1794) during the French Revolution led by Maximilien Robespierre?",
    options: [
      "A period where the Committee of Public Safety executed tens of thousands of suspected 'counter-revolutionaries' using the Guillotine",
      "A war with Spain",
      "A famine caused by freezing winter",
      "A military coup by Napoleon"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Robespierre's Jacobin regime executed over 17,000 citizens by guillotine until Robespierre himself was overthrown in the Thermidorian Reaction."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Which battle in 1815 in modern-day Belgium marked the final, decisive military defeat of Emperor Napoleon Bonaparte?",
    options: ["The Battle of Waterloo (defeated by Duke of Wellington and Blücher)", "The Battle of Austerlitz", "The Battle of Trafalgar", "The Battle of Leipzig"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Napoleon was decisively routed at Waterloo on 18 June 1815, leading to his exile on the remote South Atlantic island of Saint Helena."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Why is the Industrial Revolution considered a fundamental turning point in human civilization?",
    options: [
      "It transformed agrarian, hand-craft economies into industrial, machine-driven manufacturing powerhouses fueled by steam, coal, electricity, and mass factory production",
      "It abolished all farming forever",
      "It made everyone become soldiers",
      "It stopped world trade"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mechanized mass manufacturing, urban industrialization, railways, and fossil energy fundamentally reshaped global demography and socio-economics."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Great Depression' that began with the catastrophic Wall Street Stock Market Crash in October 1929 ('Black Tuesday')?",
    options: [
      "The longest, deepest, and most widespread economic collapse of the 20th century, leading to mass unemployment, bank failures, and trade collapse worldwide",
      "A medical disease in 1929",
      "A storm that flooded America",
      "A war between banks"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 1929 crash plunged global economies into severe contraction, deflation, and catastrophic unemployment until WWII rearmament."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Battle of Stalingrad' (1942–1943) in World War II, widely considered the decisive turning point on the European Eastern Front?",
    options: [
      "The bloody Soviet defense that completely encircled and destroyed the German 6th Army, reversing the Nazi advance and beginning Germany's retreat to Berlin",
      "A naval battle in the Atlantic",
      "An aerial dogfight over London",
      "A tank battle in North Africa"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Stalingrad was the bloodiest battle in human history (~2 million casualties); the Soviet victory broke the backbone of the Wehrmacht."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was 'D-Day' (Operation Overlord) on June 6, 1944?",
    options: [
      "The massive Allied amphibious invasion of Normandy (France) by American, British, and Canadian forces, establishing a western front to liberate Europe from Nazi occupation",
      "The surrender of Japan",
      "The German invasion of Russia",
      "The signing of the UN Charter"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "General Dwight D. Eisenhower commanded the largest amphibious armada in history landing across Normandy beaches on 6 June 1944."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Cuban Missile Crisis' in October 1962 during the Cold War?",
    options: [
      "A perilous 13-day nuclear standoff between the USA (President Kennedy) and USSR (Premier Khrushchev) over Soviet nuclear missiles deployed in Cuba, bringing the world to the brink of nuclear war",
      "A civil war in Cuba",
      "The invasion of Florida",
      "A missile test in the Arctic"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 1962 crisis was the closest the Cold War came to full-scale thermonuclear war, resolved by Soviet missile withdrawal and US pledge not to invade Cuba."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Holocaust' perpetrated by Nazi Germany during World War II?",
    options: [
      "The systematic, state-sponsored genocide of six million European Jews and millions of others (Roma, Slavs, dissidents) in industrialized extermination camps (like Auschwitz-Birkenau)",
      "A military parade in Berlin",
      "A medical experiment with antibiotics",
      "A treaty between Germany and Italy"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Shoah / Holocaust was the horrific Nazi genocide that exterminated two-thirds of European Jewry in gas chambers and death camps."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Marshall Plan' (European Recovery Program) enacted by the United States in 1948?",
    options: [
      "A massive American financial foreign-aid program ($13+ billion) to rebuild war-devastated Western European economies and prevent the spread of Soviet communism",
      "A military plan to conquer Asia",
      "A plan to build spaceships",
      "A treaty to divide Germany"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Initiated by US Secretary of State George Marshall, the plan revived Western European industrial production and economic stability."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Which international treaty signed in 1968 aimed at preventing the spread of nuclear weapons and promoting nuclear disarmament?",
    options: ["The Treaty on the Non-Proliferation of Nuclear Weapons (NPT)", "The Kyoto Protocol", "The Geneva Convention", "The Warsaw Pact"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The NPT (1968) established three pillars: non-proliferation, peaceful use of nuclear technology, and disarmament."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Meiji Restoration' (1868) in Japanese history?",
    options: [
      "The political revolution that ended the Tokugawa Shogunate, restored imperial rule under Emperor Meiji, and rapidly modernized and industrialized Japan into a global power",
      "The construction of Tokyo city",
      "The adoption of Buddhism in Japan",
      "The isolation of Japan from the world"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Meiji era transformed feudal samurai Japan into an industrialized, modernized constitutional empire in just a few decades."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Who was the South African anti-apartheid leader who spent 27 years imprisoned on Robben Island and became South Africa's first black President in 1994?",
    options: ["Nelson Mandela", "Desmond Tutu", "Kofi Annan", "Robert Mugabe"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Nelson Mandela led the ANC's struggle against racial apartheid, earning the Nobel Peace Prize and inspiring global human rights."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Bandung Conference' held in Indonesia in 1955?",
    options: [
      "A landmark summit of 29 Asian and African nations promoting Afro-Asian economic and cultural cooperation and opposing colonialism, which laid the foundation for the Non-Aligned Movement",
      "A trade summit of European bankers",
      "A military meeting of NATO",
      "A sports competition in Asia"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The 1955 Bandung Conference articulated the Panchsheel principles and catalyzed the post-colonial Third World solidarity movement."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What policies of 'Glasnost' (Openness) and 'Perestroika' (Restructuring) introduced by Soviet leader Mikhail Gorbachev in the late 1980s led to the dissolution of the Soviet Union in December 1991?",
    options: [
      "Political democratization, freedom of the press, and economic decentralization that unintentionally dismantled Soviet totalitarian control",
      "A plan to start a war with China",
      "The banning of all private businesses",
      "The building of new missile bases"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Gorbachev's dual reforms intended to revitalize the USSR unleashed unstoppable democratic movements culminating in the peaceful collapse of the Soviet Union."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Which international treaty signed in 1992 created the European Union (EU) and laid the groundwork for the single European currency (the Euro)?",
    options: ["The Maastricht Treaty", "The Treaty of Rome", "The Schengen Agreement", "The Lisbon Treaty"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Maastricht Treaty (1992) established the European Union, European citizenship, and the Economic and Monetary Union (Eurozone)."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Read the statements:\nAssertion (A): The Treaty of Versailles (1919) contained the seeds of World War II.\nReason (R): The punitive 'War Guilt Clause' (Article 231), crippling economic reparations, severe territorial amputations, and total military disarmament inflicted on Weimar Germany fueled intense hyperinflation, nationalist humiliation, and the rise of Adolf Hitler's Nazi party.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "John Maynard Keynes and historians regard Versailles as an unsustainable 'Carthaginian Peace' that directly destabilized inter-war Europe."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Spot the IMPOSTER in the following major World Revolutions and their defining historical milestones:\nGroup:\n1. American Revolution (1776) - Declaration of Independence & George Washington\n2. French Revolution (1789) - Storming of the Bastille & Rights of Man\n3. Russian Revolution (1917) - Bolshevik seizure of power & Vladimir Lenin\n4. Industrial Revolution (1800) - Invention of internet search engines and smartphones",
    options: ["Revolution 1", "Revolution 2", "Revolution 3", "Revolution 4 (The First Industrial Revolution involved steam engines, mechanized spinning jenny, and ironworks, NOT 21st-century smartphones)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Revolution 4 is an absurd anachronism: 18th/19th century industrialization centered on steam, textile mills, coal, and railways."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Analyze the geopolitical mechanism of the 'Cold War' (1947–1991):\nWhy was it termed a 'COLD' war rather than a 'Hot' war?",
    options: [
      "The two nuclear-armed superpowers (USA and USSR) never engaged in direct direct military combat against each other due to Mutually Assured Destruction (MAD), fighting instead through ideological rivalry, proxy wars (Korea, Vietnam), the nuclear arms race, and the Space Race",
      "Because all battles were fought in freezing Siberia",
      "Because both countries banned the use of gunpowder",
      "Because wars were fought only in winter months"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Nuclear deterrence / MAD prevented direct superpower thermonuclear clashes, channeling conflict into proxy theaters, espionage, and proxy warfare."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Match Column I (Historic Global Summits / Treaties) with Column II (Defining Historical Milestones):\n(a) Treaty of Westphalia (1648) -> (i) Established modern nation-state sovereignty and diplomatic immunity\n(b) Congress of Vienna (1815)     -> (ii) Restored European balance of power after the fall of Napoleon\n(c) Yalta Conference (1945)      -> (iii) Churchill, Roosevelt, and Stalin planned the post-WWII division of Europe\n(d) Geneva Conventions (1949)    -> (iv) Codified international humanitarian laws of war and prisoner protection",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Westphalia = state sovereignty; Vienna = post-Napoleonic balance; Yalta = post-WWII spheres; Geneva = laws of war."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Read the statements regarding the Decolonization era (1945–1975):\nStatement 1: The exhaustion of European colonial empires after WWII, combined with powerful nationalist liberation movements, led to the independence of dozens of nations in Asia and Africa.\nStatement 2: India's independence in 1947 served as a beacon and catalyst for anti-colonial liberation struggles across the British Empire.\nStatement 3: The Roman Empire colonized North America in 1950.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an absurd impossibility. Statements 1 and 2 define the transformative 20th-century Afro-Asian decolonization wave."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the significance of the 'Nuremberg Trials' (1945–1946) conducted after World War II?",
    options: [
      "The historic international military tribunal that prosecuted top Nazi leaders for 'Crimes Against Peace', 'War Crimes', and 'Crimes Against Humanity', establishing individual legal accountability under international law",
      "A conference to set world oil prices",
      "The division of Berlin into zones",
      "The creation of the Euro currency"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Nuremberg established modern international criminal law: leaders cannot claim sovereign immunity or 'following orders' for crimes against humanity."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What was the 'Space Race' between the USA and the USSR during the Cold War?",
    options: [
      "A high-stakes scientific-technological competition for space dominance: USSR launched the first satellite (Sputnik, 1957) and first human in space (Yuri Gagarin, 1961) ; USA achieved the first manned Moon landing (Apollo 11, Neil Armstrong, 1969)",
      "A military battle fought with space laser weapons on Mars",
      "A race to build the tallest skyscraper",
      "A telescope building competition"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Space Race showcased ideological and technological superiority: Soviet orbital triumphs balanced by Apollo 11's historic lunar landing."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Consider four major global economic and geopolitical institutions established at the 1944 Bretton Woods Conference:\n1. The International Monetary Fund (IMF)\n2. The World Bank (IBRD)\n3. The General Agreement on Tariffs and Trade (GATT, later WTO)\nWhat primary mission did this post-war financial architecture serve?",
    options: [
      "To prevent global depressions through stable international exchange rates, finance post-war reconstruction, and foster open multilateral international trade",
      "To enforce military occupation over poor nations",
      "To abolish all paper money worldwide",
      "To print a single world newspaper"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Bretton Woods established global macroeconomic stability, institutionalizing monetary cooperation and international development loans."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "Why was the 'Suez Crisis' (1956) a watershed moment in the decline of British and French imperial dominance?",
    options: [
      "When Britain, France, and Israel invaded Egypt after President Nasser nationalized the Suez Canal, diplomatic condemnation and economic pressure from both the US and USSR forced a humiliating Anglo-French withdrawal, cementing the end of European imperial hegemony",
      "Because Egypt conquered all of Europe",
      "Because the canal was filled with concrete",
      "Because Britain annexed Egypt permanently"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The 1956 Suez debacle revealed that old European colonial powers could no longer exercise independent global military force without US consent."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What is the historical significance of the 'Universal Declaration of Human Rights' (UDHR) adopted by the UN General Assembly on December 10, 1948?",
    options: [
      "The first global proclamation of fundamental human rights to be universally protected for all human beings everywhere, authored by a diverse committee chaired by Eleanor Roosevelt",
      "A treaty that ended the Korean war",
      "A law allowing countries to buy nuclear weapons",
      "A rule on maritime fishing quotas"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Adopted in Paris (10 Dec 1948, Human Rights Day), the 30 articles of the UDHR enshrine inalienable civil, political, economic, and social rights."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What historic transformation occurred in South Africa with the 1994 General Election?",
    options: [
      "The peaceful end of four decades of institutionalized white-minority Apartheid, and the election of Nelson Mandela as President in the country's first fully representative multiracial democratic election",
      "The partition of South Africa into four countries",
      "The coronation of a new British monarch",
      "The expulsion of all foreign diplomats"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The 1994 election birthed the multiracial 'Rainbow Nation', inaugurating a democratic constitutional state underpinned by truth and reconciliation."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 9: Modern World History, Revolutions, World Wars & Landmark Treaties",
    question: "What overarching historical lesson is illuminated in Chapter 9 of General Knowledge?",
    options: [
      "Modern world history is a dynamic chronicle of humanity's unrelenting struggle for liberty, equality, scientific modernization, and international legal institutions to replace imperial domination and catastrophic wars with peaceful global multilateral cooperation",
      "That wars are always inevitable and peace is impossible",
      "That only monarchs should rule the world",
      "That technology has never changed human society"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 9 synthesizes modern revolutions, the trauma of total wars, the Cold War balance of power, decolonization, and the quest for universal human rights."
  }
];

console.log('Generated Class 7 GK Ch9:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/gk_ch9.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
