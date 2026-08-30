import fs from 'fs';

// -------------------------------------------------------------
// SUBJECT 1: Science - Chapter 8: Light, Shadows and Reflections (40 Questions)
// -------------------------------------------------------------
const scienceQuestions = [
  // EASY (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Objects that emit or give out light of their own (such as the Sun, stars, a lit candle, an electric torch) are called:",
    options: ["Luminous Objects", "Non-luminous Objects", "Transparent Objects", "Opaque Objects"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Luminous objects radiate their own photon emissions directly (e.g. the Sun, electric bulb, candle flame)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Objects that do NOT emit light of their own and become visible only when light falls on them (such as the Moon, a chair, a book) are called:",
    options: ["Non-luminous Objects", "Luminous Objects", "Incandescent Objects", "Fluorescent Objects"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Non-luminous bodies (including the Moon, which reflects sunlight) do not generate intrinsic light."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Materials that allow light to pass through them completely and clearly, so that objects behind them can be seen distinctly (such as clear glass, air, clean water) are called:",
    options: ["Transparent Materials", "Translucent Materials", "Opaque Materials", "Luminous Materials"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Transparent media transmit light rays with negligible absorption and scattering, permitting sharp visual transmission."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Materials that do NOT allow ANY light to pass through them at all, so that we cannot see through them (such as a wooden board, brick wall, metal plate) are called:",
    options: ["Opaque Materials", "Transparent Materials", "Translucent Materials", "Luminous Materials"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Opaque materials completely absorb and reflect incident light, blocking optical transmission."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Materials that allow light to pass through them only partially, so that objects behind them can be seen only faintly or hazily (such as butter paper, frosted glass, oily paper) are called:",
    options: ["Translucent Materials", "Transparent Materials", "Opaque Materials", "Reflective Materials"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Translucent media transmit light diffusely, scattering photons so images behind appear indistinct."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "A dark patch formed on a surface behind an opaque object when it blocks the straight path of light is called a:",
    options: ["Shadow", "Reflection", "Spectrum", "Beam"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A shadow is an umbral region of darkness cast when an opaque body obstructs rectilinear light propagation."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What three essential things are required to form and view a Shadow?",
    options: [
      "A Source of Light, an Opaque Object, and a Screen (surface)",
      "A Mirror, a Candle, and Water",
      "Only a Light Source",
      "Only a transparent glass"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Shadow formation strictly necessitates 1. an incident light source, 2. an obstructing opaque object, and 3. a screen/surface to cast upon."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "The fundamental scientific principle that light travels strictly in STRAIGHT LINES is known as:",
    options: ["Rectilinear Propagation of Light", "Curvilinear Propagation", "Dispersion", "Total Internal Reflection"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Rectilinear propagation states that optical rays travel along straight linear trajectories in a homogeneous medium."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What simple optical device consisting of a box with a tiny pinhole aperture at one end produces an INVERTED (upside-down) image on a translucent screen without using any glass lens?",
    options: ["Pinhole Camera (Camera Obscura)", "Microscope", "Telescope", "Periscope"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A pinhole camera exploits rectilinear light paths crossing through a minute aperture to project an inverted real image."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "The bouncing back of light rays when they strike a smooth, polished, highly reflective surface (such as a plane mirror or still water surface) is called:",
    options: ["Reflection of Light", "Refraction of Light", "Absorption of Light", "Shadowing"],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Reflection is the redirection of incident light waves at an interface according to the laws of reflection."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What are the characteristics of the image of our face formed in a standard Plane Mirror?",
    options: [
      "Erect (upright), same size as the object, laterally inverted (left appears right), and formed at the same distance behind the mirror",
      "Inverted and very small",
      "Dark black like a shadow",
      "Upside-down and magnified"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "A plane mirror forms a virtual, erect, equi-distant, unmagnified, laterally inverted image."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What natural pinhole images can be observed on the ground under a dense tree during bright daylight?",
    options: [
      "Circular bright patches of light (which are actually pinhole images of the Sun formed by tiny gaps between overlapping leaves)",
      "Square dark holes",
      "Pictures of birds",
      "Rainbow rings"
    ],
    correctAnswer: 0,
    difficulty: "EASY",
    damage: 150,
    explanation: "Gaps between leafy canopies act as natural pinhole apertures, projecting circular solar images onto the ground."
  },

  // MEDIUM (16)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What is the crucial difference between a 'Shadow' and an 'Image' formed by a mirror?",
    options: [
      "A Shadow is only a dark outline showing the shape of an object without any color or details; an Image shows the full color, facial details, and features of the object formed by reflected light",
      "A Shadow is colorful while an image is black",
      "A Shadow is formed by mirrors",
      "There is no difference"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Shadows represent absence of light displaying silhouette geometry; optical images reproduce chromatic wavelengths and surface textures."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Why can we NOT see the flame of a lit candle when looking through a BENT or curved plastic pipe, whereas we can see it clearly through a STRAIGHT pipe?",
    options: [
      "Because light travels only in straight lines (Rectilinear propagation) and cannot bend around the corners of a curved pipe",
      "Because the bent pipe blows out the candle flame",
      "Because candle light is too heavy to travel up a pipe",
      "Because curved pipes absorb all oxygen"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Light cannot spontaneously negotiate curvature without reflective mirrors, proving straight-line rectilinear transmission."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Why does the color of a shadow NOT change when a red ball, a green book, or a yellow toy blocks white light?",
    options: [
      "Because a shadow is merely an area of darkness where light was completely blocked from reaching the screen, regardless of the object's surface color",
      "Because all shadows are painted black by nature",
      "Because colored light is absorbed by the ground",
      "Because human eyes only see black"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Shadows are regions of photon deprivation (umbra); chromatic properties of the blocking opaque object do not affect the darkness."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What is 'Lateral Inversion' observed when you raise your left hand in front of a plane mirror?",
    options: [
      "The phenomenon where the left side of the object appears as the right side in the mirror image, and the right side appears as the left side",
      "The image turns completely upside-down",
      "The image disappears",
      "The image becomes transparent"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Front-to-back ray reflection reverses apparent lateral chirality: left hand maps to the image's right hand."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Why is the word 'AMBULANCE' printed backwards ('ECNALUBMA') on the front of emergency hospital vans?",
    options: [
      "So that drivers looking into their rear-view mirrors see the laterally inverted reflection read forward and correctly as 'AMBULANCE'",
      "Because of a printing machine mistake",
      "To make the van look foreign",
      "Because of medical code laws"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Pre-inverting the lettering ensures that lateral inversion in planar rear-view mirrors restores legible front-facing orthography."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What happens to the size of a shadow when an opaque object is moved CLOSER to the light source (with the screen position fixed)?",
    options: [
      "The size of the shadow INCREASES (becomes larger)",
      "The size of the shadow decreases",
      "The shadow turns into an image",
      "The shadow disappears completely"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Moving closer intercepts a broader angular divergence cone of light rays, casting a larger geometric shadow cone on the screen."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Why does a high-flying aeroplane or a bird soaring very high in the clear sky NOT cast a visible shadow on the ground?",
    options: [
      "Because at great altitudes, the dark central shadow (umbra) tapers off in air and only faint penumbra reaches the ground, making the shadow imperceptible",
      "Because birds are transparent to sunlight",
      "Because aeroplanes fly faster than light",
      "Because the sky absorbs shadows"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Due to the finite angular size of the Sun, the umbral cone terminates before reaching ground level, dispersing ambient light."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "How does the image formed in a Pinhole Camera change if the tiny pinhole is replaced by a LARGE open hole (e.g. 2 cm diameter)?",
    options: [
      "The image becomes completely blurred and unclear because multiple overlapping images enter through different points of the large hole",
      "The image becomes super sharp and magnified",
      "The image turns black and white",
      "No light enters the camera"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A large aperture acts as infinite adjacent pinholes, creating overlapping circles of confusion that blur optical fidelity."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Why is an image formed in a pinhole camera always INVERTED (upside down)?",
    options: [
      "Light rays from the top of the object travel in a straight line through the pinhole to strike the bottom of the screen, while rays from the bottom strike the top",
      "Because the camera box is upside down",
      "Because air rotates light rays by 180°",
      "Because translucent paper inverts gravity"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Intersecting rectilinear ray trajectories cross linearly at the focal aperture, projecting top points to bottom screen coordinates."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Why is the Moon classified as a NON-LUMINOUS object, despite shining brilliantly in the night sky?",
    options: [
      "The Moon does not produce any light through nuclear fusion or heat; it merely reflects incident sunlight striking its rocky dusty surface",
      "Because it is covered with ice",
      "Because it only shines for a few hours",
      "Because it is too far from Earth"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Lunar regolith has an albedo of ~0.12, reflecting solar irradiation without generating autonomous luminescent energy."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What optical device uses two parallel plane mirrors fixed at 45° angles inside a Z-shaped tube to allow a person to see over walls or around corners (used in submarines to view surface ships)?",
    options: ["Periscope", "Kaleidoscope", "Microscope", "Telescope"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "A periscope utilizes twin 45° plane mirrors to reflect incoming horizontal rays downward and then horizontally into the observer's eye."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What biological organism is a natural living LUMINOUS animal that emits glowing yellow-green light through bioluminescence in the dark?",
    options: ["Firefly (Jugnu)", "Earthworm", "Housefly", "Butterfly"],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Fireflies exhibit enzymatic bioluminescence (luciferin oxidized by luciferase in the presence of ATP) to emit cold light."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Can a transparent glass sheet cast a dark, distinct shadow on the wall?",
    options: [
      "No, because transparent glass allows almost all light rays to pass directly through without obstruction",
      "Yes, exactly like a thick wooden door",
      "Yes, if the light is turned off",
      "Yes, if the glass is round"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "High optical transmittance prevents significant light blockage, resulting in no discernible umbral shadow."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "How do the shadows of objects cast by the Sun change in length during the course of a clear sunny day?",
    options: [
      "Shadows are longest in the early morning and late evening (when Sun is low on horizon), and shortest at solar noon (when Sun is highest overhead)",
      "Shadows are longest at noon",
      "Shadow length remains exactly constant all day",
      "Shadows disappear in morning"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Shadow length L = h / tan(θ), where θ is solar elevation angle; low morning/evening solar altitudes yield elongated shadows."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Why can we NOT see anything when entering a pitch-dark room without any light source?",
    options: [
      "Our eyes do not emit light; vision requires light from a luminous source to reflect off objects and enter our eyes",
      "Because dark rooms make human eyes close automatically",
      "Because darkness turns objects invisible permanently",
      "Because light rays freeze in dark rooms"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Photoreceptors in the retina require incoming reflected photons to trigger neuro-electrical optic nerve impulses."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What is an Eclipse (Solar or Lunar) in astronomical science?",
    options: [
      "A colossal natural shadow phenomenon formed in space when an astronomical body (Moon or Earth) blocks sunlight from reaching another body",
      "A magical storm on the Sun",
      "The Moon exploding",
      "The Sun turning off for a few minutes"
    ],
    correctAnswer: 0,
    difficulty: "MEDIUM",
    damage: 250,
    explanation: "Eclipses are large-scale celestial shadow events governed by rectilinear light propagation across astronomical orbits."
  },

  // HARD (12)
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Read the statements:\nAssertion (A): During a Solar Eclipse, viewing the Sun with the naked eye can cause permanent retinal damage and blindness, whereas a pinhole projector allows completely safe viewing.\nReason (R): The pinhole camera projects an inverted real image of the solar disc onto a secondary screen, avoiding direct focused solar radiation onto the human retina.\nChoose the correct option:",
    options: [
      "Both (A) and (R) are true, and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true, but (R) is NOT the correct explanation of (A).",
      "(A) is true, but (R) is false.",
      "(A) is false, but (R) is true."
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Pinhole projection eliminates high-intensity infrared and ultraviolet macular burns by redirecting diffuse illumination to a projection screen."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Spot the IMPOSTER in the following group of optical materials classified as Translucent:\nGroup: [Butter paper, Frosted glass, Oily tissue paper, Clear optical window glass]",
    options: ["Butter paper", "Frosted glass", "Oily tissue paper", "Clear optical window glass"],
    correctAnswer: 3,
    difficulty: "HARD",
    damage: 350,
    explanation: "'Clear optical window glass' is TRANSPARENT (not translucent) because it transmits light clearly without diffuse scattering."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "A student holds a circular disc between a point source of light and a white screen. How can the circular disc cast an OVAL or ELLIPTICAL shadow on the screen?",
    options: [
      "By tilting the disc at an angle (oblique orientation) relative to the incident light beam",
      "By painting the disc red",
      "By moving the screen further away",
      "A circular disc can never cast an elliptical shadow"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Projective geometry: the cross-sectional silhouette of an inclined circle projected along rectilinear rays onto a planar screen forms an ellipse."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Match Column I (Optical Concepts) with Column II (Definitions / Examples):\n(a) Luminous body      -> (i) Bouncing of light rays from smooth surface\n(b) Translucent body   -> (ii) Emits its own light (Sun, Electric bulb)\n(c) Rectilinear motion -> (iii) Transmits light partially (Butter paper)\n(d) Reflection         -> (iv) Light travels strictly along straight paths",
    options: [
      "a-(ii), b-(iii), c-(iv), d-(i)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Luminous = emits light; Translucent = partial transmission; Rectilinear = straight lines; Reflection = bouncing."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Read the statements regarding shadows:\nStatement 1: Shadows are always cast on the opposite side of the light source.\nStatement 2: A transparent object casts the darkest shadow.\nStatement 3: Shadows can sometimes mislead us about the true 3D shape of an object (e.g. creating animal hand puppets).\nWhich statements are TRUE?",
    options: ["Statements 1 and 3 only", "Statements 1 and 2 only", "Statements 2 and 3 only", "All Statements 1, 2, and 3"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Statement 2 is false because transparent objects do not cast distinct dark shadows. Statements 1 and 3 are scientifically valid."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What is the physical nature of the two regions of a shadow cast by an extended light source (like a large frosted bulb)?",
    options: [
      "Umbra (the central completely dark region receiving zero light) and Penumbra (the outer partially illuminated grey region receiving partial light)",
      "North pole and South pole",
      "Red zone and Blue zone",
      "Reflection and Refraction"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "An extended source generates a total geometric shadow cone (umbra) flanked by an annular partial shadow cone (penumbra)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "If you stand 2 metres in front of a flat plane mirror, what is the total distance between YOU and your virtual IMAGE in the mirror?",
    options: ["4 metres (2 m in front + 2 m behind the mirror)", "2 metres", "1 metre", "0 metres"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Object distance = Image distance (d_o = d_i = 2 m). Total separation between object and image = 2 + 2 = 4 metres."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Consider four objects:\n1. A piece of red brick\n2. A clean glass sheet\n3. An oiled paper\n4. A lighted fluorescent tube\nWhich object is BOTH Non-luminous and Translucent?",
    options: ["Object 3 (Oiled paper)", "Object 1", "Object 2", "Object 4"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Oiled paper does not emit independent light (non-luminous) and transmits light partially with scattering (translucent)."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Why does a rough unpolished surface (like a chalk wall or unpolished wood) NOT form a clear mirror image, despite reflecting light into our eyes?",
    options: [
      "Microscopic surface irregularities cause Diffuse (Irregular) Reflection, scattering reflected light rays in all random directions rather than parallel reflection",
      "Because chalk absorbs all light completely",
      "Because rough surfaces destroy photons",
      "Because chalk is transparent"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Specular reflection from planar mirrors maintains parallel wavefronts; microscopic rugosity produces diffuse multi-directional scattering."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "An experimenter constructs a pinhole camera with an adjustable sliding box. What happens to the projected image on the screen when the screen is moved FURTHER away from the pinhole?",
    options: [
      "The image becomes LARGER in size but FAINTER in brightness",
      "The image becomes smaller and brighter",
      "The image turns erect",
      "The image disappears completely"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Linear divergence magnifies image height h_i = h_o · (v/u), while photon flux spreads over a greater surface area, reducing luminous illuminance."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "What is the speed of light in vacuum (c), representing the absolute cosmic speed limit in physics?",
    options: ["Approximately 300,000 kilometres per second (3 × 10⁸ m/s)", "330 metres per second", "1,000 km/h", "30,000 km/s"],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "c = 299,792,458 m/s (~3 × 10⁸ m/s), traversing vacuum from Sun to Earth in ~8 minutes and 20 seconds."
  },
  {
    classLevel: 6,
    subject: "Science",
    chapter: "Chapter 8: Light, Shadows and Reflections",
    question: "Why is an image formed in a plane mirror called a 'VIRTUAL Image' in physics?",
    options: [
      "Because reflected light rays only appear to diverge from a point behind the mirror and cannot be captured or focused on a physical screen placed there",
      "Because it exists only in computer software",
      "Because it is fake and painted",
      "Because it disappears when we blink"
    ],
    correctAnswer: 0,
    difficulty: "HARD",
    damage: 350,
    explanation: "Virtual images are formed by the imaginary backwards extrapolation of diverging reflected rays and cannot be projected on a real screen."
  }
];

console.log('Generated Science Ch8:', scienceQuestions.length);
fs.writeFileSync('C:/EduVerse/class 6/cross_subject/science_ch8.json', JSON.stringify(scienceQuestions, null, 2), 'utf8');
