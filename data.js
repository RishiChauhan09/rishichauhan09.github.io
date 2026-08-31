const portfolioData = {
  profile: {
    initials: "RC",
    name: "Rishi Chauhan",
    title: "Unity Game Developer"
  },
  navigation: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ],
  about: {
    badge: "About Me",
    heading: {
      line1: "Rishi Chauhan",
      line2: "Game Programmer Portfolio"
    },
    image: "OtherFiles/MyImage.png",
    paragraphs: [
      "I'm a Unity Game Developer specializing in C# and gameplay programming, with hands-on experience developing and polishing multiple games from concept to completion. One of my games, Arrow Flux, is published on the Google Play Store.",
      "I focus on building clean, scalable gameplay systems, optimizing performance, and creating polished player experiences. I'm passionate about game development and continuously improving my skills through new projects and challenges."
    ],
    resumeButton: "Download Resume",
    resumePath: "OtherFiles/RishiResume.pdf",
    githubButton: "View GitHub",
    githubUrl: "https://github.com/RishiChauhan09"
  },
  skills: {
    badge: "Expertise",
    heading: {
      line1: "Skills &",
      line2: "Capabilities"
    },
    items: [
      "Unity",
      "C#, Java, C++, C, Python",
      "Object Oriented Programming",
      "SOLID Principles",
      "Design Patterns (FSMs, Observer, Builder)",
      "Performance Optimization",
      "Porfiling",
      "Frame Debugger",
      "Unity Editor Tools",
      "UI Toolkit",
      "And other 3rd party packages (Unity IAP, Firebase, AdMob, Google Play Games Services)"
    ]
  },
  projects: {
    badge: "Portfolio",
    heading: {
      line1: "Featured",
      line2: "Projects"
    },
    items: [
      {
        id: 1,
        name: "Arrow Flux",
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
  }
};
