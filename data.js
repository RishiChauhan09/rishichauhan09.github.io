const portfolioData = {
  profile: {
    initials: "RC",
    name: "Rishi Chauhan",
    title: "Unity Game Developer"
  },
  headerLinks: [
    { label: "GitHub",      href: "https://github.com/RishiChauhan09",                      external: true  },
    { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/rishi-chauhan-a5732635b",     external: true  },
    { label: "📄 Resume",   href: "OtherFiles/RishiResume.pdf", download: "Rishi_Chauhan_Resume.pdf" }
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
    name: "Arrow Flux",
    tagline: "A grid-based mobile puzzle game — published on Google Play.",
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
        description: "A strategic casual puzzle game where players clear directional arrows from a grid, built with modular level progression and custom editor tools.",
        moreInfo: "Features 300+ procedural levels generated with custom Unity editor tools, Firebase analytics, AdMob rewarded ads, and scalable architecture.",
        videoUrl: "https://www.youtube.com/embed/__HjNVukScE",
        link: "https://play.google.com/store/apps/details?id=com.gappedgames.arrowescape"
      },
      {
        id: 2,
        name: "City Cafe",
        type: "Casual Simulation Game",
        platform: "PC (itch.io)",
        tech: ["Unity", "C#"],
        description: "A cozy cafe management simulation featuring finite state machine customer flows, modular progression, and event-driven architecture.",
        moreInfo: "Includes finite state machine customer simulation, event-driven decoupling, upgrade systems, and optimized frame update loops.",
        videoUrl: "https://www.youtube.com/embed/JXnb3K1rgak",
        link: "https://rishi-chauhan-0009.itch.io/city-cafe"
      },
      {
        id: 3,
        name: "LinkIt",
        type: "Connect Puzzle Game",
        platform: "PC & Mobile (itch.io)",
        tech: ["Unity", "C#"],
        description: "A match-style connect puzzle game built with algorithmic chain reaction resolution, grid mechanics, and unified touch/keyboard controls.",
        moreInfo: "Implements recursive chain reaction algorithms, unified mobile & PC input handling, and responsive game feel polish.",
        videoUrl: "https://www.youtube.com/embed/1uFTC3YIFz0",
        link: "https://rishi-chauhan-0009.itch.io/linkit"
      },
      {
        id: 4,
        name: "Echo Run",
        type: "Maze Puzzle Game",
        platform: "PC & Mobile (itch.io)",
        tech: ["Unity", "C#"],
        description: "A fast-paced maze puzzle game centered around reset-based navigation, tight player state management, and optimized gameplay loops.",
        moreInfo: "Designed with reset-based maze navigation logic, speedrun state management, and performance-conscious C# gameplay programming.",
        videoUrl: "https://www.youtube.com/embed/r-APjz4nU2M",
        link: "https://rishi-chauhan-0009.itch.io/echo-run"
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
