const portfolioData = {
  profile: {
    initials: "RC",
    name: "Rishi Chauhan",
    title: "Unity Game Developer"
  },
  navigation: [
    { id: "about", label: "About" },
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
      "I'm a Unity game developer focused on building complete, playable games with solid mechanics and clear player feedback.",
      "I'm a fresher who has created multiple small games from concept to completion, working primarily in Unity with C#. I care about clean structure, readable code, and gameplay systems that feel good to play.",
      "I'm always open to discussing game development, Unity projects, and new opportunities to grow as a developer."
    ],
    resumeButton: "Download Resume",
    resumePath: "OtherFiles/RishiResume.pdf",
    githubButton: "View GitHub",
    githubUrl: "https://github.com/RishiChauhan09"
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
        id: 2,
        name: "LinkIt",
        description: [
          "<a href = 'https://rishi-chauhan-0009.itch.io/linkit' target='_blank'>LinkIt</a> is a casual connect puzzle game inspired by match-3 mechanics, focused on clear rules, smooth interactions, and satisfying feedback.",
          "I built the game in Unity using C#, handling core gameplay programming and system implementation. This included grid management, connection logic, match detection, and scoring systems.",
          "I also focused on responsiveness and polish, optimizing input handling and update loops to ensure smooth gameplay even during complex chain reactions.",
          "Implemented a unified input system supporting both mobile (touch) and PC (keyboard) controls.",
          "This project helped me deepen my understanding of grid-based gameplay systems, algorithmic problem-solving, and writing maintainable gameplay code in Unity."
        ],
        videoUrl: "https://www.youtube.com/embed/1uFTC3YIFz0",
        tags: ["Unity", "2D", "Grid System", "Match 3 Type"]
      },
      {
        id: 3,
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
        value: "rishi05chauhan@gmail.com",
        href: "mailto:rishi05chauhan@gmail.com"
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
