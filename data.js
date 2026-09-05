const portfolioData = {
  profile: {
    initials: "RC",
    name: "Rishi Chauhan",
    title: "Unity Game Developer"
  },
  headerLinks: [
    { label: "GitHub",  href: "https://github.com/RishiChauhan09",                      external: true  },
    { label: "LinkedIn",href: "https://www.linkedin.com/in/rishi-chauhan-a5732635b",     external: true  },
    { label: "Resume",  href: "OtherFiles/RishiResume.pdf", download: "Rishi_Chauhan_Resume.pdf" }
  ],
  navigation: [
    { id: "about",    label: "About"      },
    { id: "featured", label: "Projects"   },
    { id: "skills",   label: "Skills"     },
    { id: "experience",label: "Experience"},
    { id: "contact",  label: "Contact"    }
  ],
  featuredProject: {
    badge: "Featured Project",
    id: 1,
    name: "Arrow Flux",
    tagline: "A grid-based mobile puzzle game — published on Google Play.",
    type: "Mobile Puzzle Game",
    platform: "Android",
    genre: "Puzzle · Hyper Casual",
    status: "Published",
    tech: ["Unity", "C#", "Firebase", "AdMob", "Unity IAP"],
    whatIBuilt: [
      "Grid-based gameplay & directional arrow system",
      "Custom Unity Editor tools — 300+ levels generated with one click",
      "Level progression, difficulty curve & power-up systems",
      "Firebase analytics & remote config integration",
      "AdMob rewarded/interstitial ad pipeline",
      "Unity IAP in-app purchase flow",
      "Mobile performance optimization & memory management",
      "UI animations, transitions & screen feedback"
    ],
    challenge: "Keeping level creation and gameplay systems scalable as the game grew past 300 levels without slowing down the team.",
    solution: "Built custom Unity Editor tooling that automated level generation and validation, reducing level creation time to a single click while enforcing design constraints automatically.",
    videoUrl: "https://www.youtube.com/embed/__HjNVukScE",
    playUrl: "https://play.google.com/store/apps/details?id=com.gappedgames.arrowescape"
  },
  about: {
    badge: "About Me",
    heading: {
      line1: "Rishi Chauhan",
      line2: "Unity Game Developer"
    },
    tagline: "C# · Unity · 2D / 3D · Gameplay Systems · Optimization",
    image: "OtherFiles/MyImage.png",
    paragraphs: [
      "I'm a Unity Game Developer specializing in C# and gameplay programming, with hands-on experience developing and polishing multiple games from concept to completion. One of my games, Arrow Flux, is published on the Google Play Store.",
      "I focus on building clean, scalable gameplay systems, optimizing performance, and creating polished player experiences. I'm passionate about game development and continuously improving my skills through new projects and challenges."
    ],
    resumeButton: "Download Resume",
    resumePath: "OtherFiles/RishiResume.pdf",
    githubButton: "View GitHub",
    githubUrl: "https://github.com/RishiChauhan09",
    viewProjectsCta: "View Projects"
  },
  skills: {
    badge: "Expertise",
    heading: {
      line1: "Skills &",
      line2: "Capabilities"
    },
    groups: [
      {
        label: "Programming",
        items: ["Unity", "C#", "Java", "C++", "C", "Python"]
      },
      {
        label: "Game Development",
        items: ["2D & 3D Development", "Gameplay Systems", "UI Toolkit", "Performance Optimization", "Profiling", "Frame Debugger"]
      },
      {
        label: "Architecture",
        items: ["Object Oriented Programming", "SOLID Principles", "Design Patterns (FSMs, Observer, Builder)", "Unity Editor Tools"]
      },
      {
        label: "Tools & Services",
        items: ["Firebase", "AdMob", "Unity IAP", "Google Play Games Services"]
      }
    ]
  },
  projects: {
    badge: "More Projects",
    heading: {
      line1: "More",
      line2: "Projects"
    },
    items: [
      {
        id: 1,
        name: "Arrow Flux",
        type: "Mobile Puzzle Game",
        platform: "Android (Google Play)",
        tech: ["Unity", "C#", "Firebase", "AdMob", "Unity IAP"],
        systems: [
          "Grid-based gameplay & arrow system",
          "Custom Unity Editor tools (300+ levels, one click)",
          "Level progression & power-up systems",
          "Modular, scalable architecture",
          "Mobile performance optimization",
          "UI animations & interactions"
        ],
        description: [
          "<a href='https://play.google.com/store/apps/details?id=com.gappedgames.arrowescape' target='_blank'>Arrow Flux</a> is a casual puzzle game where players strategically clear directional arrows from a grid while solving progressively challenging levels.",
          "I developed the project in Unity using C#, handling gameplay programming, system architecture, level systems, UI, and overall game polish.",
          "Key contributions include implementing the core grid and arrow systems, level progression, power-ups, animations, UI interactions, and custom Unity Editor tools for creating and managing levels efficiently. (Around 300+ Levels with just one click)",
          "One challenge was keeping the level and gameplay systems scalable as the number of levels increased. I addressed this by building modular systems and editor tooling that simplified level creation and reduced repetitive development work.",
          "This project strengthened my skills in Unity gameplay programming, editor tooling, modular architecture, mobile optimization, grid system logic, and shipping a complete commercial game."
        ],
        videoUrl: "https://www.youtube.com/embed/__HjNVukScE",
        tags: ["Unity", "2D", "Grid System", "Hyper Casual"]
      },
      {
        id: 2,
        name: "City Cafe",
        type: "Casual Simulation Game",
        platform: "PC (itch.io)",
        tech: ["Unity", "C#"],
        systems: [
          "Customer flow with finite state machines",
          "Upgrade & progression systems",
          "Event-driven, decoupled architecture",
          "Optimized update loops",
          "Modular component design",
          "UI interactions & feedback"
        ],
        description: [
          "<a href = 'https://rishi-chauhan-0009.itch.io/city-cafe' target='_blank'>City Cafe</a> is a casual simulation game where players manage and grow a café through upgrades, progression, and customer interactions.",
          "I developed the project in Unity using C#, handling gameplay programming, system architecture, and overall polish.",
          "Key contributions include implementing core gameplay systems such as customer flow (using state machines), upgrades, progression, and UI interactions. I focused on clean, modular code to keep systems scalable and easy to maintain.",
          "One challenge was preventing gameplay systems from becoming tightly coupled as the project grew. I addressed this by refactoring logic into modular components and using event-driven communication. I also optimized update loops to improve performance and stability.",
          "This project strengthened my skills in Unity gameplay programming, clean architecture, and shipping a complete, playable game."
        ],
        videoUrl: "https://www.youtube.com/embed/JXnb3K1rgak",
        tags: ["Unity", "3D", "Simulation", "Cozy"]
      },
      {
        id: 3,
        name: "LinkIt",
        type: "Connect Puzzle Game",
        platform: "PC & Mobile (itch.io)",
        tech: ["Unity", "C#"],
        systems: [
          "Grid-based connect & chain reaction logic",
          "Unified input system (touch & keyboard)",
          "Optimized input handling & update loops",
          "Algorithmic chain-reaction resolution",
          "Smooth animations & player feedback"
        ],
        description: [
          "<a href = 'https://rishi-chauhan-0009.itch.io/linkit' target='_blank'>LinkIt</a> is a casual connect puzzle game inspired by match-3 mechanics, focused on clear rules, smooth interactions, and satisfying feedback.",
          "I built the game in Unity using C#, handling core gameplay programming and system implementation.",
          "I also focused on responsiveness and polish, optimizing input handling and update loops to ensure smooth gameplay even during complex chain reactions.",
          "Implemented a unified input system supporting both mobile (touch) and PC (keyboard) controls.",
          "This project helped me deepen my understanding of grid-based gameplay systems, algorithmic problem-solving, and writing maintainable gameplay code in Unity."
        ],
        videoUrl: "https://www.youtube.com/embed/1uFTC3YIFz0",
        tags: ["Unity", "2D", "Grid System", "Match 3 Type"]
      },
      {
        id: 4,
        name: "Echo Run",
        type: "Maze Puzzle Game",
        platform: "PC & Mobile (itch.io)",
        tech: ["Unity", "C#"],
        systems: [
          "Reset-based gameplay logic",
          "Player state management",
          "Maze navigation system",
          "Unified input system (touch & keyboard)",
          "Performance-conscious programming"
        ],
        description: [
          "<a href='https://rishi-chauhan-0009.itch.io/echo-run' target='_blank'>Echo Run</a> is a fast-paced maze puzzle game where the player must reach a portal within a limited number of resets.",
          "I developed the game in Unity using C#, focusing on gameplay programming and system implementation. Core systems include reset-based gameplay logic, player state management, maze navigation etc.",
          "I also implemented a unified input system supporting both mobile (touch) and PC (keyboard) controls.",
          "This project strengthened my skills in state management, performance-conscious gameplay programming, and designing systems that support speed-focused gameplay."
        ],
        videoUrl: "https://www.youtube.com/embed/r-APjz4nU2M",
        tags: ["Unity", "2D", "Puzzle", "Fast Paced"]
      }
    ]
  },
  experience: {
    badge: "Work Experience",
    heading: {
      line1: "Professional",
      line2: "Experience"
    },
    items: [
      {
        company: "Nilee Games",
        role: "Intern Unity Developer",
        period: "04/2026 - Present",
        location: "Mumbai",
        points: [
          "Developed and maintained motion-sensing games using Unity and C#, collaborating with Python developers for system integration.",
          "Performed game polishing and optimization to improve performance, stability, and overall player experience.",
          "Collaborated with designers and developers to implement features, resolve issues, and deliver project requirements."
        ]
      }
    ]
  },
  contact: {
    badge: "Get in Touch",
    heading: {
      line1: "Let's create something",
      line2: "amazing together."
    },  
    subtext: "I'm open to full-time roles, and studio opportunities in game development.",
    links: [
      {
        type: "email",
        label: "Email",
        value: "rishi05chauhanw@gmail.com",
        href: "mailto:rishi05chauhanw@gmail.com"
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/rishichauhan",
        href: "https://www.linkedin.com/in/rishi-chauhan-a5732635b"
      }
    ]
  },
  footer: {
    name: "Rishi Chauhan",
    role: "Unity Game Developer",
    year: "2026",
    links: [
      { label: "GitHub",   href: "https://github.com/RishiChauhan09",                  external: true  },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rishi-chauhan-a5732635b",external: true  },
      { label: "Resume",   href: "OtherFiles/RishiResume.pdf", download: "Rishi_Chauhan_Resume.pdf" }
    ]
  }
};
