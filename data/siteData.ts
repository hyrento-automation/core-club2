export interface NavItem {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

export interface HeroSlide {
  id: number;
  image: string;
  tagline: string;
}

export interface PortfolioTile {
  id: number;
  category: string;
  title: string;
  image: string;
  isWide: boolean;
  href: string;
}

export interface Coach {
  id: number;
  name: string;
  role: string;
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

export interface ServiceBanner {
  id: number;
  title: string;
  description: string;
  image: string;
  iconName: 'dumbbell' | 'flame' | 'trophy';
  isLightVariant?: boolean;
}

export interface TimetableEvent {
  id: string;
  title: string;
  trainer: string;
  category: 'CARDIO' | 'CROSSFIT' | 'GYM' | 'POWERLIFTING';
  day: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN';
  startHour: number; // 6 to 21
  duration: number; // in hours, e.g. 1 or 2
  level: string;
  room: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  day: string;
  month: string;
  image: string;
  slug: string;
}

export interface ProgramTile {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const siteConfig = {
  brandName: "ONYX",
  fullName: "ONYX CLUB",
  tagline: "HIGH PERFORMANCE ATHLETIC SANCTUARY",
  monogram: "OX",
  phone: "+1 (800) 849-2910",
  email: "info@onyxclub-fitness.com",
  address: "742 Evergreen Terrace, Brooklyn, NY 11201",
  secondaryAddress: "128 Mercer St, Soho, NY 10012",
  instagramHandle: "@onyxclub_fit",
  workingHours: [
    { days: "MONDAY - FRIDAY", hours: "06:00 - 22:00" },
    { days: "SATURDAY", hours: "07:00 - 20:00" },
    { days: "SUNDAY", hours: "08:00 - 18:00" },
  ],
  socials: [
    { platform: "Instagram", url: "https://instagram.com" },
    { platform: "Twitter", url: "https://twitter.com" },
    { platform: "Facebook", url: "https://facebook.com" },
    { platform: "YouTube", url: "https://youtube.com" },
  ],
};

export const navItems: NavItem[] = [
  {
    label: "HOME",
    href: "#hero",
    dropdown: [
      { label: "HERO PRESENTATION", href: "#hero" },
      { label: "PERFORMANCE GRID", href: "#portfolio" },
      { label: "TRAINING CREW", href: "#team" },
    ],
  },
  {
    label: "PAGES",
    href: "#portfolio",
    dropdown: [
      { label: "ABOUT ONYX", href: "#portfolio" },
      { label: "SERVICES OVERVIEW", href: "#services" },
      { label: "BMI METRICS", href: "#bmi" },
      { label: "TESTIMONIALS", href: "#reviews" },
    ],
  },
  {
    label: "PORTFOLIO",
    href: "#portfolio",
    dropdown: [
      { label: "FUNCTIONAL GALLERY", href: "#portfolio" },
      { label: "PROGRAM TILES", href: "#programs" },
    ],
  },
  {
    label: "BLOG",
    href: "#blog",
    dropdown: [
      { label: "LATEST STORIES", href: "#blog" },
      { label: "NUTRITION GUIDE", href: "#blog" },
    ],
  },
  {
    label: "SHOP",
    href: "#programs",
    dropdown: [
      { label: "MEMBERSHIP PLANS", href: "#programs" },
      { label: "APPAREL & GEAR", href: "#programs" },
    ],
  },
  {
    label: "EVENTS",
    href: "#timetable",
    dropdown: [
      { label: "WEEKLY TIMETABLE", href: "#timetable" },
      { label: "WORKOUT SESSIONS", href: "#timetable" },
    ],
  },
  {
    label: "INFO",
    href: "#contact",
  },
];

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    tagline: "ELEVATE EVERY REP",
  },
  {
    id: 2,
    image: "/images/hero-2.jpg",
    tagline: "UNLEASH HUMAN POTENTIAL",
  },
];

export const portfolioTiles: PortfolioTile[] = [
  {
    id: 1,
    category: "CARDIO",
    title: "TRACK SPRINT",
    image: "/images/portfolio-1.jpg",
    isWide: false,
    href: "#portfolio",
  },
  {
    id: 2,
    category: "STRENGTH",
    title: "IRON PROTOCOL",
    image: "/images/portfolio-2.jpg",
    isWide: false,
    href: "#portfolio",
  },
  {
    id: 3,
    category: "CROSS-TRAIN",
    title: "FUNCTIONAL ARENA",
    image: "/images/portfolio-3.jpg",
    isWide: true,
    href: "#portfolio",
  },
  {
    id: 4,
    category: "ENDURANCE",
    title: "POWER BATTLE ROPES",
    image: "/images/portfolio-4.jpg",
    isWide: true,
    href: "#portfolio",
  },
  {
    id: 5,
    category: "PLYOMETRICS",
    title: "EXPLOSIVE JUMP",
    image: "/images/portfolio-5.jpg",
    isWide: false,
    href: "#portfolio",
  },
  {
    id: 6,
    category: "OLYMPIC",
    title: "CLEAN & JERK",
    image: "/images/portfolio-6.jpg",
    isWide: false,
    href: "#portfolio",
  },
];

export const coaches: Coach[] = [
  {
    id: 1,
    name: "MARCUS VANCE",
    role: "HEAD CROSSFIT COACH",
    image: "/images/coach-1.jpg",
    socials: [
      { platform: "Instagram", url: "#" },
      { platform: "Twitter", url: "#" },
      { platform: "LinkedIn", url: "#" },
    ],
  },
  {
    id: 2,
    name: "ELENA ROSTOVA",
    role: "STRENGTH & CONDITIONING",
    image: "/images/coach-2.jpg",
    socials: [
      { platform: "Instagram", url: "#" },
      { platform: "Twitter", url: "#" },
      { platform: "LinkedIn", url: "#" },
    ],
  },
  {
    id: 3,
    name: "DARIUS STERLING",
    role: "MOBILITY & FUNCTIONAL MASTER",
    image: "/images/coach-3.jpg",
    socials: [
      { platform: "Instagram", url: "#" },
      { platform: "Twitter", url: "#" },
      { platform: "LinkedIn", url: "#" },
    ],
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    quote: "ONYX transformed my relationship with athletic performance. The coaches obsess over movement mechanics, biomechanics, and sustainable power output. I hit personal records I never imagined possible.",
    author: "LEONA MITCHELL",
    role: "COMPETITIVE ATHLETE",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: 2,
    quote: "The facility design and equipment are unmatched. It feels like training in an elite Olympic compound with zero distractions. The atmosphere demands focus and delivers results.",
    author: "CHRISTOPHER REED",
    role: "ENDURANCE RUNNER",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: 3,
    quote: "From personalized mobility screenings to progressive overload programming, every single detail at ONYX has elevated my strength, joint resilience, and daily vitality.",
    author: "TRENT MONTGOMERY",
    role: "POWERLIFTING ENTHUSIAST",
    avatar: "/images/avatar-3.jpg",
  },
  {
    id: 4,
    quote: "The structured functional timetable and expert community gave me the competitive edge I needed. Training here is the single best hour of my day.",
    author: "NADIA KOWALSKI",
    role: "CROSSFIT COMPETITOR",
    avatar: "/images/avatar-4.jpg",
  },
];

export const serviceBanners: ServiceBanner[] = [
  {
    id: 1,
    title: "PROGRESSION",
    description: "Systematic hypertrophy and periodized load cycling engineered for continuous strength adaptation and zero plateaus.",
    image: "/images/service-1.jpg",
    iconName: "dumbbell",
    isLightVariant: false,
  },
  {
    id: 2,
    title: "WORKOUT",
    description: "High-density metabolic conditioning combining plyometric propulsion, tempo kettlebells, and functional intervals.",
    image: "/images/service-2.jpg",
    iconName: "flame",
    isLightVariant: true,
  },
  {
    id: 3,
    title: "PERFORMANCE",
    description: "Elite sport-specific biomechanics, sprint acceleration mechanics, and cardiovascular threshold enhancement.",
    image: "/images/service-3.jpg",
    iconName: "trophy",
    isLightVariant: false,
  },
];

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
    title: "OLYMPIC LIFTING",
    trainer: "MARCUS VANCE",
    category: "POWERLIFTING",
    day: "MON",
    startHour: 7,
    duration: 2,
    level: "Advanced",
    room: "Platform Arena",
    description: "Focus on clean-and-jerk mechanics, snatch bar path, and hip drive acceleration.",
  },
  {
    id: "evt-2",
    title: "FUNCTIONAL WOD",
    trainer: "ELENA ROSTOVA",
    category: "CROSSFIT",
    day: "MON",
    startHour: 10,
    duration: 1,
    level: "All Levels",
    room: "Main Rig",
    description: "High-intensity functional circuit with kettlebells, box jumps, and burpees.",
  },
  {
    id: "evt-3",
    title: "POWER INTERVALS",
    trainer: "DARIUS STERLING",
    category: "CARDIO",
    day: "MON",
    startHour: 14,
    duration: 2,
    level: "Intermediate",
    room: "Sprint Track",
    description: "Curved treadmill pacing and assault bike threshold intervals.",
  },
  {
    id: "evt-4",
    title: "HYPERTROPHY LAB",
    trainer: "MARCUS VANCE",
    category: "GYM",
    day: "MON",
    startHour: 18,
    duration: 2,
    level: "All Levels",
    room: "Iron Floor",
    description: "Upper body push-pull targeted hypertrophy with strict eccentric control.",
  },
  {
    id: "evt-5",
    title: "ENDURANCE RUN",
    trainer: "DARIUS STERLING",
    category: "CARDIO",
    day: "TUE",
    startHour: 8,
    duration: 2,
    level: "Intermediate",
    room: "Sprint Track",
    description: "Aerobic threshold training and lactate clearance intervals.",
  },
  {
    id: "evt-6",
    title: "DEADLIFT CLINIC",
    trainer: "ELENA ROSTOVA",
    category: "POWERLIFTING",
    day: "TUE",
    startHour: 12,
    duration: 2,
    level: "Advanced",
    room: "Platform Arena",
    description: "Conventional and sumo deadlift setup, wedge mechanics, and lockout power.",
  },
  {
    id: "evt-7",
    title: "CROSSFIT TEAM",
    trainer: "MARCUS VANCE",
    category: "CROSSFIT",
    day: "TUE",
    startHour: 16,
    duration: 2,
    level: "Intermediate",
    room: "Main Rig",
    description: "Synchronized partner workouts testing stamina and barbell cycling.",
  },
  {
    id: "evt-8",
    title: "CHEST & DELTS",
    trainer: "MARCUS VANCE",
    category: "GYM",
    day: "WED",
    startHour: 7,
    duration: 2,
    level: "All Levels",
    room: "Iron Floor",
    description: "High volume pressing angles, cable flies, and rear delt activation.",
  },
  {
    id: "evt-9",
    title: "METCON BURN",
    trainer: "ELENA ROSTOVA",
    category: "CARDIO",
    day: "WED",
    startHour: 11,
    duration: 1,
    level: "Intermediate",
    room: "Studio B",
    description: "Short rest intervals, rowing sprints, and kettlebell clean complexes.",
  },
  {
    id: "evt-10",
    title: "BARBELL SQUAT",
    trainer: "ELENA ROSTOVA",
    category: "POWERLIFTING",
    day: "WED",
    startHour: 15,
    duration: 2,
    level: "All Levels",
    room: "Platform Arena",
    description: "Squat depth mastery, ankle mobility, and paused explosive reps.",
  },
  {
    id: "evt-11",
    title: "HERO WOD",
    trainer: "MARCUS VANCE",
    category: "CROSSFIT",
    day: "WED",
    startHour: 18,
    duration: 2,
    level: "Advanced",
    room: "Main Rig",
    description: "Tribute workout testing mental fortitude and maximum aerobic work capacity.",
  },
  {
    id: "evt-12",
    title: "SPEED AGILITY",
    trainer: "DARIUS STERLING",
    category: "CARDIO",
    day: "THU",
    startHour: 8,
    duration: 2,
    level: "All Levels",
    room: "Sprint Track",
    description: "Footwork ladder, cone deceleration drills, and reactive multidirectional sprints.",
  },
  {
    id: "evt-13",
    title: "GLUTES & POSTERIOR",
    trainer: "ELENA ROSTOVA",
    category: "GYM",
    day: "THU",
    startHour: 13,
    duration: 2,
    level: "All Levels",
    room: "Iron Floor",
    description: "Hip thrusts, Romanian deadlifts, and cable abduction for hip stability.",
  },
  {
    id: "evt-14",
    title: "POWER BENCH",
    trainer: "MARCUS VANCE",
    category: "POWERLIFTING",
    day: "THU",
    startHour: 17,
    duration: 2,
    level: "Advanced",
    room: "Platform Arena",
    description: "Arch positioning, leg drive integration, and paused heavy singles.",
  },
  {
    id: "evt-15",
    title: "FRIDAY FRONTAL",
    trainer: "MARCUS VANCE",
    category: "CROSSFIT",
    day: "FRI",
    startHour: 9,
    duration: 2,
    level: "Intermediate",
    room: "Main Rig",
    description: "Thrusters, pull-ups, and double-unders in classic CrossFit sprint format.",
  },
  {
    id: "evt-16",
    title: "STRONGMAN CIRCUIT",
    trainer: "ELENA ROSTOVA",
    category: "POWERLIFTING",
    day: "FRI",
    startHour: 14,
    duration: 2,
    level: "All Levels",
    room: "Turf Area",
    description: "Yoke carry, farmers walk, atlas stone simulation, and sled drags.",
  },
  {
    id: "evt-17",
    title: "ARMS & ABS LAB",
    trainer: "DARIUS STERLING",
    category: "GYM",
    day: "FRI",
    startHour: 18,
    duration: 1,
    level: "All Levels",
    room: "Iron Floor",
    description: "High pump supersets and rotational core stabilization drills.",
  },
  {
    id: "evt-18",
    title: "SATURDAY THROWDOWN",
    trainer: "MARCUS VANCE",
    category: "CROSSFIT",
    day: "SAT",
    startHour: 9,
    duration: 2,
    level: "All Levels",
    room: "Main Rig",
    description: "Our community weekend throwdown. Teams of two battle through multi-stage gauntlets.",
  },
  {
    id: "evt-19",
    title: "MAX POWER TEST",
    trainer: "ELENA ROSTOVA",
    category: "POWERLIFTING",
    day: "SAT",
    startHour: 13,
    duration: 2,
    level: "Advanced",
    room: "Platform Arena",
    description: "Testing 3-rep maximums on foundational compound lifts under coach guidance.",
  },
  {
    id: "evt-20",
    title: "RECOVERY & ROPE",
    trainer: "DARIUS STERLING",
    category: "CARDIO",
    day: "SUN",
    startHour: 10,
    duration: 2,
    level: "All Levels",
    room: "Studio B",
    description: "Low-impact aerobic flushing, speed rope rhythm, and myofascial mobility.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "MAXIMIZING HYPERTROPHY THROUGH MECHANICAL TENSION",
    excerpt: "Discover the precise science behind motor unit recruitment and why slow eccentric tempos spark unprecedented muscle growth.",
    day: "28",
    month: "OCT",
    image: "/images/blog-1.jpg",
    slug: "mechanical-tension-hypertrophy",
  },
  {
    id: 2,
    title: "THE ULTIMATE GUIDE TO FUNCTIONAL MOBILITY AND JOINT RESILIENCE",
    excerpt: "Eliminate kinetic restrictions and fortify your connective tissues before undertaking heavy posterior chain lifts.",
    day: "14",
    month: "NOV",
    image: "/images/blog-2.jpg",
    slug: "functional-mobility-guide",
  },
  {
    id: 3,
    title: "NUTRITIONAL TIMING STRATEGIES FOR PEAK INTRA-WORKOUT OUTPUT",
    excerpt: "Optimize glycogen replenishment, electrolyte balancing, and branched amino ratios for grueling double training sessions.",
    day: "03",
    month: "DEC",
    image: "/images/blog-3.jpg",
    slug: "intra-workout-nutrition-strategies",
  },
];

