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
  scheduleTime?: string;
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

export interface TimetableEvent {
  id: string;
  title: string;
  trainer: string;
  category: "PILATES & YOGA" | "BOXE" | "COACHING SPORTIF" | "STRONG & STRETCH" | "DÉVELOPPEMENT";
  day: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
  startHour: number;
  duration: number;
  level: string;
  room: string;
  description: string;
}

export const siteConfig = {
  brandName: "ONYX",
  fullName: "ONYX CLUB",
  city: "Cologny, Geneva",
  region: "Sur le lac Léman · Lake Geneva, Switzerland",
  tagline: "SPORT • LIFESTYLE • ZEN | SUR LE LAC LÉMAN",
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
  marquee: "SPORT • LIFESTYLE • ZEN • BOUGEZ • RESPIREZ • ÉVOLUEZ • SUR LE LAC LÉMAN • COLOGNY • ",
  slogans: [
    "PLUS QU'UN CLUB, UN ART DE VIVRE",
    "STRONGER HAPPIER YOU",
    "CORPS • ESPRIT • ÉQUILIBRE • COMMUNAUTÉ • RÉSULTATS",
    "DISCIPLINE AUJOURD'HUI • RÉSULTATS DEMAIN",
    "GOOD PEOPLE • BETTER YOU",
    "SPORT • BIEN-ÊTRE • CONNEXION • DÉPASSEMENT",
    "DISCIPLINE • ÉQUILIBRE • PROGRÈS • LIBERTÉ",
    "BOUGEZ. RESPIREZ. ÉVOLUEZ.",
  ],
};

