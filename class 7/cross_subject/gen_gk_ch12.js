import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 4: General Knowledge - Chapter 12: Environmental Conservation & Climate Action (40 Questions)
// -------------------------------------------------------------
const gkQuestions = [
  // EASY (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "When is 'WORLD ENVIRONMENT DAY' celebrated globally every year under the United Nations Environment Programme (UNEP)?",
    options: ["June 5", "April 22", "March 21", "September 16"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "World Environment Day is observed on June 5 annually since 1973 to drive global awareness and action for environmental protection."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "When is 'EARTH DAY' celebrated internationally each year to demonstrate support for environmental protection?",
    options: ["April 22", "June 5", "May 1", "March 3"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Earth Day (first celebrated on 22 April 1970) mobilizes over a billion people in 190+ countries for environmental conservation."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is the primary human-generated GREENHOUSE GAS responsible for the majority of global warming and climate change?",
    options: ["Carbon Dioxide (CO₂)", "Oxygen (O₂)", "Nitrogen (N₂)", "Argon"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Carbon dioxide (emitted primarily by burning fossil fuels like coal, oil, and gas) is the predominant driver of anthropogenic global warming."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Which landmark international climate treaty was adopted by 196 nations at COP21 in 2015 to limit global warming to well below 2°C (preferably 1.5°C) above pre-industrial levels?",
    options: ["The Paris Agreement", "The Kyoto Protocol", "The Montreal Protocol", "The Geneva Convention"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Paris Climate Agreement (2015) commits world nations to legally binding national climate action plans (NDCs) to limit warming to 1.5°C."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Which successful 1987 international treaty mandated the global phase-out of Chlorofluorocarbons (CFCs) to protect the Earth's OZONE LAYER?",
    options: ["The Montreal Protocol", "The Paris Agreement", "The Ramsar Convention", "The Basel Convention"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Montreal Protocol (1987) successfully phased out 99% of ozone-depleting substances, enabling the Antarctic ozone layer to heal."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Which international treaty signed in Iran in 1971 is dedicated to the conservation and sustainable use of WETLANDS of international importance?",
    options: ["The Ramsar Convention", "The Kyoto Protocol", "The Rio Summit", "CITES"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The Ramsar Convention (1971) safeguards ecologically crucial wetlands (Ramsar Sites) worldwide."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Which species of big cat was reintroduced to India in Kuno National Park (Madhya Pradesh) in September 2022 after being declared extinct in India in 1952?",
    options: ["Cheetah (from Namibia and South Africa)", "Snow Leopard", "Jaguar", "Cougar"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Project Cheetah brought African cheetahs to Kuno National Park in 2022 to re-establish the extinct feline apex predator in Indian grasslands."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is the name of the flagship wildlife conservation initiative launched by the Government of India in 1973 to protect the Royal Bengal Tiger?",
    options: ["Project Tiger (1973)", "Project Elephant", "Project Lion", "Project Rhino"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Project Tiger, launched in 1973 at Corbett National Park, revived India's tiger population to over 3,600+ tigers (75% of global wild tigers)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Where is the global headquarters of the INTERNATIONAL SOLAR ALLIANCE (ISA), co-founded by India and France in 2015, located?",
    options: ["Gurugram (Haryana, India)", "Paris (France)", "Geneva (Switzerland)", "New York (USA)"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The International Solar Alliance (ISA) is the first treaty-based intergovernmental organization headquartered in India (Gurugram, Haryana)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "How many SUSTAINABLE DEVELOPMENT GOALS (SDGs) were established by the United Nations General Assembly in 2015 to be achieved by the year 2030?",
    options: ["17 Goals (with 169 targets)", "10 Goals", "20 Goals", "8 Goals"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "The UN 2030 Agenda consists of 17 Sustainable Development Goals (SDGs) spanning poverty eradication, clean water, climate action, and peace."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Which National Park in Assam is world-famous as the supreme sanctuary for the endangered GREAT ONE-HORNED RHINOCEROS?",
    options: ["Kaziranga National Park", "Jim Corbett National Park", "Sundarbans National Park", "Gir National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Kaziranga National Park in Assam hosts two-thirds of the world's great one-horned rhinoceros population and is a UNESCO World Heritage site."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Which National Park in Gujarat is the SOLE remaining natural wild habitat in the world for the magnificent ASIATIC LION (Panthera leo persica)?",
    options: ["Gir National Park", "Ranthambore National Park", "Kanha National Park", "Bandhavgarh National Park"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gir Forest National Park and Wildlife Sanctuary in Gujarat is the exclusive global refuge of wild Asiatic lions."
  },

  // MEDIUM (16)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'Net-Zero Emissions' (Carbon Neutrality)?",
    options: [
      "Achieving an overall balance where any human-caused greenhouse gas emissions released into the atmosphere are completely balanced and neutralized by equivalent carbon removal (via forests, carbon capture, ocean sinks)",
      "Banning all factories and electricity",
      "Stopping all human transportation",
      "Planting only one tree per person"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Net-Zero means emissions are slashed to near-zero, with any residual unavoidable emissions absorbed by natural carbon sinks or DAC technologies."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "By which target year has India committed at COP26 to achieve NET-ZERO CARBON EMISSIONS (Panchamrit goals)?",
    options: ["2070", "2050", "2030", "2040"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Prime Minister Narendra Modi announced at COP26 Glasgow that India will reach Net-Zero carbon emissions by 2070 while installing 500 GW non-fossil energy by 2030."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'GREEN HYDROGEN' in clean energy transition?",
    options: [
      "Hydrogen gas produced by splitting water (H₂O) into hydrogen and oxygen through electrolysis powered exclusively by RENEWABLE ENERGY (solar/wind), producing zero carbon emissions",
      "Hydrogen painted with green dye",
      "Hydrogen made from coal burning",
      "Gas obtained from burning trees"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Green Hydrogen is the holy grail of zero-emission fuel, decarbonizing heavy industries (steel, cement, fertilizers, shipping) using renewable electrolysis."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is the 'Intergovernmental Panel on Climate Change' (IPCC)?",
    options: [
      "The United Nations scientific body that assesses and synthesizes comprehensive peer-reviewed scientific research on climate change, its risks, and mitigation options",
      "A military police force that arrests polluters",
      "A company that sells solar panels",
      "A weather forecasting app"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The IPCC (Nobel Peace Prize 2007) produces definitive Assessment Reports (like AR6) guiding global climate policy and treaty negotiations."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'Carbon Footprint'?",
    options: [
      "The total amount of greenhouse gases (including carbon dioxide and methane) generated directly and indirectly by our individual, organizational, or product actions",
      "The footprint left by coal miners in dirt",
      "The size of a shoe made from recycled rubber",
      "The distance a car travels on a liter of fuel"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A carbon footprint quantifies individual, corporate, or national greenhouse gas emissions expressed in equivalent metric tonnes of CO₂ (tCO₂e)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Where is BHADLA SOLAR PARK, one of the world's largest operational single-location photovoltaic solar power plants (~2,245 MW), located?",
    options: ["Phalodi district, Rajasthan (Thar Desert, India)", "Gujarat", "Tamil Nadu", "Madhya Pradesh"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Bhadla Solar Park in Rajasthan spans over 14,000 acres in the high-solar-irradiance Thar desert, generating clean power for millions."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'Ocean Acidification' caused by rising atmospheric carbon dioxide levels?",
    options: [
      "The oceans absorb ~30% of atmospheric CO₂, forming carbonic acid, which lowers seawater pH and dissolves calcium carbonate shells/skeletons of corals, mollusks, and plankton",
      "Oceans turning into vinegar",
      "Salt disappearing from seawater",
      "Ocean water turning into fresh drinking water"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "CO₂ + H₂O → H₂CO₃; seawater acidification depletes carbonate ions, imperiling coral reefs (Great Barrier Reef) and marine food webs."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Which global conservation organization publishes the authoritative 'IUCN RED LIST' of threatened biological species?",
    options: [
      "International Union for Conservation of Nature (IUCN)",
      "World Wildlife Fund (WWF)",
      "Greenpeace",
      "United Nations Development Programme"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The IUCN Red List of Threatened Species is the world's most comprehensive inventory of the global conservation status of biological species."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is the 'Great Green Wall' initiative in Africa?",
    options: [
      "An ambitious 8,000-km ecological restoration project planting a continuous belt of trees across the entire width of the Sahel to halt the southward expansion of the Sahara Desert",
      "A giant concrete wall built along borders",
      "A green glass greenhouse",
      "A highway through the rainforest"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The Great Green Wall combats desertification across 11 Sahelian nations by restoring 100 million hectares of degraded land by 2030."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'Mission LiFE' (Lifestyle for Environment) launched by India at the 2021 Glasgow Climate Summit?",
    options: [
      "A global mass movement encouraging individuals and communities to adopt sustainable, mindful, environmentally conscious everyday consumption choices instead of mindless consumerism",
      "A medical insurance plan for doctors",
      "A space satellite mission to study life on Mars",
      "A free food distribution program"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Mission LiFE mobilizes citizens worldwide as 'Pro-Planet People' (P3) to reduce waste, save water, conserve energy, and practice circular lifestyles."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Which is the OLDEST National Park in India, established in 1936 in Uttarakhand (originally named Hailey National Park)?",
    options: ["Jim Corbett National Park", "Kanha National Park", "Sundarbans National Park", "Bandipur National Park"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Jim Corbett National Park (established in 1936 as Hailey National Park) is India's first and oldest national park."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'E-Waste' (Electronic Waste) and why is its recycling critical?",
    options: [
      "Discarded electronic devices (smartphones, computers, batteries) containing hazardous heavy metals (lead, mercury, cadmium) as well as recoverable precious metals (gold, copper, lithium)",
      "Old paper books thrown into garbage",
      "Plastic shopping bags",
      "Food waste from restaurants"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "E-waste recycling prevents neurotoxic heavy metals from leaching into groundwater while recovering critical rare earth elements and lithium."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'Microplastics' pollution?",
    options: [
      "Tiny microscopic plastic fragments (less than 5 mm in size) resulting from the degradation of plastic waste, synthetic textiles, and cosmetics that contaminate oceans, marine food chains, and human bloodstream",
      "Plastic toys for dolls",
      "Small plastic coins used in board games",
      "Plastic buttons on shirts"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Microplastics (<5mm) ubiquitously pollute marine biospheres, bio-accumulating up trophic levels into fish, table salt, and human tissues."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What are 'Biodiversity Hotspots'?",
    options: [
      "Biogeographic regions that possess exceptionally high concentrations of endemic biological species (found nowhere else on Earth) and are undergoing severe habitat loss (e.g. Western Ghats and Eastern Himalayas)",
      "Volcanoes with lava",
      "Desert areas with high temperature",
      "Zoos with many animals"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Norman Myers defined 36 global Biodiversity Hotspots: regions with ≥1,500 endemic vascular plant species having lost ≥70% primary habitat."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is the 'Albedo Effect' in polar climate science?",
    options: [
      "The fraction of solar radiation reflected by a surface: white polar ice has high albedo (reflects ~80% sunlight), but melting ice exposes dark ocean water which absorbs heat, accelerating global warming in a feedback loop",
      "The color of polar bears' fur",
      "The sound made by glaciers breaking",
      "The depth of polar ice sheets"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The ice-albedo feedback is a critical climate tipping element: loss of reflective sea ice increases oceanic heat absorption."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'Circular Economy'?",
    options: [
      "An economic model aimed at eliminating waste through continuous cycles of designing for durability, reuse, repairing, refurbishing, and recycling materials indefinitely",
      "An economy that prints round coins only",
      "Trading goods only in circular markets",
      "An economy where prices go in circles"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "The circular economy replaces the linear 'take-make-dispose' paradigm with closed-loop regenerative resource cycles."
  },

  // HARD (12)
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Read the statements:\nAssertion (A): Climate change is a planetary crisis that requires unprecedented multilateral geopolitical collaboration and immediate decarbonization of energy systems.\nReason (R): Exceeding the 1.5°C threshold triggers catastrophic nonlinear 'Climate Tipping Points'—including the irreversible collapse of the Greenland and West Antarctic ice sheets, Amazon rainforest dieback, and thawing of Siberian permafrost releasing massive methane bursts.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "IPCC science demonstrates that exceeding 1.5°C warming risks triggering self-amplifying planetary tipping elements with irreversible biosphere impacts."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Spot the IMPOSTER in the following major Global Environmental Treaties and their conservation mandates:\nGroup:\n1. Montreal Protocol (1987) - Protection of the Stratospheric Ozone Layer\n2. Ramsar Convention (1971) - Conservation of Ecological Wetland Sites\n3. Paris Agreement (2015) - Mitigation of Global Greenhouse Warming\n4. Treaty of Versailles (1919) - Planting pine trees on Mars",
    options: ["Treaty 1", "Treaty 2", "Treaty 3", "Treaty 4 (The Treaty of Versailles was a 1919 post-WWI peace treaty among European nations, NOT an environmental pact to plant trees on Mars)"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "Treaty 4 is an absurd distortion: Versailles settled WWI territorial borders, with zero connection to space botany."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Analyze the ecological concept of 'Carrying Capacity' of an ecosystem:\nWhat happens when a population exceeds the carrying capacity of its environment?",
    options: [
      "Resource depletion (food, water, territory) occurs, leading to environmental degradation, reproductive decline, disease outbreaks, and a sharp population crash (overshoot and collapse)",
      "The ecosystem instantly doubles in size",
      "Animals evolve into different species within a day",
      "Nothing happens because nature has infinite resources"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Carrying capacity (K) defines maximum sustainable population; ecological overshoot leads to resource depletion and demographic collapse."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Match Column I (UN Sustainable Development Goals - SDGs) with Column II (Target Agendas):\n(a) SDG 4  -> (i) Quality Education for all\n(b) SDG 6  -> (ii) Clean Water and Sanitation\n(c) SDG 7  -> (iii) Affordable and Clean Energy\n(d) SDG 13 -> (iv) Climate Action",
    options: [
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "SDG 4 = Quality Education; SDG 6 = Clean Water; SDG 7 = Clean Energy; SDG 13 = Climate Action."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Read the statements regarding renewable energy transition in India:\nStatement 1: India achieved its target of 40% installed electric capacity from non-fossil fuels nine years ahead of the 2030 schedule in 2021.\nStatement 2: India's National Green Hydrogen Mission aims to establish India as a global manufacturing and export hub for green hydrogen.\nStatement 3: Solar panels work only in underwater caves.\nWhich statements are TRUE?",
    options: ["Statements 1 and 2 only", "Statements 2 and 3 only", "Statements 1 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 3 is an absurd impossibility. Statements 1 and 2 reflect India's recognized leadership in renewable power expansion."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is the biogeochemical danger of 'Permafrost Thawing' in the Arctic tundra regions?",
    options: [
      "Thawing permafrost awakens ancient microbes that decompose trapped organic matter, releasing hundreds of billions of tons of potent METHANE (CH₄) and CO₂ into the atmosphere, triggering runaway warming",
      "It causes all rivers to turn into saltwater",
      "It stops the Earth's magnetic field",
      "It turns rocks into gold"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Permafrost holds ~1,500 gigatons of frozen carbon—twice the carbon currently in the atmosphere; thawing creates a catastrophic carbon-feedback loop."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'Payment for Ecosystem Services' (PES) in environmental economics?",
    options: [
      "Incentives and financial compensations paid to local farmers, forest dwellers, and landowners who manage their land sustainably to provide vital ecological services (clean water filtration, carbon sequestration, flood prevention)",
      "Taxes paid to enter city parks",
      "Salaries paid to zoo guards",
      "Prices charged for buying bottled water"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "PES programs (e.g. Costa Rica's PSA) internalize ecological externalities by rewarding indigenous and rural communities for preserving living ecosystems."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Consider four environmental conservation initiatives in India:\n1. The Chipko Movement (1973 - Hugging trees led by Sunderlal Bahuguna & Gaura Devi)\n2. The Appiko Movement (Karnataka - Forest protection)\n3. Silent Valley Movement (Kerala - Protecting tropical evergreen rainforest from hydroelectric dam)\n4. Narmada Bachao Andolan (Medha Patkar - River conservation & displaced tribal rights)\nWhat defining ethos do these movements share?",
    options: [
      "Grassroots non-violent Gandhian eco-activism led by indigenous communities and women fighting to safeguard forest ecosystems and ecological livelihoods",
      "They were corporate advertising campaigns for wood companies",
      "They were government projects to cut down forests",
      "They were sports clubs"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "These landmark environmental movements mobilized grassroots subaltern agency, establishing community-led ecological stewardship in India."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is the 'Loss and Damage Fund' established at COP27 (Sharm el-Sheikh) and operationalized at COP28 (Dubai)?",
    options: [
      "A dedicated international climate finance facility where historical polluting developed nations provide financial assistance to vulnerable developing countries suffering irreversible climate disasters (floods, droughts, sea-level rise)",
      "A fund to pay insurance for broken cars",
      "A tax on tourist travel",
      "A bank loan for oil companies"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "The Loss and Damage Fund operationalizes climate justice: compensating climate-vulnerable global South nations for irreversible climate shocks."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "Why are 'Mangrove Ecosystems' (like the Sundarbans) hailed as super-heroes of coastal climate resilience?",
    options: [
      "They store up to 5 times more carbon per hectare than tropical rainforests (Blue Carbon), buffer coastal communities against ferocious cyclone surges and tsunamis, and serve as vital nursery grounds for marine biodiversity",
      "Because they produce pure gold crystals in their roots",
      "Because they can walk across oceans",
      "Because they prevent rain from falling"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Mangroves are premier Blue Carbon sinks and bio-shields against coastal erosion, storm surges, and tsunami devastation."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What is 'Ecological Footprint' articulated by Mathis Wackernagel and William Rees?",
    options: [
      "A metric that compares human consumption of natural resources against the Earth's biocapacity to regenerate those resources and absorb our waste; currently, humanity consumes resources at the rate of 1.7 Earths",
      "The weight of human feet on soil",
      "The number of trees planted in a garden",
      "The distance animals travel every year"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Ecological footprint measures human demand on natural capital versus planetary biocapacity (calculated annually on Earth Overshoot Day)."
  },
  {
    classLevel: 7,
    subject: "GK",
    chapter: "Chapter 12: Environmental Conservation, Climate Change, Renewable Energy & Sustainable Development",
    question: "What supreme planetary ethical manifesto concludes the General Knowledge curriculum in Chapter 12?",
    options: [
      "We do not inherit the Earth from our ancestors; we borrow it from our children. Sustainable development demands that human economic ambition harmonize with the finite ecological boundaries of our living planet, fostering intergenerational justice and reverence for all life",
      "That human beings should exploit every natural resource until nothing is left",
      "That technology eliminates the need for nature",
      "That environmental problems will solve themselves automatically"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Chapter 12 culminates in the universal ethic of ecological stewardship: harmonizing human civilization with planetary boundaries for intergenerational sustainability."
  }
];

console.log('Generated Class 7 GK Ch12:', gkQuestions.length);
fs.writeFileSync('C:/EduVerse/class 7/cross_subject/gk_ch12.json', JSON.stringify(gkQuestions, null, 2), 'utf8');
