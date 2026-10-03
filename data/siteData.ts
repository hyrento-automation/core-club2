export interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

export interface ShakeItem {
  name: string;
  description: string;
  kcal: string;
  protein: string;
  image: string;
  tag: string;
}

export interface ActivityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  priceGroup?: number;
  priceSingle?: number;
  href: string;
}

export interface Coach {
  id: number;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
  socials: { platform: string; url: string }[];
}

export interface Review {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface ConceptItem {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const siteConfig = {
  brandName: "ONYX",
  fullName: "ONYX CLUB",
  city: "Cologny, Geneva",
  region: "Lake Geneva, Switzerland",
  tagline: "SPORT • LIFESTYLE • ZEN | ON LAKE GENEVA",
  heroTitle: "A CLUB APART.",
  heroSubtitle: "A private club. Nothing more. Sport, relaxation and panoramic views on the shore of Lake Geneva.",
  phone: "078 613 70 21",
  intlPhone: "+41 78 613 70 21",
  email: "contact@onyxclub.ch",
  address: "Chemin du Nant-d'Argent 1, Cologny",
  fullAddress: "Chemin du Nant-d'Argent 1, 1223 Cologny, Geneva, Switzerland",
  currency: "CHF",
  prices: {
    group: 35,
    single: 120,
  },
  logo: "/images/onyx/onyx-club-logo.jpg",
  instagramHandle: "@onyxclub.ch",
  workingHours: [
    { days: "MONDAY - FRIDAY", hours: "06:30 - 21:30" },
    { days: "SATURDAY", hours: "07:30 - 19:00" },
    { days: "SUNDAY", hours: "08:00 - 17:00" },
  ],
  socials: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "Twitter", url: "https://twitter.com" },
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "LinkedIn", url: "https://linkedin.com" },
  ],
  marquee: "SPORT • LIFESTYLE • ZEN • MOVE • BREATHE • EVOLVE • ON LAKE GENEVA • COLOGNY • ",
};

export const navItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "THE CONCEPT",
    href: "/concept",
    dropdown: [
      { label: "OUR PILLARS", href: "/concept#pillars" },
      { label: "LAKESIDE SANCTUARY", href: "/concept#sanctuary" },
      { label: "VILLA ARCHITECTURE", href: "/concept#villa" },
    ],
  },
  {
    label: "ACTIVITIES",
    href: "/activities",
    dropdown: [
      { label: "YOGA & PILATES", href: "/activities#yoga" },
      { label: "COMBAT SPORTS & BOXING", href: "/activities#boxing" },
      { label: "PRIVATE TRAINING", href: "/activities#private" },
      { label: "RUNNING & BOOTCAMP", href: "/activities#outdoor" },
      { label: "RATES & SESSIONS", href: "/activities#pricing" },
    ],
  },
  {
    label: "TEAM",
    href: "/team",
    dropdown: [
      { label: "EXPERT COACHES", href: "/team#coaches" },
      { label: "BIOMECHANICS & WELLNESS", href: "/team#coaches" },
      { label: "MEET THE FOUNDERS", href: "/team#philosophy" },
    ],
  },
  {
    label: "MILKSHAKES",
    href: "/milkshakes",
    dropdown: [
      { label: "SIGNATURE SHAKES", href: "/milkshakes#menu" },
      { label: "CLEAN PROTEIN PHILOSOPHY", href: "/milkshakes#clean-label" },
      { label: "NUTRITION LOUNGE", href: "/milkshakes#lounge" },
    ],
  },
  {
    label: "CLIENTELE",
    href: "/clientele",
    dropdown: [
      { label: "FOR ENTREPRENEURS", href: "/clientele#entrepreneurs" },
      { label: "FOR COLOGNY RESIDENTS", href: "/clientele#residents" },
      { label: "CORPORATE WELLNESS", href: "/clientele#corporate" },
    ],
  },
  { label: "REVIEWS", href: "/reviews" },
  { label: "BOOK", href: "/book" },
];