export const vipEventPass = {
  title: "LA JOURNÉE SPORTIVE & BIEN-ÊTRE",
  subtitle: "Une expérience unique pour booster votre corps, apaiser votre esprit et révéler le meilleur de vous-même.",
  dateText: "DIMANCHE 27 SEPTEMBRE",
  dateFormatted: "27.09.2026",
  hoursText: "8H00 – 16H00",
  locationText: "Chemin du Nant-d'Argent 1, Cologny",
  ticketNumber: "027",
  privilegeTag: "ACCÈS PRIVILÉGIÉ",
  offerTag: "VOTRE 1ÈRE SESSION OFFERTE",
  phone: "078 613 70 21",
  ticketRecto: "/images/onyx/ticket-recto.jpg",
  ticketVerso: "/images/onyx/ticket-verso.jpg",
  posterImage: "/images/onyx/journee-sportive-poster.jpg",
  schedule: [
    { time: "09H30 - 10H30", title: "PILATES", coach: "Camille de Senarclens", desc: "Gainage profond, renforcement postural et centrage." },
    { time: "11H00 - 12H00", title: "YOGA", coach: "Camille de Senarclens", desc: "Vinyasa flow synchronisé au souffle face au lac Léman." },
    { time: "12H00 - 13H00", title: "DÉVELOPPEMENT PERSONNEL", coach: "Eléna Vogel", desc: "Clarté mentale, résilience et alignement des objectifs." },
    { time: "13H00 - 14H00", title: "BOXE", coach: "Alexandre Dubois", desc: "Technique de frappe, jeu de jambes et réflexes cognitifs." },
    { time: "14H00 - 14H45", title: "STRONG NATION / CIRCLE MOBILITY", coach: "Maya Kowalski", desc: "Conditionnement à haute énergie en musique et mobilité articulaire." },
    { time: "16H00 - 17H00", title: "STRETCHING", coach: "Chloé Rochat", desc: "Décompression myofasciale au coucher du soleil sur le lac." },
  ],
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
      { label: "PILATES & YOGA", href: "/activities#pilates-yoga" },
      { label: "DÉVELOPPEMENT PERSONNEL", href: "/activities#dev-perso" },
      { label: "STRONG NATION / MOBILITY", href: "/activities#strong-nation" },
      { label: "BOXE & COMBAT", href: "/activities#boxe" },
      { label: "COACHING SPORTIF", href: "/activities#coaching-sportif" },
      { label: "STRETCHING FACING THE LAKE", href: "/activities#stretching" },
      { label: "RATES & SESSIONS", href: "/activities#pricing" },
    ],
  },
  {
    label: "TEAM",
    href: "/team",
    dropdown: [
      { label: "EXPERT COACHES", href: "/team#coaches" },
      { label: "BIOMECHANICS & WELLNESS", href: "/team#coaches" },
      { label: "PHILOSOPHY", href: "/team#philosophy" },
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
  { label: "VIP PASS 27", href: "/#vip-pass" },
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
    description: "Post-workout myofascial release, infrared recovery, luxury rain showers, and premium grooming vanities.",
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
    id: "pilates-yoga",
    number: "01",
    title: "PILATES & YOGA",
    subtitle: "Outdoor yoga facing the lake · recovery Pilates",
    description: "Fluid athletic vinyasa flows on the lakeside terrace paired with clinical reformer Pilates designed to decompress the spine, realign postural chains, and awaken deep core stabilization.",
    image: "/images/onyx/coach-pilates-yoga.jpg",
    priceGroup: 35,
    priceSingle: 120,
    href: "/activities#pilates-yoga",
    scheduleTime: "09H30 – 12H00",
  },
  {
    id: "dev-perso",
    number: "02",
    title: "DÉVELOPPEMENT PERSONNEL",
    subtitle: "Ateliers · 1h préparation mentale & clarté",
    description: "Executive cognitive conditioning, breathing mechanics, HRV stress modulation, and mental clarity workshops led by accredited performance mentors.",
    image: "/images/onyx/coach-dev-perso.jpg",
    priceSingle: 120,
    href: "/activities#dev-perso",
    scheduleTime: "12H00 – 13H00",
  },
  {
    id: "strong-nation",
    number: "03",
    title: "STRONG NATION / CIRCLE MOBILITY",
    subtitle: "High intensity synchronized conditioning & dynamic mobility",
    description: "Reverse-engineered music-led cardio strength combined with 360-degree joint mobility sequences for athletic resilience and calorie burn.",
    image: "/images/onyx/coach-strong-nation.jpg",
    priceGroup: 35,
    href: "/activities#strong-nation",
    scheduleTime: "14H00 – 14H45",
  },
  {
    id: "boxe",
    number: "04",
    title: "BOXE",
    subtitle: "Boxe Technic · Boxe Fitness · Muay Thaï · Sparring",
    description: "High-density technical boxing and striking fundamentals coached in controlled private rounds. Build explosive rotational power, cognitive reflexes, and relentless cardiovascular endurance.",
    image: "/images/onyx/coach-boxe.jpg",
    priceGroup: 35,
    priceSingle: 120,
    href: "/activities#boxe",
    scheduleTime: "13H00 – 14H00",
  },
  {
    id: "coaching-sportif",
    number: "05",
    title: "COACHING SPORTIF",
    subtitle: "Personal Training · tailor-made sessions & biomechanics",
    description: "One-on-one training protocols engineered exclusively around your biomechanics, injury history, and athletic objectives. Measurable progress backed by sports science.",
    image: "/images/onyx/coach-sportif.jpg",
    priceSingle: 120,
    href: "/activities#coaching-sportif",
    scheduleTime: "Sur Mesure (On Demand)",
  },
  {
    id: "stretching",
    number: "06",
    title: "STRETCHING",
    subtitle: "Guided stretching facing sunset on Lake Geneva",
    description: "Full myofascial decompression, passive traction, and postural flushing practiced facing the mountains and lake as the sun sets over Cologny.",
    image: "/images/onyx/coach-stretching.jpg",
    priceGroup: 35,
    href: "/activities#stretching",
    scheduleTime: "16H00 – 17H00",
  },
];

