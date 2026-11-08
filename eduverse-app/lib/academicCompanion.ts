/**
 * EduVerse Academic Companion & Mentor Engine
 * Provides natural, sweet, and pedagogically sound responses
 * for NCERT/CBSE Classes 6–12, complete with LaTeX formulas and direct navigation links.
 */

export interface CompanionAction {
  label: string;
  href: string;
}

export interface CompanionResponse {
  text: string;
  action: CompanionAction | null;
  rawPayload: string;
}

export function getAcademicMentorResponse(rawInput: string): CompanionResponse {
  const query = (rawInput || '').trim();
  const q = query.toLowerCase();

  // ─── 1. Meaning of Education / Learning / Study Skills ─────────────────────
  if (
    /(?:what.*(?:mean by|is)|define|importance of|purpose of)\s*education|meaning of education|education kya hai|kya hoti hai education/i.test(q)
  ) {
    const text =
      "What a wonderful and thoughtful question! 😊\n\n" +
      "**Education** is so much more than just memorizing facts or scoring marks on an exam paper. At its heart, education is the lifelong process of discovering who you are, understanding how our world works, building critical thinking skills, and developing empathy and values.\n\n" +
      "Here in **EduVerse**, we believe real education happens when you understand the *'why'* behind concepts—whether that's exploring how gravity shapes galaxies, how mathematical equations solve real-world problems, or how history guides our future.\n\n" +
      "It empowers you to turn your curiosity into capability! ✨ What subject or topic are you curious to explore today? Let's take a step forward together!";
    const action = { label: "Explore Subjects & Quizzes", href: "/select" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/how to study|study tips|exam tips|preparation tips|time table|padhai kaise karein|marks kaise badhaye/i.test(q)) {
    const text =
      "I'm so glad you asked! Studying effectively isn't about sitting with books for 10 hours—it's about smart, consistent habits! 🌟\n\n" +
      "Here are my favorite tips for school students:\n" +
      "1. **Active Recall & Practice:** Don't just re-read notes. Test yourself with MCQs and write formulas from memory.\n" +
      "2. **The Pomodoro Technique:** Study for 25 focused minutes, then take a refreshing 5-minute break.\n" +
      "3. **Feynman Technique:** Try explaining the concept to a friend (or to me!) in simple words. If you can explain it simply, you've truly mastered it.\n" +
      "4. **Analyze Your Mistakes:** Every wrong question on a quiz is a hidden superpower showing you exactly what to revise!\n\n" +
      "Shall we practice a quick chapter quiz together right now?";
    const action = { label: "Take a Practice Quiz", href: "/select" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  // ─── 2. Biology Concepts ───────────────────────────────────────────────────
  if (/photosynthesis|poudhe kaise khana|chlorophyll|stomata|plant nutrition/i.test(q)) {
    const text =
      "Great question! 🌱 **Photosynthesis** is the miraculous process through which green plants make their own food using sunlight, water, and carbon dioxide.\n\n" +
      "Think of plant leaves as nature's solar-powered kitchens! The green pigment called **chlorophyll** traps solar energy, roots absorb water from the soil, and tiny pores on leaves called **stomata** take in carbon dioxide from the air.\n\n" +
      "Here is the standard NCERT chemical equation:\n\n" +
      "$$6CO_2 + 6H_2O \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} C_6H_{12}O_6 + 6O_2$$\n\n" +
      "Key products:\n" +
      "* **$C_6H_{12}O_6$ (Glucose):** Stored energy that feeds the plant.\n" +
      "* **$O_2$ (Oxygen):** Released into the atmosphere for all of us to breathe!\n\n" +
      "Would you like to test your understanding with a quick Class 7 or 10 Science quiz?";
    const action = { label: "Practice Class 7 Science", href: "/select?class=Class%207" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/cell|mitochondria|powerhouse|nucleus|cytoplasm|plant cell|animal cell/i.test(q)) {
    const text =
      "Cells are the fundamental building blocks of all living beings—just like bricks make up a building! 🔬\n\n" +
      "Here are the most essential cell organelles to remember for your exams:\n" +
      "* **Nucleus:** The 'Brain of the Cell' that houses genetic material (DNA/chromosomes).\n" +
      "* **Mitochondria:** The 'Powerhouse of the Cell' where cellular respiration takes place to generate energy as ATP.\n" +
      "* **Cell Membrane:** The semi-permeable gatekeeper regulating what enters and leaves.\n" +
      "* **Chloroplasts & Cell Wall:** Special structures found only in **plant cells** to provide rigidity and carry out photosynthesis!\n\n" +
      "Ready to test your memory on Cell Structure and Functions?";
    const action = { label: "Practice Class 8/9 Biology", href: "/select?class=Class%209" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  // ─── 3. Physics Concepts ───────────────────────────────────────────────────
  if (/newton.*second\s*law|newton.*2nd\s*law|f\s*=\s*ma/i.test(q)) {
    const text =
      "Physics becomes so simple when you picture it in real life! 🚀\n\n" +
      "**Newton's Second Law of Motion** states that the rate of change of momentum of an object is directly proportional to the applied force, and takes place in the direction of that force.\n\n" +
      "In standard formula form:\n" +
      "$$F = ma$$\n\n" +
      "Where:\n" +
      "* **$F$** = Force applied (measured in Newtons, $\\text{N}$)\n" +
      "* **$m$** = Mass of the object (in $\\text{kg}$)\n" +
      "* **$a$** = Acceleration produced (in $\\text{m/s}^2$)\n\n" +
      "**Everyday Example:** Pushing an empty bicycle is super easy, but pushing a heavy car takes enormous force to accelerate it to the same speed. That's $F = ma$ in action!\n\n" +
      "Shall we try some Class 9 physics questions together?";
    const action = { label: "Start Class 9 Physics Quiz", href: "/select?class=Class%209" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/newton.*first\s*law|inertia|law of inertia/i.test(q)) {
    const text =
      "Newton's First Law is also famously known as the **Law of Inertia**! 🚗\n\n" +
      "It tells us that every object will remain at rest or continue moving in a straight line at a constant speed, unless an external unbalanced force acts on it.\n\n" +
      "**Everyday Example:** When a moving school bus suddenly hits the brakes, your body pitches forward! Why? Because your body was moving along with the bus and inertia tries to keep you moving forward.\n\n" +
      "Inertia depends directly on mass—the heavier the object, the greater its inertia!";
    const action = { label: "Practice Class 9 Science", href: "/select?class=Class%209" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/newton.*third\s*law|action.*reaction/i.test(q)) {
    const text =
      "You've probably heard this famous golden rule: *'To every action, there is always an equal and opposite reaction.'* 🎯\n\n" +
      "**Newton's Third Law** tells us forces never exist alone; they always come in pairs:\n" +
      "$$F_{AB} = -F_{BA}$$\n\n" +
      "**Everyday Example:** When a rocket launches into space, burning exhaust gases are pushed downward with huge force (Action), and in reaction, the rocket is propelled upward into the sky (Reaction)!\n\n" +
      "Notice that the action and reaction forces always act on two **different** bodies.";
    const action = { label: "Practice Class 9 Science", href: "/select?class=Class%209" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/ohm.*law|v\s*=\s*ir|electricity|resistance|current/i.test(q)) {
    const text =
      "Let's break down **Ohm's Law**! ⚡\n\n" +
      "At constant temperature, the electric current ($I$) flowing through a metallic conductor is directly proportional to the potential difference ($V$) across its terminals:\n\n" +
      "$$V \\propto I \\implies V = IR$$\n\n" +
      "Where:\n" +
      "* **$V$** = Potential Difference (in Volts, $\\text{V}$)\n" +
      "* **$I$** = Electric Current (in Amperes, $\\text{A}$)\n" +
      "* **$R$** = Resistance of the conductor (in Ohms, $\\Omega$)\n\n" +
      "**Mental Picture:** Think of voltage like water pressure in a pipe, current as the flowing water, and resistance as the friction of a narrow pipe slowing the water down!\n\n" +
      "Ready to solve some circuit problems for Class 10?";
    const action = { label: "Class 10 Electricity Practice", href: "/select?class=Class%2010" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/gravitation|gravity|universal law of gravitation|g\s*=\s*9\.8/i.test(q)) {
    const text =
      "Gravity is the invisible bond holding our universe together! 🌍✨\n\n" +
      "**Newton's Universal Law of Gravitation** states that every particle in the universe attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them:\n\n" +
      "$$F = G \\frac{m_1 m_2}{r^2}$$\n\n" +
      "Where:\n" +
      "* $G = 6.674 \\times 10^{-11} \\text{ N}\\cdot\\text{m}^2/\\text{kg}^2$ (Universal Gravitational Constant)\n" +
      "* On Earth's surface, the acceleration due to gravity is approximately:\n" +
      "$$g \\approx 9.8 \\text{ m/s}^2$$\n\n" +
      "Would you like to practice some Gravitation MCQs for Class 9?";
    const action = { label: "Practice Gravitation Quiz", href: "/select?class=Class%209" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  // ─── 4. Mathematics Concepts ───────────────────────────────────────────────
  if (/quadratic\s*equation|quadratic\s*formula|discriminant|b\^2\s*-\s*4ac/i.test(q)) {
    const text =
      "Let's conquer quadratic equations together! 📐\n\n" +
      "The standard form of a quadratic equation in one variable is:\n" +
      "$$ax^2 + bx + c = 0 \\quad (a \\neq 0)$$\n\n" +
      "To find the roots (values of $x$), we use the famous **Quadratic Formula**:\n" +
      "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\n" +
      "The term inside the radical is the **Discriminant ($D$)**:\n" +
      "$$D = b^2 - 4ac$$\n" +
      "* If $D > 0$: Two distinct real roots\n" +
      "* If $D = 0$: Two equal real roots (coincident)\n" +
      "* If $D < 0$: No real roots\n\n" +
      "Shall we solve a couple of Class 10 polynomial and equation MCQs?";
    const action = { label: "Practice Class 10 Math", href: "/select?class=Class%2010" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/trigonometry|sin.*cos|tan|trig\s*formula|pythagoras/i.test(q)) {
    const text =
      "Trigonometry is all about the relationships in right-angled triangles! 📐✨\n\n" +
      "Remember the golden ratios for angle $\\theta$:\n" +
      "* $\\sin\\theta = \\frac{\\text{Opposite (Perpendicular)}}{\\text{Hypotenuse}}$\n" +
      "* $\\cos\\theta = \\frac{\\text{Adjacent (Base)}}{\\text{Hypotenuse}}$\n" +
      "* $\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}} = \\frac{\\sin\\theta}{\\cos\\theta}$\n\n" +
      "The most famous **Pythagorean Identity** is:\n" +
      "$$\\sin^2\\theta + \\cos^2\\theta = 1$$\n\n" +
      "Along with:\n" +
      "$$1 + \\tan^2\\theta = \\sec^2\\theta \\quad \\text{and} \\quad 1 + \\cot^2\\theta = \\csc^2\\theta$$\n\n" +
      "Ready to test your speed on Class 10 Trigonometry MCQs?";
    const action = { label: "Practice Trigonometry Quiz", href: "/select?class=Class%2010" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/arithmetic\s*progression|ap\s*formula|nth\s*term|sum\s*of\s*ap/i.test(q)) {
    const text =
      "Arithmetic Progressions (AP) make number sequences so predictable and clean! 🔢\n\n" +
      "An AP is a sequence where the difference between consecutive terms is constant ($d$).\n\n" +
      "Key formulas to memorize:\n" +
      "1. **$n^{\\text{th}}$ term ($a_n$):**\n" +
      "$$a_n = a + (n - 1)d$$\n\n" +
      "2. **Sum of first $n$ terms ($S_n$):**\n" +
      "$$S_n = \\frac{n}{2}[2a + (n - 1)d] = \\frac{n}{2}(a + l)$$\n\n" +
      "Where $a$ is the first term, $d$ is common difference, and $l$ is the last term.\n\n" +
      "Would you like to try some AP questions for Class 10?";
    const action = { label: "Start Class 10 Math AP Quiz", href: "/select?class=Class%2010" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  // ─── 5. Chemistry Concepts ─────────────────────────────────────────────────
  if (/acid.*base|ph\s*scale|litmus|neutralization/i.test(q)) {
    const text =
      "Acids, Bases, and Salts are all around us—from lemons in the kitchen to soap in the bathroom! 🧪\n\n" +
      "* **Acids:** Sour in taste, turn blue litmus red, release $H^+$ ions in water. (pH $< 7$)\n" +
      "* **Bases:** Bitter in taste, slippery to touch, turn red litmus blue, release $OH^-$ ions in water. (pH $> 7$)\n" +
      "* **Neutralization Reaction:**\n" +
      "$$\\text{Acid} + \\text{Base} \\rightarrow \\text{Salt} + \\text{Water}$$\n" +
      "$$\\text{HCl} + \\text{NaOH} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O}$$\n\n" +
      "Pure water has a neutral pH of exactly 7.0.\n\n" +
      "Let's practice some chapter questions on Acids and Bases!";
    const action = { label: "Practice Class 10 Chemistry", href: "/select?class=Class%2010" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  // ─── 6. Class & Grade Navigation ───────────────────────────────────────────
  const classMatch = q.match(/(?:class|grade|standard|std)\s*(\d{1,2})|(\d{1,2})(?:th|st|nd|rd)?\s*(?:class|grade)/i);
  if (classMatch) {
    const num = parseInt(classMatch[1] || classMatch[2], 10);
    if (num >= 6 && num <= 12) {
      const text =
        `Arey wah! Let's practice Class ${num} together! 🚀\n\n` +
        `I've prepared all the chapters, interactive MCQs, and subject modules for **Class ${num}**. Pick your subject and let's boost your score!`;
      const action = {
        label: `Start Class ${num} Practice`,
        href: `/select?class=Class%20${num}`,
      };
      return {
        text,
        action,
        rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
      };
    }
  }

  // Direct subject mentions
  if (/\b(?:science|physics|chemistry|biology)\b/i.test(q)) {
    const text =
      "Science is all about curiosity and experimenting! 🔬⚡\n\n" +
      "From living cells to electric currents, we have full NCERT chapter quizzes ready for you. Which grade would you like to practice?";
    const action = { label: "Choose Science Grade", href: "/select" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/\b(?:math|mathematics|maths|algebra|geometry)\b/i.test(q)) {
    const text =
      "Mathematics is the language of logic! 📐\n\n" +
      "The best way to master math is daily problem solving. Choose your grade below and let's solve some interesting challenges together:";
    const action = { label: "Start Math Practice", href: "/select" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  // ─── 7. Platform Features (Leaderboard, Dashboard, Boss Fight) ─────────────
  if (/leaderboard|rank|ranks|scoring|top\s*student|topper|first\s*rank/i.test(q)) {
    const text =
      "You've got this! 😊 Here is the live EduVerse Leaderboard so you can check your standing, see top student achievements, and celebrate your hard work:";
    const action = { label: "View Leaderboard", href: "/leaderboard" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/dashboard|progress|profile|xp|stats|accuracy|streak|my\s*score/i.test(q)) {
    const text =
      "Happy to show you! Here is your personal student dashboard where you can see your accuracy, earned XP, daily streak, and mastered chapters:";
    const action = { label: "Open Student Dashboard", href: "/dashboard" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/boss\s*fight|challenge|boss/i.test(q)) {
    const text =
      "Ready for the ultimate academic showdown? ⚔️\n\n" +
      "The Boss Fight mode puts your speed and accuracy to the test against tricky multi-concept questions. Let's see if you can claim victory!";
    const action = { label: "Enter Boss Fight", href: "/boss-fight" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  // ─── 8. Greetings & General Inquiries ──────────────────────────────────────
  if (/who are you|koun ho|introduce yourself|what can you do|about you/i.test(q)) {
    const text =
      "Hey there! 😊 I'm your **EduVerse Academic Companion**.\n\n" +
      "Think of me as a patient elder peer and mentor. I can:\n" +
      "• Explain school concepts in simple, sweet, relatable terms\n" +
      "• Write out and break down NCERT formulas in Math and Science\n" +
      "• Navigate you straight to any Class 6–12 chapter quiz, the Leaderboard, or your Dashboard\n\n" +
      "What are you studying today? Let me know!";
    const action = { label: "Explore Classes & Subjects", href: "/select" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/^(?:hi|hello|hey|namaste|good\s*(?:morning|afternoon|evening)|hola|kaise ho)\b/i.test(q)) {
    const text =
      "Hello there! So wonderful to see you today! 😊\n\n" +
      "I'm feeling great and super excited to help you learn. Whether you have a quick homework doubt, want to understand a tough concept, or want to practice some MCQs, I'm right here with you.\n\n" +
      "What shall we focus on today?";
    const action = { label: "Choose Your Class", href: "/select" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  if (/thank|dhanyawad|shukriya|thanks|great help|awesome/i.test(q)) {
    const text =
      "You are so very welcome! 😊 Always remember: every single question you ask makes you smarter and stronger. Keep that bright curiosity alive, and whenever you need help, I'm right here!\n\n" +
      "Ready for another chapter quiz?";
    const action = { label: "Practice Another Quiz", href: "/select" };
    return {
      text,
      action,
      rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
    };
  }

  // ─── 9. Smart Contextual NCERT Fallback ────────────────────────────────────
  const text =
    `That's a very interesting thought! 😊 Let's explore it together.\n\n` +
    `In our CBSE and NCERT journey, breaking down questions step-by-step is the secret to true mastery. ` +
    `Whether you want to revise fundamental definitions, solve numericals, or take a quick assessment to test your memory, I'm right here by your side.\n\n` +
    `Which grade or subject would you like to practice today?`;
  const action = { label: "Browse All Subjects & Quizzes", href: "/select" };
  return {
    text,
    action,
    rawPayload: `${text}\n\nACTION_LINK:${JSON.stringify(action)}`,
  };
}