export const conceptPillars: ConceptItem[] = [
  {
    number: "01",
    title: "UNIQUE STYLE",
    description: "An intimate, private athletic haven nestled in Cologny. Black and copper aesthetics, curated equipment, and quiet luxury.",
    image: "/images/onyx/ONYX_Club_training_studio_interior_2K_20261003015925.jpg",
  },
  {
    number: "02",
    title: "COMMUNITY",
    description: "A close-knit circle of Geneva entrepreneurs, executives, athletes, and local residents who value discretion and high performance.",
    image: "/images/onyx/Adults_chatting_on_lakeside_terrace_20261003012226.jpg",
  },
  {
    number: "03",
    title: "PERSONALISED COACHING",
    description: "Bespoke movement screenings, tailored periodization, and continuous biometric optimization with certified Swiss specialists.",
    image: "/images/onyx/Athlete_training_with_coach_20261003012225.jpg",
  },
  {
    number: "04",
    title: "UNIQUE VIEW",
    description: "Panoramic vistas across Lake Geneva. Train with floor-to-ceiling natural light and transition directly to our tranquil lake terrace.",
    image: "/images/onyx/Villa_exterior_architecture_and__2K_20261003015930.jpg",
  },
  {
    number: "05",
    title: "CARE & RECOVERY",
    description: "Post-workout myofascial release, infrared recovery, sauna, luxury rain showers, and premium grooming vanities.",
    image: "/images/onyx/Club_washroom_vanity_interior_view_20261003015950.jpg",
  },
  {
    number: "06",
    title: "NUTRITION & WELL-BEING",
    description: "Clean-label protein formulations, superfood smoothies, cold-pressed elixirs, and bespoke macro guidance crafted daily at the ONYX Bar.",
    image: "/images/onyx/Acrylic_menu_close-up_20261003015950.jpg",
  },
];

export const activitiesList: ActivityItem[] = [
  {
    id: "yoga-pilates",
    number: "01",
    title: "YOGA & PILATES",
    subtitle: "Outdoor yoga facing the lake · recovery Pilates",
    description: "Fluid athletic vinyasa flows on the lakeside terrace paired with clinical reformer Pilates designed to decompress the spine, realign postural chains, and awaken deep core stabilization.",
    image: "/images/onyx/Coach_guiding_yoga_class_2K_20261003020658.jpg",
    priceGroup: 35,
    priceSingle: 120,
    href: "/activities#yoga",
  },
  {
    id: "combat-sports",
    number: "02",
    title: "COMBAT SPORTS",
    subtitle: "Technical Boxing · Boxing Fitness · Muay Thai · Sparring",
    description: "High-density technical boxing and striking fundamentals coached in controlled private rounds. Build explosive rotational power, cognitive reflexes, and relentless cardiovascular endurance.",
    image: "/images/onyx/Coach_guiding_member_boxing_tech_20261003015950.jpg",
    priceGroup: 35,
    priceSingle: 120,
    href: "/activities#boxing",
  },
  {
    id: "private-training",
    number: "03",
    title: "PRIVATE TRAINING",
    subtitle: "Personal Training · tailor-made sessions",
    description: "One-on-one training protocols engineered exclusively around your biomechanics, injury history, and athletic objectives. Measurable progress backed by sports science.",
    image: "/images/onyx/Athlete_training_with_coach_20261003012225_2.jpg",
    priceSingle: 120,
    href: "/activities#private",
  },
  {
    id: "running",
    number: "04",
    title: "RUNNING CLUB",
    subtitle: "Running Club · along the lakeshore",
    description: "Lakeside pacing, aerobic threshold development, and cadence refinement along the scenic Cologny shores of Lake Geneva with structured interval flushing.",
    image: "/images/onyx/Adults_chatting_on_lakeside_terrace_20261003012226.jpg",
    priceGroup: 35,
    href: "/activities#outdoor",
  },
  {
    id: "personal-development",
    number: "05",
    title: "PERSONAL DEVELOPMENT",
    subtitle: "Workshops · 1h mental preparation",
    description: "Executive cognitive conditioning, breathing mechanics, HRV stress modulation, and mental clarity workshops led by accredited sports performance psychologists.",
    image: "/images/onyx/Adults_having_coaching_conversation_20261003012226.jpg",
    priceSingle: 120,
    href: "/activities#private",
  },
  {
    id: "bootcamp",
    number: "06",
    title: "BOOTCAMP",
    subtitle: "Intensive bootcamp sessions",
    description: "Outdoor and indoor high-intensity functional circuits utilizing kettlebells, battle ropes, plyometrics, and synchronized team challenges with maximum energy.",
    image: "/images/onyx/Group_fitness_class_exercising_20261003015950.jpg",
    priceGroup: 35,
    href: "/activities#outdoor",
  },
];