export const coaches: Coach[] = [
  {
    id: 1,
    name: "CAMILLE DE SENARCLENS",
    role: "PILATES & YOGA MASTER",
    specialty: "Lakeside Vinyasa, Aerial Silk & Reformer Pilates",
    bio: "Guiding members through core alignment and serene breathwork overlooking the calm waters of Lake Geneva.",
    image: "/images/onyx/coach-pilates-yoga.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: 2,
    name: "ELÉNA VOGEL",
    role: "DÉVELOPPEMENT PERSONNEL & MENTAL",
    specialty: "Executive Clarity, Cognitive Performance & Mindset",
    bio: "Advising Geneva entrepreneurs and executives on mental resilience, distress tolerance, and decisive focus.",
    image: "/images/onyx/coach-dev-perso.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: 3,
    name: "MAYA KOWALSKI",
    role: "STRONG NATION & CIRCLE MOBILITY",
    specialty: "High-Energy Athletic Conditioning & Fascial Chains",
    bio: "Directing explosive rhythmic intervals and full-body rotational mobility for maximum athletic longevity.",
    image: "/images/onyx/coach-strong-nation.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: 4,
    name: "ALEXANDRE DUBOIS",
    role: "HEAD COMBAT & BOXING COACH",
    specialty: "Technical Boxing, Muay Thai & Sparring",
    bio: "Former European boxing contender with over 12 years of professional ringside and coaching experience.",
    image: "/images/onyx/coach-boxe.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: 5,
    name: "MARCUS VANCE",
    role: "COACHING SPORTIF & PERFORMANCE",
    specialty: "Periodized Hypertrophy, Powerlifting & Load Cycling",
    bio: "Sports Science Master’s degree from Lausanne. Marcus directs bespoke strength cycles and athletic testing.",
    image: "/images/onyx/coach-sportif.jpg",
    socials: [
      { platform: "Instagram", url: "https://instagram.com" },
      { platform: "LinkedIn", url: "https://linkedin.com" },
    ],
  },
  {
    id: 6,
    name: "CHLOÉ ROCHAT",
    role: "STRETCHING & RECOVERY SPECIALIST",
    specialty: "Myofascial Decompression & Sunset Mobility",
    bio: "Dedicated to post-workout musculoskeletal flushing, restorative traction, and nervous system down-regulation.",
    image: "/images/onyx/coach-stretching.jpg",
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

export const timetableCategories = [
  "ALL EVENTS",
  "PILATES & YOGA",
  "BOXE",
  "COACHING SPORTIF",
  "STRONG & STRETCH",
  "DÉVELOPPEMENT",
] as const;

export const timetableDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;

export const timetableEvents: TimetableEvent[] = [
  {
    id: "evt-1",
    title: "LAKESIDE YOGA & CORE",
    trainer: "CAMILLE DE SENARCLENS",
    category: "PILATES & YOGA",
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
    category: "BOXE",
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
    category: "COACHING SPORTIF",
    day: "MON",
    startHour: 14,
    duration: 2,
    level: "Advanced",
    room: "Studio Interior",
    description: "Periodized load cycles, barbell velocity tracking, and joint stabilization.",
  },
  {
    id: "evt-4",
    title: "STRONG NATION MOBILITY",
    trainer: "MAYA KOWALSKI",
    category: "STRONG & STRETCH",
    day: "TUE",
    startHour: 8,
    duration: 2,
    level: "All Levels",
    room: "Main Rig",
    description: "High-intensity athletic conditioning synchronized to music with circular mobility.",
  },
  {
    id: "evt-5",
    title: "BOXING FITNESS & SPARRING",
    trainer: "ALEXANDRE DUBOIS",
    category: "BOXE",
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
    trainer: "CAMILLE DE SENARCLENS",
    category: "PILATES & YOGA",
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
    trainer: "ELÉNA VOGEL",
    category: "DÉVELOPPEMENT",
    day: "WED",
    startHour: 14,
    duration: 2,
    level: "All Levels",
    room: "Lounge Suite",
    description: "Cognitive endurance, breathwork modulation, and stress resilience.",
  },
  {
    id: "evt-8",
    title: "TECHNICAL BOXING CLINIC",
    trainer: "ALEXANDRE DUBOIS",
    category: "BOXE",
    day: "THU",
    startHour: 10,
    duration: 2,
    level: "Advanced",
    room: "Combat Arena",
    description: "Precision punch combinations, slip counters, and speed drills.",
  },
  {
    id: "evt-9",
    title: "COACHING SPORTIF INTENSIF",
    trainer: "MARCUS VANCE",
    category: "COACHING SPORTIF",
    day: "FRI",
    startHour: 9,
    duration: 2,
    level: "All Levels",
    room: "Studio Interior",
    description: "Targeted full-body functional hypertrophy with eccentric tempos.",
  },
  {
    id: "evt-10",
    title: "SATURDAY LAKE THROWDOWN",
    trainer: "ALEXANDRE DUBOIS",
    category: "BOXE",
    day: "SAT",
    startHour: 9,
    duration: 2,
    level: "All Levels",
    room: "Lakeside Terrace",
    description: "Community weekend throwdown celebrating athletic camaraderie in Cologny.",
  },
  // SUNDAY 27: Official "Journée Sportive & Bien-Être" Schedule matching Pass 27
  {
    id: "evt-sun-1",
    title: "PILATES DU LAC",
    trainer: "CAMILLE DE SENARCLENS",
    category: "PILATES & YOGA",
    day: "SUN",
    startHour: 9,
    duration: 1,
    level: "All Levels",
    room: "Lakeside Terrace",
    description: "09h30 - 10h30 : Gainage profond et réalignement postural face au lac.",
  },
  {
    id: "evt-sun-2",
    title: "YOGA VINYASA",
    trainer: "CAMILLE DE SENARCLENS",
    category: "PILATES & YOGA",
    day: "SUN",
    startHour: 11,
    duration: 1,
    level: "All Levels",
    room: "Lakeside Terrace",
    description: "11h00 - 12h00 : Vinyasa flow dynamique et respiration consciente.",
  },
  {
    id: "evt-sun-3",
    title: "DÉVELOPPEMENT PERSONNEL",
    trainer: "ELÉNA VOGEL",
    category: "DÉVELOPPEMENT",
    day: "SUN",
    startHour: 12,
    duration: 1,
    level: "All Levels",
    room: "Lounge Suite",
    description: "12h00 - 13h00 : Atelier de clarté mentale et préparation des objectifs.",
  },
  {
    id: "evt-sun-4",
    title: "BOXE PRIVILÈGE",
    trainer: "ALEXANDRE DUBOIS",
    category: "BOXE",
    day: "SUN",
    startHour: 13,
    duration: 1,
    level: "All Levels",
    room: "Combat Arena",
    description: "13h00 - 14h00 : Maîtrise de soi, coordination et frappe technique.",
  },
  {
    id: "evt-sun-5",
    title: "STRONG NATION / MOBILITY",
    trainer: "MAYA KOWALSKI",
    category: "STRONG & STRETCH",
    day: "SUN",
    startHour: 14,
    duration: 1,
    level: "All Levels",
    room: "Main Rig",
    description: "14h00 - 14h45 : Entraînement à haute intensité et mobilité Circle.",
  },
  {
    id: "evt-sun-6",
    title: "STRETCHING FACE AU SOLEIL",
    trainer: "CHLOÉ ROCHAT",
    category: "STRONG & STRETCH",
    day: "SUN",
    startHour: 16,
    duration: 1,
    level: "All Levels",
    room: "Lakeside Terrace",
    description: "16h00 - 17h00 : Décompression myofasciale au coucher du soleil sur le lac Léman.",
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
    title: "LA JOURNÉE SPORTIVE & BIEN-ÊTRE DU 27 SEPTEMBRE À COLOGNY",
    excerpt: "Programme officiel, accès VIP Pass 27 et déroulement des ateliers de Pilates, Yoga, Boxe et Stretching face au lac Léman.",
    day: "27",
    month: "SEP",
    image: "/images/onyx/journee-sportive-poster.jpg",
    slug: "journee-sportive-bien-etre-cologny",
  },
  {
    id: 2,
    title: "POURQUOI LE YOGA FACE AU LAC DÉCUPLE LA RÉCUPÉRATION NEURONALE",
    excerpt: "Comment la pratique du vinyasa au bord de l'eau favorise la clarté mentale et régule la variabilité de la fréquence cardiaque.",
    day: "04",
    month: "OCT",
    image: "/images/onyx/Coach_guiding_yoga_class_2K_20261003020658.jpg",
    slug: "yoga-face-au-lac-recuperation",
  },
  {
    id: 3,
    title: "LA NUTRITION CLEAN-LABEL : LE SECRET DE NOS SHAKES PROTÉINÉS",
    excerpt: "30g de protéines pures sans édulcorants de synthèse : découverte de nos formulations créées au bar ONYX.",
    day: "18",
    month: "OCT",
    image: "/images/onyx/Chocolate_protein_shake_in_glass_2K_20261003031440_copy.jpg",
    slug: "nutrition-clean-label-milkshakes-onyx",
  },
];