export const programTiles: ProgramTile[] = [
  {
    id: 1,
    title: "CARDIO PROGRAM",
    description: "Push cardiovascular threshold, VO2 max metrics, and athletic stamina with structured sprint intervals.",
    image: "/images/program-1.jpg",
    slug: "cardio-program",
  },
  {
    id: 2,
    title: "PURE STRENGTH",
    description: "Periodized barbell fundamentals engineered to build uncompromising raw strength and bone density.",
    image: "/images/program-2.jpg",
    slug: "pure-strength",
  },
  {
    id: 3,
    title: "TRUE CHALLENGE",
    description: "An intensive 8-week cross-training gauntlet testing mental grit, lactate buffering, and agility.",
    image: "/images/program-3.jpg",
    slug: "true-challenge",
  },
  {
    id: 4,
    title: "POWER YOGA",
    description: "Dynamic athletic vinyasa flows targeting deep core balance, thoracic rotation, and active recovery.",
    image: "/images/program-4.jpg",
    slug: "power-yoga",
  },
];

export const bmiStatusTable = [
  { range: "Below 18.5", status: "Underweight", min: 0, max: 18.49 },
  { range: "18.5 - 24.9", status: "Healthy Weight", min: 18.5, max: 24.99 },
  { range: "25.0 - 29.9", status: "Overweight", min: 25.0, max: 29.99 },
  { range: "30.0 and above", status: "Obese", min: 30.0, max: 100 },
];