export const coaches: Coach[] = [
  {
    id: 1,
    name: "ALEXANDRE DUBOIS",
    role: "HEAD COMBAT & BOXING COACH",
    specialty: "Technical Boxing, Muay Thai & Athletic Conditioning",
    bio: "Former European boxing contender with over 12 years of professional ringside and coaching experience. Specializes in precision footwork, rotational kinetic chains, and high-intensity fight fitness.",
    image: "/images/onyx/Coach_guiding_member_boxing_tech_20261003015950.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: 2,
    name: "SOPHIE LAURENT",
    role: "YOGA & RECOVERY PILATES DIRECTOR",
    specialty: "Lakeside Vinyasa, Reformer Pilates & Postural Alignment",
    bio: "Certified Pilates Master with dual credentials in Geneva and Zurich. Dedicated to restoring functional movement integrity, pelvic floor stability, and breath-synchronized mobility facing Lake Geneva.",
    image: "/images/onyx/Coach_guiding_yoga_class_2K_20261003020658.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: 3,
    name: "MARCUS VANCE",
    role: "HEAD OF PRIVATE TRAINING & STRENGTH",
    specialty: "Olympic Periodization, Hypertrophy & Biomechanics",
    bio: "Sports Science Master’s degree from Lausanne. Marcus directs our tailor-made private training programs, blending data-driven strength cycles with preventative joint resilience.",
    image: "/images/onyx/Athlete_training_with_coach_20261003012225.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: 4,
    name: "CHLOÉ ROCHAT",
    role: "RECOVERY & REHABILITATION SPECIALIST",
    specialty: "Guided Stretching, Myofascial Release & Mobility",
    bio: "Specializing in athletic decompression and sports physiotherapy. Chloé leads members through restorative post-workout flushing and active recovery protocols.",
    image: "/images/onyx/Guided_stretching_session_20261003015951.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: 5,
    name: "DAVID MERCIER",
    role: "MENTAL PERFORMANCE & COACHING",
    specialty: "Executive Clarity, Breathwork & Performance Mindset",
    bio: "Advising Geneva executives, entrepreneurs, and competitive athletes on cognitive endurance, stress resilience, and structured mental clarity.",
    image: "/images/onyx/Adults_having_coaching_conversation_20261003012226.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
];

export const milkshakes: ShakeItem[] = [
  {
    name: "ONYX PROTEIN",
    description: "Black sesame · raw organic cacao · banana · artisanal oat milk",
    kcal: "400",
    protein: "30g",
    image: "/images/onyx/Chocolate_protein_shake_in_glass_2K_20261003031440_copy.jpg",
    tag: "SIGNATURE SHAKE",
  },
  {
    name: "MOCHA PROTEIN",
    description: "Double espresso extraction · raw cacao · roasted almond butter",
    kcal: "410",
    protein: "30g",
    image: "/images/onyx/Protein_shake_in_glass_2K_20261003031450_copy.jpg",
    tag: "ENERGY & FOCUS",
  },
  {
    name: "MATCHA PROTEIN",
    description: "Ceremonial Japanese matcha · Bourbon vanilla · banana · oat",
    kcal: "390",
    protein: "30g",
    image: "/images/onyx/Matcha_protein_shake_in_glass_2K_20261003031500_copy.jpg",
    tag: "ANTIOXIDANT BOOST",
  },
  {
    name: "BLUE LÉMAN PROTEIN",
    description: "Blue spirulina · coconut water · ripe pineapple · clean whey isolate",
    kcal: "395",
    protein: "30g",
    image: "/images/onyx/Blue_lagoon_protein_shake_2K_20261003031509_copy.jpg",
    tag: "LAKE GENEVA RECOVERY",
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    quote: "A unique place with a rare energy. Training in Cologny overlooking the lake gives me an unmatched sense of focus and calm.",
    author: "LAURENT DE SENARCLENS",
    role: "MEMBER · COLOGNY",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    quote: "The personalized coaching and private boxing sessions truly change my week. The coaching standards in Geneva have a new benchmark.",
    author: "ALEXANDRA VON ROTH",
    role: "ENTREPRENEUR · GENEVA",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    quote: "Yoga facing the lake at sunrise: unforgettable. The transition to the nutrition bar with the Blue Léman shake is perfection.",
    author: "JEAN-PHILIPPE GILLIÉRON",
    role: "MEMBER · GENEVA",
    avatar: "/images/avatar-3.jpg",
  },
  {
    id: 4,
    quote: "An uncompromising athletic sanctum. The privacy, cleanliness, bespoke equipment, and community make ONYX in a league of its own.",
    author: "CAMILLE FAVRE",
    role: "EXECUTIVE · COLOGNY",
    avatar: "/images/avatar-4.jpg",
  },
];

export const clienteleProfiles = [
  {
    number: "01",
    title: "EXECUTIVES & ENTREPRENEURS",
    description: "Busy leaders requiring hyper-efficient 1-hour sessions, mental clarity, and total privacy on their schedule.",
  },
  {
    number: "02",
    title: "COLOGNY RESIDENTS",
    description: "Neighbors seeking a distinguished, welcoming sanctuary just minutes from home, facing the serene lake.",
  },
  {
    number: "03",
    title: "COMPANIES",
    description: "Corporate wellness packages, executive group sessions, and team revitalization retreats overlooking Lake Geneva.",
  },
  {
    number: "04",
    title: "FAMILIES",
    description: "Coordinated private training, teen athletic development, and shared weekend wellness on the lakeshore.",
  },
  {
    number: "05",
    title: "CROSS-BORDER WORKERS",
    description: "Conveniently located near Geneva transport corridors for pre-work or evening decompression sessions.",
  },
  {
    number: "06",
    title: "ATHLETES",
    description: "Competitive preparation, off-season conditioning, Olympic lifts, and targeted VO2 threshold maximization.",
  },
  {
    number: "07",
    title: "ACTIVE SENIORS",
    description: "Postural correction, functional mobility, joint longevity, and gentle restorative Pilates in a supportive setting.",
  },
];

export const bmiStatusTable = [
  { range: "Below 18.5", status: "Underweight", min: 0, max: 18.49 },
  { range: "18.5 - 24.9", status: "Healthy Weight", min: 18.5, max: 24.99 },
  { range: "25.0 - 29.9", status: "Overweight", min: 25.0, max: 29.99 },
  { range: "30.0 and above", status: "Obese", min: 30.0, max: 100 },
];

export interface TimetableEvent {
  id: string;
  title: string;
  trainer: string;
  category: "CARDIO" | "CROSSFIT" | "GYM" | "POWERLIFTING";
  day: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
  startHour: number;
  duration: number;
  level: string;
  room: string;
  description: string;
}

export const timetableCategories = [
  "ALL EVENTS",
  "CARDIO",
  "CROSSFIT",
  "GYM",
  "POWERLIFTING",
] as const;

export const timetableDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;

export const timetableEvents: TimetableEvent[] = [
  {
    id: "evt-1",
    title: "LAKESIDE YOGA & CORE",
    trainer: "SOPHIE LAURENT",
    category: "CARDIO",
    day: "MON",
    startHour: 7,
    duration: 2,
    level: "All Levels",
    room: "Lakeside Terrace",
    description: "Breath-synchronized vinyasa facing the tranquil waters of Lake Geneva.",
  },
  {
    id: "evt-2",
    title: "TECHNICAL BOXING ROUNDS",
    trainer: "ALEXANDRE DUBOIS",
    category: "CROSSFIT",
    day: "MON",
    startHour: 10,
    duration: 1,
    level: "Intermediate",
    room: "Combat Arena",
    description: "Rotational power, kinetic footwork, and technical focus mitt drills.",
  },
  {
    id: "evt-3",
    title: "SWISS PRIVATE STRENGTH",
    trainer: "MARCUS VANCE",
    category: "POWERLIFTING",
    day: "MON",
    startHour: 14,
    duration: 2,
    level: "Advanced",
    room: "Studio Interior",
    description: "Periodized load cycles, barbell velocity tracking, and joint stabilization.",
  },
  {
    id: "evt-4",
    title: "SHORELINE RUNNING CLUB",
    trainer: "MARCUS VANCE",
    category: "CARDIO",
    day: "TUE",
    startHour: 8,
    duration: 2,
    level: "All Levels",
    room: "Cologny Shoreline",
    description: "Aerobic threshold pacing and cadence refinement along the Geneva banks.",
  },
  {
    id: "evt-5",
    title: "BOXING FITNESS & SPARRING",
    trainer: "ALEXANDRE DUBOIS",
    category: "CROSSFIT",
    day: "TUE",
    startHour: 16,
    duration: 2,
    level: "Intermediate",
    room: "Combat Arena",
    description: "Controlled partner drills testing stamina, defensive reflexes, and rhythm.",
  },
  {
    id: "evt-6",
    title: "RECOVERY REFORMER PILATES",
    trainer: "SOPHIE LAURENT",
    category: "GYM",
    day: "WED",
    startHour: 8,
    duration: 2,
    level: "All Levels",
    room: "Pilates Studio",
    description: "Decompress spinal discs and restore postural muscle chains.",
  },
  {
    id: "evt-7",
    title: "EXECUTIVE MENTAL LAB",
    trainer: "DAVID MERCIER",
    category: "GYM",
    day: "WED",
    startHour: 14,
    duration: 2,
    level: "All Levels",
    room: "Lounge Suite",
    description: "Cognitive endurance, breathwork modulation, and stress resilience.",
  },
  {
    id: "evt-8",
    title: "MUAY THAI CLINIC",
    trainer: "ALEXANDRE DUBOIS",
    category: "CROSSFIT",
    day: "THU",
    startHour: 10,
    duration: 2,
    level: "Advanced",
    room: "Combat Arena",
    description: "Low kick conditioning, clinch fundamentals, and hip drive acceleration.",
  },
  {
    id: "evt-9",
    title: "INTENSIVE BOOTCAMP",
    trainer: "MARCUS VANCE",
    category: "CARDIO",
    day: "FRI",
    startHour: 9,
    duration: 2,
    level: "All Levels",
    room: "Villa Grounds",
    description: "Dynamic outdoor functional circuit utilizing kettlebells and battle ropes.",
  },
  {
    id: "evt-10",
    title: "SATURDAY LAKE THROWDOWN",
    trainer: "ALEXANDRE DUBOIS",
    category: "CROSSFIT",
    day: "SAT",
    startHour: 9,
    duration: 2,
    level: "All Levels",
    room: "Lakeside Terrace",
    description: "Community weekend throwdown celebrating athletic camaraderie in Cologny.",
  },
  {
    id: "evt-11",
    title: "GUIDED STRETCH & DETOX",
    trainer: "CHLOÉ ROCHAT",
    category: "GYM",
    day: "SUN",
    startHour: 10,
    duration: 2,
    level: "All Levels",
    room: "Lakeside Terrace",
    description: "Myofascial release followed by signature Blue Léman protein shakes.",
  },
];

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  day: string;
  month: string;
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "WHY CLEAN-LABEL PROTEIN MATTERS FOR RECOVERY ON LAKE GENEVA",
    excerpt: "Discover the metabolic differences between industrial whey blends and whole-food formulations crafted at the ONYX Bar.",
    day: "04",
    month: "OCT",
    image: "/images/onyx/Chocolate_protein_shake_in_glass_2K_20261003031440_copy.jpg",
    slug: "clean-label-protein-recovery",
  },
  {
    id: 2,
    title: "THE POWER OF OUTDOOR VINYASA FACING THE ALPINE WATERS",
    excerpt: "How practicing breath-synchronized yoga in high negative-ion lake air accelerates neural decompression and cardiovascular renewal.",
    day: "18",
    month: "OCT",
    image: "/images/onyx/Coach_guiding_yoga_class_2K_20261003020658.jpg",
    slug: "outdoor-vinyasa-lake-geneva",
  },
  {
    id: 3,
    title: "TECHNICAL BOXING AS COGNITIVE CONDITIONING FOR EXECUTIVES",
    excerpt: "Why high-level entrepreneurs in Geneva choose boxing to hone decisive reflexes, distress tolerance, and cognitive focus.",
    day: "02",
    month: "NOV",
    image: "/images/onyx/Coach_guiding_member_boxing_tech_20261003015950.jpg",
    slug: "technical-boxing-executive-conditioning",
  },
];

